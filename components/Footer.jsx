
import {CopyrightIcon} from 'lucide-react'
export default function Footer() {
  const helpLinks = ["Help Center", "Help Forum", "Video Tutorials"];
  const devLinks = ["Blogger API", "Developer Forum"];
  const terms = ["Terms of Service", "Privacy", "Content Policy"];
 const year = new Date().getFullYear()

 
  return (

    <div className="w-full h-[44vh] flex flex-col items-center justify-center gap-12 bg-[#1d2b34] text-white text-lg">
      {/* links */}
      <div className="flex gap-40 w-[80%]">
        <div>
          <p className="text-xl mb-6 font-semibold">Help</p>
          <ul className="">
            {helpLinks.map((helpLink, i) => (
              <li
                key={i}
                className="text-lg pb-1">
                {helpLink}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl mb-6 font-semibold">Community</p>
          <p className="text-lg ">Community</p>
        </div>

        <div>
          <p className="text-xl mb-6 font-semibold">Developers</p>
          <ul className="">
            {devLinks.map((devLink, i) => (
              <li
                key={i}
                className="text-lg pb-1">
                {devLink}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="w-[80%] h-px bg-[#2f4857] "></span>

      {/* Terms Section */}
      <div className="flex justify-between w-[80%] gap-10 mx-auto">
        <ul className="w-full flex self-start gap-10">
          {terms.map((term, i) => (
            <li
              key={i}
              className="text-lg">
              {term}
            </li>
          ))}
        </ul>

        <form>
          <select className="pl-3 pr-30 py-2 text-black rounded-sm bg-white/10">
            <option value="">English</option>
             <option value="">French</option>
              <option value="">Twi</option>
               <option value="">India</option>
                <option value="">Arabic</option>
                 <option value="">Chinese</option>
                  <option value="">IGBO</option>
          </select>
        </form>
      </div>
        <div className='w-full flex justify-center  text-sm'>
          <span className='flex'>
          {` ${new Date().getFullYear()} ©  by Lamar Dev`}
          </span>
          <hr />
        </div>
    </div>
    )
  ;
}
