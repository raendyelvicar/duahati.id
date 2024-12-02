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
        Schema::create('profiles', function (Blueprint $table) {
            $table->bigInteger('profile_id')->nullable(false);
            $table->string('nama_lengkap')->nullable(false);
            $table->enum('jenis_kelamin', ['Pria', 'Wanita'])->nullable(false);
            $table->string('nama_panggilan')->nullable(false);
            $table->string('nama_ayah')->nullable(false);
            $table->string('nama_ibu')->nullable(false);
            $table->string('alamat')->nullable(true);
            $table->string('info_lain')->nullable(true);
            $table->string('link_instagram')->nullable(true);
            $table->string('link_facebook')->nullable(true);
            $table->string('link_twitter')->nullable(true);
            $table->string('link_tiktok')->nullable(true);
            $table->foreignId('user_id');
            $table->foreignId('file_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
