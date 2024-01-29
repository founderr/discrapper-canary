"use strict";
let a, n;
l.r(t), l.d(t, {
  CopiableField: function() {
    return S
  }
}), l("222007");
var s = l("37983"),
  i = l("884691"),
  r = l("414456"),
  u = l.n(r),
  o = l("862337"),
  c = l("77078"),
  d = l("413709"),
  f = l("599110"),
  T = l("306160"),
  E = l("49111"),
  A = l("782340"),
  _ = l("491701");

function S(e) {
  var t;
  let {
    className: l,
    copyValue: r,
    copyMetaData: S,
    children: m,
    disableCopy: C,
    showCopyIcon: N
  } = e, [g, v] = i.useState(0), [p, I] = i.useState(!1), [M, h] = i.useState(!1);
  if (i.useEffect(() => (a = new o.Timeout, n = new o.Timeout, function() {
      a.stop(), n.stop()
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
      a.stop(), h(!1)
    },
    H = e => {
      (0, T.copy)(r), f.default.track(E.AnalyticEvents.TEXT_COPIED, {
        type: S
      }), "function" == typeof e && e(), !M && v(g + 1), h(!0), I(!0), a.start(1e3, () => h(!1)), n.start(2e3, () => v(0))
    };
  return (0, s.jsx)(c.Tooltip, {
    delay: 500,
    color: j,
    forceOpen: M,
    text: p ? (0, s.jsx)(c.Shaker, {
      isShaking: x,
      children: R
    }) : A.default.Messages.ACCOUNT_CLICK_TO_COPY,
    onAnimationRest: (e, t) => {
      !M && p && t.phase === E.SpringTransitionPhases.LEAVE && I(!1)
    },
    "aria-label": A.default.Messages.ACCOUNT_CLICK_TO_COPY,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: a,
        ...n
      } = e;
      return (0, s.jsx)(c.Clickable, {
        ...n,
        className: _.clickTarget,
        onMouseEnter: () => {
          p ? P() : "function" == typeof a && a()
        },
        onClick: () => {
          H(t)
        },
        children: (0, s.jsxs)("div", {
          className: u(l, _.copiableWrapper),
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