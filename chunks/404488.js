l.d(n, {
  Z: function() {
    return u
  },
  q: function() {
    return o
  }
});
var a = l(735250);
l(470079);
var i = l(442837),
  s = l(325708),
  r = l(213557),
  t = l(433355),
  d = l(981631),
  c = l(176505);
let o = 656;

function u(e) {
  let {
    pageWidth: n,
    onSidebarResize: l
  } = e, u = (0, i.e7)([t.ZP], () => t.ZP.getSidebarState(c.oC.GUILD_HOME));
  if (null == u || null == u.channelId) return null;
  let h = n - d.PrS - o;
  return (0, a.jsx)(s.Z, {
    sidebarType: s.y.HomeSidebar,
    maxWidth: h,
    onWidthChange: l,
    children: (0, a.jsx)(r.Z, {
      channelId: u.channelId,
      baseChannelId: c.oC.GUILD_HOME,
      channelViewSource: "Home View",
      isResourceChannelView: !0
    })
  })
}