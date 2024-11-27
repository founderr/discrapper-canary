n.d(t, {
    Z: function () {
        return ev;
    },
    c: function () {
        return ex;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(568611),
    s = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(846027),
    m = n(893776),
    h = n(117266),
    f = n(37234),
    p = n(254854),
    g = n(195500),
    _ = n(287734),
    E = n(205355),
    C = n(558381),
    I = n(223245),
    x = n(491428),
    N = n(401430),
    v = n(230711),
    T = n(726542),
    S = n(100527),
    A = n(906732),
    b = n(812206),
    j = n(391650),
    Z = n(600164),
    R = n(605236),
    P = n(749277),
    L = n(131130),
    y = n(492435),
    O = n(353926),
    M = n(506357),
    k = n(36459),
    D = n(236069),
    B = n(305325),
    U = n(281956),
    w = n(574650),
    F = n(665302),
    G = n(434404),
    V = n(918658),
    H = n(859428),
    z = n(963249),
    W = n(774276),
    K = n(14335),
    Y = n(246965),
    X = n(272008),
    Q = n(523255),
    q = n(496729),
    J = n(852923),
    $ = n(592125),
    ee = n(430824),
    et = n(131951),
    en = n(19780),
    ei = n(914010),
    er = n(594174),
    el = n(55563),
    ea = n(695103),
    eo = n(933429),
    es = n(626135),
    ec = n(63063),
    eu = n(72924),
    ed = n(69499),
    em = n(912193),
    eh = n(981631),
    ef = n(474936),
    ep = n(610674),
    eg = n(65154),
    e_ = n(388032),
    eE = n(230278);
let eC = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        ex(), (0, em.b)();
                    }
                }),
                e_.intl.string(e_.t.nCO9bG),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: ec.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: e_.intl.string(e_.t.RYKKo6)
                })
            ]
        }),
    eI = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        ex(), (0, em.b)();
                    }
                }),
                e_.intl.string(e_.t.dNAJ19),
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, f.jN)(eh.S9g.USER_SETTINGS), v.Z.setSection(eh.oAB.VOICE);
                    },
                    children: e_.intl.string(e_.t.I6YlBw)
                })
            ]
        });
