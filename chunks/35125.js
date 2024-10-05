t.d(n, {
    PA: function () {
        return d;
    },
    Tn: function () {
        return l;
    },
    _i: function () {
        return N;
    },
    eI: function () {
        return I;
    },
    vp: function () {
        return _;
    },
    y8: function () {
        return T;
    }
});
var i = t(367907),
    r = t(200876),
    o = t(430824),
    a = t(594174);
t(709054), t(523361);
var u = t(981631),
    s = t(689938);
function l(e) {
    let { username: n, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: o } = e,
        { content: a, formatParams: u } = c({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o
        });
    return a.format(u);
}
function d(e) {
    let { username: n, usernameOnClickHandler: t, roleSubscriptionOnClickHandler: i, guildId: r, roleSubscriptionData: o } = e,
        { content: a, formatParams: u } = c({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o
        });
    return a.astFormat(u);
}
function E(e, n) {
    var t, i;
    let r = o.Z.getGuild(e),
        a = null !== (t = null == n ? void 0 : n.total_months_subscribed) && void 0 !== t ? t : 0;
    return {
        guild: r,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null !== (i = null == n ? void 0 : n.is_renewal) && void 0 !== i && i
    };
}
function c(e) {
    let n,
        { username: t, usernameOnClickHandler: i, roleSubscriptionOnClickHandler: r, guildId: o, roleSubscriptionData: a } = e,
        { guild: u, totalMonthsSubscribed: l, showWithDuration: d, isRenewal: c } = E(o, a);
    return (
        (n = d ? (c ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION) : c ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
        {
            content: n,
            formatParams: {
                username: t,
                usernameHook: i,
                guildName: null == u ? void 0 : u.name,
                handleGuildNameClick: r,
                tierName: null == a ? void 0 : a.tier_name,
                months: l
            }
        }
    );
}
function _(e) {
    let n,
        { username: t, usernameOnClickHandler: i = u.dG4, roleSubscriptionOnClickHandler: r = u.dG4, guildId: o, roleSubscriptionData: a } = e,
        { guild: l, totalMonthsSubscribed: d, showWithDuration: c, isRenewal: _ } = E(o, a),
        I = {
            guildName: null == l ? void 0 : l.name,
            tierName: null == a ? void 0 : a.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r
        };
    return (n = c
        ? _
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
                  ...I,
                  months: d
              })
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
                  ...I,
                  months: d
              })
        : _
          ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(I)
          : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(I));
}
function I(e) {
    return (0, r.l)(e);
}
function T(e, n, t, r) {
    var o;
    i.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (o = a.default.getCurrentUser()) || void 0 === o ? void 0 : o.id,
        channel_id: n,
        message_id: t,
        role_subscription_listing_id: r
    });
}
function N(e, n) {
    var t;
    return {
        guild_id: e.guild_id,
        sender: null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
        target_user: n.author.id,
        channel_id: e.id,
        message_id: n.id
    };
}
