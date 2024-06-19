n(733860);
var l, i = n(31775),
  s = n.n(i),
  a = n(442837),
  r = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
  channelVisits: new(s())({
    max: 1e3
  }),
  bannerRenders: []
};

function u(e, t) {
  return e + t
}
class d extends(l = a.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) Array.isArray(e.bannerRenders) && (c.bannerRenders = e.bannerRenders), null != e.channelVisitsDump && c.channelVisits.load(e.channelVisitsDump)
  }
  getState() {
    return {
      bannerRenders: c.bannerRenders,
      channelVisitsDump: c.channelVisits.dump()
    }
  }
  getNumberOfRenders() {
    var e, t;
    return null !== (t = null === (e = c.bannerRenders) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0
  }
  getNumberOfRendersSince(e) {
    var t;
    return (null !== (t = c.bannerRenders) && void 0 !== t ? t : []).filter(t => t >= Date.now() - 1e3 * e).length
  }
  getNumberOfChannelVisitsSince(e, t, n) {
    var l;
    return (null !== (l = c.channelVisits.get(e + t)) && void 0 !== l ? l : []).filter(e => e >= Date.now() - 1e3 * n).length
  }
}
o(d, "displayName", "UnreadSettingNoticeStore"), o(d, "persistKey", "UnreadSettingNoticeStore"), t.Z = new d(r.Z, {
  UNREAD_SETTING_NOTICE_RENDERED: function() {
    c.bannerRenders.length > 100 && c.bannerRenders.pop(), c.bannerRenders.unshift(Date.now())
  },
  UNREAD_SETTING_NOTICE_CHANNEL_VISIT: function(e) {
    var t;
    let {
      guildId: n,
      channelId: l
    } = e, i = n + l, s = null !== (t = c.channelVisits.get(i)) && void 0 !== t ? t : [];
    s.length > 100 && s.pop(), s.unshift(Date.now()), c.channelVisits.set(i, s)
  }
})