import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      href={href}
      className={cn(
        'font-medium text-gray-850 hover:text-gray-800 transition-all duration-300',
        isCurrentPath ? 'text-gray-900' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
};
