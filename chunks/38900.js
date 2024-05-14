"use strict";
l.r(t);
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("425734"),
  i = l("897246"),
  o = l("269674"),
  u = l("211371");
let c = () => 4 * Math.random() + 8,
  d = [c(), c(), c()];
t.default = () => (0, a.jsx)(a.Fragment, {
  children: d.map(e => (0, a.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, a.jsx)("div", {
      className: r()(u.skeleton, i.shopBanner),
      children: (0, a.jsx)("div", {
        className: u.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, a.jsx)("div", {
      className: r()(u.skeleton, o.shopCard),
      children: (0, a.jsxs)("div", {
        className: u.cardBody,
        children: [(0, a.jsx)("div", {
          className: u.cardAvatar
        }), (0, a.jsx)("div", {
          className: u.cardTitle
        }), (0, a.jsx)("div", {
          className: u.cardDescription
        }), (0, a.jsx)("div", {
          className: u.cardSummary
        })]
      })
    }, e))]
  }, e))
})