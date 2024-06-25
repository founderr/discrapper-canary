n.d(t, {
  Z: function() {
    return g
  }
}), n(724458);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(692547),
  a = n(481060),
  r = n(889161),
  o = n(592125),
  c = n(15274),
  u = n(924301),
  d = n(554747),
  h = n(854698),
  m = n(688641),
  E = n(689938),
  p = n(769129);

function g(e) {
  let {
    channelId: t
  } = e, g = (0, i.e7)([o.Z], () => o.Z.getChannel(t), [t]), f = (0, d.sz)(t), C = null != (0, d.qY)(t), {
    canManageGuildEvent: _
  } = (0, r.XJ)(g), I = (0, i.cj)([u.ZP], () => f.reduce((e, t) => (e[t.id] = u.ZP.getUserCount(t.id, (0, h.DK)(t)), e), {}));
  return f.length < 1 || C ? null : (0, l.jsx)(l.Fragment, {
    children: f.map(e => (0, l.jsx)(m.Z, {
      icon: (0, l.jsx)(a.CalendarIcon, {
        size: "custom",
        color: "currentColor",
        height: 20,
        width: 20
      }),
      color: s.Z.unsafe_rawColors.GREEN_360.css,
      title: (_(e) ? E.Z.Messages.GUILD_EVENT_START_PROMPT : E.Z.Messages.GUILD_EVENT_UPCOMING_PROMPT).format({
        eventName: e.name
      }),
      description: E.Z.Messages.GUILD_EVENT_START_PROMPT_DESCRIPTION.format({
        startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString
      }),
      onClick: () => {
        var t;
        _(t = e) ? (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("22347"), n.e("84722")]).then(n.bind(n, 296864));
          return n => (0, l.jsx)(e, {
            ...n,
            event: t
          })
        }) : (0, c.bO)({
          eventId: t.id,
          parentGuildId: t.guild_id
        })
      },
      userCount: I[e.id],
      className: p.eventPrompt
    }, e.id))
  })
}