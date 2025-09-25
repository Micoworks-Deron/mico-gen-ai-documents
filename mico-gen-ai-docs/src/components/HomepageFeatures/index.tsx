import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI Image Generation',
    image: '/img/homepage/personalize.png',
    description: (
      <>
        Generate photorealistic human images and stock photos with detailed control options.
      </>
    ),
  },
  {
    title: 'Advanced Image Processing',
    image: '/img/homepage/empower.png',
    description: (
      <>
        Remove backgrounds, extract objects, and perform inpainting/outpainting operations.
        Process up to 35MB files with support for JPEG, PNG, and WebP formats.
      </>
    ),
  },
  {
    title: 'Developer-First API',
    image: '/img/homepage/engage.png',
    description: (
      <>
        RESTful API with comprehensive documentation, SDKs, and examples.
        Bearer token authentication with flexible rate limiting and GPU acceleration.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
