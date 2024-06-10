"use strict";
n.r(t), n.d(t, {
  claimQuestReward: function() {
    return N
  },
  claimQuestRewardCode: function() {
    return m
  },
  completeQuestPreview: function() {
    return R
  },
  dismissProgressTrackingFailureNotice: function() {
    return C
  },
  dismissQuestContent: function() {
    return O
  },
  enrollInQuest: function() {
    return A
  },
  fetchCurrentQuests: function() {
    return S
  },
  fetchQuestRewardCode: function() {
    return p
  },
  manualStopConsoleQuest: function() {
    return f
  },
  manuallyStartConsoleQuest: function() {
    return T
  },
  optimisticallyUpdateQuestProgress: function() {
    return v
  },
  overrideQuestDelivery: function() {
    return D
  },
  resetQuestDismissibilityStatus: function() {
    return L
  },
  resetQuestPreviewStatus: function() {
    return g
  },
  sendHeartbeat: function() {
    return h
  }
}), n("411104");
var i = n("990547"),
  r = n("544891"),
  s = n("570140"),
  a = n("479531"),
  o = n("573261"),
  l = n("617136"),
  u = n("569984"),
  d = n("918701"),
  _ = n("242755"),
  c = n("566078"),
  E = n("46140"),
  I = n("981631");
async function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  await r.HTTP.post({
    url: I.Endpoints.QUEST_ON_CONSOLE_START(e),
    query: t ? {
      preview: t
    } : void 0
  })
}
async function f(e) {
  await r.HTTP.post({
    url: I.Endpoints.QUEST_ON_CONSOLE_STOP(e)
  })
}
async function S() {
  if (!u.default.isFetchingCurrentQuests) {
    s.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    });
    try {
      let e = (await r.HTTP.get({
        url: I.Endpoints.QUESTS_CURRENT_QUESTS
      })).body.quests.filter(e => (0, d.isQuestWithKnownConfigVersion)(e)).map(e => (0, d.questWithUserStatusFromServer)(e)).filter(e => {
        var t;
        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || c.SharedQuestFields.build(e.config).rewardPlatforms.length > 0
      });
      s.default.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
        quests: e
      })
    } catch (e) {
      s.default.dispatch({
        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
        error: new a.default(e)
      })
    }
  }
}
async function h(e) {
  let {
    questId: t,
    streamKey: n,
    terminal: r = !1
  } = e;
  try {
    var l;
    let e = await o.default.post({
      url: I.Endpoints.QUESTS_HEARTBEAT(t),
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
          is_playtime_eligible: (0, _.isEligibleForQuestPlaytime)({
            location: E.QuestsExperimentLocations.QUESTS_MANAGER
          })
        }
      }
    });
    s.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, d.questUserStatusFromServer)(e.body),
      questId: t,
      streamKey: n
    })
  } catch (e) {
    s.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new a.default(e),
      questId: t,
      streamKey: n
    })
  }
}
async function A(e, t) {
  if (null != t.questContentCTA && (0, l.trackQuestContentClicked)({
      questId: e,
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      questContentPosition: t.questContentPosition
    }), !u.default.isEnrolling(e)) {
    s.default.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let n = await r.HTTP.post({
        url: I.Endpoints.QUESTS_ENROLL(e),
        body: {
          location: t.questContent
        }
      });
      s.default.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, d.questUserStatusFromServer)(n.body)
      })
    } catch (t) {
      s.default.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}
async function m(e, t, n) {
  if (!u.default.isClaimingRewardCode(e)) {
    s.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let i = await r.HTTP.post({
        url: I.Endpoints.QUESTS_REWARD_CODE(e),
        body: {
          platform: t,
          location: n
        }
      });
      s.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, d.questsRewardCodeFromServer)(i.body)
      })
    } catch (t) {
      throw s.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
        error: new a.default(t),
        questId: e
      }), t
    }
  }
}
async function N(e, t, n) {
  if (!u.default.isClaimingReward(e)) {
    s.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let i = await r.HTTP.post({
          url: I.Endpoints.QUESTS_CLAIM_REWARD(e),
          body: {
            platform: t,
            location: n
          }
        }),
        a = (0, d.questsEntitlementsFromServer)(i.body);
      0 === a.errors.length ? s.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_SUCCESS",
        questId: e,
        entitlements: a
      }) : s.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: a.errors,
        questId: e
      })
    } catch (t) {
      throw s.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_FAILURE",
        error: new a.default(t),
        questId: e
      }), t
    }
  }
}
async function p(e) {
  if (!u.default.isFetchingRewardCode(e)) {
    s.default.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await r.HTTP.get({
        url: I.Endpoints.QUESTS_REWARD_CODE(e)
      });
      s.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, d.questsRewardCodeFromServer)(t.body)
      })
    } catch (t) {
      throw s.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new a.default(t),
        questId: e
      }), t
    }
  }
}
async function O(e, t) {
  let n = u.default.isDismissingContent(e),
    i = (0, d.isDismissible)(t);
  if (!n && i) {
    s.default.dispatch({
      type: "QUESTS_DISMISS_CONTENT_BEGIN",
      questId: e,
      content: t
    });
    try {
      let n = await r.HTTP.post({
        url: I.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
        body: {}
      });
      s.default.dispatch({
        type: "QUESTS_DISMISS_CONTENT_SUCCESS",
        dismissedQuestUserStatus: (0, d.questUserStatusFromServer)(n.body)
      })
    } catch (t) {
      s.default.dispatch({
        type: "QUESTS_DISMISS_CONTENT_FAILURE",
        error: new a.default(t),
        questId: e
      })
    }
  }
}

function C(e) {
  s.default.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function R(e) {
  try {
    let t = await r.HTTP.post({
      url: I.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
      body: {}
    });
    s.default.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, d.questUserStatusFromServer)(t.body)
    })
  } catch (t) {
    s.default.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new a.default(t),
      questId: e
    })
  }
}
async function g(e) {
  try {
    let t = await r.HTTP.del({
      url: I.Endpoints.QUESTS_PREVIEW_STATUS(e),
      body: {}
    });
    s.default.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, d.questUserStatusFromServer)(t.body)
    })
  } catch (t) {
    s.default.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new a.default(t),
      questId: e
    })
  }
}
async function L(e) {
  try {
    let t = await r.HTTP.del({
      url: I.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
      body: {}
    });
    s.default.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
      previewQuestUserStatus: (0, d.questUserStatusFromServer)(t.body)
    })
  } catch (t) {
    s.default.dispatch({
      type: "QUESTS_PREVIEW_UPDATE_FAILURE",
      error: new a.default(t),
      questId: e
    })
  }
}

function v(e) {
  s.default.dispatch({
    type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
    userStatus: e
  })
}

function D(e) {
  s.default.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}