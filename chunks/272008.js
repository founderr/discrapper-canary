"use strict";
n.d(t, {
  AH: function() {
    return m
  },
  CS: function() {
    return S
  },
  EW: function() {
    return P
  },
  QB: function() {
    return R
  },
  T0: function() {
    return D
  },
  Tj: function() {
    return O
  },
  Wf: function() {
    return v
  },
  eT: function() {
    return L
  },
  gl: function() {
    return g
  },
  is: function() {
    return f
  },
  kP: function() {
    return M
  },
  m0: function() {
    return A
  },
  nE: function() {
    return C
  },
  pf: function() {
    return p
  },
  xw: function() {
    return N
  }
}), n(411104);
var i = n(990547),
  r = n(544891),
  s = n(570140),
  o = n(479531),
  a = n(573261),
  l = n(617136),
  u = n(705006),
  _ = n(569984),
  c = n(918701),
  d = n(242755),
  E = n(566078),
  I = n(46140),
  T = n(981631),
  h = n(689938);
async function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  try {
    let n = (await r.tn.post({
      url: T.ANM.QUEST_ON_CONSOLE_START(e),
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
  } catch (t) {
    var n;
    let e = new o.Z(t);
    if (429 === e.status) return {
      errorHints: [h.Z.Messages.RATE_LIMITED]
    };
    return {
      errorHints: [null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : h.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR]
    }
  }
  return {
    errorHints: []
  }
}
async function f(e) {
  await r.tn.post({
    url: T.ANM.QUEST_ON_CONSOLE_STOP(e)
  })
}
async function N() {
  if (!_.Z.isFetchingCurrentQuests) {
    s.Z.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    }), u.Z.recordQuestRequestAttempt(T.ANM.QUESTS_CURRENT_QUESTS);
    try {
      let e = (await r.tn.get({
        url: T.ANM.QUESTS_CURRENT_QUESTS
      })).body.quests.filter(e => (0, c.Qe)(e)).map(e => (0, c.WP)(e)).filter(e => {
        var t;
        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || E.r.build(e.config).rewardPlatforms.length > 0
      });
      s.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
        quests: e
      }), u.Z.recordQuestRequestApiResponse(T.ANM.QUESTS_CURRENT_QUESTS, {
        wasSuccessful: !0
      })
    } catch (e) {
      s.Z.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
        error: new o.Z(e)
      }), u.Z.recordQuestRequestApiResponse(T.ANM.QUESTS_CURRENT_QUESTS, {
        wasSuccessful: !1
      })
    }
  }
}
async function A(e) {
  let {
    questId: t,
    streamKey: n,
    terminal: r = !1
  } = e;
  try {
    var l;
    let e = await a.Z.post({
      url: T.ANM.QUESTS_HEARTBEAT(t),
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
            location: I.dr.QUESTS_MANAGER
          })
        }
      }
    });
    s.Z.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, c.U3)(e.body),
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
async function m(e, t) {
  if (null != t.questContentCTA && (0, l._3)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition
    }), !_.Z.isEnrolling(e)) {
    s.Z.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let n = await r.tn.post({
        url: T.ANM.QUESTS_ENROLL(e),
        body: {
          location: t.questContent
        }
      });
      s.Z.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, c.U3)(n.body)
      })
    } catch (t) {
      s.Z.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}
async function O(e, t, n) {
  if (!_.Z.isClaimingRewardCode(e)) {
    s.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let i = await r.tn.post({
        url: T.ANM.QUESTS_REWARD_CODE(e),
        body: {
          platform: t,
          location: n
        }
      });
      s.Z.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, c.yI)(i.body)
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
async function R(e, t, n) {
  if (!_.Z.isClaimingReward(e)) {
    s.Z.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let i = await r.tn.post({
          url: T.ANM.QUESTS_CLAIM_REWARD(e),
          body: {
            platform: t,
            location: n
          }
        }),
        o = (0, c.Xh)(i.body);
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
async function p(e) {
  if (!_.Z.isFetchingRewardCode(e)) {
    s.Z.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await r.tn.get({
        url: T.ANM.QUESTS_REWARD_CODE(e)
      });
      s.Z.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, c.yI)(t.body)
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
async function g(e, t) {
  let n = _.Z.isDismissingContent(e),
    i = (0, c.GN)(t);
  if (!n && i) {
    s.Z.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await r.tn.post({
        url: T.ANM.QUESTS_DISMISS_CONTENT(e, t),
        body: {}
      });
      s.Z.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, c.U3)(n.body)
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
async function v(e) {
  try {
    let t = await r.tn.post({
      url: T.ANM.QUESTS_PREVIEW_COMPLETE(e),
      body: {}
    });
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, c.U3)(t.body)
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
      url: T.ANM.QUESTS_PREVIEW_STATUS(e),
      body: {}
    });
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, c.U3)(t.body)
    })
  } catch (t) {
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}
async function D(e) {
  try {
    let t = await r.tn.del({
      url: T.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {}
    });
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, c.U3)(t.body)
    })
  } catch (t) {
    s.Z.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new o.Z(t),
      questId: e
    })
  }
}

function M(e) {
  s.Z.dispatch({
    type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
    userStatus: e
  })
}

function P(e) {
  s.Z.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}