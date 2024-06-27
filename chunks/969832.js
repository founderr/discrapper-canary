"use strict";
let i, r;
n.d(t, {
  o: function() {
    return h
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(846519),
  _ = n(481060),
  c = n(626135),
  d = n(572004),
  E = n(981631),
  I = n(689938),
  T = n(41450);

function h(e) {
  var t;
  let {
    className: n,
    copyValue: a,
    copyMetaData: h,
    copyTooltip: f,
    copyTooltipDelay: S = 500,
    children: A,
    disableCopy: N,
    showCopyIcon: m,
    "aria-label": O,
    onCopy: R
  } = e, [p, g] = o.useState(0), [C, v] = o.useState(!1), [L, D] = o.useState(!1);
  if (o.useEffect(() => (i = new u.V7, r = new u.V7, function() {
      i.stop(), r.stop()
    }), []), !d.wS || N) return (0, s.jsx)(s.Fragment, {
    children: A
  });
  let M = [I.Z.Messages.COPY_SUCCESS_1, I.Z.Messages.COPY_SUCCESS_2, I.Z.Messages.COPY_SUCCESS_3, I.Z.Messages.COPY_SUCCESS_4, I.Z.Messages.COPY_SUCCESS_5, I.Z.Messages.COPY_SUCCESS_6, I.Z.Messages.COPY_SUCCESS_7, I.Z.Messages.COPY_SUCCESS_8, I.Z.Messages.COPY_SUCCESS_9, I.Z.Messages.COPY_SUCCESS_10, I.Z.Messages.COPY_SUCCESS_11],
    P = Math.min(Math.max(p - 1, 0), M.length - 1),
    y = null !== (t = M[P]) && void 0 !== t ? t : M[0],
    U = p >= M.length - 1,
    b = U ? _.TooltipColors.RED : _.TooltipColors.GREEN,
    G = C ? b : _.TooltipColors.PRIMARY,
    w = () => {
      i.stop(), D(!1)
    },
    B = e => {
      null == R || R(), (0, d.JG)(a), c.default.track(E.rMx.TEXT_COPIED, {
        type: h
      }), "function" == typeof e && e(), !L && g(p + 1), D(!0), v(!0), i.start(1e3, () => D(!1)), r.start(2e3, () => g(0))
    };
  return (0, s.jsx)(_.Tooltip, {
    delay: S,
    color: G,
    forceOpen: L,
    text: C ? (0, s.jsx)(_.Shaker, {
      isShaking: U,
      children: y
    }) : f,
    onAnimationRest: (e, t) => {
      !L && C && t.phase === E.UkZ.LEAVE && v(!1)
    },
    "aria-label": f,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: i,
        ...r
      } = e;
      return (0, s.jsx)(_.Clickable, {
        ...r,
        className: T.clickTarget,
        "aria-label": O,
        onMouseEnter: () => {
          C ? w() : "function" == typeof i && i()
        },
        onClick: () => {
          B(t)
        },
        children: (0, s.jsxs)("div", {
          className: l()(n, T.copiableWrapper),
          children: [(0, s.jsx)("div", {
            className: T.childWrapper,
            children: A
          }), m ? (0, s.jsx)("div", {
            className: T.__invalid_copyIconWrapper,
            children: (0, s.jsx)(_.CopyIcon, {
              size: "sm",
              color: "currentColor",
              className: T.copyIcon
            })
          }) : null]
        })
      })
    }
  })
}