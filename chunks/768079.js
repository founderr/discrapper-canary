t.r(n);
var s = t(200651);
t(192379);
var r = t(481060),
    u = t(239091),
    a = t(410575),
    i = t(108843),
    l = t(100527),
    c = t(299206),
    o = t(88966),
    d = t(725119),
    E = t(981631),
    Z = t(689938);
n.default = (0, i.Z)(
    function (e) {
        let { user: n, analyticsContext: t, onSelect: i } = e,
            l = (0, d.Z)({ userId: n.id }),
            _ = (0, c.Z)({
                id: n.id,
                label: Z.Z.Messages.COPY_ID_USER
            }),
            M = (0, o.Z)(n.id),
            f = n.isNonUserBot();
        return (0, s.jsx)(a.Z, {
            context: t,
            object: E.qAy.CONTEXT_MENU,
            children: (0, s.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: u.Zy,
                'aria-label': Z.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: i,
                children: [
                    (0, s.jsxs)(r.MenuGroup, {
                        children: [!f && l, !f && M]
                    }),
                    (0, s.jsx)(r.MenuGroup, { children: _ })
                ]
            })
        });
    },
    [l.Z.CONTEXT_MENU, l.Z.BANNED_USER_MENU]
);
