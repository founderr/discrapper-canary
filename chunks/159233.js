t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    u = t(481060),
    s = t(357156),
    a = t(924301),
    r = t(894017),
    E = t(79874),
    d = t(576749),
    o = t(689938);
function c(e) {
    let { guildEventId: n, guild: c, channel: _, recurrenceId: Z, isRecurrenceItem: T } = e,
        { canManageGuildEvent: N } = (0, s.XJ)(null != _ ? _ : c),
        I = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n)),
        g = N(I),
        M = (0, d.Z)(),
        f = (0, r.Z)(Z, null == I ? void 0 : I.id),
        v = (0, E.zI)(n, Z);
    if (!g || null == v || null == I) return null;
    let D = null != I.recurrence_rule && !T,
        m = (e) => {
            (null == Z || e) && !T
                ? (0, u.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([t.e('58023'), t.e('81350')]).then(t.bind(t, 779250));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              guildScheduledEventId: n,
                              guildId: c.id
                          });
                  }, M)
                : null != Z &&
                  (0, u.openModalLazy)(async () => {
                      let { default: e } = await t.e('27919').then(t.bind(t, 379038));
                      return (n) =>
                          (0, l.jsx)(e, {
                              ...n,
                              guildEvent: I,
                              recurrenceId: Z
                          });
                  }, M);
        };
    return (0, l.jsx)(u.MenuItem, {
        id: o.Z.Messages.EDIT_EVENT,
        label: o.Z.Messages.EDIT_EVENT,
        action: D ? void 0 : () => m(!0),
        children:
            D &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(u.MenuItem, {
                        id: o.Z.Messages.EDIT_THIS_EVENT,
                        label: o.Z.Messages.EDIT_THIS_EVENT,
                        action: () => m(!1),
                        disabled: (null == f ? void 0 : f.is_canceled) || v.startTime.getTime() < Date.now()
                    }),
                    (0, l.jsx)(u.MenuItem, {
                        id: o.Z.Messages.EDIT_ALL_EVENTS,
                        label: o.Z.Messages.EDIT_ALL_EVENTS,
                        action: () => m(!0),
                        disabled: new Date(I.scheduled_start_time).getTime() < Date.now()
                    })
                ]
            })
    });
}
