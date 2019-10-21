import classNames from 'classnames';
import styles from './css/resourceCard.scss';

class ResourceCard extends React.Component {
  constructor(props) {
    super(props);
  }
  goToResource = (url) => {
    window.open(url, "_blank");
  }
  render () {
    const props = this.props;
    return (


        <a href={props.url} aria-label={props.clickEvent ? `Download ${props.componentName} UI Kit`: undefined} className={styles.cardButton} tabIndex="0">
        <div className={styles.card} tabIndex="-1">
          <div>
            {
              props.type === 'XD' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_xd@2x.png`}/> : undefined
            }
            {
              props.type === 'CSS' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_css@2x.png`}/> : undefined
            }
            {
              props.type === 'react' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_react@2x.png`}/> : undefined
            }
            {
              props.type === 'Spectrum' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_spectrum.svg`}/> : undefined
            }
            {
              props.type === 'GitHub' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path fill="#f5f5f5" d="M0 0h66v66H0z" /><path d="M51.95 33.48C51.95 23.27 43.67 15 33.47 15S15 23.28 15 33.48c0 7.89 5.01 14.9 12.46 17.47.53-.27.88-.79.95-1.38 0-1.02-.02-3.63-.02-3.63-.64.1-1.29.14-1.95.14a4.183 4.183 0 01-4.23-2.85 4.96 4.96 0 00-2.08-2.46c-.48-.31-.59-.67-.03-.77 2.55-.48 3.21 2.88 4.91 3.41 1.18.37 2.45.27 3.56-.28.16-.95.68-1.81 1.47-2.38-4.34-.41-6.91-1.91-8.24-4.32l-.14-.27-.33-.76-.1-.27c-.43-1.35-.63-2.77-.6-4.18a7.13 7.13 0 012.04-5.3 7.35 7.35 0 01.31-5.34s1.88-.39 5.42 2.14c1.92-.82 7.05-.89 9.48-.18 1.49-.98 4.21-2.37 5.31-1.98.3.48.94 1.87.39 4.92a8.573 8.573 0 012.32 6.12c0 1.28-.16 2.56-.47 3.8l-.16.54s-.09.26-.19.5l-.12.27c-1.29 2.81-3.92 3.86-8.19 4.3 1.38.87 1.78 1.95 1.78 4.89 0 2.94-.04 3.33-.03 4.01.08.57.42 1.07.92 1.35a18.52 18.52 0 0012.51-17.51z" fill="#2c2c2c" /></svg> : undefined
            }
            {
              props.type === 'NPM' ? <img src={`${process.env.BACKEND_URL}/static/thumbnail_npm.svg`}/> : undefined
            }

          </div>
          <div className={styles.content}>
            <div className={classNames('spectrum-Body4', 'noMargin', styles.cardTitle)}>
              {props.title}
            </div>
            <div className={classNames('spectrum-Body5', 'noMargin', styles.cardSubTitle)}>
              {props.subTitle}
            </div>
          </div>
        </div>
        </a>

    )

  }
}



export default ResourceCard
