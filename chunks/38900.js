"use strict";
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(4477),
  l = t(12900),
  o = t(423839),
  c = t(246318);
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
s.Z = () => (0, n.jsx)("div", {
  className: i.skeletons,
  children: d.map(e => (0, n.jsxs)("div", {
    className: i.cardsContainer,
    children: [(0, n.jsx)("div", {
      className: r()(o.skeleton, l.shopBanner),
      children: (0, n.jsx)("div", {
        className: o.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, s) => s).map(e => (0, n.jsx)("div", {
      className: r()(o.skeleton, c.shopCard),
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