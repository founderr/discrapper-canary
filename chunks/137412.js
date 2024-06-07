    "use strict";
    t.r(a), t("47120");
    var d = t("213919"),
      n = t("570140"),
      c = t("317770"),
      i = t("358085");
    class f extends c.default {
      _initialize() {
        n.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
      }
      _terminate() {
        n.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
      }
      constructor(...e) {
        var a, t, n;
        super(...e), a = this, t = "handleConnectionOpen", n = e => {
          ((0, i.isWindows)() || (0, i.isMac)()) && d.encryptAndStoreTokens()
        }, t in a ? Object.defineProperty(a, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = n
      }
    }
    a.default = new f