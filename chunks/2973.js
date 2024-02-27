"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var s = n("446674"),
  i = n("913144");
let r = !1,
  a = new Map,
  u = 0,
  l = new Set,
  o = new Set,
  d = new Set,
  c = new Set,
  E = new Map,
  S = new Map;

function _(e, t) {
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
    _(e, n)
  }
}

function T(e) {
  null != S.get(e) && (S = new Map(S)).delete(e)
}

function C(e) {
  let t = new Set(l);
  t.delete(e), l = t
}

function p(e) {
  let t = new Set(c);
  t.delete(e), c = t
}
class A extends s.default.Store {
  get quests() {
    return a
  }
  get isFetchingCurrentQuests() {
    return r
  }
  get lastFetchedCurrentQuests() {
    return u
  }
  isEnrolling(e) {
    return l.has(e)
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
  getStreamHeartbeatFailure(e) {
    return S.get(e)
  }
}
A.displayName = "QuestsStore";
var I = new A(i.default, {
  LOGOUT: function() {
    r = !1, a = new Map, u = 0, l = new Set, S = new Map
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    u = Date.now(), r = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: t
    } = e;
    for (let e of (r = !1, a = new Map, t)) a.set(e.id, e)
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    u = 0, r = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: t,
      streamKey: n,
      userStatus: s
    } = e;
    _(t, {
      userStatus: s
    }), T(n)
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
    let {
      questId: t,
      streamKey: n
    } = e, s = S.get(n);
    null == s && (S = new Map(S)).set(n, {
      questId: t,
      streamKey: n,
      firstFailedAt: Date.now()
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(l);
    n.add(t), l = n
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: t
    } = e;
    _(t.questId, {
      userStatus: t
    }), C(t.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    C(t)
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
    _(t.questId, {
      userStatus: t
    }), p(t.questId)
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    p(t)
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    T(t)
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
    let {
      streamKey: t
    } = e;
    T(t)
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
    let {
      previewQuestUserStatus: t
    } = e;
    _(t.questId, {
      userStatus: t
    })
  }
})