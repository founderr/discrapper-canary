"use strict";
n.r(t), n.d(t, {
  useCanSeeOnboardingHome: function() {
    return p
  },
  canSeeOnboardingHome: function() {
    return v
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("65597"),
  a = n("380710"),
  o = n("38654"),
  l = n("42203"),
  u = n("26989"),
  d = n("305961"),
  c = n("698882"),
  f = n("233706"),
  _ = n("6263"),
  h = n("363176"),
  g = n("49111"),
  m = n("724210");

function E(e) {
  var t;
  let n = e.id,
    {
      homeSettingsEnabled: i
    } = f.default.getCurrentConfig({
      guildId: n,
      location: "61eef9_1"
    }, {
      autoTrackExposure: !1
    }),
    s = (null !== (t = c.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
    r = c.default.getEnabled(n);
  return i && s && e.hasFeature(g.GuildFeatures.COMMUNITY) && !(e.hasFeature(g.GuildFeatures.GUILD_ONBOARDING) && !r)
}

function p(e) {
  let t = (0, r.default)([d.default], () => d.default.getGuild(e)),
    n = (0, r.default)([u.default], () => u.default.getSelfMember(e)),
    {
      showOnboardingHome: i
    } = (0, _.useOnboardingHomeExperiment)(t, n),
    {
      homeSettingsEnabled: c
    } = f.default.useExperiment({
      guildId: e,
      location: "61eef9_2"
    }, {
      autoTrackExposure: !1
    }),
    p = (0, r.default)([o.default], () => o.default.isFullServerPreview(e)),
    v = (0, h.default)(e),
    S = (0, r.default)([l.default], () => l.default.getMutableGuildChannelsForGuild(e));
  if (null == t || __OVERLAY__ || e === g.ME || e === g.FAVORITES) return !1;
  if (p) return E(t);
  let T = c && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(g.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(g.GuildFeatures.GUILD_SERVER_GUIDE),
    I = s.some(s.values(S), e => e.hasFlag(m.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
  return !(!v && !I) && (i && t.hasFeature(g.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(g.GuildFeatures.GUILD_SERVER_GUIDE) || T) && t.hasFeature(g.GuildFeatures.COMMUNITY)
}

function v(e) {
  let t = d.default.getGuild(e),
    {
      showOnboardingHome: n
    } = _.default.getCurrentConfig({
      location: "61eef9_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      homeSettingsEnabled: i
    } = f.default.getCurrentConfig({
      guildId: e,
      location: "61eef9_4"
    }),
    s = o.default.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === g.ME || e === g.FAVORITES) return !1;
  if (s) return E(t);
  let r = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(g.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(g.GuildFeatures.GUILD_SERVER_GUIDE);
  return (n && t.hasFeature(g.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(g.GuildFeatures.GUILD_SERVER_GUIDE) || r) && t.hasFeature(g.GuildFeatures.COMMUNITY)
}