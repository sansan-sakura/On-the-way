'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({ items, className }: { items: any; className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 py-10 max-w-[500px]', className)}>
      {items.map((item: any, idx: number) => {
        if (!item.published) return null;
        const publishedAt = new Date(item.date);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(publishedAt);
        return (
          <Link
            href={`/blogs/${item?.slug}`}
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-700 dark:bg-slate-800/[0.6] block  rounded-xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <p className="text-white text-[10px] mb-3">{formattedDate}</p>
              <CardTitle>{item.title}</CardTitle>
              <ul className="flex gap-2 mt-3">
                {item.tags.map((tag: string) => (
                  <p
                    key={tag}
                    className="text-xs text-white border-[0.5px] border-white py-0.5 px-1 rounded"
                  >
                    {tag}
                  </p>
                ))}
              </ul>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-xl h-full w-full p-1 overflow-hidden bg-zinc-700 border-2 border-transparent dark:border-white/[0.1] group-hover:border-red-400 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('text-zinc-200 font-bold tracking-wide text-xl', className)}>{children}</h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm line-clamp-2',
        className
      )}
    >
      {children}
    </p>
  );
};
