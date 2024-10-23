t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120),
    t(653041);
var a = t(200651),
    r = t(192379),
    s = t(120356),
    i = t.n(s),
    o = t(758713),
    l = t(657707),
    c = t(481060),
    d = t(689938),
    u = t(51527);
let _ = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function E(e) {
    let { platform: n, ...t } = e;
    switch (n) {
        case o.z.DESKTOP:
            return (0, a.jsx)(l.pzj, {
                size: 'xs',
                ...t
            });
        case o.z.XBOX:
            return (0, a.jsx)(l.Mko, {
                size: 'xs',
                ...t
            });
        case o.z.PLAYSTATION:
            return (0, a.jsx)(l.Tsp, {
                size: 'xs',
                ...t
            });
        case o.z.NINTENDO:
            return (0, a.jsx)(l.aPH, {
                size: 'xs',
                ...t
            });
        default:
            return null;
    }
}
function m(e) {
    let { platforms: n } = e;
    return (0, a.jsx)('div', {
        className: i()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: n.map((e) =>
            (0, a.jsx)(
                c.Tooltip,
                {
                    text: (function (e) {
                        switch (e) {
                            case o.z.DESKTOP:
                                return d.Z.Messages.GAME_PROFILE_PLATFORM_DESKTOP;
                            case o.z.XBOX:
                                return d.Z.Messages.GAME_PROFILE_PLATFORM_XBOX;
                            case o.z.PLAYSTATION:
                                return d.Z.Messages.GAME_PROFILE_PLATFORM_PLAYSTATION;
                            case o.z.NINTENDO:
                                return d.Z.Messages.GAME_PROFILE_PLATFORM_NINTENDO;
                            default:
                                return null;
                        }
                    })(e),
                    children: (n) =>
                        (0, a.jsx)(E, {
                            ...n,
                            platform: e
                        })
                },
                e
            )
        )
    });
}
function I(e) {
    let { detectedGame: n, className: t } = e,
        s = r.useMemo(() => {
            let e = new Set(n.platforms),
                t = [...e];
            return !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && t.push(o.z.DESKTOP), t.filter((e) => _.includes(e));
        }, [n.platforms]);
    return 0 === s.length
        ? null
        : (0, a.jsx)('div', {
              className: i()(u.column, u.gapLg, t),
              children: s.length > 0 && (0, a.jsx)(m, { platforms: s })
          });
}
