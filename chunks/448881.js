"use strict";
E.r(_), E.d(_, {
  fetchCurrentQuests: function() {
    return I
  },
  sendHeartbeat: function() {
    return s
  },
  enrollInQuest: function() {
    return T
  }
});
var t = E("872717"),
  o = E("913144"),
  n = E("599417"),
  r = E("2973"),
  a = E("227231"),
  i = E("49111");
async function I() {
  o.default.dispatch({
    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
  });
  try {
    let e = await t.default.get({
      url: i.Endpoints.QUESTS_CURRENT_QUESTS
    });
    o.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
      quests: e.body.quests.map(a.questWithUserStatusFromServer)
    })
  } catch (e) {
    o.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
      error: new n.default(e)
    })
  }
}
async function s(e) {
  let {
    questId: _,
    streamKey: E,
    applicationId: r
  } = e;
  try {
    let e = await t.default.post({
      url: i.Endpoints.QUESTS_HEARTBEAT(_),
      body: {
        stream_key: E,
        application_id: r
      }
    });
    o.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, a.questUserStatusFromServer)(e.body),
      applicationId: r,
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
async function T(e) {
  let _ = r.default.isEnrolling(e);
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
        enrolledQuestUserStatus: (0, a.questUserStatusFromServer)(_.body)
      })
    } catch (_) {
      o.default.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}