"use strict";
let i, r, s, o, a, l, u, _, c, d, E, I;
n(47120);
var T, h, S, f, N = n(906280),
  A = n.n(N),
  m = n(887003),
  O = n(442837),
  R = n(570140),
  p = n(497505),
  g = n(918701),
  C = n(5881),
  v = n(46140);

function L() {
  i = !1, r = new Map, s = 0, o = new Set, a = new Set, l = new Set, u = new Set, _ = new Set, c = new Map, d = new Map, E = new Map, I = null
}

function D(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      updateProgress: !1
    },
    i = (r = new Map(r)).get(e);
  if (null != i) {
    var s, o;
    let a = null === (s = i.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds,
      l = null === (o = i.userStatus) || void 0 === o ? void 0 : o.progress,
      u = null == a && null == l,
      _ = {
        ...i,
        ...t
      };
    !(n.updateProgress || null == _.userStatus || u || null != _.userStatus.completedAt || null == _.userStatus.enrolledAt) && null != _.userStatus && (_.userStatus = {
      ..._.userStatus,
      streamProgressSeconds: null != a ? a : 0,
      progress: null != l ? l : {}
    }), r.set(e, _)
  }
}

function M(e, t) {
  let n = new Map(c);
  n.set(e, t), c = n
}

function P(e, t) {
  M(e, t);
  let n = r.get(e),
    i = null == n ? void 0 : n.userStatus;
  null != i && null == i.claimedAt && D(e, {
    userStatus: {
      ...i,
      claimedAt: t.claimedAt
    }
  })
}
L();

function y(e) {
  null != E.get(e) && (E = new Map(E)).delete(e)
}

function U(e) {
  let t = new Set(o);
  t.delete(e), o = t
}

function b(e) {
  let t = new Set(_);
  t.delete(e), _ = t
}
class G extends(T = O.ZP.Store) {
  get quests() {
    return r
  }
  get isFetchingCurrentQuests() {
    return i
  }
  get lastFetchedCurrentQuests() {
    return s
  }
  get questDeliveryOverride() {
    return r.get(null != I ? I : "")
  }
  isEnrolling(e) {
    return o.has(e)
  }
  isClaimingRewardCode(e) {
    return a.has(e)
  }
  isClaimingReward(e) {
    return l.has(e)
  }
  isFetchingRewardCode(e) {
    return u.has(e)
  }
  isDismissingContent(e) {
    return _.has(e)
  }
  getRewardCode(e) {
    return c.get(e)
  }
  getRewards(e) {
    return d.get(e)
  }
  getStreamHeartbeatFailure(e) {
    return E.get(e)
  }
  getQuest(e) {
    return r.get(e)
  }
}
f = "QuestsStore", (S = "displayName") in(h = G) ? Object.defineProperty(h, S, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : h[S] = f, t.Z = new G(R.Z, {
  LOGOUT: function() {
    L()
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    s = Date.now(), i = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: t
    } = e;
    i = !1;
    let n = new Map(r);
    for (let e of (r = new Map, t)) {
      var s, o;
      let t = A()(e),
        i = n.get(t.id),
        a = (null === (s = t.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && null == t.userStatus.completedAt;
      if ((null == i ? void 0 : i.userStatus) != null && null != t.userStatus && a) {
        let e = t.userStatus.progress,
          n = i.userStatus.progress;
        for (let [t, i] of Object.entries(e)) {
          let e = null == n ? void 0 : null === (o = n[t]) || void 0 === o ? void 0 : o.value;
          null != e && null != i && e > i.value && (i.value = e)
        }
      }
      r.set(t.id, t), t.targetedContent.includes(p.jn.QUEST_BAR) && (0, C.T)({
        location: v.dr.QUESTS_STORE
      }).log("Delivered ".concat(t.config.messages.questName, " (").concat(t.id, ")"))
    }
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    s = 0, i = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: t,
      streamKey: n,
      userStatus: i
    } = e;
    D(t, {
      userStatus: i
    }, {
      updateProgress: !0
    }), y(n)
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
    let {
      questId: t,
      streamKey: n
    } = e;
    null == E.get(n) && (E = new Map(E)).set(n, {
      questId: t,
      streamKey: n,
      firstFailedAt: Date.now()
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(o);
    n.add(t), o = n
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: t
    } = e;
    D(t.questId, {
      userStatus: t
    }), U(t.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    U(t)
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(u);
    n.add(t), u = n
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: t,
      rewardCode: n
    } = e, i = new Set(u);
    i.delete(t), u = i, P(t, n)
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(u);
    n.delete(t), u = n
  },
  QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(a);
    n.add(t), a = n
  },
  QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: t,
      rewardCode: n
    } = e, i = new Set(a);
    i.delete(t), a = i, P(t, n)
  },
  QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(a);
    n.delete(t), a = n
  },
  QUESTS_CLAIM_REWARD_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(l);
    n.add(t), l = n
  },
  QUESTS_CLAIM_REWARD_SUCCESS: function(e) {
    let {
      questId: t,
      entitlements: n
    } = e, i = new Set(l);
    i.delete(t), l = i, ! function(e, t) {
      let n = new Map(d);
      n.set(e, t.items), d = n;
      let i = r.get(e),
        s = null == i ? void 0 : i.userStatus;
      if (null != s && null == s.claimedAt) {
        var o;
        let n = function(e) {
          var t;
          let {
            entitlements: n
          } = e, i = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
          return (null == i ? void 0 : i.tag) !== m.w.REWARD_CODE ? null : i.rewardCode
        }({
          entitlements: t
        });
        null != n && M(e, n), D(e, {
          userStatus: {
            ...s,
            claimedAt: t.claimedAt,
            claimedTier: null !== (o = null == n ? void 0 : n.tier) && void 0 !== o ? o : null
          }
        })
      }
    }(t, n)
  },
  QUESTS_CLAIM_REWARD_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(l);
    n.delete(t), l = n
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(_);
    n.add(t), _ = n
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
    let {
      dismissedQuestUserStatus: t
    } = e;
    D(t.questId, {
      userStatus: t
    }), b(t.questId)
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    b(t)
  },
  QUESTS_USER_STATUS_UPDATE: function(e) {
    let {
      user_status: t
    } = e;
    (0, C.T)({
      location: v.dr.QUESTS_STORE
    }).log("Received user status update for ".concat(t.quest_id), t), D(t.quest_id, {
      userStatus: (0, g.U3)(t)
    }, {
      updateProgress: !0
    })
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    y(t)
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
    let {
      streamKey: t
    } = e;
    y(t)
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
    let {
      previewQuestUserStatus: t
    } = e;
    D(t.questId, {
      userStatus: t
    }), null == t.claimedAt && (c = new Map(c)).delete(t.questId)
  },
  QUESTS_OPTIMISTIC_PROGRESS_UPDATE: function(e) {
    let {
      userStatus: t
    } = e;
    D(t.questId, {
      userStatus: t
    }, {
      updateProgress: !0
    })
  },
  QUESTS_DELIVERY_OVERRIDE: function(e) {
    let {
      questId: t
    } = e;
    I = I === t ? null : t
  }
})