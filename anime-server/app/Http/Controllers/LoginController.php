<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * post
     * @param LoginRequest $request
     */
    public function login(LoginRequest $request)
    {
        $input = $request->only([
            'email',
            'password',
        ]);

        if (Auth::attempt($input)) {
            $request->session()->regenerate();
            return response()->json(Auth::user());
        }

        return response()->json([], 401);
    }
}
