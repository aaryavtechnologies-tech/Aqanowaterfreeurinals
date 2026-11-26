/**
 * Centralized Social & Map Navigation Links Configuration
 * Update URLs here to update them everywhere on the website and footer.
 */

export const SOCIAL_LINKS = {
  directions: {
    id: 'directions',
    label: 'Get Directions',
    url: 'https://www.google.com/maps/dir/?api=1&destination=Riviera+Springs+Skycity+Club+O7+Road+Shela+Ahmedabad+Gujarat+380058',
    icon: '📍',
    isExternal: true,
    ariaLabel: 'Get directions to our live demo center on Google Maps',
  },
  googleReviews: {
    id: 'googleReviews',
    label: 'Google Reviews',
    url: 'https://www.google.com/maps/place/Riviera+Springs/@23.0006765,72.4431873,17z',
    icon: '★',
    isExternal: true,
    ariaLabel: 'Read or leave Google Reviews',
  },
  instagram: {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: '📷',
    isExternal: true,
    ariaLabel: 'Visit our Instagram profile',
  },
  facebook: {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: '👍',
    isExternal: true,
    ariaLabel: 'Visit our Facebook page',
  },
  emailNirali: {
    id: 'emailNirali',
    label: 'info@niraliinfra.in',
    url: 'mailto:info@niraliinfra.in',
    icon: '✉',
    isExternal: false,
    ariaLabel: 'Send email to info@niraliinfra.in',
  },
  emailEnvisave: {
    id: 'emailEnvisave',
    label: 'envisave24@gmail.com',
    url: 'mailto:envisave24@gmail.com',
    icon: '✉',
    isExternal: false,
    ariaLabel: 'Send email to envisave24@gmail.com',
  },
};

export const SOCIAL_PILLS_PRIMARY = [
  SOCIAL_LINKS.directions,
  SOCIAL_LINKS.googleReviews,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.facebook,
  SOCIAL_LINKS.emailNirali,
  SOCIAL_LINKS.emailEnvisave,
];
