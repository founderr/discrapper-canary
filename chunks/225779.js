n.d(t, {
    DM: function () {
        return f;
    },
    Ey: function () {
        return _;
    },
    No: function () {
        return p;
    },
    Ry: function () {
        return m;
    },
    qX: function () {
        return g;
    },
    u3: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(873546),
    o = n(481060),
    l = n(626135),
    u = n(981631),
    c = n(388032),
    d = n(544835);
let f = Object.freeze({
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
function _(e) {
    let { children: t, className: n, minor: i = !1, ...s } = e;
    return (0, r.jsx)(o.FocusRing, {
        children: (0, r.jsx)('button', {
            className: a()(d.button, n, { [d.buttonMinor]: i }),
            ...s,
            children: t
        })
    });
}
function p(e) {
    let { children: t, noticeType: n, additionalTrackingProps: i, ...a } = e;
    return (0, r.jsx)(_, {
        ...a,
        onClick: (e) => {
            var t, r;
            null != a.onClick && a.onClick(e),
                (t = n),
                (r = i),
                null != t &&
                    l.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                        notice_type: t,
                        ...r
                    });
        },
        children: t
    });
}
function h(e) {
    let { children: t, href: n, ...i } = e;
    return (0, r.jsx)(o.Anchor, {
        ...i,
        className: d.button,
        href: n,
        children: t
    });
}
function m(e) {
    let { onClick: t, noticeType: n } = e;
    return (0, r.jsx)(o.Clickable, {
        focusProps: { offset: 6 },
        className: d.closeButton,
        onClick: () => {
            var e;
            t(), null != (e = n) && l.default.track(u.rMx.APP_NOTICE_CLOSED, { notice_type: e });
        },
        'aria-label': c.intl.string(c.t.WAI6xs),
        children: (0, r.jsx)(o.XSmallIcon, {
            size: 'sm',
            color: 'currentColor',
            className: d.closeIcon
        })
    });
}
function g(e) {
    let { color: t = f.DEFAULT, className: n, style: i, children: o } = e;
    return (0, r.jsx)('div', {
        className: a()(d.notice, { [d.isMobile]: s.tq }, n, t),
        style: null != i ? i : void 0,
        children: o
    });
}
