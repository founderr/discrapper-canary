n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return c;
    },
    _i: function () {
        return g;
    },
    eI: function () {
        return m;
    },
    vp: function () {
        return p;
    },
    y8: function () {
        return v;
    }
});
var i = n(367907),
    o = n(200876),
    r = n(430824),
    l = n(594174);
n(709054), n(523361);
var s = n(981631),
    a = n(388032);
function u(e) {
    return e;
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: o, roleSubscriptionData: r } = e,
        { content: l, formatParams: s } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: r
        });
    return a.intl.format(l, s);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: o, roleSubscriptionData: r } = e,
        { content: l, formatParams: s } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: r
        });
    return a.intl.formatToParts(l, s);
}
function h(e, t) {
    var n, i;
    let o = r.Z.getGuild(e),
        l = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: o,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
    };
}
function f(e) {
    let t,
        { username: n, usernameOnClickHandler: i = u, roleSubscriptionOnClickHandler: o = s.dG4, guildId: r, roleSubscriptionData: l } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: p } = h(r, l);
    return (
        (t = f ? (p ? a.t.Iy66Mz : a.t.eCgb2d) : p ? a.t.mPTTdn : a.t.mYjFFx),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: i,
                guildName: null == c ? void 0 : c.name,
                handleGuildNameClick: o,
                tierName: null == l ? void 0 : l.tier_name,
                months: d
            }
        }
    );
}
function p(e) {
    let t,
        { username: n, usernameOnClickHandler: i = u, roleSubscriptionOnClickHandler: o = s.dG4, guildId: r, roleSubscriptionData: l } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: p } = h(r, l);
    return (
        (t = f ? (p ? a.t.OQ0OU1 : a.t['+N9bxs']) : p ? a.t.OxP1ND : a.t['6Z1E+/']),
        a.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: o,
            months: d
        })
    );
}
function m(e) {
    return (0, o.l)(e);
}
function v(e, t, n, o) {
    var r;
    i.ZP.trackWithMetadata(s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (r = l.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: o
    });
}
function g(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
