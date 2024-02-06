"use strict";
n.r(t), n.d(t, {
  EmojiPopoutType: function() {
    return i
  },
  getEmojiPopoutData: function() {
    return c
  }
});
var l, a, s, i, r = n("782340");
(l = s || (s = {})).DEFAULT = "Custom Emoji Popout", l.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", l.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", l.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", l.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", l.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (a = i || (i = {})).GET_PREMIUM = "GET_PREMIUM", a.JOIN_GUILD = "JOIN_GUILD", a.UNAVAILABLE = "UNAVAILABLE";
let o = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: l,
      emojiComesFromCurrentGuild: a,
      isDiscoverable: s
    } = e, i = "Custom Emoji Popout";
    return t && !n && s ? i = "Custom Emoji Popout (Cross-Server)" : t || !n || l ? !t && !n && (i = s ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : i = a ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", i
  },
  u = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: l,
      isDiscoverable: a,
      emojiComesFromCurrentGuild: s,
      userIsRoleSubscriber: i,
      isRoleSubscriptionEmoji: o,
      shouldHideRoleSubscriptionCTA: u,
      onOpenPremiumSettings: d
    } = e, c = null;
    return c = t ? n ? o ? u && l ? r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? i ? r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : s ? r.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : r.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : a ? r.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : r.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? u && l ? r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? i ? r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : r.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : s ? r.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : r.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : a ? r.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : r.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: d
    })
  },
  d = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: l,
      isDiscoverable: a
    } = e, s = !n && a;
    return t && s ? {
      type: "JOIN_GUILD",
      text: r.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
      description: null
    } : !t && (n && !l || s) ? {
      type: "GET_PREMIUM",
      text: r.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
      description: null
    } : {
      type: "UNAVAILABLE",
      text: null,
      description: null
    }
  },
  c = e => {
    let t = u(e),
      n = o(e),
      l = d(e);
    return {
      ...l,
      emojiDescription: t,
      analyticsType: n
    }
  }