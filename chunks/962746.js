"use strict";
t.r(a), t.d(a, {
  default: function() {
    return eo
  }
}), t("47120");
var l = t("735250"),
  n = t("470079"),
  i = t("120356"),
  r = t.n(i),
  s = t("866442"),
  o = t("442837"),
  u = t("692547"),
  d = t("481060"),
  c = t("239091"),
  f = t("634894"),
  m = t("410030"),
  v = t("607070"),
  g = t("906732"),
  h = t("220082"),
  S = t("864106"),
  C = t("1585"),
  p = t("963202"),
  I = t("369077"),
  A = t("583405"),
  x = t("208567"),
  T = t("680295"),
  U = t("168631"),
  N = t("318661"),
  E = t("943217"),
  j = t("793397"),
  P = t("502762"),
  y = t("347949"),
  _ = t("155916"),
  M = t("138394"),
  R = t("131640"),
  b = t("790711"),
  L = t("19836"),
  w = t("538564"),
  B = t("319300"),
  O = t("584045"),
  k = t("204197"),
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
  en = t("234049"),
  ei = t("471031");
let er = X.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  es = (0, j.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: en.avatarUploaderPremium,
    premiumUserWithoutBanner: en.avatarUploaderPremiumNoBanner,
    default: en.avatarUploaderNormal
  });

