const SVG = () => {
    return (
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={1000}>
                <path
                    d="M30 100 L30 20 L70 70 L110 20 L110 100"
                    fill="none"
                    stroke="#113768"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M90 130 L90 50 L130 100 L170 50 L170 130"
                    fill="none"
                    stroke="#0598ce"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                />
            </svg>
    )
}

export default SVG;