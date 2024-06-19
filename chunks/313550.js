t.d(n, {
  Z: function() {
    return o
  }
}), t(47120), t(653041);
var i = t(470079),
  l = t(468988),
  s = t(817460),
  r = t(570533),
  a = t(689938);

function o(e) {
  let {
    includeFlairAsBenefit: n,
    listing: t,
    guildId: o
  } = e, u = 0, c = 0;
  for (let e of t.role_benefits.benefits)(0, s.rC)(e) ? u += 1 : (0, s.lL)(e) && (c += 1);
  let d = t.role_id,
    _ = (0, r.Z)(o).filter(e => e.roles.includes(d)).length;
  return i.useMemo(() => {
    let e = [];
    return !0 === n && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== u && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
      channelCount: u
    })), 0 !== c && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: c
    })), 0 !== _ && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({
      emojiCount: _
    })), new l.Z(e)
  }, [u, c, _, n])
}