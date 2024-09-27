t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var l = t(735250);
t(470079);
var i = t(442837),
    u = t(481060),
    s = t(357156),
    a = t(924301),
    r = t(482241),
    E = t(894017),
    d = t(79874),
    o = t(689938);
function c(e) {
    let { guildEventId: n, recurrenceId: t, guild: c, channel: _ } = e,
        Z = null != t,
        { canManageGuildEvent: T } = (0, s.XJ)(null != _ ? _ : c),
        [N, I] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]),
        g = (0, E.Z)(t, null == I ? void 0 : I.id),
        M = null != I && T(I),
        f = (null == I ? void 0 : I.recurrence_rule) != null && !Z,
        v = (0, d.zI)(n, t);
    if (!M || (N && !f && !Z) || (Z && !Z) || null == I || null == v) return null;
    let { startTime: D } = v;
    if (N && Z) {
        var m;
        if (null == D) return null;
        let e = new Date(null !== (m = null == g ? void 0 : g.scheduled_start_time) && void 0 !== m ? m : D);
        if (new Date() > e) return null;
    }
    let L = (e) => {
        (0, u.openModal)((i) =>
            (0, l.jsxs)(u.ConfirmModal, {
                ...i,
                header: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                confirmText: f || e ? o.Z.Messages.DELETE_ALL_EVENTS : o.Z.Messages.DELETE_EVENT,
                cancelText: o.Z.Messages.NEVERMIND,
                onConfirm: () => (Z && !e ? r.Z.deleteRecurrence(c.id, n, t, g) : r.Z.deleteGuildEvent(n, c.id)),
                children: [
                    (0, l.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        children: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                    }),
                    (0, l.jsx)('br', {}),
                    (f || e) &&
                        (0, l.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            children: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                        })
                ]
            })
        );
    };
    return (0, l.jsx)(u.MenuItem, {
        id: o.Z.Messages.DELETE_EVENT,
        label: o.Z.Messages.DELETE_EVENT,
        action: Z ? void 0 : () => L(),
        color: 'danger',
        children:
            Z &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(u.MenuItem, {
                        id: o.Z.Messages.DELETE_THIS_EVENT,
                        label: o.Z.Messages.DELETE_THIS_EVENT,
                        action: () => L(),
                        disabled: null == g ? void 0 : g.is_canceled,
                        color: 'danger'
                    }),
                    (0, l.jsx)(u.MenuItem, {
                        id: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                        label: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                        action: () => L(!0),
                        color: 'danger'
                    })
                ]
            })
    });
}
