import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-32 ${className}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </section>
  );

}
