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
  T = n(169703);

function h() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, I.Xo)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  })), n = (0, a.e7)([_.default], () => _.default.isAnalyticsDebuggerEnabled), s = (0, a.e7)([u.Z], () => u.Z.isDeveloper), [h, S] = r.useState(!1), {
    name: f,
    ...N
  } = null != e ? e : {}, A = null != f;
  return s && n ? (0, i.jsx)(E.ZP, {
    children: (0, i.jsxs)("div", {
      className: o()(T.container, {
        [T.containerMinimized]: h,
        [T.notTracked]: !A
      }),
      children: [(0, i.jsx)(l.Clickable, {
        className: T.minimizeButton,
        onClick: () => {
          S(!h)
        },
        children: h ? (0, i.jsx)(c.Z, {}) : (0, i.jsx)(d.Z, {})
      }), (0, i.jsxs)("div", {
        className: o()(T.content, {
          [T.contentMinimized]: h
        }),
        children: [(0, i.jsxs)(l.Text, {
          className: o()(T.label, {
            [T.notTracked]: !A
          }),
          variant: "text-xxs/normal",
          children: [A ? (0, i.jsx)(l.CircleCheckIcon, {
            size: "md",
            color: "currentColor",
            className: T.iconTracked
          }) : (0, i.jsx)(l.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: T.iconNotTracked
          }), null != f ? f : "(untracked)"]
        }), (0, i.jsx)("div", {
          className: T.current,
          children: JSON.stringify(N, void 0, 2)
        }), (0, i.jsx)(l.Text, {
          className: o()(T.label, {
            [T.notTracked]: !A
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