<?php

namespace App\Http\Controllers;

use App\Models\Mempelai;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MempelaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil semua data mempelai
        $mempelai = Mempelai::all();
        return response()->json($mempelai);
    }

    public function create()
    {
        return Inertia::render('Mempelai/Create');
    }

    public function edit()
    {
        return Inertia::render('Mempelai/Edit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data
        $validated = $request->validate([
            'jenis_kelamin' => 'required|string',
            'nama_lengkap' => 'required|string|max:255',
            'nama_panggilan' => 'nullable|string|max:255',
            'nama_ayah' => 'required|string|max:255',
            'nama_ibu' => 'required|string|max:255',
            'alamat' => 'nullable|string',
            'link_instagram' => 'nullable|string',
            'link_facebook' => 'nullable|string',
            'link_twitter' => 'nullable|string',
            'link_tiktok' => 'nullable|string',
        ]);

        // Simpan data mempelai
        $mempelai = Mempelai::create($validated);

        return response()->json(['message' => 'Data berhasil disimpan', 'data' => $mempelai]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Ambil data mempelai berdasarkan ID
        $mempelai = Mempelai::findOrFail($id);
        return response()->json($mempelai);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validasi data
        $validated = $request->validate([
            'jenis_kelamin' => 'required|string',
            'nama_lengkap' => 'required|string|max:255',
            'nama_panggilan' => 'required|string|max:255',
            'nama_ayah' => 'required|string|max:255',
            'nama_ibu' => 'required|string|max:255',
            'alamat' => 'nullable|string',
            'link_instagram' => 'nullable|string',
            'link_facebook' => 'nullable|string',
            'link_twitter' => 'nullable|string',
            'link_tiktok' => 'nullable|string',
        ]);

        // Update data mempelai
        $mempelai = Mempelai::findOrFail($id);
        $mempelai->update($validated);

        return response()->json(['message' => 'Data berhasil diperbarui', 'data' => $mempelai]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Hapus data mempelai
        $mempelai = Mempelai::findOrFail($id);
        $mempelai->delete();

        return response()->json(['message' => 'Data berhasil dihapus']);
    }
}
