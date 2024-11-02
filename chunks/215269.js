e.r(t),
    e.d(t, {
        default: function () {
            return T;
        }
    });
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(239091),
    u = e(410575),
    d = e(299206),
    a = e(70877),
    o = e(572427),
    c = e(231259),
    s = e(159233),
    E = e(924952),
    g = e(99528),
    f = e(830394),
    _ = e(473545),
    v = e(124422),
    Z = e(981631),
    m = e(388032);
function T(n) {
    let { guildEventId: t, recurrenceId: e, channel: T, guild: h, analyticsContext: I, isRecurrenceItem: N = !1, onSelect: p } = n,
        P = (0, f.Z)({
            guildEventId: t,
            recurrenceId: e,
            guild: h,
            channel: T
        }),
        S = (0, c.Z)({
            guildEventId: t,
            recurrenceId: e,
            guild: h,
            channel: T
        }),
        M = (0, s.Z)({
            guildEventId: t,
            guild: h,
            channel: T,
            recurrenceId: e,
            isRecurrenceItem: N
        }),
        D = (0, E.Z)(t, h, T),
        C = (0, v.Z)(t, h, T),
        b = (0, o.Z)(t, h.id, e),
        A = (0, g.Z)(t),
        x = (0, d.Z)({
            id: t,
            label: m.intl.string(m.t.WZwPOz)
        }),
        y = (0, d.Z)({
            id: e,
            label: m.intl.string(m.t.NZRGQk)
        }),
        G = (0, a.Z)(t, h.id, T, e),
        w = (0, _.Z)({
            guildEventId: t,
            guildId: h.id,
            recurrenceId: e
        });
    return (0, l.jsx)(u.Z, {
        context: I,
        object: Z.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.Menu, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': m.intl.string(m.t.liqwPD),
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
