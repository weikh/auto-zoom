import React from "react";
import FormInput from "../../components/FormElements/input/FormInput";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useLoginMutation } from "../../services/auth.service";
import authStore from "../../store/auth.store";

const Login = () => {
  const form = useForm();

  const { mutate: authLogin } = useLoginMutation({
    onSuccess: (res) => {
      authStore.login(res);
    },
  });

  const onSubmit = (values) => {
    authLogin(values); // Formadan kelgan qiymatlar
  };

  return (
    <div className="w-[330px] h-[330px] py-16 flex flex-col gap-5 px-5 border border-black rounded-xl shadow-2xl">
      <FormInput
        control={form.control}
        inputLeftElement={<CiUser />}
        name="phone_number"
        placeholder="Phone Number"
      />
      <FormInput
        control={form.control}
        inputLeftElement={<RiLockPasswordLine />}
        name="password"
        placeholder="Password"
      />
      <button
        className="min-h-[50px] mt-[45px] text-white rounded-lg bg-[#2f4574]"
        type="submit" // Formani yuborish
        onClick={form.handleSubmit(onSubmit)} // Formani yuborish va onSubmit ga o'tish
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
