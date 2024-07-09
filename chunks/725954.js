i.d(n, {
    Z: function () {
        return E;
    }
});
var l = i(735250);
i(470079);
var s = i(120356), o = i.n(s), t = i(442837), a = i(481060), r = i(129861), d = i(427217), c = i(158776), u = i(51144), I = i(981631), f = i(689938), _ = i(988546);
function E(e) {
    let {
            user: n,
            displayProfile: i
        } = e, s = (0, t.e7)([c.Z], () => c.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), E = u.ZP.getName(n);
    return (0, l.jsxs)('div', {
        className: _.container,
        children: [
            null == E && (0, l.jsx)(r.Z, {
                user: n,
                className: _.nameTag,
                usernameClass: _.username,
                discriminatorClass: _.discriminator
            }),
            null != E && (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(a.Text, {
                        variant: 'text-lg/semibold',
                        style: { marginRight: '12px' },
                        children: E
                    }),
                    (0, l.jsx)(r.Z, {
                        user: n,
                        forceUsername: !0,
                        usernameClass: _.discriminator,
                        discriminatorClass: _.discriminator,
                        className: o()(_.nameTag, _.nameTagSmall)
                    })
                ]
            }),
            (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, l.jsx)(a.Tooltip, {
                text: f.Z.Messages.USER_PROFILE_PRONOUNS,
                children: e => (0, l.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/normal',
                    className: o()(_.pronouns, _.nameTagSmall),
                    children: i.pronouns
                })
            }),
            null != s ? (0, l.jsx)('div', {
                className: _.__invalid_customStatusActivity,
                children: (0, l.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: _.customStatusText,
                    children: (0, l.jsx)(d.Z, {
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
