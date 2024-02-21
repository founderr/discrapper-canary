"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("70025"),
  u = n("334683"),
  i = n("842672"),
  r = n("782340");

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    d = (0, u.default)(e),
    o = (0, i.default)();
  return d ? (0, a.jsx)(l.MenuItem, {
    id: "create-event",
    label: r.default.Messages.SCHEDULE_EVENT,
    icon: t ? s.default : void 0,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("590942").then(n.bind(n, "590942"));
        return n => (0, a.jsx)(t, {
          ...n,
          guildId: e
        })
      }, o)
    }
  }) : null
}