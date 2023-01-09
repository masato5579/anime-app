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
        return response()->json('success');
    }
}
