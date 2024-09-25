n.d(t, {
    $_: function () {
        return v;
    },
    KQ: function () {
        return S;
    },
    MU: function () {
        return m;
    },
    m0: function () {
        return g;
    },
    rf: function () {
        return N;
    },
    tu: function () {
        return A;
    }
});
var r = n(610138);
var i = n(216116);
var a = n(78328);
var o = n(815648);
var s = n(47120);
var l = n(315314);
var u = n(860911),
    c = n(477690),
    d = n(481060),
    _ = n(134432),
    E = n(703656),
    f = n(768581),
    h = n(981631),
    p = n(689938);
let m = 0,
    { API_ENDPOINT: I, CDN_HOST: T } = window.GLOBAL_ENV;
function g(e) {
    return e.id === m;
}
function S() {
    return {
        id: m,
        name: p.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
    };
}
function A(e) {
    switch (e.id) {
        case 0:
            return d.GlobeEarthIcon;
        case 4:
            return d.TvIcon;
        case 5:
            return d.AnalyticsIcon;
        case 6:
            return d.GameControllerIcon;
        case 8:
            break;
        case 9:
            return d.FriendsIcon;
        case 10:
            return d.WrenchIcon;
    }
    return d.AsteriskIcon;
}
function v(e) {
    let { itemId: t, hash: n } = e,
        r = new URLSearchParams({ size: (0, _.oO)(parseFloat(c.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, _.x_)()).toString() }).toString(),
        i = f.$k ? 'webp' : 'png';
    return null != T
        ? ''.concat(location.protocol, '//').concat(T, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(i, '?').concat(r)
        : ''
              .concat(location.protocol)
              .concat(I)
              .concat(h.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, i), '?')
              .concat(r);
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let r = e[n];
        t.searchParams.set(n, r);
    }
    let n = t.pathname + t.search,
        r = (0, u.U)(n, !1);
    (0, E.uL)(r);
}
