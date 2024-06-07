    "use strict";
    t.r(a);
    var d = t("585483"),
      n = t("5967"),
      c = t("933513"),
      i = t("981631");
    a.default = {
      init() {
        document.addEventListener("paste", e => {
          !(0, c.default)((0, n.eventOwnerDocument)(e)) && d.ComponentDispatch.dispatchToLastSubscribed(i.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
            event: e
          })
        })
      }
    }