"use strict";
n.r(t), n.d(t, {
  ColorMixDesktopClientThemesExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-05_color_mixed_desktop_client_themes",
  label: "Better Desktop Client Themes",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable use of color-mix for desktop themes",
    config: {
      enabled: !0
    }
  }]
})