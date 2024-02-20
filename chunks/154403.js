"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("368694"),
  d = n("313915"),
  c = n("578706"),
  f = n("381546"),
  E = n("655804"),
  h = n("238500"),
  _ = n("983782"),
  C = n("939011"),
  S = n("440296");

function g() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, C.useImpressionStore)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  })), n = (0, r.useStateFromStores)([d.default], () => d.default.isAnalyticsDebuggerEnabled), l = (0, r.useStateFromStores)([u.default], () => u.default.isDeveloper), [g, T] = a.useState(!1), {
    name: m,
    ...p
  } = null != e ? e : {}, I = null != m;
  return l && n ? (0, i.jsx)(_.default, {
    children: (0, i.jsxs)("div", {
      className: s(S.container, {
        [S.containerMinimized]: g,
        [S.notTracked]: !I
      }),
      children: [(0, i.jsx)(o.Clickable, {
        className: S.minimizeButton,
        onClick: () => {
          T(!g)
        },
        children: g ? (0, i.jsx)(E.default, {}) : (0, i.jsx)(h.default, {})
      }), (0, i.jsxs)("div", {
        className: s(S.content, {
          [S.contentMinimized]: g
        }),
        children: [(0, i.jsxs)(o.Text, {
          className: s(S.label, {
            [S.notTracked]: !I
          }),
          variant: "text-xxs/normal",
          children: [I ? (0, i.jsx)(c.default, {
            className: S.iconTracked
          }) : (0, i.jsx)(f.default, {
            className: S.iconNotTracked
          }), null != m ? m : "(untracked)"]
        }), (0, i.jsx)("div", {
          className: S.current,
          children: JSON.stringify(p, void 0, 2)
        }), (0, i.jsx)(o.Text, {
          className: s(S.label, {
            [S.notTracked]: !I
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, i.jsx)("div", {
          className: S.stack,
          children: JSON.stringify(t, void 0, 2)
        })]
      })]
    })
  }) : null
}