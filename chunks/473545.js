e.d(t, {
    Z: function () {
        return g;
    }
});
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(41776),
    d = e(314897),
    o = e(924301),
    a = e(482241),
    c = e(894017),
    s = e(765305),
    E = e(388032);
function g(n) {
    let { guildEventId: t, guildId: e, recurrenceId: g } = n,
        f = (0, i.e7)([u.Z], () => u.Z.isLurking(e), [e]),
        _ = (0, i.e7)([d.default], () => d.default.getId()),
        {
            rsvped: v,
            baseRsvp: Z,
            recurrenceRsvp: h
        } = (0, i.cj)(
            [o.ZP],
            () => ({
                rsvped: o.ZP.isInterestedInEventRecurrence(t, g),
                baseRsvp: o.ZP.getRsvp(t, null, _),
                recurrenceRsvp: o.ZP.getRsvp(t, g, _)
            }),
            [g, t, _]
        ),
        m = (0, c.Z)(g, t);
    if (f || (null == m ? void 0 : m.is_canceled)) return null;
    let T = function () {
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == Z ? void 0 : Z.response) === s.gv.INTERESTED ? s.gv.UNINTERESTED : s.gv.INTERESTED,
            i = n ? null : g;
        a.Z.updateRsvp(t, i, e, l);
    };
    return (0, l.jsxs)(r.MenuItem, {
        id: v ? E.intl.string(E.t['7M5gaG']) : E.intl.string(E.t.FXixvL),
        label: v ? E.intl.string(E.t['7M5gaG']) : E.intl.string(E.t.FXixvL),
        action: void 0,
        children: [
            (0, l.jsx)(r.MenuItem, {
                id: E.intl.string(E.t.lwZCFR),
                label: E.intl.string(E.t.lwZCFR),
                action: () => T(!1)
            }),
            (0, l.jsx)(r.MenuItem, {
                id: E.intl.string(E.t.uoorxs),
                label: E.intl.string(E.t.uoorxs),
                action: () => T(!0),
                disabled: null != h
            })
        ]
    });
}
