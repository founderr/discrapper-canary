"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("419830"),
  r = n("305961"),
  u = n("727951");

function o(e) {
  let {
    channel: t
  } = e, n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), o = (0, i.getChannelIconComponent)(t, n);
  return null == o ? null : (0, l.jsxs)("div", {
    className: u.popoutHeader,
    children: [(0, l.jsx)(o, {
      className: u.channelIcon
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      className: u.channelName,
      children: t.name
    })]
  })
}