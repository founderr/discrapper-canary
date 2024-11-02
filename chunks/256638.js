n.d(t, {
    Z: function () {
        return eg;
    },
    c: function () {
        return ep;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(913527),
    r = n.n(s),
    l = n(568611),
    o = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(846027),
    _ = n(893776),
    E = n(117266),
    I = n(37234),
    m = n(254854),
    f = n(195500),
    T = n(287734),
    h = n(205355),
    N = n(558381),
    p = n(223245),
    C = n(491428),
    g = n(401430),
    S = n(230711),
    A = n(726542),
    x = n(100527),
    R = n(906732),
    v = n(812206),
    M = n(391650),
    O = n(600164),
    L = n(605236),
    Z = n(749277),
    b = n(492435),
    P = n(353926),
    D = n(506357),
    j = n(36459),
    U = n(236069),
    y = n(305325),
    B = n(281956),
    k = n(574650),
    G = n(665302),
    F = n(434404),
    w = n(918658),
    V = n(859428),
    H = n(963249),
    Y = n(774276),
    W = n(14335),
    K = n(246965),
    z = n(272008),
    X = n(523255),
    Q = n(496729),
    q = n(852923),
    J = n(592125),
    $ = n(430824),
    ee = n(131951),
    et = n(19780),
    en = n(914010),
    ei = n(594174),
    ea = n(55563),
    es = n(695103),
    er = n(933429),
    el = n(626135),
    eo = n(63063),
    ec = n(72924),
    eu = n(69499),
    ed = n(912193),
    e_ = n(981631),
    eE = n(474936),
    eI = n(610674),
    em = n(65154),
    ef = n(689938),
    eT = n(569252);
let eh = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        ep(), (0, ed.b)();
                    }
                }),
                ef.Z.Messages.NOTICE_NO_INPUT_DETECTED,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: eo.Z.getArticleURL(e_.BhN.NO_INPUT_DETECTED),
                    children: ef.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
                })
            ]
        }),
    eN = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        ep(), (0, ed.b)();
                    }
                }),
                ef.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS,
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, I.jN)(e_.S9g.USER_SETTINGS), S.Z.setSection(e_.oAB.VOICE);
                    },
                    children: ef.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
                })
            ]
        });
