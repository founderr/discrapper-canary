"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120"), s("653041");
var n = s("470079"),
  i = s("468988"),
  l = s("817460"),
  a = s("570533"),
  r = s("689938");

function u(e) {
  let {
    includeFlairAsBenefit: t,
    listing: s,
    guildId: u
  } = e, o = 0, d = 0;
  for (let e of s.role_benefits.benefits)(0, l.isChannelBenefit)(e) ? o += 1 : (0, l.isIntangibleBenefit)(e) && (d += 1);
  let c = s.role_id,
    f = (0, a.default)(u).filter(e => e.roles.includes(c)).length;
  return n.useMemo(() => {
    let e = [];
    return !0 === t && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== o && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
      channelCount: o
    })), 0 !== d && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: d
    })), 0 !== f && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({
      emojiCount: f
    })), new i.default(e)
  }, [o, d, f, t])
}