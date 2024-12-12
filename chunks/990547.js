let i, a;
r.r(n),
    r.d(n, {
        AnalyticsActionHandlers: function () {
            return I.X;
        },
        Impression: function () {
            return T.Impression;
        },
        ImpressionGroups: function () {
            return T.A;
        },
        ImpressionNames: function () {
            return b.z;
        },
        ImpressionSchema: function () {
            return b.ImpressionSchema;
        },
        ImpressionTypes: function () {
            return T.n;
        },
        NetworkActionNames: function () {
            return b.a;
        },
        StandardAnalyticsLocation: function () {
            return T.StandardAnalyticsLocation;
        },
        StandardAnalyticsSchemaNameMap: function () {
            return b.StandardAnalyticsSchemaNameMap;
        },
        TypedEventProperties: function () {
            return T.TypedEventProperties;
        },
        analyticsTrackingStoreMaker: function () {
            return I.l;
        },
        encodeProperties: function () {
            return v.Z;
        },
        extendSuperProperties: function () {
            return Y;
        },
        getCampaignParams: function () {
            return D;
        },
        getDevice: function () {
            return M;
        },
        getOS: function () {
            return P;
        },
        getSuperProperties: function () {
            return K;
        },
        getSuperPropertiesBase64: function () {
            return z;
        },
        isThrottled: function () {
            return H;
        },
        trackMaker: function () {
            return W;
        }
    });
var s,
    o = r(757143);
var l = r(47120);
var u = r(348327),
    c = r.n(u),
    d = r(512722),
    f = r.n(d),
    _ = r(264344),
    h = r.n(_);
r(804098);
var p = r(627420),
    m = r(433517),
    g = r(298444),
    E = r(979675),
    v = r(947486),
    I = r(699407),
    T = r(20281),
    b = r(525769);
let y = 'deviceProperties',
    S = 'referralProperties',
    A = {},
    N = {},
    C = window.DiscordNative;
