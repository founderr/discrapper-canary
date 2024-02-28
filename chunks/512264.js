"use strict";
n.r(t), n.d(t, {
  VideoStreamFit: function() {
    return l
  },
  default: function() {
    return m
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("77078"),
  d = n("103723"),
  c = n("474293"),
  f = n("757182");
(a = l || (l = {})).CONTAIN = "contain", a.COVER = "cover";
let h = i.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: l,
    videoComponent: a,
    className: r,
    fit: h = "contain",
    mirror: m = !1,
    paused: p = !1,
    streamPreviewURL: E,
    videoSpinnerContext: g,
    userId: C
  } = e, [S, _] = i.useState(!0), [I] = i.useState(() => new d.VideoSpinnerTimer("VideoStream"));
  i.useEffect(() => {
    !p && (S ? I.onSpinnerStarted() : null != t && I.trackSpinnerDuration(g, C, t))
  }, [S, p, t, I, g, C]);
  let T = i.useCallback(() => {
    _(!1)
  }, []);
  return (0, s.jsxs)("div", {
    className: u(f.wrapper, l),
    children: [null != t && (0, s.jsx)(a, {
      className: u(f.video, (0, c.getClass)(f, "video", h), {
        [f.mirror]: m
      }, r),
      streamId: t,
      onResize: n,
      onReady: T,
      paused: p
    }), p ? null : (0, s.jsx)("div", {
      className: u(f.previewWrapper, {
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
        }), (0, s.jsx)(o.Spinner, {
          className: f.spinner
        })]
      })
    })]
  })
});
var m = h