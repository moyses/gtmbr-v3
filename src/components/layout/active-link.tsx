'use client';

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isCurrentPath =
    pathname === href || pathname.startsWith(String(href));

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