if (null != C) {
    let e;
    let n = C.remoteApp.getVersion(),
        r = C.process.platform,
        a = C.os.release,
        o = C.os.arch,
        l = C.os.appArch,
        u = C.remoteApp.getReleaseChannel(),
        c = (0, p.qf)();
    switch (r) {
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
            e = r;
    }
    if (
        ((i = {
            os: e,
            browser: 'Discord Client',
            release_channel: u || 'unknown',
            client_version: n,
            os_version: a,
            os_arch: o,
            app_arch: l,
            system_locale: c
        }),
        (null === (s = h().name) || void 0 === s ? void 0 : s.toLocaleLowerCase()) === 'electron' && ((i.browser_user_agent = h().ua || ''), (i.browser_version = h().version || '')),
        'linux' === r)
    ) {
        let e = C.crashReporter.getMetadata();
        (i.window_manager = e.wm), (i.distro = e.distro);
    } else 'darwin' === r ? (i.os_sdk_version = null == a ? void 0 : a.split('.')[0]) : 'win32' === r && (i.os_sdk_version = null == a ? void 0 : a.split('.')[2]);
}
let R = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function O(e, n) {
    if (null == e) return '';
    n = n.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let r = new RegExp('[\\?&]'.concat(n, '=([^&#]*)')).exec(e);
    return null === r || ('string' != typeof r[1] && r[1].length) ? '' : decodeURIComponent(r[1]).replace(/\+/g, ' ');
}
function D(e) {
    let n = {};
    return (
        R.forEach((r) => {
            let i = O(e, r);
            i.length > 0 && (n[r] = i);
        }),
        n
    );
}
function L() {
    let e = document.referrer;
    if (0 === e.search('https?://(.*)google.([^/?]*)')) return 'google';
    if (0 === e.search('https?://(.*)bing.com')) return 'bing';
    if (0 === e.search('https?://(.*)yahoo.com')) return 'yahoo';
    else if (0 === e.search('https?://(.*)duckduckgo.com')) return 'duckduckgo';
    else return null;
}
function x() {
    let e = {},
        n = document.referrer,
        r = L(),
        i = 'yahoo' !== r ? 'q' : 'p';
    if (null != r) {
        e.search_engine = r;
        let a = O(n, i);
        a.length > 0 && (e.mp_keyword = a);
    }
    return e;
}
function w() {
    let { userAgent: e, vendor: n = '' } = window.navigator,
        { opera: r } = window;
    if (r) return /Mini/.test(e) ? 'Opera Mini' : 'Opera';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/FBIOS/.test(e)) return 'Facebook Mobile';
    else if (/CriOS/.test(e)) return 'Chrome iOS';
    else if (/Apple/.test(n)) return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2) ? 'Mobile Safari' : 'Safari';
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
function M() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    else if (/iPhone/.test(e)) return 'iPhone';
    else if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function k() {
    let e = document.referrer.split('/');
    return e.length >= 3 ? e[2] : '';
}
function U() {
    let e = {},
        n = P();
    return (e.os = n), (e.browser = w()), (e.device = M()), (e.system_locale = (0, p.qf)()), e;
}
function B() {
    var e, n;
    let r = {
        browser_user_agent: window.navigator.userAgent || '',
        browser_version: h().version || ''
    };
    return {
        ...r,
        os_version: null !== (n = null === h() || void 0 === h() ? void 0 : null === (e = h().os) || void 0 === e ? void 0 : e.version) && void 0 !== n ? n : ''
    };
}
function G() {
    let e = {};
    return (
        (e.referrer = document.referrer),
        (e.referring_domain = k()),
        (e = {
            ...e,
            ...D(window.location.href),
            ...x()
        })
    );
}
function Z(e, n) {
    let r = {};
    return Object.keys(e).map((i) => (r[''.concat(i).concat(n)] = e[i])), r;
}
function F() {
    let e = m.K.get(y);
    null == e && ((e = U()), m.K.set(y, e));
    let n = m.K.get(S);
    null == n && ((n = G()), m.K.set(S, n));
    let r = g.x.get(S);
    return (
        null == r && ((r = Z(G(), '_current')), g.x.set(S, r)),
        {
            ...e,
            ...B(),
            ...n,
            ...r
        }
    );
}
function V() {
    try {
        if (__OVERLAY__) return 'OVERLAY';
    } catch (e) {}
    return null;
}
function j() {
    var e, n, r;
    let i = {},
        a = window.GLOBAL_ENV.RELEASE_CHANNEL;
    a && (i.release_channel = a.split('-')[0]);
    let s = parseInt(((r = '353120'), '353120'), 10);
    !isNaN(s) && (i.client_build_number = s);
    let o = null == C ? void 0 : null === (e = (n = C.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(n);
    return !isNaN(o) && (i.native_build_number = o), (i.client_event_source = V()), i;
}
function H(e) {
    return null != A[e] && A[e] > Date.now();
}
if (null == i)
    try {
        i = F();
    } catch (e) {
        i = {};
    }
function Y(e) {
    (i = {
        ...i,
        ...e
    }),
        (a = (0, v.Z)(i));
}
Y(j());
let W = (e) => {
    let { analyticEventConfigs: n, dispatcher: i, TRACK_ACTION_NAME: a } = e,
        s = (0, E.$)(i, a);
    return function e(e, i) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != r.g.isServerRendering && !0 === r.g.isServerRendering) return Promise.resolve();
        let o = null != i ? i : {},
            l = n[e];
        if (null != l) {
            if ('throttlePeriod' in l) {
                let n = [e, ...l.throttleKeys(o)].join('_');
                if (H(n)) return Promise.resolve();
                if ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent) return Promise.resolve();
                if (l.deduplicate) {
                    let e = N[n];
                    if (c()(e, o)) return Promise.resolve();
                    N[n] = o;
                }
                A[n] = Date.now() + l.throttlePeriod;
            } else if ('throttlePercent' in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else f()(!1, 'Unsupported analytics event config: '.concat(l));
        }
        return s(e, i, a);
    };
};
function K() {
    return i;
}
function z() {
    return a;
}
