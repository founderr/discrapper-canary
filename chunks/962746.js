"use strict";
t.r(a), t.d(a, {
  default: function() {
    return eo
  }
}), t("47120");
var l = t("735250"),
  i = t("470079"),
  n = t("120356"),
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
  h = t("220082"),
  g = t("864106"),
  S = t("1585"),
  I = t("963202"),
  A = t("369077"),
  T = t("583405"),
  x = t("208567"),
  E = t("680295"),
  P = t("168631"),
  U = t("318661"),
  y = t("943217"),
  N = t("793397"),
  j = t("502762"),
  C = t("347949"),
  b = t("155916"),
  M = t("138394"),
  _ = t("131640"),
  R = t("790711"),
  k = t("19836"),
  w = t("538564"),
  O = t("319300"),
  B = t("584045"),
  L = t("204197"),
  z = t("761174"),
  F = t("695346"),
  D = t("271383"),
  G = t("158776"),
  W = t("246946"),
  H = t("451478"),
  V = t("311715"),
  Z = t("586791"),
  Y = t("768581"),
  q = t("74538"),
  K = t("51144"),
  X = t("998502"),
  J = t("414666"),
  Q = t("654904"),
  $ = t("200299"),
  ee = t("981631"),
  ea = t("486324"),
  et = t("228168"),
  el = t("689938"),
  ei = t("943455"),
  en = t("471031");
let er = X.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  es = (0, N.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: ei.avatarUploaderPremium,
    premiumUserWithoutBanner: ei.avatarUploaderPremiumNoBanner,
    default: ei.avatarUploaderNormal
  });

