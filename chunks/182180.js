n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(481060),
    r = n(100527),
    l = n(906732),
    o = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(703656),
    _ = n(35125),
    E = n(626751),
    I = n(891614),
    m = n(981631),
    T = n(176505),
    N = n(689938),
    h = n(341738);
function C(e) {
    let { username: t } = e;
    return (0, i.jsx)('div', {
        className: h.welcomeCardText,
        children: (0, i.jsx)(a.Text, {
            tag: 'p',
            className: h.welcomeCardText,
            color: 'status-positive-text',
            variant: 'heading-xl/medium',
            children: N.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
                username: t,
                usernameHook: (e, t) =>
                    (0, i.jsx)(
                        a.Text,
                        {
                            tag: 'span',
                            color: 'status-positive-text',
                            variant: 'heading-xxl/extrabold',
                            lineClamp: 3,
                            children: e
                        },
                        t
                    )
            })
        })
    });
}
function f(e) {
    let { guildId: t, user: n, username: s } = e;
    return (0, i.jsxs)('div', {
        className: h.welcomeCard,
        role: 'img',
        'aria-label': N.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({ username: s }),
        children: [
            (0, i.jsx)(I.Z, {
                guildId: t,
                user: n,
                className: h.welcomeCardBadge
            }),
            (0, i.jsx)(C, { username: s })
        ]
    });
}
function p(e) {
    var t, a;
    let { channel: I, message: N, compact: h } = e,
        C = (0, o.ZP)(N),
        p = (function (e) {
            let { author: t, channel: n, message: i } = e,
                a = n.guild_id,
                o = (0, c.l)({
                    user: i.author,
                    channelId: n.id,
                    guildId: a,
                    messageId: i.id
                })(t),
                { analyticsLocations: u } = (0, l.ZP)(r.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                E = i.roleSubscriptionData,
                I = s.useCallback(() => {
                    (0, d.uL)(m.Z5c.CHANNEL(a, T.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: u }), (null == E ? void 0 : E.role_subscription_listing_id) != null && (0, _.y8)(a, n.id, i.id, E.role_subscription_listing_id);
                }, [a, n, i, E, u]);
            return null == E
                ? null
                : (0, _.Tn)({
                      username: t.nick,
                      usernameOnClickHandler: o,
                      roleSubscriptionOnClickHandler: I,
                      guildId: a,
                      roleSubscriptionData: i.roleSubscriptionData
                  });
        })({
            channel: I,
            message: N,
            author: C
        }),
        g = (null === (t = N.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = N.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
    return null == p
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.Z, {
                      icon: n(570111),
                      timestamp: N.timestamp,
                      compact: h,
                      children: p
                  }),
                  g &&
                      (0, i.jsx)(f, {
                          guildId: I.guild_id,
                          user: N.author,
                          username: C.nick
                      }),
                  (0, i.jsx)(E.Z, {
                      channel: I,
                      message: N
                  })
              ]
          });
}
