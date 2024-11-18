e.d(t, {
    Z: function () {
        return E;
    }
}),
    e(47120);
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    o = e(482241),
    a = e(894017),
    c = e(79874),
    s = e(388032);
function E(n) {
    let { guildEventId: t, recurrenceId: e, guild: E, channel: g } = n,
        f = null != e,
        { canManageGuildEvent: _ } = (0, u.XJ)(null != g ? g : E),
        [v, Z] = (0, i.Wu)([d.ZP], () => [d.ZP.isActive(t), d.ZP.getGuildScheduledEvent(t)]),
        h = (0, a.Z)(e, null == Z ? void 0 : Z.id),
        m = null != Z && _(Z),
        T = (null == Z ? void 0 : Z.recurrence_rule) != null && !f,
        I = (0, c.zI)(t, e);
    if (!m || (v && !T && !f) || (f && !f) || null == Z || null == I) return null;
    let { startTime: N } = I;
    if (v && f) {
        var p;
        if (null == N) return null;
        let n = new Date(null !== (p = null == h ? void 0 : h.scheduled_start_time) && void 0 !== p ? p : N);
        if (new Date() > n) return null;
    }
    let P = (n) => {
        (0, r.openModal)((i) =>
            (0, l.jsxs)(r.ConfirmModal, {
                ...i,
                header: s.intl.string(s.t.R5bpio),
                confirmText: T || n ? s.intl.string(s.t['8ZsNv7']) : s.intl.string(s.t.B9sJLS),
                cancelText: s.intl.string(s.t.oEAioK),
                onConfirm: () => (f && !n ? o.Z.deleteRecurrence(E.id, t, e, h) : o.Z.deleteGuildEvent(t, E.id)),
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: s.intl.string(s.t.v2GWNT)
                    }),
                    (0, l.jsx)('br', {}),
                    (T || n) &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: s.intl.format(s.t.ZcpcyM, {})
                        })
                ]
            })
        );
    };
    return (0, l.jsx)(r.MenuItem, {
        id: s.intl.string(s.t.B9sJLS),
        label: s.intl.string(s.t.B9sJLS),
        action: f ? void 0 : () => P(),
        color: 'danger',
        children:
            f &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.MenuItem, {
                        id: s.intl.string(s.t.tqCll5),
                        label: s.intl.string(s.t.tqCll5),
                        action: () => P(),
                        disabled: null == h ? void 0 : h.is_canceled,
                        color: 'danger'
                    }),
                    (0, l.jsx)(r.MenuItem, {
                        id: s.intl.string(s.t.wr33ra),
                        label: s.intl.string(s.t.wr33ra),
                        action: () => P(!0),
                        color: 'danger'
                    })
                ]
            })
    });
}
