"use strict";
n.r(t), n.d(t, {
  useClanBannerStyleInjection: function() {
    return s
  }
});
var a = n("470079");

function s(e, t) {
  let n = a.useRef(null),
    s = a.useCallback(() => {
      var a;
      if (null == n.current) return;
      let s = null === (a = n.current) || void 0 === a ? void 0 : a.getSVGDocument();
      if (null == s) return;
      let l = s.getElementById("clan-banner-custom-style-node");
      if (null == l) return;
      let i = e.map((e, t) => ".primary-".concat(t, " { fill: ").concat(e, "; stop-color: ").concat(e, " }")).join(" "),
        r = t.map((e, t) => ".secondary-".concat(t, " { fill: ").concat(e, "; stop-color: ").concat(e, " }")).join(" ");
      l.textContent = "".concat(i, " ").concat(r)
    }, [e, t]);
  return a.useEffect(() => s(), [s]), {
    bannerPreviewRef: n,
    onLoad: s
  }
}