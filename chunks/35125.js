n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return c;
    },
    _i: function () {
        return E;
    },
    eI: function () {
        return g;
    },
    vp: function () {
        return p;
    },
    y8: function () {
        return m;
    }
});
var i = n(367907),
    r = n(200876),
    l = n(430824),
    o = n(594174);
n(709054), n(523361);
var u = n(981631),
    a = n(388032);
function s(e) {
    return e;
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.format(o, u);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.formatToParts(o, u);
}
function f(e, t) {
    var n, i;
    let r = l.Z.getGuild(e),
        o = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: r,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
    };
}
function _(e) {
    let t,
        { username: n, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: _, isRenewal: p } = f(l, o);
    return (
        (t = _ ? (p ? a.t.Iy66Mz : a.t.eCgb2d) : p ? a.t.mPTTdn : a.t.mYjFFx),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: i,
                guildName: null == c ? void 0 : c.name,
                handleGuildNameClick: r,
                tierName: null == o ? void 0 : o.tier_name,
                months: d
            }
        }
    );
}
function p(e) {
    let t,
        { username: n, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: _, isRenewal: p } = f(l, o);
    return (
        (t = _ ? (p ? a.t.OQ0OU1 : a.t['+N9bxs']) : p ? a.t.OxP1ND : a.t['6Z1E+/']),
        a.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d
        })
    );
}
function g(e) {
    return (0, r.l)(e);
}
function m(e, t, n, r) {
    var l;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (l = o.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r
    });
}
function E(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
