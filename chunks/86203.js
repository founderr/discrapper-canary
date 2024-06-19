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
  r = n(718538),
  o = n(868807),
  c = n(689938);

function u(e) {
  let {
    channel: t,
    buttonSize: n = i.ButtonSizes.TINY,
    className: u,
    onReportClick: d,
    onReportSubmit: h,
    onMouseEnter: m,
    onMouseLeave: p
  } = e, {
    error: E,
    loaded: g
  } = (0, o.a)(t), f = t.isDM() ? t.getRecipientId() : null, C = (0, r.V)(t.id, f);
  if (null == C && (g || E)) return null;
  let _ = () => {
    null == h || h(), s.Z.closePrivateChannel(t.id)
  };
  return (0, l.jsx)(i.Button, {
    className: u,
    size: n,
    color: i.Button.Colors.RED,
    disabled: null == C,
    onClick: e => {
      e.stopPropagation(), null == d || d(), null != C && (0, a.WL)(C, _)
    },
    onMouseEnter: m,
    onMouseLeave: p,
    children: c.Z.Messages.REPORT
  })
}