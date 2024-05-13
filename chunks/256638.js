"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eA
  },
  dismissCurrentNotice: function() {
    return eS
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("913527"),
  i = n.n(l),
  r = n("613828"),
  o = n("442837"),
  u = n("481060"),
  d = n("668781"),
  c = n("893776"),
  E = n("117266"),
  f = n("37234"),
  _ = n("254854"),
  T = n("195500"),
  I = n("287734"),
  m = n("205355"),
  N = n("558381"),
  p = n("223245"),
  S = n("491428"),
  C = n("401430"),
  A = n("230711"),
  h = n("726542"),
  g = n("100527"),
  M = n("906732"),
  O = n("812206"),
  R = n("391650"),
  v = n("605236"),
  L = n("749277"),
  P = n("492435"),
  x = n("353926"),
  D = n("506357"),
  y = n("36459"),
  U = n("236069"),
  j = n("305325"),
  b = n("281956"),
  G = n("574650"),
  B = n("665302"),
  F = n("434404"),
  k = n("918658"),
  w = n("859428"),
  H = n("963249"),
  V = n("774276"),
  Y = n("748770"),
  K = n("246965"),
  W = n("272008"),
  z = n("523255"),
  Q = n("852923"),
  q = n("592125"),
  X = n("430824"),
  Z = n("131951"),
  J = n("19780"),
  $ = n("914010"),
  ee = n("594174"),
  et = n("55563"),
  en = n("695103"),
  es = n("933429"),
  ea = n("285952"),
  el = n("466111"),
  ei = n("644766"),
  er = n("626135"),
  eo = n("63063"),
  eu = n("72924"),
  ed = n("69499"),
  ec = n("912193"),
  eE = n("981631"),
  ef = n("474936"),
  e_ = n("610674"),
  eT = n("65154"),
  eI = n("689938"),
  em = n("229647");
let eN = () => (0, s.jsxs)(ei.default, {
    color: ei.NoticeColors.DANGER,
    children: [(0, s.jsx)(ei.NoticeCloseButton, {
      onClick: () => {
        eS(), (0, ec.open)()
      }
    }), eI.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(ei.NoticeButtonAnchor, {
      href: eo.default.getArticleURL(eE.HelpdeskArticles.NO_INPUT_DETECTED),
      children: eI.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  ep = () => (0, s.jsxs)(ei.default, {
    color: ei.NoticeColors.DANGER,
    children: [(0, s.jsx)(ei.NoticeCloseButton, {
      onClick: () => {
        eS(), (0, ec.open)()
      }
    }), eI.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(ei.NoticeButton, {
      onClick: () => {
        (0, f.pushLayer)(eE.Layers.USER_SETTINGS), A.default.setSection(eE.UserSettingsSections.VOICE)
      },
      children: eI.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function eS(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: i()(e)
  } : void 0)
}
let eC = a.memo(function() {
  var e, t, l;
  let _ = (0, o.useStateFromStores)([ee.default], () => ee.default.getCurrentUser()),
    g = (0, o.useStateFromStores)([$.default], () => $.default.getGuildId()),
    ec = (0, o.useStateFromStores)([es.default], () => es.default.getNotice()),
    eC = (0, o.useStateFromStores)([X.default], () => X.default.getGuild(g)),
    {
      analyticsLocations: eA
    } = (0, M.default)(),
    eh = null == ec ? void 0 : ec.type,
    eg = (0, b.useShowMemberVerificationGate)(g);
  a.useEffect(() => {
    null != eh && ! function(e, t) {
      let n = {
        notice_type: e
      };
      null != t && (n.guild_id = t), er.default.track(eE.AnalyticEvents.APP_NOTICE_VIEWED, n)
    }(eh, g)
  }, [eh, g]), a.useEffect(() => {
    if (null != ec && ec.type === eE.NoticeTypes.SURVEY && null != ec.metadata) {
      let {
        metadata: e
      } = ec, t = x.default.getUserExperimentDescriptor(e.id);
      null != t && (0, P.trackExposureToExperiment)(e.id, t), (async () => {
        var e, t;
        (null === (e = ec.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, S.surveySeen)(null === (t = ec.metadata) || void 0 === t ? void 0 : t.id)
      })()
    }
  }, [ec]);
  let eM = function(e) {
    let {
      enabled: t
    } = (0, V.default)(!0, e !== eE.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING);
    return t || null == e ? null : es.typeToDismissibleContent[e]
  }(eh);
  if (null == ec) return null;
  if (null != eM) return (0, s.jsx)(L.DismissibleContentNotices, {
    dismissibleContent: eM,
    noticeType: ec.type
  });
  let eO = null === (e = ec.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (ec.type) {
    case eE.NoticeTypes.LURKING_GUILD:
      return (0, s.jsx)(w.default, {});
    case eE.NoticeTypes.PENDING_MEMBER:
      return (0, s.jsx)(G.default, {});
    case eE.NoticeTypes.INVITED_TO_SPEAK:
      return (0, s.jsx)(Q.default, {});
    case eE.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eR
      } = ec.metadata;
      return (0, s.jsx)(D.default, {
        onDismiss: () => eS(eR)
      });
    case eE.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ev
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(ev),
          noticeType: eE.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), eI.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: eo.default.getArticleURL(eE.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case eE.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eL
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(eL),
          noticeType: eE.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE
        }), eI.default.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({
          helpCenterLink: eo.default.getArticleURL(eE.HelpdeskArticles.WIN7_8_DEPRECATE)
        })]
      });
    case eE.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eP
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(eP),
          noticeType: eE.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE
        }), eI.default.Messages.MACOS_DEPRECATED_WARNING.format({
          helpCenterLink: eo.default.getArticleURL(eE.HelpdeskArticles.MACOS_17_18_DEPRECATE)
        })]
      });
    case eE.NoticeTypes.GENERIC:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.GENERIC
        }), ec.message, null != ec.buttonText ? (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: ec.callback,
          noticeType: eE.NoticeTypes.GENERIC,
          children: ec.buttonText
        }) : null]
      });
    case eE.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.LAUNCH_GAME_FAILURE
        }), ec.message, null != ec.buttonText ? (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: ec.callback,
          noticeType: eE.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: ec.buttonText
        }) : null]
      });
    case eE.NoticeTypes.VOICE_DISABLED:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => {
            T.default.clearRemoteDisconnectVoiceChannelId(), eS()
          },
          noticeType: eE.NoticeTypes.VOICE_DISABLED
        }), eI.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = J.default.getRemoteDisconnectVoiceChannelId();
            null != e && null != q.default.getChannel(e) && I.default.selectVoiceChannel(e)
          },
          noticeType: eE.NoticeTypes.VOICE_DISABLED,
          children: eI.default.Messages.RECONNECT
        })]
      });
    case eE.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => {
            T.default.clearLastSessionVoiceChannelId(), eS()
          },
          noticeType: eE.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), eI.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = J.default.getLastSessionVoiceChannelId();
            null != e && null != q.default.getChannel(e) && I.default.selectVoiceChannel(e)
          },
          noticeType: eE.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: eI.default.Messages.RECONNECT
        })]
      });
    case eE.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let ex = h.default.get(eE.PlatformTypes.SPOTIFY);
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: em.platformIcon,
          src: ex.icon.whiteSVG
        }), eI.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => A.default.open(eE.UserSettingsSections.VOICE),
          noticeType: eE.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: eI.default.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(u.Anchor, {
          className: em.textLinkSmall,
          href: eo.default.getArticleURL(eE.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: eI.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case eE.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [eI.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => eg && null != g ? (0, j.openMemberVerificationModal)(g) : R.openClaimAccountModal(),
          children: eI.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case eE.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [eI.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: eI.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: eI.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == _ ? void 0 : _.email
              }),
              secondaryConfirmText: eI.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: R.openClaimAccountModal
            })
          },
          children: eI.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case eE.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == ec.metadata) return null;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => m.default.ackScheduledMaintenance(),
          noticeType: eE.NoticeTypes.SCHEDULED_MAINTENANCE
        }), eI.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ec.metadata), (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: "".concat(eE.Links.STATUS, "/incidents/").concat(ec.metadata.id),
          children: eI.default.Messages.LEARN_MORE
        })]
      });
    case eE.NoticeTypes.NO_INPUT_DETECTED:
      if (!Z.default.supports(eT.Features.LOOPBACK)) return (0, s.jsx)(eN, {});
      return (0, s.jsx)(ep, {});
    case eE.NoticeTypes.HARDWARE_MUTE:
      if (null == ec.metadata) return null;
      let {
        vendor: eD, model: ey
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [eI.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eD.name,
          modelName: ey.name
        }), (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: ey.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: eI.default.Messages.SUPPORT
        })]
      });
    case eE.NoticeTypes.STREAMER_MODE:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.STREAMER_MODE
        }), eI.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          onClick: () => p.default.setEnabled(!1),
          noticeType: eE.NoticeTypes.STREAMER_MODE,
          children: eI.default.Messages.DISABLE
        })]
      });
    case eE.NoticeTypes.H264_DISABLED:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => {
            eS()
          }
        }), eI.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(ei.NoticeButton, {
          onClick: () => {
            (0, f.pushLayer)(eE.Layers.USER_SETTINGS), A.default.setSection(eE.UserSettingsSections.VOICE)
          },
          children: eI.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case eE.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == ec.metadata) return null;
      let {
        skuId: eU, applicationId: ej
      } = ec.metadata, eb = et.default.get(eU), eG = O.default.getApplication(ej);
      if (null == eb || null == eG) return null;
      let eB = {
        page: eE.AnalyticsPages.IN_APP
      };
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => E.dismiss(eb.id),
          noticeType: eE.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(el.default, {
          className: em.premiumIcon
        }), eI.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eG.name,
          skuName: eb.name
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, eu.openIAPPurchaseModal)({
            applicationId: eG.id,
            skuId: eb.id,
            openPremiumPaymentModal: () => {
              (0, H.default)({
                initialPlanId: null,
                subscriptionTier: ef.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: eA,
                analyticsObject: eB
              })
            },
            analyticsLocations: eA,
            analyticsLocationObject: eB,
            context: __OVERLAY__ ? eE.AppContext.OVERLAY : eE.AppContext.APP
          }).then(() => E.dismiss(eb.id)),
          children: eI.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case eE.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == ec.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = ec.metadata, n = et.default.get(e), a = O.default.getApplication(t);
      if (null == n || null == a) return null;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(el.default, {
          className: em.premiumIcon
        }), eI.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: a.name,
          skuName: n.name
        }), (0, s.jsx)(ei.NoticeButton, {
          children: (0, s.jsx)(r.Link, {
            onClick: () => eS(),
            to: {
              pathname: eE.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: eI.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case eE.NoticeTypes.SURVEY: {
      let e = ec.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: a,
        url: l
      } = e;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.SURVEY,
          onClick: () => {
            (0, S.surveyHide)(t, !0)
          }
        }), n, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(l, "_blank"), (0, S.surveyHide)(t, !1)
          },
          children: a
        })]
      })
    }
    case eE.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            eS()
          }
        }), eI.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == eC ? void 0 : eC.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == _ ? void 0 : _.id, "&guild_id=").concat(null == eC ? void 0 : eC.id), "_blank"), eS()
          },
          additionalTrackingProps: {
            guild_id: null == eC ? void 0 : eC.id
          },
          children: eI.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case eE.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [eI.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: eo.default.getArticleURL(eE.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: eI.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case eE.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), eI.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, "431583"));
              return t => (0, s.jsx)(e, {
                source: "Video unsupported browser",
                ...t
              })
            })
          },
          children: eI.default.Messages.DOWNLOAD
        })]
      });
    case eE.NoticeTypes.DISPATCH_ERROR:
      if (null == ec.metadata) return null;
      let {
        error: eF
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.DISPATCH_ERROR
        }), null == eF ? void 0 : eF.displayMessage, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("20212")]).then(n.bind(n, "915194"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: eI.default.Messages.LEARN_MORE
        })]
      });
    case eE.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == ec.metadata) return null;
      let {
        progress: ek, total: ew, name: eH
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          children: [null != eH ? eI.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(eH),
            progress: "".concat(ek),
            total: "".concat(ew)
          }) : eI.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(ek),
            total: "".concat(ew)
          }), (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: em.ellipsis
          })]
        })]
      });
    case eE.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == ec.metadata) return null;
      if (null != en.default.testModeEmbeddedApplicationId) return (0, s.jsx)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: eI.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: ec.metadata.applicationName
            })
          }), (0, s.jsx)(ei.NoticeCloseButton, {
            onClick: C.reset,
            noticeType: eE.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: eI.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: ec.metadata.applicationName
            })
          }), (0, s.jsx)(ed.default, {
            dropdownSize: ed.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: em.testModeSKUSelector,
            color: ed.TestModeSKUButtonEnums.Colors.WHITE,
            look: ed.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: ed.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => N.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: eE.AnalyticsSections.NOTIFICATION_BAR,
                object: eE.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: ec.metadata.applicationId,
            children: eI.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(ei.NoticeCloseButton, {
            onClick: C.reset,
            noticeType: eE.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case eE.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            Y.default.dismissOutboundPromotionNotice()
          }
        }), (0, s.jsx)(el.default, {
          className: em.premiumIcon
        }), eI.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            er.default.track(eE.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), A.default.open(eE.UserSettingsSections.INVENTORY), Y.default.dismissOutboundPromotionNotice()
          },
          children: eI.default.Messages.TAKE_ME_THERE
        })]
      });
    case eE.NoticeTypes.VIEWING_ROLES:
      return (0, s.jsx)(k.default, {});
    case eE.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(ei.default, {
        color: eO === ef.PremiumTypes.TIER_1 ? ei.NoticeColors.PREMIUM_TIER_1 : eO === ef.PremiumTypes.TIER_0 ? ei.NoticeColors.PREMIUM_TIER_0 : ei.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(el.default, {
          className: em.premiumIcon
        }), eO === ef.PremiumTypes.TIER_1 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eO === ef.PremiumTypes.TIER_0 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("8016"), n.e("17938"), n.e("84992"), n.e("72642")]).then(n.bind(n, "561623"));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: ec.metadata.daysLeft,
                premiumType: eO,
                analyticsSource: "Nag Bar",
                premiumSubscription: ec.metadata.premiumSubscription
              })
            })
          },
          children: eO === ef.PremiumTypes.TIER_1 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eO === ef.PremiumTypes.TIER_0 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case eE.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eV, dismissUntil: eY
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eh,
          onClick: () => {
            eS(eY)
          }
        }), eI.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eV
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eS(eY), A.default.open(eE.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eI.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case eE.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eI.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), A.default.open(eE.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eI.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eE.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eI.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), A.default.open(eE.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eI.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eE.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eO === ef.PremiumTypes.TIER_1 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eO === ef.PremiumTypes.TIER_0 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }), (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eS(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), A.default.open(eE.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eO === ef.PremiumTypes.TIER_1 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eO === ef.PremiumTypes.TIER_0 ? eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : eI.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eE.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(B.BackToPreviousScreenNotice, {
        buttonText: null !== (l = ec.buttonText) && void 0 !== l ? l : eI.default.Messages.GO_BACK,
        onGoBack: ec.callback,
        onDismiss: () => eS(),
        showCloseButton: !0
      });
    case eE.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: eE.AnalyticsPages.IN_APP
      };
      return (0, s.jsx)(U.default, {
        guildId: g,
        analyticsLocations: eA,
        analyticsLocation: e
      })
    }
    case eE.NoticeTypes.QUARANTINED:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.CUSTOM,
        className: em.quarantineNotice,
        children: [eI.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: e_.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: eI.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(u.Anchor, {
          href: eo.default.getArticleURL(eE.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: em.quarantineLearnMoreLink,
          children: eI.default.Messages.LEARN_MORE
        })]
      });
    case eE.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [eI.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(ei.NoticeButtonAnchor, {
          href: "".concat(eE.Links.STATUS),
          children: eI.default.Messages.LEARN_MORE
        }), (0, s.jsx)(ei.NoticeCloseButton, {
          onClick: () => eS(),
          noticeType: eE.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case eE.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [eI.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: ec.metadata.gameTitle
        }), (0, s.jsx)(ei.NoticeButton, {
          onClick: ec.metadata.reloadCallback,
          children: eI.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case eE.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: eK, decisionId: eW
      } = ec.metadata;
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.WARNING,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != g && (0, y.clearMentionRaidDetected)(g), eS(eK)
          }
        }), eI.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(ei.NoticeButton, {
          onClick: () => {
            null != g && (0, y.removeMentionRaidRestrictionWithFeedback)(g, eW, () => {
              eS(eK), (0, y.clearMentionRaidDetected)(g)
            })
          },
          children: eI.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != g ? (0, s.jsx)(ei.NoticeButton, {
          onClick: () => F.default.open(g, eE.GuildSettingsSections.GUILD_AUTOMOD, void 0, eE.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: eI.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case eE.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.BRAND,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            z.markNoticeDismissed(), eS()
          }
        }), eI.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(ei.PrimaryCTANoticeButton, {
          noticeType: eE.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("51563")]).then(n.bind(n, "349994"));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), z.markNoticeDismissed(), eS()
          },
          children: eI.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case eE.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING:
      let ez = i()().add(5, "days").toDate();
      return (0, s.jsx)(K.default, {
        dismissCurrentNotice: () => {
          (0, v.markDismissibleContentAsDismissed)(es.typeToDismissibleContent[eE.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]), eS(ez)
        },
        subscriptionTier: ef.PremiumSubscriptionSKUs.TIER_2
      });
    case eE.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(ei.default, {
        color: ei.NoticeColors.DANGER,
        children: [(0, s.jsx)(ei.NoticeCloseButton, {
          noticeType: eE.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null === (e = ec.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, W.dismissProgressTrackingFailureNotice)(ec.metadata.streamKey)
          }
        }), eI.default.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE]
      });
    default:
      return null
  }
});

function eA() {
  let {
    analyticsLocations: e
  } = (0, M.default)(g.default.NOTICE);
  return (0, s.jsx)(M.AnalyticsLocationProvider, {
    value: e,
    children: (0, s.jsx)(eC, {})
  })
}