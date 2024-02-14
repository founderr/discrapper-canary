"use strict";
n.r(t), n.d(t, {
  ImageLoadingOverlay: function() {
    return _
  }
}), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("492311"), n("101997");
var i = n("37983"),
  r = n("884691"),
  l = n("907002"),
  a = n("723251"),
  s = n("77078"),
  o = n("504439"),
  u = n("49111"),
  d = n("366822");
let c = {
    from: {
      opacity: 1
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: {
      duration: 200
    }
  },
  f = {
    ...c,
    config: {
      duration: 50
    }
  },
  m = {
    ...c,
    config: (e, t) => t ? {
      duration: 800
    } : {
      duration: 200
    }
  };

function _(e) {
  let {
    readyState: t,
    aspectRatio: n,
    placeholder: _,
    placeholderVersion: E,
    placeholderStyle: T,
    children: I
  } = e, C = t === u.ImageReadyStates.LOADING, [p] = r.useState(() => Date.now()), [P] = r.useState(C), [S, R] = r.useState(!1), O = r.useMemo(() => {
    if (P && 1 === E && null != _) {
      let e = Uint8Array.from(atob(_), e => e.charCodeAt(0)),
        t = (0, o.thumbHashToRGBA)(e, {
          detail: 1,
          pop: 1.1
        }),
        n = (0, a.rgbaToDataURL)(t.w, t.h, t.rgba);
      return n
    }
  }, [P, _, E]);
  r.useEffect(() => {
    let e = setTimeout(() => {
      R(!0)
    }, 2e3);
    return () => {
      clearTimeout(e)
    }
  }, [P]);
  let M = t === u.ImageReadyStates.READY && Date.now() - p < 200,
    L = (0, l.useTransition)(C && null != O, M ? f : c),
    g = (0, l.useTransition)(C && S, m);
  return (0, i.jsxs)("div", {
    className: d.loadingOverlay,
    style: {
      aspectRatio: n
    },
    children: [I, L((e, t) => t && (0, i.jsx)(l.animated.img, {
      style: {
        ...T,
        ...e
      },
      className: d.imagePlaceholder,
      src: O,
      alt: ""
    })), g((e, t) => t && (0, i.jsx)(l.animated.div, {
      style: e,
      className: d.imageLoadingOverlay,
      children: (0, i.jsx)(s.Spinner, {
        type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
        className: d.cornerLoadingSpinner
      })
    }))]
  })
}