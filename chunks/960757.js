"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  s = n("152475"),
  i = n("42203"),
  r = n("501030"),
  u = n("730647"),
  d = n("49111");
let o = {
  can_broadcast: !1
};

function c(e, t, n) {
  let [c, E] = l.useState(o), [f, h] = l.useState(!1), v = l.useRef(!1), _ = null == e ? void 0 : e.id, I = null == e ? void 0 : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
  l.useEffect(() => {
    if (!I) {
      E(o);
      return
    }
    if (v.current || null == _) return;
    let e = async () => {
      v.current = !0;
      try {
        let e = await (0, r.getDirectoryEntryBroadcastInfo)(_, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
        E(e)
      } catch (e) {
        E(o)
      }
      v.current = !1
    };
    e()
  }, [_, I, t]), l.useEffect(() => {
    var e;
    if (!c.can_broadcast) {
      h(!1);
      return
    }
    h(null === (e = c.has_broadcast) || void 0 === e || e)
  }, [c]);
  let m = (0, a.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(n, [i.default]));
  return {
    broadcastInfo: c,
    broadcastToDirectoryChannels: m && f,
    setBroadcastToDirectoryChannels: h,
    canEveryoneRoleViewEvent: m
  }
}