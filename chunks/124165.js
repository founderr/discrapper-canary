n.d(t, {
    KX: function () {
        return r;
    },
    X2: function () {
        return d;
    },
    cg: function () {
        return E;
    },
    pF: function () {
        return _;
    }
});
var r,
    i = n(314897),
    a = n(924301),
    o = n(894017),
    s = n(79874),
    l = n(854698),
    u = n(765305),
    c = n(689938);
function d(e, t) {
    let n = i.default.getId();
    return a.ZP.getRsvp(e, t, n);
}
function _() {
    return [
        {
            name: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
            value: 0
        },
        {
            name: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
            value: 1
        }
    ];
}
function E(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: i, openRsvpPicker: c, onRsvp: _ } = e,
        E = a.ZP.getGuildScheduledEvent(t);
    if (null == E) return;
    let f = (0, o.c)(n, t),
        { startTime: h } = (0, s.Kq)(E, n),
        p = (null == E ? void 0 : E.scheduled_start_time) != null ? (0, l.lh)(f, h, new Date(null == E ? void 0 : E.scheduled_start_time)) : null,
        m = null != p && u.$I.has(p) ? null : null != n ? n : (0, l.DK)(E),
        I = d(E.id),
        T = d(E.id, m);
    null == m ? (i(t, null, r, null != I ? u.gv.UNINTERESTED : u.gv.INTERESTED), null == _ || _()) : null != T ? (i(t, m, r, null != I ? u.gv.INTERESTED : u.gv.UNINTERESTED), null == _ || _()) : c(E, m);
}
!(function (e) {
    (e[(e.SERIES = 0)] = 'SERIES'), (e[(e.RECURRENCE = 1)] = 'RECURRENCE');
})(r || (r = {}));
