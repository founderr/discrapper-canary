"use strict";
let i, r;
n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(213919),
  o = n(570140),
  a = n(147913),
  l = n(594174),
  u = n(626135),
  _ = n(726745),
  c = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends a.Z {
  _initialize() {
    o.Z.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
  }
  _terminate() {
    o.Z.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
  }
  constructor({
    onSwitchStart: e,
    onSwitchSuccess: t,
    onSwitchError: n,
    onTokenSet: o
  }) {
    super(), d(this, "onSwitchStart", void 0), d(this, "onSwitchSuccess", void 0), d(this, "onSwitchError", void 0), d(this, "onTokenSet", void 0), d(this, "actions", {
      LOGOUT: e => this.handleLogout(e)
    }), d(this, "handleConnectionOpen", () => {
      var e, t, n;
      let o = l.default.getCurrentUser();
      if (null == o) return;
      if (null != r) {
        if (r !== i) {
          let e = _.Z.getUsers().map(e => {
            let {
              id: t
            } = e;
            return t
          });
          u.default.track(c.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
            from_user_id: r,
            linked_user_ids: e
          }), null === (t = this.onSwitchSuccess) || void 0 === t || t.call(this, o)
        } else u.default.track(c.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (n = this.onSwitchError) || void 0 === n || n.call(this, o);
        r = null
      }
      i = o.id;
      let a = s.getToken();
      null != a && "" !== a && s.setToken(a, o.id), null === (e = this.onTokenSet) || void 0 === e || e.call(this, o)
    }), d(this, "handleLogout", e => {
      if (e.isSwitchingAccount) {
        var t;
        r = i, null === (t = this.onSwitchStart) || void 0 === t || t.call(this)
      } else s.removeToken(i);
      i = null
    }), this.onSwitchStart = e, this.onSwitchSuccess = t, this.onSwitchError = n, this.onTokenSet = o
  }
}