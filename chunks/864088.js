    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return i
      }
    });
    var s = t("862337"),
      d = t("913144"),
      n = t("845579");
    let c = new s.Timeout;
    var i = {
      init() {
        d.default.subscribe("USER_SETTINGS_PROTO_UPDATE", () => {
          let e = n.CustomStatusSetting.getSetting();
          if (null == e) c.stop();
          else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
            let a = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
            a > 0 ? c.start(a, () => {
              n.CustomStatusSetting.updateSetting(void 0)
            }, !0) : (n.CustomStatusSetting.updateSetting(void 0), c.stop())
          } else null != c && c.stop()
        })
      }
    }