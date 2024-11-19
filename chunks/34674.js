n.d(t, {
    $_: function () {
        return m;
    },
    KQ: function () {
        return p;
    },
    MU: function () {
        return _;
    },
    RF: function () {
        return T;
    },
    m0: function () {
        return g;
    },
    rf: function () {
        return C;
    },
    tu: function () {
        return h;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(315314);
var o = n(860911),
    i = n(477690),
    a = n(481060),
    r = n(911969),
    c = n(134432),
    l = n(703656),
    s = n(768581),
    u = n(981631),
    d = n(388032);
let _ = 0,
    { API_ENDPOINT: b, CDN_HOST: f } = window.GLOBAL_ENV;
function g(e) {
    return e.id === _;
}
function p() {
    return {
        id: _,
        name: d.intl.string(d.t.E407b2)
    };
}
function h(e) {
    switch (e.id) {
        case 0:
            return a.GlobeEarthIcon;
        case 4:
            return a.TvIcon;
        case 5:
            return a.AnalyticsIcon;
        case 6:
            return a.GameControllerIcon;
        case 8:
            break;
        case 9:
            return a.FriendsIcon;
        case 10:
            return a.WrenchIcon;
    }
    return a.AsteriskIcon;
}
function m(e) {
    let { itemId: t, hash: n } = e,
        o = new URLSearchParams({ size: (0, c.oO)(parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, c.x_)()).toString() }).toString(),
        a = s.$k ? 'webp' : 'png';
    return null != f
        ? ''.concat(location.protocol, '//').concat(f, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(a, '?').concat(o)
        : ''
              .concat(location.protocol)
              .concat(b)
              .concat(u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, a), '?')
              .concat(o);
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let o = e[n];
        t.searchParams.set(n, o);
    }
    let n = t.pathname + t.search,
        i = (0, o.Ui)(n, !1);
    (0, l.uL)(i);
}
let I = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function T(e) {
    switch (e.type) {
        case r.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: u.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case r.ee.YOUTUBE:
            let o = I(e.url);
            if (null != o)
                return {
                    type: u.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: o
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
