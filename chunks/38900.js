"use strict";
a.r(t);
var s = a("735250");
a("470079");
var r = a("120356"),
  n = a.n(r),
  l = a("425734"),
  o = a("897246"),
  i = a("211371"),
  c = a("775087");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
t.default = () => (0, s.jsx)(s.Fragment, {
  children: d.map(e => (0, s.jsxs)("div", {
    className: l.cardsContainer,
    children: [(0, s.jsx)("div", {
      className: n()(i.skeleton, o.shopBanner),
      children: (0, s.jsx)("div", {
        className: i.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, s.jsx)("div", {
      className: n()(i.skeleton, c.shopCard),
      children: (0, s.jsxs)("div", {
        className: i.cardBody,
        children: [(0, s.jsx)("div", {
          className: i.cardAvatar
        }), (0, s.jsx)("div", {
          className: i.cardTitle
        }), (0, s.jsx)("div", {
          className: i.cardDescription
        }), (0, s.jsx)("div", {
          className: i.cardSummary
        })]
      })
    }, e))]
  }, e))
})