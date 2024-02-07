"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  s = n("152475"),
  r = n("42203"),
  i = n("501030"),
  u = n("730647"),
  d = n("49111");
let o = {
  can_broadcast: !1
};

function c(e, t, n) {
  let [c, E] = l.useState(o), [f, I] = l.useState(!1), h = l.useRef(!1), _ = null == e ? void 0 : e.id, T = null == e ? void 0 : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
  l.useEffect(() => {
    if (!T) {
      E(o);
      return
    }
    if (h.current || null == _) return;
    let e = async () => {
      h.current = !0;
      try {
        let e = await (0, i.getDirectoryEntryBroadcastInfo)(_, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
        E(e)
      } catch (e) {
        E(o)
      }
      h.current = !1
    };
    e()
  }, [_, T, t]), l.useEffect(() => {
    var e;
    if (!c.can_broadcast) {
      I(!1);
      return
    }
    I(null === (e = c.has_broadcast) || void 0 === e || e)
  }, [c]);
  let N = (0, a.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(n, [r.default]));
  return {
    broadcastInfo: c,
    broadcastToDirectoryChannels: N && f,
    setBroadcastToDirectoryChannels: I,
    canEveryoneRoleViewEvent: N
  }
}