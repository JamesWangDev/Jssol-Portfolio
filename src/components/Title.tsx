import React from 'react';

interface Props {
  index: string;
  title: string;
  subtitle: string;
  variant: string;
  className?: string;
}

const Title: React.FC<Props> = ({
  index, title, subtitle, variant, className = 'section_title',
}) => (
  <section className='title_container'>
    <h2 className={className}>{title}</h2>
    <div className={`upper_div ${variant}`}>
      <p className='title_index'>{index}</p>
      <p className='section_subtitle'>{subtitle}</p>
    </div>
  </section>
);

export default Title;
