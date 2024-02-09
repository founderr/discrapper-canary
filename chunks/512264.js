"use strict";
n.r(t), n.d(t, {
  VideoStreamFit: function() {
    return a
  },
  default: function() {
    return p
  }
}), n("222007");
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("77078"),
  d = n("103723"),
  c = n("474293"),
  f = n("391763");
(l = a || (a = {})).CONTAIN = "contain", l.COVER = "cover";
let h = i.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: a,
    videoComponent: l,
    className: r,
    fit: h = "contain",
    mirror: p = !1,
    paused: m = !1,
    streamPreviewURL: E,
    videoSpinnerContext: C,
    userId: g
  } = e, [S, _] = i.useState(!0), [I] = i.useState(() => new d.VideoSpinnerTimer("VideoStream"));
  i.useEffect(() => {
    !m && (S ? I.onSpinnerStarted() : null != t && I.trackSpinnerDuration(C, g, t))
  }, [S, m, t, I, C, g]);
  let T = i.useCallback(() => {
    _(!1)
  }, []);
  return (0, s.jsxs)("div", {
    className: o(f.wrapper, a),
    children: [null != t && (0, s.jsx)(l, {
      className: o(f.video, (0, c.getClass)(f, "video", h), {
        [f.mirror]: p
      }, r),
      streamId: t,
      onResize: n,
      onReady: T,
      paused: m
    }), m ? null : (0, s.jsx)("div", {
      className: o(f.previewWrapper, {
        [f.loading]: S
      }),
      children: S && (0, s.jsxs)(i.Fragment, {
        children: [null != E ? (0, s.jsx)("img", {
          src: E,
          alt: "",
          className: f.previewImage
        }) : (0, s.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, s.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, s.jsx)(u.Spinner, {
          className: f.spinner
        })]
      })
    })]
  })
});
var p = h