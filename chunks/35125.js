n.d(t, {
    PA: function () {
        return c;
    },
    Tn: function () {
        return u;
    },
    _i: function () {
        return p;
    },
    eI: function () {
        return f;
    },
    vp: function () {
        return E;
    },
    y8: function () {
        return h;
    }
});
var r = n(367907),
    i = n(200876),
    a = n(430824),
    o = n(594174);
n(709054), n(523361);
var s = n(981631),
    l = n(689938);
function u(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: a } = e,
        { content: o, formatParams: s } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a
        });
    return o.format(s);
}
function c(e) {
    let { username: t, usernameOnClickHandler: n, roleSubscriptionOnClickHandler: r, guildId: i, roleSubscriptionData: a } = e,
        { content: o, formatParams: s } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: a
        });
    return o.astFormat(s);
}
function d(e, t) {
    var n, r;
    let i = a.Z.getGuild(e),
        o = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0,
        s = o > 0;
    return {
        guild: i,
        totalMonthsSubscribed: o,
        showWithDuration: s,
        isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
    };
}
function _(e) {
    let t,
        { username: n, usernameOnClickHandler: r, roleSubscriptionOnClickHandler: i, guildId: a, roleSubscriptionData: o } = e,
        { guild: s, totalMonthsSubscribed: u, showWithDuration: c, isRenewal: _ } = d(a, o);
    return (
        (t = c ? (_ ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION) : _ ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
        {
            content: t,
            formatParams: {
                username: n,
                usernameHook: r,
                guildName: null == s ? void 0 : s.name,
                handleGuildNameClick: i,
                tierName: null == o ? void 0 : o.tier_name,
                months: u
            }
        }
    );
}
function E(e) {
    let t,
        { username: n, usernameOnClickHandler: r = s.dG4, roleSubscriptionOnClickHandler: i = s.dG4, guildId: a, roleSubscriptionData: o } = e,
        { guild: u, totalMonthsSubscribed: c, showWithDuration: _, isRenewal: E } = d(a, o),
        f = {
            guildName: null == u ? void 0 : u.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i
        };
    return (t = _
        ? E
            ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
                  ...f,
                  months: c
              })
            : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
                  ...f,
                  months: c
              })
        : E
          ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(f)
          : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(f));
}
function f(e) {
    return (0, i.l)(e);
}
function h(e, t, n, i) {
    var a;
    r.ZP.trackWithMetadata(s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: e,
        user_id: null === (a = o.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
        channel_id: t,
        message_id: n,
        role_subscription_listing_id: i
    });
}
function p(e, t) {
    var n;
    return {
        guild_id: e.guild_id,
        sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        target_user: t.author.id,
        channel_id: e.id,
        message_id: t.id
    };
}
