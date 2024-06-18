"use strict";
n(724458);
var i, r = n(442837),
  s = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = {},
  l = null,
  u = null;

function _(e, t) {
  null == t ? e in a && delete a[e] : null != e && (a[e] = t)
}

function c(e) {
  let {
    user: t
  } = e;
  u = t.id
}
class d extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    null != e && (a = e)
  }
  requiredActions(e) {
    var t;
    return null !== (t = a[e]) && void 0 !== t ? t : null
  }
  requiredActionsIncludes(e, t) {
    let n = this.requiredActions(e);
    return null != n && t.reduce((e, t) => e || n.includes(t), !1)
  }
  wasLoginAttemptedInSession(e) {
    return l === e
  }
  getState() {
    return a
  }
}
o(d, "displayName", "LoginRequiredActionStore"), o(d, "persistKey", "LoginRequiredActionStore"), t.Z = new d(s.Z, {
  LOGIN_ATTEMPTED: function(e) {
    let {
      required_actions: t,
      user_id: n
    } = e;
    _(l = n, t)
  },
  CONNECTION_OPEN: c,
  CURRENT_USER_UPDATE: c,
  LOGOUT: function(e) {
    let {
      isSwitchingAccount: t
    } = e;
    !t && null != u && _(u, null)
  },
  PASSWORD_UPDATED: function(e) {
    let {
      userId: t
    } = e;
    _(t, null)
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    let {
      userId: t
    } = e;
    _(t, null)
  }
})