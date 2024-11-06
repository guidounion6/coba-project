import React from 'react'

const TeramalFooter = () => {
    return (
        <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
                <div className="flex flex-col gap-6 px-5 py-10 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-row sm:justify-around">
                        <a className="text-[#999999] text-base font-normal leading-normal min-w-40" href="#">
                            About Us
                        </a>
                        <a className="text-[#999999] text-base font-normal leading-normal min-w-40" href="#">
                            Contact Us
                        </a>
                        <a className="text-[#999999] text-base font-normal leading-normal min-w-40" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#">
                            <div className="text-[#999999]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="text-[#999999]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="text-[#999999]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M216,112c0,22.57-7.9,43.2-22.23,58.11C180.39,184,162.25,192,144,192c-17.88,0-29.82-5.86-37.43-12L95.79,225.83A8,8,0,0,1,88,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C114,166,123.3,176,144,176c27.53,0,56-23.94,56-64A72,72,0,1,0,65.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,216,112Z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <p className="text-[#999999] text-base font-normal leading-normal">© 2024 Teramal de Corporation Coba</p>
                </div>
            </div>
        </footer>
    )
}

export default TeramalFooter