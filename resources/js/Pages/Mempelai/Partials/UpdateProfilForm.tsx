import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Input } from '@/components/ui/input';
import { Transition } from '@headlessui/react';
import { router, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

export default function UpdateProfilForm({
    className = '',
}: {
    className?: string;
}) {
    const fotoProfilInput = useRef<HTMLInputElement>(null);
    const jenisKelaminInput = useRef<HTMLInputElement>(null);
    const namaLengkapInput = useRef<HTMLInputElement>(null);
    const namaPanggilanInput = useRef<HTMLInputElement>(null);
    const namaAyahInput = useRef<HTMLInputElement>(null);
    const namaIbuInput = useRef<HTMLInputElement>(null);
    const alamatInput = useRef<HTMLInputElement>(null);
    const infoLainInput = useRef<HTMLInputElement>(null);
    const linkInstagramInput = useRef<HTMLInputElement>(null);
    const linkFacebookInput = useRef<HTMLInputElement>(null);
    const linkTwitterInput = useRef<HTMLInputElement>(null);
    const linkTiktokInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        setError,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        foto_profil: '',
        jenis_kelamin: '',
        nama_lengkap: '',
        nama_panggilan: '',
        nama_ayah: '',
        nama_ibu: '',
        alamat: '',
        info_lain: '',
        link_instagram: '',
        link_facebook: '',
        link_twitter: '',
        link_tiktok: '',
    });

    const handleSubmitForm: FormEventHandler = (e) => {
        e.preventDefault();
        router.post('/mempelai', data, {
            preserveScroll: true,
            onSuccess: () => reset(),
          });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Ubah Profil Mempelai
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Silakan isi informasi mempelai pada form dibawah ini:
                </p>
            </header>

            <form onSubmit={handleSubmitForm} className="mt-6 space-y-6">

            <div>
                    <InputLabel htmlFor="jenis_kelamin" value="Mempelai" />

                    <div className="mt-1">
                        <label htmlFor="mempelai_pria" className="mr-2">
                            <TextInput
                                id="mempelai_pria"
                                name="jenis_kelamin"
                                value="Pria"
                                onChange={(e) => setData('jenis_kelamin', e.target.value)}
                                type="radio"
                                className="mr-1"
                                autoComplete="off"
                            />
                            Pria    
                        </label>
                        <label htmlFor="mempelai_wanita">
                            <TextInput
                                id="mempelai_wanita"
                                name="jenis_kelamin"
                                value="Wanita"
                                onChange={(e) => setData('jenis_kelamin', e.target.value)}
                                type="radio"
                                className="mr-1"
                                autoComplete="off"
                            />
                            Wanita
                        </label>
                    </div>

                    <InputError message={errors.jenis_kelamin} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="foto_profil"
                        value="Foto Profil"
                    />

                    <Input
                        id="foto_profil"
                        ref={fotoProfilInput}
                        value={data.foto_profil}
                        onChange={(e) =>
                            setData('foto_profil', e.target.value)
                        }
                        type="file"
                        className="mt-1 block w-full"
                        autoComplete="foto-profil"
                    />

                    <InputError
                        message={errors.foto_profil}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="nama_lengkap"
                        value="Nama Lengkap"
                    />

                    <TextInput
                        id="nama_lengkap"
                        ref={namaLengkapInput}
                        value={data.nama_lengkap}
                        onChange={(e) =>
                            setData('nama_lengkap', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="nama-lengkap"
                    />

                    <InputError
                        message={errors.nama_lengkap}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="nama_panggilan"
                        value="Nama Panggilan"
                    />

                    <TextInput
                        id="nama_panggilan"
                        ref={namaPanggilanInput}
                        value={data.nama_panggilan}
                        onChange={(e) =>
                            setData('nama_panggilan', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="nama-panggilan"
                    />

                    <InputError
                        message={errors.nama_panggilan}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="nama_ayah"
                        value="Nama Ayah"
                    />

                    <TextInput
                        id="nama_ayah"
                        ref={namaAyahInput}
                        value={data.nama_ayah}
                        onChange={(e) =>
                            setData('nama_ayah', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="nama-ayah"
                    />

                    <InputError
                        message={errors.nama_ayah}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="nama_ibu"
                        value="Nama Ibu"
                    />

                    <TextInput
                        id="nama_ibu"
                        ref={namaIbuInput}
                        value={data.nama_ibu}
                        onChange={(e) =>
                            setData('nama_ibu', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="nama-ibu"
                    />

                    <InputError
                        message={errors.nama_ibu}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="alamat"
                        value="Alamat"
                    />

                    <TextInput
                        id="alamat"
                        ref={alamatInput}
                        value={data.alamat}
                        onChange={(e) =>
                            setData('alamat', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="alamat"
                    />

                    <InputError
                        message={errors.alamat}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="info_lain"
                        value="Informasi Lain"
                    />

                    <TextInput
                        id="info_lain"
                        ref={infoLainInput}
                        value={data.info_lain}
                        onChange={(e) =>
                            setData('info_lain', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="info_lain"
                    />

                    <InputError
                        message={errors.info_lain}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="link_instagram"
                        value="Link Instagram"
                    />

                    <TextInput
                        id="link_instagram"
                        ref={linkInstagramInput}
                        value={data.link_instagram}
                        onChange={(e) =>
                            setData('link_instagram', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="link_instagram"
                    />

                    <InputError
                        message={errors.link_instagram}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="link_facebook"
                        value="Link Facebook"
                    />

                    <TextInput
                        id="link_facebook"
                        ref={linkFacebookInput}
                        value={data.link_facebook}
                        onChange={(e) =>
                            setData('link_facebook', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="link_facebook"
                    />

                    <InputError
                        message={errors.link_facebook}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="link_tiktok"
                        value="Link Tiktok"
                    />

                    <TextInput
                        id="link_tiktok"
                        ref={linkTiktokInput}
                        value={data.link_tiktok}
                        onChange={(e) =>
                            setData('link_tiktok', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="link_tiktok"
                    />

                    <InputError
                        message={errors.link_tiktok}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="link_twitter"
                        value="Link X"
                    />

                    <TextInput
                        id="link_twitter"
                        ref={linkTwitterInput}
                        value={data.link_twitter}
                        onChange={(e) =>
                            setData('link_twitter', e.target.value)
                        }
                        type="text"
                        className="mt-1 block w-full"
                        autoComplete="link_twitter"
                    />

                    <InputError
                        message={errors.link_twitter}
                        className="mt-2"
                    />
                </div>



                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing} type='submit'>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
function setError(arg0: { foo: string; bar: string; }) {
    throw new Error('Function not implemented.');
}

