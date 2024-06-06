    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return r
      }
    });
    var d = t("735250"),
      c = t("470079"),
      n = t("470716"),
      i = t("613828"),
      f = t("304445"),
      o = t("703656");

    function r(e) {
      let {
        children: a
      } = e;
      return c.useEffect(() => (f.default.initialize(), () => f.default.cleanup()), []), (0, d.jsx)(n.HelmetProvider, {
        children: (0, d.jsx)(i.Router, {
          history: (0, o.getHistory)(),
          children: a
        })
      })
    }