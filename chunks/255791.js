"use strict";
a.r(t), a("47120");
var n, s, l, i, r = a("442837"),
  o = a("433517"),
  u = a("570140"),
  d = a("650774"),
  c = a("430824"),
  f = a("496675"),
  E = a("981631");
let h = {
  MAX_MEMBER_COUNT: new Set
};
class _ extends(n = r.default.Store) {
  initialize() {
    var e;
    this.waitFor(f.default, c.default, d.default), this.syncWith([f.default, c.default, d.default], E.NOOP), o.Storage.remove(E.ChannelNoticeTypes.MAX_MEMBER_COUNT_100), o.Storage.remove(E.ChannelNoticeTypes.MAX_MEMBER_COUNT_250), e = new Set(o.Storage.get(E.ChannelNoticeTypes.MAX_MEMBER_COUNT)), h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) return !1;
    let a = null !== (t = d.default.getMemberCount(e.id)) && void 0 !== t ? t : 0,
      n = f.default.can(E.Permissions.ADMINISTRATOR, e);
    return !e.hasFeature(E.GuildFeatures.CLAN) && !h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - a <= 1e4
  }
}
i = "MaxMemberCountChannelNoticeStore", (l = "displayName") in(s = _) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new _(u.default, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(t)) return h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT].add(t), o.Storage.set(E.ChannelNoticeTypes.MAX_MEMBER_COUNT, h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT]), !0
  }
})