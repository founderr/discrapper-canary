"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("446674"),
  r = n("913144");
let s = !1,
  i = new Map,
  l = 0,
  u = new Set,
  o = new Set,
  d = new Set,
  c = new Map;

function f(e, t) {
  i = new Map(i);
  let n = i.get(e);
  null != n && i.set(e, {
    ...n,
    ...t
  })
}

function E(e, t) {
  let n = new Map(c);
  n.set(e, t), c = n;
  let a = i.get(e),
    r = null == a ? void 0 : a.userStatus;
  if (null != r && null == r.claimedAt) {
    let n = {
      userStatus: {
        ...r,
        claimedAt: t.claimedAt
      }
    };
    f(e, n)
  }
}

function S(e) {
  let t = new Set(u);
  t.delete(e), u = t
}
class h extends a.default.Store {
  get quests() {
    return i
  }
  get isFetchingCurrentQuests() {
    return s
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
  getRewardCode(e) {
    return c.get(e)
  }
}
h.displayName = "QuestsStore";
var C = new h(r.default, {
  LOGOUT: function() {
    s = !1, i = new Map, l = 0, u = new Set
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    l = Date.now(), s = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: t
    } = e;
    for (let e of (s = !1, i = new Map, t)) i.set(e.id, e)
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    l = 0, s = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: t,
      userStatus: n
    } = e;
    f(t, {
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
    f(t.questId, {
      userStatus: t
    }), S(t.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    S(t)
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
    } = e, a = new Set(d);
    a.delete(t), d = a, E(t, n)
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
    } = e, a = new Set(o);
    a.delete(t), o = a, E(t, n)
  },
  QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(o);
    n.delete(t), o = n
  }
})