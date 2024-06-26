"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(231757),
  o = n(553795),
  a = n(915863),
  l = n(689938),
  u = n(89560);

function _(e) {
  let {
    platform: t,
    color: n,
    look: _,
    onAction: c,
    Icon: d
  } = e;
  if ((0, r.e7)([o.Z], () => o.Z.getAccounts().some(e => e.type === t.type))) return null;
  let E = null != d ? (0, i.jsx)(d, {
    className: u.platformIcon
  }) : (0, i.jsx)("img", {
    alt: "",
    className: u.platformIcon,
    src: t.icon.whiteSVG
  });
  return (0, i.jsx)(a.Z, {
    onClick: () => {
      null == c || c(), (0, s.Z)({
        platformType: t.type,
        location: "Activity Action"
      })
    },
    color: n,
    look: _,
    fullWidth: !0,
    children: (0, i.jsxs)("div", {
      className: u.flex,
      children: [E, l.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: t.name
      })]
    })
  }, "connect-platform-activity")
}