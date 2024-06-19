t.r(n), t.d(n, {
  VideoBackgroundIssue: function() {
    return s
  },
  default: function() {
    return _
  }
});
var a, s, l = t(735250),
  r = t(470079),
  o = t(481060),
  i = t(332664),
  c = t(142497),
  u = t(626135),
  E = t(981631),
  d = t(190378),
  C = t(689938);
(a = s || (s = {})).BAD_OUTLINE = "BAD_OUTLINE", a.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY", a.FLICKERING = "FLICKERING", a.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG", a.OTHER = "OTHER";
let O = ["OTHER"];

function _(e) {
  let {
    analyticsData: n,
    transitionState: a,
    onClose: s
  } = e;
  return r.useEffect(() => {
    u.default.track(E.rMx.OPEN_MODAL, {
      type: "Video Background Feedback"
    })
  }, []), (0, l.jsx)(i.Z, {
    header: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
    body: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
    problemTitle: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
    problems: [{
      value: "BAD_OUTLINE",
      label: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE
    }, {
      value: "BACKGROUND_DETECTION_ACCURACY",
      label: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY
    }, {
      value: "FLICKERING",
      label: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING
    }, {
      value: "BACKGROUND_DETECTION_LAG",
      label: C.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG
    }, {
      value: "OTHER",
      label: C.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
    }],
    feedbackProblems: O,
    onSubmit: function(e) {
      var a, s, r, i;
      let {
        rating: O,
        problem: _,
        dontShowAgain: N,
        feedback: D
      } = e;
      if (N && (0, c.Kw)(d.v.VIDEO_BACKGROUND_FEEDBACK), null != O) a = O, s = _, r = D, i = n, u.default.track(E.rMx.VIDEO_BACKGROUND_FEEDBACK, {
        ...i,
        reason: s,
        rating: a,
        feedback: r
      }), null != _ && (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("14466")]).then(t.bind(t, 729328));
        return n => (0, l.jsx)(e, {
          body: C.Z.Messages.VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
          ...n
        })
      })
    },
    onClose: s,
    transitionState: a,
    otherKey: "OTHER"
  })
}