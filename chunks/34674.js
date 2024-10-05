t.d(n, {
    $_: function () {
        return O;
    },
    KQ: function () {
        return _;
    },
    MU: function () {
        return T;
    },
    m0: function () {
        return d;
    },
    rf: function () {
        return A;
    },
    tu: function () {
        return I;
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
    o = t(481060),
    l = t(134432),
    r = t(703656),
    i = t(768581),
    s = t(981631),
    u = t(689938);
let T = 0,
    { API_ENDPOINT: E, CDN_HOST: N } = window.GLOBAL_ENV;
function d(e) {
    return e.id === T;
}
function _() {
    return {
        id: T,
        name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
    };
}
function I(e) {
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
function O(e) {
    let { itemId: n, hash: t } = e,
        c = new URLSearchParams({ size: (0, l.oO)(parseFloat(a.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, l.x_)()).toString() }).toString(),
        o = i.$k ? 'webp' : 'png';
    return null != N
        ? ''.concat(location.protocol, '//').concat(N, '/app-assets/application-directory/collection-items/').concat(n, '/').concat(t, '.').concat(o, '?').concat(c)
        : ''
              .concat(location.protocol)
              .concat(E)
              .concat(s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, o), '?')
              .concat(c);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = new URL(location.href);
    for (let t in e) {
        let c = e[t];
        n.searchParams.set(t, c);
    }
    let t = n.pathname + n.search,
        a = (0, c.Ui)(t, !1);
    (0, r.uL)(a);
}
