"use strict";
n.r(t), n.d(t, {
  dismissCurrentNotice: function() {
    return eA
  },
  default: function() {
    return eh
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("866227"),
  i = n.n(a),
  r = n("90915"),
  o = n("446674"),
  u = n("77078"),
  d = n("404118"),
  c = n("437822"),
  E = n("778323"),
  f = n("54239"),
  _ = n("215082"),
  T = n("950926"),
  I = n("987317"),
  m = n("167359"),
  N = n("55620"),
  p = n("52289"),
  S = n("518888"),
  A = n("70614"),
  C = n("79112"),
  h = n("376556"),
  g = n("812204"),
  M = n("685665"),
  O = n("299285"),
  R = n("774146"),
  L = n("10641"),
  v = n("935246"),
  P = n("211470"),
  D = n("789563"),
  x = n("381065"),
  y = n("702873"),
  U = n("840968"),
  j = n("233322"),
  b = n("157186"),
  G = n("747554"),
  B = n("740316"),
  k = n("592407"),
  F = n("977169"),
  w = n("363691"),
  H = n("64165"),
  V = n("649844"),
  Y = n("983424"),
  W = n("538620"),
  K = n("425538"),
  z = n("448881"),
  Q = n("703537"),
  Z = n("55282"),
  J = n("42203"),
  X = n("305961"),
  q = n("42887"),
  $ = n("945956"),
  ee = n("162771"),
  et = n("697218"),
  en = n("552712"),
  es = n("167726"),
  el = n("600133"),
  ea = n("145131"),
  ei = n("216422"),
  er = n("489622"),
  eo = n("599110"),
  eu = n("701909"),
  ed = n("308757"),
  ec = n("389696"),
  eE = n("650044"),
  ef = n("49111"),
  e_ = n("646718"),
  eT = n("586269"),
  eI = n("353927"),
  em = n("782340"),
  eN = n("231537");
let ep = () => (0, s.jsxs)(er.default, {
    color: er.NoticeColors.DANGER,
    children: [(0, s.jsx)(er.NoticeCloseButton, {
      onClick: () => {
        eA(), (0, eE.open)()
      }
    }), em.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(er.NoticeButtonAnchor, {
      href: eu.default.getArticleURL(ef.HelpdeskArticles.NO_INPUT_DETECTED),
      children: em.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eS = () => (0, s.jsxs)(er.default, {
    color: er.NoticeColors.DANGER,
    children: [(0, s.jsx)(er.NoticeCloseButton, {
      onClick: () => {
        eA(), (0, eE.open)()
      }
    }), em.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(er.NoticeButton, {
      onClick: () => {
        (0, f.pushLayer)(ef.Layers.USER_SETTINGS), C.default.setSection(ef.UserSettingsSections.VOICE)
      },
      children: em.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function eA(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: i(e)
  } : void 0)
}
let eC = l.memo(function() {
  var e, t, a;
  let _ = (0, o.useStateFromStores)([et.default], () => et.default.getCurrentUser()),
    g = (0, o.useStateFromStores)([ee.default], () => ee.default.getGuildId()),
    eE = (0, o.useStateFromStores)([el.default], () => el.default.getNotice()),
    eC = (0, o.useStateFromStores)([X.default], () => X.default.getGuild(g)),
    {
      analyticsLocations: eh
    } = (0, M.default)(),
    eg = null == eE ? void 0 : eE.type,
    eM = (0, b.useShowMemberVerificationGate)(g);
  l.useEffect(() => {
    null != eg && ! function(e, t) {
      let n = {
        notice_type: e
      };
      null != t && (n.guild_id = t), eo.default.track(ef.AnalyticEvents.APP_NOTICE_VIEWED, n)
    }(eg, g)
  }, [eg, g]), l.useEffect(() => {
    if (null != eE && eE.type === ef.NoticeTypes.SURVEY && null != eE.metadata) {
      let {
        metadata: e
      } = eE, t = D.default.getUserExperimentDescriptor(e.id);
      null != t && (0, P.trackExposureToExperiment)(e.id, t);
      let n = async () => {
        var e, t;
        (null === (e = eE.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, S.surveySeen)(null === (t = eE.metadata) || void 0 === t ? void 0 : t.id)
      };
      n()
    }
  }, [eE]);
  let eO = function(e) {
    let {
      enabled: t
    } = (0, Y.default)(!0, e !== ef.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING);
    return t || null == e ? null : el.typeToDismissibleContent[e]
  }(eg);
  if (null == eE) return null;
  if (null != eO) return (0, s.jsx)(v.DismissibleContentNotices, {
    dismissibleContent: eO,
    noticeType: eE.type
  });
  let eR = null === (e = eE.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (eE.type) {
    case ef.NoticeTypes.LURKING_GUILD:
      return (0, s.jsx)(w.default, {});
    case ef.NoticeTypes.PENDING_MEMBER:
      return (0, s.jsx)(G.default, {});
    case ef.NoticeTypes.INVITED_TO_SPEAK:
      return (0, s.jsx)(Z.default, {});
    case ef.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eL
      } = eE.metadata;
      return (0, s.jsx)(x.default, {
        onDismiss: () => eA(eL)
      });
    case ef.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ev
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(ev),
          noticeType: ef.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), em.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: eu.default.getArticleURL(ef.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case ef.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eP
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(eP),
          noticeType: ef.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE
        }), em.default.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({
          helpCenterLink: eu.default.getArticleURL(ef.HelpdeskArticles.WIN7_8_DEPRECATE)
        })]
      });
    case ef.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eD
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(eD),
          noticeType: ef.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE
        }), em.default.Messages.MACOS_DEPRECATED_WARNING.format({
          helpCenterLink: eu.default.getArticleURL(ef.HelpdeskArticles.MACOS_17_18_DEPRECATE)
        })]
      });
    case ef.NoticeTypes.GENERIC:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.GENERIC
        }), eE.message, null != eE.buttonText ? (0, s.jsx)(er.PrimaryCTANoticeButton, {
          onClick: eE.callback,
          noticeType: ef.NoticeTypes.GENERIC,
          children: eE.buttonText
        }) : null]
      });
    case ef.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.LAUNCH_GAME_FAILURE
        }), eE.message, null != eE.buttonText ? (0, s.jsx)(er.PrimaryCTANoticeButton, {
          onClick: eE.callback,
          noticeType: ef.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: eE.buttonText
        }) : null]
      });
    case ef.NoticeTypes.VOICE_DISABLED:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => {
            T.default.clearRemoteDisconnectVoiceChannelId(), eA()
          },
          noticeType: ef.NoticeTypes.VOICE_DISABLED
        }), em.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = $.default.getRemoteDisconnectVoiceChannelId();
            if (null != e) {
              let t = J.default.getChannel(e);
              null != t && I.default.selectVoiceChannel(e)
            }
          },
          noticeType: ef.NoticeTypes.VOICE_DISABLED,
          children: em.default.Messages.RECONNECT
        })]
      });
    case ef.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => {
            T.default.clearLastSessionVoiceChannelId(), eA()
          },
          noticeType: ef.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), em.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = $.default.getLastSessionVoiceChannelId();
            if (null != e) {
              let t = J.default.getChannel(e);
              null != t && I.default.selectVoiceChannel(e)
            }
          },
          noticeType: ef.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: em.default.Messages.RECONNECT
        })]
      });
    case ef.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let ex = h.default.get(ef.PlatformTypes.SPOTIFY);
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: eN.platformIcon,
          src: ex.icon.whiteSVG
        }), em.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          onClick: () => C.default.open(ef.UserSettingsSections.VOICE),
          noticeType: ef.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: em.default.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(u.Anchor, {
          className: eN.textLinkSmall,
          href: eu.default.getArticleURL(ef.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: em.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case ef.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DEFAULT,
        children: [em.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => eM && null != g ? (0, j.openMemberVerificationModal)(g) : R.openClaimAccountModal(),
          children: em.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case ef.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DEFAULT,
        children: [em.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: em.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: em.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == _ ? void 0 : _.email
              }),
              secondaryConfirmText: em.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: R.openClaimAccountModal
            })
          },
          children: em.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case ef.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == eE.metadata) return null;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => m.default.ackScheduledMaintenance(),
          noticeType: ef.NoticeTypes.SCHEDULED_MAINTENANCE
        }), em.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(eE.metadata), (0, s.jsx)(er.NoticeButtonAnchor, {
          href: "".concat(ef.Links.STATUS, "/incidents/").concat(eE.metadata.id),
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ef.NoticeTypes.NO_INPUT_DETECTED:
      if (!q.default.supports(eI.Features.LOOPBACK)) return (0, s.jsx)(ep, {});
      return (0, s.jsx)(eS, {});
    case ef.NoticeTypes.HARDWARE_MUTE:
      if (null == eE.metadata) return null;
      let {
        vendor: ey, model: eU
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [em.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: ey.name,
          modelName: eU.name
        }), (0, s.jsx)(er.NoticeButtonAnchor, {
          href: eU.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: em.default.Messages.SUPPORT
        })]
      });
    case ef.NoticeTypes.STREAMER_MODE:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.STREAMER_MODE
        }), em.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          onClick: () => p.default.setEnabled(!1),
          noticeType: ef.NoticeTypes.STREAMER_MODE,
          children: em.default.Messages.DISABLE
        })]
      });
    case ef.NoticeTypes.H264_DISABLED:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => {
            eA()
          }
        }), em.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(er.NoticeButton, {
          onClick: () => {
            (0, f.pushLayer)(ef.Layers.USER_SETTINGS), C.default.setSection(ef.UserSettingsSections.VOICE)
          },
          children: em.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == eE.metadata) return null;
      let {
        skuId: ej, applicationId: eb
      } = eE.metadata, eG = en.default.get(ej), eB = O.default.getApplication(eb);
      if (null == eG || null == eB) return null;
      let ek = {
        page: ef.AnalyticsPages.IN_APP
      };
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => E.dismiss(eG.id),
          noticeType: ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(ei.default, {
          className: eN.premiumIcon
        }), em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eB.name,
          skuName: eG.name
        }), (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, ed.openIAPPurchaseModal)({
            applicationId: eB.id,
            skuId: eG.id,
            openPremiumPaymentModal: () => {
              (0, V.default)({
                initialPlanId: null,
                subscriptionTier: e_.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: eh,
                analyticsObject: ek
              })
            },
            analyticsLocations: eh,
            analyticsLocationObject: ek,
            context: __OVERLAY__ ? ef.AppContext.OVERLAY : ef.AppContext.APP
          }).then(() => E.dismiss(eG.id)),
          children: em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == eE.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = eE.metadata, n = en.default.get(e), l = O.default.getApplication(t);
      if (null == n || null == l) return null;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(ei.default, {
          className: eN.premiumIcon
        }), em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: l.name,
          skuName: n.name
        }), (0, s.jsx)(er.NoticeButton, {
          children: (0, s.jsx)(r.Link, {
            onClick: () => eA(),
            to: {
              pathname: ef.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: em.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case ef.NoticeTypes.SURVEY: {
      let e = eE.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: l,
        url: a
      } = e;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.SURVEY,
          onClick: () => {
            (0, S.surveyHide)(t, !0)
          }
        }), n, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(a, "_blank"), (0, S.surveyHide)(t, !1)
          },
          children: l
        })]
      })
    }
    case ef.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            eA()
          }
        }), em.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == eC ? void 0 : eC.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == _ ? void 0 : _.id, "&guild_id=").concat(null == eC ? void 0 : eC.id), "_blank"), eA()
          },
          additionalTrackingProps: {
            guild_id: null == eC ? void 0 : eC.id
          },
          children: em.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case ef.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [em.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(er.NoticeButtonAnchor, {
          href: eu.default.getArticleURL(ef.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: em.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case ef.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), em.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("649486").then(n.bind(n, "649486"));
              return t => (0, s.jsx)(e, {
                source: "Video unsupported browser",
                ...t
              })
            })
          },
          children: em.default.Messages.DOWNLOAD
        })]
      });
    case ef.NoticeTypes.DISPATCH_ERROR:
      if (null == eE.metadata) return null;
      let {
        error: eF
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.DISPATCH_ERROR
        }), null == eF ? void 0 : eF.displayMessage, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("563912").then(n.bind(n, "563912"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ef.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == eE.metadata) return null;
      let {
        progress: ew, total: eH, name: eV
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          children: [null != eV ? em.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(eV),
            progress: "".concat(ew),
            total: "".concat(eH)
          }) : em.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(ew),
            total: "".concat(eH)
          }), (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: eN.ellipsis
          })]
        })]
      });
    case ef.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == eE.metadata) return null;
      if (null != es.default.testModeEmbeddedApplicationId) return (0, s.jsx)(er.default, {
        color: er.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: em.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: eE.metadata.applicationName
            })
          }), (0, s.jsx)(er.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: ef.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(er.default, {
        color: er.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: em.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: eE.metadata.applicationName
            })
          }), (0, s.jsx)(ec.default, {
            dropdownSize: ec.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: eN.testModeSKUSelector,
            color: ec.TestModeSKUButtonEnums.Colors.WHITE,
            look: ec.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: ec.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => N.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: ef.AnalyticsSections.NOTIFICATION_BAR,
                object: ef.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: eE.metadata.applicationId,
            children: em.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(er.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: ef.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case ef.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            W.default.dismissOutboundPromotionNotice()
          }
        }), (0, s.jsx)(ei.default, {
          className: eN.premiumIcon
        }), em.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            eo.default.track(ef.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), C.default.open(ef.UserSettingsSections.INVENTORY), W.default.dismissOutboundPromotionNotice()
          },
          children: em.default.Messages.TAKE_ME_THERE
        })]
      });
    case ef.NoticeTypes.VIEWING_ROLES:
      return (0, s.jsx)(F.default, {});
    case ef.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(er.default, {
        color: eR === e_.PremiumTypes.TIER_1 ? er.NoticeColors.PREMIUM_TIER_1 : eR === e_.PremiumTypes.TIER_0 ? er.NoticeColors.PREMIUM_TIER_0 : er.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(ei.default, {
          className: eN.premiumIcon
        }), eR === e_.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: eE.metadata.daysLeft
        }) : eR === e_.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: eE.metadata.daysLeft
        }) : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: eE.metadata.daysLeft
        }), (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("67323").then(n.bind(n, "67323"));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: eE.metadata.daysLeft,
                premiumType: eR,
                analyticsSource: "Nag Bar",
                premiumSubscription: eE.metadata.premiumSubscription
              })
            })
          },
          children: eR === e_.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eR === e_.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eY, dismissUntil: eW
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: eg,
          onClick: () => {
            eA(eW)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eY
        }), (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eA(eW), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eR === e_.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: eE.metadata.daysLeft
        }) : eR === e_.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: eE.metadata.daysLeft
        }) : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: eE.metadata.daysLeft
        }), (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eA(null === (t = eE.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ef.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eR === e_.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eR === e_.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ef.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(B.BackToPreviousScreenNotice, {
        buttonText: null !== (a = eE.buttonText) && void 0 !== a ? a : em.default.Messages.GO_BACK,
        onGoBack: eE.callback,
        onDismiss: () => eA(),
        showCloseButton: !0
      });
    case ef.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: ef.AnalyticsPages.IN_APP
      };
      return (0, s.jsx)(U.default, {
        guildId: g,
        analyticsLocations: eh,
        analyticsLocation: e
      })
    }
    case ef.NoticeTypes.QUARANTINED:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.CUSTOM,
        className: eN.quarantineNotice,
        children: [em.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(er.NoticeButtonAnchor, {
          href: eT.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: em.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(u.Anchor, {
          href: eu.default.getArticleURL(ef.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: eN.quarantineLearnMoreLink,
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ef.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [em.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(er.NoticeButtonAnchor, {
          href: "".concat(ef.Links.STATUS),
          children: em.default.Messages.LEARN_MORE
        }), (0, s.jsx)(er.NoticeCloseButton, {
          onClick: () => eA(),
          noticeType: ef.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case ef.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [em.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: eE.metadata.gameTitle
        }), (0, s.jsx)(er.NoticeButton, {
          onClick: eE.metadata.reloadCallback,
          children: em.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case ef.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: eK, decisionId: ez
      } = eE.metadata;
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.WARNING,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != g && (0, y.clearMentionRaidDetected)(g), eA(eK)
          }
        }), em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(er.NoticeButton, {
          onClick: () => {
            null != g && (0, y.removeMentionRaidRestrictionWithFeedback)(g, ez, () => {
              eA(eK), (0, y.clearMentionRaidDetected)(g)
            })
          },
          children: em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != g ? (0, s.jsx)(er.NoticeButton, {
          onClick: () => k.default.open(g, ef.GuildSettingsSections.GUILD_AUTOMOD, void 0, ef.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case ef.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.BRAND,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            Q.markNoticeDismissed(), eA()
          }
        }), em.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("123592").then(n.bind(n, "123592"));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), Q.markNoticeDismissed(), eA()
          },
          children: em.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case ef.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING:
      let eQ = i().add(5, "days").toDate();
      return (0, s.jsx)(K.default, {
        dismissCurrentNotice: () => {
          (0, L.markDismissibleContentAsDismissed)(el.typeToDismissibleContent[ef.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]), eA(eQ)
        },
        subscriptionTier: e_.PremiumSubscriptionSKUs.TIER_2
      });
    case ef.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.BRAND,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => eA()
        }), em.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => {
            C.default.open(ef.UserSettingsSections.LOCALE), eA()
          },
          children: em.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE_CTA
        })]
      });
    case ef.NoticeTypes.HABITUAL_DND:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.BRAND,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.HABITUAL_DND,
          onClick: () => {
            eA(), (0, H.dismissDNDNotice)()
          }
        }), em.default.Messages.QUIET_MODE_HABITUAL_DND_NOTICE, (0, s.jsx)(er.PrimaryCTANoticeButton, {
          noticeType: ef.NoticeTypes.HABITUAL_DND,
          onClick: () => {
            C.default.open(ef.UserSettingsSections.NOTIFICATIONS), eA(), (0, H.dismissDNDNotice)()
          },
          children: em.default.Messages.CHECK_IT_OUT
        })]
      });
    case ef.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(er.default, {
        color: er.NoticeColors.DANGER,
        children: [(0, s.jsx)(er.NoticeCloseButton, {
          noticeType: ef.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null === (e = eE.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, z.dismissProgressTrackingFailureNotice)(eE.metadata.streamKey)
          }
        }), em.default.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE]
      });
    default:
      return null
  }
});

function eh() {
  let {
    AnalyticsLocationProvider: e
  } = (0, M.default)(g.default.NOTICE);
  return (0, s.jsx)(e, {
    children: (0, s.jsx)(eC, {})
  })
}