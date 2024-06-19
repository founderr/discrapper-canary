n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n(735250);
n(470079);
var o = n(481060),
  s = n(375964),
  l = n.n(s),
  i = n(332664),
  u = n(142497),
  r = n(774378),
  c = n(445102),
  d = n(190378),
  _ = n(689938);
let E = [l().CALL_FEEDBACK_OPTION_OTHER];

function O(e) {
  let {
    onClose: t,
    transitionState: s,
    analyticsData: O
  } = e;
  return (0, a.jsx)(i.Z, {
    header: _.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
    body: _.Z.Messages.CALL_FEEDBACK_PROMPT,
    problemTitle: _.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
    problems: (0, r.Z)(!1),
    feedbackProblems: E,
    onSubmit: function(e) {
      var t, s, l;
      let {
        rating: i,
        problem: E,
        dontShowAgain: C,
        feedback: A
      } = e;
      if (C && (0, u.Kw)(d.v.VOICE_CALL_FEEDBACK), null != i)(0, c.Z)(i, (t = E, null !== (l = null === (s = (0, r.Z)(!1).find(e => e.label === t)) || void 0 === s ? void 0 : s.code) && void 0 !== l ? l : null), E, A, O), null != E && (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("14466")]).then(n.bind(n, 729328));
        return t => (0, a.jsx)(e, {
          body: _.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
          ...t
        })
      })
    },
    onClose: t,
    transitionState: s,
    otherKey: l().CALL_FEEDBACK_OPTION_OTHER
  })
}