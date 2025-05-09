"use client";

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-[#202020] text-white py-20 px-6 flex justify-center">
      <div className="bg-gradient-to-r from-[#550f4b] via-[#7a2466] to-[#a13a83] rounded-xl p-8 md:p-14 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto y enlaces */}
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            I'm always up for a chat.
          </h2>
          <p className="text-lg mb-2">
            <a
              href="mailto:francolucap1@gmail.com"
              className="underline font-bold hover:text-[#0fc573] transition"
            >
              Pop me an email
            </a>{" "}
            at Francolucap1@gmail.com
          </p>
          <p className="text-lg mb-4">or give me a shout on social media.</p>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0fc573]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0fc573]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Ilustración con nube blanca */}
        <div className="relative w-64 h-64 md:w-96 md:h-72 flex items-center justify-center">
          {/* Nube blanca detrás */}
          <Image
            src="/assets/nube.png"
            alt="Nube decorativa"
            fill
            className="object-contain opacity-80"
          />

          {/* Caricatura */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64">
            <svg
              class="[ Contact__svg ]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 10 211.73 180"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-hair"
                  x1="102.94"
                  y1="154.47"
                  x2="102.94"
                  y2="36.93"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#7e5582"></stop>
                  <stop offset="0.01" stop-color="#7e5582"></stop>
                  <stop offset="0.54" stop-color="#77655a"></stop>
                  <stop offset="1" stop-color="#77655a"></stop>
                </linearGradient>
                <clipPath id="clip-path">
                  <path
                    d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z"
                    fill="none"
                  ></path>
                </clipPath>
                <clipPath id="clip-path-2">
                  <path
                    id="mouth-clip"
                    d="M98.93 112.17c2.78 1.59 7.5 1.67 9.31 1.17 2.3-.62 5.68-1.48 5.59-5.35-.06-3.22-2.93-3.73-4.72-3.41-5 .91-5.46-.2-8.93-.39-2.61-.14-4.28 1.23-4.43 3.8-.12 2.13 1.91 3.46 3.18 4.18z"
                    fill="none"
                  ></path>
                </clipPath>
                <path
                  opacity="0"
                  id="yawn-clip"
                  d="M105.4 117.65c6 0 7.67-1.66 7.3-5.83s-2.64-10.27-7.86-10.27-6.48 6.37-6.85 9.92 1.38 6.18 7.41 6.18z"
                  fill="#fff"
                ></path>
              </defs>
              <path
                id="bg"
                d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z"
                fill="var(--color-mint)"
                data-svg-origin="105.32126712799072 101.11200714111328"
                transform="matrix(1,0,0,1,0,0)"
                style="transform-origin: 0px 0px;"
              ></path>
              <g clip-path="url(#clip-path)">
                <g
                  id="me"
                  data-name="me"
                  data-svg-origin="41.80017852783203 36.932167053222656"
                  transform="matrix(1,0,0,1,0,0)"
                  style="opacity: 1; transform-origin: 0px 0px;"
                >
                  <g id="body">
                    <path
                      id="shadow"
                      class="shadow"
                      d="M129.86,48.47s6.76,4.91,10,12.07,7,29.06,11.71,39.82,9.06,22.5,9.91,26.42,1.57,5-2.52,10.2-14.63,12-14.63,12l-11.47,6.8s14.87,9.67,17.68,19.32a71.16,71.16,0,0,1,4.34,18.79l-21.39,4.54L113.2,164.85l-13-11.1L90.31,75.37Z"
                      opacity="0.09"
                      style="isolation: isolate; transform-origin: 0px 0px;"
                      data-svg-origin="90.30999755859375 48.470001220703125"
                      transform="matrix(1,0,0,1,-1.75009,2.37462)"
                    ></path>
                    <path
                      id="shadow-2"
                      class="shadow"
                      d="M69.44,54A23.64,23.64,0,0,0,58.91,64.27c-4.39,7.87-4.1,30.52-7.61,41.23S40.76,124.26,41.93,135s2.64,12.27,2.64,12.27a66.65,66.65,0,0,1,14.93,1.88c7,1.89,18.42,5.48,18.42,5.48S63.6,166.53,61.84,176a67.23,67.23,0,0,0-2.34,18.26l20.89,1.9,16.19-34,11.42-12L109.91,75Z"
                      opacity="0.09"
                      style="isolation: isolate; transform-origin: 0px 0px;"
                      data-svg-origin="41.80017852783203 54"
                      transform="matrix(1,0,0,1,-1.6595,2.2511)"
                    ></path>
                    <path
                      id="hair-back"
                      class="hair"
                      d="M127.63,45.17c2.65,1.35,11.15,4.2,16.07,23.12,2.88,20.58,3.79,26.07,4.68,30.6s1.2,11.6,6.3,21.15.85,14.65.85,14.65l-7.63,7.08s3.45-12.65-2.63-18.13c0,0,2,14,0,17s-8.75,6.92-8.75,6.92-2.48-4.53-5.06-9.64,2.78,11,.08,12.09-18.82,6.25-30.6,3.86-21.53-5-24-5.79c0,0,2.75-1.37.77-7.62s-1-7.59-1.52-7-2.1,3-1,7.49a7.45,7.45,0,0,1-1.92,7.18s-7.11-4.65-12.77-5.21A51.35,51.35,0,0,1,51,141.14s-5-11.43-.4-23.56S58,104.1,58.32,88.87s2.41-34.66,20.41-45S116.87,35.4,127.63,45.17Z"
                      fill="url(#linear-gradient-hair)"
                      data-svg-origin="48.65434265136719 36.932167053222656"
                      transform="matrix(1,0,0,1,-2.64448,1.8616)"
                      style="transform-origin: 0px 0px;"
                    ></path>
                    <path
                      id="neck"
                      d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z"
                      fill="#ede3d1"
                    ></path>
                    <path
                      id="top"
                      d="M105.61 167c-30.17 0-25.36-40-25.36 15.84h25.35l25-2.14c-.05-55.79 5.17-13.7-24.99-13.7z"
                      fill="#fff"
                      stroke="#404040"
                      stroke-miterlimit="10"
                      stroke-width=".5"
                    ></path>
                    <path
                      id="shoulder"
                      d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z"
                      fill="#404040"
                    ></path>
                    <path
                      id="shoulder-2"
                      data-name="shoulder"
                      d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z"
                      fill="#404040"
                    ></path>
                  </g>
                  <path
                    id="shadow-3"
                    data-name="shadow"
                    d="M95.82 122.36h18.41v14.31s-10.5 5.54-18.41 0z"
                    fill="#efceb9"
                  ></path>
                  <g
                    id="head"
                    data-svg-origin="63.52000045776367 43.9721794128418"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  >
                    <g
                      id="ear-left"
                      class="ear"
                      data-svg-origin="80.51000213623047 105.0994873046875"
                      transform="matrix(1,0,0,1,-0.82792,1.25032)"
                      style="transform-origin: 0px 0px;"
                    >
                      <path
                        d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z"
                        fill="#ede3d1"
                      ></path>
                      <path
                        d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-7.58-1.67a.26.26 0 000 .52z"
                        fill="#b5aa9a"
                      ></path>
                    </g>
                    <g
                      id="ear-right"
                      class="ear"
                      data-svg-origin="127.48999786376953 105.21952819824219"
                      transform="matrix(1,0,0,1,-0.82256,1.24682)"
                      style="transform-origin: 0px 0px;"
                    >
                      <path
                        d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z"
                        fill="#ede3d1"
                      ></path>
                      <path
                        d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.39.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z"
                        fill="#b5aa9a"
                      ></path>
                    </g>
                    <g
                      id="face"
                      data-svg-origin="70.81439971923828 43.9721794128418"
                      style="transform-origin: 0px 0px;"
                      transform="matrix(1,0,0,1,1.10429,-0.88802)"
                    >
                      <rect
                        x="73.99"
                        y="48.26"
                        width="61.54"
                        height="80.49"
                        rx="26.08"
                        transform="rotate(180 104.76 88.5)"
                        fill="#ede3d1"
                      ></rect>
                      <g
                        id="inner-face"
                        data-svg-origin="74.3599853515625 77.77883911132812"
                        style="transform-origin: 0px 0px;"
                        transform="matrix(1,0,0,1,3.78473,-0.76434)"
                      >
                        <path
                          id="eyebrow-right"
                          d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87"
                          fill="none"
                          stroke="#b5aa9a"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.04"
                          data-svg-origin="112.54000091552734 77.77883911132812"
                          transform="matrix(1,0,0,1,0,-0.35322)"
                          style="transform-origin: 0px 0px;"
                        ></path>
                        <path
                          id="eyebrow-left"
                          d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76"
                          fill="none"
                          stroke="#b5aa9a"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.04"
                          data-svg-origin="88.92000579833984 78.29693603515625"
                          transform="matrix(1,0,0,1,0,-0.32195)"
                          style="transform-origin: 0px 0px;"
                        ></path>
                        <g class="mouth-g">
                          <g clip-path="url(#clip-path-2)">
                            <g
                              id="mouth"
                              class="mouth"
                              opacity="0"
                              style="opacity: 0;"
                            >
                              <ellipse
                                cx="104.95"
                                cy="106.66"
                                rx="9.92"
                                ry="9.48"
                                fill="#2b343b"
                              ></ellipse>
                              <path
                                id="tongue"
                                d="M111.44 112.27a14.53 14.53 0 01-13.29-.37s1.52-3.48 6.56-3.35 6.73 3.72 6.73 3.72z"
                                fill="#ffaa96"
                              ></path>
                            </g>
                          </g>
                          <path
                            id="mouth-2"
                            class="mouth"
                            data-name="mouth"
                            d="M97 107.52s7.06 4.62 14 1.59"
                            fill="none"
                            stroke="#b5aa9a"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.04"
                            style="opacity: 1;"
                          ></path>
                        </g>
                        <path
                          id="oh"
                          opacity="0"
                          d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z"
                          fill="#262528"
                        ></path>
                        <g id="eyes">
                          <path
                            id="eye-left"
                            class="eye"
                            d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                            fill="#2b343b"
                            style="opacity: 1; transform-origin: 0px 0px;"
                            data-svg-origin="89.47734069824219 83.69889068603516"
                            transform="matrix(1,0,0,1,1.4874,0.71035)"
                          ></path>
                          <path
                            id="eye-right"
                            class="eye"
                            d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                            fill="#2b343b"
                            style="opacity: 1; transform-origin: 0px 0px;"
                            data-svg-origin="113.6673355102539 83.69889068603516"
                            transform="matrix(1,0,0,1,1.4874,0.71035)"
                          ></path>
                          <path
                            id="eye-right-2"
                            class="eye"
                            data-name="eye-right"
                            d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45"
                            opacity="0"
                            fill="none"
                            stroke="#282828"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.04"
                            style="opacity: 0; transform-origin: 0px 0px;"
                            data-svg-origin="114.11000061035156 88"
                            transform="matrix(1,0,0,1,1.23531,0.06832)"
                          ></path>
                          <path
                            id="eye-left-2"
                            class="eye"
                            data-name="eye-left"
                            d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87"
                            fill="none"
                            opacity="0"
                            stroke="#282828"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.04"
                            style="opacity: 0; transform-origin: 0px 0px;"
                            data-svg-origin="89.8499984741211 87.43000030517578"
                            transform="matrix(1,0,0,1,1.23043,0.08537)"
                          ></path>
                        </g>
                        <path
                          class="dizzy dizzy-1"
                          opacity="0"
                          d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24"
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="0.75"
                        ></path>
                        <path
                          class="dizzy dizzy-2"
                          opacity="0"
                          d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23"
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="0.75"
                        ></path>
                        <path
                          id="nose"
                          d="M102.39 98.13s3.09 1.55 5.78 0"
                          fill="none"
                          stroke="#e0d5c1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          id="glasses"
                          d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1-7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z"
                          fill="#c6c6c6"
                          opacity=".48"
                          data-svg-origin="74.3599853515625 80.13999938964844"
                          style="transform-origin: 0px 0px;"
                          transform="matrix(1,0,0,1,0,0)"
                        ></path>
                        <path
                          id="blush-left"
                          class="eye"
                          d="M89.9 98.17a2.66 2.66 0 01-1.55-.93 3.73 3.73 0 01-.76-3.12 3 3 0 011-1.56 2 2 0 011.4-.42 3 3 0 012.5 2.72.76.76 0 010 .21 3.19 3.19 0 01.11.91 2.1 2.1 0 01-1.77 2.21 2.07 2.07 0 01-.93-.02zM89.34 96v-.05s-.04.05 0 .05z"
                          fill="#efceb9"
                          fill-rule="evenodd"
                          data-svg-origin="87.51107788085938 92.13317108154297"
                          style="transform-origin: 0px 0px;"
                          transform="matrix(1,0,0,1,1.24098,0.57606)"
                        ></path>
                        <path
                          id="blush-right"
                          class="eye"
                          d="M118.93 98.19a2.09 2.09 0 01-1.77-2.19 3.58 3.58 0 01.1-.91v-.21a3 3 0 012.51-2.72 2 2 0 011.4.42 3 3 0 011 1.56 3.73 3.73 0 01-.76 3.12 2.66 2.66 0 01-1.55.93 2.08 2.08 0 01-.93 0zm1.53-2.2v.05c0 .05.05-.04 0-.04z"
                          fill="#efceb9"
                          fill-rule="evenodd"
                          data-svg-origin="117.15631866455078 92.1531753540039"
                          style="transform-origin: 0px 0px;"
                          transform="matrix(1,0,0,1,1.24081,0.57505)"
                        ></path>
                      </g>
                      <path
                        id="hair-front"
                        d="M134.1,57.61C129.22,51.79,118,45,115.33,44.84s-13-1.87-20.65,0-16,4.51-18.77,8.26-6.17,18-4.77,24.41c0,0,3-3.09,10.46-5.73h0s.74-6.33,1.45-7.18a32.29,32.29,0,0,0-.1,6.73,59.67,59.67,0,0,1,8.22-2,37,37,0,0,1,.25-8.11,67.11,67.11,0,0,0,.54,8c2-.32,4.18-.59,6.52-.78h0s.18-2.82.61-5.5c0,0,.28,3.33.6,5.42,1.78-.12,3.64-.19,5.62-.21a76.76,76.76,0,0,1,9.11.45c-.05-2.15,0-6.82-.22-7.36s1.07,2.06,1.54,7.52a51.14,51.14,0,0,1,8.84,1.92c.23-2.37.41-5.93-.3-7.88,0,0,2.1,5,1.9,8.42h0c8.36,3,11.06,7.25,11.06,7.25S139,63.43,134.1,57.61Z"
                        fill="#77655a"
                        data-svg-origin="70.81439971923828 43.9721794128418"
                        style="transform-origin: 0px 0px;"
                        transform="matrix(1,0,0,1,1.47814,0.65156)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
