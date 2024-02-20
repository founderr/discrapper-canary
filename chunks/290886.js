"use strict";
n.r(t), n.d(t, {
  useCanSeeOnboardingHome: function() {
    return S
  },
  canSeeOnboardingHome: function() {
    return g
  }
}), n("222007");
var i = n("917351"),
  r = n.n(i),
  s = n("65597"),
  a = n("380710"),
  o = n("38654"),
  l = n("42203"),
  u = n("26989"),
  c = n("305961"),
  d = n("698882"),
  p = n("233706"),
  h = n("6263"),
  f = n("363176"),
  E = n("49111"),
  _ = n("724210");

function m(e) {
  var t;
  let n = e.id,
    {
      homeSettingsEnabled: i
    } = p.default.getCurrentConfig({
      guildId: n,
      location: "61eef9_1"
    }, {
      autoTrackExposure: !1
    }),
    r = (null !== (t = d.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
    s = d.default.getEnabled(n);
  return i && r && e.hasFeature(E.GuildFeatures.COMMUNITY) && !(e.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && !s)
}

function S(e) {
  let t = (0, s.default)([c.default], () => c.default.getGuild(e)),
    n = (0, s.default)([u.default], () => u.default.getSelfMember(e)),
    {
      showOnboardingHome: i
    } = (0, h.useOnboardingHomeExperiment)(t, n),
    {
      homeSettingsEnabled: d
    } = p.default.useExperiment({
      guildId: e,
      location: "61eef9_2"
    }, {
      autoTrackExposure: !1
    }),
    S = (0, s.default)([o.default], () => o.default.isFullServerPreview(e)),
    g = (0, f.default)(e),
    T = (0, s.default)([l.default], () => l.default.getMutableGuildChannelsForGuild(e));
  if (null == t || __OVERLAY__ || e === E.ME || e === E.FAVORITES) return !1;
  if (S) return m(t);
  let I = d && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE),
    v = r.some(r.values(T), e => e.hasFlag(_.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
  return !(!g && !v) && (i && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE) || I) && t.hasFeature(E.GuildFeatures.COMMUNITY)
}

function g(e) {
  let t = c.default.getGuild(e),
    {
      showOnboardingHome: n
    } = h.default.getCurrentConfig({
      location: "61eef9_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      homeSettingsEnabled: i
    } = p.default.getCurrentConfig({
      guildId: e,
      location: "61eef9_4"
    }),
    r = o.default.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === E.ME || e === E.FAVORITES) return !1;
  if (r) return m(t);
  let s = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE);
  return (n && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE) || s) && t.hasFeature(E.GuildFeatures.COMMUNITY)
}