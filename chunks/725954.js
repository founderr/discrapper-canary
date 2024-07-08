i.d(n, {
    Z: function () {
        return _;
    }
});
var o = i(735250);
i(470079);
var s = i(120356), t = i.n(s), l = i(442837), a = i(481060), r = i(129861), c = i(427217), d = i(158776), u = i(51144), I = i(981631), E = i(689938), f = i(988546);
function _(e) {
    let {
            user: n,
            displayProfile: i
        } = e, s = (0, l.e7)([d.Z], () => d.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), _ = u.ZP.getName(n);
    return (0, o.jsxs)('div', {
        className: f.container,
        children: [
            null == _ && (0, o.jsx)(r.Z, {
                user: n,
                className: f.nameTag,
                usernameClass: f.username,
                discriminatorClass: f.discriminator
            }),
            null != _ && (0, o.jsxs)('div', {
                children: [
                    (0, o.jsx)(a.Text, {
                        variant: 'text-lg/semibold',
                        style: { marginRight: '12px' },
                        children: _
                    }),
                    (0, o.jsx)(r.Z, {
                        user: n,
                        forceUsername: !0,
                        usernameClass: f.discriminator,
                        discriminatorClass: f.discriminator,
                        className: t()(f.nameTag, f.nameTagSmall)
                    })
                ]
            }),
            (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, o.jsx)(a.Tooltip, {
                text: E.Z.Messages.USER_PROFILE_PRONOUNS,
                children: e => (0, o.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/normal',
                    className: t()(f.pronouns, f.nameTagSmall),
                    children: i.pronouns
                })
            }),
            null != s ? (0, o.jsx)('div', {
                className: f.__invalid_customStatusActivity,
                children: (0, o.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: f.customStatusText,
                    children: (0, o.jsx)(c.Z, {
                        activity: s,
                        className: f.customStatus,
                        emojiClassName: f.customStatusEmoji,
                        soloEmojiClassName: f.customStatusSoloEmoji
                    })
                })
            }) : null
        ]
    });
}
