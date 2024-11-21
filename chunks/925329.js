var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(829968),
    l = n(565138),
    u = n(474936),
    c = n(388032),
    d = n(454416);
let f = {
        XXSMALL: d.xxsmall,
        XSMALL: d.xsmall,
        SMALL: d.small,
        MEDIUM: d.medium,
        LARGE: d.large
    },
    _ = (e) => {
        let t,
            { game: i, guild: _, skuId: p, pid: h, className: m, guildClassName: g, size: E = f.MEDIUM } = e;
        if (
            (null != p &&
                (t = (function (e) {
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
                })(p)),
            null != i &&
                null == t &&
                (t = i.getIconURL(
                    (function (e) {
                        switch (e) {
                            case f.XXSMALL:
                                return 16;
                            case f.XSMALL:
                                return 24;
                            case f.SMALL:
                                return 30;
                            case f.MEDIUM:
                                return 40;
                            case f.LARGE:
                                return 60;
                            default:
                                return 80;
                        }
                    })(E)
                )),
            null == (t = (0, o.Z)(h, t)) && null != _)
        ) {
            let e = (function (e) {
                switch (e) {
                    case f.XSMALL:
                        return l.Z.Sizes.SMALLER;
                    case f.SMALL:
                        return l.Z.Sizes.SMALL;
                    case f.LARGE:
                        return l.Z.Sizes.LARGE;
                    default:
                    case f.MEDIUM:
                        return l.Z.Sizes.MEDIUM;
                }
            })(E);
            return (0, r.jsx)(l.Z, {
                className: a()(d.gameIcon, g, m),
                guild: _,
                size: e
            });
        }
        if (null == t)
            return (0, r.jsx)(s.UnknownGameIcon, {
                size: 'md',
                color: 'currentColor',
                className: a()(d.gameIcon, E, m)
            });
        let v = null == i ? void 0 : i.name,
            b = null != v && '' !== v ? c.intl.formatToPlainString(c.t.tiKyYm, { applicationName: v }) : c.intl.string(c.t['2B/phI']);
        return (0, r.jsx)('img', {
            alt: b,
            src: t,
            className: a()(d.gameIcon, E, m)
        });
    };
(_.Sizes = f), (t.Z = _);
