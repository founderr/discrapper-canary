t.d(n, {
    $_: function () {
        return A;
    },
    KQ: function () {
        return I;
    },
    MU: function () {
        return E;
    },
    RF: function () {
        return p;
    },
    m0: function () {
        return _;
    },
    rf: function () {
        return C;
    },
    tu: function () {
        return O;
    }
}),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120),
    t(315314);
var c = t(860911),
    a = t(477690),
    l = t(481060),
    o = t(911969),
    r = t(134432),
    i = t(703656),
    s = t(768581),
    u = t(981631),
    T = t(689938);
let E = 0,
    { API_ENDPOINT: d, CDN_HOST: N } = window.GLOBAL_ENV;
function _(e) {
    return e.id === E;
}
function I() {
    return {
        id: E,
        name: T.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
    };
}
function O(e) {
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
function A(e) {
    let { itemId: n, hash: t } = e,
        c = new URLSearchParams({ size: (0, r.oO)(parseFloat(a.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, r.x_)()).toString() }).toString(),
        l = s.$k ? 'webp' : 'png';
    return null != N
        ? ''.concat(location.protocol, '//').concat(N, '/app-assets/application-directory/collection-items/').concat(n, '/').concat(t, '.').concat(l, '?').concat(c)
        : ''
              .concat(location.protocol)
              .concat(d)
              .concat(u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, l), '?')
              .concat(c);
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = new URL(location.href);
    for (let t in e) {
        let c = e[t];
        n.searchParams.set(t, c);
    }
    let t = n.pathname + n.search,
        a = (0, c.Ui)(t, !1);
    (0, i.uL)(a);
}
let m = (e) => {
    if (null == e) return null;
    let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != n ? n[1] : null;
};
function p(e) {
    switch (e.type) {
        case o.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: u.s9s.IMG,
                width: 0,
                height: 0,
                src: t
            };
        case o.ee.YOUTUBE:
            let c = m(e.url);
            if (null != c)
                return {
                    type: u.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: c
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
