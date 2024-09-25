n.d(t, {
    DM: function () {
        return _;
    },
    Ey: function () {
        return E;
    },
    No: function () {
        return p;
    },
    Ry: function () {
        return I;
    },
    qX: function () {
        return T;
    },
    u3: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(873546),
    s = n(481060),
    l = n(626135),
    u = n(981631),
    c = n(689938),
    d = n(250812);
let _ = Object.freeze({
    DEFAULT: d.colorDefault,
    NEUTRAL: d.colorNeutral,
    BRAND: d.colorBrand,
    WARNING: d.colorWarning,
    DANGER: d.colorDanger,
    INFO: d.colorInfo,
    STREAMER_MODE: d.colorStreamerMode,
    CUSTOM: d.colorCustom,
    SPOTIFY: d.colorSpotify,
    PLAYSTATION: d.colorPlayStation,
    PREMIUM_TIER_0: d.colorPremiumTier0,
    PREMIUM_TIER_1: d.colorPremiumTier1,
    PREMIUM_TIER_2: d.colorPremiumTier2
});
function E(e) {
    let { children: t, className: n, minor: i = !1, ...o } = e;
    return (0, r.jsx)(s.FocusRing, {
        children: (0, r.jsx)('button', {
            className: a()(d.button, n, { [d.buttonMinor]: i }),
            ...o,
            children: t
        })
    });
}
function f(e, t) {
    null != e &&
        l.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
            notice_type: e,
            ...t
        });
}
function h(e) {
    null != e && l.default.track(u.rMx.APP_NOTICE_CLOSED, { notice_type: e });
}
function p(e) {
    let { children: t, noticeType: n, additionalTrackingProps: i, ...a } = e;
    return (0, r.jsx)(E, {
        ...a,
        onClick: (e) => {
            null != a.onClick && a.onClick(e), f(n, i);
        },
        children: t
    });
}
function m(e) {
    let { children: t, href: n, ...i } = e;
    return (0, r.jsx)(s.Anchor, {
        ...i,
        className: d.button,
        href: n,
        children: t
    });
}
function I(e) {
    let { onClick: t, noticeType: n } = e;
    return (0, r.jsx)(s.Clickable, {
        focusProps: { offset: 6 },
        className: d.closeButton,
        onClick: () => {
            t(), h(n);
        },
        'aria-label': c.Z.Messages.DISMISS,
        children: (0, r.jsx)(s.XSmallIcon, {
            size: 'sm',
            color: 'currentColor',
            className: d.closeIcon
        })
    });
}
function T(e) {
    let { color: t = _.DEFAULT, className: n, style: i, children: s } = e;
    return (0, r.jsx)('div', {
        className: a()(d.notice, { [d.isMobile]: o.tq }, n, t),
        style: null != i ? i : void 0,
        children: s
    });
}
