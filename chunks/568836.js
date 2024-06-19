n.d(t, {
  $G: function() {
    return c
  },
  OR: function() {
    return u
  },
  aL: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(345898),
  r = n(285207);
let o = 660,
  c = e => (0, s.jsx)(a.Z, {
    ...e,
    className: l()(e.className, {
      [r.embedVertical]: !e.isHorizontal,
      [r.embedHorizontal]: e.isHorizontal
    })
  }),
  u = e => {
    let {
      isHorizontal: t
    } = e;
    return (0, s.jsx)(c, {
      ...e,
      media: () => (0, s.jsx)("div", {
        className: l()(r.loadingDescription),
        children: (0, s.jsx)("div", {
          className: l()(r.loadingBackgroundWrapper, {
            [r.loadingBackgroundWrapperHorizontal]: t
          }),
          children: (0, s.jsx)("div", {
            className: r.loadingBackground
          })
        })
      }),
      title: () => (0, s.jsx)("div", {
        className: l()(r.loadingImage, {
          [r.loadingImageHorizontal]: t
        })
      })
    })
  }