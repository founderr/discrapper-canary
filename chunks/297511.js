n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    });
var a = n(735250),
    s = n(470079),
    r = n(442837),
    i = n(830064),
    l = n(388905),
    o = n(625128),
    c = n(362762),
    u = n(831565),
    d = n(571457),
    p = n(703656),
    _ = n(963202),
    m = n(981631),
    x = n(186901),
    E = n(689938),
    f = n(940956);
function N(e) {
    let { match: t } = e,
        n = (0, r.e7)([c.Z], () => c.Z.getState('discovery')),
        N = (0, u.v)({ location: 'game_discovery_entry_point' }),
        b = (0, _.iN)('game_discovery_entry_point'),
        I = t.params.gameId;
    s.useEffect(() => {
        (0, d.HV)({ gameId: I });
    }, [I]),
        s.useEffect(() => {
            !N && (0, p.dL)({ pathname: m.Z5c.GUILD_DISCOVERY }),
                !b && (0, p.dL)({ pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS }),
                null == n
                    ? ((0, d.zY)({ gameId: I }),
                      o.Z.openNativeAppModal('discovery', m.Etm.DEEP_LINK, {
                          type: x.jE.DISCOVERY_GAME_RESULTS,
                          params: { gameId: I }
                      }))
                    : n === m.kEZ.OPEN_FAIL &&
                      (0, p.dL)({
                          pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS,
                          search: '?game='.concat(I)
                      });
        }, [I, N, b, n]);
    let g = null == n || n === m.kEZ.OPENING || n === m.kEZ.OPEN_FAIL;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.Z, {
                className: f.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: f.container,
                children: (0, a.jsx)(l.ZP, {
                    children: g
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.Dx, { children: E.Z.Messages.APP_OPENING }), (0, a.jsx)(l.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.Dx, { children: E.Z.Messages.APP_OPENED_TITLE }), (0, a.jsx)(l.DK, { children: E.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })]
                          })
                })
            })
        ]
    });
}
r.ZP.initialize();
