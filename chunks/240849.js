    "use strict";
    t.r(a);
    var d = t("703656"),
      c = t("556296"),
      n = t("358085"),
      i = t("998502"),
      f = t("981631");

    function o(e, a) {
      return !(e === f.NavigateEventSource.BROWSER && c.default.hasKeybind(f.KeyboardDeviceTypes.MOUSE_BUTTON, a)) && !0
    }
    a.default = new class e {
      initialize() {
        (0, n.isDesktop)() && (i.default.on("NAVIGATE_BACK", (e, a) => {
          o(a, f.MouseKeyCodes.Back) && (0, d.back)()
        }), i.default.on("NAVIGATE_FORWARD", (e, a) => {
          o(a, f.MouseKeyCodes.Forward) && (0, d.forward)()
        }))
      }
    }