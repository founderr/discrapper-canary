"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120"), n("653041");
var i = n("470079"),
  a = n("468988"),
  s = n("817460"),
  l = n("570533"),
  r = n("689938");

function u(e) {
  let {
    includeFlairAsBenefit: t,
    listing: n,
    guildId: u
  } = e, o = 0, d = 0;
  for (let e of n.role_benefits.benefits)(0, s.isChannelBenefit)(e) ? o += 1 : (0, s.isIntangibleBenefit)(e) && (d += 1);
  let c = n.role_id,
    f = (0, l.default)(u).filter(e => e.roles.includes(c)).length;
  return i.useMemo(() => {
    let e = [];
    return !0 === t && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== o && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
      channelCount: o
    })), 0 !== d && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: d
    })), 0 !== f && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({
      emojiCount: f
    })), new a.default(e)
  }, [o, d, f, t])
}