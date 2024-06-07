"use strict";
n.r(t), n.d(t, {
  CLAN_BANNER_HEIGHT: function() {
    return i
  },
  CLAN_BANNER_WIDTH: function() {
    return s
  },
  useClanBannerStyleInjection: function() {
    return l
  }
});
var a = n("470079"),
  r = n("153832");
let s = 262,
  i = 100;

function l(e, t) {
  let n = a.useMemo(() => "clan-banner-container-".concat((0, r.v4)()), []);
  return {
    styleContent: a.useMemo(() => {
      let a = e.map((e, t) => "--primary-".concat(t, ": ").concat(e, ";")).join("\n"),
        r = t.map((e, t) => "--secondary-".concat(t, ": ").concat(e, ";")).join("\n");
      return "#".concat(n, " {\n        ").concat(a, "\n        ").concat(r, "\n      }")
    }, [n, e, t]),
    containerId: n
  }
}