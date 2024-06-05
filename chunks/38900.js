"use strict";
a.r(t);
var s = a("735250");
a("470079");
var l = a("120356"),
  r = a.n(l),
  n = a("425734"),
  i = a("897246"),
  o = a("211371"),
  c = a("775087");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
t.default = () => (0, s.jsx)(s.Fragment, {
  children: d.map(e => (0, s.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, s.jsx)("div", {
      className: r()(o.skeleton, i.shopBanner),
      children: (0, s.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, s.jsx)("div", {
      className: r()(o.skeleton, c.shopCard),
      children: (0, s.jsxs)("div", {
        className: o.cardBody,
        children: [(0, s.jsx)("div", {
          className: o.cardAvatar
        }), (0, s.jsx)("div", {
          className: o.cardTitle
        }), (0, s.jsx)("div", {
          className: o.cardDescription
        }), (0, s.jsx)("div", {
          className: o.cardSummary
        })]
      })
    }, e))]
  }, e))
})