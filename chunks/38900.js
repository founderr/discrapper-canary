"use strict";
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  i = s(4477),
  l = s(12900),
  o = s(423839),
  c = s(246318);
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
t.Z = () => (0, n.jsx)("div", {
  className: i.skeletons,
  children: d.map(e => (0, n.jsxs)("div", {
    className: i.cardsContainer,
    children: [(0, n.jsx)("div", {
      className: a()(o.skeleton, l.shopBanner),
      children: (0, n.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, n.jsx)("div", {
      className: a()(o.skeleton, c.shopCard),
      children: (0, n.jsxs)("div", {
        className: o.cardBody,
        children: [(0, n.jsx)("div", {
          className: o.cardAvatar
        }), (0, n.jsx)("div", {
          className: o.cardTitle
        }), (0, n.jsx)("div", {
          className: o.cardDescription
        }), (0, n.jsx)("div", {
          className: o.cardSummary
        })]
      })
    }, e))]
  }, e))
})