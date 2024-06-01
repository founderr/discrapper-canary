"use strict";
n.r(t), n.d(t, {
  ImageLoadingOverlay: function() {
    return I
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("920906"),
  a = n("481060"),
  o = n("450096"),
  l = n("981631"),
  u = n("592959");
let d = {
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
  _ = {
    ...d,
    config: {
      duration: 50
    }
  },
  c = {
    ...d,
    config: (e, t) => t ? {
      duration: 800
    } : {
      duration: 200
    }
  };

function E(e) {
  let {
    readyState: t,
    placeholderImg: n,
    placeholderStyle: a
  } = e, o = t === l.ImageReadyStates.LOADING, [c] = r.useState(() => Date.now()), E = t === l.ImageReadyStates.READY && Date.now() - c < 200, I = (0, s.useTransition)(o && null != n, E ? _ : d);
  return (0, i.jsx)(i.Fragment, {
    children: I((e, t) => t && (0, i.jsx)(s.animated.img, {
      style: {
        ...a,
        ...e
      },
      className: u.imagePlaceholder,
      src: n,
      alt: ""
    }))
  })
}

function I(e) {
  let {
    readyState: t,
    aspectRatio: n,
    placeholder: d,
    placeholderVersion: _,
    placeholderStyle: I,
    children: T
  } = e, f = t === l.ImageReadyStates.LOADING, [S] = r.useState(f), [h, A] = r.useState(!1), m = (0, o.usePlaceholderImage)(d, _, S);
  r.useEffect(() => {
    let e = setTimeout(() => {
      A(!0)
    }, 2e3);
    return () => {
      clearTimeout(e)
    }
  }, [S]);
  let N = (0, s.useTransition)(f && h, c);
  return (0, i.jsxs)("div", {
    className: u.loadingOverlay,
    style: {
      aspectRatio: n
    },
    children: [T, null != m && (0, i.jsx)(E, {
      readyState: t,
      placeholderImg: m,
      placeholderStyle: I
    }), N((e, t) => t && (0, i.jsx)(s.animated.div, {
      style: e,
      className: u.imageLoadingOverlay,
      children: (0, i.jsx)(a.Spinner, {
        type: a.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
        className: u.cornerLoadingSpinner
      })
    }))]
  })
}