import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbok";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { FaKey, FaUser } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };
  return (
    <div className="auth min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-center mb-2">
                SignUp to <span className="text-cyan-400"> Chat</span>
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={handleSubmit}>
                  <label className="input input-bordered input-info flex items-center gap-2 mb-3">
                    <BiSolidUserDetail className="h-6 w-6 opacity-70" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="FullName"
                      value={inputs.fullName}
                      onChange={(e) =>
                        setInputs({ ...inputs, fullName: e.target.value })
                      }
                    />
                  </label>
                  <label className="input input-bordered input-info flex items-center gap-2 mb-3">
                    <FaUser className="h-4 w-4 opacity-70" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                      value={inputs.username}
                      onChange={(e) =>
                        setInputs({ ...inputs, username: e.target.value })
                      }
                    />
                  </label>
                  <label className="input input-bordered input-info flex items-center gap-2 mb-3">
                    <FaKey className="h-4 w-4 opacity-70" />
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                      value={inputs.password}
                      onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                      }
                    />
                  </label>
                  <label className="input input-bordered input-info flex items-center gap-2 mb-3">
                    <FaKey className="h-4 w-4 opacity-70" />
                    <input
                      type="password"
                      className="grow"
                      placeholder="Confirm Password"
                      value={inputs.confirmPassword}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </label>
                  <GenderCheckbox
                    onCheckboxChange={handleCheckboxChange}
                    selectedGender={inputs.gender}
                  />
                  <div className="relative">
                    <button
                      className="bg-cyan-500 text-white rounded-md btn btn-block btn-md mt-3"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </div>
                </form>
                <Link
                  to="/login"
                  className="text-sm hover:font-bold hover:underline hover:text-sky-500 mt-4 inline-block"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
