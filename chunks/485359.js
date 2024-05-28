    "use strict";
    t.r(a), t("47120");
    var d = t("735250");
    t("470079");
    var c = t("525654"),
      n = t.n(c),
      i = t("481060"),
      f = t("570140"),
      o = t("468026"),
      r = t("317770"),
      l = t("63063"),
      s = t("981631"),
      b = t("689938");
    class u extends r.default {
      _initialize() {
        f.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
      }
      _terminate() {
        f.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
      }
      constructor(...e) {
        var a, t, c;
        super(...e), a = this, t = "handlePermission", c = e => {
          let {
            kind: a,
            granted: t
          } = e, c = "Firefox" === n().name ? s.HelpdeskArticles.ENABLE_MIC_FIREFOX : s.HelpdeskArticles.ENABLE_MIC_CHROME;
          if (!t) {
            let e = "audio" !== a;
            (0, i.openModal)(a => (0, d.jsx)(o.default, {
              title: e ? b.default.Messages.NO_CAMERA_TITLE : b.default.Messages.NO_MIC_TITLE,
              body: e ? b.default.Messages.NO_CAMERA_BODY : b.default.Messages.NO_MIC_BODY,
              onConfirm: () => window.open(l.default.getArticleURL(c), "_blank"),
              confirmText: b.default.Messages.HELP_DESK,
              ...a
            }))
          }
        }, t in a ? Object.defineProperty(a, t, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = c
      }
    }
    a.default = new u