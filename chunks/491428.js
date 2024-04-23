"use strict";
n.r(t), n.d(t, {
  overrideSurvey: function() {
    return d
  },
  surveyFetch: function() {
    return f
  },
  surveyHide: function() {
    return c
  },
  surveySeen: function() {
    return E
  }
});
var s = n("990547"),
  l = n("283693"),
  a = n("570140"),
  i = n("558724"),
  r = n("626135"),
  o = n("573261"),
  u = n("981631");

function d(e) {
  a.default.dispatch({
    type: "SURVEY_OVERRIDE",
    id: e
  })
}

function c(e, t) {
  a.default.dispatch({
    type: "SURVEY_HIDE",
    key: e
  }), t ? r.default.track(u.AnalyticEvents.APP_NOTICE_CLOSED, {
    notice_type: u.NoticeTypes.SURVEY,
    survey_id: e,
    dismissed: t
  }) : r.default.track(u.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: u.NoticeTypes.SURVEY
  })
}

function f(e, t) {
  var n = {};
  return null != e && (n.survey_override = e), null != t && (n.disable_auto_seen = t), o.default.get({
    url: u.Endpoints.USER_SURVEY,
    query: n,
    trackedActionData: {
      event: s.NetworkActionNames.USER_SURVEY_FETCH,
      properties: e => {
        var t;
        let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
        return (0, l.exact)({
          key: null == n ? void 0 : n.key
        })
      }
    }
  }).then(e => {
    var t;
    a.default.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
    })
  }, () => {
    a.default.dispatch({
      type: "SURVEY_FETCHED",
      survey: null
    })
  })
}

function E(e) {
  let t = i.default.getLastSeenTimestamp();
  if (null === t || null != t && Date.now() - t >= i.SURVEY_REFETCH_INTERVAL) return a.default.dispatch({
    type: "SURVEY_SEEN",
    key: e
  }), o.default.post({
    url: u.Endpoints.USER_SURVEY_SEEN(e),
    trackedActionData: {
      event: s.NetworkActionNames.USER_SURVEY_SEEN,
      properties: t => (0, l.exact)({
        key: e
      })
    }
  })
}