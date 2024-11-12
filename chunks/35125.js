e.d(t, {
    PA: function () {
        return s;
    },
    Tn: function () {
        return c;
    },
    _i: function () {
        return N;
    },
    eI: function () {
        return p;
    },
    vp: function () {
        return _;
    },
    y8: function () {
        return m;
    }
});
var i = e(367907),
    r = e(200876),
    u = e(430824),
    l = e(594174);
e(709054), e(523361);
var a = e(981631),
    o = e(388032);
function d(n) {
    return n;
}
function c(n) {
    let { username: t, usernameOnClickHandler: e, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: u } = n,
        { content: l, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u
        });
    return o.intl.format(l, a);
}
function s(n) {
    let { username: t, usernameOnClickHandler: e, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: u } = n,
        { content: l, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u
        });
    return o.intl.formatToParts(l, a);
}
function f(n, t) {
    var e, i;
    let r = u.Z.getGuild(n),
        l = null !== (e = null == t ? void 0 : t.total_months_subscribed) && void 0 !== e ? e : 0;
    return {
        guild: r,
        totalMonthsSubscribed: l,
        showWithDuration: l > 0,
        isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
    };
}
function E(n) {
    let t,
        { username: e, usernameOnClickHandler: i = d, roleSubscriptionOnClickHandler: r = a.dG4, guildId: u, roleSubscriptionData: l } = n,
        { guild: c, totalMonthsSubscribed: s, showWithDuration: E, isRenewal: _ } = f(u, l);
    return (
        (t = E ? (_ ? o.t.Iy66Mz : o.t.eCgb2d) : _ ? o.t.mPTTdn : o.t.mYjFFx),
        {
            content: t,
            formatParams: {
                username: e,
                usernameHook: i,
                guildName: null == c ? void 0 : c.name,
                handleGuildNameClick: r,
                tierName: null == l ? void 0 : l.tier_name,
                months: s
            }
        }
    );
}
function _(n) {
    let t,
        { username: e, usernameOnClickHandler: i = d, roleSubscriptionOnClickHandler: r = a.dG4, guildId: u, roleSubscriptionData: l } = n,
        { guild: c, totalMonthsSubscribed: s, showWithDuration: E, isRenewal: _ } = f(u, l);
    return (
        (t = E ? (_ ? o.t.OQ0OU1 : o.t['+N9bxs']) : _ ? o.t.OxP1ND : o.t['6Z1E+/']),
        o.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: s
        })
    );
}
function p(n) {
    return (0, r.l)(n);
}
function m(n, t, e, r) {
    var u;
    i.ZP.trackWithMetadata(a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: n,
        user_id: null === (u = l.default.getCurrentUser()) || void 0 === u ? void 0 : u.id,
        channel_id: t,
        message_id: e,
        role_subscription_listing_id: r
    });
}
function N(n, t) {
    var e;
    return {
        guild_id: n.guild_id,
        sender: null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
        target_user: t.author.id,
        channel_id: n.id,
        message_id: t.id
    };
}
