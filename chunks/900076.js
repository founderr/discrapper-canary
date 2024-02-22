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
  u = n("548683"),
  o = n("616264");

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
  } = (0, u.default)(t), m = (0, l.jsx)("div", {
    className: o.tierPreviewsContainer,
    children: (0, l.jsx)("div", {
      className: s(o.tierPreviews, a),
      children: n
    })
  });
  return !i.isMobile && (m = (0, l.jsxs)(l.Fragment, {
    children: [d, (0, l.jsx)(r.AdvancedScroller, {
      className: o.scroller,
      orientation: "horizontal",
      ref: f,
      onScroll: c,
      children: m
    })]
  })), (0, l.jsx)("div", {
    className: o.carouselMaxWidth,
    ref: h,
    children: m
  })
}