function ex(e) {
    p.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eN =
    12633 == n.j
        ? r.memo(function () {
              var e, t, l;
              let p = (0, s.e7)([er.default], () => er.default.getCurrentUser()),
                  S = (0, s.e7)([ei.Z], () => ei.Z.getGuildId()),
                  em = (0, s.e7)([eo.ZP], () => eo.ZP.getNotice()),
                  eN = (0, s.e7)([ee.Z], () => ee.Z.getGuild(S)),
                  { analyticsLocations: ev } = (0, A.ZP)(),
                  eT = null == em ? void 0 : em.type,
                  eS = (0, U.J)(S);
              r.useEffect(() => {
                  null != eT &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), es.default.track(eh.rMx.APP_NOTICE_VIEWED, n);
                      })(eT, S);
              }, [eT, S]),
                  r.useEffect(() => {
                      if (null != em && em.type === eh.kVF.SURVEY && null != em.metadata) {
                          let { metadata: e } = em,
                              t = O.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, y.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = em.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, x.g8)(null === (t = em.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [em]);
              let eA = null != eT ? eo.o[eT] : null,
                  eb = (function (e) {
                      let { enabled: t } = (0, W.ZP)(!0, e !== eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                      return t || null == e ? null : eo.m9[e];
                  })(eT);
              if (null == em) return null;
              if (null != eA)
                  return (0, i.jsx)(L.q, {
                      dismissibleContent: eA,
                      noticeType: em.type
                  });
              if (null != eb)
                  return (0, i.jsx)(P.A, {
                      dismissibleContent: eb,
                      noticeType: em.type
                  });
              let ej = null === (e = em.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (em.type) {
                  case eh.kVF.LURKING_GUILD:
                      return (0, i.jsx)(H.Z, {});
                  case eh.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(w.Z, {});
                  case eh.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(J.Z, {});
                  case eh.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eZ } = em.metadata;
                      return (0, i.jsx)(M.Z, { onDismiss: () => ex(eZ) });
                  case eh.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(eR),
                                  noticeType: eh.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              e_.intl.format(e_.t['08KQ1N'], { helpCenterLink: ec.Z.getArticleURL(eh.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eP } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(eP),
                                  noticeType: eh.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              e_.intl.format(e_.t['8Je+dX'], { helpCenterLink: ec.Z.getArticleURL(eh.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(eL),
                                  noticeType: eh.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                              }),
                              e_.intl.format(e_.t.q8VPLi, { helpCenterLink: ec.Z.getArticleURL(eh.BhN.MACOS_17_18_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.GENERIC
                              }),
                              em.message,
                              null != em.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: em.callback,
                                        noticeType: eh.kVF.GENERIC,
                                        children: em.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.LAUNCH_GAME_FAILURE
                              }),
                              em.message,
                              null != em.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: em.callback,
                                        noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                                        children: em.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), ex();
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED
                              }),
                              e_.intl.string(e_.t.bOQ3jY),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = en.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                                  children: e_.intl.string(e_.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), ex();
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              e_.intl.string(e_.t.jY2lUF),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = en.Z.getLastSessionVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: e_.intl.string(e_.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.SPOTIFY_AUTO_PAUSED:
                      let ey = T.Z.get(eh.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: eE.platformIcon,
                                  src: ey.icon.whiteSVG
                              }),
                              e_.intl.string(e_.t['D8Cp7+']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => v.Z.open(eh.oAB.VOICE),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: e_.intl.string(e_.t.NiTd0d)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: eE.textLinkSmall,
                                  href: ec.Z.getArticleURL(eh.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: e_.intl.string(e_.t.CiqAIS)
                              })
                          ]
                      });
                  case eh.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              e_.intl.string(e_.t['f+Zaoq']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eS && null != S ? (0, B.hk)(S) : j.j()),
                                  children: e_.intl.string(e_.t.fiNVio)
                              })
                          ]
                      });
                  case eh.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              e_.intl.string(e_.t['3sWbf3']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      m.Z.verifyResend(),
                                          u.Z.show({
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
                  case eh.kVF.SCHEDULED_MAINTENANCE:
                      if (null == em.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => E.Z.ackScheduledMaintenance(),
                                  noticeType: eh.kVF.SCHEDULED_MAINTENANCE
                              }),
                              e_.intl.format(e_.t.yb96S0, em.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eh.yXt.STATUS, '/incidents/').concat(em.metadata.id),
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.NO_INPUT_DETECTED:
                      if (!et.Z.supports(eg.AN.LOOPBACK)) return (0, i.jsx)(eC, {});
                      return (0, i.jsx)(eI, {});
                  case eh.kVF.HARDWARE_MUTE:
                      if (null == em.metadata) return null;
                      let { vendor: eO, model: eM } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              e_.intl.format(e_.t.qoDex8, {
                                  vendorName: eO.name,
                                  modelName: eM.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), ex();
                                  }
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eM.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: e_.intl.string(e_.t['Yl/Rio'])
                              })
                          ]
                      });
                  case eh.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.STREAMER_MODE
                              }),
                              e_.intl.string(e_.t.iEgBXl),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => I.Z.setEnabled(!1),
                                  noticeType: eh.kVF.STREAMER_MODE,
                                  children: e_.intl.string(e_.t.R9GHyc)
                              })
                          ]
                      });
                  case eh.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      ex();
                                  }
                              }),
                              e_.intl.string(e_.t.HcErZW),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, f.jN)(eh.S9g.USER_SETTINGS), v.Z.setSection(eh.oAB.VOICE);
                                  },
                                  children: e_.intl.string(e_.t['51hI/v'])
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == em.metadata) return null;
                      let { skuId: ek, applicationId: eD } = em.metadata,
                          eB = el.Z.get(ek),
                          eU = b.Z.getApplication(eD);
                      if (null == eB || null == eU) return null;
                      let ew = { page: eh.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z(eB.id),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              e_.intl.format(e_.t['g3MU//'], {
                                  applicationName: eU.name,
                                  skuName: eB.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, eu.S)({
                                          applicationId: eU.id,
                                          skuId: eB.id,
                                          openPremiumPaymentModal: () => {
                                              (0, z.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: ef.Si.TIER_2,
                                                  analyticsLocations: ev,
                                                  analyticsObject: ew
                                              });
                                          },
                                          analyticsLocations: ev,
                                          analyticsLocationObject: ew,
                                          context: __OVERLAY__ ? eh.IlC.OVERLAY : eh.IlC.APP
                                      }).then(() => h.Z(eB.id)),
                                  children: e_.intl.string(e_.t.KEwPY2)
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == em.metadata) return null;
                      let { skuId: e, applicationId: t } = em.metadata,
                          n = el.Z.get(e),
                          r = b.Z.getApplication(t);
                      if (null == n || null == r) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              e_.intl.format(e_.t.LquIKC, {
                                  applicationName: r.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(o.rU, {
                                      onClick: () => ex(),
                                      to: {
                                          pathname: eh.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: e_.intl.string(e_.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case eh.kVF.SURVEY: {
                      let e = em.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: r, url: l } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      (0, x.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, '_blank'), (0, x.hZ)(t, !1);
                                  },
                                  children: r
                              })
                          ]
                      });
                  }
                  case eh.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      ex();
                                  }
                              }),
                              e_.intl.format(e_.t.RomvGB, { guildName: null !== (t = null == eN ? void 0 : eN.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == p ? void 0 : p.id, '&guild_id=').concat(null == eN ? void 0 : eN.id), '_blank'), ex();
                                  },
                                  additionalTrackingProps: { guild_id: null == eN ? void 0 : eN.id },
                                  children: e_.intl.string(e_.t['4RQks7'])
                              })
                          ]
                      });
                  case eh.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              e_.intl.string(e_.t.ugxmk5),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ec.Z.getArticleURL(eh.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: e_.intl.string(e_.t['6ik4Xl'])
                              })
                          ]
                      });
                  case eh.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              e_.intl.string(e_.t.wVjKGh),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
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
                  case eh.kVF.DISPATCH_ERROR:
                      if (null == em.metadata) return null;
                      let { error: eF } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.DISPATCH_ERROR
                              }),
                              null == eF ? void 0 : eF.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == em.metadata) return null;
                      let { progress: eG, total: eV, name: eH } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(Z.Z, {
                                  justify: Z.Z.Justify.CENTER,
                                  children: [
                                      null != eH
                                          ? e_.intl.formatToPlainString(e_.t['pHj+z8'], {
                                                name: ''.concat(eH),
                                                progress: eG,
                                                total: eV
                                            })
                                          : e_.intl.formatToPlainString(e_.t['lHZn+P'], {
                                                progress: eG,
                                                total: eV
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: eE.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eh.kVF.APPLICATION_TEST_MODE:
                      if (null == em.metadata) return null;
                      if (null != ea.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(Z.Z, {
                                  justify: Z.Z.Justify.CENTER,
                                  align: Z.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: e_.intl.format(e_.t['1qxVe3'], { applicationName: em.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: N.mc,
                                          noticeType: eh.kVF.APPLICATION_TEST_MODE
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
                                  (0, i.jsx)('div', { children: e_.intl.format(e_.t.Fv5HrK, { applicationName: em.metadata.applicationName }) }),
                                  (0, i.jsx)(ed.Z, {
                                      dropdownSize: ed.E.DropdownSizes.SMALL,
                                      className: eE.testModeSKUSelector,
                                      color: ed.E.Colors.WHITE,
                                      look: ed.E.Looks.OUTLINED,
                                      size: ed.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          C.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eh.jXE.NOTIFICATION_BAR,
                                                  object: eh.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: em.metadata.applicationId,
                                      children: e_.intl.string(e_.t.Q5ZgpK)
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: N.mc,
                                      noticeType: eh.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eh.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(K.Z, {});
                  case eh.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(V.Z, {});
                  case eh.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: ej === ef.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : ej === ef.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              ej === ef.p9.TIER_1 ? e_.intl.formatToPlainString(e_.t.fXv4ws, { daysLeft: em.metadata.daysLeft }) : ej === ef.p9.TIER_0 ? e_.intl.formatToPlainString(e_.t.ZOHZMj, { daysLeft: em.metadata.daysLeft }) : e_.intl.formatToPlainString(e_.t.outyHh, { daysLeft: em.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('9236')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: em.metadata.daysLeft,
                                                      premiumType: ej,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: em.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: ej === ef.p9.TIER_1 ? e_.intl.string(e_.t.BkbUPD) : ej === ef.p9.TIER_0 ? e_.intl.string(e_.t.Px978f) : e_.intl.string(e_.t.LW5tCA)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ez, dismissUntil: eW } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eT,
                                  onClick: () => {
                                      ex(eW);
                                  }
                              }),
                              e_.intl.format(e_.t.zxU0Ki, { daysPastDue: ez }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      ex(eW), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.intl.string(e_.t.q8rxeX)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              e_.intl.string(e_.t.LlZaoa),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.intl.string(e_.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              e_.intl.string(e_.t['30YfCg']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.intl.string(e_.t.U5pKWF)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ej === ef.p9.TIER_1 ? e_.intl.formatToPlainString(e_.t.b6QUvb, { daysLeft: em.metadata.daysLeft }) : ej === ef.p9.TIER_0 ? e_.intl.formatToPlainString(e_.t['tURZ/P'], { daysLeft: em.metadata.daysLeft }) : e_.intl.formatToPlainString(e_.t.AyC74O, { daysLeft: em.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ex(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ej === ef.p9.TIER_1 ? e_.intl.string(e_.t.lboF5O) : ej === ef.p9.TIER_0 ? e_.intl.string(e_.t['4UPwOj']) : e_.intl.string(e_.t['P/VvGR'])
                              })
                          ]
                      });
                  case eh.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(F.h, {
                          buttonText: null !== (l = em.buttonText) && void 0 !== l ? l : e_.intl.string(e_.t['/g10LC']),
                          onGoBack: em.callback,
                          onDismiss: () => ex(),
                          showCloseButton: !0
                      });
                  case eh.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eh.ZY5.IN_APP };
                      return (0, i.jsx)(D.Z, {
                          guildId: S,
                          analyticsLocations: ev,
                          analyticsLocation: e
                      });
                  }
                  case eh.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: eE.quarantineNotice,
                          children: [
                              e_.intl.string(e_.t.DVFJYW),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ep.Z,
                                  target: '_blank',
                                  children: e_.intl.string(e_.t.kvHdFB)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: ec.Z.getArticleURL(eh.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eE.quarantineLearnMoreLink,
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              e_.intl.string(e_.t.Ugijzs),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eh.yXt.STATUS),
                                  children: e_.intl.string(e_.t.hvVgAQ)
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => ex(),
                                  noticeType: eh.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eK, decisionId: eY } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != S && (0, k.T9)(S), ex(eK);
                                  }
                              }),
                              e_.intl.string(e_.t.B8ruyc),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != S &&
                                          (0, k.UE)(S, eY, () => {
                                              ex(eK), (0, k.T9)(S);
                                          });
                                  },
                                  children: e_.intl.string(e_.t.oX14Eh)
                              }),
                              null != S
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => G.Z.open(S, eh.pNK.GUILD_AUTOMOD, void 0, eh.KsC.AUTOMOD_MENTION_SPAM),
                                        children: e_.intl.string(e_.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      Q.hZ(), ex();
                                  }
                              }),
                              e_.intl.string(e_.t.I1nKfH),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          Q.hZ(),
                                          ex();
                                  },
                                  children: e_.intl.string(e_.t.l5xYnJ)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eX = a()().add(5, 'days').toDate();
                      return (0, i.jsx)(Y.Z, {
                          dismissCurrentNotice: () => {
                              (0, R.EW)(eo.m9[eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ex(eX);
                          },
                          subscriptionTier: ef.Si.TIER_2
                      });
                  case eh.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = em.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, X.nE)(em.metadata.streamKey);
                                  }
                              }),
                              e_.intl.string(e_.t.rOx44u)
                          ]
                      });
                  case eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      var e;
                                      ex(null === (e = em.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              e_.intl.string(e_.t['0klLS0']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      var e;
                                      (0, q.Z)(), ex(null === (e = em.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
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
        children: (0, i.jsx)(eN, {})
    });
}
