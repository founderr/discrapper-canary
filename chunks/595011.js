n.r(l);
var t = n(200651);
n(192379);
var i = n(481060),
    r = n(239091),
    o = n(410575),
    u = n(108843),
    d = n(100527),
    s = n(299206),
    a = n(88966),
    c = n(37258),
    Z = n(931617),
    f = n(981631),
    h = n(388032);
l.default = (0, u.Z)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: u, onSelect: d } = e,
            g = (0, c.Z)({
                userId: l.id,
                guildId: n
            }),
            p = (0, Z.Z)(l.id, n),
            v = (0, s.Z)({
                id: l.id,
                label: h.intl.string(h.t['/AXYnJ'])
            }),
            x = (0, a.Z)(l.id),
            M = l.isNonUserBot();
        return (0, t.jsx)(o.Z, {
            context: u,
            object: f.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': h.intl.string(h.t.liqwPD),
                onSelect: d,
                children: [
                    (0, t.jsxs)(i.MenuGroup, {
                        children: [!M && g, !M && x]
                    }),
                    (0, t.jsx)(i.MenuGroup, { children: !M && p }),
                    (0, t.jsx)(i.MenuGroup, { children: v })
                ]
            })
        });
    },
    [d.Z.CONTEXT_MENU, d.Z.AUDIT_LOG_USER_MENU]
);
