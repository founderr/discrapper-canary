"use strict";
n.r(t), n.d(t, {
  useClanBannerStyleInjection: function() {
    return r
  }
});
var a = n("470079");

function r(e, t) {
  let n = a.useRef(null),
    r = a.useCallback(() => {
      var a;
      if (null == n.current) return;
      let r = null === (a = n.current) || void 0 === a ? void 0 : a.getSVGDocument();
      if (null == r) return;
      let i = r.getElementById("clan-banner-custom-style-node");
      if (null == i) return;
      let s = e.map((e, t) => ".primary-".concat(t, " { fill: ").concat(e, "; stop-color: ").concat(e, " }")).join(" "),
        l = t.map((e, t) => ".secondary-".concat(t, " { fill: ").concat(e, "; stop-color: ").concat(e, " }")).join(" ");
      i.textContent = "".concat(s, " ").concat(l)
    }, [e, t]);
  return a.useEffect(() => r(), [r]), {
    bannerPreviewRef: n,
    onLoad: r
  }
}