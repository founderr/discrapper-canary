n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return s;
    },
    _i: function () {
        return m;
    },
    eI: function () {
        return p;
    },
    vp: function () {
        return h;
    },
    y8: function () {
        return E;
    }
});
var r = n(367907),
    l = n(200876),
    i = n(430824),
    a = n(594174);
n(709054), n(523361);
var o = n(981631),
    u = n(388032);
function c(e) {
    return e;
}
function s(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: l, roleSubscriptionData: i } = e,
        { content: a, formatParams: o } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: i
        });
    return u.intl.format(a, o);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: l, roleSubscriptionData: i } = e,
        { content: a, formatParams: o } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: i
        });
    return u.intl.formatToParts(a, o);
}
function f(e, t) {
    var n, r;
    let l = i.Z.getGuild(e),
        a = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: l,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
    };
}
function _(e) {
    let t,
        { username: n, usernameOnClickHandler: r = c, roleSubscriptionOnClickHandler: l = o.dG4, guildId: i, roleSubscriptionData: a } = e,
        { guild: s, totalMonthsSubscribed: d, showWithDuration: _, isRenewal: h } = f(i, a);
    return (
        (t = _ ? (h ? u.t.Iy66Mz : u.t.eCgb2d) : h ? u.t.mPTTdn : u.t.mYjFFx),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: r,
                guildName: null == s ? void 0 : s.name,
                handleGuildNameClick: l,
                tierName: null == a ? void 0 : a.tier_name,
                months: d
            }
        }
    );
}
function h(e) {
    let t,
        { username: n, usernameOnClickHandler: r = c, roleSubscriptionOnClickHandler: l = o.dG4, guildId: i, roleSubscriptionData: a } = e,
        { guild: s, totalMonthsSubscribed: d, showWithDuration: _, isRenewal: h } = f(i, a);
    return (
        (t = _ ? (h ? u.t.OQ0OU1 : u.t['+N9bxs']) : h ? u.t.OxP1ND : u.t['6Z1E+/']),
        u.intl.formatToParts(t, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: l,
            months: d
        })
    );
}
function p(e) {
    return (0, l.l)(e);
}
function E(e, t, n, l) {
    var i;
    r.ZP.trackWithMetadata(o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (i = a.default.getCurrentUser()) || void 0 === i ? void 0 : i.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: l
    });
}
function m(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
