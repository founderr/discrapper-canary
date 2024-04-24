"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var l = a("392711"),
  i = a.n(l),
  s = a("442837"),
  r = a("481060"),
  o = a("344185"),
  d = a("665906"),
  u = a("974029"),
  c = a("689938");

function f(e) {
  let t = (0, d.useIsThreadModerator)(e),
    l = (0, s.useStateFromStores)([o.default], () => !i().isEmpty(o.default.getThreadsForGuild(e.id)));
  return t && l ? (0, n.jsx)(r.MenuItem, {
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