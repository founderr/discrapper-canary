n.d(e, {
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
        return _;
    },
    vp: function () {
        return p;
    },
    y8: function () {
        return E;
    }
});
var r = n(367907),
    i = n(200876),
    l = n(430824),
    a = n(594174);
n(709054), n(523361);
var o = n(981631),
    u = n(388032);
function s(t) {
    return t;
}
function c(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = t,
        { content: a, formatParams: o } = h({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return u.intl.format(a, o);
}
function d(t) {
    let { username: e, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: l } = t,
        { content: a, formatParams: o } = h({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l
        });
    return u.intl.formatToParts(a, o);
}
function f(t, e) {
    var n, r;
    let i = l.Z.getGuild(t),
        a = null !== (n = null == e ? void 0 : e.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null !== (r = null == e ? void 0 : e.is_renewal) && void 0 !== r && r
    };
}
function h(t) {
    let e,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: i = o.dG4, guildId: l, roleSubscriptionData: a } = t,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: h, isRenewal: p } = f(l, a);
    return (
        (e = h ? (p ? u.t.Iy66Mz : u.t.eCgb2d) : p ? u.t.mPTTdn : u.t.mYjFFx),
        {
            content: e,
            formatParams: {
                username: n,
                usernameHook: r,
                guildName: null == c ? void 0 : c.name,
                handleGuildNameClick: i,
                tierName: null == a ? void 0 : a.tier_name,
                months: d
            }
        }
    );
}
function p(t) {
    let e,
        { username: n, usernameOnClickHandler: r = s, roleSubscriptionOnClickHandler: i = o.dG4, guildId: l, roleSubscriptionData: a } = t,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: h, isRenewal: p } = f(l, a);
    return (
        (e = h ? (p ? u.t.OQ0OU1 : u.t['+N9bxs']) : p ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.intl.formatToParts(e, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: d
        })
    );
}
function _(t) {
    return (0, i.l)(t);
}
function E(t, e, n, i) {
    var l;
    r.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null === (l = a.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function g(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    };
}
