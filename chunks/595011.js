n.r(l);
var r = n(735250);
n(470079);
var t = n(481060),
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
            R = (0, c.Z)({
                userId: l.id,
                guildId: n
            }),
            _ = (0, Z.Z)(l.id, n),
            h = (0, d.Z)({
                id: l.id,
                label: M.Z.Messages.COPY_ID_USER
            }),
            E = (0, a.Z)(l.id),
            O = l.isNonUserBot();
        return (0, r.jsx)(o.Z, {
            context: s,
            object: f.qAy.CONTEXT_MENU,
            children: (0, r.jsxs)(t.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': M.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: u,
                children: [
                    (0, r.jsxs)(t.MenuGroup, {
                        children: [!O && R, !O && E]
                    }),
                    (0, r.jsx)(t.MenuGroup, { children: !O && _ }),
                    (0, r.jsx)(t.MenuGroup, { children: h })
                ]
            })
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.AUDIT_LOG_USER_MENU]
);
