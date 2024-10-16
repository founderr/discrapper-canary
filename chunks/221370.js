a.d(n, {
    Z: function () {
        return I;
    }
}),
    a(47120),
    a(653041);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(758713),
    l = a(657707),
    c = a(481060),
    d = a(689938),
    u = a(51527);
let _ = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function E(e) {
    let { platform: n, ...a } = e;
    switch (n) {
        case o.z.DESKTOP:
            return (0, t.jsx)(l.pzj, {
                size: 'xs',
                ...a
            });
        case o.z.XBOX:
            return (0, t.jsx)(l.Mko, {
                size: 'xs',
                ...a
            });
        case o.z.PLAYSTATION:
            return (0, t.jsx)(l.Tsp, {
                size: 'xs',
                ...a
            });
        case o.z.NINTENDO:
            return (0, t.jsx)(l.aPH, {
                size: 'xs',
                ...a
            });
        default:
            return null;
    }
}
function m(e) {
    let { platforms: n } = e;
    return (0, t.jsx)('div', {
        className: i()(u.row, u.gapSm),
        style: { alignItems: 'center' },
        children: n.map((e) =>
            (0, t.jsx)(
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
                        (0, t.jsx)(E, {
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
    let { detectedGame: n, className: a } = e,
        s = r.useMemo(() => {
            let e = new Set(n.platforms),
                a = [...e];
            return !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && a.push(o.z.DESKTOP), a.filter((e) => _.includes(e));
        }, [n.platforms]);
    return 0 === s.length
        ? null
        : (0, t.jsx)('div', {
              className: i()(u.column, u.gapLg, a),
              children: s.length > 0 && (0, t.jsx)(m, { platforms: s })
          });
}
