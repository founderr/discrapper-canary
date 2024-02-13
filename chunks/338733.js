"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return s
  },
  default: function() {
    return o
  }
});
var a = n("884691"),
  r = n("446674"),
  i = n("714657");
let s = "data-client-themes",
  l = "custom-theme-background",
  u = () => {
    let e = (0, r.useStateFromStores)([i.default], () => i.default.getLinearGradient()),
      t = (0, a.useMemo)(() => null == e ? null : ".".concat(l, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
    return t
  };
var o = () => {
  let e = u();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: l
  }
}