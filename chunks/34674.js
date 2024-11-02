t.d(n, {
    $_: function () {
        return N;
    },
    KQ: function () {
        return p;
    },
    MU: function () {
        return T;
    },
    RF: function () {
        return C;
    },
    m0: function () {
        return m;
    },
    rf: function () {
        return I;
    },
    tu: function () {
        return _;
    }
}),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120),
    t(315314);
var c = t(860911),
    l = t(477690),
    o = t(481060),
    a = t(911969),
    r = t(134432),
    i = t(703656),
    s = t(768581),
    u = t(981631),
    d = t(388032);
let T = 0,
    { API_ENDPOINT: A, CDN_HOST: E } = window.GLOBAL_ENV;
function m(e) {
    return e.id === T;
}
function p() {
    return {
        id: T,
        name: d.intl.string(d.t.E407b2)
    };
}
function _(e) {
    switch (e.id) {
        case 0:
            return o.GlobeEarthIcon;
        case 4:
            return o.TvIcon;
        case 5:
            return o.AnalyticsIcon;
        case 6:
            return o.GameControllerIcon;
        case 8:
            break;
        case 9:
            return o.FriendsIcon;
        case 10:
            return o.WrenchIcon;
    }
    return o.AsteriskIcon;
}
function N(e) {
    let { itemId: n, hash: t } = e,
        c = new URLSearchParams({ size: (0, r.oO)(parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, r.x_)()).toString() }).toString(),
        o = s.$k ? 'webp' : 'png';
    return null != E
        ? ''.concat(location.protocol, '//').concat(E, '/app-assets/application-directory/collection-items/').concat(n, '/').concat(t, '.').concat(o, '?').concat(c)
        : ''
              .concat(location.protocol)
              .concat(A)
              .concat(u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, o), '?')
              .concat(c);
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = new URL(location.href);
    for (let t in e) {
        let c = e[t];
        n.searchParams.set(t, c);
    }
    let t = n.pathname + n.search,
        l = (0, c.Ui)(t, !1);
    (0, i.uL)(l);
}
let h = (e) => {
    if (null == e) return null;
    let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != n ? n[1] : null;
};
function C(e) {
    switch (e.type) {
        case a.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: u.s9s.IMG,
                width: 0,
                height: 0,
                src: t
            };
        case a.ee.YOUTUBE:
            let c = h(e.url);
            if (null != c)
                return {
                    type: u.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: c
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
