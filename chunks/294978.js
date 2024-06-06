"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("735250");
a("470079");
var n = a("392711"),
  i = a.n(n),
  s = a("442837"),
  d = a("481060"),
  u = a("344185"),
  r = a("665906"),
  o = a("974029"),
  c = a("689938");

function f(e) {
  let t = (0, r.useIsThreadModerator)(e),
    n = (0, s.useStateFromStores)([u.default], () => !i().isEmpty(u.default.getThreadsForGuild(e.id)));
  return t && n ? (0, l.jsx)(d.MenuItem, {
    id: "active-threads",
    label: c.default.Messages.ACTIVE_THREADS,
    icon: o.default,
    action: () => {
      (0, d.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("22482")]).then(a.bind(a, "157743"));
        return a => (0, l.jsx)(t, {
          guildId: e.id,
          ...a
        })
      })
    }
  }) : null
}