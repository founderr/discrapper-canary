t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var a = t(735250),
    s = t(470079),
    i = t(442837),
    r = t(830064),
    l = t(388905),
    o = t(625128),
    c = t(362762),
    u = t(831565),
    d = t(703656),
    p = t(963202),
    m = t(981631),
    x = t(186901),
    _ = t(689938),
    b = t(940956);
function N(e) {
    let { match: n } = e,
        t = (0, i.e7)([c.Z], () => c.Z.getState('discovery')),
        N = (0, u.v)({ location: 'game_discovery_entry_point' }),
        E = (0, p.iN)('game_discovery_entry_point'),
        h = n.params.gameId;
    s.useEffect(() => {
        !N && (0, d.dL)({ pathname: m.Z5c.GUILD_DISCOVERY }),
            !E && (0, d.dL)({ pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS }),
            null == t
                ? o.Z.openNativeAppModal('discovery', m.Etm.DEEP_LINK, {
                      type: x.jE.DISCOVERY_GAME_RESULTS,
                      params: { gameId: h }
                  })
                : t === m.kEZ.OPEN_FAIL &&
                  (0, d.dL)({
                      pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS,
                      search: '?game='.concat(h)
                  });
    }, [h, N, E, t]);
    let g = null == t || t === m.kEZ.OPENING || t === m.kEZ.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.Z, {
                className: b.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: b.container,
                children: (0, a.jsx)(l.ZP, {
                    children: g
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.Dx, { children: _.Z.Messages.APP_OPENING }), (0, a.jsx)(l.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.Dx, { children: _.Z.Messages.APP_OPENED_TITLE }), (0, a.jsx)(l.DK, { children: _.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })]
                          })
                })
            })
        ]
    });
}
i.ZP.initialize();
