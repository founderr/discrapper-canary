n.d(t, {
  L: function() {
    return l
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(481060),
  u = n(763520),
  d = n(153066),
  h = n(583830);
(i = l || (l = {})).CONTAIN = "contain", i.COVER = "cover";
let m = a.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: l,
    videoComponent: i,
    className: r,
    fit: m = "contain",
    mirror: E = !1,
    paused: p = !1,
    streamPreviewURL: g,
    videoSpinnerContext: f,
    userId: C
  } = e, [_, I] = a.useState(!0), [x] = a.useState(() => new u.o("VideoStream"));
  a.useEffect(() => {
    !p && (_ ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(f, C, t))
  }, [_, p, t, x, f, C]);
  let T = a.useCallback(() => {
    I(!1)
  }, []);
  return (0, s.jsxs)("div", {
    className: o()(h.wrapper, l),
    children: [null != t && (0, s.jsx)(i, {
      className: o()(h.video, (0, d.l)(h, "video", m), {
        [h.mirror]: E
      }, r),
      streamId: t,
      onResize: n,
      onReady: T,
      paused: p
    }), p ? null : (0, s.jsx)("div", {
      className: o()(h.previewWrapper, {
        [h.loading]: _
      }),
      children: _ && (0, s.jsxs)(a.Fragment, {
        children: [null != g ? (0, s.jsx)("img", {
          src: g,
          alt: "",
          className: h.previewImage
        }) : (0, s.jsx)("div", {
          className: h.emptyPreviewWrapper,
          children: (0, s.jsx)("div", {
            className: h.emptyPreview
          })
        }), (0, s.jsx)(c.Spinner, {
          className: h.spinner
        })]
      })
    })]
  })
});
t.Z = m