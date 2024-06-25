n.d(t, {
  Z: function() {
    return f
  }
}), n(653041);
var i = n(399606),
  l = n(897345),
  r = n(697379),
  a = n(241559),
  s = n(563534),
  o = n(931261),
  c = n(460347),
  u = n(994592),
  d = n(265418),
  h = n(443063),
  p = n(981631);

function f(e) {
  let t = (0, d.Z)(e.id),
    n = (0, r.W)(e.id),
    f = (0, u.j0)(e.id),
    _ = (0, l.u)(e),
    g = (0, o.g)(e.id),
    m = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
    C = (0, c.Z)(e.id),
    I = (0, a.n2)(e.id),
    E = [],
    N = e.hasFeature(p.oNc.HUB),
    x = e.hasFeature(p.oNc.COMMUNITY),
    S = e.hasFeature(p.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  return N && E.push(h.f.GUILD_HUB_HEADER_OPTIONS), g && C && null != m && m.length > 0 ? E.push(h.f.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && E.push(h.f.GUILD_PREMIUM_PROGRESS_BAR), !N && g && E.push(h.f.GUILD_HOME), t && E.push(h.f.GUILD_SCHEDULED_EVENTS), !N && x && E.push(h.f.CHANNELS_AND_ROLES), f && E.push(h.f.GUILD_ROLE_SUBSCRIPTIONS), _ && E.push(h.f.GUILD_SHOP), n && E.push(h.f.GUILD_MEMBER_APPLICATIONS), I && (x || S) && E.push(h.f.GUILD_MOD_DASH_MEMBER_SAFETY), E
}