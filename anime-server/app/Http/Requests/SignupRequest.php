<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
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
        $check = $this->input('emailAndPassCheck');

        $commonInput = [
            'email' => ['required','email:strict,dns','max:255',Rule::unique('m_user')],
            'password' => Password::min(8)->required(),
        ];

        $profileInput = [
            'name'  => 'required|string|max:255',
            'age'   => 'nullable|integer',
            'sex'   => 'nullable|integer',
            'image.name' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image.size' => 'nullable|numeric|max:2048',
        ];

        return $check
            ? $commonInput
            : array_merge($commonInput, $profileInput);
    }
}
