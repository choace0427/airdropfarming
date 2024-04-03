import { IconFileSearch } from '@tabler/icons-react';

export default function Hero() {
  return (
    <div className='flex md:mt-0 mt-10'>
      <div className='w-full my-auto px-10'>
        <p className='text-white font-extrabold text-[40px]'>
          The absolute portal
          <br />
          for automated airdrop farming.
        </p>
        <p className='text-[#AECBEB] mt-2'>
          A convergence between automation and airdrop farming:
          <br />
          The all in one automated airdrop farming service with major airdrop support.
        </p>
        <div className='flex items-center gap-10 mt-5'>
          <p className='text-white underline text-[14px] flex items-center gap-2'>View Documentation</p>
          <p className='text-white underline text-[14px] flex items-center gap-2'>
            <IconFileSearch size={'1rem'} />
            Explore Airdrop Farming
          </p>
        </div>
      </div>
      <div className='w-full md:block hidden'>
        <img src='./group.png' />
        {/* <img src='./baloon4.png' className=' absolute' />
        <img src='./baloon1.png' className=' absolute right-3' /> */}
        {/* <img src='./baloon3.png' className=' absolute' /> */}
      </div>
    </div>
  );
}
