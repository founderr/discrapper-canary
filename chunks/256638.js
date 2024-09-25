n.d(t, {
    Z: function () {
        return ev;
    },
    c: function () {
        return eg;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(913527),
    o = n.n(a),
    s = n(613828),
    l = n(442837),
    u = n(481060),
    c = n(668781),
    d = n(846027),
    _ = n(893776),
    E = n(117266),
    f = n(37234),
    h = n(254854),
    p = n(195500),
    m = n(287734),
    I = n(205355),
    T = n(558381),
    g = n(223245),
    S = n(491428),
    A = n(401430),
    v = n(230711),
    N = n(726542),
    O = n(100527),
    R = n(906732),
    C = n(812206),
    y = n(391650),
    b = n(600164),
    L = n(605236),
    D = n(749277),
    M = n(492435),
    P = n(353926),
    U = n(506357),
    w = n(36459),
    x = n(236069),
    G = n(305325),
    k = n(281956),
    B = n(574650),
    F = n(665302),
    Z = n(434404),
    V = n(918658),
    H = n(859428),
    Y = n(963249),
    j = n(774276),
    W = n(14335),
    K = n(246965),
    z = n(272008),
    q = n(523255),
    Q = n(852923),
    X = n(592125),
    $ = n(430824),
    J = n(131951),
    ee = n(19780),
    et = n(914010),
    en = n(594174),
    er = n(55563),
    ei = n(695103),
    ea = n(933429),
    eo = n(626135),
    es = n(63063),
    el = n(72924),
    eu = n(69499),
    ec = n(912193),
    ed = n(981631),
    e_ = n(474936),
    eE = n(610674),
    ef = n(65154),
    eh = n(689938),
    ep = n(569252);
let em = () =>
        (0, r.jsxs)(u.Notice, {
            color: u.NoticeColors.DANGER,
            children: [
                (0, r.jsx)(u.NoticeCloseButton, {
                    onClick: () => {
                        eg(), (0, ec.b)();
                    }
                }),
                eh.Z.Messages.NOTICE_NO_INPUT_DETECTED,
                (0, r.jsx)(u.NoticeButtonAnchor, {
                    href: es.Z.getArticleURL(ed.BhN.NO_INPUT_DETECTED),
                    children: eh.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
                })
            ]
        }),
    eI = () =>
        (0, r.jsxs)(u.Notice, {
            color: u.NoticeColors.DANGER,
            children: [
                (0, r.jsx)(u.NoticeCloseButton, {
                    onClick: () => {
                        eg(), (0, ec.b)();
                    }
                }),
                eh.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS,
                (0, r.jsx)(u.NoticeButton, {
                    onClick: () => {
                        (0, f.jN)(ed.S9g.USER_SETTINGS), v.Z.setSection(ed.oAB.VOICE);
                    },
                    children: eh.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
                })
            ]
        });
function eT(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), eo.default.track(ed.rMx.APP_NOTICE_VIEWED, n);
}
function eg(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
function eS(e) {
    let { enabled: t } = (0, j.ZP)(!0, e !== ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
    return t || null == e ? null : ea.m[e];
}
let eA = i.memo(function () {
    var e, t, a;
    let h = (0, l.e7)([en.default], () => en.default.getCurrentUser()),
        O = (0, l.e7)([et.Z], () => et.Z.getGuildId()),
        j = (0, l.e7)([ea.Z], () => ea.Z.getNotice()),
        eo = (0, l.e7)([$.Z], () => $.Z.getGuild(O)),
        { analyticsLocations: ec } = (0, R.ZP)(),
        eA = null == j ? void 0 : j.type,
        ev = (0, k.J)(O);
    i.useEffect(() => {
        null != eA && eT(eA, O);
    }, [eA, O]),
        i.useEffect(() => {
            if (null != j && j.type === ed.kVF.SURVEY && null != j.metadata) {
                let { metadata: e } = j,
                    t = P.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, M.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null === (e = j.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, S.g8)(null === (t = j.metadata) || void 0 === t ? void 0 : t.id));
                    })();
            }
        }, [j]);
    let eN = eS(eA);
    if (null == j) return null;
    if (null != eN)
        return (0, r.jsx)(D.A, {
            dismissibleContent: eN,
            noticeType: j.type
        });
    let eO = null === (e = j.metadata) || void 0 === e ? void 0 : e.premiumType;
    switch (j.type) {
        case ed.kVF.LURKING_GUILD:
            return (0, r.jsx)(H.Z, {});
        case ed.kVF.PENDING_MEMBER:
            return (0, r.jsx)(B.Z, {});
        case ed.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(Q.Z, {});
        case ed.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eR } = j.metadata;
            return (0, r.jsx)(U.Z, { onDismiss: () => eg(eR) });
        case ed.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eC } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(eC),
                        noticeType: ed.kVF.WIN32_DEPRECATED_MESSAGE
                    }),
                    eh.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({ helpCenterLink: es.Z.getArticleURL(ed.BhN.WIN32_DEPRECATE) })
                ]
            });
        case ed.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: ey } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(ey),
                        noticeType: ed.kVF.WIN7_8_DEPRECATED_MESSAGE
                    }),
                    eh.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({ helpCenterLink: es.Z.getArticleURL(ed.BhN.WIN7_8_DEPRECATE) })
                ]
            });
        case ed.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
            let { dismissUntil: eb } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(eb),
                        noticeType: ed.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                    }),
                    eh.Z.Messages.MACOS_DEPRECATED_WARNING.format({ helpCenterLink: es.Z.getArticleURL(ed.BhN.MACOS_17_18_DEPRECATE) })
                ]
            });
        case ed.kVF.GENERIC:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DEFAULT,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.GENERIC
                    }),
                    j.message,
                    null != j.buttonText
                        ? (0, r.jsx)(u.PrimaryCTANoticeButton, {
                              onClick: j.callback,
                              noticeType: ed.kVF.GENERIC,
                              children: j.buttonText
                          })
                        : null
                ]
            });
        case ed.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.LAUNCH_GAME_FAILURE
                    }),
                    j.message,
                    null != j.buttonText
                        ? (0, r.jsx)(u.PrimaryCTANoticeButton, {
                              onClick: j.callback,
                              noticeType: ed.kVF.LAUNCH_GAME_FAILURE,
                              children: j.buttonText
                          })
                        : null
                ]
            });
        case ed.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => {
                            p.Z.clearRemoteDisconnectVoiceChannelId(), eg();
                        },
                        noticeType: ed.kVF.VOICE_DISABLED
                    }),
                    eh.Z.Messages.NOTICE_CONNECTION_CONFLICT,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        onClick: () => {
                            let e = ee.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != X.Z.getChannel(e) && m.default.selectVoiceChannel(e);
                        },
                        noticeType: ed.kVF.VOICE_DISABLED,
                        children: eh.Z.Messages.RECONNECT
                    })
                ]
            });
        case ed.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DEFAULT,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => {
                            p.Z.clearLastSessionVoiceChannelId(), eg();
                        },
                        noticeType: ed.kVF.VOICE_CONNECTED_LAST_SESSION
                    }),
                    eh.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        onClick: () => {
                            let e = ee.Z.getLastSessionVoiceChannelId();
                            null != e && null != X.Z.getChannel(e) && m.default.selectVoiceChannel(e);
                        },
                        noticeType: ed.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: eh.Z.Messages.RECONNECT
                    })
                ]
            });
        case ed.kVF.SPOTIFY_AUTO_PAUSED:
            let eL = N.Z.get(ed.ABu.SPOTIFY);
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.SPOTIFY_AUTO_PAUSED
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        className: ep.platformIcon,
                        src: eL.icon.whiteSVG
                    }),
                    eh.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        onClick: () => v.Z.open(ed.oAB.VOICE),
                        noticeType: ed.kVF.SPOTIFY_AUTO_PAUSED,
                        children: eh.Z.Messages.VOICE_SETTINGS
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: ep.textLinkSmall,
                        href: es.Z.getArticleURL(ed.BhN.SPOTIFY_AUTO_PAUSED),
                        target: '_blank',
                        children: eh.Z.Messages.NOTICE_WHATS_THIS
                    })
                ]
            });
        case ed.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DEFAULT,
                children: [
                    eh.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.UNCLAIMED_ACCOUNT,
                        onClick: () => (ev && null != O ? (0, G.hk)(O) : y.j()),
                        children: eh.Z.Messages.CLAIM_ACCOUNT
                    })
                ]
            });
        case ed.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DEFAULT,
                children: [
                    eh.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.UNVERIFIED_ACCOUNT,
                        onClick: () => {
                            _.Z.verifyResend(),
                                c.Z.show({
                                    title: eh.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                    body: eh.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null == h ? void 0 : h.email }),
                                    secondaryConfirmText: eh.Z.Messages.CHANGE_EMAIL,
                                    onConfirmSecondary: y.j
                                });
                        },
                        children: eh.Z.Messages.RESEND_EMAIL_SHORT
                    })
                ]
            });
        case ed.kVF.SCHEDULED_MAINTENANCE:
            if (null == j.metadata) return null;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DEFAULT,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => I.Z.ackScheduledMaintenance(),
                        noticeType: ed.kVF.SCHEDULED_MAINTENANCE
                    }),
                    eh.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(j.metadata),
                    (0, r.jsx)(u.NoticeButtonAnchor, {
                        href: ''.concat(ed.yXt.STATUS, '/incidents/').concat(j.metadata.id),
                        children: eh.Z.Messages.LEARN_MORE
                    })
                ]
            });
        case ed.kVF.NO_INPUT_DETECTED:
            if (!J.Z.supports(ef.AN.LOOPBACK)) return (0, r.jsx)(em, {});
            return (0, r.jsx)(eI, {});
        case ed.kVF.HARDWARE_MUTE:
            if (null == j.metadata) return null;
            let { vendor: eD, model: eM } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    eh.Z.Messages.NOTICE_HARDWARE_MUTE.format({
                        vendorName: eD.name,
                        modelName: eM.name
                    }),
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => {
                            d.Z.setEnableHardwareMuteNotice(!1), eg();
                        }
                    }),
                    (0, r.jsx)(u.NoticeButtonAnchor, {
                        href: eM.url,
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: eh.Z.Messages.SUPPORT
                    })
                ]
            });
        case ed.kVF.STREAMER_MODE:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.STREAMER_MODE,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.STREAMER_MODE
                    }),
                    eh.Z.Messages.NOTICE_STREAMER_MODE_TEXT,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        onClick: () => g.Z.setEnabled(!1),
                        noticeType: ed.kVF.STREAMER_MODE,
                        children: eh.Z.Messages.DISABLE
                    })
                ]
            });
        case ed.kVF.H264_DISABLED:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => {
                            eg();
                        }
                    }),
                    eh.Z.Messages.NOTICE_H264_DISABLED_SETTINGS,
                    (0, r.jsx)(u.NoticeButton, {
                        onClick: () => {
                            (0, f.jN)(ed.S9g.USER_SETTINGS), v.Z.setSection(ed.oAB.VOICE);
                        },
                        children: eh.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
                    })
                ]
            });
        case ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == j.metadata) return null;
            let { skuId: eP, applicationId: eU } = j.metadata,
                ew = er.Z.get(eP),
                ex = C.Z.getApplication(eU);
            if (null == ew || null == ex) return null;
            let eG = { page: ed.ZY5.IN_APP };
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => E.Z(ew.id),
                        noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                    }),
                    (0, r.jsx)(u.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: ep.premiumIcon
                    }),
                    eh.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
                        applicationName: ex.name,
                        skuName: ew.name
                    }),
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, el.S)({
                                applicationId: ex.id,
                                skuId: ew.id,
                                openPremiumPaymentModal: () => {
                                    (0, Y.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: e_.Si.TIER_2,
                                        analyticsLocations: ec,
                                        analyticsObject: eG
                                    });
                                },
                                analyticsLocations: ec,
                                analyticsLocationObject: eG,
                                context: __OVERLAY__ ? ed.IlC.OVERLAY : ed.IlC.APP
                            }).then(() => E.Z(ew.id)),
                        children: eh.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
                    })
                ]
            });
        case ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == j.metadata) return null;
            let { skuId: e, applicationId: t } = j.metadata,
                n = er.Z.get(e),
                i = C.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                    }),
                    (0, r.jsx)(u.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: ep.premiumIcon
                    }),
                    eh.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
                        applicationName: i.name,
                        skuName: n.name
                    }),
                    (0, r.jsx)(u.NoticeButton, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eg(),
                            to: {
                                pathname: ed.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 }
                            },
                            children: eh.Z.Messages.LEARN_MORE
                        })
                    })
                ]
            });
        }
        case ed.kVF.SURVEY: {
            let e = j.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a } = e;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.CUSTOM,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.SURVEY,
                        onClick: () => {
                            (0, S.hZ)(t, !0);
                        }
                    }),
                    n,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.SURVEY,
                        onClick: () => {
                            window.open(a, '_blank'), (0, S.hZ)(t, !1);
                        },
                        children: i
                    })
                ]
            });
        }
        case ed.kVF.SERVER_USAGE_SURVEY:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.CUSTOM,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.SERVER_USAGE_SURVEY,
                        onClick: () => {
                            eg();
                        }
                    }),
                    eh.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({ guildName: null !== (t = null == eo ? void 0 : eo.name) && void 0 !== t ? t : 'this server' }),
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.SERVER_USAGE_SURVEY,
                        onClick: () => {
                            window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == h ? void 0 : h.id, '&guild_id=').concat(null == eo ? void 0 : eo.id), '_blank'), eg();
                        },
                        additionalTrackingProps: { guild_id: null == eo ? void 0 : eo.id },
                        children: eh.Z.Messages.SERVER_USAGE_SURVEY_CTA
                    })
                ]
            });
        case ed.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    eh.Z.Messages.NOTICE_CORRUPT_INSTALLATION,
                    (0, r.jsx)(u.NoticeButtonAnchor, {
                        href: es.Z.getArticleURL(ed.BhN.CORRUPT_INSTALLATION),
                        target: '_blank',
                        children: eh.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
                    })
                ]
            });
        case ed.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.VIDEO_UNSUPPORTED_BROWSER
                    }),
                    eh.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        source: 'Video unsupported browser',
                                        ...t
                                    });
                            });
                        },
                        children: eh.Z.Messages.DOWNLOAD
                    })
                ]
            });
        case ed.kVF.DISPATCH_ERROR:
            if (null == j.metadata) return null;
            let { error: ek } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.DISPATCH_ERROR
                    }),
                    null == ek ? void 0 : ek.displayMessage,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, { ...t });
                            }),
                        children: eh.Z.Messages.LEARN_MORE
                    })
                ]
            });
        case ed.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == j.metadata) return null;
            let { progress: eB, total: eF, name: eZ } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DEFAULT,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                    }),
                    (0, r.jsxs)(b.Z, {
                        justify: b.Z.Justify.CENTER,
                        children: [
                            null != eZ
                                ? eh.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
                                      name: ''.concat(eZ),
                                      progress: ''.concat(eB),
                                      total: ''.concat(eF)
                                  })
                                : eh.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
                                      progress: ''.concat(eB),
                                      total: ''.concat(eF)
                                  }),
                            (0, r.jsx)(u.Spinner, {
                                type: u.Spinner.Type.PULSING_ELLIPSIS,
                                className: ep.ellipsis
                            })
                        ]
                    })
                ]
            });
        case ed.kVF.APPLICATION_TEST_MODE:
            if (null == j.metadata) return null;
            if (null != ei.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(u.Notice, {
                    color: u.NoticeColors.WARNING,
                    children: (0, r.jsxs)(b.Z, {
                        justify: b.Z.Justify.CENTER,
                        align: b.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)('div', { children: eh.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({ applicationName: j.metadata.applicationName }) }),
                            (0, r.jsx)(u.NoticeCloseButton, {
                                onClick: A.mc,
                                noticeType: ed.kVF.APPLICATION_TEST_MODE
                            })
                        ]
                    })
                });
            return (0, r.jsx)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: (0, r.jsxs)(b.Z, {
                    justify: b.Z.Justify.CENTER,
                    align: b.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)('div', { children: eh.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({ applicationName: j.metadata.applicationName }) }),
                        (0, r.jsx)(eu.Z, {
                            dropdownSize: eu.E.DropdownSizes.SMALL,
                            className: ep.testModeSKUSelector,
                            color: eu.E.Colors.WHITE,
                            look: eu.E.Looks.OUTLINED,
                            size: eu.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                T.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: ed.jXE.NOTIFICATION_BAR,
                                        object: ed.qAy.NAVIGATION_LINK
                                    }
                                }),
                            applicationId: j.metadata.applicationId,
                            children: eh.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
                        }),
                        (0, r.jsx)(u.NoticeCloseButton, {
                            onClick: A.mc,
                            noticeType: ed.kVF.APPLICATION_TEST_MODE
                        })
                    ]
                })
            });
        case ed.kVF.OUTBOUND_PROMOTION:
            return (0, r.jsx)(W.Z, {});
        case ed.kVF.VIEWING_ROLES:
            return (0, r.jsx)(V.Z, {});
        case ed.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(u.Notice, {
                color: eO === e_.p9.TIER_1 ? u.NoticeColors.PREMIUM_TIER_1 : eO === e_.p9.TIER_0 ? u.NoticeColors.PREMIUM_TIER_0 : u.NoticeColors.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                        }
                    }),
                    (0, r.jsx)(u.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: ep.premiumIcon
                    }),
                    eO === e_.p9.TIER_1 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({ daysLeft: j.metadata.daysLeft }) : eO === e_.p9.TIER_0 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({ daysLeft: j.metadata.daysLeft }) : eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({ daysLeft: j.metadata.daysLeft }),
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                (0, u.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([n.e('52249'), n.e('72652'), n.e('8016'), n.e('68136'), n.e('27129')]).then(n.bind(n, 561623));
                                    return (t) =>
                                        (0, r.jsx)(e, {
                                            ...t,
                                            daysLeft: j.metadata.daysLeft,
                                            premiumType: eO,
                                            analyticsSource: 'Nag Bar',
                                            premiumSubscription: j.metadata.premiumSubscription
                                        });
                                });
                        },
                        children: eO === e_.p9.TIER_1 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eO === e_.p9.TIER_0 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
                    })
                ]
            });
        case ed.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eV, dismissUntil: eH } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: eA,
                        onClick: () => {
                            eg(eH);
                        }
                    }),
                    eh.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({ daysPastDue: eV }),
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eg(eH), v.Z.open(ed.oAB.SUBSCRIPTIONS);
                        },
                        children: eh.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
                    })
                ]
            });
        case ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                        }
                    }),
                    eh.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(ed.oAB.SUBSCRIPTIONS);
                        },
                        children: eh.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                    })
                ]
            });
        case ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                        }
                    }),
                    eh.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(ed.oAB.SUBSCRIPTIONS);
                        },
                        children: eh.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                    })
                ]
            });
        case ed.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                        }
                    }),
                    eO === e_.p9.TIER_1 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({ daysLeft: j.metadata.daysLeft }) : eO === e_.p9.TIER_0 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({ daysLeft: j.metadata.daysLeft }) : eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({ daysLeft: j.metadata.daysLeft }),
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eg(null === (t = j.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(ed.oAB.SUBSCRIPTIONS);
                        },
                        children: eO === e_.p9.TIER_1 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eO === e_.p9.TIER_0 ? eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : eh.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                    })
                ]
            });
        case ed.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(F.h, {
                buttonText: null !== (a = j.buttonText) && void 0 !== a ? a : eh.Z.Messages.GO_BACK,
                onGoBack: j.callback,
                onDismiss: () => eg(),
                showCloseButton: !0
            });
        case ed.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
            let e = { page: ed.ZY5.IN_APP };
            return (0, r.jsx)(x.Z, {
                guildId: O,
                analyticsLocations: ec,
                analyticsLocation: e
            });
        }
        case ed.kVF.QUARANTINED:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.CUSTOM,
                className: ep.quarantineNotice,
                children: [
                    eh.Z.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE,
                    (0, r.jsx)(u.NoticeButtonAnchor, {
                        href: eE.Z,
                        target: '_blank',
                        children: eh.Z.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
                    }),
                    (0, r.jsx)(u.Anchor, {
                        href: es.Z.getArticleURL(ed.BhN.QUARANTINE),
                        target: '_blank',
                        className: ep.quarantineLearnMoreLink,
                        children: eh.Z.Messages.LEARN_MORE
                    })
                ]
            });
        case ed.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    eh.Z.Messages.BLOCKED_BY_PROXY_NOTICE,
                    (0, r.jsx)(u.NoticeButtonAnchor, {
                        href: ''.concat(ed.yXt.STATUS),
                        children: eh.Z.Messages.LEARN_MORE
                    }),
                    (0, r.jsx)(u.NoticeCloseButton, {
                        onClick: () => eg(),
                        noticeType: ed.kVF.BLOCKED_BY_PROXY
                    })
                ]
            });
        case ed.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: eY, decisionId: ej } = j.metadata;
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != O && (0, w.T9)(O), eg(eY);
                        }
                    }),
                    eh.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE,
                    (0, r.jsx)(u.NoticeButton, {
                        onClick: () => {
                            null != O &&
                                (0, w.UE)(O, ej, () => {
                                    eg(eY), (0, w.T9)(O);
                                });
                        },
                        children: eh.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                    }),
                    null != O
                        ? (0, r.jsx)(u.NoticeButton, {
                              onClick: () => Z.Z.open(O, ed.pNK.GUILD_AUTOMOD, void 0, ed.KsC.AUTOMOD_MENTION_SPAM),
                              children: eh.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                          })
                        : null
                ]
            });
        case ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.BRAND,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            q.hZ(), eg();
                        }
                    }),
                    eh.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE,
                    (0, r.jsx)(u.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                return (t) => (0, r.jsx)(e, { ...t });
                            }),
                                q.hZ(),
                                eg();
                        },
                        children: eh.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
                    })
                ]
            });
        case ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let eW = o()().add(5, 'days').toDate();
            return (0, r.jsx)(K.Z, {
                dismissCurrentNotice: () => {
                    (0, L.EW)(ea.m[ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eg(eW);
                },
                subscriptionTier: e_.Si.TIER_2
            });
        case ed.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(u.Notice, {
                color: u.NoticeColors.DANGER,
                children: [
                    (0, r.jsx)(u.NoticeCloseButton, {
                        noticeType: ed.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null === (e = j.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, z.nE)(j.metadata.streamKey);
                        }
                    }),
                    eh.Z.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE
                ]
            });
        default:
            return null;
    }
});
function ev() {
    let { analyticsLocations: e } = (0, R.ZP)(O.Z.NOTICE);
    return (0, r.jsx)(R.Gt, {
        value: e,
        children: (0, r.jsx)(eA, {})
    });
}
