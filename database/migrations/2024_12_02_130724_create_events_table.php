<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigInteger('event_id')->nullable(false);
            $table->string('judul')->nullable(false);
            $table->date('tanggal')->nullable(false);
            $table->time('jam_mulai')->nullable(false);
            $table->time('jam_selesai')->nullable(false);
            $table->enum('zona_waktu', ['WIB', 'WIT', 'WITA'])->nullable(false);
            $table->string('lokasi')->nullable(true);
            $table->longText('alamat_lengkap')->nullable(true);
            $table->string('link_lokasi')->nullable(true);
            $table->boolean('is_acara_utama')->nullable(true);
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
