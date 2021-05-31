import React from "react";
const Svg = ({ children, className }) => {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            {children}
        </svg>
    );
};

export const HomeIcon = () => {
    return (
        <Svg className="w-7 h-7 fill-current  ">
            <g>
                <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>            </g>
        </Svg>
    );
};

export const MessageIcon = () => {
    return (
        <Svg className="w-7 h-7 fill-current ">
            <g>
                <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>            </g>
        </Svg >
    );
};

export const ProfilIcon = () => {
    return (
        <Svg className="w-7 h-7 fill-current ">
            <g>
                <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>            </g>
        </Svg>
    );

}; export const EmailIcon = () => {
    return (
        <Svg className="w-7 h-7 fill-current ">
            <g>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>                </g>
        </Svg>
    );
};

export const PasswordIcon = () => {
    return (
        <Svg className="w-7 h-7 fill-current ">
            <g>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </g>
        </Svg>
    );
};