// Core
import * as Paths from './paths';
import * as Pages from '../pages';

/**
 * Routes
 */
export const ROUTES = [
  {
    key: Paths.OVERVIEW_PATH,
    path: Paths.OVERVIEW_PATH,
    render: props => <Pages.OverviewPage {...props} />,
  },
  {
    key: Paths.ARTIST_PATH(),
    path: Paths.ARTIST_PATH(),
    render: props => <Pages.ArtistPage {...props} />,
  },
];