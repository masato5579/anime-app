<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

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
            return response()->json(Auth::user(), Response::HTTP_OK);
        }

        return response()->json('User Not Found.', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
