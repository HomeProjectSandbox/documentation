import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;  // Add this for PNG/JPG
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Home Projects & Automation',
    image: require('@site/static/img/homeproject_logo.png').default,
    description: (
      <>
        Exploring Raspberry Pi, Kubernetes, Docker, and AI. A collection of IT tutorials and automation projects to simplify home tasks and tackle boring stuff with technology.
      </>
    ),
  },
  {
    title: 'Learning',
    image: require('@site/static/img/learning.png').default,
    description: (
      <>
        If I learn something new, then i will document it here.
      </>
    ),
  },
  {
    title: 'Automation with AI',
    image: require('@site/static/img/learning_ai.png').default,
    description: (
      <>
        Createing AI agents for 'inteligent' automation
      </>
    ),
  },
];

function Feature({title, Svg, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={image} alt={title} className={styles.featureSvg} />
        )}
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
