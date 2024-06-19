n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(207055),
  r = n(938475),
  o = n(981631),
  c = n(689938),
  u = n(603497);

function d(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(t));
  return (0, l.jsxs)("div", {
    className: u.root,
    children: [(0, l.jsx)(s.Text, {
      variant: "text-xs/bold",
      className: u.header,
      children: c.Z.Messages.CHANNEL_CALL_MEMBERS_POPOUT_HEADER.format({
        count: n.length
      })
    }), (0, l.jsx)(s.Scroller, {
      className: u.scroller,
      children: (0, l.jsx)(a.Z, {
        allowDragging: !1,
        allowPreviews: !1,
        className: u.voiceUsers,
        channel: t,
        voiceStates: n,
        collapsed: !1,
        location: o.Sbl.CHANNEL_CALL
      })
    })]
  })
}