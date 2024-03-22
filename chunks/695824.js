"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("37983");
a("884691");
var r = a("414456"),
  l = a.n(r),
  n = a("922063"),
  i = a("858422"),
  o = a("682123"),
  c = a("183891");
let u = () => 4 * Math.random() + 8,
  d = [u(), u(), u()];
var f = () => (0, s.jsx)(s.Fragment, {
  children: d.map(e => (0, s.jsxs)("div", {
    className: n.cardsContainer,
    children: [(0, s.jsx)("div", {
      className: l(c.skeleton, i.shopBanner),
      children: (0, s.jsx)("div", {
        className: c.bannerBody
      })
    }), Array.from({
      length: e
    }, (e, t) => t).map(e => (0, s.jsx)("div", {
      className: l(c.skeleton, o.shopCard),
      children: (0, s.jsxs)("div", {
        className: c.cardBody,
        children: [(0, s.jsx)("div", {
          className: c.cardAvatar
        }), (0, s.jsx)("div", {
          className: c.cardTitle
        }), (0, s.jsx)("div", {
          className: c.cardDescription
        }), (0, s.jsx)("div", {
          className: c.cardSummary
        })]
      })
    }, e))]
  }, e))
})