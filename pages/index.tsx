import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import React from 'react'
const Home: NextPage = () => {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GoobIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>GoobIO</h1>

        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 hover:scale-110  shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md text-white dark:bg-white">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="188.902px" height="188.902px" viewBox="0 0 188.902 188.902" enableBackground="0 0 188.902 188.902"
                  xmlSpace="preserve">
                  <g>
                    <path d="M174.873,113.481c-21.775,11.732-23.855-9.641-23.855-9.641c-18.011-2.081-31.398-22.198-31.398-22.198
                      c-24.32,12.563-10.764,47.998-0.283,61.604c13.464,17.438,3.605,45.655,3.605,45.655s-54.902-4.438-82.929-39.649
                      c-21.045-26.434-15.601-51.424-9.617-67.918c7.208-19.821,16.952-30.7,31.159-42.271c21.119-17.221,60.139-19.375,60.139-19.375
                      c0.255-1.463,1.454-3.171,2.985-4.927c-4.699,0.127-10.438,0.52-16.976,1.375c-4.457,0.86-9.383,1.351-14.372,2.813
                      c-5.107,1.103-10.282,2.875-15.578,4.903c-5.29,1.974-10.491,4.776-15.628,7.693c-4.879,3.401-10.06,6.537-14.159,11.015
                      c-4.702,3.833-8.127,8.813-11.644,13.589c-3.673,4.685-5.477,10.4-8.225,15.321c-2.039,5.251-3.177,10.663-4.717,15.616
                      c-1.386,4.992-1.365,9.993-2.068,14.485c-0.594,4.504-1.046,8.635-0.704,12.329c0.121,3.688,0.195,6.922,0.281,9.563
                      c0.157,5.297,0.254,8.334,0.254,8.334l-0.732,0.065c0,0-0.63-2.967-1.454-8.311c-0.394-2.665-0.884-5.929-1.41-9.676
                      c-0.804-3.747-0.827-8.026-0.479-12.72c0.266-3.381,0.316-7.046,0.629-10.802L8.898,90.16l9.011-11.042l-9.46-1.354l13.515-10.368
                      l-9.921-3.156l13.982-7.66l-10.592-3.153l18.255-5.867l-12.62-3.605l20.507-5.642l-11.26-5.175l20.732-2.707l-10.14-5.857
                      l25.307-2.651c0.121-0.056,0.243-0.115,0.358-0.156l-11.695-5.296l26.602-2.252L69.289,7.9l50.318,3.993
                      c2.719,0.121,5.095,0.334,7.258,0.57C133.326,6.271,143.486,0,143.486,0c-2.092,2.084-2.926,13.406-2.926,13.406
                      c2.087-3.783,8.79-7.548,8.79-7.548c-3.76,8.79,0,27.63,0,27.63c10.899,10.902,23.04,48.581,23.04,48.581l4.622,6.694
                      C182.84,97.161,180.689,110.343,174.873,113.481z"
                    />
                  </g>

                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Mounts
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
              Tally up those hard-earned mounts
            </p>
          </div>
          <div className="w-full hover:scale-110 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md  text-white  dark:bg-white">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 512 512" enableBackground="0 0 512 512" xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M486.394,291.69L512,285.75l-7.543-32.529l-20.412,4.734c-2.477-17.576-6.872-35.028-13.06-51.972
                        c18.364-51.938,20.35-112.093,5.451-170.588l-4.2-16.487l-16.404,4.509c-6.976,1.917-67.448,19.132-96.399,46.97
                        c-4.213-2.438-8.487-4.749-12.835-6.904c-28.971-14.355-59.453-21.636-90.599-21.636c-31.146,0-61.627,7.279-90.599,21.636
                        c-4.348,2.155-8.622,4.467-12.835,6.904c-28.951-27.838-89.425-45.052-96.4-46.97l-16.404-4.509L35.56,35.396
                        c-14.901,58.495-12.915,118.65,5.451,170.588c-6.188,16.944-10.583,34.396-13.06,51.971l-20.407-4.733L0,285.752l25.602,5.938
                        c0.09,32.296,6.875,62.006,19.974,88.297L0,390.555l7.544,32.529l56.806-13.175c8.598,11.122,18.581,21.398,29.918,30.734
                        c37.727,31.069,88.738,49.42,145.034,52.449V383.018c-21.422-9.76-42.529-35.172-42.529-55.386
                        c0-33.428,37.075-33.428,59.225-33.428c22.151,0,59.226,0,59.226,33.428c0,20.215-21.108,45.627-42.53,55.386v110.074
                        c56.294-3.03,107.304-21.38,145.03-52.449c11.337-9.336,21.321-19.612,29.919-30.735l56.812,13.176l7.543-32.529l-45.58-10.571
                        C479.519,353.695,486.304,323.984,486.394,291.69z M201.254,242.374c-11.902,0-21.588-9.782-21.588-21.847
                        c0-12.068,9.686-21.841,21.588-21.841c11.918,0,21.601,9.773,21.601,21.841C222.855,232.593,213.172,242.374,201.254,242.374z
                        M310.583,242.538c-12.018,0-21.766-9.854-21.766-22.011c0-12.157,9.748-22.011,21.766-22.011c12.002,0,21.75,9.854,21.75,22.011
                        C332.334,232.683,322.587,242.538,310.583,242.538z"
                      />
                    </g>
                  </g>

                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Battle Pets
            </h3>
            <p className="text-md text-gray-500 dark:text-gray-300 py-4">
              Measure your dedication and prowess in pet collecting
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 hover:scale-110 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md  text-white  dark:bg-white">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.771 295.771" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 295.771 295.771">
                  <g>
                    <path d="m257.764,224.086c-0.888-4.686-3.166-8.996-6.538-12.368l-26.112-26.112c2.88,22.33 9.967,56.375 14.155,75.647l20.943,3.967c1.249,0.237 2.535-0.16 3.434-1.059 0.899-0.899 1.296-2.185 1.059-3.434l-6.941-36.641z" />
                    <path d="m79.188,119.725l12.324,12.324c4.522-5.186 9.638-9.59 16.036-13.38l-13.652-13.652-14.708,14.708z" />
                    <path d="m48.13,129.57l80.926-80.926c5.2-5.2 5.2-13.631 0-18.83l-7.723-7.722c-6.514-6.514-17.558-4.607-21.477,3.777l-15.917,34.048c-13.684-13.683-10.738-10.738-24.622-24.622 1.525-9.186-1.247-18.946-8.334-26.033-11.663-11.663-30.573-11.663-42.236,0-11.663,11.663-11.663,30.572 0,42.236 7.086,7.086 16.847,9.859 26.032,8.334 13.886,13.884 10.939,10.938 24.623,24.622l-34.049,15.916c-8.369,3.912-10.294,14.96-3.777,21.478l7.722,7.722c5.201,5.2 13.632,5.2 18.832-2.84217e-14z" />
                    <path d="m44.546,211.717c-3.373,3.372-5.651,7.682-6.539,12.368l-6.94,36.641c-0.237,1.249 0.16,2.535 1.059,3.434 0.899,0.899 2.184,1.295 3.434,1.059l20.943-3.967c4.188-19.272 11.276-53.317 14.155-75.647l-26.112,26.112z" />
                    <path d="m204.26,132.049l12.324-12.324-14.708-14.708-13.652,13.652c6.39,3.786 11.508,8.188 16.036,13.38z" />
                    <path d="m147.886,108.378l-28.675-28.675-14.708,14.707 17.768,17.768c7.738-2.38 16.223-3.589 25.42-3.606 0.066,0 0.129-0.004 0.195-0.004 9.273,0 17.822,1.212 25.615,3.61l17.768-17.768-14.708-14.708-28.675,28.676z" />
                    <path d="m260.992,59.832c9.186,1.525 18.946-1.248 26.033-8.334 11.663-11.663 11.663-30.573 0-42.236s-30.572-11.663-42.235,0c-7.086,7.086-9.859,16.847-8.334,26.032-13.883,13.883-10.894,10.894-24.623,24.623l-15.916-34.049c-3.924-8.395-14.971-10.283-21.477-3.777l-7.722,7.722c-5.2,5.2-5.2,13.63 0,18.83l80.926,80.926c5.2,5.2 13.63,5.2 18.83,0l7.723-7.722c6.519-6.52 4.59-17.566-3.777-21.478l-34.049-15.916c13.682-13.683 10.736-10.737 24.621-24.621z" />
                    <path d="m147.886,123.569c-34.308,0-56.898,19.425-62.119,62.119-3.287,26.878-12.937,71.378-16.525,87.49-0.767,3.442 1.19,6.912 4.535,8.028l41.063,13.696c2.027,0.676 4.252,0.373 6.025-0.82 1.772-1.193 2.891-3.141 3.027-5.273l3.507-54.728c0.18-2.803-1.361-5.434-3.893-6.649l-19.598-9.406c-6.607-3.171-9.393-11.097-6.222-17.704 3.169-6.603 11.098-9.392 17.704-6.222l29.517,14.166c1.884,0.904 4.076,0.904 5.96,0l29.516-14.166c6.603-3.169 14.534-0.385 17.704,6.222 3.171,6.607 0.385,14.534-6.222,17.704l-19.598,9.406c-2.532,1.215-4.073,3.846-3.893,6.649l3.507,54.728c0.137,2.132 1.255,4.08 3.027,5.273 1.772,1.193 3.998,1.496 6.025,0.82l41.063-13.696c3.352-1.118 5.303-4.579 4.535-8.028-3.588-16.113-13.238-60.612-16.525-87.49-5.222-42.694-27.813-62.119-62.12-62.119z" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Mythic Plus
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
              Measure your skill in dungeons
            </p>
          </div>
        </div>


      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a className="flex items-center justify-center gap-2" href="/" rel="noopener noreferrer">
          <span className="font-bold">GoobIO</span>
        </a>
      </footer>
    </div>
  )
}


export default Home
