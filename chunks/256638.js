n.d(t, {
  Z: function() {
    return eS
  },
  c: function() {
    return eh
  }
});
var s = n(735250),
  i = n(470079),
  l = n(913527),
  a = n.n(l),
  r = n(613828),
  o = n(442837),
  c = n(481060),
  u = n(668781),
  d = n(893776),
  E = n(117266),
  _ = n(37234),
  I = n(254854),
  T = n(195500),
  m = n(287734),
  N = n(205355),
  h = n(558381),
  C = n(223245),
  S = n(491428),
  A = n(401430),
  g = n(230711),
  p = n(726542),
  f = n(100527),
  R = n(906732),
  O = n(812206),
  M = n(391650),
  x = n(605236),
  v = n(749277),
  L = n(492435),
  Z = n(353926),
  P = n(506357),
  D = n(36459),
  j = n(236069),
  U = n(305325),
  b = n(281956),
  y = n(574650),
  B = n(665302),
  k = n(434404),
  G = n(918658),
  F = n(859428),
  V = n(963249),
  w = n(774276),
  H = n(14335),
  Y = n(246965),
  W = n(272008),
  z = n(523255),
  K = n(852923),
  Q = n(592125),
  X = n(430824),
  q = n(131951),
  J = n(19780),
  $ = n(914010),
  ee = n(594174),
  et = n(55563),
  en = n(695103),
  es = n(933429),
  ei = n(285952),
  el = n(626135),
  ea = n(63063),
  er = n(72924),
  eo = n(69499),
  ec = n(912193),
  eu = n(981631),
  ed = n(474936),
  eE = n(610674),
  e_ = n(65154),
  eI = n(689938),
  eT = n(596791);
