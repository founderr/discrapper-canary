a.d(n, {
    Z: function () {
        return I;
    }
}),
    a(789020);
var i = a(735250),
    t = a(470079),
    r = a(120356),
    l = a.n(r),
    s = a(481060),
    o = a(860719),
    c = a(63063),
    d = a(49012),
    u = a(981631),
    _ = a(689938),
    m = a(568161);
let p = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
function g(e) {
    let { icon: n, heading: a, body: t } = e;
    return (0, i.jsxs)('li', {
        className: m.intentContainer,
        children: [
            (0, i.jsx)('div', {
                children: (0, i.jsx)(n, {
                    color: 'currentColor',
                    size: 'md'
                })
            }),
            (0, i.jsxs)('div', {
                className: m.intentTextContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(s.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: a
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: m.intentBody,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: t
                        })
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { application: n } = e,
        { hasMessageContent: a, hasGuildPresences: r, hasGuildMembers: c, hasIntents: u } = (0, o.w)({ flags: null == n ? void 0 : n.flags }),
        I = t.useCallback(() => {
            (null == n ? void 0 : n.privacy_policy_url) != null && (0, d.q)({ href: n.privacy_policy_url });
        }, [null == n ? void 0 : n.privacy_policy_url]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u &&
                (0, i.jsx)('div', {
                    className: m.intentsListHeading,
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                    })
                }),
            (0, i.jsxs)('div', {
                className: m.intentsContainer,
                children: [
                    u &&
                        (0, i.jsxs)('ul', {
                            className: m.intentsList,
                            children: [
                                a &&
                                    (0, i.jsx)(g, {
                                        icon: s.ChatIcon,
                                        heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                        body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                                    }),
                                r &&
                                    (0, i.jsx)(g, {
                                        icon: s.UserCircleStatusIcon,
                                        heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                        body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                                    }),
                                c &&
                                    (0, i.jsx)(g, {
                                        icon: s.GroupIcon,
                                        heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                        body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                                    })
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: l()({ [m.hasSeparator]: u }),
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: p })
                            }),
                            (null == n ? void 0 : n.privacy_policy_url) != null &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: m.privacyPolicy,
                                    children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({ onClick: I })
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
