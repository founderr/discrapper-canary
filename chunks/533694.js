n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(481060),
    l = n(607070),
    r = n(739566),
    o = n(942951),
    c = n(834129),
    d = n(703656),
    u = n(331372),
    _ = n(981631),
    E = n(689938),
    I = n(979314);
function m(e) {
    let { guildId: t, user: n, username: r } = e,
        o = (0, a.e7)([l.Z], () => !l.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, o),
        d = (0, i.jsx)('img', {
            src: c,
            className: I.userAvatar,
            alt: ''
        });
    return (0, i.jsxs)('div', {
        className: I.thankYouCard,
        role: 'img',
        'aria-label': E.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({ username: r }),
        children: [
            (0, i.jsx)(u.Z, { avatar: d }),
            (0, i.jsx)(s.Text, {
                className: I.thankYouText,
                tag: 'p',
                color: 'status-positive-text',
                variant: 'heading-xl/medium',
                children: E.Z.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
                    username: r,
                    usernameHook: (e, t) =>
                        (0, i.jsx)(
                            s.Text,
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
function T(e) {
    var t, a, s;
    let { channel: l, message: u, compact: I } = e,
        T = (0, r.ZP)(u),
        N = (0, o.l)({
            user: u.author,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: u.id
        })(T),
        h = E.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
            username: T.nick,
            usernameHook: N,
            productName: null !== (s = null === (a = u.purchaseNotification) || void 0 === a ? void 0 : null === (t = a.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== s ? s : '',
            handleProductListingClick: () => {
                var e, t, n;
                (0, d.uL)(_.Z5c.GUILD_PRODUCT(l.guild_id, null !== (n = null === (t = u.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ''));
            }
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: n(570111),
                timestamp: u.timestamp,
                compact: I,
                children: h
            }),
            (0, i.jsx)(m, {
                username: T.nick,
                guildId: l.guild_id,
                user: u.author
            })
        ]
    });
}
