n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(399606),
    a = n(481060),
    o = n(607070),
    s = n(739566),
    l = n(942951),
    u = n(834129),
    c = n(703656),
    d = n(331372),
    _ = n(981631),
    E = n(689938),
    f = n(979314);
function h(e) {
    let { guildId: t, user: n, username: s } = e,
        l = (0, i.e7)([o.Z], () => !o.Z.useReducedMotion),
        u = n.getAvatarURL(t, 56, l),
        c = (0, r.jsx)('img', {
            src: u,
            className: f.userAvatar,
            alt: ''
        });
    return (0, r.jsxs)('div', {
        className: f.thankYouCard,
        role: 'img',
        'aria-label': E.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({ username: s }),
        children: [
            (0, r.jsx)(d.Z, { avatar: c }),
            (0, r.jsx)(a.Text, {
                className: f.thankYouText,
                tag: 'p',
                color: 'status-positive-text',
                variant: 'heading-xl/medium',
                children: E.Z.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
                    username: s,
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
        ]
    });
}
function p(e) {
    var t, i, a;
    let { channel: o, message: d, compact: f } = e,
        p = (0, s.ZP)(d),
        m = (0, l.l)({
            user: d.author,
            channelId: o.id,
            guildId: o.guild_id,
            messageId: d.id
        })(p),
        I = E.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
            username: p.nick,
            usernameHook: m,
            productName: null !== (a = null === (i = d.purchaseNotification) || void 0 === i ? void 0 : null === (t = i.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== a ? a : '',
            handleProductListingClick: () => {
                var e, t, n;
                (0, c.uL)(_.Z5c.GUILD_PRODUCT(o.guild_id, null !== (n = null === (t = d.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ''));
            }
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                icon: n(570111),
                timestamp: d.timestamp,
                compact: f,
                children: I
            }),
            (0, r.jsx)(h, {
                username: p.nick,
                guildId: o.guild_id,
                user: d.author
            })
        ]
    });
}
