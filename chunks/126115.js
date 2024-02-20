"use strict";
n.r(t), n.d(t, {
  LOGIN_REQUIRED_ACTIONS_MODAL_KEY: function() {
    return E
  },
  default: function() {
    return _
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("437822"),
  s = n("689988"),
  r = n("697218"),
  o = n("599110"),
  u = n("197881"),
  d = n("56676"),
  c = n("49111"),
  f = n("843455");
let E = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY";
class h extends s.default {
  handleConnectionOpen() {
    let e = r.default.getCurrentUser();
    if (null == e || u.ProcessArgs.isDisallowPopupsSet()) return;
    let t = d.default.requiredActionsIncludes(e.id, [c.LoginRequiredActions.UPDATE_PASSWORD]),
      s = d.default.wasLoginAttemptedInSession(e.id);
    s && t ? (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("969927").then(n.bind(n, "969927"));
      return function(t) {
        return (0, i.jsx)(e, {
          ...t,
          onSuccess: () => {
            o.default.track(c.AnalyticEvents.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose()
          },
          onClose: () => {
            t.onClose(), l.default.logout(c.Routes.LOGIN)
          },
          requirementsUpdated: !0
        })
      }
    }, {
      modalKey: E,
      onCloseRequest: f.NOOP_NULL,
      instant: !0
    }) : t && l.default.logout(c.Routes.LOGIN)
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen
    }
  }
}
var _ = new h