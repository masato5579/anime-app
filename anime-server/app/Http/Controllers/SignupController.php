<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    /**
     * post
     * @param RegisterRequest $request
     */
    public function signupCheck(SignupRequest $request)
    {
        return response()->json(['confirmed' => true]);
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

        User::create([
            ...$input,
            'password' => Hash::make($request->password),
            'image' => $path,
        ]);

        return response()->json(['confirmed' => true]);
    }
}
