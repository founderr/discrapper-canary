"use strict";
a.r(t), a.d(t, {
  CLAN_BANNER_HEIGHT: function() {
    return s
  },
  CLAN_BANNER_WIDTH: function() {
    return i
  },
  useClanBannerStyleInjection: function() {
    return l
  }
});
var n = a("470079"),
  r = a("153832");
let i = 262,
  s = 100;

function l(e, t) {
  let a = n.useMemo(() => "clan-banner-container-".concat((0, r.v4)()), []);
  return {
    styleContent: n.useMemo(() => {
      let n = e.map((e, t) => "--primary-".concat(t, ": ").concat(e, ";")).join("\n"),
        r = t.map((e, t) => "--secondary-".concat(t, ": ").concat(e, ";")).join("\n");
      return "#".concat(a, " {\n        ").concat(n, "\n        ").concat(r, "\n      }")
    }, [a, e, t]),
    containerId: a
  }
}