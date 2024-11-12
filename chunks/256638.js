n.d(t, {
    Z: function () {
        return ev;
    },
    c: function () {
        return eI;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(568611),
    s = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(846027),
    m = n(893776),
    h = n(117266),
    f = n(37234),
    p = n(254854),
    _ = n(195500),
    g = n(287734),
    E = n(205355),
    C = n(558381),
    I = n(223245),
    x = n(491428),
    v = n(401430),
    N = n(230711),
    T = n(726542),
    S = n(100527),
    A = n(906732),
    b = n(812206),
    j = n(391650),
    Z = n(600164),
    R = n(605236),
    L = n(749277),
    P = n(492435),
    y = n(353926),
    O = n(506357),
    M = n(36459),
    k = n(236069),
    D = n(305325),
    B = n(281956),
    U = n(574650),
    w = n(665302),
    F = n(434404),
    G = n(918658),
    V = n(859428),
    H = n(963249),
    z = n(774276),
    W = n(14335),
    K = n(246965),
    Y = n(272008),
    X = n(523255),
    Q = n(496729),
    q = n(852923),
    J = n(592125),
    $ = n(430824),
    ee = n(131951),
    et = n(19780),
    en = n(914010),
    ei = n(594174),
    er = n(55563),
    el = n(695103),
    ea = n(933429),
    eo = n(626135),
    es = n(63063),
    ec = n(72924),
    ed = n(69499),
    eu = n(912193),
    em = n(981631),
    eh = n(474936),
    ef = n(610674),
    ep = n(65154),
    e_ = n(388032),
    eg = n(569252);
let eE = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eI(), (0, eu.b)();
                    }
                }),
                e_.intl.string(e_.t.nCO9bG),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: es.Z.getArticleURL(em.BhN.NO_INPUT_DETECTED),
                    children: e_.intl.string(e_.t.RYKKo6)
                })
            ]
        }),
    eC = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eI(), (0, eu.b)();
                    }
                }),
                e_.intl.string(e_.t.dNAJ19),
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, f.jN)(em.S9g.USER_SETTINGS), N.Z.setSection(em.oAB.VOICE);
                    },
                    children: e_.intl.string(e_.t.I6YlBw)
                })
            ]
        });
