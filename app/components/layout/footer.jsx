import { IconX } from '@tabler/icons-react';

export default function Footer() {
  return (
    <div className='flex justify-between items-center w-full py-4 md:px-14 px-4 mt-36 border-t-2 border-t-[#9F9FA8]/25'>
      <div className='text-[#9F9FA8]'>© 2024 Airdrop Farming, All rights reserved.</div>
      <IconX color='#9F9FA8' />
    </div>
  );
}
