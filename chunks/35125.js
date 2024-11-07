t.d(e, {
    PA: function () {
        return c;
    },
    Tn: function () {
        return s;
    },
    _i: function () {
        return h;
    },
    eI: function () {
        return p;
    },
    vp: function () {
        return E;
    },
    y8: function () {
        return v;
    }
});
var i = t(367907),
    r = t(200876),
    l = t(430824),
    u = t(594174);
t(709054), t(523361);
var a = t(981631),
    o = t(388032);
function d(n) {
    return n;
}
function s(n) {
    let { username: e, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = n,
        { content: u, formatParams: a } = _({
            username: e,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return o.intl.format(u, a);
}
function c(n) {
    let { username: e, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = n,
        { content: u, formatParams: a } = _({
            username: e,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return o.intl.formatToParts(u, a);
}
function f(n, e) {
    var t, i;
    let r = l.Z.getGuild(n),
        u = null !== (t = null == e ? void 0 : e.total_months_subscribed) && void 0 !== t ? t : 0;
    return {
        guild: r,
        totalMonthsSubscribed: u,
        showWithDuration: u > 0,
        isRenewal: null !== (i = null == e ? void 0 : e.is_renewal) && void 0 !== i && i
    };
}
function _(n) {
    let e,
        { username: t, usernameOnClickHandler: i = d, roleSubscriptionOnClickHandler: r = a.dG4, guildId: l, roleSubscriptionData: u } = n,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: E } = f(l, u);
    return (
        (e = _ ? (E ? o.t.Iy66Mz : o.t.eCgb2d) : E ? o.t.mPTTdn : o.t.mYjFFx),
        {
            content: e,
            formatParams: {
                username: t,
                usernameHook: i,
                guildName: null == s ? void 0 : s.name,
                handleGuildNameClick: r,
                tierName: null == u ? void 0 : u.tier_name,
                months: c
            }
        }
    );
}
function E(n) {
    let e,
        { username: t, usernameOnClickHandler: i = d, roleSubscriptionOnClickHandler: r = a.dG4, guildId: l, roleSubscriptionData: u } = n,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: E } = f(l, u);
    return (
        (e = _ ? (E ? o.t.OQ0OU1 : o.t['+N9bxs']) : E ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.intl.formatToParts(e, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == u ? void 0 : u.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: c
        })
    );
}
function p(n) {
    return (0, r.l)(n);
}
function v(n, e, t, r) {
    var l;
    i.ZP.trackWithMetadata(a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: n,
        user_id: null === (l = u.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: e,
        message_id: t,
        role_subscription_listing_id: r
    });
}
function h(n, e) {
    var t;
    return {
        guild_id: n.guild_id,
        sender: null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
        target_user: e.author.id,
        channel_id: n.id,
        message_id: e.id
    };
}
