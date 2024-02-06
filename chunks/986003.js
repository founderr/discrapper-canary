"use strict";
a.r(t), a.d(t, {
  hasNotSetUpChannelOptIn: function() {
    return c
  },
  toggleShowAllChannels: function() {
    return f
  },
  optIntoAllChannelsForExistingMember: function() {
    return E
  }
}), a("702976"), a("222007"), a("424973"), a("151426");
var n = a("921031");
a("374363");
var l = a("923959"),
  s = a("26989"),
  u = a("282109"),
  i = a("568734"),
  r = a("629220"),
  d = a("512395"),
  o = a("657944");

function c(e) {
  var t, a;
  let n = (0, d.isOptInEnabledForGuild)(e),
    l = null !== (a = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
    r = (0, i.hasFlag)(l, o.GuildMemberFlags.COMPLETED_ONBOARDING),
    c = u.default.getOptedInChannels(e).size > 0;
  return !n && !r && !c
}

function f(e) {
  if (c(e)) {
    E(e);
    return
  } {
    let t = (0, d.isOptInEnabledForGuild)(e);
    (0, r.setGuildOptIn)(e, !t)
  }
}

function E(e) {
  let {
    include: t = new Set,
    exclude: a = new Set
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = l.default.getChannels(e), u = [...s[0, l.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, l.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isThread() && !a.has(t.id)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t.id
  });
  t.forEach(e => u.push(e)), n.default.onboardExistingMember(e, new Set(u))
}