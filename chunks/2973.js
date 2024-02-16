"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var s = n("446674"),
  i = n("913144");
let r = !1,
  a = new Map,
  l = 0,
  u = new Set,
  o = new Set,
  d = new Set,
  c = new Set,
  E = new Map;

function S(e, t) {
  a = new Map(a);
  let n = a.get(e);
  null != n && a.set(e, {
    ...n,
    ...t
  })
}

function f(e, t) {
  let n = new Map(E);
  n.set(e, t), E = n;
  let s = a.get(e),
    i = null == s ? void 0 : s.userStatus;
  if (null != i && null == i.claimedAt) {
    let n = {
      userStatus: {
        ...i,
        claimedAt: t.claimedAt
      }
    };
    S(e, n)
  }
}

function _(e) {
  let t = new Set(u);
  t.delete(e), u = t
}

function T(e) {
  let t = new Set(c);
  t.delete(e), c = t
}
class C extends s.default.Store {
  get quests() {
    return a
  }
  get isFetchingCurrentQuests() {
    return r
  }
  get lastFetchedCurrentQuests() {
    return l
  }
  isEnrolling(e) {
    return u.has(e)
  }
  isClaimingRewardCode(e) {
    return o.has(e)
  }
  isFetchingRewardCode(e) {
    return d.has(e)
  }
  isDismissingContent(e) {
    return c.has(e)
  }
  getRewardCode(e) {
    return E.get(e)
  }
}
C.displayName = "QuestsStore";
var p = new C(i.default, {
  LOGOUT: function() {
    r = !1, a = new Map, l = 0, u = new Set
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    l = Date.now(), r = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: t
    } = e;
    for (let e of (r = !1, a = new Map, t)) a.set(e.id, e)
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    l = 0, r = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: t,
      userStatus: n
    } = e;
    S(t, {
      userStatus: n
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(u);
    n.add(t), u = n
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: t
    } = e;
    S(t.questId, {
      userStatus: t
    }), _(t.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    _(t)
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(d);
    n.add(t), d = n
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: t,
      rewardCode: n
    } = e, s = new Set(d);
    s.delete(t), d = s, f(t, n)
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(d);
    n.delete(t), d = n
  },
  QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(o);
    n.add(t), o = n
  },
  QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: t,
      rewardCode: n
    } = e, s = new Set(o);
    s.delete(t), o = s, f(t, n)
  },
  QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(o);
    n.delete(t), o = n
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(c);
    n.add(t), c = n
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
    let {
      dismissedQuestUserStatus: t
    } = e;
    S(t.questId, {
      userStatus: t
    }), T(t.questId)
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    T(t)
  }
})