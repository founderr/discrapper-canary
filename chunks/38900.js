"use strict";
l.r(t);
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("425734"),
  i = l("897246"),
  o = l("211371"),
  c = l("775087");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
t.default = () => (0, a.jsx)(a.Fragment, {
  children: d.map(e => (0, a.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, a.jsx)("div", {
      className: r()(o.skeleton, i.shopBanner),
      children: (0, a.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, a.jsx)("div", {
      className: r()(o.skeleton, c.shopCard),
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