n.d(t, {
  Z: function() {
    return p
  }
}), n(653041);
var l = n(399606),
  i = n(897345),
  s = n(697379),
  r = n(241559),
  a = n(563534),
  o = n(931261),
  u = n(460347),
  c = n(994592),
  d = n(265418),
  h = n(443063),
  g = n(981631);

function p(e) {
  let t = (0, d.Z)(e.id),
    n = (0, s.W)(e.id),
    p = (0, c.j0)(e.id),
    m = (0, i.u)(e),
    C = (0, o.g)(e.id),
    E = (0, l.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
    f = (0, u.Z)(e.id),
    _ = (0, r.n2)(e.id),
    I = [],
    N = e.hasFeature(g.oNc.HUB),
    Z = e.hasFeature(g.oNc.COMMUNITY),
    S = e.hasFeature(g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  return N && I.push(h.f.GUILD_HUB_HEADER_OPTIONS), C && f && null != E && E.length > 0 ? I.push(h.f.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && I.push(h.f.GUILD_PREMIUM_PROGRESS_BAR), !N && C && I.push(h.f.GUILD_HOME), t && I.push(h.f.GUILD_SCHEDULED_EVENTS), !N && Z && I.push(h.f.CHANNELS_AND_ROLES), p && I.push(h.f.GUILD_ROLE_SUBSCRIPTIONS), m && I.push(h.f.GUILD_SHOP), n && I.push(h.f.GUILD_MEMBER_APPLICATIONS), _ && (Z || S) && I.push(h.f.GUILD_MOD_DASH_MEMBER_SAFETY), I
}