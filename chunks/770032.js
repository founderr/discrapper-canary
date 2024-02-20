"use strict";
let i, a;
n.r(t), n.d(t, {
  MultiAccountTokenStatus: function() {
    return l
  },
  default: function() {
    return g
  }
}), n("424973");
var l, s, r = n("171718"),
  o = n("446674"),
  u = n("913144"),
  d = n("746574"),
  c = n("995802"),
  f = n("583374");
(s = l || (l = {}))[s.INVALID = 0] = "INVALID", s[s.VALIDATING = 1] = "VALIDATING", s[s.VALID = 2] = "VALID";
let E = [],
  h = !1;

function _(e) {
  E = E.filter(t => {
    let {
      id: n
    } = t;
    return n !== e
  }), r.default.removeToken(e)
}

function C(e, t) {
  let n = E.slice(),
    i = n.find(t => {
      let {
        id: n
      } = t;
      return n === e
    });
  null != i && (i.tokenStatus = t, E = n)
}
class S extends o.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t;
      E = null !== (t = e.users) && void 0 !== t ? t : [], a = e.canUseMultiAccountMobile
    }
  }
  getCanUseMultiAccountMobile() {
    return a
  }
  getState() {
    return {
      users: E,
      canUseMultiAccountMobile: a
    }
  }
  getUsers() {
    return E
  }
  getValidUsers() {
    return E.filter(e => {
      let {
        tokenStatus: t
      } = e;
      return 0 !== t
    })
  }
  getHasLoggedInAccounts() {
    return E.length > 0
  }
  getIsValidatingUsers() {
    return E.some(e => {
      let {
        tokenStatus: t
      } = e;
      return 1 === t
    })
  }
  get canUseMultiAccountNotifications() {
    return this.getCanUseMultiAccountMobile() && c.MultiAccountMobileNotificationsExperiment.getCurrentConfig({
      location: "09e468_1"
    }, {
      autoTrackExposure: !1
    }).isMultiAccountMobileNotificationsEnabled
  }
  get isSwitchingAccount() {
    return h
  }
}
S.displayName = "MultiAccountStore", S.persistKey = "MultiAccountStore", S.migrations = [e => {
  if (null != e) {
    var t;
    return {
      users: null !== (t = e.users) && void 0 !== t ? t : [],
      canUseMultiAccountMobile: !1
    }
  }
  return {
    users: [],
    canUseMultiAccountMobile: !1
  }
}];
var g = new S(u.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t
    } = e;
    i = t.id, h = !1;
    let n = E.slice(),
      a = n.findIndex(e => {
        let {
          id: n
        } = e;
        return n === t.id
      });
    if (a > -1 ? (E[a].avatar = t.avatar, E[a].username = t.username, E[a].discriminator = t.discriminator, E[a].tokenStatus = 2) : n.push({
        id: t.id,
        avatar: t.avatar,
        username: t.username,
        discriminator: t.discriminator,
        tokenStatus: 2,
        pushSyncToken: null
      }), (E = n).length > f.MAX_ACCOUNTS) {
      let e = E.splice(f.MAX_ACCOUNTS);
      e.forEach(e => {
        let {
          id: t
        } = e;
        _(t)
      })
    }
  },
  LOGOUT: function(e) {
    h = !!e.isSwitchingAccount, !e.isSwitchingAccount && (E = E.filter(e => {
      let {
        id: t
      } = e;
      return t !== i
    })), i = null
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: e => C(e.userId, 1),
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: e => C(e.userId, 2),
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: e => C(e.userId, 0),
  MULTI_ACCOUNT_REMOVE_ACCOUNT: e => _(e.userId),
  MULTI_ACCOUNT_MOVE_ACCOUNT: function(e) {
    let {
      from: t,
      to: n
    } = e;
    E = (0, d.moveItemFromTo)(E, t, n)
  },
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e, n = E.slice(), i = n.find(e => {
      let {
        id: n
      } = e;
      return n === t.id
    });
    null != i && (i.avatar = t.avatar, i.username = t.username, i.discriminator = t.discriminator, E = n)
  },
  MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: function(e) {
    let {
      multiAccountMobileExperimentEnabled: t
    } = e;
    a = t
  },
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function(e) {
    let {
      userId: t,
      pushSyncToken: n
    } = e;
    E = E.map(e => e.id === t ? {
      ...e,
      pushSyncToken: n
    } : e)
  },
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function(e) {
    let {
      invalidPushSyncTokens: t
    } = e;
    E = E.map(e => null != e.pushSyncToken && t.includes(e.pushSyncToken) ? {
      ...e,
      pushSyncToken: null
    } : e)
  }
})