let em = () => (0, s.jsxs)(c.Notice, {
    color: c.NoticeColors.DANGER,
    children: [(0, s.jsx)(c.NoticeCloseButton, {
      onClick: () => {
        eh(), (0, ec.b)()
      }
    }), eI.Z.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(c.NoticeButtonAnchor, {
      href: ea.Z.getArticleURL(eu.BhN.NO_INPUT_DETECTED),
      children: eI.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eN = () => (0, s.jsxs)(c.Notice, {
    color: c.NoticeColors.DANGER,
    children: [(0, s.jsx)(c.NoticeCloseButton, {
      onClick: () => {
        eh(), (0, ec.b)()
      }
    }), eI.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(c.NoticeButton, {
      onClick: () => {
        (0, _.jN)(eu.S9g.USER_SETTINGS), g.Z.setSection(eu.oAB.VOICE)
      },
      children: eI.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function eh(e) {
  I.Z.dismiss(null != e ? {
    untilAtLeast: a()(e)
  } : void 0)
}
let eC = 12633 == n.j ? i.memo(function() {
  var e, t, l;
  let I = (0, o.e7)([ee.default], () => ee.default.getCurrentUser()),
    f = (0, o.e7)([$.Z], () => $.Z.getGuildId()),
    ec = (0, o.e7)([es.Z], () => es.Z.getNotice()),
    eC = (0, o.e7)([X.Z], () => X.Z.getGuild(f)),
    {
      analyticsLocations: eS
    } = (0, R.ZP)(),
    eA = null == ec ? void 0 : ec.type,
    eg = (0, b.J)(f);
  i.useEffect(() => {
    null != eA && ! function(e, t) {
      let n = {
        notice_type: e
      };
      null != t && (n.guild_id = t), el.default.track(eu.rMx.APP_NOTICE_VIEWED, n)
    }(eA, f)
  }, [eA, f]), i.useEffect(() => {
    if (null != ec && ec.type === eu.kVF.SURVEY && null != ec.metadata) {
      let {
        metadata: e
      } = ec, t = Z.Z.getUserExperimentDescriptor(e.id);
      null != t && (0, L.W9)(e.id, t), (async () => {
        var e, t;
        (null === (e = ec.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, S.g8)(null === (t = ec.metadata) || void 0 === t ? void 0 : t.id)
      })()
    }
  }, [ec]);
  let ep = function(e) {
    let {
      enabled: t
    } = (0, w.ZP)(!0, e !== eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
    return t || null == e ? null : es.m[e]
  }(eA);
  if (null == ec) return null;
  if (null != ep) return (0, s.jsx)(v.A, {
    dismissibleContent: ep,
    noticeType: ec.type
  });
  let ef = null === (e = ec.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (ec.type) {
    case eu.kVF.LURKING_GUILD:
      return (0, s.jsx)(F.Z, {});
    case eu.kVF.PENDING_MEMBER:
      return (0, s.jsx)(y.Z, {});
    case eu.kVF.INVITED_TO_SPEAK:
      return (0, s.jsx)(K.Z, {});
    case eu.kVF.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eR
      } = ec.metadata;
      return (0, s.jsx)(P.Z, {
        onDismiss: () => eh(eR)
      });
    case eu.kVF.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eO
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(eO),
          noticeType: eu.kVF.WIN32_DEPRECATED_MESSAGE
        }), eI.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: ea.Z.getArticleURL(eu.BhN.WIN32_DEPRECATE)
        })]
      });
    case eu.kVF.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eM
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(eM),
          noticeType: eu.kVF.WIN7_8_DEPRECATED_MESSAGE
        }), eI.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({
          helpCenterLink: ea.Z.getArticleURL(eu.BhN.WIN7_8_DEPRECATE)
        })]
      });
    case eu.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ex
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(ex),
          noticeType: eu.kVF.MACOS_17_18_DEPRECATED_MESSAGE
        }), eI.Z.Messages.MACOS_DEPRECATED_WARNING.format({
          helpCenterLink: ea.Z.getArticleURL(eu.BhN.MACOS_17_18_DEPRECATE)
        })]
      });
    case eu.kVF.GENERIC:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.GENERIC
        }), ec.message, null != ec.buttonText ? (0, s.jsx)(c.PrimaryCTANoticeButton, {
          onClick: ec.callback,
          noticeType: eu.kVF.GENERIC,
          children: ec.buttonText
        }) : null]
      });
    case eu.kVF.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.LAUNCH_GAME_FAILURE
        }), ec.message, null != ec.buttonText ? (0, s.jsx)(c.PrimaryCTANoticeButton, {
          onClick: ec.callback,
          noticeType: eu.kVF.LAUNCH_GAME_FAILURE,
          children: ec.buttonText
        }) : null]
      });
    case eu.kVF.VOICE_DISABLED:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => {
            T.Z.clearRemoteDisconnectVoiceChannelId(), eh()
          },
          noticeType: eu.kVF.VOICE_DISABLED
        }), eI.Z.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = J.Z.getRemoteDisconnectVoiceChannelId();
            null != e && null != Q.Z.getChannel(e) && m.default.selectVoiceChannel(e)
          },
          noticeType: eu.kVF.VOICE_DISABLED,
          children: eI.Z.Messages.RECONNECT
        })]
      });
    case eu.kVF.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => {
            T.Z.clearLastSessionVoiceChannelId(), eh()
          },
          noticeType: eu.kVF.VOICE_CONNECTED_LAST_SESSION
        }), eI.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = J.Z.getLastSessionVoiceChannelId();
            null != e && null != Q.Z.getChannel(e) && m.default.selectVoiceChannel(e)
          },
          noticeType: eu.kVF.VOICE_CONNECTED_LAST_SESSION,
          children: eI.Z.Messages.RECONNECT
        })]
      });
    case eu.kVF.SPOTIFY_AUTO_PAUSED:
      let ev = p.Z.get(eu.ABu.SPOTIFY);
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: eT.platformIcon,
          src: ev.icon.whiteSVG
        }), eI.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          onClick: () => g.Z.open(eu.oAB.VOICE),
          noticeType: eu.kVF.SPOTIFY_AUTO_PAUSED,
          children: eI.Z.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(c.Anchor, {
          className: eT.textLinkSmall,
          href: ea.Z.getArticleURL(eu.BhN.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: eI.Z.Messages.NOTICE_WHATS_THIS
        })]
      });
    case eu.kVF.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DEFAULT,
        children: [eI.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.UNCLAIMED_ACCOUNT,
          onClick: () => eg && null != f ? (0, U.hk)(f) : M.j(),
          children: eI.Z.Messages.CLAIM_ACCOUNT
        })]
      });
    case eu.kVF.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DEFAULT,
        children: [eI.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.UNVERIFIED_ACCOUNT,
          onClick: () => {
            d.Z.verifyResend(), u.Z.show({
              title: eI.Z.Messages.VERIFICATION_EMAIL_TITLE,
              body: eI.Z.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == I ? void 0 : I.email
              }),
              secondaryConfirmText: eI.Z.Messages.CHANGE_EMAIL,
              onConfirmSecondary: M.j
            })
          },
          children: eI.Z.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case eu.kVF.SCHEDULED_MAINTENANCE:
      if (null == ec.metadata) return null;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => N.Z.ackScheduledMaintenance(),
          noticeType: eu.kVF.SCHEDULED_MAINTENANCE
        }), eI.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ec.metadata), (0, s.jsx)(c.NoticeButtonAnchor, {
          href: "".concat(eu.yXt.STATUS, "/incidents/").concat(ec.metadata.id),
          children: eI.Z.Messages.LEARN_MORE
        })]
      });
    case eu.kVF.NO_INPUT_DETECTED:
      if (!q.Z.supports(e_.AN.LOOPBACK)) return (0, s.jsx)(em, {});
      return (0, s.jsx)(eN, {});
    case eu.kVF.HARDWARE_MUTE:
      if (null == ec.metadata) return null;
      let {
        vendor: eL, model: eZ
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [eI.Z.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eL.name,
          modelName: eZ.name
        }), (0, s.jsx)(c.NoticeButtonAnchor, {
          href: eZ.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: eI.Z.Messages.SUPPORT
        })]
      });
    case eu.kVF.STREAMER_MODE:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.STREAMER_MODE
        }), eI.Z.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          onClick: () => C.Z.setEnabled(!1),
          noticeType: eu.kVF.STREAMER_MODE,
          children: eI.Z.Messages.DISABLE
        })]
      });
    case eu.kVF.H264_DISABLED:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => {
            eh()
          }
        }), eI.Z.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(c.NoticeButton, {
          onClick: () => {
            (0, _.jN)(eu.S9g.USER_SETTINGS), g.Z.setSection(eu.oAB.VOICE)
          },
          children: eI.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == ec.metadata) return null;
      let {
        skuId: eP, applicationId: eD
      } = ec.metadata, ej = et.Z.get(eP), eU = O.Z.getApplication(eD);
      if (null == ej || null == eU) return null;
      let eb = {
        page: eu.ZY5.IN_APP
      };
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => E.Z(ej.id),
          noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(c.NitroWheelIcon, {
          size: "md",
          color: "currentColor",
          className: eT.premiumIcon
        }), eI.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eU.name,
          skuName: ej.name
        }), (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, er.S)({
            applicationId: eU.id,
            skuId: ej.id,
            openPremiumPaymentModal: () => {
              (0, V.Z)({
                initialPlanId: null,
                subscriptionTier: ed.Si.TIER_2,
                analyticsLocations: eS,
                analyticsObject: eb
              })
            },
            analyticsLocations: eS,
            analyticsLocationObject: eb,
            context: __OVERLAY__ ? eu.IlC.OVERLAY : eu.IlC.APP
          }).then(() => E.Z(ej.id)),
          children: eI.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == ec.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = ec.metadata, n = et.Z.get(e), i = O.Z.getApplication(t);
      if (null == n || null == i) return null;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(c.NitroWheelIcon, {
          size: "md",
          color: "currentColor",
          className: eT.premiumIcon
        }), eI.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: i.name,
          skuName: n.name
        }), (0, s.jsx)(c.NoticeButton, {
          children: (0, s.jsx)(r.rU, {
            onClick: () => eh(),
            to: {
              pathname: eu.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: eI.Z.Messages.LEARN_MORE
          })
        })]
      })
    }
    case eu.kVF.SURVEY: {
      let e = ec.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: i,
        url: l
      } = e;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.SURVEY,
          onClick: () => {
            (0, S.hZ)(t, !0)
          }
        }), n, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.SURVEY,
          onClick: () => {
            window.open(l, "_blank"), (0, S.hZ)(t, !1)
          },
          children: i
        })]
      })
    }
    case eu.kVF.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.SERVER_USAGE_SURVEY,
          onClick: () => {
            eh()
          }
        }), eI.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == eC ? void 0 : eC.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == I ? void 0 : I.id, "&guild_id=").concat(null == eC ? void 0 : eC.id), "_blank"), eh()
          },
          additionalTrackingProps: {
            guild_id: null == eC ? void 0 : eC.id
          },
          children: eI.Z.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case eu.kVF.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [eI.Z.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(c.NoticeButtonAnchor, {
          href: ea.Z.getArticleURL(eu.BhN.CORRUPT_INSTALLATION),
          target: "_blank",
          children: eI.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case eu.kVF.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.VIDEO_UNSUPPORTED_BROWSER
        }), eI.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, c.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, 431583));
              return t => (0, s.jsx)(e, {
                source: "Video unsupported browser",
                ...t
              })
            })
          },
          children: eI.Z.Messages.DOWNLOAD
        })]
      });
    case eu.kVF.DISPATCH_ERROR:
      if (null == ec.metadata) return null;
      let {
        error: ey
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.DISPATCH_ERROR
        }), null == ey ? void 0 : ey.displayMessage, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.DISPATCH_ERROR,
          onClick: () => (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("20212")]).then(n.bind(n, 915194));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: eI.Z.Messages.LEARN_MORE
        })]
      });
    case eu.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == ec.metadata) return null;
      let {
        progress: eB, total: ek, name: eG
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(ei.Z, {
          justify: ei.Z.Justify.CENTER,
          children: [null != eG ? eI.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(eG),
            progress: "".concat(eB),
            total: "".concat(ek)
          }) : eI.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(eB),
            total: "".concat(ek)
          }), (0, s.jsx)(c.Spinner, {
            type: c.Spinner.Type.PULSING_ELLIPSIS,
            className: eT.ellipsis
          })]
        })]
      });
    case eu.kVF.APPLICATION_TEST_MODE:
      if (null == ec.metadata) return null;
      if (null != en.Z.testModeEmbeddedApplicationId) return (0, s.jsx)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: (0, s.jsxs)(ei.Z, {
          justify: ei.Z.Justify.CENTER,
          align: ei.Z.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: eI.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: ec.metadata.applicationName
            })
          }), (0, s.jsx)(c.NoticeCloseButton, {
            onClick: A.mc,
            noticeType: eu.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: (0, s.jsxs)(ei.Z, {
          justify: ei.Z.Justify.CENTER,
          align: ei.Z.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: eI.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: ec.metadata.applicationName
            })
          }), (0, s.jsx)(eo.Z, {
            dropdownSize: eo.E.DropdownSizes.SMALL,
            className: eT.testModeSKUSelector,
            color: eo.E.Colors.WHITE,
            look: eo.E.Looks.OUTLINED,
            size: eo.E.Sizes.MIN,
            onSKUSelect: e => h.yt(e.id, {
              analyticsSource: {
                page: null,
                section: eu.jXE.NOTIFICATION_BAR,
                object: eu.qAy.NAVIGATION_LINK
              }
            }),
            applicationId: ec.metadata.applicationId,
            children: eI.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(c.NoticeCloseButton, {
            onClick: A.mc,
            noticeType: eu.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
    case eu.kVF.OUTBOUND_PROMOTION:
      return (0, s.jsx)(H.Z, {});
    case eu.kVF.VIEWING_ROLES:
      return (0, s.jsx)(G.Z, {});
    case eu.kVF.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(c.Notice, {
        color: ef === ed.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : ef === ed.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(c.NitroWheelIcon, {
          size: "md",
          color: "currentColor",
          className: eT.premiumIcon
        }), ef === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : ef === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }), (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, c.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("8016"), n.e("68136"), n.e("89021")]).then(n.bind(n, 561623));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: ec.metadata.daysLeft,
                premiumType: ef,
                analyticsSource: "Nag Bar",
                premiumSubscription: ec.metadata.premiumSubscription
              })
            })
          },
          children: ef === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : ef === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eF, dismissUntil: eV
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eA,
          onClick: () => {
            eh(eV)
          }
        }), eI.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eF
        }), (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eh(eV), g.Z.open(eu.oAB.SUBSCRIPTIONS)
          },
          children: eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(eu.oAB.SUBSCRIPTIONS)
          },
          children: eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(eu.oAB.SUBSCRIPTIONS)
          },
          children: eI.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.kVF.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), ef === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : ef === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }) : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: ec.metadata.daysLeft
        }), (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eh(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(eu.oAB.SUBSCRIPTIONS)
          },
          children: ef === ed.p9.TIER_1 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : ef === ed.p9.TIER_0 ? eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : eI.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eu.kVF.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(B.h, {
        buttonText: null !== (l = ec.buttonText) && void 0 !== l ? l : eI.Z.Messages.GO_BACK,
        onGoBack: ec.callback,
        onDismiss: () => eh(),
        showCloseButton: !0
      });
    case eu.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: eu.ZY5.IN_APP
      };
      return (0, s.jsx)(j.Z, {
        guildId: f,
        analyticsLocations: eS,
        analyticsLocation: e
      })
    }
    case eu.kVF.QUARANTINED:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.CUSTOM,
        className: eT.quarantineNotice,
        children: [eI.Z.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(c.NoticeButtonAnchor, {
          href: eE.Z,
          target: "_blank",
          children: eI.Z.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(c.Anchor, {
          href: ea.Z.getArticleURL(eu.BhN.QUARANTINE),
          target: "_blank",
          className: eT.quarantineLearnMoreLink,
          children: eI.Z.Messages.LEARN_MORE
        })]
      });
    case eu.kVF.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [eI.Z.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(c.NoticeButtonAnchor, {
          href: "".concat(eu.yXt.STATUS),
          children: eI.Z.Messages.LEARN_MORE
        }), (0, s.jsx)(c.NoticeCloseButton, {
          onClick: () => eh(),
          noticeType: eu.kVF.BLOCKED_BY_PROXY
        })]
      });
    case eu.kVF.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [eI.Z.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: ec.metadata.gameTitle
        }), (0, s.jsx)(c.NoticeButton, {
          onClick: ec.metadata.reloadCallback,
          children: eI.Z.Messages.ERRORS_RESTART_APP
        })]
      });
    case eu.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: ew, decisionId: eH
      } = ec.metadata;
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.WARNING,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != f && (0, D.T9)(f), eh(ew)
          }
        }), eI.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(c.NoticeButton, {
          onClick: () => {
            null != f && (0, D.UE)(f, eH, () => {
              eh(ew), (0, D.T9)(f)
            })
          },
          children: eI.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != f ? (0, s.jsx)(c.NoticeButton, {
          onClick: () => k.Z.open(f, eu.pNK.GUILD_AUTOMOD, void 0, eu.KsC.AUTOMOD_MENTION_SPAM),
          children: eI.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.BRAND,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            z.hZ(), eh()
          }
        }), eI.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(c.PrimaryCTANoticeButton, {
          noticeType: eu.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, c.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("51563")]).then(n.bind(n, 349994));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), z.hZ(), eh()
          },
          children: eI.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
      let eY = a()().add(5, "days").toDate();
      return (0, s.jsx)(Y.Z, {
        dismissCurrentNotice: () => {
          (0, x.EW)(es.m[eu.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eh(eY)
        },
        subscriptionTier: ed.Si.TIER_2
      });
    case eu.kVF.QUESTS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [(0, s.jsx)(c.NoticeCloseButton, {
          noticeType: eu.kVF.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null === (e = ec.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, W.nE)(ec.metadata.streamKey)
          }
        }), eI.Z.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE]
      });
    default:
      return null
  }
}) : null;

function eS() {
  let {
    analyticsLocations: e
  } = (0, R.ZP)(f.Z.NOTICE);
  return (0, s.jsx)(R.Gt, {
    value: e,
    children: (0, s.jsx)(eC, {})
  })
}