function ep(e) {
    m.Z.dismiss(null != e ? { untilAtLeast: r()(e) } : void 0);
}
let eC =
    12633 == n.j
        ? a.memo(function () {
              var e, t, s;
              let m = (0, o.e7)([ei.default], () => ei.default.getCurrentUser()),
                  x = (0, o.e7)([en.Z], () => en.Z.getGuildId()),
                  ed = (0, o.e7)([er.Z], () => er.Z.getNotice()),
                  eC = (0, o.e7)([$.Z], () => $.Z.getGuild(x)),
                  { analyticsLocations: eg } = (0, R.ZP)(),
                  eS = null == ed ? void 0 : ed.type,
                  eA = (0, B.J)(x);
              a.useEffect(() => {
                  null != eS &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), el.default.track(e_.rMx.APP_NOTICE_VIEWED, n);
                      })(eS, x);
              }, [eS, x]),
                  a.useEffect(() => {
                      if (null != ed && ed.type === e_.kVF.SURVEY && null != ed.metadata) {
                          let { metadata: e } = ed,
                              t = P.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, b.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = ed.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, C.g8)(null === (t = ed.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [ed]);
              let ex = (function (e) {
                  let { enabled: t } = (0, Y.ZP)(!0, e !== e_.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                  return t || null == e ? null : er.m[e];
              })(eS);
              if (null == ed) return null;
              if (null != ex)
                  return (0, i.jsx)(Z.A, {
                      dismissibleContent: ex,
                      noticeType: ed.type
                  });
              let eR = null === (e = ed.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (ed.type) {
                  case e_.kVF.LURKING_GUILD:
                      return (0, i.jsx)(V.Z, {});
                  case e_.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(k.Z, {});
                  case e_.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(q.Z, {});
                  case e_.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: ev } = ed.metadata;
                      return (0, i.jsx)(D.Z, { onDismiss: () => ep(ev) });
                  case e_.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eM } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(eM),
                                  noticeType: e_.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              ef.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({ helpCenterLink: eo.Z.getArticleURL(e_.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case e_.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eO } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(eO),
                                  noticeType: e_.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              ef.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({ helpCenterLink: eo.Z.getArticleURL(e_.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case e_.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(eL),
                                  noticeType: e_.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              ef.Z.Messages.MACOS_DEPRECATED_WARNING.format({ helpCenterLink: eo.Z.getArticleURL(e_.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case e_.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.GENERIC
                              }),
                              ed.message,
                              null != ed.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: ed.callback,
                                        noticeType: e_.kVF.GENERIC,
                                        children: ed.buttonText
                                    })
                                  : null
                          ]
                      });
                  case e_.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.LAUNCH_GAME_FAILURE
                              }),
                              ed.message,
                              null != ed.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: ed.callback,
                                        noticeType: e_.kVF.LAUNCH_GAME_FAILURE,
                                        children: ed.buttonText
                                    })
                                  : null
                          ]
                      });
                  case e_.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      f.Z.clearRemoteDisconnectVoiceChannelId(), ep();
                                  },
                                  noticeType: e_.kVF.VOICE_DISABLED
                              }),
                              ef.Z.Messages.NOTICE_CONNECTION_CONFLICT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = et.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && T.default.selectVoiceChannel(e);
                                  },
                                  noticeType: e_.kVF.VOICE_DISABLED,
                                  children: ef.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case e_.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      f.Z.clearLastSessionVoiceChannelId(), ep();
                                  },
                                  noticeType: e_.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              ef.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = et.Z.getLastSessionVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && T.default.selectVoiceChannel(e);
                                  },
                                  noticeType: e_.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: ef.Z.Messages.RECONNECT
                              })
                          ]
                      });
                  case e_.kVF.SPOTIFY_AUTO_PAUSED:
                      let eZ = A.Z.get(e_.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: eT.platformIcon,
                                  src: eZ.icon.whiteSVG
                              }),
                              ef.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => S.Z.open(e_.oAB.VOICE),
                                  noticeType: e_.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: ef.Z.Messages.VOICE_SETTINGS
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: eT.textLinkSmall,
                                  href: eo.Z.getArticleURL(e_.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: ef.Z.Messages.NOTICE_WHATS_THIS
                              })
                          ]
                      });
                  case e_.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              ef.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eA && null != x ? (0, y.hk)(x) : M.j()),
                                  children: ef.Z.Messages.CLAIM_ACCOUNT
                              })
                          ]
                      });
                  case e_.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              ef.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      _.Z.verifyResend(),
                                          u.Z.show({
                                              title: ef.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                              body: ef.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null == m ? void 0 : m.email }),
                                              secondaryConfirmText: ef.Z.Messages.CHANGE_EMAIL,
                                              onConfirmSecondary: M.j
                                          });
                                  },
                                  children: ef.Z.Messages.RESEND_EMAIL_SHORT
                              })
                          ]
                      });
                  case e_.kVF.SCHEDULED_MAINTENANCE:
                      if (null == ed.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z.ackScheduledMaintenance(),
                                  noticeType: e_.kVF.SCHEDULED_MAINTENANCE
                              }),
                              ef.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ed.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(e_.yXt.STATUS, '/incidents/').concat(ed.metadata.id),
                                  children: ef.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case e_.kVF.NO_INPUT_DETECTED:
                      if (!ee.Z.supports(em.AN.LOOPBACK)) return (0, i.jsx)(eh, {});
                      return (0, i.jsx)(eN, {});
                  case e_.kVF.HARDWARE_MUTE:
                      if (null == ed.metadata) return null;
                      let { vendor: eb, model: eP } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              ef.Z.Messages.NOTICE_HARDWARE_MUTE.format({
                                  vendorName: eb.name,
                                  modelName: eP.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), ep();
                                  }
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eP.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: ef.Z.Messages.SUPPORT
                              })
                          ]
                      });
                  case e_.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.STREAMER_MODE
                              }),
                              ef.Z.Messages.NOTICE_STREAMER_MODE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => p.Z.setEnabled(!1),
                                  noticeType: e_.kVF.STREAMER_MODE,
                                  children: ef.Z.Messages.DISABLE
                              })
                          ]
                      });
                  case e_.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      ep();
                                  }
                              }),
                              ef.Z.Messages.NOTICE_H264_DISABLED_SETTINGS,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, I.jN)(e_.S9g.USER_SETTINGS), S.Z.setSection(e_.oAB.VOICE);
                                  },
                                  children: ef.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
                              })
                          ]
                      });
                  case e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == ed.metadata) return null;
                      let { skuId: eD, applicationId: ej } = ed.metadata,
                          eU = ea.Z.get(eD),
                          ey = v.Z.getApplication(ej);
                      if (null == eU || null == ey) return null;
                      let eB = { page: e_.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => E.Z(eU.id),
                                  noticeType: e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              ef.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: ey.name,
                                  skuName: eU.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ec.S)({
                                          applicationId: ey.id,
                                          skuId: eU.id,
                                          openPremiumPaymentModal: () => {
                                              (0, H.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eE.Si.TIER_2,
                                                  analyticsLocations: eg,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: eg,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? e_.IlC.OVERLAY : e_.IlC.APP
                                      }).then(() => E.Z(eU.id)),
                                  children: ef.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
                              })
                          ]
                      });
                  case e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == ed.metadata) return null;
                      let { skuId: e, applicationId: t } = ed.metadata,
                          n = ea.Z.get(e),
                          a = v.Z.getApplication(t);
                      if (null == n || null == a) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              ef.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
                                  applicationName: a.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(l.rU, {
                                      onClick: () => ep(),
                                      to: {
                                          pathname: e_.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: ef.Z.Messages.LEARN_MORE
                                  })
                              })
                          ]
                      });
                  }
                  case e_.kVF.SURVEY: {
                      let e = ed.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: a, url: s } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.SURVEY,
                                  onClick: () => {
                                      (0, C.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(s, '_blank'), (0, C.hZ)(t, !1);
                                  },
                                  children: a
                              })
                          ]
                      });
                  }
                  case e_.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      ep();
                                  }
                              }),
                              ef.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({ guildName: null !== (t = null == eC ? void 0 : eC.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == m ? void 0 : m.id, '&guild_id=').concat(null == eC ? void 0 : eC.id), '_blank'), ep();
                                  },
                                  additionalTrackingProps: { guild_id: null == eC ? void 0 : eC.id },
                                  children: ef.Z.Messages.SERVER_USAGE_SURVEY_CTA
                              })
                          ]
                      });
                  case e_.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              ef.Z.Messages.NOTICE_CORRUPT_INSTALLATION,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eo.Z.getArticleURL(e_.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: ef.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
                              })
                          ]
                      });
                  case e_.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              ef.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  source: 'Video unsupported browser',
                                                  ...t
                                              });
                                      });
                                  },
                                  children: ef.Z.Messages.DOWNLOAD
                              })
                          ]
                      });
                  case e_.kVF.DISPATCH_ERROR:
                      if (null == ed.metadata) return null;
                      let { error: ek } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.DISPATCH_ERROR
                              }),
                              null == ek ? void 0 : ek.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: ef.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case e_.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == ed.metadata) return null;
                      let { progress: eG, total: eF, name: ew } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(O.Z, {
                                  justify: O.Z.Justify.CENTER,
                                  children: [
                                      null != ew
                                          ? ef.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
                                                name: ''.concat(ew),
                                                progress: eG,
                                                total: eF
                                            })
                                          : ef.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
                                                progress: eG,
                                                total: eF
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: eT.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case e_.kVF.APPLICATION_TEST_MODE:
                      if (null == ed.metadata) return null;
                      if (null != es.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(O.Z, {
                                  justify: O.Z.Justify.CENTER,
                                  align: O.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: ef.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({ applicationName: ed.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: g.mc,
                                          noticeType: e_.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: (0, i.jsxs)(O.Z, {
                              justify: O.Z.Justify.CENTER,
                              align: O.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: ef.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({ applicationName: ed.metadata.applicationName }) }),
                                  (0, i.jsx)(eu.Z, {
                                      dropdownSize: eu.E.DropdownSizes.SMALL,
                                      className: eT.testModeSKUSelector,
                                      color: eu.E.Colors.WHITE,
                                      look: eu.E.Looks.OUTLINED,
                                      size: eu.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          N.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: e_.jXE.NOTIFICATION_BAR,
                                                  object: e_.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: ed.metadata.applicationId,
                                      children: ef.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: g.mc,
                                      noticeType: e_.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case e_.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(W.Z, {});
                  case e_.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(w.Z, {});
                  case e_.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eR === eE.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eR === eE.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eT.premiumIcon
                              }),
                              eR === eE.p9.TIER_1 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : eR === eE.p9.TIER_0 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('87446')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: ed.metadata.daysLeft,
                                                      premiumType: eR,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: ed.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eR === eE.p9.TIER_1 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eR === eE.p9.TIER_0 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eV, dismissUntil: eH } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eS,
                                  onClick: () => {
                                      ep(eH);
                                  }
                              }),
                              ef.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({ daysPastDue: eV }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      ep(eH), S.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ef.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ef.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), S.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ef.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ef.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), S.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ef.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eR === eE.p9.TIER_1 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : eR === eE.p9.TIER_0 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }) : ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({ daysLeft: ed.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), S.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eR === eE.p9.TIER_1 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eR === eE.p9.TIER_0 ? ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : ef.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                              })
                          ]
                      });
                  case e_.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(G.h, {
                          buttonText: null !== (s = ed.buttonText) && void 0 !== s ? s : ef.Z.Messages.GO_BACK,
                          onGoBack: ed.callback,
                          onDismiss: () => ep(),
                          showCloseButton: !0
                      });
                  case e_.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: e_.ZY5.IN_APP };
                      return (0, i.jsx)(U.Z, {
                          guildId: x,
                          analyticsLocations: eg,
                          analyticsLocation: e
                      });
                  }
                  case e_.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: eT.quarantineNotice,
                          children: [
                              ef.Z.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eI.Z,
                                  target: '_blank',
                                  children: ef.Z.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: eo.Z.getArticleURL(e_.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eT.quarantineLearnMoreLink,
                                  children: ef.Z.Messages.LEARN_MORE
                              })
                          ]
                      });
                  case e_.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              ef.Z.Messages.BLOCKED_BY_PROXY_NOTICE,
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(e_.yXt.STATUS),
                                  children: ef.Z.Messages.LEARN_MORE
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ep(),
                                  noticeType: e_.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case e_.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eY, decisionId: eW } = ed.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != x && (0, j.T9)(x), ep(eY);
                                  }
                              }),
                              ef.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE,
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != x &&
                                          (0, j.UE)(x, eW, () => {
                                              ep(eY), (0, j.T9)(x);
                                          });
                                  },
                                  children: ef.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                              }),
                              null != x
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => F.Z.open(x, e_.pNK.GUILD_AUTOMOD, void 0, e_.KsC.AUTOMOD_MENTION_SPAM),
                                        children: ef.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                                    })
                                  : null
                          ]
                      });
                  case e_.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      X.hZ(), ep();
                                  }
                              }),
                              ef.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: e_.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          X.hZ(),
                                          ep();
                                  },
                                  children: ef.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eK = r()().add(5, 'days').toDate();
                      return (0, i.jsx)(K.Z, {
                          dismissCurrentNotice: () => {
                              (0, L.EW)(er.m[e_.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ep(eK);
                          },
                          subscriptionTier: eE.Si.TIER_2
                      });
                  case e_.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: e_.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = ed.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, z.nE)(ed.metadata.streamKey);
                                  }
                              }),
                              ef.Z.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE
                          ]
                      });
                  case e_.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      var e;
                                      ep(null === (e = ed.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: e_.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              ef.Z.Messages.BLOCK_USER_NAGBAR_TITLE,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      var e;
                                      (0, Q.Z)(), ep(null === (e = ed.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: e_.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: ef.Z.Messages.BLOCK_USER_NAGBAR_CTA
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eg() {
    let { analyticsLocations: e } = (0, R.ZP)(x.Z.NOTICE);
    return (0, i.jsx)(R.Gt, {
        value: e,
        children: (0, i.jsx)(eC, {})
    });
}
