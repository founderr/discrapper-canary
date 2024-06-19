n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(692547),
  s = n(481060),
  a = n(40851),
  r = n(881824),
  o = n(688641),
  c = n(689938);

function u(e) {
  let {
    className: t,
    channel: n,
    highlight: u
  } = e, d = (0, a.bp)();
  return (0, l.jsx)(o.Z, {
    highlight: null != u && u,
    className: t,
    icon: (0, l.jsx)(s.StageIcon, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20
    }),
    color: i.Z.unsafe_rawColors.GREEN_360.css,
    title: c.Z.Messages.STAGE_CHANNEL_START_TITLE,
    description: c.Z.Messages.STAGE_CHANNEL_START_SUBTITLE,
    onClick: function() {
      (0, r.T)(n, d)
    }
  })
}