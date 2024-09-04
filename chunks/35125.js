n.d(t, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return l;
    },
    _i: function () {
        return T;
    },
    eI: function () {
        return I;
    },
    vp: function () {
        return f;
    },
    y8: function () {
        return _;
    }
});
var r = n(367907),
    i = n(200876),
    o = n(430824),
    a = n(594174);
n(709054), n(523361);
var u = n(981631),
    s = n(689938);
function l(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: o } = e,
        { content: a, formatParams: u } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o
        });
    return a.format(u);
}
function d(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: o } = e,
        { content: a, formatParams: u } = E({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o
        });
    return a.astFormat(u);
}
function c(e, t) {
    var n, r;
    let i = o.Z.getGuild(e),
        a = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
    };
}
function E(e) {
    let t,
        { username: n, usernameOnClickHandler: r, roleSubscriptionOnClickHandler: i, guildId: o, roleSubscriptionData: a } = e,
        { guild: u, totalMonthsSubscribed: l, showWithDuration: d, isRenewal: E } = c(o, a);
    return (
        (t = d ? (E ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION) : E ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: r,
                guildName: null == u ? void 0 : u.name,
                handleGuildNameClick: i,
                tierName: null == a ? void 0 : a.tier_name,
                months: l
            }
        }
    );
}
function f(e) {
    let t,
        { username: n, usernameOnClickHandler: r = u.dG4, roleSubscriptionOnClickHandler: i = u.dG4, guildId: o, roleSubscriptionData: a } = e,
        { guild: l, totalMonthsSubscribed: d, showWithDuration: E, isRenewal: f } = c(o, a),
        I = {
            guildName: null == l ? void 0 : l.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i
        };
    return (t = E
        ? f
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
                  ...I,
                  months: d
              })
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
                  ...I,
                  months: d
              })
        : f
          ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(I)
          : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(I));
}
function I(e) {
    return (0, i.l)(e);
}
function _(e, t, n, i) {
    var o;
    r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (o = a.default.getCurrentUser()) || void 0 === o ? void 0 : o.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function T(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
