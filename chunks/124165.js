r.d(n, {
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
var i,
    a = r(314897),
    s = r(924301),
    o = r(894017),
    l = r(79874),
    u = r(854698),
    c = r(765305),
    d = r(388032);
function f(e, n) {
    let r = a.default.getId();
    return s.ZP.getRsvp(e, n, r);
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
    let { eventId: n, recurrenceId: r, guildId: i, updateRsvp: a, openRsvpPicker: d, onRsvp: _ } = e,
        h = s.ZP.getGuildScheduledEvent(n);
    if (null == h) return;
    let p = (0, o.c)(r, n),
        { startTime: m } = (0, l.Kq)(h, r),
        g = (null == h ? void 0 : h.scheduled_start_time) != null ? (0, u.lh)(p, m, new Date(null == h ? void 0 : h.scheduled_start_time)) : null,
        E = null != g && c.$I.has(g) ? null : null != r ? r : (0, u.DK)(h),
        v = f(h.id),
        I = f(h.id, E);
    null == E ? (a(n, null, i, null != v ? c.gv.UNINTERESTED : c.gv.INTERESTED), null == _ || _()) : null != I ? (a(n, E, i, null != v ? c.gv.INTERESTED : c.gv.UNINTERESTED), null == _ || _()) : d(h, E);
}
!(function (e) {
    (e[(e.SERIES = 0)] = 'SERIES'), (e[(e.RECURRENCE = 1)] = 'RECURRENCE');
})(i || (i = {}));
