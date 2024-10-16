t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(789020);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(481060),
    s = t(860719),
    c = t(63063),
    d = t(49012),
    u = t(981631),
    _ = t(689938),
    p = t(568161);
let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
function I(e) {
    let { icon: n, heading: t, body: a } = e;
    return (0, i.jsxs)('li', {
        className: p.intentContainer,
        children: [
            (0, i.jsx)('div', {
                children: (0, i.jsx)(n, {
                    color: 'currentColor',
                    size: 'md'
                })
            }),
            (0, i.jsxs)('div', {
                className: p.intentTextContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(l.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: t
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: p.intentBody,
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: a
                        })
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { application: n } = e,
        { hasMessageContent: t, hasGuildPresences: r, hasGuildMembers: c, hasIntents: u } = (0, s.w)({ flags: null == n ? void 0 : n.flags }),
        f = a.useCallback(() => {
            (null == n ? void 0 : n.privacy_policy_url) != null && (0, d.q)({ href: n.privacy_policy_url });
        }, [null == n ? void 0 : n.privacy_policy_url]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u &&
                (0, i.jsx)('div', {
                    className: p.intentsListHeading,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                    })
                }),
            (0, i.jsxs)('div', {
                className: p.intentsContainer,
                children: [
                    u &&
                        (0, i.jsxs)('ul', {
                            className: p.intentsList,
                            children: [
                                t &&
                                    (0, i.jsx)(I, {
                                        icon: l.ChatIcon,
                                        heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                        body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                                    }),
                                r &&
                                    (0, i.jsx)(I, {
                                        icon: l.UserCircleStatusIcon,
                                        heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                        body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                                    }),
                                c &&
                                    (0, i.jsx)(I, {
                                        icon: l.GroupIcon,
                                        heading: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                        body: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                                    })
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: o()({ [p.hasSeparator]: u }),
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: m })
                            }),
                            (null == n ? void 0 : n.privacy_policy_url) != null &&
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: p.privacyPolicy,
                                    children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({ onClick: f })
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
