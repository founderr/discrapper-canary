n.r(a), n.d(a, {
  default: function() {
    return E
  }
});
var t = n(735250),
  l = n(470079),
  s = n(481060),
  i = n(332664),
  o = n(142497),
  r = n(626135),
  c = n(672655),
  u = n(768015),
  d = n(701488),
  T = n(981631),
  _ = n(190378),
  I = n(689938);
let A = [d.K8.OTHER, d.K8.ADS, d.K8.NOT_FUN];

function E(e) {
  var a;
  let {
    channel: E,
    activityApplication: C,
    onClose: m,
    transitionState: f,
    analyticsData: N
  } = e;
  l.useEffect(() => {
    r.default.track(T.rMx.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: C.id,
      application_name: C.name,
      game_id: C.id,
      source: "Activity End"
    })
  }, [C]);
  let R = (null === (a = C.embeddedActivityConfig) || void 0 === a ? void 0 : a.displays_advertisements) === !0;
  return (0, t.jsx)(i.Z, {
    header: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
      applicationName: C.name
    }),
    body: I.Z.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
    problemTitle: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
    problems: (0, c.Z)(!0, R),
    feedbackProblems: A,
    onSubmit: function(e) {
      let {
        rating: a,
        problem: l,
        dontShowAgain: i,
        feedback: c
      } = e;
      if (i && ! function(e) {
          let {
            applicationId: a,
            rating: n
          } = e;
          r.default.track(T.rMx.ACTIVITY_REPORT_DONT_SHOW, {
            application_id: a,
            rating: n
          }), (0, o.Kw)(_.v.POST_ACTIVITY_FEEDBACK)
        }({
          rating: a,
          applicationId: C.id
        }), null != a)(0, u.Z)({
        problem: l,
        channel: E,
        feedback: c,
        activityApplication: C,
        analyticsData: N,
        location: "Activity End",
        rating: a
      }), null != l && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("14466")]).then(n.bind(n, 729328));
        return a => (0, t.jsx)(e, {
          body: I.Z.Messages.ACTIVITY_REPORTED_BODY,
          ...a
        })
      })
    },
    onClose: m,
    transitionState: f,
    otherKey: d.K8.OTHER
  })
}