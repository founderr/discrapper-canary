t.d(n, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return c;
    },
    _i: function () {
        return m;
    },
    eI: function () {
        return E;
    },
    vp: function () {
        return _;
    },
    y8: function () {
        return g;
    }
});
var i = t(367907),
    r = t(200876),
    l = t(430824),
    o = t(594174);
t(709054), t(523361);
var u = t(981631),
    a = t(388032);
function s(e) {
    return e;
}
function c(e) {
    let { username: n, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: u } = p({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.format(o, u);
}
function d(e) {
    let { username: n, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: u } = p({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.formatToParts(o, u);
}
function f(e, n) {
    var t, i;
    let r = l.Z.getGuild(e),
        o = null !== (t = null == n ? void 0 : n.total_months_subscribed) && void 0 !== t ? t : 0;
    return {
        guild: r,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null !== (i = null == n ? void 0 : n.is_renewal) && void 0 !== i && i
    };
}
function p(e) {
    let n,
        { username: t, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: p, isRenewal: _ } = f(l, o);
    return (
        (n = p ? (_ ? a.t.Iy66Mz : a.t.eCgb2d) : _ ? a.t.mPTTdn : a.t.mYjFFx),
        {
            content: n,
            formatParams: {
                username: t,
                usernameHook: i,
                guildName: null == c ? void 0 : c.name,
                handleGuildNameClick: r,
                tierName: null == o ? void 0 : o.tier_name,
                months: d
            }
        }
    );
}
function _(e) {
    let n,
        { username: t, usernameOnClickHandler: i = s, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: p, isRenewal: _ } = f(l, o);
    return (
        (n = p ? (_ ? a.t.OQ0OU1 : a.t['+N9bxs']) : _ ? a.t.OxP1ND : a.t['6Z1E+/']),
        a.intl.formatToParts(n, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d
        })
    );
}
function E(e) {
    return (0, r.l)(e);
}
function g(e, n, t, r) {
    var l;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (l = o.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: n,
        message_id: t,
        role_subscription_listing_id: r
    });
}
function m(e, n) {
    var t;
    return {
        guild_id: e.guild_id,
        sender: null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
        target_user: n.author.id,
        channel_id: e.id,
        message_id: n.id
    };
}
