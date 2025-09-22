'use client'
import { Modal, ModalContent, Button, useDisclosure, } from "@heroui/react";
import Image from "next/image";


const LoginModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <>
      <Button className="w-fit p-2.5 border-[1px] border-white hover:border-black font-normal text-[16px] md:text-[18px] leading-[21.78px] md:leading-[24.78px] text-[#ffff] hover:text-black bg-black hover:bg-[#ffff] transform transition-all duration-300 rounded-[8px] text-center cursor-pointer" onPress={onOpen}>
        Login
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent style={{ width: "80%", maxWidth: "646px" }}>
          {(onClose) => (
            <>
              <div className="bg-[#000000] p-[28px]">
                <div className="flex flex-col gap-[28px] md:gap-[42px] lg:gap-[49px] xl:gap-[55px]">
                  <div className="flex flex-col gap-[26px] md:gap-[32px]">
                    <div className="flex flex-col gap-[6px] md:gap-[8px] lg:gap-[12px]">
                      <h3 className="text-[#FFFFFF] text-[28px] md:text-[33px] lg:text-[38px] xl:text-[40px] font-bold leading-[35px] md:leading-[44px] lg:leading-[49px] xl:leading-[54px] capitalize">
                        Log in or sign up to Continue
                      </h3>
                      <p className="text-[#FFFFFF] text-[18px] md:text-[20px] leading-[20px] md:leading-[27px] font-normal">
                        Enter your credentials to access the account
                      </p>
                    </div>

                    <div className="flex flex-col gap-[14px] md:gap-[18px] lg:gap-[22px]">
                      <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[18px]">
                          <button className="flex flex-row gap-[6px] border-[1px] text-[#FFFFFF] text-[18px] font-normal leading-[21.47px] hover:bg-[#ffff] hover:text-[black] border-[#CECCCC] rounded-[43px] px-[22px] py-2.5 items-center transition-all duration-500 ease-in-out hover:shadow-md">
                            <Image
                              src="/Signup-GoogleLogo.svg"
                              alt="Image"
                              width={27}
                              height={27}
                            />
                            <p>Log in with Google</p>
                          </button>
                          <button
                            className="flex flex-row gap-[6px] border-[1px] text-[#FFFFFF] text-[18px] font-normal leading-[21.47px] hover:bg-[#ffff] hover:text-[black] border-[#CECCCC] rounded-[43px] px-[22px] py-2.5 items-center transition-all duration-300 ease-in-out hover:shadow-md group"
                          >
                            <Image
                              src="/Signup-AppleLogo.svg"
                              alt="Image"
                              width={27}
                              height={27}
                              className="transition-all duration-300 group-hover:opacity-100 group-hover:invert"
                            />
                            <p className="">Log in with Apple</p>
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[10px] md:gap-[18px] lg:gap-[22px]">
                        <div className="flex items-center">
                          <div className="flex-grow border-[1px] border-[#CECCCC]"></div>
                          <span className="px-3 text-[#CECCCC]">Or</span>
                          <div className="flex-grow border-[1px] border-[#CECCCC]"></div>
                        </div>

                        <div className="flex flex-col gap-[8px]">
                          <label htmlFor="email" className="text-[#FFFFFF] text-[16px] font-normal">
                            Email
                          </label>
                          <input
                            placeholder="Email"
                            className="w-full p-2.5 border-[1px] bg-[#FFFFFF] border-[#CECCCC] font-normal text-[16px] leading-[21.6px] text-[#626262] placeholder:text-[#626262] focus:outline-none rounded-[8px]"
                          />
                        </div>
                      </div>


                    </div>
                  </div>

                  <div className="">
                    <button className="text-[#000000] hover:text-[#FFFFFF] w-full text-[16px] font-medium leading-[24.3px] border-[1px] border-[#ffff] bg-[#FEFEFE] hover:bg-[#000000] rounded-[53px] py-3 transform transition-all duration-300 text-center">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
