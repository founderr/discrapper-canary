"use strict";
n.r(t), n.d(t, {
  dismissCurrentNotice: function() {
    return em
  },
  default: function() {
    return ep
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
  L = n("935246"),
  v = n("211470"),
  P = n("789563"),
  D = n("381065"),
  x = n("702873"),
  y = n("840968"),
  U = n("233322"),
  j = n("157186"),
  b = n("747554"),
  G = n("740316"),
  B = n("592407"),
  k = n("977169"),
  F = n("363691"),
  w = n("64165"),
  H = n("649844"),
  V = n("538620"),
  Y = n("703537"),
  W = n("55282"),
  K = n("42203"),
  z = n("305961"),
  Q = n("42887"),
  Z = n("945956"),
  J = n("162771"),
  X = n("697218"),
  q = n("552712"),
  $ = n("167726"),
  ee = n("600133"),
  et = n("145131"),
  en = n("216422"),
  es = n("489622"),
  el = n("599110"),
  ea = n("701909"),
  ei = n("308757"),
  er = n("389696"),
  eo = n("650044"),
  eu = n("49111"),
  ed = n("646718"),
  ec = n("586269"),
  eE = n("353927"),
  ef = n("782340"),
  e_ = n("231537");
let eT = () => (0, s.jsxs)(es.default, {
    color: es.NoticeColors.DANGER,
    children: [(0, s.jsx)(es.NoticeCloseButton, {
      onClick: () => {
        em(), (0, eo.open)()
      }
    }), ef.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(es.NoticeButtonAnchor, {
      href: ea.default.getArticleURL(eu.HelpdeskArticles.NO_INPUT_DETECTED),
      children: ef.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eI = () => (0, s.jsxs)(es.default, {
    color: es.NoticeColors.DANGER,
    children: [(0, s.jsx)(es.NoticeCloseButton, {
      onClick: () => {
        em(), (0, eo.open)()
      }
    }), ef.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(es.NoticeButton, {
      onClick: () => {
        (0, f.pushLayer)(eu.Layers.USER_SETTINGS), C.default.setSection(eu.UserSettingsSections.VOICE)
      },
      children: ef.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function em(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: i(e)
  } : void 0)
}
let eN = l.memo(function() {
  var e, t, a;
  let i = (0, o.useStateFromStores)([X.default], () => X.default.getCurrentUser()),
    _ = (0, o.useStateFromStores)([J.default], () => J.default.getGuildId()),
    g = (0, o.useStateFromStores)([ee.default], () => ee.default.getNotice()),
    eo = (0, o.useStateFromStores)([z.default], () => z.default.getGuild(_)),
    {
      analyticsLocations: eN
    } = (0, M.default)(),
    ep = null == g ? void 0 : g.type,
    eS = (0, j.useShowMemberVerificationGate)(_);
  if (l.useEffect(() => {
      null != ep && ! function(e, t) {
        let n = {
          notice_type: e
        };
        null != t && (n.guild_id = t), el.default.track(eu.AnalyticEvents.APP_NOTICE_VIEWED, n)
      }(ep, _)
    }, [ep, _]), l.useEffect(() => {
      if (null != g && g.type === eu.NoticeTypes.SURVEY && null != g.metadata) {
        let {
          metadata: e
        } = g, t = P.default.getUserExperimentDescriptor(e.id);
        null != t && (0, v.trackExposureToExperiment)(e.id, t);
        let n = async () => {
          var e, t;
          (null === (e = g.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, S.surveySeen)(null === (t = g.metadata) || void 0 === t ? void 0 : t.id)
        };
        n()
      }
    }, [g]), null == g) return null;
  let eA = ee.typeToDismissibleContent[g.type];
  if (null != eA) return (0, s.jsx)(L.DismissibleContentNotices, {
    dismissibleContent: eA,
    noticeType: g.type
  });
  let eC = null === (e = g.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (g.type) {
    case eu.NoticeTypes.LURKING_GUILD:
      return (0, s.jsx)(F.default, {});
    case eu.NoticeTypes.PENDING_MEMBER:
      return (0, s.jsx)(b.default, {});
    case eu.NoticeTypes.INVITED_TO_SPEAK:
      return (0, s.jsx)(W.default, {});
    case eu.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eh
      } = g.metadata;
      return (0, s.jsx)(D.default, {
        onDismiss: () => em(eh)
      });
    case eu.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eg
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(eg),
          noticeType: eu.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), ef.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: ea.default.getArticleURL(eu.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case eu.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eM
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(eM),
          noticeType: eu.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE
        }), ef.default.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({
          helpCenterLink: ea.default.getArticleURL(eu.HelpdeskArticles.WIN7_8_DEPRECATE)
        })]
      });
    case eu.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eO
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(eO),
          noticeType: eu.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE
        }), ef.default.Messages.MACOS_DEPRECATED_WARNING.format({
          helpCenterLink: ea.default.getArticleURL(eu.HelpdeskArticles.MACOS_17_18_DEPRECATE)
        })]
      });
    case eu.NoticeTypes.GENERIC:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.GENERIC
        }), g.message, null != g.buttonText ? (0, s.jsx)(es.PrimaryCTANoticeButton, {
          onClick: g.callback,
          noticeType: eu.NoticeTypes.GENERIC,
          children: g.buttonText
        }) : null]
      });
    case eu.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.LAUNCH_GAME_FAILURE
        }), g.message, null != g.buttonText ? (0, s.jsx)(es.PrimaryCTANoticeButton, {
          onClick: g.callback,
          noticeType: eu.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: g.buttonText
        }) : null]
      });
    case eu.NoticeTypes.VOICE_DISABLED:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => {
            T.default.clearRemoteDisconnectVoiceChannelId(), em()
          },
          noticeType: eu.NoticeTypes.VOICE_DISABLED
        }), ef.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = Z.default.getRemoteDisconnectVoiceChannelId();
            if (null != e) {
              let t = K.default.getChannel(e);
              null != t && I.default.selectVoiceChannel(e)
            }
          },
          noticeType: eu.NoticeTypes.VOICE_DISABLED,
          children: ef.default.Messages.RECONNECT
        })]
      });
    case eu.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => {
            T.default.clearLastSessionVoiceChannelId(), em()
          },
          noticeType: eu.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), ef.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = Z.default.getLastSessionVoiceChannelId();
            if (null != e) {
              let t = K.default.getChannel(e);
              null != t && I.default.selectVoiceChannel(e)
            }
          },
          noticeType: eu.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: ef.default.Messages.RECONNECT
        })]
      });
    case eu.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let eR = h.default.get(eu.PlatformTypes.SPOTIFY);
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: e_.platformIcon,
          src: eR.icon.whiteSVG
        }), ef.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          onClick: () => C.default.open(eu.UserSettingsSections.VOICE),
          noticeType: eu.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: ef.default.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(u.Anchor, {
          className: e_.textLinkSmall,
          href: ea.default.getArticleURL(eu.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: ef.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case eu.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DEFAULT,
        children: [ef.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => eS && null != _ ? (0, U.openMemberVerificationModal)(_) : R.openClaimAccountModal(),
          children: ef.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case eu.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DEFAULT,
        children: [ef.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: ef.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: ef.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == i ? void 0 : i.email
              }),
              secondaryConfirmText: ef.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: R.openClaimAccountModal
            })
          },
          children: ef.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case eu.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == g.metadata) return null;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => m.default.ackScheduledMaintenance(),
          noticeType: eu.NoticeTypes.SCHEDULED_MAINTENANCE
        }), ef.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(g.metadata), (0, s.jsx)(es.NoticeButtonAnchor, {
          href: "".concat(eu.Links.STATUS, "/incidents/").concat(g.metadata.id),
          children: ef.default.Messages.LEARN_MORE
        })]
      });
    case eu.NoticeTypes.NO_INPUT_DETECTED:
      if (!Q.default.supports(eE.Features.LOOPBACK)) return (0, s.jsx)(eT, {});
      return (0, s.jsx)(eI, {});
    case eu.NoticeTypes.HARDWARE_MUTE:
      if (null == g.metadata) return null;
      let {
        vendor: eL, model: ev
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [ef.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eL.name,
          modelName: ev.name
        }), (0, s.jsx)(es.NoticeButtonAnchor, {
          href: ev.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: ef.default.Messages.SUPPORT
        })]
      });
    case eu.NoticeTypes.STREAMER_MODE:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.STREAMER_MODE
        }), ef.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          onClick: () => p.default.setEnabled(!1),
          noticeType: eu.NoticeTypes.STREAMER_MODE,
          children: ef.default.Messages.DISABLE
        })]
      });
    case eu.NoticeTypes.H264_DISABLED:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => {
            em()
          }
        }), ef.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(es.NoticeButton, {
          onClick: () => {
            (0, f.pushLayer)(eu.Layers.USER_SETTINGS), C.default.setSection(eu.UserSettingsSections.VOICE)
          },
          children: ef.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case eu.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == g.metadata) return null;
      let {
        skuId: eP, applicationId: eD
      } = g.metadata, ex = q.default.get(eP), ey = O.default.getApplication(eD);
      if (null == ex || null == ey) return null;
      let eU = {
        page: eu.AnalyticsPages.IN_APP
      };
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => E.dismiss(ex.id),
          noticeType: eu.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(en.default, {
          className: e_.premiumIcon
        }), ef.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: ey.name,
          skuName: ex.name
        }), (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, ei.openIAPPurchaseModal)({
            applicationId: ey.id,
            skuId: ex.id,
            openPremiumPaymentModal: () => {
              (0, H.default)({
                initialPlanId: null,
                subscriptionTier: ed.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: eN,
                analyticsObject: eU
              })
            },
            analyticsLocations: eN,
            analyticsLocationObject: eU,
            context: __OVERLAY__ ? eu.AppContext.OVERLAY : eu.AppContext.APP
          }).then(() => E.dismiss(ex.id)),
          children: ef.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case eu.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == g.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = g.metadata, n = q.default.get(e), l = O.default.getApplication(t);
      if (null == n || null == l) return null;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(en.default, {
          className: e_.premiumIcon
        }), ef.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: l.name,
          skuName: n.name
        }), (0, s.jsx)(es.NoticeButton, {
          children: (0, s.jsx)(r.Link, {
            onClick: () => em(),
            to: {
              pathname: eu.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: ef.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case eu.NoticeTypes.SURVEY: {
      let e = g.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: l,
        url: a
      } = e;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.SURVEY,
          onClick: () => {
            (0, S.surveyHide)(t, !0)
          }
        }), n, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(a, "_blank"), (0, S.surveyHide)(t, !1)
          },
          children: l
        })]
      })
    }
    case eu.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            em()
          }
        }), ef.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == eo ? void 0 : eo.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == i ? void 0 : i.id, "&guild_id=").concat(null == eo ? void 0 : eo.id), "_blank"), em()
          },
          additionalTrackingProps: {
            guild_id: null == eo ? void 0 : eo.id
          },
          children: ef.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case eu.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [ef.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(es.NoticeButtonAnchor, {
          href: ea.default.getArticleURL(eu.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: ef.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case eu.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), ef.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
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
          children: ef.default.Messages.DOWNLOAD
        })]
      });
    case eu.NoticeTypes.DISPATCH_ERROR:
      if (null == g.metadata) return null;
      let {
        error: ej
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.DISPATCH_ERROR
        }), null == ej ? void 0 : ej.displayMessage, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("563912").then(n.bind(n, "563912"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: ef.default.Messages.LEARN_MORE
        })]
      });
    case eu.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == g.metadata) return null;
      let {
        progress: eb, total: eG, name: eB
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(et.default, {
          justify: et.default.Justify.CENTER,
          children: [null != eB ? ef.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(eB),
            progress: "".concat(eb),
            total: "".concat(eG)
          }) : ef.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(eb),
            total: "".concat(eG)
          }), (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: e_.ellipsis
          })]
        })]
      });
    case eu.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == g.metadata) return null;
      if (null != $.default.testModeEmbeddedApplicationId) return (0, s.jsx)(es.default, {
        color: es.NoticeColors.WARNING,
        children: (0, s.jsxs)(et.default, {
          justify: et.default.Justify.CENTER,
          align: et.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: ef.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: g.metadata.applicationName
            })
          }), (0, s.jsx)(es.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: eu.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(es.default, {
        color: es.NoticeColors.WARNING,
        children: (0, s.jsxs)(et.default, {
          justify: et.default.Justify.CENTER,
          align: et.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: ef.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: g.metadata.applicationName
            })
          }), (0, s.jsx)(er.default, {
            dropdownSize: er.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: e_.testModeSKUSelector,
            color: er.TestModeSKUButtonEnums.Colors.WHITE,
            look: er.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: er.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => N.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: eu.AnalyticsSections.NOTIFICATION_BAR,
                object: eu.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: g.metadata.applicationId,
            children: ef.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(es.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: eu.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case eu.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            V.default.dismissOutboundPromotionNotice()
          }
        }), (0, s.jsx)(en.default, {
          className: e_.premiumIcon
        }), ef.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            el.default.track(eu.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), C.default.open(eu.UserSettingsSections.INVENTORY), V.default.dismissOutboundPromotionNotice()
          },
          children: ef.default.Messages.TAKE_ME_THERE
        })]
      });
    case eu.NoticeTypes.VIEWING_ROLES:
      return (0, s.jsx)(k.default, {});
    case eu.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(es.default, {
        color: eC === ed.PremiumTypes.TIER_1 ? es.NoticeColors.PREMIUM_TIER_1 : eC === ed.PremiumTypes.TIER_0 ? es.NoticeColors.PREMIUM_TIER_0 : es.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(en.default, {
          className: e_.premiumIcon
        }), eC === ed.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eC === ed.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }), (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("67323").then(n.bind(n, "67323"));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: g.metadata.daysLeft,
                premiumType: eC,
                analyticsSource: "Nag Bar",
                premiumSubscription: g.metadata.premiumSubscription
              })
            })
          },
          children: eC === ed.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eC === ed.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: ek, dismissUntil: eF
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: ep,
          onClick: () => {
            em(eF)
          }
        }), ef.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: ek
        }), (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            em(eF), C.default.open(eu.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case eu.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(eu.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(eu.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eC === ed.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eC === ed.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }), (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            em(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(eu.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eC === ed.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eC === ed.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(G.BackToPreviousScreenNotice, {
        buttonText: null !== (a = g.buttonText) && void 0 !== a ? a : ef.default.Messages.GO_BACK,
        onGoBack: g.callback,
        onDismiss: () => em(),
        showCloseButton: !0
      });
    case eu.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: eu.AnalyticsPages.IN_APP
      };
      return (0, s.jsx)(y.default, {
        guildId: _,
        analyticsLocations: eN,
        analyticsLocation: e
      })
    }
    case eu.NoticeTypes.QUARANTINED:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.CUSTOM,
        className: e_.quarantineNotice,
        children: [ef.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(es.NoticeButtonAnchor, {
          href: ec.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: ef.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(u.Anchor, {
          href: ea.default.getArticleURL(eu.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: e_.quarantineLearnMoreLink,
          children: ef.default.Messages.LEARN_MORE
        })]
      });
    case eu.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [ef.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(es.NoticeButtonAnchor, {
          href: "".concat(eu.Links.STATUS),
          children: ef.default.Messages.LEARN_MORE
        }), (0, s.jsx)(es.NoticeCloseButton, {
          onClick: () => em(),
          noticeType: eu.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case eu.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.DANGER,
        children: [ef.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: g.metadata.gameTitle
        }), (0, s.jsx)(es.NoticeButton, {
          onClick: g.metadata.reloadCallback,
          children: ef.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case eu.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: ew, decisionId: eH
      } = g.metadata;
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.WARNING,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != _ && (0, x.clearMentionRaidDetected)(_), em(ew)
          }
        }), ef.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(es.NoticeButton, {
          onClick: () => {
            null != _ && (0, x.removeMentionRaidRestrictionWithFeedback)(_, eH, () => {
              em(ew), (0, x.clearMentionRaidDetected)(_)
            })
          },
          children: ef.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != _ ? (0, s.jsx)(es.NoticeButton, {
          onClick: () => B.default.open(_, eu.GuildSettingsSections.GUILD_AUTOMOD, void 0, eu.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: ef.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case eu.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.BRAND,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            Y.markNoticeDismissed(), em()
          }
        }), ef.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("123592").then(n.bind(n, "123592"));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), Y.markNoticeDismissed(), em()
          },
          children: ef.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case eu.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.BRAND,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => em()
        }), ef.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => {
            C.default.open(eu.UserSettingsSections.LOCALE), em()
          },
          children: ef.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE_CTA
        })]
      });
    case eu.NoticeTypes.HABITUAL_DND:
      return (0, s.jsxs)(es.default, {
        color: es.NoticeColors.BRAND,
        children: [(0, s.jsx)(es.NoticeCloseButton, {
          noticeType: eu.NoticeTypes.HABITUAL_DND,
          onClick: () => {
            em(), (0, w.dismissDNDNotice)()
          }
        }), ef.default.Messages.QUIET_MODE_HABITUAL_DND_NOTICE, (0, s.jsx)(es.PrimaryCTANoticeButton, {
          noticeType: eu.NoticeTypes.HABITUAL_DND,
          onClick: () => {
            C.default.open(eu.UserSettingsSections.NOTIFICATIONS), em(), (0, w.dismissDNDNotice)()
          },
          children: ef.default.Messages.CHECK_IT_OUT
        })]
      });
    default:
      return null
  }
});

function ep() {
  let {
    AnalyticsLocationProvider: e
  } = (0, M.default)(g.default.NOTICE);
  return (0, s.jsx)(e, {
    children: (0, s.jsx)(eN, {})
  })
}