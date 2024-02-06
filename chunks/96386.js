"use strict";
i.r(t), i.d(t, {
  default: function() {
    return a
  }
});
var n = i("37983");
i("884691");
var s = i("414456"),
  l = i.n(s),
  r = i("691870"),
  a = e => {
    let {
      message: t,
      className: i,
      noResultsImageURL: s,
      forceLightTheme: a,
      suggestions: o
    } = e;
    return (0, n.jsx)("div", {
      className: l({
        [r.forceLightTheme]: a
      }, i),
      children: (0, n.jsxs)("div", {
        className: r.wrapper,
        children: [(0, n.jsx)("div", {
          className: r.sadImage,
          style: null != s ? {
            backgroundImage: "url(".concat(s, ")")
          } : {}
        }), (0, n.jsx)("div", {
          children: t
        }), o]
      })
    })
  }