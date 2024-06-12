"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eS
  },
  dismissCurrentNotice: function() {
    return ep
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
  f = n("117266"),
  E = n("37234"),
  _ = n("254854"),
  m = n("195500"),
  T = n("287734"),
  I = n("205355"),
  h = n("558381"),
  p = n("223245"),
  N = n("491428"),
  S = n("401430"),
  C = n("230711"),
  g = n("726542"),
  A = n("100527"),
  M = n("906732"),
  R = n("812206"),
  v = n("391650"),
  O = n("605236"),
  x = n("749277"),
  L = n("492435"),
  D = n("353926"),
  P = n("506357"),
  y = n("36459"),
  U = n("236069"),
  j = n("305325"),
  b = n("281956"),
  F = n("574650"),
  B = n("665302"),
  G = n("434404"),
  k = n("918658"),
  w = n("859428"),
  H = n("963249"),
  V = n("774276"),
  Y = n("14335"),
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
  ei = n("626135"),
  er = n("63063"),
  eo = n("72924"),
  eu = n("69499"),
  ed = n("912193"),
  ec = n("981631"),
  ef = n("474936"),
  eE = n("610674"),
  e_ = n("65154"),
  em = n("689938"),
  eT = n("229647");
let eI = () => (0, s.jsxs)(u.Notice, {
    color: u.NoticeColors.DANGER,
    children: [(0, s.jsx)(u.NoticeCloseButton, {
      onClick: () => {
        ep(), (0, ed.open)()
      }
    }), em.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(u.NoticeButtonAnchor, {
      href: er.default.getArticleURL(ec.HelpdeskArticles.NO_INPUT_DETECTED),
      children: em.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eh = () => (0, s.jsxs)(u.Notice, {
    color: u.NoticeColors.DANGER,
    children: [(0, s.jsx)(u.NoticeCloseButton, {
      onClick: () => {
        ep(), (0, ed.open)()
      }
    }), em.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(u.NoticeButton, {
      onClick: () => {
        (0, E.pushLayer)(ec.Layers.USER_SETTINGS), C.default.setSection(ec.UserSettingsSections.VOICE)
      },
      children: em.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function ep(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: i()(e)
  } : void 0)
}
let eN = a.memo(function() {
  var e, t, l;
  let _ = (0, o.useStateFromStores)([ee.default], () => ee.default.getCurrentUser()),
    A = (0, o.useStateFromStores)([$.default], () => $.default.getGuildId()),
    ed = (0, o.useStateFromStores)([es.default], () => es.default.getNotice()),
    eN = (0, o.useStateFromStores)([X.default], () => X.default.getGuild(A)),
    {
      analyticsLocations: eS
    } = (0, M.default)(),
    eC = null == ed ? void 0 : ed.type,
    eg = (0, b.useShowMemberVerificationGate)(A);
  a.useEffect(() => {
    null != eC && ! function(e, t) {
      let n = {
        notice_type: e
      };
      null != t && (n.guild_id = t), ei.default.track(ec.AnalyticEvents.APP_NOTICE_VIEWED, n)
    }(eC, A)
  }, [eC, A]), a.useEffect(() => {
    if (null != ed && ed.type === ec.NoticeTypes.SURVEY && null != ed.metadata) {
      let {
        metadata: e
      } = ed, t = D.default.getUserExperimentDescriptor(e.id);
      null != t && (0, L.trackExposureToExperiment)(e.id, t), (async () => {
        var e, t;
        (null === (e = ed.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, N.surveySeen)(null === (t = ed.metadata) || void 0 === t ? void 0 : t.id)
      })()
    }
  }, [ed]);
  let eA = function(e) {
    let {
      enabled: t
    } = (0, V.default)(!0, e !== ec.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING);
    return t || null == e ? null : es.typeToDismissibleContent[e]
  }(eC);
  if (null == ed) return null;
  if (null != eA) return (0, s.jsx)(x.DismissibleContentNotices, {
    dismissibleContent: eA,
    noticeType: ed.type
  });
  let eM = null === (e = ed.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (ed.type) {
    case ec.NoticeTypes.LURKING_GUILD:
      return (0, s.jsx)(w.default, {});
    case ec.NoticeTypes.PENDING_MEMBER:
      return (0, s.jsx)(F.default, {});
    case ec.NoticeTypes.INVITED_TO_SPEAK:
      return (0, s.jsx)(Q.default, {});
    case ec.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eR
      } = ed.metadata;
      return (0, s.jsx)(P.default, {
        onDismiss: () => ep(eR)
      });
    case ec.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ev
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(ev),
          noticeType: ec.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), em.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: er.default.getArticleURL(ec.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case ec.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eO
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(eO),
          noticeType: ec.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE
        }), em.default.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({
          helpCenterLink: er.default.getArticleURL(ec.HelpdeskArticles.WIN7_8_DEPRECATE)
        })]
      });
    case ec.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ex
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(ex),
          noticeType: ec.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE
        }), em.default.Messages.MACOS_DEPRECATED_WARNING.format({
          helpCenterLink: er.default.getArticleURL(ec.HelpdeskArticles.MACOS_17_18_DEPRECATE)
        })]
      });
    case ec.NoticeTypes.GENERIC:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.GENERIC
        }), ed.message, null != ed.buttonText ? (0, s.jsx)(u.PrimaryCTANoticeButton, {
          onClick: ed.callback,
          noticeType: ec.NoticeTypes.GENERIC,
          children: ed.buttonText
        }) : null]
      });
    case ec.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.LAUNCH_GAME_FAILURE
        }), ed.message, null != ed.buttonText ? (0, s.jsx)(u.PrimaryCTANoticeButton, {
          onClick: ed.callback,
          noticeType: ec.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: ed.buttonText
        }) : null]
      });
    case ec.NoticeTypes.VOICE_DISABLED:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => {
            m.default.clearRemoteDisconnectVoiceChannelId(), ep()
          },
          noticeType: ec.NoticeTypes.VOICE_DISABLED
        }), em.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = J.default.getRemoteDisconnectVoiceChannelId();
            null != e && null != q.default.getChannel(e) && T.default.selectVoiceChannel(e)
          },
          noticeType: ec.NoticeTypes.VOICE_DISABLED,
          children: em.default.Messages.RECONNECT
        })]
      });
    case ec.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => {
            m.default.clearLastSessionVoiceChannelId(), ep()
          },
          noticeType: ec.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), em.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = J.default.getLastSessionVoiceChannelId();
            null != e && null != q.default.getChannel(e) && T.default.selectVoiceChannel(e)
          },
          noticeType: ec.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: em.default.Messages.RECONNECT
        })]
      });
    case ec.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let eL = g.default.get(ec.PlatformTypes.SPOTIFY);
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: eT.platformIcon,
          src: eL.icon.whiteSVG
        }), em.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          onClick: () => C.default.open(ec.UserSettingsSections.VOICE),
          noticeType: ec.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: em.default.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(u.Anchor, {
          className: eT.textLinkSmall,
          href: er.default.getArticleURL(ec.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: em.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case ec.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DEFAULT,
        children: [em.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => eg && null != A ? (0, j.openMemberVerificationModal)(A) : v.openClaimAccountModal(),
          children: em.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case ec.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DEFAULT,
        children: [em.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: em.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: em.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == _ ? void 0 : _.email
              }),
              secondaryConfirmText: em.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: v.openClaimAccountModal
            })
          },
          children: em.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case ec.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == ed.metadata) return null;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => I.default.ackScheduledMaintenance(),
          noticeType: ec.NoticeTypes.SCHEDULED_MAINTENANCE
        }), em.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ed.metadata), (0, s.jsx)(u.NoticeButtonAnchor, {
          href: "".concat(ec.Links.STATUS, "/incidents/").concat(ed.metadata.id),
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ec.NoticeTypes.NO_INPUT_DETECTED:
      if (!Z.default.supports(e_.Features.LOOPBACK)) return (0, s.jsx)(eI, {});
      return (0, s.jsx)(eh, {});
    case ec.NoticeTypes.HARDWARE_MUTE:
      if (null == ed.metadata) return null;
      let {
        vendor: eD, model: eP
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [em.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eD.name,
          modelName: eP.name
        }), (0, s.jsx)(u.NoticeButtonAnchor, {
          href: eP.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: em.default.Messages.SUPPORT
        })]
      });
    case ec.NoticeTypes.STREAMER_MODE:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.STREAMER_MODE
        }), em.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          onClick: () => p.default.setEnabled(!1),
          noticeType: ec.NoticeTypes.STREAMER_MODE,
          children: em.default.Messages.DISABLE
        })]
      });
    case ec.NoticeTypes.H264_DISABLED:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => {
            ep()
          }
        }), em.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(u.NoticeButton, {
          onClick: () => {
            (0, E.pushLayer)(ec.Layers.USER_SETTINGS), C.default.setSection(ec.UserSettingsSections.VOICE)
          },
          children: em.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case ec.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == ed.metadata) return null;
      let {
        skuId: ey, applicationId: eU
      } = ed.metadata, ej = et.default.get(ey), eb = R.default.getApplication(eU);
      if (null == ej || null == eb) return null;
      let eF = {
        page: ec.AnalyticsPages.IN_APP
      };
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => f.dismiss(ej.id),
          noticeType: ec.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(el.default, {
          className: eT.premiumIcon
        }), em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eb.name,
          skuName: ej.name
        }), (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, eo.openIAPPurchaseModal)({
            applicationId: eb.id,
            skuId: ej.id,
            openPremiumPaymentModal: () => {
              (0, H.default)({
                initialPlanId: null,
                subscriptionTier: ef.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: eS,
                analyticsObject: eF
              })
            },
            analyticsLocations: eS,
            analyticsLocationObject: eF,
            context: __OVERLAY__ ? ec.AppContext.OVERLAY : ec.AppContext.APP
          }).then(() => f.dismiss(ej.id)),
          children: em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case ec.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == ed.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = ed.metadata, n = et.default.get(e), a = R.default.getApplication(t);
      if (null == n || null == a) return null;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(el.default, {
          className: eT.premiumIcon
        }), em.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: a.name,
          skuName: n.name
        }), (0, s.jsx)(u.NoticeButton, {
          children: (0, s.jsx)(r.Link, {
            onClick: () => ep(),
            to: {
              pathname: ec.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: em.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case ec.NoticeTypes.SURVEY: {
      let e = ed.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: a,
        url: l
      } = e;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.SURVEY,
          onClick: () => {
            (0, N.surveyHide)(t, !0)
          }
        }), n, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(l, "_blank"), (0, N.surveyHide)(t, !1)
          },
          children: a
        })]
      })
    }
    case ec.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            ep()
          }
        }), em.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == eN ? void 0 : eN.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == _ ? void 0 : _.id, "&guild_id=").concat(null == eN ? void 0 : eN.id), "_blank"), ep()
          },
          additionalTrackingProps: {
            guild_id: null == eN ? void 0 : eN.id
          },
          children: em.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case ec.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [em.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(u.NoticeButtonAnchor, {
          href: er.default.getArticleURL(ec.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: em.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case ec.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), em.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
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
          children: em.default.Messages.DOWNLOAD
        })]
      });
    case ec.NoticeTypes.DISPATCH_ERROR:
      if (null == ed.metadata) return null;
      let {
        error: eB
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.DISPATCH_ERROR
        }), null == eB ? void 0 : eB.displayMessage, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("20212")]).then(n.bind(n, "915194"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ec.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == ed.metadata) return null;
      let {
        progress: eG, total: ek, name: ew
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          children: [null != ew ? em.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(ew),
            progress: "".concat(eG),
            total: "".concat(ek)
          }) : em.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(eG),
            total: "".concat(ek)
          }), (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: eT.ellipsis
          })]
        })]
      });
    case ec.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == ed.metadata) return null;
      if (null != en.default.testModeEmbeddedApplicationId) return (0, s.jsx)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: em.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: ed.metadata.applicationName
            })
          }), (0, s.jsx)(u.NoticeCloseButton, {
            onClick: S.reset,
            noticeType: ec.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: (0, s.jsxs)(ea.default, {
          justify: ea.default.Justify.CENTER,
          align: ea.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: em.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: ed.metadata.applicationName
            })
          }), (0, s.jsx)(eu.default, {
            dropdownSize: eu.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: eT.testModeSKUSelector,
            color: eu.TestModeSKUButtonEnums.Colors.WHITE,
            look: eu.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: eu.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => h.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: ec.AnalyticsSections.NOTIFICATION_BAR,
                object: ec.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: ed.metadata.applicationId,
            children: em.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(u.NoticeCloseButton, {
            onClick: S.reset,
            noticeType: ec.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case ec.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, s.jsx)(Y.default, {});
    case ec.NoticeTypes.VIEWING_ROLES:
      return (0, s.jsx)(k.default, {});
    case ec.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(u.Notice, {
        color: eM === ef.PremiumTypes.TIER_1 ? u.NoticeColors.PREMIUM_TIER_1 : eM === ef.PremiumTypes.TIER_0 ? u.NoticeColors.PREMIUM_TIER_0 : u.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(el.default, {
          className: eT.premiumIcon
        }), eM === ef.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: ed.metadata.daysLeft
        }) : eM === ef.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: ed.metadata.daysLeft
        }) : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: ed.metadata.daysLeft
        }), (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("8016"), n.e("68136"), n.e("80633")]).then(n.bind(n, "561623"));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: ed.metadata.daysLeft,
                premiumType: eM,
                analyticsSource: "Nag Bar",
                premiumSubscription: ed.metadata.premiumSubscription
              })
            })
          },
          children: eM === ef.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eM === ef.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case ec.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eH, dismissUntil: eV
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: eC,
          onClick: () => {
            ep(eV)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eH
        }), (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            ep(eV), C.default.open(ec.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case ec.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ec.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ec.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ec.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: em.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ec.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eM === ef.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: ed.metadata.daysLeft
        }) : eM === ef.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: ed.metadata.daysLeft
        }) : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: ed.metadata.daysLeft
        }), (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ep(null === (t = ed.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(ec.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eM === ef.PremiumTypes.TIER_1 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eM === ef.PremiumTypes.TIER_0 ? em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : em.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case ec.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(B.BackToPreviousScreenNotice, {
        buttonText: null !== (l = ed.buttonText) && void 0 !== l ? l : em.default.Messages.GO_BACK,
        onGoBack: ed.callback,
        onDismiss: () => ep(),
        showCloseButton: !0
      });
    case ec.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: ec.AnalyticsPages.IN_APP
      };
      return (0, s.jsx)(U.default, {
        guildId: A,
        analyticsLocations: eS,
        analyticsLocation: e
      })
    }
    case ec.NoticeTypes.QUARANTINED:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.CUSTOM,
        className: eT.quarantineNotice,
        children: [em.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(u.NoticeButtonAnchor, {
          href: eE.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: em.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(u.Anchor, {
          href: er.default.getArticleURL(ec.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: eT.quarantineLearnMoreLink,
          children: em.default.Messages.LEARN_MORE
        })]
      });
    case ec.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [em.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(u.NoticeButtonAnchor, {
          href: "".concat(ec.Links.STATUS),
          children: em.default.Messages.LEARN_MORE
        }), (0, s.jsx)(u.NoticeCloseButton, {
          onClick: () => ep(),
          noticeType: ec.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case ec.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [em.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: ed.metadata.gameTitle
        }), (0, s.jsx)(u.NoticeButton, {
          onClick: ed.metadata.reloadCallback,
          children: em.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case ec.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: eY, decisionId: eK
      } = ed.metadata;
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.WARNING,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != A && (0, y.clearMentionRaidDetected)(A), ep(eY)
          }
        }), em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(u.NoticeButton, {
          onClick: () => {
            null != A && (0, y.removeMentionRaidRestrictionWithFeedback)(A, eK, () => {
              ep(eY), (0, y.clearMentionRaidDetected)(A)
            })
          },
          children: em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != A ? (0, s.jsx)(u.NoticeButton, {
          onClick: () => G.default.open(A, ec.GuildSettingsSections.GUILD_AUTOMOD, void 0, ec.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: em.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case ec.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.BRAND,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            z.markNoticeDismissed(), ep()
          }
        }), em.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(u.PrimaryCTANoticeButton, {
          noticeType: ec.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("51563")]).then(n.bind(n, "349994"));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), z.markNoticeDismissed(), ep()
          },
          children: em.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case ec.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING:
      let eW = i()().add(5, "days").toDate();
      return (0, s.jsx)(K.default, {
        dismissCurrentNotice: () => {
          (0, O.markDismissibleContentAsDismissed)(es.typeToDismissibleContent[ec.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]), ep(eW)
        },
        subscriptionTier: ef.PremiumSubscriptionSKUs.TIER_2
      });
    case ec.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(u.Notice, {
        color: u.NoticeColors.DANGER,
        children: [(0, s.jsx)(u.NoticeCloseButton, {
          noticeType: ec.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null === (e = ed.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, W.dismissProgressTrackingFailureNotice)(ed.metadata.streamKey)
          }
        }), em.default.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE]
      });
    default:
      return null
  }
});

function eS() {
  let {
    analyticsLocations: e
  } = (0, M.default)(A.default.NOTICE);
  return (0, s.jsx)(M.AnalyticsLocationProvider, {
    value: e,
    children: (0, s.jsx)(eN, {})
  })
}