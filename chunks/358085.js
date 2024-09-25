var r;
n.r(t),
    n.d(t, {
        PlatformTypes: function () {
            return r;
        },
        getNativePlatform: function () {
            return I;
        },
        getOS: function () {
            return T;
        },
        getPlatform: function () {
            return p;
        },
        getPlatformName: function () {
            return m;
        },
        isAndroid: function () {
            return f;
        },
        isAndroidChrome: function () {
            return _;
        },
        isAndroidWeb: function () {
            return E;
        },
        isDesktop: function () {
            return c;
        },
        isIOS: function () {
            return h;
        },
        isLinux: function () {
            return u;
        },
        isMac: function () {
            return l;
        },
        isPlatformEmbedded: function () {
            return a;
        },
        isWeb: function () {
            return d;
        },
        isWindows: function () {
            return s;
        }
    }),
    !(function (e) {
        (e.WINDOWS = 'WINDOWS'), (e.OSX = 'OSX'), (e.LINUX = 'LINUX'), (e.WEB = 'WEB');
    })(r || (r = {}));
let i = window.DiscordNative,
    a = null != i,
    o = null != i ? i.process.platform : '';
function s() {
    return /^win/.test(o);
}
function l() {
    return 'darwin' === o;
}
function u() {
    return 'linux' === o;
}
function c() {
    return s() || l() || u();
}
function d() {
    return 'WEB' === p();
}
function _() {
    return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match('(android ).+chrome/[.0-9]* mobile');
}
function E() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null;
}
function f() {
    return 'android' === o;
}
function h() {
    return 'ios' === o;
}
function p() {
    return s() ? 'WINDOWS' : l() ? 'OSX' : u() ? 'LINUX' : 'WEB';
}
function m() {
    return o;
}
function I() {
    switch (o) {
        case 'ios':
        case 'android':
            return o;
        default:
            return 'web';
    }
}
function T() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'windows mobile' : 'windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'ios';
    if (/Android/.test(e)) return 'android';
    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'blackberry';
    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'ios' : 'macos';
    else if (/Linux/i.test(e)) return 'linux';
}
