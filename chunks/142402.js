a.r(n), a.d(n, {
  default: function() {
    return M
  }
});
var s = a(735250),
  l = a(470079),
  t = a(481060),
  r = a(332664),
  i = a(538211),
  o = a(698066),
  c = a(142497),
  u = a(626135),
  d = a(981631),
  E = a(70722),
  R = a(190378),
  _ = a(689938);
let T = [E.kr.OTHER];

function M(e) {
  let {
    isStreamer: n,
    stream: M,
    streamApplication: O,
    onClose: m,
    transitionState: S,
    analyticsData: A
  } = e, f = n ? _.Z.Messages.STREAM_REPORT_RATING_BODY_STREAMER : _.Z.Messages.STREAM_REPORT_RATING_BODY;
  return l.useEffect(() => {
    u.default.track(d.rMx.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: M.ownerId,
      application_id: null != O ? O.id : null,
      application_name: null != O ? O.name : null,
      game_id: null != O ? O.id : null,
      source: "Stream End"
    })
  }, [M.ownerId, O]), (0, s.jsx)(r.Z, {
    header: _.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
    body: f,
    problemTitle: _.Z.Messages.STREAM_REPORT_LABEL,
    problems: (0, i.Z)(n, !0),
    feedbackProblems: T,
    onSubmit: function(e) {
      let {
        rating: n,
        problem: l,
        dontShowAgain: r,
        feedback: i
      } = e;
      if (r && (0, c.Kw)(R.v.REPORT_PROBLEM_POST_STREAM), null != n)(0, o.Z)({
        problem: l,
        stream: M,
        feedback: i,
        streamApplication: O,
        analyticsData: A,
        location: "Stream End",
        rating: n
      }), null != l && (0, t.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, 729328));
        return n => (0, s.jsx)(e, {
          body: _.Z.Messages.STREAM_REPORTED_BODY,
          ...n
        })
      })
    },
    onClose: m,
    transitionState: S,
    otherKey: E.kr.OTHER
  })
}