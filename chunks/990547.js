let r, i;
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: function () {
            return g.X;
        },
        Impression: function () {
            return E.Impression;
        },
        ImpressionGroups: function () {
            return E.A;
        },
        ImpressionNames: function () {
            return v.z;
        },
        ImpressionSchema: function () {
            return v.ImpressionSchema;
        },
        ImpressionTypes: function () {
            return E.n;
        },
        NetworkActionNames: function () {
            return v.a;
        },
        StandardAnalyticsLocation: function () {
            return E.StandardAnalyticsLocation;
        },
        StandardAnalyticsSchemaNameMap: function () {
            return v.StandardAnalyticsSchemaNameMap;
        },
        TypedEventProperties: function () {
            return E.TypedEventProperties;
        },
        analyticsTrackingStoreMaker: function () {
            return g.l;
        },
        encodeProperties: function () {
            return m.Z;
        },
        extendSuperProperties: function () {
            return x;
        },
        getCampaignParams: function () {
            return C;
        },
        getDevice: function () {
            return O;
        },
        getOS: function () {
            return R;
        },
        getSuperProperties: function () {
            return M;
        },
        getSuperPropertiesBase64: function () {
            return P;
        },
        isThrottled: function () {
            return L;
        },
        trackMaker: function () {
            return w;
        }
    }),
    n(757143),
    n(47120);
var a,
    s = n(348327),
    o = n.n(s),
    l = n(512722),
    u = n.n(l),
    c = n(264344),
    d = n.n(c);
n(804098);
var f = n(627420),
    _ = n(433517),
    h = n(298444),
    p = n(979675),
    m = n(947486),
    g = n(699407),
    E = n(20281),
    v = n(525769);
let I = 'deviceProperties',
    S = 'referralProperties',
    T = {},
    b = {},
    y = window.DiscordNative;
if (null != y) {
    let e;
    let t = y.remoteApp.getVersion(),
        n = y.process.platform,
        i = y.os.release,
        s = y.os.arch,
        o = y.os.appArch,
        l = y.remoteApp.getReleaseChannel(),
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
            os_arch: s,
            app_arch: o,
            system_locale: u
        }),
        (null === (a = d().name) || void 0 === a ? void 0 : a.toLocaleLowerCase()) === 'electron' && ((r.browser_user_agent = d().ua || ''), (r.browser_version = d().version || '')),
        'linux' === n)
    ) {
        let e = y.crashReporter.getMetadata();
        (r.window_manager = e.wm), (r.distro = e.distro);
    } else 'darwin' === n ? (r.os_sdk_version = null == i ? void 0 : i.split('.')[0]) : 'win32' === n && (r.os_sdk_version = null == i ? void 0 : i.split('.')[2]);
}
let A = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function N(e, t) {
    if (null == e) return '';
    t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let n = new RegExp('[\\?&]'.concat(t, '=([^&#]*)')).exec(e);
    return null === n || ('string' != typeof n[1] && n[1].length) ? '' : decodeURIComponent(n[1]).replace(/\+/g, ' ');
}
function C(e) {
    let t = {};
    return (
        A.forEach((n) => {
            let r = N(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function R() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'iOS';
    if (/Android/.test(e)) return 'Android';
    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
    else if (/Linux/i.test(e)) return 'Linux';
    else return '';
}
function O() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    else if (/iPhone/.test(e)) return 'iPhone';
    else if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function D() {
    let e = {};
    return (
        (e.referrer = document.referrer),
        (e.referring_domain = (function () {
            let e = document.referrer.split('/');
            return e.length >= 3 ? e[2] : '';
        })()),
        (e = {
            ...e,
            ...C(window.location.href),
            ...(function () {
                let e = {},
                    t = document.referrer,
                    n = (function () {
                        let e = document.referrer;
                        if (0 === e.search('https?://(.*)google.([^/?]*)')) return 'google';
                        if (0 === e.search('https?://(.*)bing.com')) return 'bing';
                        if (0 === e.search('https?://(.*)yahoo.com')) return 'yahoo';
                        else if (0 === e.search('https?://(.*)duckduckgo.com')) return 'duckduckgo';
                        else return null;
                    })();
                if (null != n) {
                    e.search_engine = n;
                    let r = N(t, 'yahoo' !== n ? 'q' : 'p');
                    r.length > 0 && (e.mp_keyword = r);
                }
                return e;
            })()
        })
    );
}
function L(e) {
    return null != T[e] && T[e] > Date.now();
}
if (null == r)
    try {
        let e, t, n;
        (e = _.K.get(I)),
            null == e &&
                ((e = (function () {
                    let e = {},
                        t = R();
                    return (
                        (e.os = t),
                        (e.browser = (function () {
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
                        })()),
                        (e.device = O()),
                        (e.system_locale = (0, f.qf)()),
                        e
                    );
                })()),
                _.K.set(I, e)),
            (t = _.K.get(S)),
            null == t && ((t = D()), _.K.set(S, t)),
            (n = h.x.get(S)),
            null == n &&
                ((n = (function (e, t) {
                    let n = {};
                    return Object.keys(e).map((r) => (n[''.concat(r).concat(t)] = e[r])), n;
                })(D(), '_current')),
                h.x.set(S, n)),
            (r = {
                ...e,
                ...(function () {
                    var e, t;
                    let n = {
                        browser_user_agent: window.navigator.userAgent || '',
                        browser_version: d().version || ''
                    };
                    return {
                        ...n,
                        os_version: null !== (t = null === d() || void 0 === d() ? void 0 : null === (e = d().os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ''
                    };
                })(),
                ...t,
                ...n
            });
    } catch (e) {
        r = {};
    }
function x(e) {
    (r = {
        ...r,
        ...e
    }),
        (i = (0, m.Z)(r));
}
x(
    (function () {
        var e, t, n;
        let r = {},
            i = window.GLOBAL_ENV.RELEASE_CHANNEL;
        i && (r.release_channel = i.split('-')[0]);
        let a = parseInt(((n = '342408'), '342408'), 10);
        !isNaN(a) && (r.client_build_number = a);
        let s = null == y ? void 0 : null === (e = (t = y.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
        return (
            !isNaN(s) && (r.native_build_number = s),
            (r.client_event_source = (function () {
                try {
                    if (__OVERLAY__) return 'OVERLAY';
                } catch (e) {}
                return null;
            })()),
            r
        );
    })()
);
let w = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: i } = e,
        a = (0, p.$)(r, i);
    return function (e, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let s = null != r ? r : {},
            l = t[e];
        if (null != l) {
            if ('throttlePeriod' in l) {
                let t = [e, ...l.throttleKeys(s)].join('_');
                if (L(t)) return Promise.resolve();
                if ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent) return Promise.resolve();
                if (l.deduplicate) {
                    let e = b[t];
                    if (o()(e, s)) return Promise.resolve();
                    b[t] = s;
                }
                T[t] = Date.now() + l.throttlePeriod;
            } else if ('throttlePercent' in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else u()(!1, 'Unsupported analytics event config: '.concat(l));
        }
        return a(e, r, i);
    };
};
function M() {
    return r;
}
function P() {
    return i;
}
