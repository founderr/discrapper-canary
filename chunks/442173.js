t.r(n), t.d(n, {
  default: function() {
    return h
  }
});
var a = t(735250),
  s = t(470079),
  l = t(481060),
  r = t(375964),
  o = t.n(r),
  i = t(332664),
  c = t(142497),
  u = t(626135),
  d = t(798733),
  E = t(559187),
  f = t(981631),
  _ = t(190378),
  m = t(689938);
let x = [o().CALL_FEEDBACK_OPTION_OTHER];

function h(e) {
  let {
    reportId: n,
    reportType: r,
    ...h
  } = e;
  return s.useEffect(() => {
    u.default.track(f.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
      report_id: n,
      report_type: r
    })
  }, [n, r]), (0, a.jsx)(i.Z, {
    header: m.Z.Messages.IAR_FEEDBACK_TITLE,
    body: m.Z.Messages.IAR_FEEDBACK_PROMPT,
    problemTitle: m.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
    problems: (0, d.Z)(),
    feedbackProblems: x,
    onSubmit: function(e) {
      let {
        rating: s,
        problem: o,
        dontShowAgain: i,
        feedback: u
      } = e;
      if (i && (0, c.Kw)(_.v.IN_APP_REPORTS_FEEDBACK), (0, E.Z)({
          rating: s,
          problem: o,
          feedback: u,
          reportId: n,
          reportType: r,
          dontShowAgain: i
        }), null != s && null != o)(0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("14466")]).then(t.bind(t, 729328));
        return n => (0, a.jsx)(e, {
          body: m.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
          ...n
        })
      })
    },
    otherKey: o().CALL_FEEDBACK_OPTION_OTHER,
    ...h
  })
}