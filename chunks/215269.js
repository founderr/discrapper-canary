t.r(n),
    t.d(n, {
        default: function () {
            return M;
        }
    });
var l = t(735250);
t(470079);
var i = t(481060),
    u = t(239091),
    s = t(410575),
    a = t(299206),
    r = t(70877),
    E = t(572427),
    d = t(231259),
    o = t(159233),
    c = t(924952),
    _ = t(99528),
    Z = t(830394),
    T = t(473545),
    N = t(124422),
    I = t(981631),
    g = t(689938);
function M(e) {
    let { guildEventId: n, recurrenceId: t, channel: M, guild: f, analyticsContext: v, isRecurrenceItem: D = !1, onSelect: m } = e,
        L = (0, Z.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: f,
            channel: M
        }),
        C = (0, d.Z)({
            guildEventId: n,
            recurrenceId: t,
            guild: f,
            channel: M
        }),
        P = (0, o.Z)({
            guildEventId: n,
            guild: f,
            channel: M,
            recurrenceId: t,
            isRecurrenceItem: D
        }),
        S = (0, c.Z)(n, f, M),
        O = (0, N.Z)(n, f, M),
        h = (0, E.Z)(n, f.id, t),
        R = (0, _.Z)(n),
        A = (0, a.Z)({
            id: n,
            label: g.Z.Messages.COPY_ID_EVENT
        }),
        V = (0, a.Z)({
            id: t,
            label: g.Z.Messages.COPY_ID_EVENT_RECURRENCE
        }),
        p = (0, r.Z)(n, f.id, M, t),
        x = (0, T.Z)({
            guildEventId: n,
            guildId: f.id,
            recurrenceId: t
        });
    return (0, l.jsx)(s.Z, {
        context: v,
        object: I.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.Menu, {
            navId: 'user-context',
            onClose: u.Zy,
            'aria-label': g.Z.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: m,
            children: [
                (0, l.jsxs)(i.MenuGroup, {
                    children: [p, !D && O, P, !D && S, C, L, h, D && x]
                }),
                !D && (0, l.jsx)(i.MenuGroup, { children: R }),
                (0, l.jsxs)(i.MenuGroup, {
                    children: [A, V]
                })
            ]
        })
    });
}
