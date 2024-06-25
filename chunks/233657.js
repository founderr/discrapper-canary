n.d(t, {
  Z: function() {
    return C
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(704215),
  r = n(481060),
  a = n(239091),
  o = n(605236),
  u = n(554747),
  c = n(306680),
  d = n(9156),
  h = n(434479),
  p = n(490897),
  g = n(689938),
  m = n(359123);

function C(e) {
  let {
    guild: t,
    selected: C
  } = e, {
    hasUnread: E,
    mentionCount: f
  } = (0, i.cj)([c.ZP], () => ({
    hasUnread: c.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
    mentionCount: c.ZP.getMentionCount(t.id, p.W.GUILD_EVENT)
  }), [t.id]), _ = (0, i.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
  async function I() {
    await (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22347"), n.e("56236")]).then(n.bind(n, 17671));
      return n => (0, l.jsx)(e, {
        ...n,
        guildId: t.id
      })
    }), (0, o.EW)(s.z.GUILD_HEADER_EVENT_UPSELL)
  }
  let N = (0, u.ZP)(t.id),
    Z = N.length > 0 ? g.Z.Messages.GUILD_EVENTS_PLURAL.format({
      number: N.length
    }) : g.Z.Messages.GUILD_EVENTS;
  return (0, l.jsx)(h.m, {
    id: "upcoming-events-".concat(t.id),
    renderIcon: e => (0, l.jsx)(r.CalendarIcon, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: Z,
    selected: C,
    onClick: I,
    onContextMenu: e => {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("95307").then(n.bind(n, 867757));
        return n => (0, l.jsx)(e, {
          ...n,
          guildId: t.id
        })
      })
    },
    showUnread: E && !_,
    trailing: !_ && f > 0 ? (0, l.jsx)(r.NumberBadge, {
      className: m.numberBadge,
      disableColor: !0,
      count: f
    }) : null
  })
}