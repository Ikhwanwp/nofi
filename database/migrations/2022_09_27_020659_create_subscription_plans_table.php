<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedInteger('price');
            $table->unsignedSmallInteger('active_period_in_month');
            $table->json('feature');
            $table->timestamps();
            $table->softDeletes();
            // Kapan penggunaan softdelete -> digunakan ketika berpengaruh besar ke sistem. disini dipake karena mengandung relasi ke tabel transaksi
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscription_plans');
    }
};
