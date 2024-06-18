"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(287734),
  a = n(835473),
  l = n(67212),
  u = n(493355),
  _ = n(134598),
  c = n(885110),
  d = n(366695),
  E = n(689938),
  I = n(474332);

function T() {
  let e = (0, r.e7)([c.Z], () => c.Z.getBroadcast()),
    t = (0, a.q)(null == e ? void 0 : e.applicationId);
  if (null == e) return null;
  let n = () => {
      (0, _.X)()
    },
    T = () => {
      (0, l.b_)(), o.default.disconnect()
    };
  return (0, i.jsxs)("div", {
    className: I.container,
    children: [null != t && (0, i.jsx)(d.Z, {
      game: t,
      size: d.Z.Sizes.LARGE
    }), (0, i.jsxs)("div", {
      className: I.content,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: E.Z.Messages.BROADCASTING_CAPTURE_PAUSED
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: E.Z.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
      }), (0, i.jsxs)("div", {
        className: I.actions,
        children: [(0, i.jsx)(s.Tooltip, {
          text: E.Z.Messages.BROADCASTING_SETTINGS,
          children: e => (0, i.jsx)(s.Clickable, {
            ...e,
            onClick: n,
            children: (0, i.jsx)(s.SettingsIcon, {
              size: "custom",
              color: "currentColor",
              className: I.button,
              width: 20,
              height: 20
            })
          })
        }), (0, i.jsx)(s.Tooltip, {
          text: E.Z.Messages.STOP_BROADCASTING,
          children: e => (0, i.jsx)(s.Clickable, {
            ...e,
            onClick: T,
            children: (0, i.jsx)(u.Z, {
              className: I.button,
              width: 20,
              height: 20
            })
          })
        })]
      })]
    })]
  })
}