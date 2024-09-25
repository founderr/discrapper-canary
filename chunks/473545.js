t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    u = t(481060),
    s = t(41776),
    a = t(314897),
    r = t(924301),
    E = t(482241),
    d = t(894017),
    o = t(765305),
    c = t(689938);
function _(e) {
    let { guildEventId: n, guildId: t, recurrenceId: _ } = e,
        Z = (0, i.e7)([s.Z], () => s.Z.isLurking(t), [t]),
        T = (0, i.e7)([a.default], () => a.default.getId()),
        {
            rsvped: N,
            baseRsvp: I,
            recurrenceRsvp: g
        } = (0, i.cj)(
            [r.ZP],
            () => ({
                rsvped: r.ZP.isInterestedInEventRecurrence(n, _),
                baseRsvp: r.ZP.getRsvp(n, null, T),
                recurrenceRsvp: r.ZP.getRsvp(n, _, T)
            }),
            [_, n, T]
        ),
        M = (0, d.Z)(_, n);
    if (Z || (null == M ? void 0 : M.is_canceled)) return null;
    let f = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == I ? void 0 : I.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
            i = e ? null : _;
        E.Z.updateRsvp(n, i, t, l);
    };
    return (0, l.jsxs)(u.MenuItem, {
        id: N ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED : c.Z.Messages.EVENT_MARK_INTERESTED,
        label: N ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED : c.Z.Messages.EVENT_MARK_INTERESTED,
        action: void 0,
        children: [
            (0, l.jsx)(u.MenuItem, {
                id: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                label: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                action: () => f(!1)
            }),
            (0, l.jsx)(u.MenuItem, {
                id: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                label: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                action: () => f(!0),
                disabled: null != g
            })
        ]
    });
}
