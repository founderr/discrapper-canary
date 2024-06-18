"use strict";
n.d(t, {
  C: function() {
    return E
  },
  u: function() {
    return T
  }
}), n(47120);
var i = n(149765),
  r = n(668781),
  s = n(434404),
  o = n(430824),
  a = n(745752),
  l = n(45966),
  u = n(637853),
  _ = n(290511),
  c = n(981631),
  d = n(689938);
async function E(e, t) {
  return null == e || await I(e, t, {
    removingView: !0,
    removingChat: !0
  })
}
async function I(e, t, n) {
  var i;
  let r = o.Z.getGuild(e);
  if (null == r) return !0;
  let s = null != r && (null === (i = r.features) || void 0 === i ? void 0 : i.has(c.oNc.GUILD_ONBOARDING));
  if (!s) return !0;
  s && l.Z.shouldFetchPrompts(e) && await (0, a.eM)(e);
  let d = l.Z.getDefaultChannelIds(e),
    [E, I] = (0, u.d9)(e, d);
  if (!d.includes(t)) return !0;
  let T = n.removingView && I.length - 1 < _.md,
    h = (n.removingChat || n.removingView) && E.length - 1 < _.X;
  return !T && !h
}
async function T(e, t, n) {
  let o = e.getGuildId();
  if (null == o) return !0;
  null != n && (t = i.hX(t, i.U_(n)));
  let a = e.permissionOverwrites[o],
    l = null != a ? i.hX(a.deny, i.U_(a.allow)) : i.vB(0),
    u = {
      removingView: i.e$(t, c.Plq.VIEW_CHANNEL) && !i.e$(l, c.Plq.VIEW_CHANNEL),
      removingChat: !1
    };
  return e.isForumLikeChannel() ? u.removingChat = i.e$(t, c.Plq.SEND_MESSAGES_IN_THREADS) && !i.e$(l, c.Plq.SEND_MESSAGES_IN_THREADS) : u.removingChat = i.e$(t, c.Plq.SEND_MESSAGES) && !i.e$(l, c.Plq.SEND_MESSAGES), !u.removingChat && !u.removingView || !!await I(o, e.id, u) || (r.Z.show({
    title: d.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
    body: d.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
      onClick: () => {
        r.Z.close(), s.Z.open(o, c.pNK.ONBOARDING)
      }
    })
  }), !1)
}