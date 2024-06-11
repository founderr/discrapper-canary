"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("818966");
t.default = function(e) {
  var t = e.onClick,
    n = e.hsl,
    r = (0, a.default)({
      default: {
        swatches: {
          marginTop: "20px"
        },
        swatch: {
          boxSizing: "border-box",
          width: "20%",
          paddingRight: "1px",
          float: "left"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return i().createElement("div", {
    style: r.swatches
  }, i().createElement("div", {
    style: r.swatch
  }, i().createElement(o.default, {
    hsl: n,
    offset: ".80",
    active: .1 > Math.abs(n.l - .8) && .1 > Math.abs(n.s - .5),
    onClick: t,
    first: !0
  })), i().createElement("div", {
    style: r.swatch
  }, i().createElement(o.default, {
    hsl: n,
    offset: ".65",
    active: .1 > Math.abs(n.l - .65) && .1 > Math.abs(n.s - .5),
    onClick: t
  })), i().createElement("div", {
    style: r.swatch
  }, i().createElement(o.default, {
    hsl: n,
    offset: ".50",
    active: .1 > Math.abs(n.l - .5) && .1 > Math.abs(n.s - .5),
    onClick: t
  })), i().createElement("div", {
    style: r.swatch
  }, i().createElement(o.default, {
    hsl: n,
    offset: ".35",
    active: .1 > Math.abs(n.l - .35) && .1 > Math.abs(n.s - .5),
    onClick: t
  })), i().createElement("div", {
    style: r.swatch
  }, i().createElement(o.default, {
    hsl: n,
    offset: ".20",
    active: .1 > Math.abs(n.l - .2) && .1 > Math.abs(n.s - .5),
    onClick: t,
    last: !0
  })), i().createElement("div", {
    style: r.clear
  }))
}