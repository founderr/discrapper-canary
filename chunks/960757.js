"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  a = n("446674"),
  i = n("152475"),
  s = n("42203"),
  r = n("501030"),
  u = n("730647"),
  d = n("49111");
let o = {
  can_broadcast: !1
};

function c(e, t, n) {
  let [c, f] = l.useState(o), [E, I] = l.useState(!1), _ = l.useRef(!1), h = null == e ? void 0 : e.id, T = null == e ? void 0 : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
  l.useEffect(() => {
    if (!T) {
      f(o);
      return
    }
    if (_.current || null == h) return;
    let e = async () => {
      _.current = !0;
      try {
        let e = await (0, r.getDirectoryEntryBroadcastInfo)(h, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
        f(e)
      } catch (e) {
        f(o)
      }
      _.current = !1
    };
    e()
  }, [h, T, t]), l.useEffect(() => {
    var e;
    if (!c.can_broadcast) {
      I(!1);
      return
    }
    I(null === (e = c.has_broadcast) || void 0 === e || e)
  }, [c]);
  let v = (0, a.useStateFromStores)([s.default], () => (0, i.canEveryoneRoleViewEvent)(n, [s.default]));
  return {
    broadcastInfo: c,
    broadcastToDirectoryChannels: v && E,
    setBroadcastToDirectoryChannels: I,
    canEveryoneRoleViewEvent: v
  }
}