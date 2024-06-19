n(47120);
var i, s, l, a, r = n(442837),
  o = n(570140),
  c = n(810788),
  u = n(430824),
  d = n(981631);
let E = !1;

function h(e) {
  let t = u.Z.getGuild(e);
  return !!(null != t && t.hasFeature(d.oNc.HUB)) && (E = !0, !0)
}

function _() {
  return !0
}
class I extends(i = r.ZP.Store) {
  initialize() {
    this.waitFor(u.Z, c.Z), this.syncWith([c.Z], _)
  }
  channelNoticePredicate(e) {
    return !!e.hasFeature(d.oNc.LINKED_TO_HUB) && !E && !0
  }
}
a = "HubLinkNoticeStore", (l = "displayName") in(s = I) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.Z = new I(o.Z, {
  CONNECTION_OPEN: function(e) {
    for (let t of e.guilds)
      if (h(t.id)) return !0;
    return !1
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return h(t.id)
  }
})