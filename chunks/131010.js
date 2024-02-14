"use strict";
let t, o;
E.r(_), E.d(_, {
  default: function() {
    return n
  }
});
var n, a = E("171718"),
  i = E("913144"),
  r = E("689988"),
  I = E("697218"),
  T = E("599110"),
  s = E("770032"),
  S = E("49111");
n = class extends r.default {
  _initialize() {
    i.default.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
  }
  _terminate() {
    i.default.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
  }
  constructor({
    onSwitchStart: e,
    onSwitchSuccess: _,
    onSwitchError: E,
    onTokenSet: n
  }) {
    super(), this.actions = {
      LOGOUT: e => this.handleLogout(e)
    }, this.handleConnectionOpen = () => {
      var e, _, E;
      let n = I.default.getCurrentUser();
      if (null == n) return;
      if (null != o) {
        if (o !== t) {
          let e = s.default.getUsers(),
            E = e.map(e => {
              let {
                id: _
              } = e;
              return _
            });
          T.default.track(S.AnalyticEvents.MULTI_ACCOUNT_SWITCH_SUCCESS, {
            from_user_id: o,
            linked_user_ids: E
          }), null === (_ = this.onSwitchSuccess) || void 0 === _ || _.call(this, n)
        } else T.default.track(S.AnalyticEvents.MULTI_ACCOUNT_SWITCH_FAILURE), null === (E = this.onSwitchError) || void 0 === E || E.call(this, n);
        o = null
      }
      t = n.id;
      let i = a.default.getToken();
      null != i && "" !== i && a.default.setToken(i, n.id), null === (e = this.onTokenSet) || void 0 === e || e.call(this, n)
    }, this.handleLogout = e => {
      if (e.isSwitchingAccount) {
        var _;
        o = t, null === (_ = this.onSwitchStart) || void 0 === _ || _.call(this)
      } else a.default.removeToken(t);
      t = null
    }, this.onSwitchStart = e, this.onSwitchSuccess = _, this.onSwitchError = E, this.onTokenSet = n
  }
}