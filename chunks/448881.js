"use strict";
E.r(_), E.d(_, {
  fetchCurrentQuests: function() {
    return I
  },
  sendHeartbeat: function() {
    return T
  },
  enrollInQuest: function() {
    return s
  },
  claimQuestRewardCode: function() {
    return S
  },
  fetchQuestRewardCode: function() {
    return N
  }
});
var t = E("872717"),
  o = E("913144"),
  n = E("599417"),
  a = E("2973"),
  r = E("227231"),
  i = E("49111");
async function I() {
  o.default.dispatch({
    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
  });
  try {
    let e = await t.default.get({
        url: i.Endpoints.QUESTS_CURRENT_QUESTS
      }),
      _ = e.body.quests.map(e => (0, r.questWithUserStatusFromServer)(e)),
      E = _.filter(e => {
        var _;
        return (null === (_ = e.userStatus) || void 0 === _ ? void 0 : _.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
      });
    o.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
      quests: E
    })
  } catch (e) {
    o.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
      error: new n.default(e)
    })
  }
}
async function T(e) {
  let {
    questId: _,
    streamKey: E,
    applicationId: a
  } = e;
  try {
    let e = await t.default.post({
      url: i.Endpoints.QUESTS_HEARTBEAT(_),
      body: {
        stream_key: E,
        application_id: a
      }
    });
    o.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, r.questUserStatusFromServer)(e.body),
      applicationId: a,
      questId: _,
      streamKey: E
    })
  } catch (e) {
    o.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new n.default(e),
      questId: _,
      streamKey: E
    })
  }
}
async function s(e) {
  let _ = a.default.isEnrolling(e);
  if (!_) {
    o.default.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let _ = await t.default.post({
        url: i.Endpoints.QUESTS_ENROLL(e)
      });
      o.default.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, r.questUserStatusFromServer)(_.body)
      })
    } catch (_) {
      o.default.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}
async function S(e, _) {
  let E = a.default.isClaimingRewardCode(e);
  if (!E) {
    o.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let E = await t.default.post({
        url: i.Endpoints.QUESTS_REWARD_CODE(e),
        body: {
          platform: _
        }
      });
      o.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, r.questsRewardCodeFromServer)(E.body)
      })
    } catch (_) {
      throw o.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
        error: new n.default(_),
        questId: e
      }), _
    }
  }
}
async function N(e) {
  let _ = a.default.isFetchingRewardCode(e);
  if (!_) {
    o.default.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let _ = await t.default.get({
        url: i.Endpoints.QUESTS_REWARD_CODE(e)
      });
      o.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, r.questsRewardCodeFromServer)(_.body)
      })
    } catch (_) {
      throw o.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new n.default(_),
        questId: e
      }), _
    }
  }
}