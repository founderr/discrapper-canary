"use strict";
let n, l;
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
    showCopyIcon: g
  } = e, [N, v] = i.useState(0), [p, I] = i.useState(!1), [h, M] = i.useState(!1);
  if (i.useEffect(() => (n = new o.Timeout, l = new o.Timeout, function() {
      n.stop(), l.stop()
    }), []), !T.SUPPORTS_COPY || C) return (0, s.jsx)(s.Fragment, {
    children: m
  });
  let O = [A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
    U = Math.min(Math.max(N - 1, 0), O.length - 1),
    x = null !== (t = O[U]) && void 0 !== t ? t : O[0],
    R = N >= O.length - 1,
    y = R ? c.TooltipColors.RED : c.TooltipColors.GREEN,
    j = p ? y : c.TooltipColors.PRIMARY,
    P = () => {
      n.stop(), M(!1)
    },
    H = e => {
      (0, T.copy)(r), f.default.track(E.AnalyticEvents.TEXT_COPIED, {
        type: S
      }), "function" == typeof e && e(), !h && v(N + 1), M(!0), I(!0), n.start(1e3, () => M(!1)), l.start(2e3, () => v(0))
    };
  return (0, s.jsx)(c.Tooltip, {
    delay: 500,
    color: j,
    forceOpen: h,
    text: p ? (0, s.jsx)(c.Shaker, {
      isShaking: R,
      children: x
    }) : A.default.Messages.ACCOUNT_CLICK_TO_COPY,
    onAnimationRest: (e, t) => {
      !h && p && t.phase === E.SpringTransitionPhases.LEAVE && I(!1)
    },
    "aria-label": A.default.Messages.ACCOUNT_CLICK_TO_COPY,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: n,
        ...l
      } = e;
      return (0, s.jsx)(c.Clickable, {
        ...l,
        className: _.clickTarget,
        onMouseEnter: () => {
          p ? P() : "function" == typeof n && n()
        },
        onClick: () => {
          H(t)
        },
        children: (0, s.jsxs)("div", {
          className: u(a, _.copiableWrapper),
          children: [(0, s.jsx)("div", {
            className: _.childWrapper,
            children: m
          }), g ? (0, s.jsx)("div", {
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