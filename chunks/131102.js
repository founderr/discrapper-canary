s.r(n), s.d(n, {
  default: function() {
    return C
  }
});
var t = s(735250),
  a = s(470079),
  l = s(77866),
  o = s(704215),
  r = s(481060),
  E = s(605236),
  i = s(624659),
  u = s(626135),
  c = s(263226),
  d = s(225634),
  I = s(981631),
  _ = s(689938);

function C(e) {
  let {
    transitionState: n,
    onClose: C,
    guildId: f,
    guildName: A
  } = e, T = (0, l.Z)(d.S);
  return a.useEffect(() => {
    u.default.track(I.rMx.OPEN_MODAL, {
      type: "Guild Leave Report"
    })
  }, []), (0, t.jsx)(i.Z, {
    header: _.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
    body: _.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
      server: A
    }),
    problems: T,
    onSubmit: function(e) {
      let {
        problem: n,
        dontShowAgain: a,
        feedback: l
      } = e;
      a && (0, E.EW)(o.z.GUILD_LEAVE_FEEDBACK);
      let i = null == n;
      (0, c.Z)(f, n, l, i), !i && (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("14466")]).then(s.bind(s, 729328));
        return n => (0, t.jsx)(e, {
          body: _.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
          ...n
        })
      })
    },
    onClose: C,
    transitionState: n,
    otherKey: d.G.OTHER,
    hasCloseButton: !0
  })
}