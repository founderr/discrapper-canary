n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n(735250),
  a = n(470079),
  l = n(77866),
  r = n(704215),
  o = n(481060),
  i = n(605236),
  u = n(624659),
  c = n(626135),
  E = n(652463),
  d = n(709243),
  _ = n(981631),
  D = n(689938);
let f = [d.U.OTHER];

function T(e) {
  let {
    transitionState: t,
    onClose: T,
    guildId: x
  } = e, m = (0, l.Z)(d.e);
  return a.useEffect(() => {
    c.default.track(_.rMx.OPEN_MODAL, {
      type: "Guild Delete Report"
    })
  }, []), (0, s.jsx)(u.Z, {
    header: D.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,
    body: D.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,
    problems: m,
    feedbackProblems: f,
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: a,
        feedback: l
      } = e;
      a && (0, i.EW)(r.z.GUILD_DELETE_FEEDBACK);
      let u = null == t;
      (0, E.Z)(x, t, l, u), !u && (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("14466")]).then(n.bind(n, 729328));
        return t => (0, s.jsx)(e, {
          body: D.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT,
          ...t
        })
      })
    },
    onClose: T,
    transitionState: t,
    otherKey: d.U.OTHER
  })
}