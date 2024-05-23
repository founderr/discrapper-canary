"use strict";
n.r(t), n.d(t, {
  claimQuestReward: function() {
    return S
  },
  claimQuestRewardCode: function() {
    return f
  },
  completeQuestPreview: function() {
    return N
  },
  dismissProgressTrackingFailureNotice: function() {
    return m
  },
  dismissQuestContent: function() {
    return A
  },
  enrollInQuest: function() {
    return T
  },
  fetchCurrentQuests: function() {
    return E
  },
  fetchQuestRewardCode: function() {
    return h
  },
  optimisticallyUpdateQuestProgress: function() {
    return C
  },
  overrideQuestDelivery: function() {
    return R
  },
  resetQuestDismissibilityStatus: function() {
    return O
  },
  resetQuestPreviewStatus: function() {
    return p
  },
  sendHeartbeat: function() {
    return I
  }
});
var i = n("990547"),
  r = n("544891"),
  s = n("570140"),
  a = n("479531"),
  o = n("573261"),
  l = n("617136"),
  u = n("569984"),
  d = n("918701"),
  _ = n("566078"),
  c = n("981631");
async function E() {
  if (!u.default.isFetchingCurrentQuests) {
    s.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
    });
    try {
      let e = (await r.HTTP.get({
        url: c.Endpoints.QUESTS_CURRENT_QUESTS
      })).body.quests.filter(e => (0, d.isQuestWithKnownConfigVersion)(e)).map(e => (0, d.questWithUserStatusFromServer)(e)).filter(e => {
        var t;
        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || _.SharedQuestFields.build(e.config).rewardPlatforms.length > 0
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
async function I(e) {
  let {
    questId: t,
    streamKey: n,
    terminal: r = !1
  } = e;
  try {
    let e = await o.default.post({
      url: c.Endpoints.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        terminal: r
      },
      trackedActionData: {
        event: i.NetworkActionNames.QUEST_HEARTBEAT,
        properties: {
          quest_id: t,
          terminal: r,
          is_overlay: __OVERLAY__
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
async function T(e, t) {
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
        url: c.Endpoints.QUESTS_ENROLL(e),
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
async function f(e, t, n) {
  if (!u.default.isClaimingRewardCode(e)) {
    s.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let i = await r.HTTP.post({
        url: c.Endpoints.QUESTS_REWARD_CODE(e),
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
async function S(e, t, n) {
  if (!u.default.isClaimingReward(e)) {
    s.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_BEGIN",
      questId: e
    });
    try {
      let i = await r.HTTP.post({
          url: c.Endpoints.QUESTS_CLAIM_REWARD(e),
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
async function h(e) {
  if (!u.default.isFetchingRewardCode(e)) {
    s.default.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await r.HTTP.get({
        url: c.Endpoints.QUESTS_REWARD_CODE(e)
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
async function A(e, t) {
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
        url: c.Endpoints.QUESTS_DISMISS_CONTENT(e, t),
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

function m(e) {
  s.default.dispatch({
    type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
    streamKey: e
  })
}
async function N(e) {
  try {
    let t = await r.HTTP.post({
      url: c.Endpoints.QUESTS_PREVIEW_COMPLETE(e),
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
async function p(e) {
  try {
    let t = await r.HTTP.del({
      url: c.Endpoints.QUESTS_PREVIEW_STATUS(e),
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
async function O(e) {
  try {
    let t = await r.HTTP.del({
      url: c.Endpoints.QUESTS_PREVIEW_DISMISSIBILITY(e),
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

function C(e) {
  s.default.dispatch({
    type: "QUESTS_OPTIMISTIC_PROGRESS_UPDATE",
    userStatus: e
  })
}

function R(e) {
  s.default.dispatch({
    type: "QUESTS_DELIVERY_OVERRIDE",
    questId: e
  })
}