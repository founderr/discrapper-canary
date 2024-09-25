n.d(t, {
    A: function () {
        return D;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(232567),
    l = n(230711),
    u = n(726542),
    c = n(100527),
    d = n(231757),
    _ = n(674525),
    E = n(963249),
    f = n(346585),
    h = n(303172),
    p = n(212332),
    m = n(463230),
    I = n(246965),
    T = n(703656),
    g = n(706454),
    S = n(933429),
    A = n(395361),
    v = n(626135),
    N = n(243778),
    O = n(921944),
    R = n(981631),
    C = n(801461),
    y = n(474936),
    b = n(689938),
    L = n(569252);
let D = (e) => {
    let { dismissibleContent: t, noticeType: D } = e,
        M = (0, i.e7)([S.Z], () => S.Z.getNotice()),
        P = (0, i.e7)([g.default], () => g.default.locale);
    return (0, r.jsx)(N.ZP, {
        contentTypes: [t],
        groupName: O.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            switch (t) {
                case a.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.DEFAULT,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
                            (0, r.jsx)('i', { className: L.iconApple }),
                            (0, r.jsx)('i', { className: L.iconAndroid }),
                            (0, r.jsx)('i', { className: L.iconWindows }),
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                noticeType: D,
                                onClick: () => {
                                    (0, o.openModalLazy)(async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                source: 'Top Bar Nag',
                                                ...t
                                            });
                                    });
                                },
                                children: b.Z.Messages.DOWNLOAD
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.SPOTIFY,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            (0, r.jsx)(A.Z, { className: L.platformIcon }),
                            b.Z.Messages.NOTICE_CONNECT_SPOTIFY,
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: R.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: D,
                                children: b.Z.Messages.CONNECT
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.PLAYSTATION,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, { onClick: () => i(O.L.UNKNOWN) }),
                            (0, r.jsx)('img', {
                                alt: '',
                                className: L.platformIcon,
                                src: u.Z.get(R.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            b.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
                            (0, r.jsx)(o.NoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: R.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: b.Z.Messages.CONNECT
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.DEFAULT,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.NOTICE_MFA_SMS_BACKUP,
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                onClick: () => l.Z.open(R.oAB.ACCOUNT),
                                noticeType: D,
                                children: b.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)('span', { className: L.premiumLogo }),
                            (0, r.jsx)('span', {
                                className: L.premiumText,
                                children: b.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
                            }),
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                className: L.premiumAction,
                                noticeType: D,
                                onClick: () => {
                                    v.default.track(R.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: R.jXE.NOTIFICATION_BAR,
                                        location_object: R.qAy.BUTTON_CTA
                                    }),
                                        l.Z.open(R.oAB.PREMIUM);
                                },
                                children: b.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
                            }),
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => {
                                    i(O.L.UNKNOWN), (0, s.mB)(R.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: D
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(I.Z, {
                        dismissCurrentNotice: () => i(O.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_2
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(I.Z, {
                        dismissCurrentNotice: () => i(O.L.UNKNOWN),
                        subscriptionTier: y.Si.TIER_0
                    });
                case a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                noticeType: D,
                                onClick: () => i(O.L.UNKNOWN)
                            }),
                            b.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                noticeType: D,
                                onClick: () => {
                                    i(O.L.UNKNOWN), l.Z.open(R.oAB.PREMIUM);
                                },
                                children: b.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, r.jsx)(m.Z, {
                        notice: M,
                        noticeType: D,
                        dismissCurrentNotice: () => i(O.L.UNKNOWN)
                    });
                case a.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.DANGER,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                noticeType: D,
                                onClick: () => {
                                    (0, T.uL)(R.Z5c.SETTINGS('account'));
                                },
                                children: b.Z.Messages.CHANGE_EMAIL_SHORT
                            })
                        ]
                    });
                case a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let g = _.Z.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.DEFAULT,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                noticeType: D,
                                onClick: () => {
                                    i(O.L.PRIMARY), (0, T.uL)(1 === g.length ? R.Z5c.GUILD_SETTINGS(g[0], 'role-subscriptions') : R.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: b.Z.Messages.LETS_GO
                            })
                        ]
                    });
                case a.z.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.WARNING,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.POMELO_ACTION_NEEDED.format(),
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                onClick: () => (0, h.Z)(C.Kq.NOTICE),
                                noticeType: D,
                                children: b.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case a.z.UU_MIGRATION_NOTICE:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.WARNING,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, f.IE)(P) }),
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                onClick: () => (0, h.Z)(C.Kq.NOTICE),
                                noticeType: D,
                                children: b.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case a.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(o.Notice, {
                        color: o.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(o.NoticeCloseButton, {
                                onClick: () => i(O.L.UNKNOWN),
                                noticeType: D
                            }),
                            b.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
                            (0, r.jsx)(o.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: y.Si.TIER_2,
                                        analyticsLocations: [c.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: R.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => i(O.L.UNKNOWN)
                                    });
                                },
                                noticeType: D,
                                children: b.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
                            })
                        ]
                    });
                case a.z.CASH_APP_PAY_AWARENESS_NAGBAR:
                    return (0, r.jsx)(p.Z, { onClose: () => i(O.L.TAKE_ACTION) });
            }
        }
    });
};
