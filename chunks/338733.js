"use strict";
n.r(t), n.d(t, {
  CLIENT_THEMES_DATA_ATTRIBUTE: function() {
    return i
  },
  default: function() {
    return u
  }
});
var a = n("884691"),
  r = n("446674"),
  s = n("714657");
let i = "data-client-themes",
  l = "custom-theme-background",
  o = () => {
    let e = (0, r.useStateFromStores)([s.default], () => s.default.getLinearGradient()),
      t = (0, a.useMemo)(() => null == e ? null : ".".concat(l, " {\n      --custom-theme-background: ").concat(e, ";\n    }"), [e]);
    return t
  };
var u = () => {
  let e = o();
  return null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: l
  }
}