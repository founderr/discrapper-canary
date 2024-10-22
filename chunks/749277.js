n.d(t, {
    A: function () {
        return L;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(704215),
    r = n(481060),
    l = n(232567),
    o = n(230711),
    c = n(726542),
    u = n(100527),
    d = n(231757),
    _ = n(674525),
    E = n(963249),
    I = n(346585),
    m = n(303172),
    T = n(463230),
    f = n(246965),
    h = n(703656),
    N = n(706454),
    p = n(933429),
    C = n(395361),
    g = n(626135),
    S = n(243778),
    A = n(921944),
    x = n(981631),
    R = n(801461),
    v = n(474936),
    O = n(689938),
    M = n(569252);
let L = (e) => {
    let { dismissibleContent: t, noticeType: L } = e,
        Z = (0, a.e7)([p.Z], () => p.Z.getNotice()),
        b = (0, a.e7)([N.default], () => N.default.locale);
    return (0, i.jsx)(S.ZP, {
        contentTypes: [t],
        groupName: A.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            switch (t) {
                case s.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
                            (0, i.jsx)('i', { className: M.iconApple }),
                            (0, i.jsx)('i', { className: M.iconAndroid }),
                            (0, i.jsx)('i', { className: M.iconWindows }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: L,
                                onClick: () => {
                                    (0, r.openModalLazy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                source: 'Top Bar Nag',
                                                ...t
                                            });
                                    });
                                },
                                children: O.Z.Messages.DOWNLOAD
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            (0, i.jsx)(C.Z, { className: M.platformIcon }),
                            O.Z.Messages.NOTICE_CONNECT_SPOTIFY,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: x.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: L,
                                children: O.Z.Messages.CONNECT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, { onClick: () => a(A.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: M.platformIcon,
                                src: c.Z.get(x.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            O.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
                            (0, i.jsx)(r.NoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: x.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: O.Z.Messages.CONNECT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.NOTICE_MFA_SMS_BACKUP,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => o.Z.open(x.oAB.ACCOUNT),
                                noticeType: L,
                                children: O.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: M.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: M.premiumText,
                                children: O.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
                            }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                className: M.premiumAction,
                                noticeType: L,
                                onClick: () => {
                                    g.default.track(x.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: x.jXE.NOTIFICATION_BAR,
                                        location_object: x.qAy.BUTTON_CTA
                                    }),
                                        o.Z.open(x.oAB.PREMIUM);
                                },
                                children: O.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
                            }),
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => {
                                    a(A.L.UNKNOWN), (0, l.mB)(x.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: L
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(f.Z, {
                        dismissCurrentNotice: () => a(A.L.UNKNOWN),
                        subscriptionTier: v.Si.TIER_2
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(f.Z, {
                        dismissCurrentNotice: () => a(A.L.UNKNOWN),
                        subscriptionTier: v.Si.TIER_0
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                noticeType: L,
                                onClick: () => a(A.L.UNKNOWN)
                            }),
                            O.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: L,
                                onClick: () => {
                                    a(A.L.UNKNOWN), o.Z.open(x.oAB.PREMIUM);
                                },
                                children: O.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(T.Z, {
                        notice: Z,
                        noticeType: L,
                        dismissCurrentNotice: () => a(A.L.UNKNOWN)
                    });
                case s.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DANGER,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: L,
                                onClick: () => {
                                    (0, h.uL)(x.Z5c.SETTINGS('account'));
                                },
                                children: O.Z.Messages.CHANGE_EMAIL_SHORT
                            })
                        ]
                    });
                case s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let N = _.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: L,
                                onClick: () => {
                                    a(A.L.PRIMARY), (0, h.uL)(1 === N.length ? x.Z5c.GUILD_SETTINGS(N[0], 'role-subscriptions') : x.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: O.Z.Messages.LETS_GO
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.POMELO_ACTION_NEEDED.format(),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, m.Z)(R.Kq.NOTICE),
                                noticeType: L,
                                children: O.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case s.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, I.IE)(b) }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, m.Z)(R.Kq.NOTICE),
                                noticeType: L,
                                children: O.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case s.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(A.L.UNKNOWN),
                                noticeType: L
                            }),
                            O.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: v.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: x.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => a(A.L.UNKNOWN)
                                    });
                                },
                                noticeType: L,
                                children: O.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
                            })
                        ]
                    });
            }
        }
    });
};
