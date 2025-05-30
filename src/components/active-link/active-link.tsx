import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

export const ActiveLink = ({
  children,
  href,
  className,
  ...rest
}: ActiveLinkProps) => {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm text-gray-100 hover:text-brand-primary transition-all duration-200',
        isCurrentPath ? 'text-brand-primary' : 'text-muted-foreground',
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
