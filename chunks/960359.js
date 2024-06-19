n.d(t, {
  BE: function() {
    return E
  },
  Nw: function() {
    return c
  },
  R5: function() {
    return u
  },
  RJ: function() {
    return _
  },
  VT: function() {
    return d
  },
  Vb: function() {
    return T
  },
  Vt: function() {
    return r
  },
  dN: function() {
    return o
  },
  m0: function() {
    return I
  }
});
var s = n(544891),
  i = n(570140),
  l = n(199902),
  a = n(981631);
let r = async e => {
  let t = !1;
  try {
    t = (await s.tn.get({
      url: a.ANM.DROPS_ELIGIBILITY,
      query: {
        drops_quest_id: e
      }
    })).body.eligible
  } catch (e) {
    t = !1
  }
  i.Z.dispatch({
    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
    isEligible: t,
    dropsQuestId: e
  })
}, o = async e => {
  let t = [];
  try {
    t = (await s.tn.get({
      url: a.ANM.DROPS_PLATFORM_AVAILABILITY,
      query: {
        drops_quest_id: e
      }
    })).body.available_platforms
  } catch (e) {
    t = []
  }
  i.Z.dispatch({
    type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
    availablePlatforms: t
  })
}, c = async (e, t) => {
  try {
    let n = await s.tn.post({
      url: a.ANM.DROPS_CLAIM_REWARD_CODE,
      query: {
        drops_quest_id: e,
        platform: t
      }
    });
    return i.Z.dispatch({
      type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
      rewardCode: n.body.code
    }), n.body.code
  } catch (e) {
    throw e
  }
}, u = async () => {
  try {
    let e = await s.tn.get({
      url: a.ANM.DROPS_USER_STATUS
    });
    i.Z.dispatch({
      type: "DROPS_USER_STATUS_FETCH_SUCCESS",
      codes: e.body
    })
  } catch (e) {
    i.Z.dispatch({
      type: "DROPS_USER_STATUS_FETCH_FAILURE"
    })
  }
}, d = async e => {
  await s.tn.del({
    url: a.ANM.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  }), i.Z.dispatch({
    type: "DROPS_UNENROLL_USER",
    dropsQuestId: e
  }), await u()
}, E = async e => {
  let t = await s.tn.get({
    url: a.ANM.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  });
  await i.Z.dispatch({
    type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
    enrolledUser: t.body.user,
    isEnrolled: t.body.enrolled,
    dropsQuestId: e
  })
}, _ = async e => {
  await s.tn.post({
    url: a.ANM.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  }), i.Z.dispatch({
    type: "DROPS_ENROLL_SUCCESS"
  })
}, I = async (e, t, n) => {
  let r = l.Z.getViewerIds(t);
  try {
    let l = await s.tn.post({
      url: a.ANM.DROPS_HEARTBEAT(e),
      query: {
        stream_key: t,
        application_id: n,
        viewer_count: r.length
      },
      retries: 2
    });
    i.Z.dispatch({
      type: "DROPS_HEARTBEAT_SUCCESS",
      dropsQuestId: e,
      completed: l.body.completed,
      progress: l.body.progress
    })
  } catch (t) {
    i.Z.dispatch({
      type: "DROPS_HEARTBEAT_FAILURE",
      dropsQuestId: e,
      statusCode: null == t ? void 0 : t.status
    })
  }
}, T = async e => {
  try {
    let t = await s.tn.get({
      url: a.ANM.DROPS_PROGRESS(e)
    });
    i.Z.dispatch({
      type: "DROPS_FETCH_PROGRESS_SUCCESS",
      dropsQuestId: e,
      completed: t.body.completed,
      progress: t.body.progress
    })
  } catch (t) {
    i.Z.dispatch({
      type: "DROPS_FETCH_PROGRESS_FAILURE",
      dropsQuestId: e
    })
  }
}