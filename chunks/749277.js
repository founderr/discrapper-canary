n.d(t, {
    A: function () {
        return P;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(704215),
    r = n(481060),
    l = n(232567),
    o = n(230711),
    c = n(726542),
    u = n(100527),
    d = n(231757),
    _ = n(674525),
    E = n(33885),
    I = n(963249),
    m = n(346585),
    T = n(303172),
    h = n(212332),
    N = n(463230),
    f = n(246965),
    C = n(703656),
    p = n(706454),
    g = n(933429),
    A = n(395361),
    S = n(626135),
    x = n(243778),
    R = n(921944),
    O = n(981631),
    M = n(801461),
    v = n(474936),
    L = n(689938),
    Z = n(569252);
let P = (e) => {
    let { dismissibleContent: t, noticeType: P } = e,
        b = (0, s.e7)([g.Z], () => g.Z.getNotice()),
        D = (0, s.e7)([p.default], () => p.default.locale);
    return (0, i.jsx)(x.ZP, {
        contentTypes: [t],
        groupName: R.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: s } = e;
            switch (t) {
                case a.z.GUILD_ONBOARDING_UPSELL_NAGBAR:
                    return (0, i.jsx)(E.Z, { dismissCurrentNotice: () => s(R.L.UNKNOWN) });
                case a.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
                            (0, i.jsx)('i', { className: Z.iconApple }),
                            (0, i.jsx)('i', { className: Z.iconAndroid }),
                            (0, i.jsx)('i', { className: Z.iconWindows }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: P,
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
                                children: L.Z.Messages.DOWNLOAD
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            (0, i.jsx)(A.Z, { className: Z.platformIcon }),
                            L.Z.Messages.NOTICE_CONNECT_SPOTIFY,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: O.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: P,
                                children: L.Z.Messages.CONNECT
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, { onClick: () => s(R.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: Z.platformIcon,
                                src: c.Z.get(O.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            L.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
                            (0, i.jsx)(r.NoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: O.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: L.Z.Messages.CONNECT
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.NOTICE_MFA_SMS_BACKUP,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => o.Z.open(O.oAB.ACCOUNT),
                                noticeType: P,
                                children: L.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: Z.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: Z.premiumText,
                                children: L.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
                            }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                className: Z.premiumAction,
                                noticeType: P,
                                onClick: () => {
                                    S.default.track(O.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: O.jXE.NOTIFICATION_BAR,
                                        location_object: O.qAy.BUTTON_CTA
                                    }),
                                        o.Z.open(O.oAB.PREMIUM);
                                },
                                children: L.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
                            }),
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => {
                                    s(R.L.UNKNOWN), (0, l.mB)(O.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: P
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(f.Z, {
                        dismissCurrentNotice: () => s(R.L.UNKNOWN),
                        subscriptionTier: v.Si.TIER_2
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(f.Z, {
                        dismissCurrentNotice: () => s(R.L.UNKNOWN),
                        subscriptionTier: v.Si.TIER_0
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                noticeType: P,
                                onClick: () => s(R.L.UNKNOWN)
                            }),
                            L.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: P,
                                onClick: () => {
                                    s(R.L.UNKNOWN), o.Z.open(O.oAB.PREMIUM);
                                },
                                children: L.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(N.Z, {
                        notice: b,
                        noticeType: P,
                        dismissCurrentNotice: () => s(R.L.UNKNOWN)
                    });
                case a.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DANGER,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: P,
                                onClick: () => {
                                    (0, C.uL)(O.Z5c.SETTINGS('account'));
                                },
                                children: L.Z.Messages.CHANGE_EMAIL_SHORT
                            })
                        ]
                    });
                case a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let p = _.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: P,
                                onClick: () => {
                                    s(R.L.PRIMARY), (0, C.uL)(1 === p.length ? O.Z5c.GUILD_SETTINGS(p[0], 'role-subscriptions') : O.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: L.Z.Messages.LETS_GO
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.POMELO_ACTION_NEEDED.format(),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, T.Z)(M.Kq.NOTICE),
                                noticeType: P,
                                children: L.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case a.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, m.IE)(D) }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, T.Z)(M.Kq.NOTICE),
                                noticeType: P,
                                children: L.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case a.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => s(R.L.UNKNOWN),
                                noticeType: P
                            }),
                            L.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, I.Z)({
                                        subscriptionTier: v.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: O.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => s(R.L.UNKNOWN)
                                    });
                                },
                                noticeType: P,
                                children: L.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
                            })
                        ]
                    });
                case a.z.CASH_APP_PAY_AWARENESS_NAGBAR:
                    return (0, i.jsx)(h.Z, { onClose: () => s(R.L.TAKE_ACTION) });
            }
        }
    });
};
