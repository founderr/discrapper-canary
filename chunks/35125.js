e.d(n, {
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
        return p;
    },
    vp: function () {
        return _;
    },
    y8: function () {
        return E;
    }
});
var i = e(367907),
    r = e(200876),
    l = e(430824),
    o = e(594174);
e(709054), e(523361);
var u = e(981631),
    a = e(388032);
function s(t) {
    let { username: n, usernameOnClickHandler: e, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = t,
        { content: o, formatParams: u } = f({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.format(o, u);
}
function c(t) {
    let { username: n, usernameOnClickHandler: e, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: l } = t,
        { content: o, formatParams: u } = f({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l
        });
    return a.intl.formatToParts(o, u);
}
function d(t, n) {
    var e, i;
    let r = l.Z.getGuild(t),
        o = null !== (e = null == n ? void 0 : n.total_months_subscribed) && void 0 !== e ? e : 0;
    return {
        guild: r,
        totalMonthsSubscribed: o,
        showWithDuration: o > 0,
        isRenewal: null !== (i = null == n ? void 0 : n.is_renewal) && void 0 !== i && i
    };
}
function f(t) {
    let n,
        { username: e, usernameOnClickHandler: i, roleSubscriptionOnClickHandler: r, guildId: l, roleSubscriptionData: o } = t,
        { guild: u, totalMonthsSubscribed: s, showWithDuration: c, isRenewal: f } = d(l, o);
    return (
        (n = c ? (f ? a.t.Iy66Mz : a.t.eCgb2d) : f ? a.t.mPTTdn : a.t.mYjFFx),
        {
            content: n,
            formatParams: {
                username: e,
                usernameHook: i,
                guildName: null == u ? void 0 : u.name,
                handleGuildNameClick: r,
                tierName: null == o ? void 0 : o.tier_name,
                months: s
            }
        }
    );
}
function _(t) {
    let n,
        { username: e, usernameOnClickHandler: i = u.dG4, roleSubscriptionOnClickHandler: r = u.dG4, guildId: l, roleSubscriptionData: o } = t,
        { guild: s, totalMonthsSubscribed: c, showWithDuration: f, isRenewal: _ } = d(l, o),
        p = {
            guildName: null == s ? void 0 : s.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r
        };
    return (n = f
        ? _
            ? a.intl.formatToParts(a.t.OQ0OU1, {
                  ...p,
                  months: c
              })
            : a.intl.formatToParts(a.t['+N9bxs'], {
                  ...p,
                  months: c
              })
        : _
          ? a.intl.formatToParts(a.t.OxP1ND, p)
          : a.intl.formatToParts(a.t['6Z1E+/'], p));
}
function p(t) {
    return (0, r.l)(t);
}
function E(t, n, e, r) {
    var l;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null === (l = o.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
        channel_id: n,
        message_id: e,
        role_subscription_listing_id: r
    });
}
function g(t, n) {
    var e;
    return {
        guild_id: t.guild_id,
        sender: null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
        target_user: n.author.id,
        channel_id: t.id,
        message_id: n.id
    };
}
