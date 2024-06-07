    "use strict";
    t.r(a), t.d(a, {
      getOpenAppFromEmailDestinations: function() {
        return i
      }
    }), t("315314"), t("610138"), t("216116"), t("78328"), t("815648"), t("47120");
    var d = t("593473"),
      n = t("591759");
    let c = e => {
        if (null == e || "" === e) return null;
        try {
          let a = new URL(e);
          return n.default.isDiscordHostname(a.hostname) || window.location.host === a.host ? a : null
        } catch (e) {
          return null
        }
      },
      i = e => {
        let a = (0, d.parse)(e);
        return {
          desktop: c(a.desktop_link),
          mobile: c(a.mobile_link)
        }
      }