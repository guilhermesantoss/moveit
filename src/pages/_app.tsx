import '../styles/global.css';
import '../styles/media.css';

import { ChallengesProvider } from '../context/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
