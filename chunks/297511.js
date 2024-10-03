n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    });
var a = n(735250),
    r = n(470079),
    s = n(442837),
    i = n(893776),
    o = n(830064),
    c = n(388905),
    l = n(625128),
    d = n(362762),
    u = n(353926),
    m = n(831565),
    p = n(571457),
    _ = n(703656),
    x = n(314897),
    g = n(963202),
    b = n(569234),
    E = n(981631),
    f = n(186901),
    h = n(689938),
    I = n(940956);
function N(e) {
    let { match: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getState('discovery')),
        N = (0, s.e7)([x.default], () => x.default.isAuthenticated()),
        A = (0, m.v)({ location: 'game_discovery_entry_point' }),
        L = (0, g.iN)('game_discovery_entry_point'),
        v = t.params.gameId,
        D = (0, g.io)('landing page'),
        j = (0, s.e7)([u.Z], () => u.Z.hasLoadedExperiments);
    if (
        (r.useEffect(() => {
            j && D && (0, p.HV)({ gameId: v });
        }, [v, j, D]),
        r.useEffect(() => {
            !j && i.Z.getExperiments();
        }, [j]),
        r.useEffect(() => {
            if (j) {
                if (!D) {
                    (0, _.dL)({ pathname: E.Z5c.GLOBAL_DISCOVERY });
                    return;
                }
                if (null == n)
                    (0, p.zY)({ gameId: v }),
                        l.Z.openNativeAppModal('discovery', E.Etm.DEEP_LINK, {
                            type: f.jE.DISCOVERY_GAME_RESULTS,
                            params: { gameId: v }
                        });
                else if (n === E.kEZ.OPEN_FAIL) {
                    if (!N) return;
                    if (!A) {
                        (0, _.dL)({ pathname: E.Z5c.GUILD_DISCOVERY });
                        return;
                    }
                    if (!L) {
                        (0, _.dL)({ pathname: E.Z5c.GLOBAL_DISCOVERY_SERVERS });
                        return;
                    }
                    (0, _.dL)({
                        pathname: E.Z5c.GLOBAL_DISCOVERY_SERVERS,
                        search: '?game='.concat(v)
                    });
                }
            }
        }, [v, j, N, A, L, n, D]),
        n === E.kEZ.OPEN_FAIL && !N)
    )
        return (0, a.jsx)(b.Z, { gameId: v });
    let O = null == n || n === E.kEZ.OPENING;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.Z, {
                className: I.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: I.container,
                children: (0, a.jsx)(c.ZP, {
                    children: O
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: h.Z.Messages.APP_OPENING }), (0, a.jsx)(c.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: h.Z.Messages.APP_OPENED_TITLE }), (0, a.jsx)(c.DK, { children: h.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })]
                          })
                })
            })
        ]
    });
}
s.ZP.initialize();
