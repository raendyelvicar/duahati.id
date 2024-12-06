<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mempelai extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mempelai';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'mempelai_id';
    public $incrementing = true;
    protected $keyType = 'int';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'jenis_kelamin',
                            'nama_lengkap',
                            'nama_panggilan',
                            'nama_ayah',
                            'nama_ibu',
                            'alamat',
                            'informasi_lain',
                            'link_instagram',
                            'link_facebook',
                            'link_twitter',
                            'link_tiktok',
                        ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [ 'mempelai_id' ];
}
