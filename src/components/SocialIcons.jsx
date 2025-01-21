import React from 'react'
import Image from 'next/image'

const SocialIcons = () => {
  return (
    <>
              {/*Social Media Icons*/}
              <div className="flex justify-center gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8 xl:mt-9">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/icons/fb.svg"}
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/icons/twitter.svg"}
                    alt="Twitter"
                    width={32}
                    height={32}
                    className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/icons/instagram.svg"}
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/icons/linkedin.svg"}
                    alt="Linkedin"
                    width={32}
                    height={32}
                    className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
                  />
                </a>
          </div>
      </>
  )
}

export default SocialIcons