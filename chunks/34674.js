n.d(t, {
    $_: function () {
        return p;
    },
    KQ: function () {
        return _;
    },
    MU: function () {
        return d;
    },
    m0: function () {
        return f;
    },
    rf: function () {
        return b;
    },
    tu: function () {
        return m;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(315314);
var i = n(860911),
    o = n(477690),
    r = n(481060),
    a = n(134432),
    c = n(703656),
    l = n(768581),
    s = n(981631),
    u = n(689938);
let d = 0,
    { API_ENDPOINT: g, CDN_HOST: h } = window.GLOBAL_ENV;
function f(e) {
    return e.id === d;
}
function _() {
    return {
        id: d,
        name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
    };
}
function m(e) {
    switch (e.id) {
        case 0:
            return r.GlobeEarthIcon;
        case 4:
            return r.TvIcon;
        case 5:
            return r.AnalyticsIcon;
        case 6:
            return r.GameControllerIcon;
        case 8:
            break;
        case 9:
            return r.FriendsIcon;
        case 10:
            return r.WrenchIcon;
    }
    return r.AsteriskIcon;
}
function p(e) {
    let { itemId: t, hash: n } = e,
        i = new URLSearchParams({ size: (0, a.oO)(parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, a.x_)()).toString() }).toString(),
        r = l.$k ? 'webp' : 'png';
    return null != h
        ? ''.concat(location.protocol, '//').concat(h, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(r, '?').concat(i)
        : ''
              .concat(location.protocol)
              .concat(g)
              .concat(s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r), '?')
              .concat(i);
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let i = e[n];
        t.searchParams.set(n, i);
    }
    let n = t.pathname + t.search,
        o = (0, i.U)(n, !1);
    (0, c.uL)(o);
}
