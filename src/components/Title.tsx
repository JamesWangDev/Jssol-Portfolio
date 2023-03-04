import React from 'react';

const Title = ({
  index, title, subtitle, variant,
}) => (
    <section className='title_container'>
      <h2 className='section_title'>{title}</h2>
      <div className={`upper_div ${variant}`}>
        <p className='title_index'>{index}</p>
        <p className='section_subtitle'>{subtitle}</p>
      </div>
    </section>
);

export default Title;
