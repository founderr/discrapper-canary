e.d(t, {
    Z: function () {
        return s;
    }
}),
    e(47120);
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(357156),
    d = e(924301),
    o = e(495279),
    a = e(894017),
    c = e(388032);
function s(n) {
    let { guildEventId: t, recurrenceId: e, guild: s, channel: E } = n,
        g = null != e,
        { canManageGuildEvent: f } = (0, u.XJ)(null != E ? E : s),
        [_, v] = (0, i.Wu)([d.ZP], () => [d.ZP.isActive(t), d.ZP.getGuildScheduledEvent(t)]),
        Z = (0, a.Z)(e, null == v ? void 0 : v.id),
        h = null != v && f(v);
    return g && (null == Z ? void 0 : Z.is_canceled) && h && (!_ || g)
        ? (0, l.jsx)(r.MenuItem, {
              id: c.intl.string(c.t.b8606O),
              label: c.intl.string(c.t.b8606O),
              action: () => {
                  null != e && null != Z && (0, o.Z)(Z, s.id, t, e);
              }
          })
        : null;
}
