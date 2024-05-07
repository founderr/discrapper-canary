"use strict";
s.r(t), s.d(t, {
  CLAN_BANNER_HEIGHT: function() {
    return E
  },
  CLAN_BANNER_WIDTH: function() {
    return i
  },
  useClanBannerStyleInjection: function() {
    return l
  }
});
var a = s("470079"),
  n = s("153832");
let i = 262,
  E = 100;

function l(e, t) {
  let s = a.useMemo(() => "clan-banner-container-".concat((0, n.v4)()), []);
  return {
    styleContent: a.useMemo(() => {
      let a = e.map((e, t) => "--primary-".concat(t, ": ").concat(e, ";")).join("\n"),
        n = t.map((e, t) => "--secondary-".concat(t, ": ").concat(e, ";")).join("\n");
      return "#".concat(s, " {\n        ").concat(a, "\n        ").concat(n, "\n      }")
    }, [s, e, t]),
    containerId: s
  }
}