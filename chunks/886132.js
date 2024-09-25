n.d(t, {
    $: function () {
        return i;
    },
    a: function () {
        return c;
    }
});
var r,
    i,
    a = n(231053),
    o = n(689938);
!(function (e) {
    (e.DEFAULT = 'Custom Emoji Popout'), (e.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)'), (e.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)'), (e.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)'), (e.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)'), (e.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)');
})(r || (r = {})),
    !(function (e) {
        (e.GET_PREMIUM = 'GET_PREMIUM'), (e.JOIN_GUILD = 'JOIN_GUILD'), (e.UNAVAILABLE = 'UNAVAILABLE');
    })(i || (i = {}));
let s = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, emojiComesFromCurrentGuild: i, isDiscoverable: a } = e,
            o = 'Custom Emoji Popout';
        return t && !n && a ? (o = 'Custom Emoji Popout (Cross-Server)') : t || !n || r ? !t && !n && (o = a ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : (o = i ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)'), o;
    },
    l = (e) => {
        let { sourceType: t, expressionSourceApplication: n, isPremium: r, hasJoinedEmojiSourceGuild: i, isUnusableRoleSubscriptionEmoji: s, isDiscoverable: l, emojiComesFromCurrentGuild: u, userIsRoleSubscriber: c, isRoleSubscriptionEmoji: d, shouldHideRoleSubscriptionCTA: _, onOpenPremiumSettings: E } = e,
            f = null;
        return (f = t === a.w6.APPLICATION && null != n ? o.Z.Messages.EMOJI_POPOUT_APPLICATION_DESCRIPTION.format({ appName: n.name }) : r ? (i ? (d ? (_ && s ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : s ? (c ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION) : o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION) : u ? o.Z.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION) : l ? o.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION) : i ? (_ && s ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : s ? (c ? o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION) : u ? o.Z.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION) : l ? o.Z.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.Z.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({ openPremiumSettings: E }));
    },
    u = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, isDiscoverable: i } = e,
            a = n && !r,
            s = !n && i,
            l = !t && (a || s);
        return t && s
            ? {
                  type: 'JOIN_GUILD',
                  text: o.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                  description: null
              }
            : l
              ? {
                    type: 'GET_PREMIUM',
                    text: o.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                    description: null
                }
              : {
                    type: 'UNAVAILABLE',
                    text: null,
                    description: null
                };
    },
    c = (e) => {
        let t = l(e),
            n = s(e);
        return {
            ...u(e),
            emojiDescription: t,
            analyticsType: n
        };
    };
