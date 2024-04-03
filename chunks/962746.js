"use strict";
t.r(a), t.d(a, {
  default: function() {
    return er
  }
}), t("47120");
var l = t("735250"),
  i = t("470079"),
  n = t("803997"),
  r = t.n(n),
  s = t("866442"),
  o = t("442837"),
  u = t("692547"),
  d = t("481060"),
  c = t("239091"),
  f = t("634894"),
  m = t("410030"),
  v = t("607070"),
  p = t("906732"),
  g = t("220082"),
  h = t("864106"),
  S = t("1585"),
  I = t("583405"),
  A = t("208567"),
  T = t("680295"),
  x = t("168631"),
  E = t("318661"),
  P = t("943217"),
  U = t("793397"),
  y = t("747074"),
  N = t("347949"),
  j = t("155916"),
  C = t("138394"),
  b = t("131640"),
  M = t("790711"),
  _ = t("19836"),
  R = t("538564"),
  k = t("319300"),
  w = t("584045"),
  O = t("204197"),
  B = t("761174"),
  L = t("695346"),
  z = t("271383"),
  F = t("158776"),
  D = t("246946"),
  G = t("451478"),
  W = t("311715"),
  H = t("586791"),
  V = t("768581"),
  Z = t("74538"),
  Y = t("51144"),
  q = t("998502"),
  K = t("414666"),
  X = t("654904"),
  J = t("200299"),
  Q = t("981631"),
  $ = t("486324"),
  ee = t("228168"),
  ea = t("689938"),
  et = t("943455"),
  el = t("471031");
let ei = q.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  en = (0, U.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: et.avatarUploaderPremium,
    premiumUserWithoutBanner: et.avatarUploaderPremiumNoBanner,
    default: et.avatarUploaderNormal
  });

