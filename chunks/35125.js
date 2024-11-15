n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return c;
    },
    _i: function () {
        return v;
    },
    eI: function () {
        return m;
    },
    vp: function () {
        return p;
    },
    y8: function () {
        return E;
    }
});
var i = n(367907),
    r = n(200876),
    l = n(430824),
    o = n(594174);
n(709054), n(523361);
var a = n(981631),
    s = n(388032);
function u(e) {
    return e;
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: a } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return s.intl.format(o, a);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: a } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return s.intl.formatToParts(o, a);
}
function h(e, t) {
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
function f(e) {
    let t,
        { username: n, usernameOnClickHandler: i = u, roleSubscriptionOnClickHandler: r = a.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: p } = h(l, o);
    return (
        (t = f ? (p ? s.t.Iy66Mz : s.t.eCgb2d) : p ? s.t.mPTTdn : s.t.mYjFFx),
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
        { username: n, usernameOnClickHandler: i = u, roleSubscriptionOnClickHandler: r = a.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: c, totalMonthsSubscribed: d, showWithDuration: f, isRenewal: p } = h(l, o);
    return (
        (t = f ? (p ? s.t.OQ0OU1 : s.t['+N9bxs']) : p ? s.t.OxP1ND : s.t['6Z1E+/']),
        s.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d
        })
    );
}
function m(e) {
    return (0, r.l)(e);
}
function E(e, t, n, r) {
    var l;
    i.ZP.trackWithMetadata(a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (l = o.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r
    });
}
function v(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
