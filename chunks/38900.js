"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("425734"),
  i = a("897246"),
  o = a("211371"),
  c = a("775087");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
t.default = () => (0, l.jsx)(l.Fragment, {
  children: d.map(e => (0, l.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, l.jsx)("div", {
      className: r()(o.skeleton, i.shopBanner),
      children: (0, l.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, l.jsx)("div", {
      className: r()(o.skeleton, c.shopCard),
      children: (0, l.jsxs)("div", {
        className: o.cardBody,
        children: [(0, l.jsx)("div", {
          className: o.cardAvatar
        }), (0, l.jsx)("div", {
          className: o.cardTitle
        }), (0, l.jsx)("div", {
          className: o.cardDescription
        }), (0, l.jsx)("div", {
          className: o.cardSummary
        })]
      })
    }, e))]
  }, e))
})