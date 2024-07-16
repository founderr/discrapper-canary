n.d(t, {
  $: function() {
return s;
  },
  a: function() {
return d;
  }
});
var r, i, a, s, o = n(689938);
(r = a || (a = {})).DEFAULT = 'Custom Emoji Popout', r.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)', r.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)', r.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)', r.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)', r.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)', (i = s || (s = {})).GET_PREMIUM = 'GET_PREMIUM', i.JOIN_GUILD = 'JOIN_GUILD', i.UNAVAILABLE = 'UNAVAILABLE';
let l = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  emojiComesFromCurrentGuild: i,
  isDiscoverable: a
} = e, s = 'Custom Emoji Popout';
return t && !n && a ? s = 'Custom Emoji Popout (Cross-Server)' : t || !n || r ? !t && !n && (s = a ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : s = i ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)', s;
  },
  u = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  isDiscoverable: i,
  emojiComesFromCurrentGuild: a,
  userIsRoleSubscriber: s,
  isRoleSubscriptionEmoji: l,
  shouldHideRoleSubscriptionCTA: u,
  onOpenPremiumSettings: c
} = e, d = null;
return d = t ? n ? l ? u && r ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? s ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : a ? o.Z.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : i ? o.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? u && r ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : r ? s ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a ? o.Z.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : i ? o.Z.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
  openPremiumSettings: c
});
  },
  c = e => {
let {
  isPremium: t,
  hasJoinedEmojiSourceGuild: n,
  isUnusableRoleSubscriptionEmoji: r,
  isDiscoverable: i
} = e, a = !n && i;
return t && a ? {
  type: 'JOIN_GUILD',
  text: o.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
  description: null
} : !t && (n && !r || a) ? {
  type: 'GET_PREMIUM',
  text: o.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
  description: null
} : {
  type: 'UNAVAILABLE',
  text: null,
  description: null
};
  },
  d = e => {
let t = u(e),
  n = l(e);
return {
  ...c(e),
  emojiDescription: t,
  analyticsType: n
};
  };