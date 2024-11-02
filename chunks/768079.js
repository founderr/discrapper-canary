t.r(e);
var r = t(200651);
t(192379);
var i = t(481060),
    l = t(239091),
    u = t(410575),
    s = t(108843),
    a = t(100527),
    c = t(299206),
    o = t(88966),
    d = t(725119),
    f = t(981631),
    h = t(388032);
e.default = (0, s.Z)(
    function (n) {
        let { user: e, analyticsContext: t, onSelect: s } = n,
            a = (0, d.Z)({ userId: e.id }),
            Z = (0, c.Z)({
                id: e.id,
                label: h.intl.string(h.t['/AXYnJ'])
            }),
            p = (0, o.Z)(e.id),
            v = e.isNonUserBot();
        return (0, r.jsx)(u.Z, {
            context: t,
            object: f.qAy.CONTEXT_MENU,
            children: (0, r.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': h.intl.string(h.t.liqwPD),
                onSelect: s,
                children: [
                    (0, r.jsxs)(i.MenuGroup, {
                        children: [!v && a, !v && p]
                    }),
                    (0, r.jsx)(i.MenuGroup, { children: Z })
                ]
            })
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.BANNED_USER_MENU]
);
