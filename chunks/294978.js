"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("392711"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("344185"),
  d = n("665906"),
  u = n("974029"),
  c = n("689938");

function f(e) {
  let t = (0, d.useIsThreadModerator)(e),
    l = (0, i.useStateFromStores)([o.default], () => !s().isEmpty(o.default.getThreadsForGuild(e.id)));
  return t && l ? (0, a.jsx)(r.MenuItem, {
    id: "active-threads",
    label: c.default.Messages.ACTIVE_THREADS,
    icon: u.default,
    action: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("22482")]).then(n.bind(n, "157743"));
        return n => (0, a.jsx)(t, {
          guildId: e.id,
          ...n
        })
      })
    }
  }) : null
}