n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(607070),
    o = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(703656),
    d = n(331372),
    m = n(981631),
    f = n(388032),
    h = n(979314);
function p(e) {
    let { guildId: t, user: n, username: o } = e,
        s = (0, r.e7)([a.Z], () => !a.Z.useReducedMotion),
        c = n.getAvatarURL(t, 56, s),
        u = (0, i.jsx)('img', {
            src: c,
            className: h.userAvatar,
            alt: ''
        });
    return (0, i.jsxs)('div', {
        className: h.thankYouCard,
        role: 'img',
        'aria-label': f.intl.formatToPlainString(f.t['utf8+f'], { username: o }),
        children: [
            (0, i.jsx)(d.Z, { avatar: u }),
            (0, i.jsx)(l.Text, {
                className: h.thankYouText,
                tag: 'p',
                color: 'status-positive-text',
                variant: 'heading-xl/medium',
                children: f.intl.format(f.t['52BAtL'], {
                    username: o,
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
        ]
    });
}
function g(e) {
    var t, r, l;
    let { channel: a, message: d, compact: h } = e,
        g = (0, o.ZP)(d),
        _ = (0, s.l)({
            user: d.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: d.id
        })(g),
        C = f.intl.format(f.t.TQs67u, {
            username: g.nick,
            usernameHook: _,
            productName: null !== (l = null === (r = d.purchaseNotification) || void 0 === r ? void 0 : null === (t = r.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== l ? l : '',
            handleProductListingClick: () => {
                var e, t, n;
                (0, u.uL)(m.Z5c.GUILD_PRODUCT(a.guild_id, null !== (n = null === (t = d.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ''));
            }
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: n(570111),
                timestamp: d.timestamp,
                compact: h,
                children: C
            }),
            (0, i.jsx)(p, {
                username: g.nick,
                guildId: a.guild_id,
                user: d.author
            })
        ]
    });
}
