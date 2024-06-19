n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(471445),
  a = n(430824),
  o = n(777443);

function u(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.getGuild(t.guild_id)), u = (0, r.KS)(t, n);
  return null == u ? null : (0, l.jsxs)("div", {
    className: o.popoutHeader,
    children: [(0, l.jsx)(u, {
      className: o.channelIcon
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      className: o.channelName,
      children: t.name
    })]
  })
}