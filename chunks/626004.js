n.d(a, {
    Z: function () {
        return I;
    }
}),
    n(789020);
var i = n(735250),
    t = n(470079),
    r = n(120356),
    l = n.n(r),
    s = n(481060),
    o = n(860719),
    c = n(63063),
    d = n(49012),
    u = n(981631),
    _ = n(689938),
    p = n(568161);
let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);
function g(e) {
    let { icon: a, heading: n, body: t } = e;
    return (0, i.jsxs)('li', {
        className: p.intentContainer,
        children: [
            (0, i.jsx)('div', {
                children: (0, i.jsx)(a, {
                    color: 'currentColor',
                    size: 'md'
                })
            }),
            (0, i.jsxs)('div', {
                className: p.intentTextContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(s.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: n
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: p.intentBody,
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
    let { application: a } = e,
        { hasMessageContent: n, hasGuildPresences: r, hasGuildMembers: c, hasIntents: u } = (0, o.w)({ flags: null == a ? void 0 : a.flags }),
        I = t.useCallback(() => {
            (null == a ? void 0 : a.privacy_policy_url) != null && (0, d.q)({ href: a.privacy_policy_url });
        }, [null == a ? void 0 : a.privacy_policy_url]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u &&
                (0, i.jsx)('div', {
                    className: p.intentsListHeading,
                    children: (0, i.jsx)(s.Text, {
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
                                n &&
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
                        className: l()({ [p.hasSeparator]: u }),
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({ helpCenterUrl: m })
                            }),
                            (null == a ? void 0 : a.privacy_policy_url) != null &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: p.privacyPolicy,
                                    children: _.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({ onClick: I })
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
