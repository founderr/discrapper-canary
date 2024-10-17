n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    i = n.n(s),
    o = n(758713),
    l = n(657707),
    c = n(481060),
    d = n(689938),
    u = n(51527);
let _ = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function E(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case o.z.DESKTOP:
            return (0, a.jsx)(l.pzj, {
                size: 'xs',
                ...n
            });
        case o.z.XBOX:
            return (0, a.jsx)(l.Mko, {
                size: 'xs',
                ...n
            });
        case o.z.PLAYSTATION:
            return (0, a.jsx)(l.Tsp, {
                size: 'xs',
                ...n
            });
        case o.z.NINTENDO:
            return (0, a.jsx)(l.aPH, {
                size: 'xs',
                ...n
            });
        default:
            return null;
    }
}
function m(e) {
    let { platforms: t } = e;
    return (0, a.jsx)('div', {
        className: i()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: t.map((e) =>
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
                    children: (t) =>
                        (0, a.jsx)(E, {
                            ...t,
                            platform: e
                        })
                },
                e
            )
        )
    });
}
function I(e) {
    let { detectedGame: t, className: n } = e,
        s = r.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && n.push(o.z.DESKTOP), n.filter((e) => _.includes(e));
        }, [t.platforms]);
    return 0 === s.length
        ? null
        : (0, a.jsx)('div', {
              className: i()(u.column, u.gapLg, n),
              children: s.length > 0 && (0, a.jsx)(m, { platforms: s })
          });
}