function eo(e) {
  var a, n, N, X;
  let {
    user: eo,
    guild: eu,
    canUsePremiumCustomization: ed,
    onUpsellClick: ec,
    onAvatarChange: ef,
    onBannerChange: em,
    pendingAccentColor: ev,
    pendingBanner: ep,
    pendingBio: eh,
    pendingPronouns: eg,
    pendingAvatar: eS,
    pendingAvatarDecoration: eI,
    pendingNickname: eA,
    pendingGlobalName: eT,
    pendingThemeColors: ex,
    pendingProfileEffectId: eE,
    avatarClassName: eP,
    activityName: eU,
    activityCharacter: ey,
    isTryItOutFlow: eN = !1,
    disabledInputs: ej = !1,
    hideExampleButton: eC = !1,
    hideFakeActivity: eb = !1,
    hideBioSection: eM = !1,
    hideRecentGames: e_ = !1,
    forProfileEffectModal: eR = !1,
    hideMemberStatusSection: ek = !0,
    bodyClassName: ew,
    slideInAvatarDecoration: eO = !1,
    useLargeBanner: eB = !1
  } = e, eL = i.useRef(null), [ez, eF] = i.useState(!1), eD = F.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eG,
    avatarSrc: eW,
    eventHandlers: eH
  } = (0, L.default)({
    user: eo,
    guildId: null == eu ? void 0 : eu.id,
    avatarDecorationOverride: (0, g.hasGlobalDefaultAvatarDecoration)(eo, eu) && null == eI ? void 0 : eI,
    avatarOverride: eS,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eV = (0, U.default)(eo.id, null == eu ? void 0 : eu.id), eZ = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eY = (0, m.default)(), eq = (0, o.useStateFromStores)([D.default], () => null == eu ? null : D.default.getMember(eu.id, eo.id)), eK = null === (a = (0, U.default)(eo.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eX = null == eV ? void 0 : eV.profileEffectId, eJ = null != eu && null == eE ? eE !== eX && null !== eE ? eX : eK : eE, eQ = void 0 === eS ? eo.getAvatarURL(void 0, 80) : eS, e$ = (0, h.default)(eQ, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), e0 = null == eV ? void 0 : eV.getPreviewThemeColors(ex), e1 = null !== (n = null == e0 ? void 0 : e0[0]) && void 0 !== n ? n : null == eV ? void 0 : eV.primaryColor, e6 = eZ ? eY : (0, P.getProfileTheme)(e1), e4 = (0, T.default)(null !== (N = null != ev ? ev : e1) && void 0 !== N ? N : (0, s.hex2int)(e$)).hsl, e8 = (0, o.useStateFromStores)([H.default], () => H.default.isFocused()), e9 = null == eV ? void 0 : eV.getPreviewBanner(ep, eD ? e8 : ez), e3 = null != e9 || null != eJ, e7 = eB || null != eJ, e5 = null !== (X = (0, Q.getPreviewNickname)(eA, null == eq ? void 0 : eq.nick)) && void 0 !== X ? X : (0, Q.getPreviewDisplayName)(eT, K.default.getName(eo)), [e2, ae] = (0, o.useStateFromStoresArray)([G.default], () => [G.default.findActivity(eo.id, e => e.type === ee.ActivityTypes.CUSTOM_STATUS), G.default.getStatus(eo.id)]), aa = (0, d.useStatusFillColor)(ae), at = (0, o.useStateFromStores)([W.default], () => W.default.hidePersonalInformation), al = (null == eV ? void 0 : eV.canUsePremiumProfileCustomization) || ed, ai = i.useCallback(() => {
    var e, a;
    null === (a = eL.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), an = i.useCallback((e, a) => {
    null == e || null == a ? ef(null) : "image/gif" !== a.type || q.default.canUseAnimatedAvatar(eo) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: ef,
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
          t.onClose(), ai()
        }
      })
    })
  }, [eo, ai, ef]), ar = (e, a) => {
    if (null == e || null == a) return em(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: em,
        uploadType: ea.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    })
  };

  function as() {
    let e = null != e6 ? (0, d.getStatusBackdropColor)(e6) : null;
    return (0, l.jsxs)("div", {
      className: ei.status,
      children: [null != e && (null == eV ? void 0 : eV.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: ei.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(ae, e)
        }
      }), (0, l.jsx)("svg", {
        className: ei.statusDot,
        children: (0, l.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: aa,
          mask: "url(#".concat((0, d.getStatusMask)(ae, !1), ")")
        })
      })]
    })
  }
  let ao = "ProfileCustomizationPreview";
  (0, f.useTriggerDebuggingAA)({
    location: ao + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: ao + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: au
  } = (0, p.default)(), ad = (0, I.useIsInUserClanExperiment)(), ac = (0, z.useIsUserRecentGamesEnabled)({
    userId: eo.id,
    location: "28tk0bf_4"
  });
  i.useEffect(() => {
    if (eD) return;
    let e = null == eV ? void 0 : eV.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!Y.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eV, eD]);
  let af = null == eu;
  return (0, l.jsxs)(j.default, {
    forceShowPremium: ed,
    user: eo,
    displayProfile: eV,
    profileType: et.UserProfileTypes.POPOUT,
    pendingThemeColors: ex,
    pendingProfileEffectId: eJ,
    className: eR ? al ? ei.profileEffectsModalCustomizationPreviewWithTheme : ei.profileEffectsModalCustomizationPreviewWithoutTheme : al ? ei.profileCustomizationPreviewWithTheme : ei.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(E.default, {
      profileEffectId: void 0 !== eJ ? eJ : eX
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(y.default, {
        profileType: et.UserProfileTypes.POPOUT,
        hasBanner: e3,
        isPremium: ed,
        hasThemeColors: al,
        overrideBannerWidth: eR ? 280 : void 0,
        hasProfileEffect: e7,
        children: ed ? (0, l.jsxs)("div", {
          onMouseMove: () => eF(!0),
          onMouseLeave: () => eF(!1),
          children: [(0, l.jsx)(x.default, {
            className: ei.bannerUploader,
            showRemoveButton: !1,
            disabled: !ed || ej,
            image: e9,
            makeURL: () => e9,
            onChange: ar,
            imageStyle: {
              backgroundColor: e4
            },
            imageClassName: r()(e3 ? ei.bannerUploaderInnerSquare : ei.bannerUploaderInnerSquareEmpty),
            hint: el.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, Q.handleOpenSelectImageModal)(ea.UploadTypes.BANNER, null == eq ? void 0 : eq.guildId, eN, void 0),
            hideSize: !0,
            maxFileSizeBytes: $.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: Q.showFileSizeErrorModal
          }), !eD && Y.isAnimatedImageURL(e9) ? (0, l.jsx)(V.default, {
            className: ei.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: e7 ? ei.bannerUploaderInnerSquare : ei.bannerNormal,
          style: {
            backgroundColor: e4
          },
          children: ej ? null : (0, l.jsx)(d.Clickable, {
            onClick: () => null == ec ? void 0 : ec({
              object: ee.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: ei.bannerNitroUpsell,
            children: (0, l.jsx)(d.Heading, {
              className: ei.bannerNitroUpsellText,
              variant: "eyebrow",
              children: el.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), af ? function() {
        let e = () => (0, Q.handleOpenSelectImageModal)(ea.UploadTypes.AVATAR, null == eq ? void 0 : eq.guildId, eN),
          a = () => (0, S.openAvatarDecorationModal)({
            guild: null == eu ? void 0 : eu,
            analyticsLocations: au,
            isTryItOutFlow: eN
          });
        return (0, l.jsxs)(d.Clickable, {
          ...eH,
          "aria-disabled": ej,
          onClick: ej ? void 0 : i => {
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
          className: r()(es({
            isPremium: ed,
            hasBanner: e3,
            hasProfileEffect: e7
          }), {
            [ei.defaultCursor]: ej
          }),
          children: [(0, l.jsx)(er, {
            className: ei.avatarUploaderInner,
            src: eW,
            avatarDecoration: eO ? null : eG,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": eo.username
          }), eO && (0, l.jsx)(b.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, l.jsx)(er, {
              src: en,
              avatarDecoration: eG,
              size: d.AvatarSizes.SIZE_80,
              status: ee.StatusTypes.UNKNOWN,
              className: ei.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eG), ej ? null : (0, l.jsx)("div", {
            className: ei.hoverIconWrapper,
            children: (0, l.jsx)(Z.default, {
              className: ei.hoverIcon,
              color: "white"
            })
          }), as()]
        })
      }() : function() {
        let e = null != eq && !ed,
          a = (0, l.jsxs)("div", {
            className: es({
              isPremium: ed,
              hasBanner: e3,
              hasProfileEffect: e7
            }),
            children: [(0, l.jsx)(x.default, {
              disabled: ej,
              ref: eL,
              showIcon: null == eG,
              hint: e ? el.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : el.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r()(eP, ei.avatarUploaderInner),
              image: eW,
              onChange: an,
              makeURL: () => eW,
              maxFileSizeBytes: $.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: Q.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, Q.handleOpenSelectImageModal)(ea.UploadTypes.AVATAR, null == eq ? void 0 : eq.guildId, eN, void 0)
            }), null != eG && (0, l.jsx)("img", {
              className: ei.avatarDecoration,
              src: eG,
              alt: " ",
              "aria-hidden": !0
            }), as()]
          });
        return e ? (0, l.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == ec || ec({
              object: ee.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, l.jsx)(_.UserPopoutBadgeList, {
        user: eo,
        guildId: null == eu ? void 0 : eu.id,
        isTryItOutFlow: eN,
        forProfileEffectModal: eR
      }), function() {
        let e = null == eV ? void 0 : eV.getPreviewBio(eh);
        return (0, l.jsxs)(j.default.Overlay, {
          className: r()(ei.body, ew),
          children: [(0, l.jsx)(B.default, {
            isTryItOut: eN,
            user: eo,
            nickname: null != e5 ? e5 : eo.username,
            pronouns: null != eg ? eg : null == eV ? void 0 : eV.pronouns,
            usernameIcon: (() => {
              if (!!(null != eq) && null !== eS) {
                if (!(null == eq.avatar && null == eS)) return (0, l.jsx)(R.default, {
                  user: eo,
                  nickname: e5
                })
              }
            })()
          }), !eR && (0, l.jsx)(w.default, {
            customStatusActivity: e2
          }), (0, l.jsx)(M.default, {}), !eM && (0, l.jsx)(k.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: eu,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: at,
            lastSection: eb,
            lineClamp: eR ? 3 : void 0
          }), ad && (0, l.jsx)(A.UserProfileClanSection, {
            userId: eo.id
          }), !e_ && ac && (0, l.jsx)(C.UserProfileRecentGamesSection, {
            userId: eo.id
          }), !ek && (0, l.jsx)(O.default, {
            userId: eo.id,
            guildId: null == eu ? void 0 : eu.id
          }), !eb && (0, l.jsx)(J.default, {
            activityName: eU,
            activityCharacter: ey,
            showExampleButton: null == eu && !eC
          })]
        })
      }()]
    })]
  })
}