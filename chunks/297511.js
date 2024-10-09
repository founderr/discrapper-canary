n.r(t),
    n.d(t, {
        default: function () {
            return A;
        }
    });
var a = n(735250),
    r = n(470079),
    s = n(593473),
    i = n(442837),
    o = n(893776),
    c = n(830064),
    l = n(388905),
    d = n(625128),
    u = n(362762),
    m = n(353926),
    p = n(571457),
    _ = n(703656),
    x = n(314897),
    g = n(626135),
    b = n(963202),
    E = n(569234),
    f = n(981631),
    h = n(186901),
    I = n(689938),
    N = n(940956);
function A(e) {
    let { match: t, location: n } = e,
        A = (0, i.e7)([u.Z], () => u.Z.getState('discovery')),
        L = (0, i.e7)([x.default], () => x.default.isAuthenticated()),
        v = (0, b.iN)('game_discovery_entry_point'),
        j = t.params.gameId,
        D = (0, b.io)('landing page'),
        O = (0, i.e7)([m.Z], () => m.Z.hasLoadedExperiments);
    if (
        (r.useEffect(() => {
            let { utm_source: e } = s.parse(n.search);
            (0, g.setUTMContext)({ utmSource: e }), (n.search = ''), (0, _.dL)(n);
        }, []),
        r.useEffect(() => {
            O && D && (0, p.HV)({ gameId: j });
        }, [j, O, D]),
        r.useEffect(() => {
            !O && o.Z.getExperiments();
        }, [O]),
        r.useEffect(() => {
            if (O) {
                if (!D) {
                    (0, _.dL)({ pathname: f.Z5c.GLOBAL_DISCOVERY });
                    return;
                }
                if (null == A)
                    (0, p.zY)({ gameId: j }),
                        d.Z.openNativeAppModal('discovery', f.Etm.DEEP_LINK, {
                            type: h.jE.DISCOVERY_GAME_RESULTS,
                            params: { gameId: j }
                        });
                else if (A === f.kEZ.OPEN_FAIL) {
                    if (!L) return;
                    if (!v) {
                        (0, _.dL)({ pathname: f.Z5c.GLOBAL_DISCOVERY_SERVERS });
                        return;
                    }
                    (0, _.dL)({
                        pathname: f.Z5c.GLOBAL_DISCOVERY_SERVERS,
                        search: '?game='.concat(j)
                    });
                }
            }
        }, [j, O, L, v, A, D]),
        A === f.kEZ.OPEN_FAIL && !L)
    )
        return (0, a.jsx)(E.Z, { gameId: j });
    let S = null == A || A === f.kEZ.OPENING;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Z, {
                className: N.backgroundArt,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, a.jsx)('div', {
                className: N.container,
                children: (0, a.jsx)(l.ZP, {
                    children: S
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.Dx, { children: I.Z.Messages.APP_OPENING }), (0, a.jsx)(l.Hh, {})]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.Dx, { children: I.Z.Messages.APP_OPENED_TITLE }), (0, a.jsx)(l.DK, { children: I.Z.Messages.DEEPLINK_BROWSER_APP_OPENED })]
                          })
                })
            })
        ]
    });
}
i.ZP.initialize();
