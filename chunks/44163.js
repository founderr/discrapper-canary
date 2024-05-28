    "use strict";
    t.r(a);
    var d = t("585483"),
      c = t("5967"),
      n = t("933513"),
      i = t("981631");
    a.default = {
      init() {
        document.addEventListener("paste", e => {
          !(0, n.default)((0, c.eventOwnerDocument)(e)) && d.ComponentDispatch.dispatchToLastSubscribed(i.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
            event: e
          })
        })
      }
    }