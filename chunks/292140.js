n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(626135),
    l = n(144145),
    o = n(555927),
    c = n(738762),
    d = n(244080),
    u = n(247530),
    _ = n(260889),
    E = n(981631),
    h = n(674563),
    m = n(689938);
function I(e) {
    let { party: t, close: n, onSelect: I } = e,
        p = (0, c.Z)(t),
        g = (0, _.Z)(t),
        T = (0, u.Z)(t),
        C = (0, d.Z)(t),
        f = (0, l.Z)(t),
        S = (0, o.Z)(t);
    return (
        a.useEffect(() => {
            let e = t.currentActivities
                .filter((e) => {
                    var t, n;
                    return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === h.wW.GAME;
                })
                .map((e) => e.game.name);
            r.default.track(E.rMx.OPEN_POPOUT, {
                type: 'Now Playing Card Popout',
                games_detected: e
            });
        }, []),
        (0, i.jsxs)(s.Menu, {
            navId: 'now-playing-menu',
            onClose: n,
            'aria-label': m.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onSelect: I,
            children: [
                p,
                (0, i.jsxs)(s.MenuGroup, {
                    children: [g, T]
                }),
                (0, i.jsx)(s.MenuGroup, { children: C }),
                (0, i.jsx)(s.MenuGroup, { children: f }),
                S
            ]
        })
    );
}
