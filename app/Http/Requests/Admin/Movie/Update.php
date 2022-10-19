<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // Hanya user yang memiliki role admin yang dapat melakukan request
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // supaya data yang diupdate tidak dianggap duplikat
            'name' => 'nullable|unique:movies,name,' . $this->movie->id,
            'category' => 'nullable',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean'
        ];
    }
}
