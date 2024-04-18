"use strict";
a.r(t), a.d(t, {
  hideEnablePublicGuildUpsellNotice: function() {
    return l
  },
  hideMaxMemberCountChannelNotice: function() {
    return i
  },
  hidePremiumGuildGracePeriodNotice: function() {
    return s
  }
});
var n = a("570140");

function s(e) {
  n.default.dispatch({
    type: "BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS",
    guildId: e
  })
}

function l(e) {
  n.default.dispatch({
    type: "PUBLIC_UPSELL_NOTICE_DISMISS",
    guildId: e
  })
}

function i(e) {
  n.default.dispatch({
    type: "MAX_MEMBER_COUNT_NOTICE_DISMISS",
    guildId: e
  })
}