i.d(n, {
    Z: function () {
        return f;
    }
});
var o = i(735250);
i(470079);
var s = i(120356), t = i.n(s), l = i(442837), a = i(481060), r = i(129861), c = i(427217), d = i(158776), u = i(51144), I = i(981631), E = i(689938), _ = i(988546);
function f(e) {
    let {
            user: n,
            displayProfile: i
        } = e, s = (0, l.e7)([d.Z], () => d.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), f = u.ZP.getName(n);
    return (0, o.jsxs)('div', {
        className: _.container,
        children: [
            null == f && (0, o.jsx)(r.Z, {
                user: n,
                className: _.nameTag,
                usernameClass: _.username,
                discriminatorClass: _.discriminator
            }),
            null != f && (0, o.jsxs)('div', {
                children: [
                    (0, o.jsx)(a.Text, {
                        variant: 'text-lg/semibold',
                        style: { marginRight: '12px' },
                        children: f
                    }),
                    (0, o.jsx)(r.Z, {
                        user: n,
                        forceUsername: !0,
                        usernameClass: _.discriminator,
                        discriminatorClass: _.discriminator,
                        className: t()(_.nameTag, _.nameTagSmall)
                    })
                ]
            }),
            (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, o.jsx)(a.Tooltip, {
                text: E.Z.Messages.USER_PROFILE_PRONOUNS,
                children: e => (0, o.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/normal',
                    className: t()(_.pronouns, _.nameTagSmall),
                    children: i.pronouns
                })
            }),
            null != s ? (0, o.jsx)('div', {
                className: _.__invalid_customStatusActivity,
                children: (0, o.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: _.customStatusText,
                    children: (0, o.jsx)(c.Z, {
                        activity: s,
                        className: _.customStatus,
                        emojiClassName: _.customStatusEmoji,
                        soloEmojiClassName: _.customStatusSoloEmoji
                    })
                })
            }) : null
        ]
    });
}
