a.r(n), a.d(n, {
  default: function() {
return b;
  }
});
var t = a(735250),
  l = a(470079),
  s = a(481060),
  r = a(332664),
  o = a(538211),
  i = a(698066),
  c = a(142497),
  u = a(626135),
  _ = a(981631),
  d = a(70722),
  E = a(190378),
  R = a(689938);
let m = [d.kr.OTHER];

function b(e) {
  let {
isStreamer: n,
stream: b,
streamApplication: T,
onClose: S,
transitionState: M,
analyticsData: O
  } = e, f = n ? R.Z.Messages.STREAM_REPORT_RATING_BODY_STREAMER : R.Z.Messages.STREAM_REPORT_RATING_BODY;
  return l.useEffect(() => {
u.default.track(_.rMx.OPEN_MODAL, {
  type: 'Stream Problem Report',
  other_user_id: b.ownerId,
  application_id: null != T ? T.id : null,
  application_name: null != T ? T.name : null,
  game_id: null != T ? T.id : null,
  source: 'Stream End'
});
  }, [
b.ownerId,
T
  ]), (0, t.jsx)(r.Z, {
header: R.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
body: f,
problemTitle: R.Z.Messages.STREAM_REPORT_LABEL,
problems: (0, o.Z)(n, !0),
feedbackProblems: m,
onSubmit: function(e) {
  let {
    rating: n,
    problem: l,
    dontShowAgain: r,
    feedback: o
  } = e;
  if (r && (0, c.Kw)(E.v.REPORT_PROBLEM_POST_STREAM), null != n)
    (0, i.Z)({
      problem: l,
      stream: b,
      feedback: o,
      streamApplication: T,
      analyticsData: O,
      location: 'Stream End',
      rating: n
    }), null != l && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await a.e('14466').then(a.bind(a, 729328));
      return n => (0, t.jsx)(e, {
        body: R.Z.Messages.STREAM_REPORTED_BODY,
        ...n
      });
    });
},
onClose: S,
transitionState: M,
otherKey: d.kr.OTHER
  });
}