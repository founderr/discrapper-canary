n(47120);
var i, s, l, a, r = n(442837),
  o = n(433517),
  c = n(570140),
  u = n(650774),
  d = n(430824),
  E = n(496675),
  h = n(981631);
let _ = {
  MAX_MEMBER_COUNT: new Set
};
class I extends(i = r.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(E.Z, d.Z, u.Z), this.syncWith([E.Z, d.Z, u.Z], h.dG4), o.K.remove(h.vID.MAX_MEMBER_COUNT_100), o.K.remove(h.vID.MAX_MEMBER_COUNT_250), e = new Set(o.K.get(h.vID.MAX_MEMBER_COUNT)), _[h.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) return !1;
    let n = null !== (t = u.Z.getMemberCount(e.id)) && void 0 !== t ? t : 0,
      i = E.Z.can(h.Plq.ADMINISTRATOR, e);
    return !e.hasFeature(h.oNc.CLAN) && !_[h.vID.MAX_MEMBER_COUNT].has(e.id) && i && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}
a = "MaxMemberCountChannelNoticeStore", (l = "displayName") in(s = I) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.Z = new I(c.Z, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!_[h.vID.MAX_MEMBER_COUNT].has(t)) return _[h.vID.MAX_MEMBER_COUNT].add(t), o.K.set(h.vID.MAX_MEMBER_COUNT, _[h.vID.MAX_MEMBER_COUNT]), !0
  }
})