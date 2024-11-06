n.d(t, {
    PA: function () {
        return c;
    },
    Tn: function () {
        return s;
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
var i = n(367907),
    r = n(200876),
    l = n(430824),
    o = n(594174);
n(709054), n(523361);
var u = n(981631),
    a = n(388032);
function s(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: u } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.format(o, u);
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = e,
        { content: o, formatParams: u } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.formatToParts(o, u);
}
function d(e, t) {
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
        { username: n, usernameOnClickHandler: i, roleSubscriptionOnClickHandler: r, guildId: l, roleSubscriptionData: o } = e,
        { guild: u, totalMonthsSubscribed: s, showWithDuration: c, isRenewal: f } = d(l, o);
    return (
        (t = c ? (f ? a.t.Iy66Mz : a.t.eCgb2d) : f ? a.t.mPTTdn : a.t.mYjFFx),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: i,
                guildName: null == u ? void 0 : u.name,
                handleGuildNameClick: r,
                tierName: null == o ? void 0 : o.tier_name,
                months: s
            }
        }
    );
}
function p(e) {
    let t,
        { username: n, usernameOnClickHandler: i = u.dG4, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: o } = e,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: f, isRenewal: p } = d(l, o),
        _ = {
            guildName: null == s ? void 0 : s.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r
        };
    return (t = f
        ? p
            ? a.intl.formatToParts(a.t.OQ0OU1, {
                  ..._,
                  months: c
              })
            : a.intl.formatToParts(a.t['+N9bxs'], {
                  ..._,
                  months: c
              })
        : p
          ? a.intl.formatToParts(a.t.OxP1ND, _)
          : a.intl.formatToParts(a.t['6Z1E+/'], _));
}
function _(e) {
    return (0, r.l)(e);
}
function E(e, t, n, r) {
    var l;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (l = o.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: r
    });
}
function g(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
