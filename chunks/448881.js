"use strict";
n.r(t), n.d(t, {
  fetchCurrentQuests: function() {
    return o
  },
  sendHeartbeat: function() {
    return d
  },
  enrollInQuest: function() {
    return c
  },
  claimQuestRewardCode: function() {
    return f
  },
  fetchQuestRewardCode: function() {
    return E
  }
});
var a = n("872717"),
  r = n("913144"),
  s = n("599417"),
  i = n("2973"),
  l = n("227231"),
  u = n("49111");
async function o() {
  r.default.dispatch({
    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
  });
  try {
    let e = await a.default.get({
        url: u.Endpoints.QUESTS_CURRENT_QUESTS
      }),
      t = e.body.quests.map(e => (0, l.questWithUserStatusFromServer)(e)),
      n = t.filter(e => {
        var t;
        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
      });
    r.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
      quests: n
    })
  } catch (e) {
    r.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
      error: new s.default(e)
    })
  }
}
async function d(e) {
  let {
    questId: t,
    streamKey: n,
    applicationId: i
  } = e;
  try {
    let e = await a.default.post({
      url: u.Endpoints.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        application_id: i
      }
    });
    r.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, l.questUserStatusFromServer)(e.body),
      applicationId: i,
      questId: t,
      streamKey: n
    })
  } catch (e) {
    r.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new s.default(e),
      questId: t,
      streamKey: n
    })
  }
}
async function c(e) {
  let t = i.default.isEnrolling(e);
  if (!t) {
    r.default.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let t = await a.default.post({
        url: u.Endpoints.QUESTS_ENROLL(e)
      });
      r.default.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
      })
    } catch (t) {
      r.default.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}
async function f(e, t) {
  let n = i.default.isClaimingRewardCode(e);
  if (!n) {
    r.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let n = await a.default.post({
        url: u.Endpoints.QUESTS_REWARD_CODE(e),
        body: {
          platform: t
        }
      });
      r.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, l.questsRewardCodeFromServer)(n.body)
      })
    } catch (t) {
      throw r.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
        error: new s.default(t),
        questId: e
      }), t
    }
  }
}
async function E(e) {
  let t = i.default.isFetchingRewardCode(e);
  if (!t) {
    r.default.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let t = await a.default.get({
        url: u.Endpoints.QUESTS_REWARD_CODE(e)
      });
      r.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, l.questsRewardCodeFromServer)(t.body)
      })
    } catch (t) {
      throw r.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new s.default(t),
        questId: e
      }), t
    }
  }
}