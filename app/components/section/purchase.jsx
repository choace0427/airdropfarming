'use client';

import {
  Icon123,
  IconAdjustmentsHorizontal,
  IconBellZ,
  IconBriefcase2,
  IconRefresh,
  IconSparkles,
  IconTopologyStarRing,
  IconUserMinus,
} from '@tabler/icons-react';
import { useState } from 'react';

export default function Purchase() {
  const [purchaseData, setPurchaseData] = useState([
    {
      icon: <IconAdjustmentsHorizontal />,
      title: 'Airdrop Farming Tool',
      content:
        'Effortlessly participate in major airdrops with our user-friendly Airdrop Farming Service. Your farming is fully automated and scalable enabling you to farm even at an industrial scale.',
    },
    {
      icon: <IconRefresh />,
      title: 'Automated Farming Process',
      content:
        'Experience swift and automated farming with our advanced tool. This feature executes everything on your behalf, including random transaction  amounts, timing, and interactions, all carefully crafted to optimize  airdrop rewards.',
    },
    {
      icon: <IconSparkles />,
      title: 'Fulfilling Airdrop Criteria',
      content:
        'Our service is designed to fulfill the criteria of successful past  airdrops, like Arbitrum. By performing the required activities  autonomously, it aims to qualify you for airdrop farming rewards.',
    },
    {
      icon: <IconTopologyStarRing />,
      title: 'Protocol Adaptability',
      content:
        'Our service architecture is built for adaptability, initially compatible with zkSync Era, Base, Linea, and Scroll. It is future ready to include  additional protocols, all in one purchase.',
    },
    {
      icon: <IconBellZ />,
      title: 'Sybil Detection Proof',
      content:
        'Our service seamlessly replicates human actions, from wallet creation with CEX funding to farming, ensuring a distinct identity for each wallet. By avoiding any connections between farming wallets, we enhance your security while maintaining operational stealth.',
    },
    {
      icon: <IconBellZ />,
      title: 'IP Detection Proof',
      content:
        'Our service employs secure RPCs to safeguard your privacy, ensuring no IP tracking or identity correlation in your on-chain farming. This approach guarantees anonymity and a secure farming experience.',
    },
    {
      icon: <IconBriefcase2 />,
      title: 'Mass Wallet Compatibility',
      content:
        'Our service is fully optimized for large-scale operations, effortlessly supporting mass wallet management. It seamlessly manages wallets, allowing users to farm across various platforms simultaneously, maximizing efficiency and reach.',
    },
    {
      icon: <IconUserMinus />,
      title: 'Effortless Remote Farming',
      content:
        'For those interested in a hands-free experience. Submit your wallet, and  we will securely handle your farming needs. Benefit from advanced  airdrop farming without any local application—effortless and convenient.',
    },
  ]);

  return (
    <div className='flex flex-col gap-6 items-center lg:mt-0 md:mt-10 mt-36'>
      <p className='text-white font-extrabold text-[29px] text-center px-3'>The only purchase to efficiently farm Airdrops</p>
      <p className='text-[#AECBEB] text-[16px] text-center'>
        We offer a streamlined solution for effortless airdrop farming, empowered by automation.
        <br />
        Our uniquely crafted application, with a focus on security and user autonomy, simplifies the airdrop farming process.
      </p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mt-4 px-5'>
        {purchaseData?.map((item, index) => {
          return (
            <div key={index} className='bg-[#131217]/85 border-2 border-[#2b2c34] max-w-[580px] p-6 text-white rounded-lg flex gap-4'>
              <div className='mt-[3px]'>{item?.icon}</div>
              <div>
                <p className='text-[20px] font-semibold'>{item?.title}</p>
                <p className='text-[18px] mt-3'>{item?.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
