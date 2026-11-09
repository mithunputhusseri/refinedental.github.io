import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HOME_SECTION_IDS } from '../Shared/scrollToSection';

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      return;
    }

    const segment = pathname.replace(/^\//, '');
    if (HOME_SECTION_IDS.includes(segment)) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