function er(e) {
  var a, n, U, q;
  let {
    user: er,
    guild: es,
    canUsePremiumCustomization: eo,
    onUpsellClick: eu,
    onAvatarChange: ed,
    onBannerChange: ec,
    pendingAccentColor: ef,
    pendingBanner: em,
    pendingBio: ev,
    pendingPronouns: ep,
    pendingAvatar: eg,
    pendingAvatarDecoration: eh,
    pendingNickname: eS,
    pendingGlobalName: eI,
    pendingThemeColors: eA,
    pendingProfileEffectId: eT,
    avatarClassName: ex,
    activityName: eE,
    activityCharacter: eP,
    isTryItOutFlow: eU = !1,
    disabledInputs: ey = !1,
    hideExampleButton: eN = !1,
    hideFakeActivity: ej = !1,
    hideBioSection: eC = !1,
    hideRecentGames: eb = !1,
    forProfileEffectModal: eM = !1,
    hideMemberStatusSection: e_ = !0,
    bodyClassName: eR,
    slideInAvatarDecoration: ek = !1,
    useLargeBanner: ew = !1
  } = e, eO = i.useRef(null), [eB, eL] = i.useState(!1), ez = L.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eF,
    avatarSrc: eD,
    eventHandlers: eG
  } = (0, O.default)({
    user: er,
    guildId: null == es ? void 0 : es.id,
    avatarDecorationOverride: (0, h.hasGlobalDefaultAvatarDecoration)(er, es) && null == eh ? void 0 : eh,
    avatarOverride: eg,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eW = (0, E.default)(er.id, null == es ? void 0 : es.id), eH = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eV = (0, m.default)(), eZ = (0, o.useStateFromStores)([z.default], () => null == es ? null : z.default.getMember(es.id, er.id)), eY = null != es, eq = null === (a = (0, E.default)(er.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eK = null == eW ? void 0 : eW.profileEffectId, eX = eY && null == eT ? eT !== eK && null !== eT ? eK : eq : eT, eJ = void 0 === eg ? er.getAvatarURL(void 0, 80) : eg, eQ = (0, g.default)(eJ, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), e$ = null == eW ? void 0 : eW.getPreviewThemeColors(eA), e0 = null !== (n = null == e$ ? void 0 : e$[0]) && void 0 !== n ? n : null == eW ? void 0 : eW.primaryColor, e1 = eH ? eV : (0, x.getProfileTheme)(e0), e4 = (0, I.default)(null !== (U = null != ef ? ef : e0) && void 0 !== U ? U : (0, s.hex2int)(eQ)).hsl, e8 = (0, o.useStateFromStores)([G.default], () => G.default.isFocused()), e9 = null == eW ? void 0 : eW.getPreviewBanner(em, ez ? e8 : eB), e6 = null != e9 || null != eX, e7 = ew || null != eX, e3 = null !== (q = (0, X.getPreviewNickname)(eS, null == eZ ? void 0 : eZ.nick)) && void 0 !== q ? q : (0, X.getPreviewDisplayName)(eI, Y.default.getName(er)), [e5, e2] = (0, o.useStateFromStoresArray)([F.default], () => [F.default.findActivity(er.id, e => e.type === Q.ActivityTypes.CUSTOM_STATUS), F.default.getStatus(er.id)]), ae = (0, d.useStatusFillColor)(e2), aa = (0, o.useStateFromStores)([D.default], () => D.default.hidePersonalInformation), at = (null == eW ? void 0 : eW.canUsePremiumProfileCustomization) || eo, al = i.useCallback(() => {
    var e, a;
    null === (a = eO.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), ai = i.useCallback((e, a) => {
    null == e || null == a ? ed(null) : "image/gif" !== a.type || Z.default.canUseAnimatedAvatar(er) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: ed,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    }) : (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([t.e("99387"), t.e("9362")]).then(t.bind(t, "561910"));
      return t => (0, l.jsx)(a, {
        ...t,
        imgURI: e,
        onChangeAvatar: () => {
          t.onClose(), al()
        }
      })
    })
  }, [er, al, ed]), an = (e, a) => {
    if (null == e || null == a) return ec(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: ec,
        uploadType: $.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    })
  };

  function ar() {
    let e = null != e1 ? (0, d.getStatusBackdropColor)(e1) : null;
    return (0, l.jsxs)("div", {
      className: et.status,
      children: [null != e && (null == eW ? void 0 : eW.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: et.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e2, e)
        }
      }), (0, l.jsx)("svg", {
        className: et.statusDot,
        children: (0, l.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: ae,
          mask: "url(#".concat((0, d.getStatusMask)(e2, !1), ")")
        })
      })]
    })
  }
  let as = "ProfileCustomizationPreview";
  (0, f.useTriggerDebuggingAA)({
    location: as + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: as + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: ao
  } = (0, p.default)(), au = (0, B.useIsUserRecentGamesEnabled)({
    userId: er.id,
    location: "28tk0bf_4"
  });
  i.useEffect(() => {
    if (ez) return;
    let e = null == eW ? void 0 : eW.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!V.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eW, ez]);
  let ad = null == es;
  return (0, l.jsxs)(y.default, {
    forceShowPremium: eo,
    user: er,
    guildId: null == es ? void 0 : es.id,
    profileType: ee.UserProfileTypes.POPOUT,
    pendingThemeColors: eA,
    pendingProfileEffectId: eX,
    className: eM ? at ? et.profileEffectsModalCustomizationPreviewWithTheme : et.profileEffectsModalCustomizationPreviewWithoutTheme : at ? et.profileCustomizationPreviewWithTheme : et.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(T.default, {
      profileEffectId: void 0 !== eX ? eX : eK
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(P.default, {
        profileType: ee.UserProfileTypes.POPOUT,
        hasBanner: e6,
        isPremium: eo,
        hasThemeColors: at,
        forProfileEffectModal: eM,
        hasProfileEffect: e7,
        children: eo ? (0, l.jsxs)("div", {
          onMouseMove: () => eL(!0),
          onMouseLeave: () => eL(!1),
          children: [(0, l.jsx)(A.default, {
            className: et.bannerUploader,
            showRemoveButton: !1,
            disabled: !eo || ey,
            image: e9,
            makeURL: () => e9,
            onChange: an,
            imageStyle: {
              backgroundColor: e4
            },
            imageClassName: r()(e6 ? et.bannerUploaderInnerSquare : et.bannerUploaderInnerSquareEmpty),
            hint: ea.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, X.handleOpenSelectImageModal)($.UploadTypes.BANNER, null == eZ ? void 0 : eZ.guildId, eU, void 0),
            hideSize: !0,
            maxFileSizeBytes: J.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: X.showFileSizeErrorModal
          }), !ez && V.isAnimatedImageURL(e9) ? (0, l.jsx)(W.default, {
            className: et.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: e7 ? et.bannerUploaderInnerSquare : et.bannerNormal,
          style: {
            backgroundColor: e4
          },
          children: ey ? null : (0, l.jsx)(d.Clickable, {
            onClick: () => null == eu ? void 0 : eu({
              object: Q.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: et.bannerNitroUpsell,
            children: (0, l.jsx)(d.Heading, {
              className: et.bannerNitroUpsellText,
              variant: "eyebrow",
              children: ea.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), ad ? function() {
        let e = () => (0, X.handleOpenSelectImageModal)($.UploadTypes.AVATAR, null == eZ ? void 0 : eZ.guildId, eU),
          a = () => (0, S.openAvatarDecorationModal)({
            guild: null == es ? void 0 : es,
            analyticsLocations: ao,
            isTryItOutFlow: eU
          });
        return (0, l.jsxs)(d.Clickable, {
          ...eG,
          "aria-disabled": ey,
          onClick: ey ? void 0 : i => {
            (0, c.openContextMenuLazy)(i, async () => {
              let {
                default: i
              } = await t.e("34627").then(t.bind(t, "445924"));
              return () => (0, l.jsx)(i, {
                changeAvatarAction: e,
                changeDecorationAction: a
              })
            })
          },
          className: r()(en({
            isPremium: eo,
            hasBanner: e6,
            hasProfileEffect: e7
          }), {
            [et.defaultCursor]: ey
          }),
          children: [(0, l.jsx)(ei, {
            className: et.avatarUploaderInner,
            src: eD,
            avatarDecoration: ek ? null : eF,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": er.username
          }), ek && (0, l.jsx)(j.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, l.jsx)(ei, {
              src: el,
              avatarDecoration: eF,
              size: d.AvatarSizes.SIZE_80,
              status: Q.StatusTypes.UNKNOWN,
              className: et.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eF), ey ? null : (0, l.jsx)("div", {
            className: et.hoverIconWrapper,
            children: (0, l.jsx)(H.default, {
              className: et.hoverIcon,
              color: "white"
            })
          }), ar()]
        })
      }() : function() {
        let e = null != eZ && !eo,
          a = (0, l.jsxs)("div", {
            className: en({
              isPremium: eo,
              hasBanner: e6,
              hasProfileEffect: e7
            }),
            children: [(0, l.jsx)(A.default, {
              disabled: ey,
              ref: eO,
              showIcon: null == eF,
              hint: e ? ea.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : ea.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r()(ex, et.avatarUploaderInner),
              image: eD,
              onChange: ai,
              makeURL: () => eD,
              maxFileSizeBytes: J.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: X.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, X.handleOpenSelectImageModal)($.UploadTypes.AVATAR, null == eZ ? void 0 : eZ.guildId, eU, void 0)
            }), null != eF && (0, l.jsx)("img", {
              className: et.avatarDecoration,
              src: eF,
              alt: " ",
              "aria-hidden": !0
            }), ar()]
          });
        return e ? (0, l.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == eu || eu({
              object: Q.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, l.jsx)(b.UserPopoutBadgeList, {
        user: er,
        guildId: null == es ? void 0 : es.id,
        isTryItOutFlow: eU,
        forProfileEffectModal: eM
      }), function() {
        let e = null == eW ? void 0 : eW.getPreviewBio(ev);
        return (0, l.jsxs)(y.default.Inner, {
          className: r()(et.body, eR),
          children: [(0, l.jsx)(w.default, {
            isTryItOut: eU,
            user: er,
            nickname: null != e3 ? e3 : er.username,
            pronouns: null != ep ? ep : null == eW ? void 0 : eW.pronouns,
            usernameIcon: (() => {
              if (!!(null != eZ) && null !== eg) {
                if (!(null == eZ.avatar && null == eg)) return (0, l.jsx)(M.default, {
                  user: er,
                  nickname: e3
                })
              }
            })()
          }), !eM && (0, l.jsx)(R.default, {
            customStatusActivity: e5
          }), (0, l.jsx)(C.default, {}), !eC && (0, l.jsx)(_.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: es,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: aa,
            lastSection: ej,
            lineClamp: eM ? 3 : void 0
          }), !eb && au && (0, l.jsx)(N.UserProfileRecentGamesSection, {
            userId: er.id
          }), !e_ && (0, l.jsx)(k.default, {
            userId: er.id,
            guild: es,
            guildMember: eZ
          }), !ej && (0, l.jsx)(K.default, {
            activityName: eE,
            activityCharacter: eP,
            showExampleButton: null == es && !eN
          })]
        })
      }()]
    })]
  })
}