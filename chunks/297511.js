n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    });
var a = n(200651),
    r = n(192379),
    i = n(593473),
    s = n(442837),
    o = n(893776),
    l = n(830064),
    c = n(388905),
    d = n(625128),
    u = n(362762),
    m = n(353926),
    p = n(571457),
    x = n(703656),
    b = n(314897),
    g = n(626135),
    f = n(963202),
    h = n(569234),
    _ = n(981631),
    E = n(186901),
    v = n(388032),
    A = n(940956);
function N(e) {
    let { match: t, location: n } = e,
        N = (0, s.e7)([u.Z], () => u.Z.getState('discovery')),
        j = (0, s.e7)([b.default], () => b.default.isAuthenticated()),
        I = (0, f.iN)('game_discovery_entry_point'),
        L = t.params.gameId,
        S = (0, f.io)('landing page'),
        C = (0, s.e7)([m.Z], () => m.Z.hasLoadedExperiments);
    if (
        (r.useEffect(() => {
            let { utm_source: e } = i.parse(n.search);
            (0, g.setUTMContext)({ utmSource: e }), (n.search = ''), (0, x.dL)(n);
        }, []),
        r.useEffect(() => {
            C && S && (0, p.HV)({ gameId: L });
        }, [L, C, S]),
        r.useEffect(() => {
            !C && o.Z.getExperiments();
        }, [C]),
        r.useEffect(() => {
            if (C) {
                if (!S) {
                    (0, x.dL)({ pathname: _.Z5c.GLOBAL_DISCOVERY });
                    return;
                }
                if (null == N)
                    (0, p.zY)({ gameId: L }),
                        d.Z.openNativeAppModal('discovery', _.Etm.DEEP_LINK, {
                            type: E.jE.DISCOVERY_GAME_RESULTS,
                            params: { gameId: L }
                        });
                else if (N === _.kEZ.OPEN_FAIL) {
                    if (!j) return;
                    if (!I) {
                        (0, x.dL)({ pathname: _.Z5c.GLOBAL_DISCOVERY_SERVERS });
                        return;
                    }
                    (0, x.dL)({
                        pathname: _.Z5c.GLOBAL_DISCOVERY_SERVERS,
                        search: '?game='.concat(L)
                    });
                }
            }
        }, [L, C, j, I, N, S]),
        N === _.kEZ.OPEN_FAIL && !j)
    )
        return (0, a.jsx)(h.Z, { gameId: L });
    let D = null == N || N === _.kEZ.OPENING;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.Z, {
                className: A.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: A.container,
                children: (0, a.jsx)(c.ZP, {
                    children: D
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: v.intl.string(v.t['Z+hCVV']) }), (0, a.jsx)(c.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c.Dx, { children: v.intl.string(v.t.csrAMD) }), (0, a.jsx)(c.DK, { children: v.intl.string(v.t.ghBJz8) })]
                          })
                })
            })
        ]
    });
}
s.ZP.initialize();
