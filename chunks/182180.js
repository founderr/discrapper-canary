n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(739566),
    c = n(942951),
    d = n(834129),
    u = n(703656),
    m = n(35125),
    h = n(626751),
    f = n(891614),
    p = n(981631),
    g = n(176505),
    _ = n(388032),
    C = n(341738);
function E(e) {
    let { username: t } = e;
    return (0, i.jsx)('div', {
        className: C.welcomeCardText,
        children: (0, i.jsx)(l.Text, {
            tag: 'p',
            className: C.welcomeCardText,
            color: 'status-positive-text',
            variant: 'heading-xl/medium',
            children: _.intl.format(_.t.MLKSlp, {
                username: t,
                usernameHook: (e, t) =>
                    (0, i.jsx)(
                        l.Text,
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
function I(e) {
    let { guildId: t, user: n, username: r } = e;
    return (0, i.jsxs)('div', {
        className: C.welcomeCard,
        role: 'img',
        'aria-label': _.intl.formatToPlainString(_.t['utf8+f'], { username: r }),
        children: [
            (0, i.jsx)(f.Z, {
                guildId: t,
                user: n,
                className: C.welcomeCardBadge
            }),
            (0, i.jsx)(E, { username: r })
        ]
    });
}
function x(e) {
    var t, l;
    let { channel: f, message: _, compact: C } = e,
        E = (0, s.ZP)(_),
        x = (function (e) {
            let { author: t, channel: n, message: i } = e,
                l = n.guild_id,
                s = (0, c.l)({
                    user: i.author,
                    channelId: n.id,
                    guildId: l,
                    messageId: i.id
                })(t),
                { analyticsLocations: d } = (0, o.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                h = i.roleSubscriptionData,
                f = r.useCallback(() => {
                    (0, u.uL)(p.Z5c.CHANNEL(l, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: d }), (null == h ? void 0 : h.role_subscription_listing_id) != null && (0, m.y8)(l, n.id, i.id, h.role_subscription_listing_id);
                }, [l, n, i, h, d]);
            return null == h
                ? null
                : (0, m.Tn)({
                      username: t.nick,
                      usernameOnClickHandler: s,
                      roleSubscriptionOnClickHandler: f,
                      guildId: l,
                      roleSubscriptionData: i.roleSubscriptionData
                  });
        })({
            channel: f,
            message: _,
            author: E
        }),
        v = (null === (t = _.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (l = _.roleSubscriptionData) || void 0 === l ? void 0 : l.total_months_subscribed) <= 1;
    return null == x
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.Z, {
                      icon: n(570111),
                      timestamp: _.timestamp,
                      compact: C,
                      children: x
                  }),
                  v &&
                      (0, i.jsx)(I, {
                          guildId: f.guild_id,
                          user: _.author,
                          username: E.nick
                      }),
                  (0, i.jsx)(h.Z, {
                      channel: f,
                      message: _
                  })
              ]
          });
}
