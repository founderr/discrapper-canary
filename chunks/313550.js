"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120"), n("653041");
var s = n("470079"),
  a = n("468988"),
  i = n("817460"),
  l = n("570533"),
  r = n("689938");

function u(e) {
  let {
    includeFlairAsBenefit: t,
    listing: n,
    guildId: u
  } = e, o = 0, d = 0;
  for (let e of n.role_benefits.benefits)(0, i.isChannelBenefit)(e) ? o += 1 : (0, i.isIntangibleBenefit)(e) && (d += 1);
  let c = n.role_id,
    E = (0, l.default)(u).filter(e => e.roles.includes(c)).length;
  return s.useMemo(() => {
    let e = [];
    return !0 === t && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== o && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
      channelCount: o
    })), 0 !== d && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: d
    })), 0 !== E && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({
      emojiCount: E
    })), new a.default(e)
  }, [o, d, E, t])
}