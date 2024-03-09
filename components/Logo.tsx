import Image from 'next/image'
import Louvair from '../public/assets/LogoWhite.png'
import { AiOutlineMenu } from 'react-icons/ai'

const Logo = () => {
  return (
    <div className='flex items-center gap-3 bg-transparent text-neutral-900 hover:cursor-pointer ease-in-out  w-96 duration-300 transition-all hover:text-red-900'>
      <Image src={Louvair} alt='Louvair Logo' width={40} height={40} />
      <span className='text-xs'>MENU</span>
      <AiOutlineMenu size={25} />
    </div>
  )
}
