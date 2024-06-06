    "use strict";
    t.r(a), t("47120");
    var d = t("213919"),
      c = t("570140"),
      n = t("317770"),
      i = t("358085");
    class f extends n.default {
      _initialize() {
        c.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
      }
      _terminate() {
        c.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
      }
      constructor(...e) {
        var a, t, c;
        super(...e), a = this, t = "handleConnectionOpen", c = e => {
          ((0, i.isWindows)() || (0, i.isMac)()) && d.encryptAndStoreTokens()
        }, t in a ? Object.defineProperty(a, t, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = c
      }
    }
    a.default = new f