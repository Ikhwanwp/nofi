<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getIsActiveAttribute()
    {
        // Kondisi Jika tidak ada
        if (!$this->LastActiveUserSubscription) {
            return false;
        }
        // Ambil tanggal sekarang
        $dateNow = Carbon::now();
        // didapatkan dari relasi user -> user_supcription -> subscription_plan
        $dateExpired = Carbon::create($this->LastActiveUserSubscription->expired_date);
        // Kondisi kalau tanggal sekarang kurang dari = expired berarti masih aktif
        return $dateNow->lessThanOrEqualTo($dateExpired);
    }

    /**
     * Get the LastActiveUserSubscription associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function LastActiveUserSubscription(): HasOne
    {
        return $this->hasOne(UserSubscription::class)->wherePaymentStatus('paid')->latest();
    }
}
