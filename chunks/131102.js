n.r(t), n.d(t, {
  default: function() {
return I;
  }
});
var s = n(735250),
  o = n(470079),
  a = n(77866),
  l = n(704215),
  r = n(481060),
  i = n(605236),
  E = n(624659),
  u = n(626135),
  c = n(263226),
  d = n(225634),
  _ = n(981631),
  b = n(689938);

function I(e) {
  let {
transitionState: t,
onClose: I,
guildId: C,
guildName: f
  } = e, m = (0, a.Z)(d.S);
  return o.useEffect(() => {
u.default.track(_.rMx.OPEN_MODAL, {
  type: 'Guild Leave Report'
});
  }, []), (0, s.jsx)(E.Z, {
header: b.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
  server: f
}),
problems: m,
onSubmit: function(e) {
  let {
    problem: t,
    dontShowAgain: o,
    feedback: a
  } = e;
  o && (0, i.EW)(l.z.GUILD_LEAVE_FEEDBACK);
  let E = null == t;
  (0, c.Z)(C, t, a, E), !E && (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('14466').then(n.bind(n, 729328));
    return t => (0, s.jsx)(e, {
      body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
      ...t
    });
  });
},
onClose: I,
transitionState: t,
otherKey: d.G.OTHER,
hasCloseButton: !0
  });
}