n.r(l);
var t = n(200651);
n(192379);
var r = n(481060),
    i = n(239091),
    o = n(410575),
    s = n(108843),
    u = n(100527),
    d = n(299206),
    a = n(88966),
    c = n(725119),
    Z = n(931617),
    f = n(981631),
    M = n(689938);
l.default = (0, s.Z)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: s, onSelect: u } = e,
            h = (0, c.Z)({
                userId: l.id,
                guildId: n
            }),
            R = (0, Z.Z)(l.id, n),
            _ = (0, d.Z)({
                id: l.id,
                label: M.Z.Messages.COPY_ID_USER
            }),
            g = (0, a.Z)(l.id),
            E = l.isNonUserBot();
        return (0, t.jsx)(o.Z, {
            context: s,
            object: f.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': M.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: u,
                children: [
                    (0, t.jsxs)(r.MenuGroup, {
                        children: [!E && h, !E && g]
                    }),
                    (0, t.jsx)(r.MenuGroup, { children: !E && R }),
                    (0, t.jsx)(r.MenuGroup, { children: _ })
                ]
            })
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.AUDIT_LOG_USER_MENU]
);
