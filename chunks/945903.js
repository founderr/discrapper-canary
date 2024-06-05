"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var l = s("735250"),
  a = s("470079"),
  n = s("207561"),
  u = s("704215"),
  r = s("481060"),
  o = s("605236"),
  i = s("624659"),
  d = s("626135"),
  c = s("652463"),
  E = s("709243"),
  f = s("981631"),
  D = s("689938");
let _ = [E.GuildDeleteReasons.OTHER];

function m(e) {
  let {
    transitionState: t,
    onClose: m,
    guildId: T
  } = e, C = (0, n.useLazyValue)(E.getGuildDeleteReasons);
  return a.useEffect(() => {
    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Guild Delete Report"
    })
  }, []), (0, l.jsx)(i.default, {
    header: D.default.Messages.GUILD_DELETE_FEEDBACK_HEADER,
    body: D.default.Messages.GUILD_DELETE_FEEDBACK_BODY,
    problems: C,
    feedbackProblems: _,
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: a,
        feedback: n
      } = e;
      a && (0, o.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_DELETE_FEEDBACK);
      let i = null == t;
      (0, c.default)(T, t, n, i), !i && (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("14466")]).then(s.bind(s, "729328"));
        return t => (0, l.jsx)(e, {
          body: D.default.Messages.GUILD_DELETE_FEEDBACK_REPORT,
          ...t
        })
      })
    },
    onClose: m,
    transitionState: t,
    otherKey: E.GuildDeleteReasons.OTHER
  })
}