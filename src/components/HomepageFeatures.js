import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        We've designed FTCLayer to be easy to use and versatile, and our docs will hold your hand from your first installation to the world finals match.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        Thanks to the help of the open source community, FTCLayer is growing and improving every day.
      </>
    ),
  },
  {
    title: 'Easier. By Design',
    description: (
      <>
        FTCLayer abstracts away the difficulty of using the FTC API, and provides a simple, intuitive interface for all programmers!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
