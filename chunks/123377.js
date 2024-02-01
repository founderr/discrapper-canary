"use strict";
let l, n;
a.r(t), a.d(t, {
  CopiableField: function() {
    return S
  }
}), a("222007");
var s = a("37983"),
  i = a("884691"),
  r = a("414456"),
  u = a.n(r),
  o = a("862337"),
  c = a("77078"),
  d = a("413709"),
  f = a("599110"),
  T = a("306160"),
  E = a("49111"),
  A = a("782340"),
  _ = a("491701");

function S(e) {
  var t;
  let {
    className: a,
    copyValue: r,
    copyMetaData: S,
    children: m,
    disableCopy: C,
    showCopyIcon: N
  } = e, [g, v] = i.useState(0), [p, I] = i.useState(!1), [h, M] = i.useState(!1);
  if (i.useEffect(() => (l = new o.Timeout, n = new o.Timeout, function() {
      l.stop(), n.stop()
    }), []), !T.SUPPORTS_COPY || C) return (0, s.jsx)(s.Fragment, {
    children: m
  });
  let O = [A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
    U = Math.min(Math.max(g - 1, 0), O.length - 1),
    R = null !== (t = O[U]) && void 0 !== t ? t : O[0],
    x = g >= O.length - 1,
    y = x ? c.TooltipColors.RED : c.TooltipColors.GREEN,
    j = p ? y : c.TooltipColors.PRIMARY,
    P = () => {
      l.stop(), M(!1)
    },
    H = e => {
      (0, T.copy)(r), f.default.track(E.AnalyticEvents.TEXT_COPIED, {
        type: S
      }), "function" == typeof e && e(), !h && v(g + 1), M(!0), I(!0), l.start(1e3, () => M(!1)), n.start(2e3, () => v(0))
    };
  return (0, s.jsx)(c.Tooltip, {
    delay: 500,
    color: j,
    forceOpen: h,
    text: p ? (0, s.jsx)(c.Shaker, {
      isShaking: x,
      children: R
    }) : A.default.Messages.ACCOUNT_CLICK_TO_COPY,
    onAnimationRest: (e, t) => {
      !h && p && t.phase === E.SpringTransitionPhases.LEAVE && I(!1)
    },
    "aria-label": A.default.Messages.ACCOUNT_CLICK_TO_COPY,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: l,
        ...n
      } = e;
      return (0, s.jsx)(c.Clickable, {
        ...n,
        className: _.clickTarget,
        onMouseEnter: () => {
          p ? P() : "function" == typeof l && l()
        },
        onClick: () => {
          H(t)
        },
        children: (0, s.jsxs)("div", {
          className: u(a, _.copiableWrapper),
          children: [(0, s.jsx)("div", {
            className: _.childWrapper,
            children: m
          }), N ? (0, s.jsx)("div", {
            className: _.copyIconWrapper,
            children: (0, s.jsx)(d.default, {
              width: 18,
              height: 18,
              className: _.copyIcon
            })
          }) : null]
        })
      })
    }
  })
}