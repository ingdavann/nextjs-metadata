import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "About Us",
  description: "This is about us page",
  keywords: ["hometown", "technology", "traveller", "guitar"],
  icons: "/asset/image/logo.png",
  openGraph: {
    title: "Product",
    description: "This is Davann's life",
    images: ["https://image.cnbcfm.com/api/v1/image/106857488-16164350972021-03-22t172150z_1971118209_rc2hgm9cxd3j_rtrmadp_0_usa-stocks-tesla.jpeg?v=1688314403&w=1920&h=1080"]
  }
};
const page = () => {
  return (
    <section className="pt-10 overflow-hidden dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                  <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">សួស្តី 👋 I
                      ខ្ញុំគឺ
                      <br className="block sm:hidden" /> ដាវ៉ាន់
                  </h2>
                  <p className="max-w-lg mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                  ខ្ញុំចូលចិត្តបញ្ចេញមតិរបស់ខ្ញុំដោយការសរសេរជាចងក្រងជាឯកសារ និងផលិតជាវីឌីអូ។ ការធ្វើបែបនេះវាបានធ្វើអោយខ្ញុំទទួលបាននូវបទពិសោធន៍ថ្មី ដូចជាការគ្រប់គ្រងពេលវេលាទៅលើការងារ ការបង្រៀនបែបឌីជីថល និងជារំលឹកកម្មរបស់ខ្ញុំផងដែរ។ លើសពីនេះទៅទៀតវាជាការល្អក្នុងការចែករំលែកចំណេះដឹងរបស់ខ្ញុំទៅកាន់អ្នកដ៏ទៃតាមរយៈវិធីនេះផងដែរ។
                  </p>
              </div>

              <div className="relative">
                  <img className="absolute bottom-48 -mb-48 -translate-x-1/2 left-1/2 w-[500px] h-[300px]" src="https://static.vecteezy.com/system/resources/thumbnails/009/343/816/small_2x/abstract-spot-with-gradient-free-png.png" alt="" />
                  <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/asset/image/me.png" alt="" />
              </div>

          </div>
      </div>
    </section>
  )
}

export default page
