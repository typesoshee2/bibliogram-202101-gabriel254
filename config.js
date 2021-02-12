/*
	Welcome to the config file!
	Add keys here to override values from /src/lib/constants.js. Please look at that file for override recommendations.
	This file should hopefully never be altered upstream.
	You must restart Bibliogram to apply these changes.
*/

module.exports ={
    website_origin: "https://bibliog-c.herokuapp.com",
    tor: {
        enabled: false
    },
    themes: {
        default: "pussthecat.org-v2"
    },
    default_user_settings: {
        language: "en",
        rewrite_youtube: "",
        rewrite_twitter: "twitter.zydou.ml",
        caption_side: "right",
        infinite_scroll: "off"
    },
}
