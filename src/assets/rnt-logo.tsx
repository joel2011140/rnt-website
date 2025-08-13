import * as React from "react";

function RntLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={162} height={48} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_17080_1672)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.372 24.756V40s11.358-.771 13.354-14.82l-13.354-.424zm.227-3.871l12.704-.424s-.44-2.873-1.286-3.644l-11.418.65v3.418zm0-6.866l8.393-1.286s-3.463-3.735-8.62-4.506l.227 5.792zM43.151 8l-1.285 6.654-12.93 1.936S32.293 8.302 43.15 8zm-1.936 9.663l-.65 3.645-13.353.424s.196-2.405.862-3.433l13.141-.636zm-1.3 6.881l-3.01 14.382S27.122 35.372 27 24.106l12.915.438zm88.018-8.316v20.144h-5.06V16.228h-6.737v-4.633h18.534v4.633h-6.737zm-13.854-4.61V33.39s-.874 3.191-2.648 3.191h-5.06c-.994-.331-1.773-1.158-2.01-2.174-.496-1.797-5.06-18.134-5.06-18.134s-.662-.307-.662 1.016v19.292h-5.107l.047-20.308s.424-4.634 3.71-4.634c2.933 0 4.681-.189 5.39 1.276.45.923 2.577 6.502 3.712 11.088 1.134 4.587 1.843 8.134 2.53 8.062V11.642l5.153-.025h.005zM90.862 36.536s-1.772-4.28-2.316-6.548C88 27.72 87.15 26.656 86.536 26.3c0 0 3.262-1.963 3.262-3.688v-6.384s-.567-4.208-4.61-4.633H70.601v24.942h5.438v-8.89h5.107s.922-.33 2.01 2.696a217.878 217.878 0 002.363 6.218l5.343-.024zM76.04 22.612h7.446s1.68-1.016 1.68-3.689c0-2.672-2.01-2.695-2.01-2.695h-7.118v6.384h.002z"
          fill="url(#prefix__paint0_linear_17080_1672)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_17080_1672"
          x1={80.836}
          y1={40}
          x2={80.836}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#096DA8" />
          <stop offset={1} stopColor="#3AA8DB" />
        </linearGradient>
        <clipPath id="prefix__clip0_17080_1672">
          <path
            fill="#fff"
            transform="translate(27 8)"
            d="M0 0h107.672v32H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoRntLogo = React.memo(RntLogo);
export default MemoRntLogo;
