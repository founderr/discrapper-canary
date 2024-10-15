n.d(t, {
    A: function () {
        return Z;
    }
});
var i = n(735250);
n(470079);
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
    T = n(212332),
    h = n(463230),
    N = n(246965),
    f = n(703656),
    C = n(706454),
    p = n(933429),
    g = n(395361),
    A = n(626135),
    S = n(243778),
    R = n(921944),
    x = n(981631),
    O = n(801461),
    M = n(474936),
    v = n(689938),
    L = n(569252);
let Z = (e) => {
    let { dismissibleContent: t, noticeType: Z } = e,
        P = (0, a.e7)([p.Z], () => p.Z.getNotice()),
        b = (0, a.e7)([C.default], () => C.default.locale);
    return (0, i.jsx)(S.ZP, {
        contentTypes: [t],
        groupName: R.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            switch (t) {
                case s.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
                            (0, i.jsx)('i', { className: L.iconApple }),
                            (0, i.jsx)('i', { className: L.iconAndroid }),
                            (0, i.jsx)('i', { className: L.iconWindows }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
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
                                children: v.Z.Messages.DOWNLOAD
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            (0, i.jsx)(g.Z, { className: L.platformIcon }),
                            v.Z.Messages.NOTICE_CONNECT_SPOTIFY,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: x.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: Z,
                                children: v.Z.Messages.CONNECT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, { onClick: () => a(R.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: L.platformIcon,
                                src: c.Z.get(x.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            v.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
                            (0, i.jsx)(r.NoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: x.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: v.Z.Messages.CONNECT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.NOTICE_MFA_SMS_BACKUP,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => o.Z.open(x.oAB.ACCOUNT),
                                noticeType: Z,
                                children: v.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)('span', { className: L.premiumLogo }),
                            (0, i.jsx)('span', {
                                className: L.premiumText,
                                children: v.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
                            }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                className: L.premiumAction,
                                noticeType: Z,
                                onClick: () => {
                                    A.default.track(x.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: x.jXE.NOTIFICATION_BAR,
                                        location_object: x.qAy.BUTTON_CTA
                                    }),
                                        o.Z.open(x.oAB.PREMIUM);
                                },
                                children: v.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
                            }),
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => {
                                    a(R.L.UNKNOWN), (0, l.mB)(x.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: Z
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(N.Z, {
                        dismissCurrentNotice: () => a(R.L.UNKNOWN),
                        subscriptionTier: M.Si.TIER_2
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(N.Z, {
                        dismissCurrentNotice: () => a(R.L.UNKNOWN),
                        subscriptionTier: M.Si.TIER_0
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                noticeType: Z,
                                onClick: () => a(R.L.UNKNOWN)
                            }),
                            v.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    a(R.L.UNKNOWN), o.Z.open(x.oAB.PREMIUM);
                                },
                                children: v.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(h.Z, {
                        notice: P,
                        noticeType: Z,
                        dismissCurrentNotice: () => a(R.L.UNKNOWN)
                    });
                case s.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DANGER,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    (0, f.uL)(x.Z5c.SETTINGS('account'));
                                },
                                children: v.Z.Messages.CHANGE_EMAIL_SHORT
                            })
                        ]
                    });
                case s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let C = _.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    a(R.L.PRIMARY), (0, f.uL)(1 === C.length ? x.Z5c.GUILD_SETTINGS(C[0], 'role-subscriptions') : x.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: v.Z.Messages.LETS_GO
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.POMELO_ACTION_NEEDED.format(),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, m.Z)(O.Kq.NOTICE),
                                noticeType: Z,
                                children: v.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case s.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, I.IE)(b) }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, m.Z)(O.Kq.NOTICE),
                                noticeType: Z,
                                children: v.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case s.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(R.L.UNKNOWN),
                                noticeType: Z
                            }),
                            v.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: M.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: x.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => a(R.L.UNKNOWN)
                                    });
                                },
                                noticeType: Z,
                                children: v.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
                            })
                        ]
                    });
                case s.z.CASH_APP_PAY_AWARENESS_NAGBAR:
                    return (0, i.jsx)(T.Z, { onClose: () => a(R.L.TAKE_ACTION) });
            }
        }
    });
};
