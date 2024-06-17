"use strict";
n.d(t, {
  AH: function() {
    return N
  },
  CS: function() {
    return T
  },
  EW: function() {
    return D
  },
  QB: function() {
    return m
  },
  T0: function() {
    return L
  },
  Tj: function() {
    return A
  },
  Wf: function() {
    return p
  },
  eT: function() {
    return g
  },
  gl: function() {
    return R
  },
  is: function() {
    return h
  },
  kP: function() {
    return v
  },
  m0: function() {
    return f
  },
  nE: function() {
    return C
  },
  pf: function() {
    return O
  },
  xw: function() {
    return S
  }
}), n(411104);
var i = n(990547),
  r = n(544891),
  s = n(570140),
  o = n(479531),
  a = n(573261),
  l = n(617136),
  u = n(569984),
  _ = n(918701),
  d = n(242755),
  c = n(566078),
  E = n(46140),
  I = n(981631);
async function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  try {
    let n = (await r.tn.post({
      url: I.ANM.QUEST_ON_CONSOLE_START(e),
      query: t ? {
        preview: t
      } : void 0
    })).body;
    if (null != n.quest_user_status) s.Z.dispatch({
      type: "QUESTS_USER_STATUS_UPDATE",
      user_status: n.quest_user_status
    });
    else if (null != n.error_hints && n.error_hints.length > 0) return {
      errorHints: n.error_hints
    }
  } catch (e) {}
  return {
    errorHints: []
  }
}
async function h(e) {
  await r.tn.post({
    url: I.ANM.QUEST_ON_CONSOLE_STOP(e)
  })
}
async function S() {
  if (!u.Z.isFetchingCurrentQuests) {
    s.Z.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    });
    try {
      let e = (await r.tn.get({
        url: I.ANM.QUESTS_CURRENT_QUESTS
      })).body.quests.filter(e => (0, _.Qe)(e)).map(e => (0, _.WP)(e)).filter(e => {
        var t;
        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || c.r.build(e.config).rewardPlatforms.length > 0
      });
      s.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
        quests: e
      })
    } catch (e) {
      s.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
        error: new o.Z(e)
      })
    }
  }
}
async function f(e) {
  let {
    questId: t,
    streamKey: n,
    terminal: r = !1
  } = e;
  try {
    var l;
    let e = await a.Z.post({
      url: I.ANM.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        terminal: r
      },
      trackedActionData: {
        event: i.NetworkActionNames.QUEST_HEARTBEAT,
        properties: {
          quest_id: t,
          terminal: r,
          is_overlay: __OVERLAY__,
          stack_trace: null !== (l = Error().stack) && void 0 !== l ? l : "",
          is_playtime_eligible: (0, d.J)({
            location: E.dr.QUESTS_MANAGER
          })
        }
      }
    });
    s.Z.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, _.U3)(e.body),
      questId: t,
      streamKey: n
    })
  } catch (e) {
    s.Z.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new o.Z(e),
      questId: t,
      streamKey: n
    })
  }
}
async function N(e, t) {
  if (null != t.questContentCTA && (0, l._3)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition
    }), !u.Z.isEnrolling(e)) {
    s.Z.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let n = await r.tn.post({
        url: I.ANM.QUESTS_ENROLL(e),
        body: {
          location: t.questContent
        }
      });
      s.Z.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, _.U3)(n.body)
      })
    } catch (t) {
      s.Z.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}
async function A(e, t, n) {
  if (!u.Z.isClaimingRewardCode(e)) {
    s.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let i = await r.tn.post({
        url: I.ANM.QUESTS_REWARD_CODE(e),
        body: {
          platform: t,
          location: n
        }
      });
      s.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, _.yI)(i.body)
      })
    } catch (t) {
      throw s.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
        error: new o.Z(t),
        questId: e
      }), t
    }
  }
}
async function m(e, t, n) {
  if (!u.Z.isClaimingReward(e)) {
    s.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let i = await r.tn.post({
          url: I.ANM.QUESTS_CLAIM_REWARD(e),
          body: {
            platform: t,
            location: n
          }
        }),
        o = (0, _.Xh)(i.body);
      0 === o.errors.length ? s.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_SUCCESS",
        questId: e,
        entitlements: o
      }) : s.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: o.errors,
        questId: e
      })
    } catch (t) {
      throw s.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: new o.Z(t),
        questId: e
      }), t
    }
  }
}
async function O(e) {
  if (!u.Z.isFetchingRewardCode(e)) {
    s.Z.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await r.tn.get({
        url: I.ANM.QUESTS_REWARD_CODE(e)
      });
      s.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, _.yI)(t.body)
      })
    } catch (t) {
      throw s.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new o.Z(t),
        questId: e
      }), t
    }
  }
}
async function R(e, t) {
  let n = u.Z.isDismissingContent(e),
    i = (0, _.GN)(t);
  if (!n && i) {
    s.Z.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await r.tn.post({
        url: I.ANM.QUESTS_DISMISS_CONTENT(e, t),
        body: {}
      });
      s.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, _.U3)(n.body)
      })
    } catch (t) {
      s.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_FAILURE",
        error: new o.Z(t),
        questId: e
      })
    }
  }
}

function C(e) {
  s.Z.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function p(e) {
  try {
    let t = await r.tn.post({
      url: I.ANM.QUESTS_PREVIEW_COMPLETE(e),
      body: {}
    });
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, _.U3)(t.body)
    })
  } catch (t) {
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function g(e) {
  try {
    let t = await r.tn.del({
      url: I.ANM.QUESTS_PREVIEW_STATUS(e),
      body: {}
    });
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, _.U3)(t.body)
    })
  } catch (t) {
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function L(e) {
  try {
    let t = await r.tn.del({
      url: I.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {}
    });
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, _.U3)(t.body)
    })
  } catch (t) {
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}

function v(e) {
  s.Z.dispatch({
    type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
    userStatus: e
  })
}

function D(e) {
  s.Z.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}