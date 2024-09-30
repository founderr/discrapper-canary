let r, i;
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: function () {
            return T.X;
        },
        Impression: function () {
            return g.Impression;
        },
        ImpressionGroups: function () {
            return g.A;
        },
        ImpressionNames: function () {
            return S.z;
        },
        ImpressionSchema: function () {
            return S.ImpressionSchema;
        },
        ImpressionTypes: function () {
            return g.n;
        },
        NetworkActionNames: function () {
            return S.a;
        },
        StandardAnalyticsLocation: function () {
            return g.StandardAnalyticsLocation;
        },
        StandardAnalyticsSchemaNameMap: function () {
            return S.StandardAnalyticsSchemaNameMap;
        },
        TypedEventProperties: function () {
            return g.TypedEventProperties;
        },
        analyticsTrackingStoreMaker: function () {
            return T.l;
        },
        encodeProperties: function () {
            return I.Z;
        },
        extendSuperProperties: function () {
            return Y;
        },
        getCampaignParams: function () {
            return L;
        },
        getDevice: function () {
            return U;
        },
        getOS: function () {
            return P;
        },
        getSuperProperties: function () {
            return W;
        },
        getSuperPropertiesBase64: function () {
            return K;
        },
        isThrottled: function () {
            return H;
        },
        trackMaker: function () {
            return j;
        }
    });
var a,
    o = n(757143);
var s = n(47120);
var l = n(348327),
    u = n.n(l),
    c = n(512722),
    d = n.n(c),
    _ = n(264344),
    E = n.n(_),
    f = n(627420),
    h = n(433517),
    p = n(298444),
    m = n(979675),
    I = n(947486);
n(804098);
var T = n(699407),
    g = n(20281),
    S = n(525769);
let A = 'deviceProperties',
    v = 'referralProperties',
    N = {},
    O = {},
    R = window.DiscordNative;
