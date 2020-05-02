import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gitkraken = forwardRef(function Gitkraken({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M 23.224627,6.2515925 C 23.132336,6.0010885 22.855463,5.8824285 22.604959,5.9747195 22.420377,6.0406415 22.301717,6.2252235 22.301717,6.4229905 22.301717,6.4757275 22.314902,6.5416495 22.328086,6.5943875 24.477146,12.303241 21.576574,18.671317 15.86772,20.820377 15.089839,21.110435 14.272405,21.321384 13.441787,21.426861 V 16.271751 C 13.771397,16.205829 14.087823,16.113539 14.404249,16.008063 V 20.345737 C 19.849415,19.014111 23.198258,13.529393 21.866631,8.0842275 21.194226,5.3286835 19.401145,2.9686715 16.909289,1.5974925 16.67197,1.4656485 16.381912,1.5579395 16.263253,1.7820745 16.131408,2.0193935 16.223699,2.3094505 16.447835,2.4281105 20.890984,4.8804125 22.499483,10.483792 20.047181,14.926942 19.018797,16.799129 17.35756,18.249416 15.366712,19.027295 V 15.19063 C 15.973195,14.992863 16.395097,14.439118 16.395097,13.793081 16.395097,13.265705 16.131408,12.791066 15.669954,12.527377 16.012749,9.2180875 17.528957,10.088259 17.528957,9.0335055 V 8.4138375 C 17.528957,6.8317075 13.863688,1.6765985 12.149714,1.5579395 12.096976,1.5579395 12.044238,1.5579395 11.991501,1.5579395 11.938763,1.5579395 11.886025,1.5579395 11.833287,1.5579395 10.119313,1.6765985 6.4540444,6.8317075 6.4540444,8.4138375 V 9.0335055 C 6.4540444,10.088259 7.9570684,9.2180875 8.3130474,12.527377 7.8647774,12.791066 7.5879044,13.265705 7.5879044,13.793081 7.5879044,14.439118 8.0098064,14.992863 8.6162894,15.19063 V 19.027295 C 3.9094514,17.168292 1.5889934,11.828603 3.4479964,7.1085795 4.2390614,5.1177325 5.6761634,3.4696795 7.5483514,2.4281105 7.7856704,2.2962665 7.8647774,2.0062095 7.7329334,1.7688895 7.6538264,1.6238615 7.4824294,1.5315705 7.3110314,1.5315705 7.2319254,1.5315705 7.1528184,1.5579395 7.0868964,1.5974925 2.1822924,4.3002985 0.38921136,10.470608 3.1052014,15.388396 4.4763814,17.880251 6.8363924,19.673332 9.5919364,20.345737 V 16.021248 C 9.9083624,16.126724 10.224788,16.219014 10.554399,16.284936 V 21.440044 C 4.5027504,20.635795 0.25736736,15.085155 1.0616164,9.0335055 1.1670924,8.2028865 1.3780424,7.3854525 1.6681004,6.6075715 1.7603904,6.3570675 1.6285464,6.0801955 1.3912274,5.9879045 1.1539074,5.8956135 0.86385036,6.0274575 0.77155936,6.2647775 V 6.2647775 C -1.5620826,12.474639 1.5758094,19.396459 7.7856704,21.716917 8.9854534,22.165188 10.237973,22.415691 11.516861,22.468429 V 16.377228 C 11.688259,16.390411 12.004685,16.390411 12.004685,16.390411 12.004685,16.390411 12.321111,16.390411 12.492509,16.377228 V 22.455246 C 19.124272,22.178373 24.266196,16.588179 23.989323,9.9564145 23.923401,8.7038945 23.672897,7.4513745 23.224627,6.2515925 Z M 14.206483,13.094307 C 14.588831,12.711959 15.208499,12.711959 15.604032,13.094307 15.98638,13.476655 15.98638,14.096322 15.604032,14.491856 15.221683,14.874204 14.602016,14.874204 14.206483,14.491856 14.021901,14.307274 13.916426,14.05677 13.916426,13.793081 13.916426,13.529393 14.021901,13.278889 14.206483,13.094307 Z M 9.7765184,14.491856 C 9.3941704,14.874204 8.7745024,14.874204 8.3921544,14.491856 8.3921544,14.491856 8.3921544,14.491856 8.3921544,14.491856 8.0098064,14.109507 8.0098064,13.476655 8.3921544,13.094307 8.7745024,12.711959 9.4073544,12.711959 9.7897024,13.094307 10.172051,13.48984 10.172051,14.109507 9.7765184,14.491856 Z" />
    </svg>
  );
});

Gitkraken.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Gitkraken;
