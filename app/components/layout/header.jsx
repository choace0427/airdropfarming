import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex justify-between items-center w-full py-4 px-14'>
      <div className='flex gap-4 items-center text-[19px] font-bold text-lig'>
        <img src='./logo.png' alt='logo' className='w-[70px] h-[70px]' />
        <div className='text-white'>
          <p>Airdrop</p>
          <p>Farming</p>
        </div>
      </div>
      <div className='flex gap-10 items-center text-white '>
        <p className='font-semibold'>Feature</p>
        <p className='font-semibold'>Pricing</p>
        <p className='font-semibold'>Login Portal</p>
      </div>
    </div>
  );
}
