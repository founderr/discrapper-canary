"use strict";
n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(906467),
  _ = n(857192),
  c = n(835225),
  d = n(117795),
  E = n(153850),
  I = n(565384),
  T = n(762748);

function h() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, I.Xo)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  })), n = (0, a.e7)([_.default], () => _.default.isAnalyticsDebuggerEnabled), s = (0, a.e7)([u.Z], () => u.Z.isDeveloper), [h, f] = r.useState(!1), {
    name: S,
    ...A
  } = null != e ? e : {}, N = null != S;
  return s && n ? (0, i.jsx)(E.ZP, {
    children: (0, i.jsxs)("div", {
      className: o()(T.container, {
        [T.containerMinimized]: h,
        [T.notTracked]: !N
      }),
      children: [(0, i.jsx)(l.Clickable, {
        className: T.minimizeButton,
        onClick: () => {
          f(!h)
        },
        children: h ? (0, i.jsx)(c.Z, {}) : (0, i.jsx)(d.Z, {})
      }), (0, i.jsxs)("div", {
        className: o()(T.content, {
          [T.contentMinimized]: h
        }),
        children: [(0, i.jsxs)(l.Text, {
          className: o()(T.label, {
            [T.notTracked]: !N
          }),
          variant: "text-xxs/normal",
          children: [N ? (0, i.jsx)(l.CircleCheckIcon, {
            size: "md",
            color: "currentColor",
            className: T.iconTracked
          }) : (0, i.jsx)(l.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: T.iconNotTracked
          }), null != S ? S : "(untracked)"]
        }), (0, i.jsx)("div", {
          className: T.current,
          children: JSON.stringify(A, void 0, 2)
        }), (0, i.jsx)(l.Text, {
          className: o()(T.label, {
            [T.notTracked]: !N
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, i.jsx)("div", {
          className: T.stack,
          children: JSON.stringify(t, void 0, 2)
        })]
      })]
    })
  }) : null
}