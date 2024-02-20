"use strict";
n.r(t), n.d(t, {
  GUEST_INVITE_KEY: function() {
    return d
  },
  default: function() {
    return f
  }
}), n("222007");
var i = n("444095"),
  a = n("913144"),
  l = n("970728"),
  s = n("689988"),
  r = n("271938"),
  o = n("773336"),
  u = n("49111");
let d = "guestInviteToAccept";
class c extends s.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }, this.handleConnectionOpen = async () => {
      if ((0, o.isWeb)()) {
        let e = i.default.get(d);
        if (null != e && "string" == typeof e && r.default.isAuthenticated()) {
          let {
            invite: t
          } = await l.default.resolveInvite(e, "Desktop Modal");
          null != t && (a.default.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: e,
            context: u.AppContext.APP
          }), i.default.remove(d))
        }
      }
    }
  }
}
var f = new c