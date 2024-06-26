"use strict";
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(4477),
  s = n(12900),
  c = n(423839),
  l = n(246318);
let d = () => 4 * Math.random() + 8,
  u = [d(), d(), d()];
t.Z = () => (0, r.jsx)("div", {
  className: o.skeletons,
  children: u.map(e => (0, r.jsxs)("div", {
    className: o.cardsContainer,
    children: [(0, r.jsx)("div", {
      className: a()(c.skeleton, s.shopBanner),
      children: (0, r.jsx)("div", {
        className: c.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, r.jsx)("div", {
      className: a()(c.skeleton, l.shopCard),
      children: (0, r.jsxs)("div", {
        className: c.cardBody,
        children: [(0, r.jsx)("div", {
          className: c.cardAvatar
        }), (0, r.jsx)("div", {
          className: c.cardTitle
        }), (0, r.jsx)("div", {
          className: c.cardDescription
        }), (0, r.jsx)("div", {
          className: c.cardSummary
        })]
      })
    }, e))]
  }, e))
})