"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("803997"),
  r = a.n(s),
  n = a("116162"),
  o = a("380762"),
  i = a("321664"),
  u = a("694491");
let c = () => 4 * Math.random() + 8,
  d = [c(), c(), c()];
t.default = () => (0, l.jsx)(l.Fragment, {
  children: d.map(e => (0, l.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, l.jsx)("div", {
      className: r()(u.skeleton, o.shopBanner),
      children: (0, l.jsx)("div", {
        className: u.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, l.jsx)("div", {
      className: r()(u.skeleton, i.shopCard),
      children: (0, l.jsxs)("div", {
        className: u.cardBody,
        children: [(0, l.jsx)("div", {
          className: u.cardAvatar
        }), (0, l.jsx)("div", {
          className: u.cardTitle
        }), (0, l.jsx)("div", {
          className: u.cardDescription
        }), (0, l.jsx)("div", {
          className: u.cardSummary
        })]
      })
    }, e))]
  }, e))
})