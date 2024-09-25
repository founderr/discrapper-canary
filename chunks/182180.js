n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(739566),
    u = n(942951),
    c = n(834129),
    d = n(703656),
    _ = n(35125),
    E = n(626751),
    f = n(891614),
    h = n(981631),
    p = n(176505),
    m = n(689938),
    I = n(341738);
function T(e) {
    let { author: t, channel: n, message: r } = e,
        a = n.guild_id,
        l = (0, u.l)({
            user: r.author,
            channelId: n.id,
            guildId: a,
            messageId: r.id
        })(t),
        { analyticsLocations: c } = (0, s.ZP)(o.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
        E = r.roleSubscriptionData,
        f = i.useCallback(() => {
            (0, d.uL)(h.Z5c.CHANNEL(a, p.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: c }), (null == E ? void 0 : E.role_subscription_listing_id) != null && (0, _.y8)(a, n.id, r.id, E.role_subscription_listing_id);
        }, [a, n, r, E, c]);
    return null == E
        ? null
        : (0, _.Tn)({
              username: t.nick,
              usernameOnClickHandler: l,
              roleSubscriptionOnClickHandler: f,
              guildId: a,
              roleSubscriptionData: r.roleSubscriptionData
          });
}
function g(e) {
    let { username: t } = e;
    return (0, r.jsx)('div', {
        className: I.welcomeCardText,
        children: (0, r.jsx)(a.Text, {
            tag: 'p',
            className: I.welcomeCardText,
            color: 'status-positive-text',
            variant: 'heading-xl/medium',
            children: m.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
                username: t,
                usernameHook: (e, t) =>
                    (0, r.jsx)(
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
function S(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, r.jsxs)('div', {
        className: I.welcomeCard,
        role: 'img',
        'aria-label': m.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({ username: i }),
        children: [
            (0, r.jsx)(f.Z, {
                guildId: t,
                user: n,
                className: I.welcomeCardBadge
            }),
            (0, r.jsx)(g, { username: i })
        ]
    });
}
function A(e) {
    var t, i;
    let { channel: a, message: o, compact: s } = e,
        u = (0, l.ZP)(o),
        d = T({
            channel: a,
            message: o,
            author: u
        }),
        _ = (null === (t = o.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (i = o.roleSubscriptionData) || void 0 === i ? void 0 : i.total_months_subscribed) <= 1;
    return null == d
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      icon: n(570111),
                      timestamp: o.timestamp,
                      compact: s,
                      children: d
                  }),
                  _ &&
                      (0, r.jsx)(S, {
                          guildId: a.guild_id,
                          user: o.author,
                          username: u.nick
                      }),
                  (0, r.jsx)(E.Z, {
                      channel: a,
                      message: o
                  })
              ]
          });
}
