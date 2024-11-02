n.d(t, {
    KX: function () {
        return i;
    },
    X2: function () {
        return f;
    },
    cg: function () {
        return h;
    },
    pF: function () {
        return _;
    }
});
var r,
    i,
    a = n(314897),
    s = n(924301),
    o = n(894017),
    l = n(79874),
    u = n(854698),
    c = n(765305),
    d = n(388032);
function f(e, t) {
    let n = a.default.getId();
    return s.ZP.getRsvp(e, t, n);
}
function _() {
    return [
        {
            name: d.intl.string(d.t.uoorxs),
            value: 0
        },
        {
            name: d.intl.string(d.t.lwZCFR),
            value: 1
        }
    ];
}
function h(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: i, openRsvpPicker: a, onRsvp: d } = e,
        _ = s.ZP.getGuildScheduledEvent(t);
    if (null == _) return;
    let h = (0, o.c)(n, t),
        { startTime: p } = (0, l.Kq)(_, n),
        m = (null == _ ? void 0 : _.scheduled_start_time) != null ? (0, u.lh)(h, p, new Date(null == _ ? void 0 : _.scheduled_start_time)) : null,
        g = null != m && c.$I.has(m) ? null : null != n ? n : (0, u.DK)(_),
        E = f(_.id),
        v = f(_.id, g);
    null == g ? (i(t, null, r, null != E ? c.gv.UNINTERESTED : c.gv.INTERESTED), null == d || d()) : null != v ? (i(t, g, r, null != E ? c.gv.INTERESTED : c.gv.UNINTERESTED), null == d || d()) : a(_, g);
}
((r = i || (i = {}))[(r.SERIES = 0)] = 'SERIES'), (r[(r.RECURRENCE = 1)] = 'RECURRENCE');
