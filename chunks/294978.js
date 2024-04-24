"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var n = a("735250");
a("470079");
var i = a("392711"),
  l = a.n(i),
  s = a("442837"),
  r = a("481060"),
  o = a("344185"),
  d = a("665906"),
  u = a("974029"),
  c = a("689938");

function S(e) {
  let t = (0, d.useIsThreadModerator)(e),
    i = (0, s.useStateFromStores)([o.default], () => !l().isEmpty(o.default.getThreadsForGuild(e.id)));
  return t && i ? (0, n.jsx)(r.MenuItem, {
    id: "active-threads",
    label: c.default.Messages.ACTIVE_THREADS,
    icon: u.default,
    action: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("22482")]).then(a.bind(a, "157743"));
        return a => (0, n.jsx)(t, {
          guildId: e.id,
          ...a
        })
      })
    }
  }) : null
}