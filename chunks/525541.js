n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(493683),
  a = n(726521),
  r = n(213010),
  o = n(718538),
  c = n(689938);

function u(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonSize: u = i.ButtonSizes.TINY,
    className: d,
    buttonText: h,
    navigateAwayOnReportSuccess: m = !0,
    onReportClick: E,
    onReportSubmit: p,
    onMouseEnter: g,
    onMouseLeave: f
  } = e, C = (0, r.Q)(t), _ = (0, o.V)(n.id, t);
  if (!C || null == _) return null;
  let I = () => {
    null == p || p(), s.Z.closePrivateChannel(n.id, m)
  };
  return (0, l.jsx)(i.Button, {
    className: d,
    size: u,
    color: i.Button.Colors.RED,
    disabled: null == _,
    onClick: () => {
      null == E || E(), (0, a.WL)(_, I)
    },
    onMouseEnter: g,
    onMouseLeave: f,
    children: null != h ? h : c.Z.Messages.REPORT_SPAM
  })
}