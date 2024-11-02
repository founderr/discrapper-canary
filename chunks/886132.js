n.d(t, {
    $: function () {
        return s;
    },
    a: function () {
        return f;
    }
});
var r,
    i,
    a,
    s,
    o = n(231053),
    l = n(388032);
((r = a || (a = {})).DEFAULT = 'Custom Emoji Popout'), (r.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)'), (r.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)'), (r.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)'), (r.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)'), (r.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)'), ((i = s || (s = {})).GET_PREMIUM = 'GET_PREMIUM'), (i.JOIN_GUILD = 'JOIN_GUILD'), (i.UNAVAILABLE = 'UNAVAILABLE');
let u = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, emojiComesFromCurrentGuild: i, isDiscoverable: a } = e,
            s = 'Custom Emoji Popout';
        return t && !n && a ? (s = 'Custom Emoji Popout (Cross-Server)') : t || !n || r ? !t && !n && (s = a ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : (s = i ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)'), s;
    },
    c = (e) => {
        let { sourceType: t, expressionSourceApplication: n, isPremium: r, hasJoinedEmojiSourceGuild: i, isUnusableRoleSubscriptionEmoji: a, isDiscoverable: s, emojiComesFromCurrentGuild: u, userIsRoleSubscriber: c, isRoleSubscriptionEmoji: d, shouldHideRoleSubscriptionCTA: f, onOpenPremiumSettings: _ } = e,
            h = null;
        return (h = t === o.w6.APPLICATION && null != n ? l.intl.formatToPlainString(l.t.uERlTU, { appName: n.name }) : r ? (i ? (d ? (f && a ? l.intl.string(l.t.xFb68v) : a ? (c ? l.intl.string(l.t.vLklfH) : l.intl.string(l.t['g8i/bW'])) : l.intl.string(l.t.Eoynp6)) : u ? l.intl.string(l.t.hU4kIS) : l.intl.string(l.t.GM0xaW)) : s ? l.intl.string(l.t.xE9WGh) : l.intl.string(l.t['0LMpW1'])) : i ? (f && a ? l.intl.string(l.t.xFb68v) : a ? (c ? l.intl.string(l.t.vLklfH) : l.intl.string(l.t['g8i/bW'])) : u ? l.intl.string(l.t.ICPhqa) : l.intl.string(l.t.jQy3aG)) : s ? l.intl.string(l.t.FJ6Z09) : l.intl.format(l.t.U6vLcH, { openPremiumSettings: _ }));
    },
    d = (e) => {
        let { isPremium: t, hasJoinedEmojiSourceGuild: n, isUnusableRoleSubscriptionEmoji: r, isDiscoverable: i } = e,
            a = !n && i;
        return t && a
            ? {
                  type: 'JOIN_GUILD',
                  text: l.intl.string(l.t.riu2R0),
                  description: null
              }
            : !t && ((n && !r) || a)
              ? {
                    type: 'GET_PREMIUM',
                    text: l.intl.string(l.t['gl/XHB']),
                    description: null
                }
              : {
                    type: 'UNAVAILABLE',
                    text: null,
                    description: null
                };
    },
    f = (e) => {
        let t = c(e),
            n = u(e);
        return {
            ...d(e),
            emojiDescription: t,
            analyticsType: n
        };
    };