function eI(e) {
    p.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let ex =
    12633 == n.j
        ? r.memo(function () {
              var e, t, l;
              let p = (0, s.e7)([ei.default], () => ei.default.getCurrentUser()),
                  S = (0, s.e7)([en.Z], () => en.Z.getGuildId()),
                  eu = (0, s.e7)([ea.Z], () => ea.Z.getNotice()),
                  ex = (0, s.e7)([$.Z], () => $.Z.getGuild(S)),
                  { analyticsLocations: ev } = (0, A.ZP)(),
                  eN = null == eu ? void 0 : eu.type,
                  eT = (0, B.J)(S);
              r.useEffect(() => {
                  null != eN &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), eo.default.track(em.rMx.APP_NOTICE_VIEWED, n);
                      })(eN, S);
              }, [eN, S]),
                  r.useEffect(() => {
                      if (null != eu && eu.type === em.kVF.SURVEY && null != eu.metadata) {
                          let { metadata: e } = eu,
                              t = y.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, P.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = eu.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, x.g8)(null === (t = eu.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [eu]);
              let eS = (function (e) {
                  let { enabled: t } = (0, z.ZP)(!0, e !== em.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                  return t || null == e ? null : ea.m[e];
              })(eN);
              if (null == eu) return null;
              if (null != eS)
                  return (0, i.jsx)(L.A, {
                      dismissibleContent: eS,
                      noticeType: eu.type
                  });
              let eA = null === (e = eu.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (eu.type) {
                  case em.kVF.LURKING_GUILD:
                      return (0, i.jsx)(V.Z, {});
                  case em.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(U.Z, {});
                  case em.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(q.Z, {});
                  case em.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eb } = eu.metadata;
                      return (0, i.jsx)(O.Z, { onDismiss: () => eI(eb) });
                  case em.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ej } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(ej),
                                  noticeType: em.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              e_.intl.format(e_.t['08KQ1N'], { helpCenterLink: es.Z.getArticleURL(em.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case em.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(eZ),
                                  noticeType: em.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              e_.intl.format(e_.t['8Je+dX'], { helpCenterLink: es.Z.getArticleURL(em.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case em.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(eR),
                                  noticeType: em.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              e_.intl.format(e_.t.q8VPLi, { helpCenterLink: es.Z.getArticleURL(em.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case em.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.GENERIC
                              }),
                              eu.message,
                              null != eu.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: eu.callback,
                                        noticeType: em.kVF.GENERIC,
                                        children: eu.buttonText
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.LAUNCH_GAME_FAILURE
                              }),
                              eu.message,
                              null != eu.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: eu.callback,
                                        noticeType: em.kVF.LAUNCH_GAME_FAILURE,
                                        children: eu.buttonText
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      _.Z.clearRemoteDisconnectVoiceChannelId(), eI();
                                  },
                                  noticeType: em.kVF.VOICE_DISABLED
                              }),
                              e_.intl.string(e_.t.bOQ3jY),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = et.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                                  },
                                  noticeType: em.kVF.VOICE_DISABLED,
                                  children: e_.intl.string(e_.t.vD60Pj)
                              })
                          ]
                      });
                  case em.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      _.Z.clearLastSessionVoiceChannelId(), eI();
                                  },
                                  noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              e_.intl.string(e_.t.jY2lUF),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = et.Z.getLastSessionVoiceChannelId();
                                      null != e && null != J.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                                  },
                                  noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: e_.intl.string(e_.t.vD60Pj)
                              })
                          ]
                      });
                  case em.kVF.SPOTIFY_AUTO_PAUSED:
                      let eL = T.Z.get(em.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: eg.platformIcon,
                                  src: eL.icon.whiteSVG
                              }),
                              e_.intl.string(e_.t['D8Cp7+']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => N.Z.open(em.oAB.VOICE),
                                  noticeType: em.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: e_.intl.string(e_.t.NiTd0d)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: eg.textLinkSmall,
                                  href: es.Z.getArticleURL(em.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: e_.intl.string(e_.t.CiqAIS)
                              })
                          ]
                      });
                  case em.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              e_.intl.string(e_.t['f+Zaoq']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eT && null != S ? (0, D.hk)(S) : j.j()),
                                  children: e_.intl.string(e_.t.fiNVio)
                              })
                          ]
                      });
                  case em.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              e_.intl.string(e_.t['3sWbf3']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      m.Z.verifyResend(),
                                          d.Z.show({
                                              title: e_.intl.string(e_.t.LykQYm),
                                              body: e_.intl.format(e_.t.azKEPz, { email: null == p ? void 0 : p.email }),
                                              secondaryConfirmText: e_.intl.string(e_.t.oP5zGB),
                                              onConfirmSecondary: j.j
                                          });
                                  },
                                  children: e_.intl.string(e_.t.WnX4Jy)
                              })
                          ]
                      });
                  case em.kVF.SCHEDULED_MAINTENANCE:
                      if (null == eu.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => E.Z.ackScheduledMaintenance(),
                                  noticeType: em.kVF.SCHEDULED_MAINTENANCE
                              }),
                              e_.intl.format(e_.t.yb96S0, eu.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(em.yXt.STATUS, '/incidents/').concat(eu.metadata.id),
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.NO_INPUT_DETECTED:
                      if (!ee.Z.supports(ep.AN.LOOPBACK)) return (0, i.jsx)(eE, {});
                      return (0, i.jsx)(eC, {});
                  case em.kVF.HARDWARE_MUTE:
                      if (null == eu.metadata) return null;
                      let { vendor: eP, model: ey } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              e_.intl.format(e_.t.qoDex8, {
                                  vendorName: eP.name,
                                  modelName: ey.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eI();
                                  }
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ey.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: e_.intl.string(e_.t['Yl/Rio'])
                              })
                          ]
                      });
                  case em.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.STREAMER_MODE
                              }),
                              e_.intl.string(e_.t.iEgBXl),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => I.Z.setEnabled(!1),
                                  noticeType: em.kVF.STREAMER_MODE,
                                  children: e_.intl.string(e_.t.R9GHyc)
                              })
                          ]
                      });
                  case em.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      eI();
                                  }
                              }),
                              e_.intl.string(e_.t.HcErZW),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, f.jN)(em.S9g.USER_SETTINGS), N.Z.setSection(em.oAB.VOICE);
                                  },
                                  children: e_.intl.string(e_.t['51hI/v'])
                              })
                          ]
                      });
                  case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == eu.metadata) return null;
                      let { skuId: eO, applicationId: eM } = eu.metadata,
                          ek = er.Z.get(eO),
                          eD = b.Z.getApplication(eM);
                      if (null == ek || null == eD) return null;
                      let eB = { page: em.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z(ek.id),
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eg.premiumIcon
                              }),
                              e_.intl.format(e_.t['g3MU//'], {
                                  applicationName: eD.name,
                                  skuName: ek.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ec.S)({
                                          applicationId: eD.id,
                                          skuId: ek.id,
                                          openPremiumPaymentModal: () => {
                                              (0, H.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eh.Si.TIER_2,
                                                  analyticsLocations: ev,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: ev,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? em.IlC.OVERLAY : em.IlC.APP
                                      }).then(() => h.Z(ek.id)),
                                  children: e_.intl.string(e_.t.KEwPY2)
                              })
                          ]
                      });
                  case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == eu.metadata) return null;
                      let { skuId: e, applicationId: t } = eu.metadata,
                          n = er.Z.get(e),
                          r = b.Z.getApplication(t);
                      if (null == n || null == r) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eg.premiumIcon
                              }),
                              e_.intl.format(e_.t.LquIKC, {
                                  applicationName: r.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(o.rU, {
                                      onClick: () => eI(),
                                      to: {
                                          pathname: em.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: e_.intl.string(e_.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case em.kVF.SURVEY: {
                      let e = eu.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: r, url: l } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.SURVEY,
                                  onClick: () => {
                                      (0, x.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, '_blank'), (0, x.hZ)(t, !1);
                                  },
                                  children: r
                              })
                          ]
                      });
                  }
                  case em.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eI();
                                  }
                              }),
                              e_.intl.format(e_.t.RomvGB, { guildName: null !== (t = null == ex ? void 0 : ex.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == p ? void 0 : p.id, '&guild_id=').concat(null == ex ? void 0 : ex.id), '_blank'), eI();
                                  },
                                  additionalTrackingProps: { guild_id: null == ex ? void 0 : ex.id },
                                  children: e_.intl.string(e_.t['4RQks7'])
                              })
                          ]
                      });
                  case em.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              e_.intl.string(e_.t.ugxmk5),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: es.Z.getArticleURL(em.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: e_.intl.string(e_.t['6ik4Xl'])
                              })
                          ]
                      });
                  case em.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              e_.intl.string(e_.t.wVjKGh),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER,
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
                                  children: e_.intl.string(e_.t['1WjMbG'])
                              })
                          ]
                      });
                  case em.kVF.DISPATCH_ERROR:
                      if (null == eu.metadata) return null;
                      let { error: eU } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.DISPATCH_ERROR
                              }),
                              null == eU ? void 0 : eU.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == eu.metadata) return null;
                      let { progress: ew, total: eF, name: eG } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(Z.Z, {
                                  justify: Z.Z.Justify.CENTER,
                                  children: [
                                      null != eG
                                          ? e_.intl.formatToPlainString(e_.t['pHj+z8'], {
                                                name: ''.concat(eG),
                                                progress: ew,
                                                total: eF
                                            })
                                          : e_.intl.formatToPlainString(e_.t['lHZn+P'], {
                                                progress: ew,
                                                total: eF
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: eg.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case em.kVF.APPLICATION_TEST_MODE:
                      if (null == eu.metadata) return null;
                      if (null != el.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(Z.Z, {
                                  justify: Z.Z.Justify.CENTER,
                                  align: Z.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: e_.intl.format(e_.t['1qxVe3'], { applicationName: eu.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: v.mc,
                                          noticeType: em.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: (0, i.jsxs)(Z.Z, {
                              justify: Z.Z.Justify.CENTER,
                              align: Z.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: e_.intl.format(e_.t.Fv5HrK, { applicationName: eu.metadata.applicationName }) }),
                                  (0, i.jsx)(ed.Z, {
                                      dropdownSize: ed.E.DropdownSizes.SMALL,
                                      className: eg.testModeSKUSelector,
                                      color: ed.E.Colors.WHITE,
                                      look: ed.E.Looks.OUTLINED,
                                      size: ed.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          C.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: em.jXE.NOTIFICATION_BAR,
                                                  object: em.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: eu.metadata.applicationId,
                                      children: e_.intl.string(e_.t.Q5ZgpK)
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: v.mc,
                                      noticeType: em.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case em.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(W.Z, {});
                  case em.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(G.Z, {});
                  case em.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eA === eh.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eA === eh.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eg.premiumIcon
                              }),
                              eA === eh.p9.TIER_1 ? e_.intl.formatToPlainString(e_.t.fXv4ws, { daysLeft: eu.metadata.daysLeft }) : eA === eh.p9.TIER_0 ? e_.intl.formatToPlainString(e_.t.ZOHZMj, { daysLeft: eu.metadata.daysLeft }) : e_.intl.formatToPlainString(e_.t.outyHh, { daysLeft: eu.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('87446')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: eu.metadata.daysLeft,
                                                      premiumType: eA,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: eu.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eA === eh.p9.TIER_1 ? e_.intl.string(e_.t.BkbUPD) : eA === eh.p9.TIER_0 ? e_.intl.string(e_.t.Px978f) : e_.intl.string(e_.t.LW5tCA)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eV, dismissUntil: eH } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eN,
                                  onClick: () => {
                                      eI(eH);
                                  }
                              }),
                              e_.intl.format(e_.t.zxU0Ki, { daysPastDue: eV }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eI(eH), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.intl.string(e_.t.q8rxeX)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              e_.intl.string(e_.t.LlZaoa),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.intl.string(e_.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              e_.intl.string(e_.t['30YfCg']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.intl.string(e_.t.U5pKWF)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eA === eh.p9.TIER_1 ? e_.intl.formatToPlainString(e_.t.b6QUvb, { daysLeft: eu.metadata.daysLeft }) : eA === eh.p9.TIER_0 ? e_.intl.formatToPlainString(e_.t['tURZ/P'], { daysLeft: eu.metadata.daysLeft }) : e_.intl.formatToPlainString(e_.t.AyC74O, { daysLeft: eu.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = eu.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eA === eh.p9.TIER_1 ? e_.intl.string(e_.t.lboF5O) : eA === eh.p9.TIER_0 ? e_.intl.string(e_.t['4UPwOj']) : e_.intl.string(e_.t['P/VvGR'])
                              })
                          ]
                      });
                  case em.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(w.h, {
                          buttonText: null !== (l = eu.buttonText) && void 0 !== l ? l : e_.intl.string(e_.t['/g10LC']),
                          onGoBack: eu.callback,
                          onDismiss: () => eI(),
                          showCloseButton: !0
                      });
                  case em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: em.ZY5.IN_APP };
                      return (0, i.jsx)(k.Z, {
                          guildId: S,
                          analyticsLocations: ev,
                          analyticsLocation: e
                      });
                  }
                  case em.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: eg.quarantineNotice,
                          children: [
                              e_.intl.string(e_.t.DVFJYW),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ef.Z,
                                  target: '_blank',
                                  children: e_.intl.string(e_.t.kvHdFB)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: es.Z.getArticleURL(em.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eg.quarantineLearnMoreLink,
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              e_.intl.string(e_.t.Ugijzs),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(em.yXt.STATUS),
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eI(),
                                  noticeType: em.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: ez, decisionId: eW } = eu.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != S && (0, M.T9)(S), eI(ez);
                                  }
                              }),
                              e_.intl.string(e_.t.B8ruyc),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != S &&
                                          (0, M.UE)(S, eW, () => {
                                              eI(ez), (0, M.T9)(S);
                                          });
                                  },
                                  children: e_.intl.string(e_.t.oX14Eh)
                              }),
                              null != S
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => F.Z.open(S, em.pNK.GUILD_AUTOMOD, void 0, em.KsC.AUTOMOD_MENTION_SPAM),
                                        children: e_.intl.string(e_.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      X.hZ(), eI();
                                  }
                              }),
                              e_.intl.string(e_.t.I1nKfH),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          X.hZ(),
                                          eI();
                                  },
                                  children: e_.intl.string(e_.t.l5xYnJ)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eK = a()().add(5, 'days').toDate();
                      return (0, i.jsx)(K.Z, {
                          dismissCurrentNotice: () => {
                              (0, R.EW)(ea.m[em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eI(eK);
                          },
                          subscriptionTier: eh.Si.TIER_2
                      });
                  case em.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: em.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = eu.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, Y.nE)(eu.metadata.streamKey);
                                  }
                              }),
                              e_.intl.string(e_.t.rOx44u)
                          ]
                      });
                  case em.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      var e;
                                      eI(null === (e = eu.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              e_.intl.string(e_.t['0klLS0']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      var e;
                                      (0, Q.Z)(), eI(null === (e = eu.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: e_.intl.string(e_.t.e4y2VF)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function ev() {
    let { analyticsLocations: e } = (0, A.ZP)(S.Z.NOTICE);
    return (0, i.jsx)(A.Gt, {
        value: e,
        children: (0, i.jsx)(ex, {})
    });
}
