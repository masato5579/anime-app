<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $check = $this->input('check');

        $emailAndPasswordCheck = $check
            ? [
                'email' => 'required|email:strict,dns|max:255',
                'password' => Password::min(8)->required(), // 8文字以上で必須項目
            ] : [];

        return array_merge([

        ], $emailAndPasswordCheck);
    }

    /**
     * @return array<string, string>
     */
    public function attributes()
    {
        return [
            'email' => 'emailが不正です。',
            'password' => 'passwordが不正です。'
        ];
    }
}
