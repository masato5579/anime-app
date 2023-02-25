<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    /**
     * post
     * @param RegisterRequest $request
     */
    public function signupCheck(SignupRequest $request)
    {
        return response()->json([
            'confirmed' => true,
        ], 200);
    }

    /**
     * post
     * @param RegisterRequest $request
     */
    public function signup(SignupRequest $request)
    {
        $input = $request->only([
            'email',
            'name',
            'age',
            'sex',
        ]);

        $path = $request->hasFile('image')
            ? $request->file('image')->store('profile', 'public')
            : null;

        $user = User::create([
            ...$input,
            'password' => Hash::make($request->password),
            'image' => $path,
        ]);

        Auth::login($user);
        return response()->json($user, 200);
    }
}
