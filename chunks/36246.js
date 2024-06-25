n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(873546),
  r = n(481060),
  o = n(470134),
  c = n(874771);

function u(e) {
  let {
    guildId: t,
    children: n,
    className: i
  } = e, {
    horizontalScrollNotice: u,
    handleScroll: d,
    handleSetScrollerRef: h,
    handleSetContainerRef: m
  } = (0, o.Z)(t), E = (0, l.jsx)("div", {
    className: c.tierPreviewsContainer,
    children: (0, l.jsx)("div", {
      className: s()(c.tierPreviews, i),
      children: n
    })
  });
  return !a.tq && (E = (0, l.jsxs)(l.Fragment, {
    children: [u, (0, l.jsx)(r.AdvancedScroller, {
      className: c.scroller,
      orientation: "horizontal",
      ref: h,
      onScroll: d,
      children: E
    })]
  })), (0, l.jsx)("div", {
    className: c.carouselMaxWidth,
    ref: m,
    children: E
  })
}