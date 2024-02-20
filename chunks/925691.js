"use strict";
r.r(t), r.d(t, {
  isSVG: function() {
    return n
  },
  isHidden: function() {
    return i
  },
  isElement: function() {
    return o
  },
  isReplacedElement: function() {
    return s
  }
});
var n = function(e) {
    return e instanceof SVGElement && "getBBox" in e
  },
  i = function(e) {
    if (n(e)) {
      var t = e.getBBox(),
        r = t.width,
        i = t.height;
      return !r && !i
    }
    var o = e.offsetWidth,
      s = e.offsetHeight;
    return !(o || s || e.getClientRects().length)
  },
  o = function(e) {
    var t, r = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
    return !!(r && e instanceof r.Element)
  },
  s = function(e) {
    switch (e.tagName) {
      case "INPUT":
        if ("image" !== e.type) break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0
    }
    return !1
  }