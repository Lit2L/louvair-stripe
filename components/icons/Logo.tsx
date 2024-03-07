import Image from 'next/image'
import LouvairLogo from '../../public/assets/LogoWhite.png'

const Logo = ({ ...props }) => (
  <Image
    src={LouvairLogo}
    alt='Louvair Logo'
    height={100}
    width={100}
    {...props}
  />
)

export default Logo
