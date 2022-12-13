import { tokensDark } from "constants/tokensDark";

// function that reverses the color palette
function reverseTokens(tokensDark) {

    const reversedTokens = {};

    Object.entries(tokensDark).forEach(([key, val]) => {

        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }

        reversedTokens[key] = reversedObj;
    });

    return reversedTokens;
}


export const tokensLight = reverseTokens(tokensDark);


// mui theme settings
export const themeSettings = (mode) => {

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[400],
                        light: tokensDark.primary[400],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[300],
                    },
                    neutral: {
                        ...tokensDark.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.primary[600],
                        alt: tokensDark.primary[500],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensDark.grey[50],
                        light: tokensDark.grey[100],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensDark.secondary[600],
                        light: tokensDark.secondary[700],
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: tokensDark.grey[500],
                    },
                    background: {
                        default: tokensDark.grey[0],
                        alt: tokensDark.grey[50],
                    },
                }),
        },

        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
