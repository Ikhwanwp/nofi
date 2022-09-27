<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_month' => 3,
                'feature' => json_encode(['feature1', 'feature2'])
            ],
            [
                'name' => 'Premium',
                'price' => 400000,
                'active_period_in_month' => 6,
                'feature' => json_encode(['feature1', 'feature2', 'feature3', 'feature4'])
            ]
        ];

        // Input ke dalam table
        SubscriptionPlan::insert($subscriptionPlans);
    }
}
