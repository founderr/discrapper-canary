n.d(i, {
    Z: function () {
        return E;
    }
});
var l = n(735250);
n(470079);
var s = n(120356), t = n.n(s), o = n(442837), a = n(481060), r = n(129861), d = n(427217), c = n(158776), u = n(51144), I = n(981631), f = n(689938), _ = n(988546);
function E(e) {
    let {
            user: i,
            displayProfile: n
        } = e, s = (0, o.e7)([c.Z], () => c.Z.findActivity(i.id, e => e.type === I.IIU.CUSTOM_STATUS)), E = u.ZP.getName(i);
    return (0, l.jsxs)('div', {
        className: _.container,
        children: [
            null == E && (0, l.jsx)(r.Z, {
                user: i,
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
                        user: i,
                        forceUsername: !0,
                        usernameClass: _.discriminator,
                        discriminatorClass: _.discriminator,
                        className: t()(_.nameTag, _.nameTagSmall)
                    })
                ]
            }),
            (null == n ? void 0 : n.pronouns) != null && (null == n ? void 0 : n.pronouns) !== '' && (0, l.jsx)(a.Tooltip, {
                text: f.Z.Messages.USER_PROFILE_PRONOUNS,
                children: e => (0, l.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/normal',
                    className: t()(_.pronouns, _.nameTagSmall),
                    children: n.pronouns
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
