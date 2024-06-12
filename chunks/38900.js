"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  r = s("425734"),
  i = s("897246"),
  o = s("211371"),
  u = s("775087");
let c = () => 4 * Math.random() + 8,
  d = [c(), c(), c()];
t.default = () => (0, a.jsx)("div", {
  className: r.skeletons,
  children: d.map(e => (0, a.jsxs)("div", {
    className: r.cardsContainer,
    children: [(0, a.jsx)("div", {
      className: n()(o.skeleton, i.shopBanner),
      children: (0, a.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, a.jsx)("div", {
      className: n()(o.skeleton, u.shopCard),
      children: (0, a.jsxs)("div", {
        className: o.cardBody,
        children: [(0, a.jsx)("div", {
          className: o.cardAvatar
        }), (0, a.jsx)("div", {
          className: o.cardTitle
        }), (0, a.jsx)("div", {
          className: o.cardDescription
        }), (0, a.jsx)("div", {
          className: o.cardSummary
        })]
      })
    }, e))]
  }, e))
})