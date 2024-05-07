import { HoverEffect } from './ui/CardHoverEffect';

type Props = {
  projects: any;
};

export const CardsBlog = ({ projects }: Props) => {
  return (
    <div>
      <HoverEffect items={projects} />
    </div>
  );
};
