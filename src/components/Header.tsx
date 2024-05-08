import HomeLink from '@/components/HomeLink';
import { sans } from '@/app/styles/fonts';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/app/site';

export const Header = () => {
  return (
    <div className="font-bold text-gray-100 flex justify-between max-w-[1500px] mx-auto gap-28 items-center pt-8 pb-4">
      <HomeLink />
      <ul className="text-base flex items-end gap-6">
        <li className={[`uppercase hover:text-gray-50`, sans.className].join(' ')}>
          <Link href="#">About</Link>
        </li>
        <li>
          <a href={siteConfig.links.github} target="_blank" rel="noopener">
            <Avatar className="h-8 w-8">
              <AvatarImage src={siteConfig.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </a>
        </li>
      </ul>
    </div>
  );
};
