<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;

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
            'password',
            'image',
            'name',
            'age',
            'sex',
        ]);

        return response()->json(['confirmed' => true]);
    }
}
