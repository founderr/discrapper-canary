"use strict";
let r, a;
l.r(t), l.d(t, {
  CopiableField: function() {
    return P
  }
}), l("222007");
var n = l("37983"),
  s = l("884691"),
  i = l("414456"),
  o = l.n(i),
  u = l("862337"),
  d = l("77078"),
  c = l("599110"),
  f = l("306160"),
  T = l("413709"),
  p = l("49111"),
  m = l("782340"),
  E = l("72797");

function P(e) {
  var t;
  let {
    className: l,
    copyValue: i,
    copyMetaData: P,
    copyTooltip: S,
    children: v,
    disableCopy: h,
    showCopyIcon: g
  } = e, [_, N] = s.useState(0), [O, U] = s.useState(!1), [A, C] = s.useState(!1);
  if (s.useEffect(() => (r = new u.Timeout, a = new u.Timeout, function() {
      r.stop(), a.stop()
    }), []), !f.SUPPORTS_COPY || h) return (0, n.jsx)(n.Fragment, {
    children: v
  });
  let I = [m.default.Messages.COPY_SUCCESS_1, m.default.Messages.COPY_SUCCESS_2, m.default.Messages.COPY_SUCCESS_3, m.default.Messages.COPY_SUCCESS_4, m.default.Messages.COPY_SUCCESS_5, m.default.Messages.COPY_SUCCESS_6, m.default.Messages.COPY_SUCCESS_7, m.default.Messages.COPY_SUCCESS_8, m.default.Messages.COPY_SUCCESS_9, m.default.Messages.COPY_SUCCESS_10, m.default.Messages.COPY_SUCCESS_11],
    y = Math.min(Math.max(_ - 1, 0), I.length - 1),
    M = null !== (t = I[y]) && void 0 !== t ? t : I[0],
    x = _ >= I.length - 1,
    L = x ? d.TooltipColors.RED : d.TooltipColors.GREEN,
    R = O ? L : d.TooltipColors.PRIMARY,
    j = () => {
      r.stop(), C(!1)
    },
    b = e => {
      (0, f.copy)(i), c.default.track(p.AnalyticEvents.TEXT_COPIED, {
        type: P
      }), "function" == typeof e && e(), !A && N(_ + 1), C(!0), U(!0), r.start(1e3, () => C(!1)), a.start(2e3, () => N(0))
    };
  return (0, n.jsx)(d.Tooltip, {
    delay: 500,
    color: R,
    forceOpen: A,
    text: O ? (0, n.jsx)(d.Shaker, {
      isShaking: x,
      children: M
    }) : S,
    onAnimationRest: (e, t) => {
      !A && O && t.phase === p.SpringTransitionPhases.LEAVE && U(!1)
    },
    "aria-label": S,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: r,
        ...a
      } = e;
      return (0, n.jsx)(d.Clickable, {
        ...a,
        className: E.clickTarget,
        onMouseEnter: () => {
          O ? j() : "function" == typeof r && r()
        },
        onClick: () => {
          b(t)
        },
        children: (0, n.jsxs)("div", {
          className: o(l, E.copiableWrapper),
          children: [(0, n.jsx)("div", {
            className: E.childWrapper,
            children: v
          }), g ? (0, n.jsx)("div", {
            className: E.copyIconWrapper,
            children: (0, n.jsx)(T.default, {
              width: 18,
              height: 18,
              className: E.copyIcon
            })
          }) : null]
        })
      })
    }
  })
}