n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(482241),
    l = n(124165),
    u = n(765305),
    c = n(689938),
    d = n(196238);
function _(e) {
    let { event: t, recurrenceId: n, guildId: r, onRsvp: _, ...E } = e,
        [f, h] = a.useState(l.KX.SERIES),
        p = (0, l.X2)(t.id, null),
        m = (null == p ? void 0 : p.response) === u.gv.INTERESTED ? u.gv.UNINTERESTED : u.gv.INTERESTED,
        I = m === u.gv.INTERESTED ? c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED,
        T = () => {
            f === l.KX.SERIES ? s.Z.updateRsvp(t.id, null, r, m) : s.Z.updateRsvp(t.id, n, r, m), null == _ || _(), E.onClose();
        };
    return (0, i.jsx)(o.ConfirmModal, {
        ...E,
        header: I,
        confirmText: c.Z.Messages.OK,
        cancelText: c.Z.Messages.CANCEL,
        onConfirm: T,
        confirmButtonColor: o.Button.Colors.BRAND,
        children: (0, i.jsx)(o.RadioGroup, {
            className: d.responseOptions,
            value: f,
            options: (0, l.pF)(),
            onChange: (e) => h(e.value)
        })
    });
}
function E(e, t, n, r) {
    let a = (e, t) => {
        (0, o.openModalLazy)(() =>
            Promise.resolve((a) =>
                (0, i.jsx)(_, {
                    ...a,
                    event: e,
                    recurrenceId: t,
                    guildId: n,
                    onRsvp: r
                })
            )
        );
    };
    (0, l.cg)({
        eventId: e,
        recurrenceId: t,
        guildId: n,
        updateRsvp: (t, r, i, a) => s.Z.updateRsvp(e, r, n, a),
        openRsvpPicker: a,
        onRsvp: r
    });
}
