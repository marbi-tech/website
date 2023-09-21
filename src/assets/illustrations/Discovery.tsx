import * as React from 'react';

import clsxm from '@/utils/clsxm';

const Discovery: React.FC<React.ComponentProps<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      fill='none'
      className={clsxm(['h-[12.5rem] w-[12.5rem]', className])}
      {...props}
    >
      <g clipPath='url(#clip0_171422_2434)'>
        <path
          d='M200 99.9051C200.013 111.282 198.077 122.577 194.275 133.301C194.259 133.351 194.242 133.396 194.223 133.446V133.448C191.376 141.426 187.521 149.009 182.75 156.011C181.924 157.231 181.068 158.431 180.183 159.611C179.209 160.916 178.204 162.195 177.168 163.448C176.213 164.604 175.233 165.737 174.228 166.849C173.033 168.173 171.802 169.463 170.536 170.719C167.557 173.684 164.393 176.458 161.064 179.025C160.479 179.478 159.889 179.923 159.292 180.361C157.902 181.386 156.485 182.375 155.04 183.327C151.862 185.426 148.565 187.34 145.166 189.06C144.579 189.359 143.988 189.654 143.394 189.938C141.097 191.047 138.753 192.066 136.363 192.997C135.681 193.265 134.997 193.524 134.306 193.773C134.19 193.818 134.073 193.861 133.954 193.901C125.758 196.857 117.208 198.722 108.525 199.449C107.921 199.504 107.317 199.55 106.712 199.587C106.071 199.632 105.429 199.669 104.786 199.696C104.278 199.722 103.772 199.741 103.261 199.756C103.156 199.76 103.05 199.765 102.945 199.765C102.259 199.786 101.57 199.8 100.878 199.805C100.586 199.808 100.294 199.81 99.9996 199.81C99.8618 199.81 99.7241 199.81 99.5863 199.808C97.5934 199.801 95.6156 199.736 93.6528 199.613C93.6124 199.611 93.5721 199.606 93.5317 199.606C92.8286 199.559 92.1279 199.509 91.4295 199.447C88.9426 199.238 86.4826 198.938 84.0495 198.545C83.4889 198.458 82.9299 198.363 82.3725 198.261C79.9521 197.833 77.5634 197.318 75.2063 196.716C74.5056 196.538 73.8088 196.352 73.116 196.158C63.4842 193.477 54.3121 189.36 45.9094 183.946C44.4652 183.018 43.0479 182.053 41.6576 181.051C41.4866 180.933 41.3179 180.809 41.1493 180.686C37.7719 178.226 34.5519 175.557 31.5079 172.696C30.0661 171.343 28.6663 169.948 27.3084 168.51C9.73772 149.985 -0.0385973 125.426 -0.000376635 99.9051C-0.000376635 44.7295 44.7716 0 99.9996 0C155.228 0 200 44.7295 200 99.9051Z'
          fill='#F2F2F2'
        />
        <path
          d='M112.2 25.4693C114.202 22.1609 116.574 18.6286 120.29 17.5483C124.593 16.2973 129.013 18.7825 132.762 21.2349C143.975 28.5692 154.773 36.5175 165.107 45.0434L165.096 45.1719C157.05 44.6176 149.005 44.0633 140.96 43.509C135.147 43.1085 129.135 42.6528 123.998 39.9056C122.048 38.8631 120.148 37.4706 117.939 37.3736C115.195 37.253 112.802 39.1678 110.922 41.1683C99.7984 53.002 96.5795 71.0986 84.1001 81.4954C91.9692 62.1072 101.365 43.3731 112.2 25.4693Z'
          fill='white'
        />
        <path
          d='M43.8255 125.841C45.0556 124.289 45.5582 123.925 46.7715 122.359C56.6511 109.594 65.9372 96.3967 74.6296 82.7686C80.5339 73.513 86.1453 64.0796 91.464 54.4684C93.9962 49.8992 96.4589 45.2941 98.8522 40.6531C100.709 37.0546 102.525 33.4346 104.299 29.793C104.807 28.7529 105.3 27.7081 105.79 26.6608C106.946 24.198 108.081 21.7233 109.299 19.294C110.687 16.5252 112.377 13.6225 114.926 11.7623C116.086 10.881 117.473 10.3477 118.925 10.2249C121 10.091 122.914 10.947 124.714 11.8818C137.882 18.7417 150.21 27.3422 161.36 37.1287C172.539 46.9372 182.531 58.0183 191.133 70.1464C191.396 70.5218 192.018 70.1631 191.753 69.7854C190.707 68.3077 189.64 66.846 188.553 65.4002C179.529 53.4023 169.122 42.5079 157.548 32.942C151.817 28.2051 145.817 23.8038 139.577 19.7603C136.401 17.704 133.165 15.7442 129.869 13.8807C128.208 12.9411 126.54 12.0133 124.843 11.143C123.18 10.2894 121.414 9.5219 119.514 9.49321C113.047 9.39279 109.699 16.7093 107.399 21.6325C106.676 23.1818 105.944 24.7264 105.204 26.2663C102.406 32.1123 99.5008 37.905 96.4876 43.6443C94.628 47.1878 92.7277 50.7105 90.7867 54.2126C84.7461 65.1181 78.3257 75.8028 71.5255 86.2667C62.5171 100.127 53.5805 112.372 43.3181 125.334C43.0356 125.692 43.5406 126.204 43.8255 125.841Z'
          fill='white'
        />
        <path
          d='M79.6165 67.6592L69.9818 64.1386L65.1982 62.3906C63.6402 61.8213 62.086 61.1733 60.4755 60.7656C59.0516 60.4052 57.6047 60.3462 56.2009 60.82C54.9622 61.2781 53.8284 61.9803 52.8668 62.8849C51.8844 63.7887 50.9703 64.7639 50.1321 65.8025C49.0906 67.053 48.0645 68.3165 47.0338 69.5758C42.7799 74.7733 38.5538 79.9933 34.3555 85.2359C30.1573 90.4783 25.9872 95.7431 21.8452 101.03C17.693 106.33 13.5694 111.652 9.47431 116.996C8.97266 117.651 8.47143 118.306 7.97064 118.962C7.69396 119.324 7.07009 118.967 7.35068 118.599C11.476 113.201 15.63 107.826 19.8128 102.472C24.0058 97.1051 28.2279 91.7612 32.4789 86.4401C36.7298 81.1191 41.0095 75.8212 45.3179 70.5464C46.3912 69.2323 47.4663 67.9196 48.5432 66.6084C49.4516 65.5023 50.3498 64.3843 51.3461 63.3548C53.175 61.4651 55.46 59.7951 58.1951 59.7498C59.8032 59.7232 61.3595 60.233 62.8536 60.773C64.4643 61.3552 66.0712 61.9482 67.6798 62.536L77.3818 66.0812L79.8073 66.9675C80.2378 67.1248 80.0518 67.8183 79.6165 67.6592Z'
          fill='white'
        />
        <path
          d='M53.2296 67.6943C54.178 66.5409 55.2034 65.3333 56.6219 64.8648L57.9464 64.917C47.8645 82.7151 34.2481 98.267 17.9331 110.618C29.6986 96.3102 41.4641 82.0023 53.2296 67.6943Z'
          fill='white'
        />
        <path
          d='M117.635 49.2672C117.635 51.0859 117.189 52.8769 116.335 54.4831C115.481 56.0892 114.246 57.4614 112.737 58.4792C111.229 59.4969 109.493 60.1291 107.683 60.3203C105.872 60.5115 104.043 60.2557 102.355 59.5756C100.666 58.8954 99.1709 57.8116 97.9998 56.4193C96.8286 55.027 96.0175 53.3687 95.6376 51.5901C95.2577 49.8115 95.3206 47.9669 95.8208 46.2183C96.3211 44.4696 97.2433 42.8704 98.5066 41.561C98.5244 41.5432 98.5422 41.5255 98.56 41.5077C98.6489 41.4143 98.7379 41.321 98.8313 41.2321C98.8319 41.2321 98.8325 41.232 98.8331 41.2318C98.8336 41.2316 98.8341 41.2312 98.8345 41.2308C98.8349 41.2304 98.8353 41.2299 98.8355 41.2294C98.8357 41.2288 98.8358 41.2282 98.8358 41.2276C98.9514 41.121 99.0671 41.0143 99.1872 40.9121C100.794 39.5046 102.773 38.5896 104.887 38.2767C107.001 37.9638 109.161 38.2662 111.107 39.1478C113.054 40.0293 114.705 41.4527 115.862 43.2474C117.02 45.0421 117.635 47.1321 117.635 49.2672Z'
          fill='#2F2E41'
        />
        <path
          d='M110.368 58.4258C114.01 54.7874 114.01 48.8885 110.368 45.2501C106.726 41.6117 100.822 41.6117 97.1797 45.2501C93.5379 48.8885 93.5379 54.7874 97.1797 58.4258C100.822 62.0642 106.726 62.0642 110.368 58.4258Z'
          fill='#9E616A'
        />
        <path
          d='M110.437 42.8785C108.992 41.5279 107.195 40.6119 105.253 40.2358C103.311 39.8597 101.301 40.0387 99.4561 40.7523C99.4014 40.7736 99.3468 40.7974 99.2922 40.8235C99.2898 40.8235 99.2898 40.8258 99.2874 40.8258C99.1093 40.8994 98.9287 40.9753 98.7553 41.0584L98.6484 41.1106V41.1248C98.6294 41.1391 98.6081 41.1557 98.5867 41.1699C98.543 41.2106 98.49 41.2399 98.4323 41.2554C96.639 41.2791 95.1781 41.8866 94.095 43.0612C92.6484 44.6275 91.9691 47.1595 92.1781 50.1922L92.1829 50.2848L92.2636 50.337C93.0285 50.814 93.753 51.234 94.4513 51.6018C94.8646 51.8225 95.266 52.0242 95.6651 52.2093C95.7126 52.2307 95.7601 52.2544 95.8076 52.2758C99.8456 54.1386 103.539 54.4756 107.088 53.2962L107.154 53.2748L108.663 50.7499C108.818 51.6125 109.233 52.4072 109.853 53.0276C110.473 53.648 111.267 54.0646 112.131 54.2217L112.758 54.3332L113.677 54.4946L113.715 54.3213C114.627 50.216 113.309 45.6194 110.437 42.8785Z'
          fill='#2F2E41'
        />
        <path
          d='M133.346 62.4327C130.173 60.7963 134.254 54.8571 133.434 51.3847C132.614 47.9122 126.708 46.7953 126.332 43.2473C125.955 39.6994 125.07 36.04 122.727 33.3478C121.229 31.6274 119.023 30.3574 116.751 30.5729C115.982 30.6458 115.239 30.8834 114.57 31.2694C113.902 31.6554 113.324 32.1809 112.877 32.8099C112.43 33.4389 112.125 34.1568 111.98 34.9146C111.836 35.6724 111.857 36.4524 112.042 37.2014C111.395 36.2857 109.721 36.4842 109.307 37.5257C108.939 38.4516 109.752 39.5731 110.71 39.655C111.963 41.2011 113.398 42.8419 115.361 43.1538C115.994 43.2542 116.705 43.1806 117.166 42.7375C117.628 42.2944 117.664 41.4085 117.116 41.0773C119.584 42.0564 121.03 44.7214 121.396 47.3483C121.762 49.9752 121.256 52.633 120.922 55.2641C120.588 57.8953 120.444 60.6631 121.477 63.1065C122.697 65.9933 125.506 68.0624 128.572 68.7259C131.637 69.3894 134.902 68.7409 137.677 67.2799C140.451 65.8187 142.765 63.5881 144.656 61.0874C141.4 63.3973 136.895 64.2626 133.346 62.4327Z'
          fill='#2F2E41'
        />
        <path
          d='M97.2905 101.567L90.8492 145.51L126.01 142.863L115.486 99.6329L97.2905 101.567Z'
          fill='#FFB8B8'
        />
        <path
          d='M134.074 193.453C134.042 193.604 134.003 193.754 133.955 193.901C129.897 195.367 125.747 196.565 121.532 197.487C120.644 194.568 118.941 189.041 117.449 184.521C116.23 180.831 115.154 177.812 114.779 177.435C113.736 176.398 114.779 175.014 114.779 175.014L110.325 161.182L108.302 154.898L107.608 168.099L106.601 187.221L106.572 187.757C106.572 187.757 105.185 191.908 105.879 192.601C106.572 193.294 105.185 196.063 105.185 196.063L104.786 199.696C104.278 199.722 103.772 199.741 103.261 199.756L103.088 199.81L102.945 199.765C102.259 199.786 101.57 199.8 100.879 199.805C100.587 199.808 100.295 199.81 100 199.81C99.8623 199.81 99.7245 199.81 99.5867 199.808C97.5939 199.801 95.616 199.736 93.6532 199.613L92.4347 189.706L91.1758 179.468C91.1758 179.468 92.5606 176.704 91.1758 175.32C90.3421 174.487 90.7601 173.277 91.2281 172.447C90.9383 171.163 90.5416 169.188 90.0072 166.265C89.9881 166.168 89.9715 166.068 89.9525 165.968C89.7839 165.04 89.6326 164.131 89.4988 163.239C89.2613 161.671 89.076 160.164 88.9335 158.721C88.4502 154.048 88.3834 149.341 88.734 144.656C88.867 142.99 89.0333 141.77 89.1425 141.066C89.152 140.999 89.2542 140.626 89.4205 140.038C89.6817 139.096 90.1117 137.601 90.5939 135.928C90.8504 135.04 91.1212 134.103 91.3896 133.17C91.8575 131.554 92.3231 129.953 92.6984 128.657V128.65C93.0285 127.513 93.2922 126.616 93.43 126.146C93.4965 125.916 93.5321 125.79 93.5321 125.79C93.5321 125.79 93.6057 125.774 93.7459 125.743C94.1805 125.643 95.2542 125.403 96.7411 125.083C98.2922 124.756 100.29 124.34 102.485 123.918C104.363 123.557 106.387 123.189 108.399 122.86C109.121 122.743 109.843 122.629 110.556 122.523C114.957 121.868 118.998 121.495 120.912 121.92C121.045 121.948 121.176 121.984 121.304 122.027C121.434 122.07 121.559 122.126 121.677 122.195C121.736 122.231 122.311 124.471 123.045 127.39C123.052 127.418 123.059 127.449 123.067 127.477C123.287 128.36 123.523 129.3 123.763 130.261C124.007 131.241 124.254 132.24 124.496 133.213C125.216 136.103 125.881 138.778 126.223 140.088C126.354 140.596 126.439 140.897 126.458 140.93C127.261 142.266 127.917 145.541 128.449 149.649C128.924 153.315 129.302 157.646 129.594 161.853C129.739 163.935 129.862 165.987 129.967 167.914C130.321 174.397 130.463 179.459 130.463 179.459C130.463 179.459 130.993 183.678 132.045 185.669C132.175 185.926 132.34 186.164 132.537 186.374C133.238 187.074 133.318 187.682 133.226 188.113C133.185 188.317 133.101 188.51 132.979 188.678C132.951 188.719 132.92 188.758 132.886 188.795C132.796 189.224 132.811 189.669 132.932 190.091C133.053 190.513 133.275 190.899 133.58 191.215C134.252 191.891 134.197 192.86 134.074 193.453Z'
          fill='#2F2E41'
        />
        <path
          d='M122.556 87.4727C122.515 87.1737 122.473 86.8723 122.428 86.5686C122.401 86.374 122.371 86.1794 122.342 85.9872C122.04 84.046 123.297 82.3849 121.67 81.0417C121.289 80.7325 120.979 80.3458 120.76 79.9074L120.387 79.1576L119.701 77.7669L118.2 74.7437L117.941 74.224C117.867 74.0764 117.783 73.9344 117.689 73.7992C117.408 73.3922 117.043 73.0505 116.618 72.7978L112.888 70.5766C112.312 70.235 111.848 69.7328 111.553 69.1314L111.461 68.9416C111.05 68.0992 110.314 66.0845 109.442 65.2088L109.439 65.2064C109.249 64.9895 108.992 64.8431 108.708 64.7912L104.995 64.4233C104.402 64.363 103.802 64.458 103.256 64.6989C102.71 64.9398 102.237 65.3183 101.881 65.7973L101.779 66.2601L101.183 68.9725L101.15 68.9796C100.974 69.0199 100.798 69.0602 100.625 69.1101C96.7744 70.1613 95.1687 83.6094 95.1687 83.6094C95.1687 83.6094 92.4727 88.0541 93.5321 90.8044L95.4228 95.2397C95.4375 95.2732 95.4486 95.3082 95.4561 95.3441C95.627 95.8268 95.6871 96.3418 95.6319 96.851L95.6342 97.0242L95.639 97.4062L95.6532 98.3863L95.6984 101.637L95.7554 105.707L95.8053 109.174L95.8219 110.097L92.7079 123.635C92.6569 124.08 92.6942 124.531 92.8177 124.961C92.9412 125.392 93.1484 125.793 93.4276 126.144L93.43 126.146C93.4984 126.234 93.5713 126.318 93.6485 126.398L93.6509 126.4C93.7245 126.476 93.8005 126.545 93.8789 126.614C94.2539 126.941 94.6961 127.183 95.1745 127.322C95.653 127.461 96.156 127.494 96.6485 127.418L97.0642 127.354H97.0665L103.1 126.45H103.105L103.803 126.346H103.808L110.561 125.332H110.565L111.722 125.157C111.815 125.145 111.905 125.133 111.998 125.126L118.181 124.701C118.322 124.691 118.464 124.673 118.603 124.646H118.606C119.149 124.539 119.659 124.302 120.092 123.957C120.525 123.611 120.868 123.166 121.093 122.66C121.186 122.457 121.257 122.245 121.304 122.027C121.358 121.79 121.387 121.55 121.392 121.308L121.461 115.489L121.696 96.6849C121.701 96.0574 121.88 95.4437 122.214 94.9122C123.071 93.5453 122.974 90.617 122.556 87.4727Z'
          fill='#1B74BA'
        />
        <path
          d='M112.189 137.694C112.102 137.215 112.122 136.722 112.246 136.251C112.37 135.779 112.596 135.341 112.909 134.966C113.221 134.592 113.611 134.29 114.053 134.083C114.494 133.876 114.976 133.767 115.464 133.766L119.321 122.563L123.082 127.44L118.843 137.331C118.791 138.15 118.44 138.921 117.856 139.499C117.273 140.076 116.498 140.42 115.678 140.465C114.857 140.51 114.049 140.252 113.406 139.742C112.764 139.231 112.33 138.503 112.189 137.694Z'
          fill='#9E616A'
        />
        <path
          d='M126.907 114.124L126.04 116.308L124.829 129.813C124.453 129.907 124.093 130.058 123.762 130.261C123.044 130.705 122.497 131.378 122.211 132.172C121.924 132.965 121.914 133.832 122.183 134.632L122.539 135.7L119.891 134.886L115.537 133.55L110.404 131.974L111.273 129.158C111.474 128.51 111.515 127.824 111.392 127.158C111.268 126.491 110.985 125.865 110.565 125.332C110.461 125.2 110.35 125.074 110.23 124.955L110.556 122.523L110.748 121.077L108.399 122.86L103.805 126.346H103.803L103.195 126.808C103.195 126.808 103.162 126.685 103.1 126.45C102.983 125.997 102.765 125.128 102.485 123.918C101.097 117.887 100.074 111.778 99.4228 105.624C99.2803 104.238 99.1568 102.819 99.057 101.379C98.9549 99.8956 98.8789 98.3911 98.8385 96.8771C98.4965 84.5539 100.392 71.6351 108.314 65.0285C108.697 65.0311 109.077 65.092 109.442 65.2089C112.648 66.1937 116.166 71.0062 118.599 74.4495C119.173 75.2634 119.686 75.9991 120.121 76.59L121.173 78.0209C122.61 79.9761 123.605 82.2197 124.088 84.5966C124.19 85.0997 124.27 85.6091 124.328 86.1248L125.477 96.6896V99.4115L126.907 114.124Z'
          fill='#1B74BA'
        />
        <path
          d='M5.79327 133.063C7.85676 135.506 10.0886 137.801 12.4726 139.933L187.67 140.17C190.054 138.039 192.286 135.743 194.349 133.3L5.79327 133.063Z'
          fill='#CCCCCC'
        />
        <path
          d='M100.879 199.805C100.587 199.808 100.295 199.81 100 199.81C99.8622 199.81 99.7245 199.81 99.5867 199.808C97.5938 199.801 95.616 199.736 93.6532 199.613L93.7007 200L93.5321 199.606L89.7672 190.85L92.4347 189.706L97.3278 187.606L98.8124 192.705L100.233 197.589L100.656 199.037L100.879 199.805Z'
          fill='#FFB6B6'
        />
        <path
          d='M83.4371 189.639L82.3729 198.261C79.9525 197.833 77.5638 197.318 75.2067 196.716V189.642L83.4371 189.639Z'
          fill='#FFB6B6'
        />
        <path
          d='M45.9097 173.749V183.946C44.4656 183.018 43.0483 182.053 41.658 181.051V173.749H45.9097Z'
          fill='#CACACA'
        />
        <path
          d='M62.3824 172.05V177.145C62.3821 178.084 62.009 178.984 61.3449 179.648C60.6809 180.311 59.7803 180.685 58.8408 180.686H41.1496C37.7723 178.226 34.5522 175.557 31.5083 172.696C30.0665 171.343 28.6667 169.948 27.3088 168.51H58.8408C59.7801 168.511 60.6806 168.884 61.3446 169.548C62.0085 170.212 62.3818 171.112 62.3824 172.05Z'
          fill='#3F3D56'
        />
        <path
          d='M103.843 199.571L103.261 199.756L103.088 199.81L102.945 199.765C102.259 199.786 101.57 199.8 100.879 199.805C100.587 199.808 100.295 199.81 100 199.81C99.8622 199.81 99.7245 199.81 99.5867 199.808C97.5938 199.801 95.616 199.736 93.6532 199.613L93.7007 200L93.532 199.606C92.829 199.559 92.1282 199.509 91.4299 199.447L85.9026 190.199L74.5273 171.17L73.209 168.965C73.209 168.965 68.7126 170.294 62.3492 171.569C57.5534 172.532 51.6983 173.46 45.9097 173.764C44.4822 173.84 43.0594 173.878 41.658 173.866C38.0356 173.842 34.5558 173.503 31.5083 172.696C30.0665 171.343 28.6667 169.948 27.3088 168.51C24.994 166.064 22.8044 163.504 20.7482 160.838C20.7205 159.859 20.7706 158.88 20.8979 157.909C20.9192 157.748 20.9406 157.584 20.9667 157.418L21.6152 146.417L26.4323 145.781L33.7625 144.813L41.7031 143.764L42.5772 150.603C42.5772 150.603 48.7601 150.29 56.5938 150.394C69.1758 150.565 86.0119 151.818 88.2922 157.195C88.5059 157.701 88.7197 158.211 88.9335 158.721C93.361 169.317 97.4275 180.605 100.19 188.626C100.717 190.154 101.195 191.561 101.62 192.824C103.024 196.993 103.843 199.571 103.843 199.571Z'
          fill='#2F2E41'
        />
        <path
          d='M90.3753 163.258C90.2589 164.264 90.1362 165.267 90.0071 166.265C88.867 175.095 87.2969 183.529 85.9026 190.199C85.2209 193.455 84.5796 196.289 84.0499 198.545C83.4893 198.458 82.9303 198.363 82.3729 198.261C79.9525 197.833 77.5637 197.318 75.2067 196.716C74.5059 196.538 73.8092 196.352 73.1164 196.158L74.5273 171.17L74.9929 162.905L89.4988 163.239L90.3753 163.258Z'
          fill='#2F2E41'
        />
        <path
          d='M113.699 124.608C114.304 124.271 114.976 124.07 115.667 124.02C116.358 123.969 117.052 124.071 117.699 124.318C118.346 124.565 118.932 124.95 119.414 125.447C119.896 125.944 120.263 126.541 120.49 127.195L137.331 127.215L132.504 134.508L117.251 133.371C116.126 133.678 114.927 133.562 113.882 133.045C112.836 132.528 112.017 131.646 111.579 130.566C111.142 129.486 111.116 128.283 111.506 127.185C111.897 126.087 112.677 125.17 113.699 124.608Z'
          fill='#FFB6B6'
        />
        <path
          d='M122.881 134.472L153.213 137.482L153.293 137.38C153.446 137.184 168.63 117.768 171.181 113.145C172.75 110.368 173.322 107.139 172.8 103.992L172.783 103.915L172.723 103.864C171.486 102.829 169.932 102.245 168.319 102.21C166.705 102.174 165.128 102.689 163.846 103.67C157.686 108.437 152.718 114.569 149.336 121.582L147.417 125.574L125.158 126.528L122.881 134.472Z'
          fill='#1B74BA'
        />
        <path
          d='M111.183 189.188L106.713 199.587C106.071 199.632 105.429 199.669 104.786 199.696C104.278 199.722 103.772 199.741 103.261 199.756L103.088 199.81L102.945 199.765C102.259 199.786 101.57 199.8 100.879 199.805C100.587 199.808 100.295 199.81 100 199.81C99.8622 199.81 99.7244 199.81 99.5867 199.808L99.8836 198.792L100.233 197.589L101.62 192.824L103.622 185.944L106.601 187.221L111.183 189.188Z'
          fill='#FFB6B6'
        />
        <path
          d='M143.394 189.938C141.097 191.047 138.754 192.066 136.363 192.997L134.026 189.07L141.561 185.764L143.394 189.938Z'
          fill='#FFB6B6'
        />
        <path
          d='M159.292 172.088V180.361C157.903 181.386 156.485 182.375 155.04 183.327V172.088H159.292Z'
          fill='#CACACA'
        />
        <path
          d='M174.228 166.849C173.033 168.173 171.803 169.463 170.537 170.719C167.557 173.684 164.393 176.458 161.064 179.025H142.109C141.606 179.025 141.109 178.917 140.65 178.71C140.192 178.503 139.783 178.2 139.451 177.822L139.449 177.814C139.054 177.369 138.779 176.83 138.651 176.248L138.648 176.243C138.595 175.994 138.568 175.739 138.568 175.484V170.389C138.568 169.451 138.942 168.551 139.606 167.887C140.27 167.223 141.17 166.85 142.109 166.849H174.228Z'
          fill='#3F3D56'
        />
        <path
          d='M182.038 146.963L179.983 155.757C180.184 157.031 180.251 158.323 180.183 159.611C179.209 160.916 178.204 162.195 177.169 163.448C176.214 164.604 175.234 165.737 174.228 166.849C173.033 168.173 171.803 169.463 170.537 170.719C167.24 171.754 163.354 172.176 159.292 172.205C157.891 172.216 156.468 172.178 155.04 172.103C149.252 171.799 143.397 170.871 138.601 169.907C137.333 169.656 136.14 169.4 135.043 169.15C132.964 168.683 131.226 168.246 129.967 167.914C128.549 167.544 127.741 167.304 127.741 167.304L122.347 176.329L117.449 184.521L108.525 199.449C107.922 199.504 107.317 199.55 106.713 199.587C106.071 199.632 105.429 199.669 104.786 199.696C104.278 199.722 103.772 199.741 103.261 199.756L103.088 199.81L102.945 199.765L100.656 199.037L99.8836 198.792L97.1069 197.909C97.1069 197.909 97.7268 195.959 98.8123 192.705C99.2114 191.512 99.6722 190.14 100.19 188.626C102.059 183.154 104.651 175.804 107.608 168.099C108.485 165.812 109.392 163.491 110.325 161.182C111.09 159.286 111.869 157.397 112.658 155.534C114.028 152.304 120.651 150.562 128.449 149.649C128.846 149.604 129.245 149.559 129.646 149.516C133.62 149.098 137.836 148.882 141.779 148.783C143.753 148.733 145.658 148.714 147.43 148.711C148.002 148.711 148.559 148.713 149.1 148.716H149.102C150.563 148.723 151.907 148.745 153.09 148.768C153.321 148.773 153.544 148.78 153.762 148.785H153.765C153.912 148.787 154.057 148.792 154.199 148.795C156.786 148.861 158.373 148.942 158.373 148.942L158.988 144.12L159.114 143.147L159.233 142.221V142.219L159.247 142.103L159.344 142.1L161.055 142.067L175.43 141.787L183.283 141.633L182.038 146.963Z'
          fill='#2F2E41'
        />
        <path
          d='M145.166 189.06C144.58 189.359 143.988 189.654 143.394 189.938C141.097 191.046 138.754 192.066 136.363 192.997C135.682 193.265 134.998 193.524 134.306 193.773C134.23 193.666 134.152 193.56 134.074 193.453C130.777 188.932 126.587 182.966 122.347 176.329C120.572 173.552 118.789 170.657 117.057 167.701L129.594 161.853L131 161.198L135.043 169.15L138.648 176.243L139.451 177.822L145.166 189.06Z'
          fill='#2F2E41'
        />
        <path
          d='M163.364 90.1878C169.743 90.1878 174.914 85.0216 174.914 78.6488C174.914 72.2759 169.743 67.1097 163.364 67.1097C156.985 67.1097 151.814 72.2759 151.814 78.6488C151.814 85.0216 156.985 90.1878 163.364 90.1878Z'
          fill='#FFB6B6'
        />
        <path
          d='M162.982 89.6868C165.682 90.9813 169.006 90.5428 171.584 89.0198C174.162 87.4969 176.06 85.0131 177.386 82.33C178.357 80.3649 179.062 78.1146 178.5 75.9963C177.937 73.8781 175.694 72.1032 173.592 72.7306C175.032 71.5723 174.864 69.1836 173.701 67.7483C172.537 66.3131 170.702 65.623 168.928 65.1028C166.353 64.3479 163.648 63.8151 160.993 64.2012C158.338 64.5873 155.725 66.0234 154.475 68.3955C153.608 68.6187 152.691 68.5482 151.868 68.1952C151.046 67.8422 150.363 67.2264 149.928 66.4445C149.639 67.1962 149.605 68.0222 149.833 68.7948C150.061 69.5673 150.537 70.2433 151.189 70.7182L147.593 68.7692C146.676 70.0386 147.509 71.9746 148.901 72.6937C150.292 73.4128 151.974 73.2209 153.493 72.8367C155.012 72.4525 153.22 75.6569 154.786 75.6877C156.353 75.7186 158.047 76.5376 158.496 78.0373C158.731 78.8228 158.594 79.6664 158.663 80.4832C158.732 81.3001 159.124 82.2064 159.917 82.4192C160.417 82.5536 160.965 82.3755 161.462 82.5248C162.077 82.7099 162.452 83.3676 162.506 84.0074C162.56 84.6473 162.36 85.2782 162.161 85.889C161.378 88.3028 163.893 86.9498 163.109 89.3636L162.982 89.6868Z'
          fill='#2F2E41'
        />
        <path
          d='M185.644 123.771C185.549 114.241 185.116 107.746 184.361 104.464C182.333 95.6407 172.962 94.0318 171.494 93.8325C171.338 93.4166 171.097 93.0374 170.788 92.7183C170.479 92.3992 170.107 92.1471 169.696 91.9777C169.285 91.8083 168.843 91.7253 168.399 91.7337C167.954 91.7421 167.516 91.8418 167.112 92.0266L160.454 95.0736C159.103 95.6937 157.894 96.5845 156.903 97.6908C155.911 98.797 155.157 100.095 154.689 101.505L153.701 104.518L153.204 124.744L154.843 133.251L154.846 133.256L155.95 138.987L155.19 140.126L150.85 146.628L150.777 146.742L150.774 146.744L150.584 147.027C150.848 147.171 151.109 147.314 151.366 147.456C152.031 147.822 152.679 148.18 153.311 148.531C153.463 148.617 153.613 148.7 153.762 148.785H153.765C153.86 148.837 153.955 148.889 154.048 148.942C156.418 150.266 158.576 151.493 160.52 152.622C160.791 152.779 161.059 152.935 161.323 153.09C170.302 158.337 174.853 161.55 177.169 163.448C178.204 162.195 179.209 160.916 180.183 159.611C181.067 158.431 181.922 157.231 182.751 156.011C182.896 155.057 182.993 154.103 183.088 153.168C183.202 152.043 183.321 150.878 183.52 149.732C183.608 149.224 183.271 148.742 182.945 148.277C182.644 147.843 182.359 147.435 182.418 147.05C182.48 146.654 182.917 146.222 183.342 145.802C183.805 145.342 184.285 144.867 184.354 144.366C184.544 142.971 184.713 141.571 184.86 140.166C185.102 137.881 185.288 135.589 185.418 133.289C185.601 130.114 185.676 126.941 185.644 123.771Z'
          fill='#1B74BA'
        />
        <path
          d='M141.678 157.411C141.873 156.747 142.212 156.134 142.671 155.615C143.13 155.096 143.696 154.684 144.332 154.408C144.967 154.131 145.655 153.998 146.348 154.016C147.04 154.034 147.72 154.203 148.34 154.513L160.387 142.754L162.046 151.339L150.353 161.189C149.764 162.195 148.826 162.95 147.717 163.311C146.608 163.673 145.405 163.615 144.335 163.149C143.266 162.684 142.405 161.842 141.915 160.785C141.425 159.727 141.341 158.527 141.678 157.411Z'
          fill='#FFB6B6'
        />
        <path
          d='M155.145 158.039L178.924 138.987L178.91 138.858C178.882 138.612 176.131 114.126 174.716 109.04C173.893 105.959 172.039 103.252 169.463 101.369L169.397 101.326L169.318 101.332C167.709 101.457 166.19 102.125 165.013 103.228C163.835 104.331 163.069 105.801 162.84 107.398C161.777 115.11 162.523 122.963 165.019 130.338L166.443 134.531L151.209 150.773L155.145 158.039Z'
          fill='#1B74BA'
        />
        <path
          d='M33.3763 89.9807C39.0681 89.9807 43.6823 85.371 43.6823 79.6845C43.6823 73.998 39.0681 69.3882 33.3763 69.3882C27.6844 69.3882 23.0703 73.998 23.0703 79.6845C23.0703 85.371 27.6844 89.9807 33.3763 89.9807Z'
          fill='#A0616A'
        />
        <path
          d='M19.5299 158.107L19.4737 158.029C16.4716 153.829 20.9868 143.739 21.6678 142.276C20.8591 142.014 20.1664 141.48 19.7077 140.765C19.2489 140.05 19.0525 139.198 19.1518 138.354L19.4454 135.861L19.7514 133.416L17.5591 131.226L17.553 131.171L16.2914 120.142L14.457 112.817C13.7659 110.048 13.8248 107.145 14.6277 104.406C15.4306 101.667 16.9486 99.1914 19.0259 97.2323L23.2659 96.5597L28.4189 91.5994H36.7287L39.5779 94.3191C45.1797 98.9064 46.5095 96.9136 52.8261 105.549L48.3034 117.453L50.8314 135.011L50.8329 138.189L52.1496 139.651C52.6239 140.177 52.9685 140.807 53.156 141.49C53.3435 142.173 53.3688 142.891 53.2297 143.586L53.0565 144.451C53.7258 144.737 54.3165 145.18 54.7791 145.741C55.2417 146.303 55.5627 146.967 55.7153 147.679L56.1778 149.834C56.5734 150.356 59.1848 153.835 59.1848 154.786C59.1848 154.929 59.0794 155.067 58.853 155.22C57.0733 156.424 47.2367 158.878 42.8832 157.138C38.2458 155.285 19.8115 158.064 19.6257 158.093L19.5299 158.107Z'
          fill='#3F3D56'
        />
        <path
          d='M14.2942 116.341L22.8634 114.665C26.0325 119.393 27.7338 132.322 27.7338 132.322L37.208 151.951C37.7904 152.305 38.2685 152.806 38.5939 153.404C38.9192 154.002 39.08 154.676 39.06 155.356C39.0399 156.037 38.8398 156.7 38.4798 157.278C38.1199 157.856 37.613 158.328 37.0109 158.647C36.4088 158.965 35.7329 159.119 35.0521 159.092C34.3712 159.064 33.7098 158.857 33.1351 158.492C32.5604 158.126 32.0931 157.615 31.7806 157.01C31.4681 156.405 31.3216 155.728 31.3561 155.048L18.9993 131.79L14.2942 116.341Z'
          fill='#A0616A'
        />
        <path
          d='M14.2462 118.372L14.0025 105.647L18.0352 100.258C18.8307 99.2024 19.9058 98.3905 21.139 97.9137C22.3722 97.4368 23.7142 97.3141 25.0136 97.5593C26.7727 97.9035 28.3353 98.9022 29.3855 100.354C30.4357 101.805 30.8952 103.6 30.6709 105.377C29.9865 110.765 28.4325 117.508 24.9168 119.033L24.8812 119.049L28.5249 131.78L15.0123 133.666L14.2462 118.372Z'
          fill='#3F3D56'
        />
        <path
          d='M65.1399 117.247C65.1399 117.247 54.8562 109.217 49.2787 108.063L44.3422 115.259L57.6929 123.433L83.6861 130.942C84.1413 131.447 84.7221 131.822 85.3696 132.031C86.0171 132.239 86.7083 132.272 87.3729 132.127C88.0375 131.983 88.6519 131.665 89.1538 131.206C89.6556 130.747 90.027 130.164 90.2303 129.515C90.4335 128.867 90.4614 128.176 90.3111 127.513C90.1607 126.85 89.8375 126.239 89.3742 125.741C88.911 125.244 88.3242 124.877 87.6734 124.679C87.0226 124.482 86.331 124.459 85.6688 124.615L65.1399 117.247Z'
          fill='#A0616A'
        />
        <path
          d='M47.0473 118.861L36.3302 111.982L34.0923 105.635C33.6575 104.387 33.5807 103.043 33.8704 101.754C34.1602 100.465 34.8051 99.2828 35.7321 98.3408C36.9974 97.0723 38.6976 96.3311 40.489 96.2671C42.2804 96.2031 44.0293 96.821 45.382 97.996C49.4817 101.563 54.7651 102.758 54.077 106.525L56.0508 106.813L66.1443 114.472L60.1921 126.737L47.0473 118.861Z'
          fill='#3F3D56'
        />
        <path
          d='M21.6864 72.9192C22.8436 71.1305 25.0153 69.9385 27.1206 70.2734C27.3165 68.9312 27.8773 67.6683 28.7419 66.6224C29.6065 65.5765 30.7417 64.7876 32.024 64.3417C33.3063 63.8957 34.6865 63.8098 36.0143 64.0932C37.3421 64.3767 38.5666 65.0186 39.5545 65.9492C40.1744 65.4564 41.0754 65.4305 41.8111 65.7235C42.5357 66.0527 43.1661 66.5582 43.6445 67.1937C44.8525 68.6988 45.6295 70.503 45.8926 72.4142C46.1557 74.3254 45.8952 76.2721 45.1387 78.0471C45.396 77.1126 44.4587 76.2335 43.5115 76.0238C42.5645 75.8141 41.571 76.0125 40.6106 75.876C39.3797 75.701 38.2731 74.9876 37.0402 74.827C36.0041 74.6921 34.9621 74.9575 33.9517 75.2235C32.9412 75.4895 31.9019 75.7608 30.8643 75.6377C29.8266 75.5146 28.49 79.4434 28.5079 82.2105C28.5113 82.7349 28.4032 83.4082 27.8902 83.5194C27.2585 83.6565 26.8925 82.7854 26.2912 82.5481C25.7555 82.3366 25.1133 82.7285 24.9268 83.2729C24.851 83.5514 24.8429 83.8439 24.9032 84.1261C24.9634 84.4083 25.0902 84.672 25.2731 84.8954C25.6427 85.3382 26.0814 85.7184 26.5724 86.0214L26.3247 86.2272C25.9128 86.7709 25.0584 86.7944 24.4647 86.4581C23.871 86.1217 23.4809 85.5233 23.1292 84.9389C22.0308 83.1137 21.0672 81.1689 20.6796 79.0747C20.292 76.9805 20.5292 74.7078 21.6864 72.9192Z'
          fill='#2F2E41'
        />
        <path
          opacity='0.2'
          d='M112.194 90.2223C113.239 94.5735 113.721 99.0408 113.629 103.515C113.54 107.989 112.885 112.434 111.679 116.744C110.999 119.178 110.141 121.559 109.112 123.868C108.927 124.283 109.541 124.645 109.728 124.227C111.585 120.067 112.899 115.686 113.636 111.191C114.376 106.694 114.542 102.123 114.13 97.5846C113.896 95.0406 113.479 92.5168 112.881 90.0331C112.773 89.5879 112.086 89.7764 112.194 90.2223Z'
          fill='black'
        />
        <path
          opacity='0.2'
          d='M178.724 120.67L172.767 135.197C171.809 137.535 170.878 139.887 169.881 142.209C168.982 144.299 167.958 146.399 166.446 148.122C164.92 149.862 162.867 151.274 160.522 151.55C160.072 151.603 160.066 152.315 160.522 152.262C162.664 152.01 164.584 150.946 166.135 149.474C167.812 147.883 168.993 145.856 169.958 143.776C171.033 141.458 171.948 139.061 172.917 136.697L175.962 129.27L179.411 120.859C179.585 120.435 178.896 120.251 178.724 120.67Z'
          fill='black'
        />
        <path
          d='M108.114 133.856C108.219 134.16 108.417 134.423 108.681 134.608C108.945 134.793 109.261 134.889 109.583 134.883L115.875 134.722C116.2 134.715 116.513 134.604 116.769 134.405C117.026 134.206 117.21 133.929 117.296 133.616L118.186 124.104C118.502 124.247 118.846 124.317 119.193 124.31C119.494 124.303 119.791 124.236 120.067 124.114C120.342 123.992 120.591 123.816 120.798 123.598C121.006 123.38 121.169 123.123 121.277 122.842C121.385 122.561 121.437 122.262 121.43 121.961C121.422 121.66 121.355 121.363 121.233 121.088C121.111 120.813 120.935 120.564 120.717 120.357C120.498 120.149 120.241 119.987 119.96 119.879C119.679 119.771 119.379 119.719 119.078 119.726C118.939 119.726 118.801 119.74 118.665 119.769C118.518 119.61 118.339 119.483 118.139 119.397C117.94 119.311 117.725 119.268 117.508 119.27L107.828 119.52C107.748 119.523 107.668 119.533 107.589 119.549C107.377 119.589 107.176 119.674 106.999 119.797C106.822 119.921 106.674 120.081 106.564 120.267C106.455 120.453 106.386 120.66 106.363 120.875C106.34 121.089 106.364 121.306 106.432 121.511L108.114 133.856ZM118.369 123.458L119.003 121.191C119.075 120.929 119.076 120.653 119.007 120.39C119.038 120.39 119.065 120.375 119.096 120.375C119.531 120.366 119.951 120.53 120.265 120.83C120.579 121.13 120.761 121.542 120.771 121.976C120.781 122.41 120.619 122.831 120.319 123.145C120.02 123.46 119.607 123.643 119.173 123.654C118.892 123.663 118.614 123.595 118.369 123.458Z'
          fill='#2F2E41'
        />
        <path
          d='M107.589 119.549C107.796 120.727 110.114 121.556 112.902 121.412C115.466 121.294 117.562 120.394 117.946 119.328C117.804 119.286 117.656 119.267 117.508 119.27L107.828 119.52C107.748 119.523 107.668 119.533 107.589 119.549Z'
          fill='#3F3D56'
        />
        <path
          d='M87.1548 121.036C87.2229 120.831 87.2463 120.615 87.2235 120.4C87.2006 120.185 87.1321 119.978 87.0224 119.793C86.9127 119.607 86.7645 119.446 86.5877 119.323C86.4108 119.199 86.2095 119.114 85.9972 119.075C85.9186 119.058 85.8388 119.048 85.7585 119.045L76.079 118.796C75.8619 118.793 75.6466 118.837 75.4472 118.923C75.2479 119.009 75.0687 119.135 74.9213 119.295C74.7857 119.266 74.6475 119.251 74.5089 119.252C73.9004 119.236 73.3109 119.463 72.8698 119.882C72.4288 120.301 72.1724 120.878 72.1572 121.486C72.1419 122.094 72.3689 122.683 72.7884 123.124C73.2078 123.564 73.7853 123.82 74.3937 123.836C74.7405 123.843 75.0844 123.772 75.4003 123.629L76.2908 133.142C76.3765 133.455 76.5611 133.731 76.8172 133.93C77.0732 134.13 77.387 134.241 77.7114 134.247L84.004 134.409C84.3261 134.415 84.6418 134.318 84.9057 134.134C85.1695 133.949 85.3681 133.685 85.4727 133.381L87.1548 121.036ZM74.4138 123.18C73.9794 123.168 73.5672 122.985 73.2676 122.671C72.968 122.356 72.8055 121.936 72.8157 121.502C72.8259 121.068 73.0079 120.656 73.3219 120.355C73.6359 120.055 74.0562 119.892 74.4906 119.901C74.5214 119.901 74.5485 119.915 74.5792 119.915C74.5103 120.178 74.512 120.454 74.5841 120.716L75.2177 122.983C74.9726 123.12 74.6946 123.188 74.4138 123.18Z'
          fill='#2F2E41'
        />
        <path
          d='M85.9972 119.075C85.791 120.253 83.4725 121.081 80.6847 120.937C78.1211 120.819 76.025 119.92 75.6409 118.854C75.7831 118.812 75.9308 118.792 76.079 118.796L85.7585 119.045C85.8388 119.048 85.9187 119.058 85.9972 119.075Z'
          fill='#3F3D56'
        />
        <path
          d='M76.824 98.4104C77.3089 98.0564 77.8656 97.813 78.4549 97.6973C79.0442 97.5816 79.6517 97.5963 80.2346 97.7406C80.8176 97.8848 81.3618 98.1549 81.8289 98.532C82.296 98.9091 82.6747 99.3839 82.9383 99.923L97.4309 98.1714L94.0455 104.954L80.8021 105.577C79.8662 105.96 78.8225 105.986 77.8686 105.651C76.9148 105.315 76.1171 104.642 75.6267 103.759C75.1364 102.876 74.9874 101.843 75.2081 100.857C75.4287 99.8717 76.0037 99.001 76.824 98.4104Z'
          fill='#9E616A'
        />
        <path
          d='M124.088 84.5966C123.66 85.4343 123.14 86.4096 122.556 87.4727C120.504 91.2198 117.684 96.056 115.513 99.7366C113.658 102.876 112.273 105.178 112.235 105.242L112.176 105.337L99.4228 105.624L96.6864 105.686L95.7553 105.707L85.7625 105.933L85.8575 105.339L86.791 99.459L86.886 98.8586L95.6389 97.4063L98.8385 96.8771L105.936 95.7001L107.169 92.0646C109.34 85.6748 112.968 79.8767 117.767 75.1282C117.907 74.9929 118.05 74.8648 118.2 74.7437C118.33 74.6393 118.463 74.5396 118.599 74.4495C119.173 75.2634 119.686 75.9991 120.121 76.59L121.173 78.0209C122.61 79.9761 123.604 82.2197 124.088 84.5966Z'
          fill='#1B74BA'
        />
        <path
          d='M71.0594 106.328C71.164 106.633 71.3625 106.896 71.6264 107.081C71.8903 107.266 72.2059 107.362 72.528 107.356L78.8206 107.194C79.1451 107.188 79.4588 107.077 79.7149 106.878C79.9709 106.679 80.1556 106.402 80.2413 106.089L81.1317 96.5763C81.4477 96.7193 81.7916 96.7899 82.1384 96.783C82.7468 96.7677 83.3243 96.5116 83.7437 96.071C84.1631 95.6304 84.3902 95.0414 84.3749 94.4335C84.3596 93.8256 84.1033 93.2487 83.6622 92.8297C83.2212 92.4107 82.6316 92.1838 82.0232 92.1991C81.8846 92.1986 81.7463 92.213 81.6108 92.2419C81.4634 92.0826 81.2842 91.9559 81.0848 91.8699C80.8854 91.784 80.6702 91.7407 80.4531 91.7429L70.7736 91.9926C70.6933 91.9956 70.6134 92.0055 70.5348 92.0222C70.3226 92.0617 70.1212 92.1462 69.9444 92.27C69.7676 92.3938 69.6193 92.554 69.5096 92.7398C69.4 92.9257 69.3314 93.1328 69.3086 93.3473C69.2858 93.5618 69.3092 93.7787 69.3773 93.9834L71.0594 106.328ZM81.3143 95.9304L81.948 93.6635C82.0201 93.4017 82.0217 93.1254 81.9528 92.8627C81.9836 92.8627 82.0107 92.8481 82.0414 92.848C82.4759 92.839 82.8962 93.0026 83.2102 93.3027C83.5242 93.6029 83.7062 94.0151 83.7164 94.4492C83.7265 94.8832 83.564 95.3035 83.2645 95.618C82.9649 95.9325 82.5527 96.1155 82.1183 96.1269C81.8374 96.1357 81.5594 96.0677 81.3143 95.9304Z'
          fill='#CCCCCC'
        />
        <path
          d='M70.5348 92.0222C70.741 93.2002 73.0596 94.0283 75.8474 93.8844C78.411 93.7664 80.5071 92.8671 80.8911 91.8012C80.749 91.7592 80.6012 91.7395 80.453 91.7429L70.7736 91.9926C70.6933 91.9955 70.6134 92.0054 70.5348 92.0222Z'
          fill='#3F3D56'
        />
      </g>
      <defs>
        <clipPath id='clip0_171422_2434'>
          <rect width='200' height='200' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export { Discovery };
