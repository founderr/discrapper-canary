"use strict";
let i, r;
n.r(t), n.d(t, {
  CopiableField: function() {
    return S
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("846519"),
  d = n("481060"),
  _ = n("626135"),
  c = n("572004"),
  E = n("757206"),
  I = n("981631"),
  T = n("689938"),
  f = n("167974");

function S(e) {
  var t;
  let {
    className: n,
    copyValue: o,
    copyMetaData: S,
    copyTooltip: h,
    copyTooltipDelay: A = 500,
    children: m,
    disableCopy: N,
    showCopyIcon: p,
    "aria-label": O,
    onCopy: C
  } = e, [R, g] = a.useState(0), [L, v] = a.useState(!1), [D, M] = a.useState(!1);
  if (a.useEffect(() => (i = new u.Timeout, r = new u.Timeout, function() {
      i.stop(), r.stop()
    }), []), !c.SUPPORTS_COPY || N) return (0, s.jsx)(s.Fragment, {
    children: m
  });
  let y = [T.default.Messages.COPY_SUCCESS_1, T.default.Messages.COPY_SUCCESS_2, T.default.Messages.COPY_SUCCESS_3, T.default.Messages.COPY_SUCCESS_4, T.default.Messages.COPY_SUCCESS_5, T.default.Messages.COPY_SUCCESS_6, T.default.Messages.COPY_SUCCESS_7, T.default.Messages.COPY_SUCCESS_8, T.default.Messages.COPY_SUCCESS_9, T.default.Messages.COPY_SUCCESS_10, T.default.Messages.COPY_SUCCESS_11],
    P = Math.min(Math.max(R - 1, 0), y.length - 1),
    U = null !== (t = y[P]) && void 0 !== t ? t : y[0],
    b = R >= y.length - 1,
    G = b ? d.TooltipColors.RED : d.TooltipColors.GREEN,
    w = L ? G : d.TooltipColors.PRIMARY,
    k = () => {
      i.stop(), M(!1)
    },
    B = e => {
      null == C || C(), (0, c.copy)(o), _.default.track(I.AnalyticEvents.TEXT_COPIED, {
        type: S
      }), "function" == typeof e && e(), !D && g(R + 1), M(!0), v(!0), i.start(1e3, () => M(!1)), r.start(2e3, () => g(0))
    };
  return (0, s.jsx)(d.Tooltip, {
    delay: A,
    color: w,
    forceOpen: D,
    text: L ? (0, s.jsx)(d.Shaker, {
      isShaking: b,
      children: U
    }) : h,
    onAnimationRest: (e, t) => {
      !D && L && t.phase === I.SpringTransitionPhases.LEAVE && v(!1)
    },
    "aria-label": h,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: i,
        ...r
      } = e;
      return (0, s.jsx)(d.Clickable, {
        ...r,
        className: f.clickTarget,
        "aria-label": O,
        onMouseEnter: () => {
          L ? k() : "function" == typeof i && i()
        },
        onClick: () => {
          B(t)
        },
        children: (0, s.jsxs)("div", {
          className: l()(n, f.copiableWrapper),
          children: [(0, s.jsx)("div", {
            className: f.childWrapper,
            children: m
          }), p ? (0, s.jsx)("div", {
            className: f.__invalid_copyIconWrapper,
            children: (0, s.jsx)(E.default, {
              width: 18,
              height: 18,
              className: f.copyIcon
            })
          }) : null]
        })
      })
    }
  })
}