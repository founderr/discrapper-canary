var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(829968),
    l = n(565138),
    u = n(474936),
    c = n(689938),
    d = n(454416);
let _ = {
    XXSMALL: d.xxsmall,
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
};
function E(e) {
    switch (e) {
        case _.XXSMALL:
            return 16;
        case _.XSMALL:
            return 24;
        case _.SMALL:
            return 30;
        case _.MEDIUM:
            return 40;
        case _.LARGE:
            return 60;
        default:
            return 80;
    }
}
function f(e) {
    if (null == e) return null;
    switch (e) {
        case u.Si.GUILD:
            return n(632342);
        case u.Si.TIER_0:
            return n(467596);
        case u.Si.TIER_1:
            return n(670957);
        case u.Si.TIER_2:
        case u.Si.LEGACY:
            return n(480768);
        default:
            return null;
    }
}
function h(e) {
    switch (e) {
        case _.XSMALL:
            return l.Z.Sizes.SMALLER;
        case _.SMALL:
            return l.Z.Sizes.SMALL;
        case _.LARGE:
            return l.Z.Sizes.LARGE;
        default:
        case _.MEDIUM:
            return l.Z.Sizes.MEDIUM;
    }
}
let p = (e) => {
    let t,
        { game: n, guild: i, skuId: u, pid: p, className: m, guildClassName: I, size: T = _.MEDIUM } = e;
    if ((null != u && (t = f(u)), null != n && null == t && (t = n.getIconURL(E(T))), null == (t = (0, s.Z)(p, t)) && null != i)) {
        let e = h(T);
        return (0, r.jsx)(l.Z, {
            className: a()(d.gameIcon, I, m),
            guild: i,
            size: e
        });
    }
    if (null == t)
        return (0, r.jsx)(o.UnknownGameIcon, {
            size: 'md',
            color: 'currentColor',
            className: a()(d.gameIcon, T, m)
        });
    let g = null == n ? void 0 : n.name,
        S = null != g && '' !== g ? c.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: g }) : c.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
    return (0, r.jsx)('img', {
        alt: S,
        src: t,
        className: a()(d.gameIcon, T, m)
    });
};
(p.Sizes = _), (t.Z = p);
