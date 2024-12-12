r.d(n, {
    $: function () {
        return a;
    },
    a: function () {
        return d;
    }
});
var i,
    a,
    s = r(231053),
    o = r(388032);
!(function (e) {
    (e.DEFAULT = 'Custom Emoji Popout'), (e.CROSS_SERVER = 'Custom Emoji Popout (Cross-Server)'), (e.UPSELL_CURRENT_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Current-Server)'), (e.UPSELL_CROSS_SERVER_JOINED = 'Custom Emoji Popout (Upsell Joined Cross-Server)'), (e.UPSELL_CROSS_SERVER_JOINABLE = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)'), (e.UPSELL_CROSS_SERVER_UNJOINABLE = 'Custom Emoji Popout (Soft Upsell)');
})(i || (i = {})),
    !(function (e) {
        (e.GET_PREMIUM = 'GET_PREMIUM'), (e.JOIN_GUILD = 'JOIN_GUILD'), (e.UNAVAILABLE = 'UNAVAILABLE');
    })(a || (a = {}));
let l = (e) => {
        let { isPremium: n, hasJoinedEmojiSourceGuild: r, isUnusableRoleSubscriptionEmoji: i, emojiComesFromCurrentGuild: a, isDiscoverable: s } = e,
            o = 'Custom Emoji Popout';
        return n && !r && s ? (o = 'Custom Emoji Popout (Cross-Server)') : n || !r || i ? !n && !r && (o = s ? 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)' : 'Custom Emoji Popout (Soft Upsell)') : (o = a ? 'Custom Emoji Popout (Upsell Joined Current-Server)' : 'Custom Emoji Popout (Upsell Joined Cross-Server)'), o;
    },
    u = (e) => {
        let { sourceType: n, expressionSourceApplication: r, isPremium: i, hasJoinedEmojiSourceGuild: a, isUnusableRoleSubscriptionEmoji: l, isDiscoverable: u, emojiComesFromCurrentGuild: c, userIsRoleSubscriber: d, isRoleSubscriptionEmoji: f, shouldHideRoleSubscriptionCTA: _, onOpenPremiumSettings: h } = e,
            p = null;
        return (p = n === s.w6.APPLICATION && null != r ? o.intl.formatToPlainString(o.t.uERlTU, { appName: r.name }) : i ? (a ? (f ? (_ && l ? o.intl.string(o.t.xFb68v) : l ? (d ? o.intl.string(o.t.vLklfH) : o.intl.string(o.t['g8i/bW'])) : o.intl.string(o.t.Eoynp6)) : c ? o.intl.string(o.t.hU4kIS) : o.intl.string(o.t.GM0xaW)) : u ? o.intl.string(o.t.xE9WGh) : o.intl.string(o.t['0LMpW1'])) : a ? (_ && l ? o.intl.string(o.t.xFb68v) : l ? (d ? o.intl.string(o.t.vLklfH) : o.intl.string(o.t['g8i/bW'])) : c ? o.intl.string(o.t.ICPhqa) : o.intl.string(o.t.jQy3aG)) : u ? o.intl.string(o.t.FJ6Z09) : o.intl.format(o.t.U6vLcH, { openPremiumSettings: h }));
    },
    c = (e) => {
        let { isPremium: n, hasJoinedEmojiSourceGuild: r, isUnusableRoleSubscriptionEmoji: i, isDiscoverable: a } = e,
            s = r && !i,
            l = !r && a,
            u = !n && (s || l);
        return n && l
            ? {
                  type: 'JOIN_GUILD',
                  text: o.intl.string(o.t.riu2R0),
                  description: null
              }
            : u
              ? {
                    type: 'GET_PREMIUM',
                    text: o.intl.string(o.t['gl/XHB']),
                    description: null
                }
              : {
                    type: 'UNAVAILABLE',
                    text: null,
                    description: null
                };
    },
    d = (e) => {
        let n = u(e),
            r = l(e);
        return {
            ...c(e),
            emojiDescription: n,
            analyticsType: r
        };
    };
