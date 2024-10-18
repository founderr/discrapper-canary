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
    f = n(463230),
    h = n(246965),
    N = n(703656),
    p = n(706454),
    C = n(933429),
    g = n(395361),
    S = n(626135),
    A = n(243778),
    x = n(921944),
    R = n(981631),
    O = n(801461),
    v = n(474936),
    M = n(689938),
    L = n(569252);
let Z = (e) => {
    let { dismissibleContent: t, noticeType: Z } = e,
        P = (0, a.e7)([C.Z], () => C.Z.getNotice()),
        b = (0, a.e7)([p.default], () => p.default.locale);
    return (0, i.jsx)(A.ZP, {
        contentTypes: [t],
        groupName: x.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            switch (t) {
                case s.z.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.NOTICE_NATIVE_APPS_2020_06,
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
                                children: M.Z.Messages.DOWNLOAD
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.SPOTIFY,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            (0, i.jsx)(g.Z, { className: L.platformIcon }),
                            M.Z.Messages.NOTICE_CONNECT_SPOTIFY,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: R.ABu.SPOTIFY,
                                        location: 'Notice Bar'
                                    }),
                                noticeType: Z,
                                children: M.Z.Messages.CONNECT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PLAYSTATION,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, { onClick: () => a(x.L.UNKNOWN) }),
                            (0, i.jsx)('img', {
                                alt: '',
                                className: L.platformIcon,
                                src: c.Z.get(R.ABu.PLAYSTATION).icon.whiteSVG
                            }),
                            M.Z.Messages.NOTICE_CONNECT_PLAYSTATION,
                            (0, i.jsx)(r.NoticeButton, {
                                onClick: () =>
                                    (0, d.Z)({
                                        platformType: R.ABu.PLAYSTATION,
                                        location: 'Notice Bar'
                                    }),
                                children: M.Z.Messages.CONNECT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.NOTICE_MFA_SMS_BACKUP,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => o.Z.open(R.oAB.ACCOUNT),
                                noticeType: Z,
                                children: M.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
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
                                children: M.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
                            }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                className: L.premiumAction,
                                noticeType: Z,
                                onClick: () => {
                                    S.default.track(R.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: R.jXE.NOTIFICATION_BAR,
                                        location_object: R.qAy.BUTTON_CTA
                                    }),
                                        o.Z.open(R.oAB.PREMIUM);
                                },
                                children: M.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
                            }),
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => {
                                    a(x.L.UNKNOWN), (0, l.mB)(R.xW$.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: Z
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, i.jsx)(h.Z, {
                        dismissCurrentNotice: () => a(x.L.UNKNOWN),
                        subscriptionTier: v.Si.TIER_2
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, i.jsx)(h.Z, {
                        dismissCurrentNotice: () => a(x.L.UNKNOWN),
                        subscriptionTier: v.Si.TIER_0
                    });
                case s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                noticeType: Z,
                                onClick: () => a(x.L.UNKNOWN)
                            }),
                            M.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    a(x.L.UNKNOWN), o.Z.open(R.oAB.PREMIUM);
                                },
                                children: M.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
                    return (0, i.jsx)(f.Z, {
                        notice: P,
                        noticeType: Z,
                        dismissCurrentNotice: () => a(x.L.UNKNOWN)
                    });
                case s.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DANGER,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    (0, N.uL)(R.Z5c.SETTINGS('account'));
                                },
                                children: M.Z.Messages.CHANGE_EMAIL_SHORT
                            })
                        ]
                    });
                case s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let p = _.Z.getEligibleGuildsForNagActivate();
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.DEFAULT,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                noticeType: Z,
                                onClick: () => {
                                    a(x.L.PRIMARY), (0, N.uL)(1 === p.length ? R.Z5c.GUILD_SETTINGS(p[0], 'role-subscriptions') : R.Z5c.PICK_GUILD_SETTINGS('role-subscriptions', void 0, 'server-subscriptions-finish-setting-up'));
                                },
                                children: M.Z.Messages.LETS_GO
                            })
                        ]
                    });
                case s.z.NAGBAR_NOTICE_POMELO:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.POMELO_ACTION_NEEDED.format(),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, m.Z)(O.Kq.NOTICE),
                                noticeType: Z,
                                children: M.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case s.z.UU_MIGRATION_NOTICE:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.WARNING,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, I.IE)(b) }),
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => (0, m.Z)(O.Kq.NOTICE),
                                noticeType: Z,
                                children: M.Z.Messages.GET_STARTED
                            })
                        ]
                    });
                case s.z.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, i.jsxs)(r.Notice, {
                        color: r.NoticeColors.PREMIUM_TIER_2,
                        children: [
                            (0, i.jsx)(r.NoticeCloseButton, {
                                onClick: () => a(x.L.UNKNOWN),
                                noticeType: Z
                            }),
                            M.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT,
                            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                                onClick: () => {
                                    (0, E.Z)({
                                        subscriptionTier: v.Si.TIER_2,
                                        analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: R.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => a(x.L.UNKNOWN)
                                    });
                                },
                                noticeType: Z,
                                children: M.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
                            })
                        ]
                    });
                case s.z.CASH_APP_PAY_AWARENESS_NAGBAR:
                    return (0, i.jsx)(T.Z, { onClose: () => a(x.L.TAKE_ACTION) });
            }
        }
    });
};
