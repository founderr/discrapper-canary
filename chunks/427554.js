"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  u = n.n(s),
  i = n("77078"),
  a = n("299039"),
  o = n("276676"),
  r = n("123030"),
  d = n("782340"),
  c = n("912215");

function E(e) {
  let {
    guildId: t,
    recurrenceRule: n,
    guildEventId: s,
    onRecurrenceClick: E,
    hideScroller: f = !1,
    activeRecurrenceId: h
  } = e, {
    recurrenceStartTimes: C,
    canViewMoreRecurrences: N,
    updateRecurrenceStartTimes: v
  } = (0, o.default)(s, t, n);
  return (0, l.jsxs)("div", {
    className: c.recurrences,
    children: [(0, l.jsx)(i.Heading, {
      variant: "heading-sm/medium",
      className: c.heading,
      children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
    }), (0, l.jsxs)(i.Scroller, {
      className: u(c.scroller, {
        [c.showScroller]: !f
      }),
      children: [C.map(e => {
        let t = a.default.fromTimestamp(e.getTime());
        return (0, l.jsx)(r.default, {
          recurrenceId: t,
          originalScheduledStartTime: e,
          guildEventId: s,
          onClick: E,
          isActive: t === h
        }, t)
      }), N && (0, l.jsx)(i.Button, {
        grow: !1,
        onClick: e => {
          e.stopPropagation(), v()
        },
        look: i.Button.Looks.LINK,
        size: i.Button.Sizes.MIN,
        color: i.Button.Colors.LINK,
        className: c.button,
        children: d.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
      })]
    })]
  })
}