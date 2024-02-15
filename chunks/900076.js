"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("394846"),
  r = n("77078"),
  o = n("548683"),
  u = n("616264");

function d(e) {
  let {
    guildId: t,
    children: n,
    className: a
  } = e, {
    horizontalScrollNotice: d,
    handleScroll: c,
    handleSetScrollerRef: f,
    handleSetContainerRef: h
  } = (0, o.default)(t), m = (0, l.jsx)("div", {
    className: u.tierPreviewsContainer,
    children: (0, l.jsx)("div", {
      className: s(u.tierPreviews, a),
      children: n
    })
  });
  return !i.isMobile && (m = (0, l.jsxs)(l.Fragment, {
    children: [d, (0, l.jsx)(r.AdvancedScroller, {
      className: u.scroller,
      orientation: "horizontal",
      ref: f,
      onScroll: c,
      children: m
    })]
  })), (0, l.jsx)("div", {
    className: u.carouselMaxWidth,
    ref: h,
    children: m
  })
}