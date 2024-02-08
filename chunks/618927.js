"use strict";
let n, l;
a.r(t), a.d(t, {
  CopiableField: function() {
    return A
  }
}), a("222007");
var s = a("37983"),
  i = a("884691"),
  r = a("414456"),
  u = a.n(r),
  o = a("862337"),
  c = a("77078"),
  d = a("599110"),
  f = a("306160"),
  T = a("413709"),
  E = a("49111"),
  m = a("782340"),
  S = a("72797");

function A(e) {
  var t;
  let {
    className: a,
    copyValue: r,
    copyMetaData: A,
    copyTooltip: g,
    children: _,
    disableCopy: C,
    showCopyIcon: p
  } = e, [v, N] = i.useState(0), [I, h] = i.useState(!1), [M, x] = i.useState(!1);
  if (i.useEffect(() => (n = new o.Timeout, l = new o.Timeout, function() {
      n.stop(), l.stop()
    }), []), !f.SUPPORTS_COPY || C) return (0, s.jsx)(s.Fragment, {
    children: _
  });
  let O = [m.default.Messages.COPY_SUCCESS_1, m.default.Messages.COPY_SUCCESS_2, m.default.Messages.COPY_SUCCESS_3, m.default.Messages.COPY_SUCCESS_4, m.default.Messages.COPY_SUCCESS_5, m.default.Messages.COPY_SUCCESS_6, m.default.Messages.COPY_SUCCESS_7, m.default.Messages.COPY_SUCCESS_8, m.default.Messages.COPY_SUCCESS_9, m.default.Messages.COPY_SUCCESS_10, m.default.Messages.COPY_SUCCESS_11],
    y = Math.min(Math.max(v - 1, 0), O.length - 1),
    R = null !== (t = O[y]) && void 0 !== t ? t : O[0],
    U = v >= O.length - 1,
    j = U ? c.TooltipColors.RED : c.TooltipColors.GREEN,
    P = I ? j : c.TooltipColors.PRIMARY,
    H = () => {
      n.stop(), x(!1)
    },
    L = e => {
      (0, f.copy)(r), d.default.track(E.AnalyticEvents.TEXT_COPIED, {
        type: A
      }), "function" == typeof e && e(), !M && N(v + 1), x(!0), h(!0), n.start(1e3, () => x(!1)), l.start(2e3, () => N(0))
    };
  return (0, s.jsx)(c.Tooltip, {
    delay: 500,
    color: P,
    forceOpen: M,
    text: I ? (0, s.jsx)(c.Shaker, {
      isShaking: U,
      children: R
    }) : g,
    onAnimationRest: (e, t) => {
      !M && I && t.phase === E.SpringTransitionPhases.LEAVE && h(!1)
    },
    "aria-label": g,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: n,
        ...l
      } = e;
      return (0, s.jsx)(c.Clickable, {
        ...l,
        className: S.clickTarget,
        onMouseEnter: () => {
          I ? H() : "function" == typeof n && n()
        },
        onClick: () => {
          L(t)
        },
        children: (0, s.jsxs)("div", {
          className: u(a, S.copiableWrapper),
          children: [(0, s.jsx)("div", {
            className: S.childWrapper,
            children: _
          }), p ? (0, s.jsx)("div", {
            className: S.copyIconWrapper,
            children: (0, s.jsx)(T.default, {
              width: 18,
              height: 18,
              className: S.copyIcon
            })
          }) : null]
        })
      })
    }
  })
}