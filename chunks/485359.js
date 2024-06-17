    "use strict";
    t.r(a), t("47120");
    var d = t("735250");
    t("470079");
    var n = t("525654"),
      c = t.n(n),
      i = t("481060"),
      f = t("570140"),
      o = t("468026"),
      r = t("317770"),
      l = t("63063"),
      s = t("981631"),
      u = t("689938");
    class b extends r.default {
      _initialize() {
        f.default.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
      }
      _terminate() {
        f.default.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
      }
      constructor(...e) {
        var a, t, n;
        super(...e), a = this, t = "handlePermission", n = e => {
          let {
            kind: a,
            granted: t
          } = e, n = "Firefox" === c().name ? s.HelpdeskArticles.ENABLE_MIC_FIREFOX : s.HelpdeskArticles.ENABLE_MIC_CHROME;
          if (!t) {
            let e = "audio" !== a;
            (0, i.openModal)(a => (0, d.jsx)(o.default, {
              title: e ? u.default.Messages.NO_CAMERA_TITLE : u.default.Messages.NO_MIC_TITLE,
              body: e ? u.default.Messages.NO_CAMERA_BODY : u.default.Messages.NO_MIC_BODY,
              onConfirm: () => window.open(l.default.getArticleURL(n), "_blank"),
              confirmText: u.default.Messages.HELP_DESK,
              ...a
            }))
          }
        }, t in a ? Object.defineProperty(a, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[t] = n
      }
    }
    a.default = new b