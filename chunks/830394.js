t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var l = t(735250);
t(470079);
var i = t(442837),
    u = t(481060),
    s = t(357156),
    a = t(924301),
    r = t(495279),
    E = t(894017),
    d = t(689938);
function o(e) {
    let { guildEventId: n, recurrenceId: t, guild: o, channel: c } = e,
        _ = null != t,
        { canManageGuildEvent: Z } = (0, s.XJ)(null != c ? c : o),
        [T, N] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]),
        I = (0, E.Z)(t, null == N ? void 0 : N.id),
        g = null != N && Z(N);
    return _ && (null == I ? void 0 : I.is_canceled) && g && (!T || _)
        ? (0, l.jsx)(u.MenuItem, {
              id: d.Z.Messages.RESTORE_EVENT,
              label: d.Z.Messages.RESTORE_EVENT,
              action: () => {
                  null != t && null != I && (0, r.Z)(I, o.id, n, t);
              }
          })
        : null;
}
