import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <header className="mb-12 text-center">
        <p className="eyebrow">About</p>
        <h2 className="heading mt-3">
          A bit about <span className="text-purple">how I work</span>
        </h2>
      </header>

      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgAlt, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgAlt={imgAlt}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
