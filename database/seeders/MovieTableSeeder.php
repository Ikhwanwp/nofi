<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Avatar 2',
                'slug' => 'avatar-2',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=NZrX_ES93JA',
                'thumbnail' => 'https://m5.gs/Rk0yeH',
                'rating' => 9.9,
                'is_featured' => 1,
            ],
            [
                'name' => 'One Piece Film Red',
                'slug' => 'one-piece-film-red',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=89JWRYEIG-s',
                'thumbnail' => 'https://m5.gs/S0ZEM1',
                'rating' => 9.5,
                'is_featured' => 0,

            ],
            [
                'name' => 'Jujutsu No Kaisen 0',
                'slug' => 'jujutsu-no-kaisen-movie',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=UPRqnFnnrr8',
                'thumbnail' => 'https://m5.gs/WXFMQ0',
                'rating' => 9.0,
                'is_featured' => 0,

            ],

        ];

        Movie::insert($movies);
    }
}
