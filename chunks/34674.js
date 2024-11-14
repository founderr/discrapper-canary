n.d(t, {
    $_: function () {
        return f;
    },
    KQ: function () {
        return I;
    },
    MU: function () {
        return p;
    },
    RF: function () {
        return T;
    },
    m0: function () {
        return E;
    },
    rf: function () {
        return _;
    },
    tu: function () {
        return S;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(315314);
var r = n(860911),
    i = n(477690),
    l = n(481060),
    o = n(911969),
    u = n(134432),
    c = n(703656),
    a = n(768581),
    s = n(981631),
    d = n(388032);
let p = 0,
    { API_ENDPOINT: A, CDN_HOST: m } = window.GLOBAL_ENV;
function E(e) {
    return e.id === p;
}
function I() {
    return {
        id: p,
        name: d.intl.string(d.t.E407b2)
    };
}
function S(e) {
    switch (e.id) {
        case 0:
            return l.GlobeEarthIcon;
        case 4:
            return l.TvIcon;
        case 5:
            return l.AnalyticsIcon;
        case 6:
            return l.GameControllerIcon;
        case 8:
            break;
        case 9:
            return l.FriendsIcon;
        case 10:
            return l.WrenchIcon;
    }
    return l.AsteriskIcon;
}
function f(e) {
    let { itemId: t, hash: n } = e,
        r = new URLSearchParams({ size: (0, u.oO)(parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, u.x_)()).toString() }).toString(),
        l = a.$k ? 'webp' : 'png';
    return null != m
        ? ''.concat(location.protocol, '//').concat(m, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(l, '?').concat(r)
        : ''
              .concat(location.protocol)
              .concat(A)
              .concat(s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, l), '?')
              .concat(r);
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let r = e[n];
        t.searchParams.set(n, r);
    }
    let n = t.pathname + t.search,
        i = (0, r.Ui)(n, !1);
    (0, c.uL)(i);
}
let g = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function T(e) {
    switch (e.type) {
        case o.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: s.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case o.ee.YOUTUBE:
            let r = g(e.url);
            if (null != r)
                return {
                    type: s.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: r
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
