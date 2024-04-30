"use strict";
a.r(t), a.d(t, {
  useClanBannerStyleInjection: function() {
    return s
  }
});
var n = a("470079");

function s(e, t) {
  let a = n.useRef(null),
    s = n.useCallback(() => {
      var n;
      if (null == a.current) return;
      let s = null === (n = a.current) || void 0 === n ? void 0 : n.getSVGDocument();
      if (null == s) return;
      let l = s.getElementById("clan-banner-custom-style-node");
      if (null == l) return;
      let i = e.map((e, t) => ".primary-".concat(t, " { fill: ").concat(e, "; stop-color: ").concat(e, " }")).join(" "),
        r = t.map((e, t) => ".secondary-".concat(t, " { fill: ").concat(e, "; stop-color: ").concat(e, " }")).join(" ");
      l.textContent = "".concat(i, " ").concat(r)
    }, [e, t]);
  return n.useEffect(() => s(), [s]), {
    bannerPreviewRef: a,
    onLoad: s
  }
}