e.r(t),
    e.d(t, {
        default: function () {
            return m;
        }
    });
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(239091),
    u = e(410575),
    d = e(299206),
    o = e(70877),
    a = e(572427),
    c = e(231259),
    s = e(159233),
    E = e(924952),
    g = e(99528),
    f = e(830394),
    _ = e(473545),
    v = e(124422),
    Z = e(981631),
    h = e(388032);
function m(n) {
    let { guildEventId: t, recurrenceId: e, channel: m, guild: T, analyticsContext: I, isRecurrenceItem: N = !1, onSelect: p } = n,
        P = (0, f.Z)({
            guildEventId: t,
            recurrenceId: e,
            guild: T,
            channel: m
        }),
        S = (0, c.Z)({
            guildEventId: t,
            recurrenceId: e,
            guild: T,
            channel: m
        }),
        M = (0, s.Z)({
            guildEventId: t,
            guild: T,
            channel: m,
            recurrenceId: e,
            isRecurrenceItem: N
        }),
        D = (0, E.Z)(t, T, m),
        C = (0, v.Z)(t, T, m),
        b = (0, a.Z)(t, T.id, e),
        A = (0, g.Z)(t),
        x = (0, d.Z)({
            id: t,
            label: h.intl.string(h.t.WZwPOz)
        }),
        y = (0, d.Z)({
            id: e,
            label: h.intl.string(h.t.NZRGQk)
        }),
        G = (0, o.Z)(t, T.id, m, e),
        w = (0, _.Z)({
            guildEventId: t,
            guildId: T.id,
            recurrenceId: e
        });
    return (0, l.jsx)(u.Z, {
        context: I,
        object: Z.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.Menu, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': h.intl.string(h.t.liqwPD),
            onSelect: p,
            children: [
                (0, l.jsxs)(i.MenuGroup, {
                    children: [G, !N && C, M, !N && D, S, P, b, N && w]
                }),
                !N && (0, l.jsx)(i.MenuGroup, { children: A }),
                (0, l.jsxs)(i.MenuGroup, {
                    children: [x, y]
                })
            ]
        })
    });
}
