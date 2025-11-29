import React from "react";

const FourOhFour: React.FC = () => {
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = "/";
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <style>{`
                .four-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                height: 100vh;
                width: 100vw;

                background-color: #171717; /* neutral-900 */
                }

                .four-code {
                font-size: 2.5rem; /* text-4xl */
                color: white;
                }

                .four-text {
                font-size: 1.125rem; /* text-lg */
                color: white;
                opacity: 0.9;
                }
            `}</style>

            <div className="four-container">
                <img
                src="/static/404.png"
                width="64"
                alt=""
                />
                <p className="four-code">404</p>
                <p className="four-text">Redirecting...</p>
            </div>
        </>
    );
};

export default FourOhFour;
