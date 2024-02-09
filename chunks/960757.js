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
  o = n("49111");
let d = {
  can_broadcast: !1
};

function c(e, t, n) {
  let [c, f] = l.useState(d), [E, h] = l.useState(!1), v = l.useRef(!1), I = null == e ? void 0 : e.id, _ = null == e ? void 0 : e.hasFeature(o.GuildFeatures.HAS_DIRECTORY_ENTRY);
  l.useEffect(() => {
    if (!_) {
      f(d);
      return
    }
    if (v.current || null == I) return;
    let e = async () => {
      v.current = !0;
      try {
        let e = await (0, r.getDirectoryEntryBroadcastInfo)(I, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
        f(e)
      } catch (e) {
        f(d)
      }
      v.current = !1
    };
    e()
  }, [I, _, t]), l.useEffect(() => {
    var e;
    if (!c.can_broadcast) {
      h(!1);
      return
    }
    h(null === (e = c.has_broadcast) || void 0 === e || e)
  }, [c]);
  let C = (0, a.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(n, [i.default]));
  return {
    broadcastInfo: c,
    broadcastToDirectoryChannels: C && E,
    setBroadcastToDirectoryChannels: h,
    canEveryoneRoleViewEvent: C
  }
}