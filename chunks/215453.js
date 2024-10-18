n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(789020);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(860719),
    l = n(63063),
    o = n(49012),
    c = n(981631),
    d = n(689938),
    u = n(915817);
let _ = l.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);
function E(e) {
    let { application: t } = e,
        { hasMessageContent: n, hasGuildPresences: l, hasGuildMembers: c, hasIntents: E } = (0, r.w)({ flags: null == t ? void 0 : t.flags }),
        m = a.useCallback(() => {
            null != t.privacy_policy_url && (0, o.q)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, i.jsxs)('div', {
        className: u.sectionContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }),
            (0, i.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    E &&
                        (0, i.jsxs)('ul', {
                            className: u.intentsList,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-secondary',
                                    children: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                                }),
                                n &&
                                    (0, i.jsx)(h, {
                                        icon: s.ChatIcon,
                                        heading: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                        body: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                                    }),
                                l &&
                                    (0, i.jsx)(h, {
                                        icon: s.UserCircleStatusIcon,
                                        heading: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                        body: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                                    }),
                                c &&
                                    (0, i.jsx)(h, {
                                        icon: s.GroupIcon,
                                        heading: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                        body: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                                    })
                            ]
                        }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: _ })
                    }),
                    null != t.privacy_policy_url &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            className: u.privacyPolicy,
                            children: d.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({ onClick: m })
                        })
                ]
            })
        ]
    });
}
function h(e) {
    let { icon: t, heading: n, body: a } = e;
    return (0, i.jsxs)('li', {
        className: u.intentContainer,
        children: [
            (0, i.jsx)(t, {
                color: 'currentColor',
                size: 'md'
            }),
            (0, i.jsxs)('div', {
                className: u.intentTextContainer,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-secondary',
                        children: n
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: a
                    })
                ]
            })
        ]
    });
}
