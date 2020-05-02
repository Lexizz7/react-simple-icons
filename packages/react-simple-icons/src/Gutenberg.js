import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gutenberg = forwardRef(function Gutenberg({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M14.439,11.358c-0.084-0.057-0.199-0.034-0.256,0.051c-0.334,0.503-1.043,0.53-1.08,0.53 c-0.007,0-0.01,0-0.017,0c-0.874,0-1.208,0.746-1.221,0.776c-0.04,0.094,0.003,0.202,0.094,0.243 c0.024,0.01,0.051,0.017,0.074,0.017c0.071,0,0.138-0.04,0.169-0.111c0.003-0.007,0.233-0.52,0.823-0.553v0.955 c-0.024,0.206-0.121,0.368-0.294,0.489c-0.179,0.125-0.418,0.189-0.712,0.189c-0.351,0-0.638-0.121-0.85-0.361 c-0.216-0.24-0.324-0.58-0.324-1.019l0.003-1.053c0.017-0.388,0.121-0.695,0.321-0.914c0.216-0.24,0.499-0.361,0.85-0.361 c0.294,0,0.533,0.064,0.712,0.189c0.179,0.125,0.28,0.297,0.297,0.52l0,0c0,0.007,0,0.017,0,0.024c0,0.128,0.105,0.233,0.233,0.233 c0.128,0,0.233-0.105,0.233-0.233c0-0.007,0-0.017,0-0.024l0,0c-0.034-0.334-0.186-0.597-0.459-0.796 C12.762,9.948,12.422,9.85,12.01,9.85c-0.489,0-0.884,0.162-1.184,0.482c-0.283,0.3-0.432,0.695-0.449,1.181l0,0l0,0 c0,0.034-0.003,0.067-0.003,0.101l0.003,0.948h-0.003c0,0.536,0.152,0.965,0.452,1.285s0.695,0.482,1.184,0.482 c0.412,0,0.752-0.098,1.026-0.297c0.25-0.182,0.398-0.422,0.449-0.719l0.01-1.059c0.307-0.074,0.725-0.243,0.989-0.641 C14.55,11.53,14.527,11.415,14.439,11.358z M17.688,0.511h2.588c0.115,0,0.209-0.094,0.209-0.209s-0.094-0.209-0.209-0.209h-2.588 c-0.115,0-0.209,0.094-0.209,0.209S17.573,0.511,17.688,0.511z M3.825,0.511h2.588c0.115,0,0.209-0.094,0.209-0.209 S6.527,0.093,6.413,0.093H3.825c-0.115,0-0.209,0.094-0.209,0.209S3.707,0.511,3.825,0.511z M20.408,2.191 c0.116,0,0.209,0.094,0.209,0.209c0,0.116-0.094,0.209-0.209,0.209c-0.116,0-0.209-0.094-0.209-0.209 C20.198,2.285,20.292,2.191,20.408,2.191z M11.99,1.533c0.116,0,0.209,0.094,0.209,0.209s-0.094,0.209-0.209,0.209 s-0.209-0.094-0.209-0.209S11.874,1.533,11.99,1.533z M8.11,2.404c0.003,0,0.007,0,0.01,0c0.786,0,1.137-0.493,1.404-0.951 c0.088-0.152,0.412-0.658,0.87-0.789c0.567-0.165,1.171,0.098,1.407,0.614c0.034,0.074,0.108,0.118,0.182,0.121 c0.003,0,0.007,0,0.01,0c0.003,0,0.007,0,0.013,0c0.074-0.003,0.148-0.047,0.182-0.121c0.236-0.516,0.84-0.779,1.407-0.614 c0.459,0.135,0.783,0.638,0.87,0.789c0.267,0.462,0.617,0.951,1.414,0.951l0,0c0.479,0,1.046-0.358,1.204-1.043 c0.132-0.567-0.111-1.08-0.641-1.339c-0.105-0.051-0.229-0.01-0.28,0.094c-0.051,0.105-0.01,0.229,0.094,0.28 c0.503,0.25,0.459,0.692,0.418,0.87c-0.081,0.351-0.391,0.722-0.8,0.722c-0.523,0-0.773-0.263-1.053-0.746 c-0.138-0.236-0.523-0.81-1.113-0.982c-0.644-0.189-1.326,0.037-1.717,0.533c-0.391-0.496-1.073-0.722-1.717-0.533 c-0.59,0.172-0.975,0.746-1.113,0.982c-0.28,0.482-0.53,0.746-1.043,0.746c-0.003,0-0.007,0-0.007,0 c-0.445-0.003-0.729-0.314-0.81-0.621c-0.04-0.145-0.125-0.641,0.442-0.978c0.098-0.057,0.132-0.186,0.071-0.287 C7.755,0.005,7.631-0.029,7.529,0.032C6.878,0.42,6.777,1.034,6.898,1.479C7.047,2.029,7.536,2.4,8.11,2.404z M11.996,22.1H12l0,0 H11.996z M3.498,2.191c0.116,0,0.209,0.094,0.209,0.209c0,0.116-0.094,0.209-0.209,0.209S3.288,2.516,3.288,2.4 C3.288,2.285,3.382,2.191,3.498,2.191z M2.911,0.096c0.116,0,0.209,0.094,0.209,0.209S3.026,0.514,2.911,0.514 S2.701,0.421,2.701,0.305S2.795,0.096,2.911,0.096z M21.15,0.096c0.116,0,0.209,0.094,0.209,0.209s-0.094,0.209-0.209,0.209 s-0.209-0.094-0.209-0.209S21.034,0.096,21.15,0.096z M22.27,13.5c0.116,0,0.209,0.094,0.209,0.209 c0,0.116-0.094,0.209-0.209,0.209c-0.116,0-0.209-0.094-0.209-0.209C22.061,13.594,22.154,13.5,22.27,13.5z M21.43,18.285 c0.116,0,0.209,0.094,0.209,0.209c0,0.116-0.094,0.209-0.209,0.209s-0.209-0.094-0.209-0.209 C21.221,18.378,21.314,18.285,21.43,18.285z M20.087,18.882c0.116,0,0.209,0.094,0.209,0.209c0,0.116-0.094,0.209-0.209,0.209 c-0.116,0-0.209-0.094-0.209-0.209C19.878,18.975,19.972,18.882,20.087,18.882z M7.674,1.088c0,0.31,0.253,0.563,0.563,0.563 c0.31,0,0.563-0.253,0.563-0.563S8.548,0.524,8.238,0.524C7.928,0.521,7.674,0.774,7.674,1.088z M8.238,0.939 c0.081,0,0.148,0.067,0.148,0.148c0,0.081-0.067,0.148-0.148,0.148c-0.081,0-0.148-0.067-0.148-0.148 C8.089,1.007,8.157,0.939,8.238,0.939z M15.829,1.651c0.31,0,0.563-0.253,0.563-0.563s-0.253-0.563-0.563-0.563 c-0.31,0-0.563,0.253-0.563,0.563S15.519,1.651,15.829,1.651z M15.829,0.939c0.081,0,0.148,0.067,0.148,0.148 c0,0.081-0.067,0.148-0.148,0.148s-0.148-0.067-0.148-0.148C15.681,1.007,15.748,0.939,15.829,0.939z M12.56,1.439 c-0.108,0.04-0.162,0.159-0.121,0.267c0.04,0.108,0.159,0.162,0.267,0.125c0.034-0.013,0.843-0.283,1.464,0.682 c0.04,0.061,0.108,0.094,0.175,0.094c0.037,0,0.078-0.01,0.111-0.034c0.098-0.061,0.125-0.192,0.064-0.287 C13.872,1.284,12.955,1.294,12.56,1.439z M11.433,1.439c-0.03-0.01-0.307-0.108-0.685-0.051c-0.351,0.051-0.854,0.25-1.272,0.901 C9.415,2.387,9.442,2.515,9.54,2.576c0.034,0.024,0.074,0.034,0.111,0.034c0.067,0,0.135-0.034,0.175-0.094 c0.617-0.965,1.427-0.695,1.464-0.682c0.108,0.04,0.226-0.017,0.267-0.125C11.598,1.601,11.541,1.479,11.433,1.439z M21.032,2.009 l1.016-1.154v1.663c0,0.115,0.094,0.209,0.209,0.209s0.209-0.094,0.209-0.209V0.305c0-0.088-0.054-0.165-0.135-0.196 s-0.172-0.007-0.229,0.057l-1.38,1.569c-0.078,0.088-0.067,0.219,0.02,0.294C20.823,2.107,20.954,2.097,21.032,2.009z M1.767,2.731 c0.115,0,0.209-0.094,0.209-0.209V0.858l1.016,1.154C3.069,2.1,3.201,2.107,3.285,2.033c0.088-0.078,0.094-0.209,0.02-0.294 l-1.38-1.572C1.868,0.103,1.777,0.079,1.696,0.109C1.615,0.14,1.561,0.217,1.561,0.305v2.217C1.561,2.636,1.652,2.731,1.767,2.731z  M16.497,2.937c-0.098-0.007-0.189,0.061-0.213,0.155c-0.024,0.098,0.024,0.199,0.111,0.24c0.331,0.155,0.631,0.216,0.901,0.216 c0.516,0,0.928-0.226,1.215-0.462c0.459-0.378,0.695-0.854,0.705-0.874c0.047-0.098,0.013-0.216-0.081-0.27 c-0.213-0.125-0.58-0.202-1.14,0.138c-0.28,0.172-0.496,0.378-0.533,0.415C16.949,2.947,16.521,2.937,16.497,2.937z M17.742,2.805 c0.003-0.003,0.007-0.007,0.01-0.01c0.159-0.159,0.607-0.526,0.958-0.543c-0.101,0.145-0.253,0.341-0.459,0.513 c-0.304,0.25-0.628,0.371-0.972,0.364C17.422,3.055,17.58,2.947,17.742,2.805z M4.958,1.941C4.864,1.995,4.83,2.114,4.878,2.211 c0.01,0.02,0.246,0.496,0.705,0.874c0.287,0.236,0.695,0.462,1.215,0.462c0.273,0,0.574-0.061,0.901-0.216 c0.091-0.044,0.135-0.142,0.111-0.24C7.786,2.994,7.698,2.93,7.597,2.933c-0.017,0-0.449,0.013-0.962-0.439 C6.598,2.458,6.382,2.252,6.102,2.08C5.542,1.742,5.171,1.82,4.958,1.941z M6.355,2.805c0.159,0.142,0.317,0.246,0.462,0.324 c-0.729,0.007-1.211-0.55-1.431-0.877c0.351,0.017,0.8,0.385,0.958,0.543C6.349,2.798,6.352,2.802,6.355,2.805z M22.516,19.759 c-0.209-0.175-0.439-0.277-0.651-0.334c0.081-0.061,0.159-0.132,0.226-0.209c0.516-0.607,0.52-1.501,0.007-2.082 c-0.078-0.088-0.209-0.094-0.294-0.017c-0.088,0.078-0.094,0.209-0.017,0.294c0.375,0.425,0.368,1.083-0.013,1.535 c-0.31,0.364-0.901,0.452-1.076,0.472c-0.53,0.057-1.124,0.179-1.444,0.904c-0.051,0.111-0.081,0.236-0.088,0.371 c-0.074-0.024-0.155-0.037-0.236-0.037c-0.422,0-0.766,0.344-0.766,0.766c0,0.29,0.162,0.543,0.401,0.671 c-0.071,0.064-0.138,0.135-0.199,0.216c-0.709-0.955-1.842-1.555-3.09-1.555c-0.179,0-0.358,0.013-0.53,0.037 c1.026-0.314,1.98-0.803,2.851-1.451l0,0c1.124-0.84,2.058-1.937,2.699-3.168c0.675-1.296,1.016-2.696,1.016-4.153 c0-0.01,0-0.017,0-0.027c0-0.003,0-0.003,0-0.007s0-0.007,0-0.01c-0.007-1.184-0.27-2.25-0.644-3.168 c0.138,0.027,0.27,0.037,0.388,0.037c0.874,0,1.258-0.601,1.299-0.671l0,0c0.189-0.317,0.219-0.702,0.111-1.049 c0.003-0.01,0.003-0.024,0.003-0.037V3.284c0-0.115-0.094-0.209-0.209-0.209c-0.115,0-0.209,0.094-0.209,0.209v3.195 c-0.354-0.307-0.867-0.341-1.08-0.341c-0.412,0.003-0.668-0.061-0.857-0.385c-0.159-0.273-0.067-0.557,0.091-0.719 c0.199-0.202,0.482-0.229,0.759-0.078c0.101,0.054,0.229,0.02,0.283-0.081c0.054-0.101,0.02-0.229-0.081-0.283 c-0.439-0.243-0.931-0.182-1.258,0.148c-0.324,0.331-0.385,0.82-0.155,1.218c0.3,0.516,0.756,0.59,1.204,0.59 c0.007,0,0.01,0,0.017,0c0.135,0,0.57,0.02,0.82,0.256c0.324,0.307,0.408,0.789,0.196,1.147c0,0-0.003,0.003-0.003,0.007 c-0.017,0.03-0.418,0.712-1.538,0.354c-0.337-0.715-0.729-1.323-1.093-1.808L19.19,6.631l0.165-0.128l-0.067-0.088 c-0.719-1.204,0.111-2.487,0.543-3.03l0.243-0.277l0,0l0,0l0,0c0.074-0.088,0.067-0.219-0.02-0.294 c-0.084-0.071-0.206-0.067-0.283,0.01l0,0c-0.007,0.007-0.044,0.044-0.101,0.108c-0.375,0.381-1.839,1.731-3.259,1.026l-0.04-0.027 l-0.02-0.013c-1.272-0.685-2.527-1.08-3.725-1.181c-0.155-0.354-0.361-0.624-0.621-0.624c-0.263,0-0.469,0.273-0.628,0.634 c-1.677,0.074-3.762,1.157-3.85,1.201C6.099,4.668,4.628,3.311,4.253,2.93C4.196,2.866,4.155,2.829,4.152,2.822l0,0 c-0.078-0.078-0.199-0.081-0.283-0.01c-0.088,0.074-0.094,0.206-0.02,0.294l0,0l0,0l0,0l0.26,0.294 C4.26,3.588,4.452,3.861,4.614,4.188c0.405,0.82,0.412,1.565,0.024,2.22C4.155,7.009,3.764,7.64,3.464,8.305 c-1.13,0.368-1.535-0.321-1.552-0.351c0-0.003-0.003-0.003-0.003-0.007C1.696,7.589,1.78,7.107,2.104,6.8 c0.25-0.236,0.685-0.256,0.82-0.256h0.003c0.452,0,0.918-0.071,1.218-0.59C4.375,5.555,4.314,5.062,3.99,4.735 C3.663,4.401,3.17,4.344,2.732,4.587C2.63,4.641,2.593,4.769,2.651,4.87c0.054,0.101,0.182,0.138,0.283,0.081 c0.28-0.152,0.563-0.125,0.759,0.078C3.852,5.191,3.94,5.474,3.784,5.747C3.599,6.068,3.346,6.132,2.941,6.132 c-0.003,0-0.007,0-0.013,0c-0.186,0-0.617,0.027-0.962,0.25V3.335c0-0.115-0.094-0.209-0.209-0.209 c-0.115,0-0.209,0.094-0.209,0.209v3.509C1.318,7.255,1.305,7.758,1.541,8.163C1.564,8.207,1.709,8.45,2.033,8.632 C2.219,8.736,2.485,8.834,2.84,8.834c0.128,0,0.27-0.013,0.422-0.044c-0.364,0.978-0.547,2.031-0.553,3.178 c0,0.003,0,0.003,0,0.007v0.003c0,0.01,0,0.02,0,0.027c0,2.072,0.729,4.106,2.051,5.729c1.171,1.437,2.763,2.503,4.528,3.047 c-0.186-0.027-0.375-0.04-0.563-0.04c-1.238,0-2.362,0.59-3.07,1.532c-0.057-0.074-0.121-0.145-0.192-0.206 c0.223-0.135,0.375-0.378,0.375-0.658c0-0.422-0.344-0.766-0.766-0.766c-0.078,0-0.152,0.013-0.223,0.034 c-0.01-0.132-0.04-0.256-0.088-0.368c-0.324-0.725-0.914-0.847-1.444-0.904c-0.175-0.02-0.766-0.108-1.076-0.472 c-0.391-0.442-0.398-1.1-0.024-1.525c0.078-0.088,0.067-0.219-0.017-0.294c-0.088-0.078-0.219-0.067-0.294,0.017 c-0.509,0.58-0.506,1.474,0.007,2.082c0.067,0.081,0.145,0.148,0.226,0.209c-0.213,0.057-0.442,0.162-0.651,0.334 c-0.496,0.408-0.749,1.09-0.756,2.018c-0.017,0.084,0.02,0.172,0.094,0.219c0.034,0.02,0.071,0.03,0.108,0.03 c0.013,0,0.03-0.003,0.044-0.007h0.003c0.007,0,0.01-0.003,0.017-0.007c0.01-0.003,0.024-0.007,0.034-0.013 c0.003,0,0.003-0.003,0.007-0.003c0.034-0.02,0.064-0.047,0.084-0.081c0.081-0.105,0.415-0.236,0.692-0.294 c1.083-0.236,1.309-0.968,1.275-1.319c-0.01-0.115-0.111-0.199-0.226-0.189c-0.115,0.01-0.199,0.111-0.189,0.226 c0,0.003,0.003,0.064-0.017,0.155c-0.051,0.209-0.236,0.57-0.931,0.722c-0.003,0-0.003,0-0.007,0 c-0.081,0.017-0.324,0.074-0.55,0.179c0.061-0.601,0.253-1.039,0.58-1.312c0.503-0.418,1.167-0.3,1.174-0.297 c0.024,0.003,0.044,0.003,0.064,0c0.111,0.024,0.206,0.037,0.277,0.044c0.557,0.061,0.897,0.182,1.11,0.658 c0.165,0.375-0.047,0.806-0.334,1.022c-0.145,0.111-0.533,0.331-0.968-0.027c-0.088-0.074-0.219-0.061-0.294,0.027 c-0.074,0.088-0.061,0.219,0.027,0.294c0.196,0.162,0.415,0.256,0.641,0.283c-0.29,0.236-0.486,0.533-0.574,0.688 c-0.283,0.489-0.513,0.752-0.894,0.756v-1.461c0-0.115-0.094-0.209-0.209-0.209s-0.209,0.094-0.209,0.209v1.694 c0,0.084,0.051,0.155,0.121,0.189c0.037,0.027,0.081,0.047,0.128,0.047h4.858c0.074,0,0.135-0.037,0.175-0.094 c0.027-0.027,0.051-0.061,0.061-0.101c0.192-0.746,0.864-1.265,1.633-1.265c0.688,0,1.299,0.418,1.559,1.043H9.652 c-0.182-0.449-0.621-0.749-1.117-0.749c-0.543,0-1.022,0.368-1.167,0.891c-0.03,0.111,0.037,0.226,0.145,0.256 c0.111,0.03,0.226-0.037,0.256-0.145c0.094-0.344,0.408-0.584,0.763-0.584c0.263,0,0.499,0.128,0.644,0.331H9.054 c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h0.422C9.483,23.997,9.493,24,9.5,24c0.01,0,0.02,0,0.027-0.003h0.837 c0.115,0,0.209-0.094,0.209-0.209c0-0.01,0-0.02-0.003-0.03c0.003-0.027,0.003-0.057-0.003-0.088 c-0.246-0.914-1.083-1.552-2.031-1.552c-0.918,0-1.724,0.594-2.004,1.461h-1.09c0.088-0.28,0.206-0.54,0.354-0.783 c0.01-0.013,0.017-0.027,0.027-0.04c0.617-0.968,1.697-1.589,2.895-1.589c0.709,0,1.39,0.216,1.967,0.621 c0.017,0.01,0.034,0.02,0.051,0.024c0.088,0.105,0.175,0.216,0.26,0.331c0.02,0.027,0.037,0.054,0.057,0.081 c-0.02,0.428,0.213,0.877,0.695,1.336c0.017,0.051,0.034,0.094,0.044,0.128v0.044c0,0.115,0.094,0.209,0.209,0.209 c0.098,0,0.175-0.064,0.199-0.155l0,0c0-0.003,0.03-0.105,0.091-0.273c0.435-0.425,0.651-0.84,0.648-1.242 c0.027-0.04,0.057-0.084,0.088-0.125c0.094-0.128,0.192-0.253,0.294-0.371c0.574-0.398,1.245-0.607,1.947-0.607 c1.512,0,2.834,0.985,3.273,2.412h-1.09c-0.277-0.867-1.083-1.461-2.004-1.461c-0.948,0-1.781,0.638-2.031,1.552 c-0.01,0.034-0.01,0.067,0,0.101c0,0.007,0,0.01,0,0.017c0,0.115,0.094,0.209,0.209,0.209h1.829c0.115,0,0.209-0.094,0.209-0.209 s-0.094-0.209-0.209-0.209h-0.665c0.145-0.202,0.381-0.331,0.644-0.331c0.361,0,0.675,0.243,0.766,0.594 c0.024,0.094,0.108,0.155,0.202,0.155c0.017,0,0.034-0.003,0.051-0.007c0.111-0.027,0.179-0.142,0.152-0.253 c-0.138-0.533-0.617-0.908-1.171-0.908c-0.493,0-0.931,0.3-1.117,0.749h-0.422c0.256-0.624,0.87-1.043,1.559-1.043 c0.769,0,1.441,0.52,1.633,1.265c0.003,0.017,0.013,0.034,0.02,0.051c0.027,0.084,0.105,0.145,0.199,0.145h4.95 c0.115,0,0.209-0.094,0.209-0.209c0-0.003,0-0.01,0-0.013s0-0.01,0-0.013v-0.04c0.003-0.02,0.003-0.04,0.003-0.061 c0-0.003,0-0.007-0.003-0.01v-1.582c0-0.115-0.094-0.209-0.209-0.209s-0.209,0.094-0.209,0.209v1.417 c-0.351-0.027-0.57-0.287-0.84-0.752c-0.088-0.148-0.27-0.428-0.54-0.658c0.186-0.04,0.364-0.128,0.53-0.267 c0.088-0.074,0.101-0.206,0.027-0.294s-0.206-0.101-0.294-0.027c-0.432,0.358-0.82,0.138-0.968,0.027 c-0.287-0.216-0.499-0.651-0.334-1.022c0.213-0.476,0.553-0.601,1.11-0.658c0.071-0.007,0.165-0.02,0.277-0.044 c0.02,0.003,0.044,0.003,0.067,0c0.007,0,0.665-0.121,1.171,0.297c0.331,0.273,0.526,0.712,0.584,1.316 c-0.229-0.108-0.476-0.165-0.553-0.182c-0.003,0-0.003,0-0.007,0c-0.692-0.152-0.881-0.509-0.931-0.719 c-0.02-0.088-0.02-0.148-0.017-0.155c0.01-0.115-0.074-0.216-0.189-0.226c-0.115-0.01-0.216,0.074-0.226,0.189 c-0.034,0.354,0.192,1.083,1.279,1.319c0.28,0.061,0.634,0.199,0.698,0.304c0,0,0,0.003,0.003,0.003 c0.01,0.013,0.02,0.027,0.03,0.037c0.003,0.003,0.007,0.003,0.01,0.007c0.01,0.007,0.02,0.017,0.03,0.02 c0.003,0.003,0.01,0.007,0.013,0.007c0.01,0.007,0.02,0.01,0.03,0.013c0.003,0,0.01,0.003,0.013,0.003 c0.013,0.003,0.03,0.007,0.047,0.007l0,0c0.013,0,0.024,0,0.037-0.003c0.003,0,0.007,0,0.01-0.003 c0.01-0.003,0.02-0.007,0.034-0.01h0.003c0.01-0.003,0.017-0.01,0.027-0.013l0.003-0.003c0.007-0.003,0.013-0.01,0.017-0.013 c0.003-0.003,0.01-0.007,0.013-0.013c0.003-0.003,0.01-0.01,0.013-0.013c0.003-0.007,0.01-0.01,0.013-0.017s0.007-0.01,0.01-0.017 c0.003-0.007,0.007-0.01,0.01-0.017s0.003-0.013,0.007-0.02c0.003-0.007,0.003-0.013,0.007-0.02c0-0.007,0.003-0.013,0.003-0.017 c0-0.007,0.003-0.013,0.003-0.024V21.82C23.275,20.866,23.019,20.174,22.516,19.759z M5.009,23.575H2.813 c0.186-0.189,0.317-0.415,0.418-0.59c0.088-0.152,0.412-0.658,0.87-0.789c0.54-0.159,1.046,0.027,1.296,0.455 C5.232,22.937,5.1,23.248,5.009,23.575z M5.066,21.763c-0.192,0-0.348-0.155-0.348-0.348s0.155-0.348,0.348-0.348 c0.192,0,0.348,0.155,0.348,0.348C5.414,21.608,5.255,21.763,5.066,21.763z M17.435,19.128L17.435,19.128l0.03,0.037L17.435,19.128 z M17.442,18.919c-1.97-0.229-3.394,0.617-4.244,1.366c-0.368,0.324-0.658,0.658-0.877,0.941c-0.04-0.027-0.078-0.054-0.111-0.071 v-0.594c1.596-1.603,3.182-2.082,4.234-2.2c0.698-0.078,1.262-0.013,1.599,0.051C17.85,18.592,17.651,18.76,17.442,18.919z M19.915,15.977c-0.202,0.388-0.435,0.759-0.692,1.117c-0.267-0.084-0.601-0.162-1.002-0.199c0.894-1.134,1.461-2.487,1.643-3.914 c0.29-0.034,0.692-0.159,0.999-0.358C20.782,13.794,20.465,14.921,19.915,15.977z M18.495,12.212l0.243-0.01 c0.081,0.361,0.354,0.651,0.712,0.749c-0.189,1.444-0.789,2.807-1.748,3.92c-0.462,0-0.999,0.054-1.606,0.186 C17.513,15.903,18.437,14.165,18.495,12.212z M14.53,17.542c-0.135,0.054-0.229,0.098-0.277,0.118 c-0.56,0.223-1.161,0.368-1.788,0.415l5.597-5.597C17.894,14.732,16.49,16.642,14.53,17.542z M20.883,11.986 c-0.007,0.189-0.523,0.496-0.978,0.57c-0.064,0.01-0.128,0.017-0.189,0.017c-0.081,0-0.159-0.017-0.229-0.047 c-0.213-0.091-0.361-0.3-0.361-0.543c0-0.243,0.148-0.452,0.361-0.543c0.071-0.03,0.148-0.047,0.229-0.047 c0.061,0,0.125,0.007,0.189,0.017c0.455,0.074,0.968,0.381,0.978,0.567C20.883,11.979,20.883,11.982,20.883,11.986z M18.93,6.648 l0.088,0.118l0,0c0.766,1.022,1.663,2.605,1.835,4.575c-0.304-0.196-0.702-0.321-0.989-0.354c-0.216-1.707-0.975-3.249-2.099-4.44 c0.047-0.098,0.074-0.209,0.074-0.324c0-0.155-0.047-0.3-0.125-0.418l0.958-1.093C18.491,5.406,18.579,6.064,18.93,6.648z M16.133,4.283l0.044,0.03L16.2,4.327c0.334,0.169,0.692,0.253,1.063,0.253c0.391,0,0.8-0.094,1.211-0.283l-1.08,1.231 c-0.098-0.047-0.206-0.071-0.324-0.071c-0.152,0-0.29,0.044-0.408,0.118c-1.063-0.776-2.321-1.292-3.691-1.461 c-0.034-0.246-0.101-0.597-0.202-0.941C13.852,3.294,14.982,3.666,16.133,4.283z M17.422,6.223c0,0.152-0.101,0.283-0.24,0.331 c-0.034,0.01-0.071,0.017-0.108,0.017c-0.01,0-0.024,0-0.034,0c-0.155-0.013-0.28-0.132-0.307-0.28 c-0.003-0.02-0.007-0.044-0.007-0.064c0-0.024,0.003-0.044,0.007-0.067c0.03-0.152,0.159-0.27,0.317-0.28c0.007,0,0.017,0,0.024,0 s0.013,0,0.02,0c0.155,0.01,0.287,0.121,0.321,0.27c0.003,0.02,0.007,0.037,0.007,0.057C17.418,6.209,17.422,6.216,17.422,6.223z M12.988,4.539c1.255,0.165,2.416,0.644,3.398,1.353c-0.051,0.101-0.078,0.213-0.078,0.334c0,0.152,0.044,0.29,0.121,0.412 l-1.68,1.916c-0.078,0.088-0.067,0.219,0.02,0.294c0.04,0.034,0.088,0.051,0.138,0.051c0.057,0,0.115-0.024,0.159-0.071 l1.677-1.913c0.101,0.051,0.213,0.078,0.334,0.078c0.155,0,0.297-0.047,0.415-0.125c1.046,1.12,1.751,2.557,1.96,4.15 c-0.361,0.101-0.641,0.398-0.715,0.769l-0.24,0.01c-0.051-1.542-0.648-3.013-1.69-4.157c-0.078-0.084-0.209-0.091-0.294-0.013 c-0.084,0.078-0.091,0.209-0.013,0.294c0.918,1.005,1.464,2.281,1.569,3.63l-2.244-2.237c-0.081-0.081-0.213-0.081-0.294,0 c-0.081,0.081-0.081,0.213,0,0.294l2.409,2.409l-5.938,5.938l-5.938-5.938l2.389-2.389c0.081-0.081,0.081-0.213,0-0.294 c-0.081-0.081-0.213-0.081-0.294,0L5.944,11.55c0.118-1.535,0.806-2.915,1.856-3.92l1.046,1.194 c0.04,0.047,0.098,0.071,0.159,0.071c0.047,0,0.098-0.017,0.138-0.051c0.088-0.078,0.094-0.209,0.02-0.294L8.113,7.353 c0.945-0.789,2.129-1.299,3.428-1.397L9.76,7.721c-0.081,0.081-0.081,0.213,0,0.294c0.04,0.04,0.094,0.061,0.148,0.061 s0.105-0.02,0.148-0.061l1.957-1.937l1.9,1.9c0.081,0.081,0.213,0.081,0.294,0c0.081-0.081,0.081-0.213,0-0.294l-1.727-1.727 c1.07,0.081,2.088,0.439,2.976,1.049c0.094,0.064,0.226,0.04,0.29-0.054c0.064-0.094,0.04-0.226-0.054-0.29 c-1.026-0.705-2.22-1.097-3.468-1.134V5.379C12.614,5.285,12.928,4.951,12.988,4.539z M6.892,7.046 c0.118,0,0.229-0.027,0.327-0.074l0.3,0.344c-1.191,1.137-1.95,2.719-2.011,4.477l-0.169-0.01 c-0.081-0.395-0.388-0.705-0.783-0.786c0.206-1.562,0.894-2.972,1.906-4.079C6.588,6.999,6.733,7.046,6.892,7.046z M6.544,6.284 c0-0.017,0-0.03,0.003-0.047c0-0.01,0.003-0.017,0.003-0.027c0.03-0.148,0.159-0.263,0.314-0.273c0.007,0,0.013,0,0.017,0 s0.003,0,0.007,0c0.159,0,0.294,0.108,0.334,0.256c0.007,0.03,0.013,0.061,0.013,0.091c0,0.024-0.003,0.047-0.007,0.071 c-0.03,0.148-0.159,0.263-0.314,0.273c-0.01,0-0.017,0-0.027,0c-0.044,0-0.088-0.01-0.125-0.024 C6.639,6.557,6.544,6.429,6.544,6.284z M5.336,12.201l0.172,0.01c0.057,1.957,0.985,3.698,2.406,4.852 c-0.611-0.135-1.147-0.189-1.613-0.192c-0.951-1.11-1.555-2.466-1.744-3.904C4.945,12.886,5.252,12.586,5.336,12.201z M5.94,12.478 l5.597,5.597C8.555,17.849,6.166,15.461,5.94,12.478z M11.43,4.077c0.091-0.631,0.401-1.474,0.563-1.542 c0.186,0.071,0.472,0.945,0.56,1.538C12.57,4.192,12.58,4.3,12.58,4.388c0,0.037-0.003,0.071-0.01,0.105 c-0.051,0.273-0.29,0.482-0.58,0.482s-0.53-0.209-0.58-0.482c-0.007-0.034-0.01-0.071-0.01-0.105 C11.403,4.296,11.413,4.192,11.43,4.077z M11.794,5.376v0.145c-1.505,0.047-2.881,0.611-3.961,1.515L7.536,6.695 C7.614,6.577,7.661,6.432,7.661,6.28c0-0.128-0.034-0.25-0.088-0.354c0.989-0.725,2.159-1.215,3.431-1.387 C11.062,4.958,11.382,5.295,11.794,5.376z M6.642,4.58c0.371,0,0.729-0.084,1.066-0.253c0.02-0.01,1.947-1.012,3.505-1.147 c-0.101,0.341-0.169,0.695-0.202,0.938C9.625,4.29,8.346,4.826,7.276,5.622C7.162,5.555,7.033,5.518,6.892,5.518 c-0.118,0-0.229,0.027-0.327,0.074L5.431,4.3C5.846,4.485,6.251,4.58,6.642,4.58z M4.958,6.668l0.017-0.024 c0.351-0.58,0.439-1.242,0.263-1.937l1.012,1.157C6.173,5.983,6.126,6.128,6.126,6.28c0,0.111,0.024,0.216,0.067,0.314 c-1.103,1.188-1.846,2.713-2.058,4.4c-0.3,0.047-0.698,0.175-0.999,0.368C3.255,9.58,3.852,8.038,4.958,6.668z M3.12,11.979 c0.007-0.196,0.55-0.466,0.978-0.553c0.094-0.02,0.182-0.03,0.256-0.03c0.057,0,0.108,0.007,0.162,0.024 c0.246,0.071,0.428,0.297,0.428,0.567s-0.182,0.496-0.428,0.567c-0.051,0.013-0.105,0.024-0.162,0.024 c-0.078,0-0.165-0.01-0.256-0.03c-0.428-0.091-0.972-0.361-0.978-0.557C3.12,11.982,3.12,11.982,3.12,11.979z M3.14,12.6 c0.3,0.196,0.702,0.324,0.999,0.371c0.179,1.431,0.746,2.787,1.643,3.92c-0.401,0.037-0.736,0.111-1.005,0.196 C3.808,15.758,3.248,14.222,3.14,12.6z M5.077,17.478c-0.01-0.013-0.02-0.024-0.03-0.037c1.016-0.28,2.126-0.132,2.905,0.054 c0.941,0.226,1.63,0.553,1.636,0.557l0.003-0.007c0.746,0.297,1.559,0.462,2.409,0.462c0.847,0,1.657-0.162,2.399-0.459l0,0 c0,0,0.007-0.003,0.02-0.01c0.088-0.037,0.179-0.074,0.263-0.115c0.287-0.118,0.769-0.294,1.35-0.432 c0.786-0.189,1.9-0.337,2.915-0.054c-0.175,0.216-0.358,0.422-0.553,0.621c-0.283-0.078-1.005-0.226-1.98-0.121 c-1.059,0.115-2.618,0.567-4.211,2.038v-0.368c0-0.115-0.094-0.209-0.209-0.209c-0.115,0-0.209,0.094-0.209,0.209v0.348 c-1.582-1.454-3.134-1.903-4.187-2.018c-0.999-0.108-1.731,0.054-1.997,0.128C5.424,17.883,5.245,17.684,5.077,17.478z M5.964,18.416c0.337-0.067,0.908-0.135,1.619-0.054c1.873,0.209,3.31,1.279,4.211,2.176v0.611 c-0.03,0.017-0.064,0.037-0.101,0.064c-0.219-0.28-0.506-0.607-0.867-0.924c-0.85-0.752-2.281-1.603-4.258-1.366v0.003 C6.359,18.764,6.156,18.595,5.964,18.416z M11.204,21.723c-0.395-0.506-0.827-0.887-1.258-1.174l0.003-0.01 c-0.01-0.003-0.02-0.007-0.03-0.007c-0.719-0.469-1.441-0.675-2.021-0.759c-0.273-0.142-0.543-0.3-0.803-0.472 c1.272-0.037,2.426,0.395,3.445,1.289c0.351,0.307,0.628,0.624,0.837,0.897C11.312,21.557,11.254,21.635,11.204,21.723z M12.212,22.988c-0.051,0.061-0.105,0.121-0.165,0.182c-0.013,0.013-0.03,0.03-0.047,0.044l-0.003,0.003l-0.003,0.003v-0.007 c-0.007-0.007-0.017-0.013-0.024-0.024c-0.067-0.064-0.125-0.128-0.179-0.192c-0.246-0.294-0.354-0.567-0.317-0.816 c0.003-0.02,0.007-0.04,0.013-0.061c0.027-0.108,0.078-0.202,0.138-0.283c0.051-0.067,0.108-0.125,0.165-0.175 c0.051-0.044,0.101-0.081,0.145-0.111c0.02-0.013,0.037-0.024,0.054-0.034c0,0,0.003,0,0.003-0.003h0.003 c0.024,0.013,0.047,0.03,0.078,0.051c0.04,0.027,0.088,0.064,0.135,0.105c0.061,0.054,0.121,0.118,0.172,0.189 c0.061,0.088,0.111,0.186,0.132,0.297c0,0.007,0.003,0.017,0.007,0.024C12.557,22.424,12.452,22.694,12.212,22.988z M13.036,21.466 c-0.007,0.007-0.013,0.013-0.017,0.02c-0.078,0.088-0.148,0.175-0.213,0.26c-0.051-0.088-0.108-0.169-0.169-0.24 c0.209-0.273,0.493-0.601,0.85-0.914c1.012-0.891,2.163-1.323,3.425-1.292c-0.263,0.172-0.533,0.334-0.81,0.476 C14.658,19.995,13.67,20.744,13.036,21.466z M18.923,21.068c0.192,0,0.348,0.155,0.348,0.348s-0.155,0.348-0.348,0.348 s-0.348-0.155-0.348-0.348C18.576,21.227,18.731,21.068,18.923,21.068z M19.976,22.151c0.459,0.135,0.783,0.638,0.87,0.789 c0.108,0.189,0.253,0.439,0.466,0.634H18.98c-0.088-0.317-0.213-0.617-0.371-0.894C18.866,22.222,19.439,21.993,19.976,22.151z M2.199,7.495c0,0.341,0.277,0.621,0.621,0.621S3.44,7.839,3.44,7.495c0-0.341-0.277-0.621-0.621-0.621S2.199,7.154,2.199,7.495z M3.022,7.495c0,0.111-0.091,0.202-0.202,0.202c-0.111,0-0.202-0.091-0.202-0.202s0.091-0.202,0.202-0.202 C2.931,7.292,3.022,7.384,3.022,7.495z M21.737,7.495c0-0.341-0.277-0.621-0.621-0.621c-0.341,0-0.621,0.277-0.621,0.621 c0,0.341,0.277,0.621,0.621,0.621S21.737,7.839,21.737,7.495z M20.914,7.495c0-0.111,0.091-0.202,0.202-0.202 s0.202,0.091,0.202,0.202s-0.091,0.202-0.202,0.202C21.005,7.701,20.914,7.61,20.914,7.495z M22.334,9.04 c-0.078-0.03-0.169-0.013-0.229,0.047c-0.273,0.28-0.722,0.27-0.729,0.27c-0.003,0-0.007,0-0.007,0 c-0.111,0-0.202,0.088-0.209,0.199c-0.003,0.115,0.084,0.213,0.199,0.216c0.02,0,0.351,0.01,0.688-0.145v3.404 c0,0.115,0.094,0.209,0.209,0.209s0.209-0.094,0.209-0.209V9.232C22.462,9.148,22.412,9.07,22.334,9.04z M1.73,13.241 c0.115,0,0.209-0.094,0.209-0.209V9.627c0.337,0.155,0.668,0.145,0.688,0.145c0.115-0.003,0.206-0.101,0.199-0.216 C2.823,9.442,2.725,9.351,2.61,9.357c-0.003,0-0.455,0.01-0.729-0.27C1.821,9.027,1.733,9.01,1.652,9.04 C1.574,9.07,1.524,9.148,1.524,9.232v3.802C1.52,13.15,1.615,13.241,1.73,13.241z M22.499,16.712c0-0.115-0.094-0.209-0.209-0.209 h-1.35c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h1.35C22.405,16.922,22.499,16.83,22.499,16.712z M21.099,17.512 c0.115,0,0.209-0.094,0.209-0.209s-0.094-0.209-0.209-0.209h-0.52c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209 H21.099z M21.605,17.897c0-0.115-0.094-0.209-0.209-0.209h-1.289c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h1.289 C21.511,18.106,21.605,18.015,21.605,17.897z M20.789,18.494c0-0.115-0.094-0.209-0.209-0.209h-1.009 c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h1.009C20.694,18.703,20.789,18.609,20.789,18.494z M18.916,18.882 c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h0.574c0.115,0,0.209-0.094,0.209-0.209s-0.094-0.209-0.209-0.209 H18.916z M22.29,15.312h-0.752c-0.115,0-0.209,0.094-0.209,0.209c0,0.115,0.094,0.209,0.209,0.209h0.752 c0.115,0,0.209-0.094,0.209-0.209C22.499,15.407,22.405,15.312,22.29,15.312z M22.29,15.909h-1.049 c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h1.049c0.115,0,0.209-0.094,0.209-0.209S22.405,15.909,22.29,15.909z M22.29,14.121h-0.334c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h0.334c0.115,0,0.209-0.094,0.209-0.209 C22.499,14.216,22.405,14.121,22.29,14.121z M22.29,14.718h-0.513c-0.115,0-0.209,0.094-0.209,0.209 c0,0.115,0.094,0.209,0.209,0.209h0.513c0.115,0,0.209-0.094,0.209-0.209C22.499,14.813,22.405,14.718,22.29,14.718z M1.723,13.511 c0.116,0,0.209,0.094,0.209,0.209c0,0.116-0.094,0.209-0.209,0.209c-0.116,0-0.209-0.094-0.209-0.209 C1.514,13.604,1.607,13.511,1.723,13.511z M2.566,18.291c0.116,0,0.209,0.094,0.209,0.209c0,0.116-0.094,0.209-0.209,0.209 c-0.116,0-0.209-0.094-0.209-0.209C2.357,18.385,2.451,18.291,2.566,18.291z M3.909,18.889c0.116,0,0.209,0.094,0.209,0.209 c0,0.116-0.094,0.209-0.209,0.209S3.7,19.213,3.7,19.098C3.7,18.982,3.794,18.889,3.909,18.889z M1.703,16.928h1.35 c0.115,0,0.209-0.094,0.209-0.209S3.167,16.51,3.052,16.51h-1.35c-0.115,0-0.209,0.094-0.209,0.209 C1.493,16.837,1.588,16.928,1.703,16.928z M3.413,17.104h-0.52c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h0.52 c0.115,0,0.209-0.094,0.209-0.209C3.622,17.198,3.528,17.104,3.413,17.104z M3.886,17.698H2.597c-0.115,0-0.209,0.094-0.209,0.209 s0.094,0.209,0.209,0.209h1.289c0.115,0,0.209-0.094,0.209-0.209C4.095,17.789,4,17.698,3.886,17.698z M4.422,18.291H3.413 c-0.115,0-0.209,0.094-0.209,0.209s0.094,0.209,0.209,0.209h1.009c0.115,0,0.209-0.094,0.209-0.209 C4.631,18.386,4.537,18.291,4.422,18.291z M4.294,19.098c0,0.115,0.094,0.209,0.209,0.209h0.574c0.115,0,0.209-0.094,0.209-0.209 s-0.094-0.209-0.209-0.209H4.503C4.388,18.889,4.294,18.983,4.294,19.098z M1.703,15.737h0.752c0.115,0,0.209-0.094,0.209-0.209 c0-0.115-0.094-0.209-0.209-0.209H1.703c-0.115,0-0.209,0.094-0.209,0.209C1.493,15.643,1.588,15.737,1.703,15.737z M1.703,16.335 h1.049c0.115,0,0.209-0.094,0.209-0.209s-0.094-0.209-0.209-0.209H1.703c-0.115,0-0.209,0.094-0.209,0.209 S1.588,16.335,1.703,16.335z M1.703,14.546h0.334c0.115,0,0.209-0.094,0.209-0.209c0-0.115-0.094-0.209-0.209-0.209H1.703 c-0.115,0-0.209,0.094-0.209,0.209S1.588,14.546,1.703,14.546z M1.703,15.14h0.513c0.115,0,0.209-0.094,0.209-0.209 c0-0.115-0.094-0.209-0.209-0.209H1.703c-0.115,0-0.209,0.094-0.209,0.209C1.493,15.049,1.588,15.14,1.703,15.14z M11.996,23.217 L11.996,23.217c0.003-0.003,0-0.003,0-0.007V23.217z M21.484,4.175C21.487,4.175,21.487,4.175,21.484,4.175 c0.094,0,0.179-0.064,0.202-0.159c0.074-0.297,0.044-0.55-0.098-0.759C21.362,2.92,20.947,2.856,20.9,2.849 c-0.108-0.013-0.209,0.054-0.233,0.162c-0.078,0.354-0.034,0.638,0.135,0.847C21.052,4.161,21.443,4.172,21.484,4.175z M21.248,3.493c0.04,0.064,0.064,0.138,0.064,0.226c-0.061-0.024-0.128-0.061-0.175-0.121c-0.054-0.067-0.081-0.155-0.081-0.267 C21.123,3.365,21.197,3.419,21.248,3.493z M20.128,1.159c-0.226-0.337-0.641-0.401-0.688-0.408 c-0.108-0.013-0.209,0.054-0.233,0.162c-0.078,0.354-0.034,0.638,0.135,0.847c0.243,0.304,0.634,0.314,0.678,0.314l0,0 c0.094,0,0.179-0.064,0.202-0.159C20.3,1.624,20.269,1.368,20.128,1.159z M19.672,1.499c-0.054-0.067-0.081-0.155-0.081-0.267 c0.071,0.034,0.145,0.088,0.192,0.162c0.04,0.064,0.064,0.138,0.064,0.226C19.787,1.597,19.719,1.56,19.672,1.499z M3.133,2.849 C3.086,2.856,2.674,2.92,2.445,3.257C2.307,3.466,2.273,3.719,2.347,4.016C2.371,4.107,2.455,4.175,2.55,4.175l0,0 c0.044,0,0.435-0.01,0.678-0.314C3.396,3.652,3.44,3.365,3.363,3.014C3.342,2.906,3.241,2.836,3.133,2.849z M2.907,3.598 C2.86,3.659,2.792,3.696,2.728,3.719c0-0.088,0.024-0.165,0.064-0.226c0.051-0.074,0.125-0.128,0.192-0.162 C2.985,3.443,2.958,3.531,2.907,3.598z M4.564,0.75C4.517,0.757,4.105,0.821,3.875,1.159C3.737,1.368,3.703,1.621,3.778,1.918 C3.801,2.009,3.886,2.076,3.98,2.076l0,0c0.044,0,0.435-0.01,0.678-0.314c0.169-0.209,0.213-0.496,0.135-0.847 C4.77,0.808,4.672,0.737,4.564,0.75z M4.334,1.499C4.287,1.56,4.22,1.597,4.156,1.621c0-0.088,0.024-0.165,0.064-0.226 C4.27,1.321,4.344,1.267,4.412,1.233C4.412,1.344,4.388,1.432,4.334,1.499z M18.579,10.562c0.013,0.108,0.101,0.186,0.206,0.186 c0.007,0,0.017,0,0.024,0c0.115-0.013,0.196-0.118,0.182-0.233c-0.209-1.822-1.454-3.111-1.508-3.165 c-0.081-0.081-0.213-0.084-0.294-0.003c-0.081,0.081-0.084,0.213-0.003,0.294C17.199,7.653,18.387,8.885,18.579,10.562z M5.218,10.744c0.007,0,0.017,0,0.024,0c0.105,0,0.196-0.078,0.206-0.186C5.64,8.882,6.828,7.65,6.838,7.64 c0.081-0.081,0.078-0.216-0.003-0.294C6.753,7.265,6.618,7.265,6.541,7.35c-0.054,0.054-1.296,1.343-1.508,3.165 C5.023,10.629,5.104,10.73,5.218,10.744z" />
    </svg>
  );
});

Gutenberg.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Gutenberg;
