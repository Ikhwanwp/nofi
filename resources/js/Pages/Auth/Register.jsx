import React, { useEffect } from 'react';
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from '@/Components/InputError';   
import PrimaryButton from "@/Components/PrimaryButton";
import {Link, Head, useForm} from "@inertiajs/inertia-react";

export default function Register() {
    // Bawaan Inertia untuk melakukan request
    // data -> menghasilkan return dari api
    // setData -> dari frontend untuk mempersiapkan data
    // post -> method api yang digunakan
    // processing -> merupakan boolean yang menunjukkan proses sedang berjalan atau tidak
    // errors -> pengembalian dari api jika terjadi error
    const { data, setData, post, processing, errors, reset } = useForm({
        // Data dari setData
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        post(route('register'));
    };

  return (
    <>
        <Head title="Sign Up"/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt=""/>
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                        <InputError errors={errors}/>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            {/* Name */}
                            <div>
                                <InputLabel forInput="name" value="Name"/>
                                <TextInput type="text" name="name" value={data.name}
                                    placeholder="Your fullname..." isFocused={true}
                                    handleChange={onHandleChange}
                                    required />
                            </div>
                            {/* Email */}
                            <div>
                                <InputLabel forInput="email" value="Email"/>
                                <TextInput type="email" name="email" value={data.email}
                                    placeholder="Your Email Address" handleChange={onHandleChange}
                                    required/>
                                <InputError message={errors.email} className="mt-2" />
                                
                            </div>
                            {/* Passowrd */}
                            <div>
                                <InputLabel forInput="password" value="Password"/>
                                <TextInput type="password" name="password" value={data.password}
                                    placeholder="Your Password" handleChange={onHandleChange}
                                    required/>
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            {/*  */}
                            <div>
                                <InputLabel forInput="password_confirmation" value="Confirm Password"/>
                                <TextInput type="password" name="password_confirmation" value={data.password_confirmation}
                                    placeholder="Your Password" handleChange={onHandleChange}
                                    required/>
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton children="Sign Up" variant="primary" type="submit" processing={processing}/>
                            <Link href={route('login')}>
                                <PrimaryButton children="Sign In to My Account" variant="light-outline" type="button"/>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