function eo(e) {
  var a, i, j, X;
  let {
    user: eo,
    guild: eu,
    canUsePremiumCustomization: ed,
    onUpsellClick: ec,
    onAvatarChange: ef,
    onBannerChange: em,
    pendingAccentColor: ev,
    pendingBanner: eg,
    pendingBio: eh,
    pendingPronouns: eS,
    pendingAvatar: eC,
    pendingAvatarDecoration: ep,
    pendingNickname: eI,
    pendingGlobalName: eA,
    pendingThemeColors: ex,
    pendingProfileEffectId: eT,
    avatarClassName: eU,
    activityName: eN,
    activityCharacter: eE,
    isTryItOutFlow: ej = !1,
    disabledInputs: eP = !1,
    hideExampleButton: ey = !1,
    hideFakeActivity: e_ = !1,
    hideBioSection: eM = !1,
    hideRecentGames: eR = !1,
    forProfileEffectModal: eb = !1,
    hideMemberStatusSection: eL = !0,
    bodyClassName: ew,
    slideInAvatarDecoration: eB = !1,
    useLargeBanner: eO = !1
  } = e, ek = n.useRef(null), [ez, eF] = n.useState(!1), eD = F.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eG,
    avatarSrc: eW,
    eventHandlers: eH
  } = (0, k.default)({
    user: eo,
    guildId: null == eu ? void 0 : eu.id,
    avatarDecorationOverride: (0, S.hasGlobalDefaultAvatarDecoration)(eo, eu) && null == ep ? void 0 : ep,
    avatarOverride: eC,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eV = (0, N.default)(eo.id, null == eu ? void 0 : eu.id), eZ = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eY = (0, m.default)(), eq = (0, o.useStateFromStores)([D.default], () => null == eu ? null : D.default.getMember(eu.id, eo.id)), eK = null === (a = (0, N.default)(eo.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eX = null == eV ? void 0 : eV.profileEffectId, eJ = null != eu && null == eT ? eT !== eX && null !== eT ? eX : eK : eT, eQ = void 0 === eC ? eo.getAvatarURL(void 0, 80) : eC, e$ = (0, h.default)(eQ, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), e0 = null == eV ? void 0 : eV.getPreviewThemeColors(ex), e1 = null !== (i = null == e0 ? void 0 : e0[0]) && void 0 !== i ? i : null == eV ? void 0 : eV.primaryColor, e3 = eZ ? eY : (0, U.getProfileTheme)(e1), e4 = (0, A.default)(null !== (j = null != ev ? ev : e1) && void 0 !== j ? j : (0, s.hex2int)(e$)).hsl, e9 = (0, o.useStateFromStores)([H.default], () => H.default.isFocused()), e8 = null == eV ? void 0 : eV.getPreviewBanner(eg, eD ? e9 : ez), e7 = null != e8 || null != eJ, e6 = eO || null != eJ, e2 = null !== (X = (0, Q.getPreviewNickname)(eI, null == eq ? void 0 : eq.nick)) && void 0 !== X ? X : (0, Q.getPreviewDisplayName)(eA, K.default.getName(eo)), [e5, ae] = (0, o.useStateFromStoresArray)([G.default], () => [G.default.findActivity(eo.id, e => e.type === ee.ActivityTypes.CUSTOM_STATUS), G.default.getStatus(eo.id)]), aa = (0, d.useStatusFillColor)(ae), at = (0, o.useStateFromStores)([W.default], () => W.default.hidePersonalInformation), al = (null == eV ? void 0 : eV.canUsePremiumProfileCustomization) || ed, an = n.useCallback(() => {
    var e, a;
    null === (a = ek.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), ai = n.useCallback((e, a) => {
    null == e || null == a ? ef(null) : "image/gif" !== a.type || q.default.canUseAnimatedAvatar(eo) ? (0, d.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(n, {
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
          t.onClose(), an()
        }
      })
    })
  }, [eo, an, ef]), ar = (e, a) => {
    if (null == e || null == a) return em(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(n, {
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
    let e = null != e3 ? (0, d.getStatusBackdropColor)(e3) : null;
    return (0, l.jsxs)("div", {
      className: en.status,
      children: [null != e && (null == eV ? void 0 : eV.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: en.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(ae, e)
        }
      }), (0, l.jsx)("svg", {
        className: en.statusDot,
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
  } = (0, g.default)(), ad = (0, p.useIsInUserClanExperiment)(), ac = (0, z.useIsUserRecentGamesEnabled)({
    userId: eo.id,
    location: "28tk0bf_4"
  });
  n.useEffect(() => {
    if (eD) return;
    let e = null == eV ? void 0 : eV.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!Y.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eV, eD]);
  let af = null == eu;
  return (0, l.jsxs)(P.default, {
    forceShowPremium: ed,
    user: eo,
    displayProfile: eV,
    profileType: et.UserProfileTypes.POPOUT,
    pendingThemeColors: ex,
    pendingProfileEffectId: eJ,
    className: eb ? al ? en.profileEffectsModalCustomizationPreviewWithTheme : en.profileEffectsModalCustomizationPreviewWithoutTheme : al ? en.profileCustomizationPreviewWithTheme : en.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(T.default, {
      profileEffectId: void 0 !== eJ ? eJ : eX
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(E.default, {
        profileType: et.UserProfileTypes.POPOUT,
        hasBanner: e7,
        isPremium: ed,
        hasThemeColors: al,
        overrideBannerWidth: eb ? 280 : void 0,
        hasProfileEffect: e6,
        children: ed ? (0, l.jsxs)("div", {
          onMouseMove: () => eF(!0),
          onMouseLeave: () => eF(!1),
          children: [(0, l.jsx)(x.default, {
            className: en.bannerUploader,
            showRemoveButton: !1,
            disabled: !ed || eP,
            image: e8,
            makeURL: () => e8,
            onChange: ar,
            imageStyle: {
              backgroundColor: e4
            },
            imageClassName: r()(e7 ? en.bannerUploaderInnerSquare : en.bannerUploaderInnerSquareEmpty),
            hint: el.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, Q.handleOpenSelectImageModal)(ea.UploadTypes.BANNER, null == eq ? void 0 : eq.guildId, ej, void 0),
            hideSize: !0,
            maxFileSizeBytes: $.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: Q.showFileSizeErrorModal
          }), !eD && Y.isAnimatedImageURL(e8) ? (0, l.jsx)(V.default, {
            className: en.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: e6 ? en.bannerUploaderInnerSquare : en.bannerNormal,
          style: {
            backgroundColor: e4
          },
          children: eP ? null : (0, l.jsx)(d.Clickable, {
            onClick: () => null == ec ? void 0 : ec({
              object: ee.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: en.bannerNitroUpsell,
            children: (0, l.jsx)(d.Heading, {
              className: en.bannerNitroUpsellText,
              variant: "eyebrow",
              children: el.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), af ? function() {
        let e = () => (0, Q.handleOpenSelectImageModal)(ea.UploadTypes.AVATAR, null == eq ? void 0 : eq.guildId, ej),
          a = () => (0, C.openAvatarDecorationModal)({
            guild: null == eu ? void 0 : eu,
            analyticsLocations: au,
            isTryItOutFlow: ej
          });
        return (0, l.jsxs)(d.Clickable, {
          ...eH,
          "aria-disabled": eP,
          onClick: eP ? void 0 : n => {
            (0, c.openContextMenuLazy)(n, async () => {
              let {
                default: n
              } = await t.e("34627").then(t.bind(t, "445924"));
              return () => (0, l.jsx)(n, {
                changeAvatarAction: e,
                changeDecorationAction: a
              })
            })
          },
          className: r()(es({
            isPremium: ed,
            hasBanner: e7,
            hasProfileEffect: e6
          }), {
            [en.defaultCursor]: eP
          }),
          children: [(0, l.jsx)(er, {
            className: en.avatarUploaderInner,
            src: eW,
            avatarDecoration: eB ? null : eG,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": eo.username
          }), eB && (0, l.jsx)(_.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, l.jsx)(er, {
              src: ei,
              avatarDecoration: eG,
              size: d.AvatarSizes.SIZE_80,
              status: ee.StatusTypes.UNKNOWN,
              className: en.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eG), eP ? null : (0, l.jsx)("div", {
            className: en.hoverIconWrapper,
            children: (0, l.jsx)(Z.default, {
              className: en.hoverIcon,
              color: "white"
            })
          }), as()]
        })
      }() : function() {
        let e = null != eq && !ed,
          a = (0, l.jsxs)("div", {
            className: es({
              isPremium: ed,
              hasBanner: e7,
              hasProfileEffect: e6
            }),
            children: [(0, l.jsx)(x.default, {
              disabled: eP,
              ref: ek,
              showIcon: null == eG,
              hint: e ? el.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : el.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r()(eU, en.avatarUploaderInner),
              image: eW,
              onChange: ai,
              makeURL: () => eW,
              maxFileSizeBytes: $.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: Q.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, Q.handleOpenSelectImageModal)(ea.UploadTypes.AVATAR, null == eq ? void 0 : eq.guildId, ej, void 0)
            }), null != eG && (0, l.jsx)("img", {
              className: en.avatarDecoration,
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
      }(), (0, l.jsx)(R.UserPopoutBadgeList, {
        user: eo,
        guildId: null == eu ? void 0 : eu.id,
        isTryItOutFlow: ej,
        forProfileEffectModal: eb
      }), function() {
        let e = null == eV ? void 0 : eV.getPreviewBio(eh);
        return (0, l.jsxs)(P.default.Overlay, {
          className: r()(en.body, ew),
          children: [(0, l.jsx)(O.default, {
            isTryItOut: ej,
            user: eo,
            nickname: null != e2 ? e2 : eo.username,
            pronouns: null != eS ? eS : null == eV ? void 0 : eV.pronouns,
            usernameIcon: (() => {
              if (!!(null != eq) && null !== eC) {
                if (!(null == eq.avatar && null == eC)) return (0, l.jsx)(b.default, {
                  user: eo,
                  nickname: e2
                })
              }
            })()
          }), !eb && (0, l.jsx)(w.default, {
            customStatusActivity: e5
          }), (0, l.jsx)(M.default, {}), !eM && (0, l.jsx)(L.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: eu,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: at,
            lastSection: e_,
            lineClamp: eb ? 3 : void 0
          }), ad && (0, l.jsx)(I.UserProfileClanSection, {
            userId: eo.id
          }), !eR && ac && (0, l.jsx)(y.UserProfileRecentGamesSection, {
            userId: eo.id
          }), !eL && (0, l.jsx)(B.default, {
            userId: eo.id,
            guildId: null == eu ? void 0 : eu.id
          }), !e_ && (0, l.jsx)(J.default, {
            activityName: eN,
            activityCharacter: eE,
            showExampleButton: null == eu && !ey
          })]
        })
      }()]
    })]
  })
}