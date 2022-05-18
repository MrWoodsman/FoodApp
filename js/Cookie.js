function setCookie(name, value, options) {
    const opts = {
        path: "/",
        ...options
    }

    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(value);
        let cookieText = cookieName + "=" + cookieVal;

        if (opts.days && typeof opts.days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (opts.days * 24*60*60*1000));
            cookieText += "; expires=" + data.toUTCString();
        }

        if (opts.path) {
            cookieText += "; path=" + opts.path;
        }
        if (opts.domain) {
            cookieText += "; domain=" + opts.domain;
        }
        if (opts.secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
}

function getCookie(name) {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let cookie of cookies) {
            const [ cookieName, cookieVal ] = cookie.split("=");
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }

    return undefined;
}