if (null != R) {
    let e;
    let t = R.remoteApp.getVersion(),
        n = R.process.platform,
        i = R.os.release,
        o = R.os.arch,
        s = R.os.appArch,
        l = R.remoteApp.getReleaseChannel(),
        u = (0, f.qf)();
    switch (n) {
        case 'win32':
            e = 'Windows';
            break;
        case 'darwin':
            e = 'Mac OS X';
            break;
        case 'linux':
            e = 'Linux';
            break;
        default:
            e = n;
    }
    if (
        ((r = {
            os: e,
            browser: 'Discord Client',
            release_channel: l || 'unknown',
            client_version: t,
            os_version: i,
            os_arch: o,
            app_arch: s,
            system_locale: u
        }),
        (null === (a = E().name) || void 0 === a ? void 0 : a.toLocaleLowerCase()) === 'electron' && ((r.browser_user_agent = E().ua || ''), (r.browser_version = E().version || '')),
        'linux' === n)
    ) {
        let e = R.crashReporter.getMetadata();
        (r.window_manager = e.wm), (r.distro = e.distro);
    } else 'darwin' === n ? (r.os_sdk_version = null == i ? void 0 : i.split('.')[0]) : 'win32' === n && (r.os_sdk_version = null == i ? void 0 : i.split('.')[2]);
}
let C = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function y(e, t) {
    if (null == e) return '';
    t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let n = new RegExp('[\\?&]'.concat(t, '=([^&#]*)')).exec(e);
    return null === n || ('string' != typeof n[1] && n[1].length) ? '' : decodeURIComponent(n[1]).replace(/\+/g, ' ');
}
function L(e) {
    let t = {};
    return (
        C.forEach((n) => {
            let r = y(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function b() {
    let e = document.referrer;
    if (0 === e.search('https?://(.*)google.([^/?]*)')) return 'google';
    if (0 === e.search('https?://(.*)bing.com')) return 'bing';
    if (0 === e.search('https?://(.*)yahoo.com')) return 'yahoo';
    else if (0 === e.search('https?://(.*)duckduckgo.com')) return 'duckduckgo';
    else return null;
}
function D() {
    let e = {},
        t = document.referrer,
        n = b(),
        r = 'yahoo' !== n ? 'q' : 'p';
    if (null != n) {
        e.search_engine = n;
        let i = y(t, r);
        i.length > 0 && (e.mp_keyword = i);
    }
    return e;
}
function M() {
    let { userAgent: e, vendor: t = '' } = window.navigator,
        { opera: n } = window;
    if (n) return /Mini/.test(e) ? 'Opera Mini' : 'Opera';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/FBIOS/.test(e)) return 'Facebook Mobile';
    else if (/CriOS/.test(e)) return 'Chrome iOS';
    else if (/Apple/.test(t)) return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2) ? 'Mobile Safari' : 'Safari';
    else if (/Android/.test(e)) return /Chrome/.test(e) ? 'Android Chrome' : 'Android Mobile';
    else if (/Edge/.test(e)) return 'Edge';
    else if (/Chrome/.test(e)) return 'Chrome';
    else if (/Konqueror/.test(e)) return 'Konqueror';
    else if (/Firefox/.test(e)) return 'Firefox';
    else if (/MSIE|Trident\//.test(e)) return 'Internet Explorer';
    else if (/Gecko/.test(e)) return 'Mozilla';
    else return '';
}
function P() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'iOS';
    if (/Android/.test(e)) return 'Android';
    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
    else if (/Linux/i.test(e)) return 'Linux';
    else return '';
}
function U() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    else if (/iPhone/.test(e)) return 'iPhone';
    else if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function w() {
    let e = document.referrer.split('/');
    return e.length >= 3 ? e[2] : '';
}
function x() {
    let e = {},
        t = P();
    return (e.os = t), (e.browser = M()), (e.device = U()), (e.system_locale = (0, f.qf)()), e;
}
function G() {
    var e, t;
    let n = {
        browser_user_agent: window.navigator.userAgent || '',
        browser_version: E().version || ''
    };
    return {
        ...n,
        os_version: null !== (t = null === E() || void 0 === E() ? void 0 : null === (e = E().os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ''
    };
}
function k() {
    let e = {};
    return (
        (e.referrer = document.referrer),
        (e.referring_domain = w()),
        (e = {
            ...e,
            ...L(window.location.href),
            ...D()
        })
    );
}
function B(e, t) {
    let n = {};
    return Object.keys(e).map((r) => (n[''.concat(r).concat(t)] = e[r])), n;
}
function F() {
    let e = h.K.get(A);
    null == e && ((e = x()), h.K.set(A, e));
    let t = h.K.get(v);
    null == t && ((t = k()), h.K.set(v, t));
    let n = p.x.get(v);
    return (
        null == n && ((n = B(k(), '_current')), p.x.set(v, n)),
        {
            ...e,
            ...G(),
            ...t,
            ...n
        }
    );
}
function Z() {
    try {
        if (__OVERLAY__) return 'OVERLAY';
    } catch (e) {}
    return null;
}
function V() {
    var e, t, n;
    let r = {},
        i = window.GLOBAL_ENV.RELEASE_CHANNEL;
    i && (r.release_channel = i.split('-')[0]);
    let a = parseInt(((n = '331657'), '331657'), 10);
    !isNaN(a) && (r.client_build_number = a);
    let o = null == R ? void 0 : null === (e = (t = R.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
    return !isNaN(o) && (r.native_build_number = o), (r.client_event_source = Z()), r;
}
function H(e) {
    return null != N[e] && N[e] > Date.now();
}
if (null == r)
    try {
        r = F();
    } catch (e) {
        r = {};
    }
function Y(e) {
    (r = {
        ...r,
        ...e
    }),
        (i = (0, I.Z)(r));
}
Y(V());
let j = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: i } = e,
        a = (0, m.$)(r, i);
    return function e(e, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let o = null != r ? r : {},
            s = t[e];
        if (null != s) {
            if ('throttlePeriod' in s) {
                let t = [e, ...s.throttleKeys(o)].join('_');
                if (H(t)) return Promise.resolve();
                if ('number' == typeof s.throttlePercent && Math.random() > s.throttlePercent) return Promise.resolve();
                if (s.deduplicate) {
                    let e = O[t];
                    if (u()(e, o)) return Promise.resolve();
                    O[t] = o;
                }
                N[t] = Date.now() + s.throttlePeriod;
            } else if ('throttlePercent' in s) {
                if (Math.random() > s.throttlePercent) return Promise.resolve();
            } else d()(!1, 'Unsupported analytics event config: '.concat(s));
        }
        return a(e, r, i);
    };
};
function W() {
    return r;
}
function K() {
    return i;
}
