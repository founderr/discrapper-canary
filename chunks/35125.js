e.d(n, {
    PA: function () {
        return s;
    },
    Tn: function () {
        return d;
    },
    _i: function () {
        return p;
    },
    eI: function () {
        return I;
    },
    vp: function () {
        return f;
    },
    y8: function () {
        return T;
    }
});
var i = e(367907),
    r = e(200876),
    o = e(430824),
    a = e(594174);
e(709054), e(523361);
var u = e(981631),
    l = e(388032);
function d(t) {
    let { username: n, usernameOnClickHandler: e, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: o } = t,
        { content: a, formatParams: u } = E({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o
        });
    return l.intl.format(a, u);
}
function s(t) {
    let { username: n, usernameOnClickHandler: e, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: o } = t,
        { content: a, formatParams: u } = E({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o
        });
    return l.intl.formatToParts(a, u);
}
function c(t, n) {
    var e, i;
    let r = o.Z.getGuild(t),
        a = null !== (e = null == n ? void 0 : n.total_months_subscribed) && void 0 !== e ? e : 0;
    return {
        guild: r,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null !== (i = null == n ? void 0 : n.is_renewal) && void 0 !== i && i
    };
}
function E(t) {
    let n,
        { username: e, usernameOnClickHandler: i, roleSubscriptionOnClickHandler: r, guildId: o, roleSubscriptionData: a } = t,
        { guild: u, totalMonthsSubscribed: d, showWithDuration: s, isRenewal: E } = c(o, a);
    return (
        (n = s ? (E ? l.t.Iy66Mz : l.t.eCgb2d) : E ? l.t.mPTTdn : l.t.mYjFFx),
        {
            content: n,
            formatParams: {
                username: e,
                usernameHook: i,
                guildName: null == u ? void 0 : u.name,
                handleGuildNameClick: r,
                tierName: null == a ? void 0 : a.tier_name,
                months: d
            }
        }
    );
}
function f(t) {
    let n,
        { username: e, usernameOnClickHandler: i = u.dG4, roleSubscriptionOnClickHandler: r = u.dG4, guildId: o, roleSubscriptionData: a } = t,
        { guild: d, totalMonthsSubscribed: s, showWithDuration: E, isRenewal: f } = c(o, a),
        I = {
            guildName: null == d ? void 0 : d.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r
        };
    return (n = E
        ? f
            ? l.intl.formatToParts(l.t.OQ0OU1, {
                  ...I,
                  months: s
              })
            : l.intl.formatToParts(l.t['+N9bxs'], {
                  ...I,
                  months: s
              })
        : f
          ? l.intl.formatToParts(l.t.OxP1ND, I)
          : l.intl.formatToParts(l.t['6Z1E+/'], I));
}
function I(t) {
    return (0, r.l)(t);
}
function T(t, n, e, r) {
    var o;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null === (o = a.default.getCurrentUser()) || void 0 === o ? void 0 : o.id,
        channel_id: n,
        message_id: e,
        role_subscription_listing_id: r
    });
}
function p(t, n) {
    var e;
    return {
        guild_id: t.guild_id,
        sender: null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
        target_user: n.author.id,
        channel_id: t.id,
        message_id: n.id
    };
}
