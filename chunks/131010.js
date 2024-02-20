"use strict";
let i, a;
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, s = n("171718"),
  r = n("913144"),
  o = n("689988"),
  u = n("697218"),
  d = n("599110"),
  c = n("770032"),
  f = n("49111");
l = class extends o.default {
  _initialize() {
    r.default.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
  }
  _terminate() {
    r.default.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
  }
  constructor({
    onSwitchStart: e,
    onSwitchSuccess: t,
    onSwitchError: n,
    onTokenSet: l
  }) {
    super(), this.actions = {
      LOGOUT: e => this.handleLogout(e)
    }, this.handleConnectionOpen = () => {
      var e, t, n;
      let l = u.default.getCurrentUser();
      if (null == l) return;
      if (null != a) {
        if (a !== i) {
          let e = c.default.getUsers(),
            n = e.map(e => {
              let {
                id: t
              } = e;
              return t
            });
          d.default.track(f.AnalyticEvents.MULTI_ACCOUNT_SWITCH_SUCCESS, {
            from_user_id: a,
            linked_user_ids: n
          }), null === (t = this.onSwitchSuccess) || void 0 === t || t.call(this, l)
        } else d.default.track(f.AnalyticEvents.MULTI_ACCOUNT_SWITCH_FAILURE), null === (n = this.onSwitchError) || void 0 === n || n.call(this, l);
        a = null
      }
      i = l.id;
      let r = s.default.getToken();
      null != r && "" !== r && s.default.setToken(r, l.id), null === (e = this.onTokenSet) || void 0 === e || e.call(this, l)
    }, this.handleLogout = e => {
      if (e.isSwitchingAccount) {
        var t;
        a = i, null === (t = this.onSwitchStart) || void 0 === t || t.call(this)
      } else s.default.removeToken(i);
      i = null
    }, this.onSwitchStart = e, this.onSwitchSuccess = t, this.onSwitchError = n, this.onTokenSet = l
  }
}