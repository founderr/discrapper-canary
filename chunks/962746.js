"use strict";
t.r(a), t.d(a, {
  default: function() {
    return el
  }
}), t("47120");
var l = t("735250"),
  i = t("470079"),
  r = t("120356"),
  n = t.n(r),
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
  I = t("583405"),
  T = t("208567"),
  A = t("680295"),
  E = t("168631"),
  x = t("318661"),
  P = t("943217"),
  y = t("793397"),
  N = t("502762"),
  j = t("155916"),
  C = t("138394"),
  U = t("131640"),
  _ = t("790711"),
  b = t("19836"),
  M = t("538564"),
  w = t("319300"),
  R = t("584045"),
  B = t("204197"),
  O = t("695346"),
  k = t("271383"),
  z = t("158776"),
  L = t("246946"),
  F = t("451478"),
  D = t("311715"),
  G = t("586791"),
  W = t("768581"),
  Z = t("74538"),
  H = t("998502"),
  V = t("414666"),
  K = t("654904"),
  X = t("200299"),
  Y = t("981631"),
  q = t("486324"),
  J = t("228168"),
  Q = t("689938"),
  $ = t("852552"),
  ee = t("471031");
let ea = H.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  et = (0, y.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: $.avatarUploaderPremium,
    premiumUserWithoutBanner: $.avatarUploaderPremiumNoBanner,
    default: $.avatarUploaderNormal
  });

function el(e) {
  var a, r, y;
  let {
    user: H,
    guild: el,
    canUsePremiumCustomization: ei,
    onUpsellClick: er,
    onAvatarChange: en,
    onBannerChange: es,
    pendingAccentColor: eo,
    pendingBanner: eu,
    pendingBio: ed,
    pendingPronouns: ec,
    pendingAvatar: ef,
    pendingAvatarDecoration: em,
    pendingNickname: ev,
    pendingGlobalName: ep,
    pendingThemeColors: eh,
    pendingProfileEffectId: eg,
    avatarClassName: eS,
    activityName: eI,
    activityCharacter: eT,
    isTryItOutFlow: eA = !1,
    disabledInputs: eE = !1,
    hideExampleButton: ex = !1,
    hideFakeActivity: eP = !1,
    hideCustomStatus: ey = !1,
    hideBioSection: eN = !1,
    forProfileEffectModal: ej = !1,
    hideMemberStatusSection: eC = !0,
    bodyClassName: eU,
    slideInAvatarDecoration: e_ = !1,
    useLargeBanner: eb = !1
  } = e, eM = i.useRef(null), [ew, eR] = i.useState(!1), eB = O.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eO,
    avatarSrc: ek,
    eventHandlers: ez
  } = (0, B.default)({
    user: H,
    guildId: null == el ? void 0 : el.id,
    avatarDecorationOverride: (0, g.hasGlobalDefaultAvatarDecoration)(H, el) && null == em ? void 0 : em,
    avatarOverride: ef,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eL = (0, x.default)(H.id, null == el ? void 0 : el.id), eF = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eD = (0, m.default)(), eG = (0, o.useStateFromStores)([k.default], () => null == el ? null : k.default.getMember(el.id, H.id)), eW = null != el, eZ = null === (a = (0, x.default)(H.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eH = null == eL ? void 0 : eL.profileEffectId, eV = eW && null == eg ? eg !== eH && null !== eg ? eH : eZ : eg, eK = void 0 === ef ? H.getAvatarURL(void 0, 80) : ef, eX = (0, h.default)(eK, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eY = null == eL ? void 0 : eL.getPreviewThemeColors(eh), eq = null !== (r = null == eY ? void 0 : eY[0]) && void 0 !== r ? r : null == eL ? void 0 : eL.primaryColor, eJ = eF ? eD : (0, E.getProfileTheme)(eq), eQ = (0, I.default)(null !== (y = null != eo ? eo : eq) && void 0 !== y ? y : (0, s.hex2int)(eX)).hsl, e$ = (0, o.useStateFromStores)([F.default], () => F.default.isFocused()), e0 = null == eL ? void 0 : eL.getPreviewBanner(eu, eB ? e$ : ew), e4 = null != e0 || null != eV, e1 = eb || null != eV, e8 = (0, K.getPreviewName)({
    pendingNickname: ev,
    pendingGlobalName: ep,
    user: H,
    guildMember: eG
  }), [e6, e9] = (0, o.useStateFromStoresArray)([z.default], () => [z.default.findActivity(H.id, e => e.type === Y.ActivityTypes.CUSTOM_STATUS), z.default.getStatus(H.id)]), e2 = (0, d.useStatusFillColor)(e9), e7 = (0, o.useStateFromStores)([L.default], () => L.default.hidePersonalInformation), e5 = (null == eL ? void 0 : eL.canUsePremiumProfileCustomization) || ei, e3 = i.useCallback(() => {
    var e, a;
    null === (a = eM.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), ae = i.useCallback((e, a) => {
    null == e || null == a ? en(null) : "image/gif" !== a.type || Z.default.canUseAnimatedAvatar(H) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: en,
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
          t.onClose(), e3()
        }
      })
    })
  }, [H, e3, en]), aa = (e, a) => {
    if (null == e || null == a) return es(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: es,
        uploadType: q.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    })
  };

  function at() {
    let e = null != eJ ? (0, d.getStatusBackdropColor)(eJ) : null;
    return (0, l.jsxs)("div", {
      className: $.status,
      children: [null != e && (null == eL ? void 0 : eL.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: $.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e9, e)
        }
      }), (0, l.jsx)("svg", {
        className: $.statusDot,
        children: (0, l.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e2,
          mask: "url(#".concat((0, d.getStatusMask)(e9, !1), ")")
        })
      })]
    })
  }
  let al = "ProfileCustomizationPreview";
  (0, f.useTriggerDebuggingAA)({
    location: al + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: al + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: ai
  } = (0, p.default)();
  i.useEffect(() => {
    if (eB) return;
    let e = null == eL ? void 0 : eL.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!W.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eL, eB]);
  let ar = null == el;
  return (0, l.jsxs)(N.default, {
    forceShowPremium: ei,
    user: H,
    displayProfile: eL,
    profileType: J.UserProfileTypes.POPOUT,
    pendingThemeColors: eh,
    pendingProfileEffectId: eV,
    className: ej ? e5 ? $.profileEffectsModalCustomizationPreviewWithTheme : $.profileEffectsModalCustomizationPreviewWithoutTheme : e5 ? $.profileCustomizationPreviewWithTheme : $.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(A.default, {
      profileEffectId: void 0 !== eV ? eV : eH
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(P.default, {
        profileType: J.UserProfileTypes.POPOUT,
        hasBanner: e4,
        isPremium: ei,
        hasThemeColors: e5,
        overrideBannerWidth: ej ? 280 : void 0,
        hasProfileEffect: e1,
        children: ei ? (0, l.jsxs)("div", {
          onMouseMove: () => eR(!0),
          onMouseLeave: () => eR(!1),
          children: [(0, l.jsx)(T.default, {
            className: $.bannerUploader,
            showRemoveButton: !1,
            disabled: !ei || eE,
            image: e0,
            makeURL: () => e0,
            onChange: aa,
            imageStyle: {
              backgroundColor: eQ
            },
            imageClassName: n()(e4 ? $.bannerUploaderInnerSquare : $.bannerUploaderInnerSquareEmpty),
            hint: Q.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, K.handleOpenSelectImageModal)(q.UploadTypes.BANNER, null == eG ? void 0 : eG.guildId, eA, void 0),
            hideSize: !0,
            maxFileSizeBytes: X.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: K.showFileSizeErrorModal
          }), !eB && W.isAnimatedImageURL(e0) ? (0, l.jsx)(D.default, {
            className: $.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: e1 ? $.bannerUploaderInnerSquare : $.bannerNormal,
          style: {
            backgroundColor: eQ
          },
          children: eE ? null : (0, l.jsx)(d.Clickable, {
            onClick: () => null == er ? void 0 : er({
              object: Y.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: $.bannerNitroUpsell,
            children: (0, l.jsx)(d.Heading, {
              className: $.bannerNitroUpsellText,
              variant: "eyebrow",
              children: Q.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), ar ? (0, l.jsxs)(d.Clickable, {
        ...ez,
        "aria-disabled": eE,
        onClick: eE ? void 0 : e => {
          (0, c.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, "445924"));
            return () => (0, l.jsx)(e, {
              onClose: c.closeContextMenu,
              onChangeAvatar: () => (0, K.handleOpenSelectImageModal)(q.UploadTypes.AVATAR, null == eG ? void 0 : eG.guildId, eA),
              onChangeAvatarDecoration: () => {
                (0, S.openAvatarDecorationModal)({
                  guild: null == el ? void 0 : el,
                  analyticsLocations: ai,
                  isTryItOutFlow: eA
                })
              }
            })
          })
        },
        className: n()(et({
          isPremium: ei,
          hasBanner: e4,
          hasProfileEffect: e1
        }), {
          [$.defaultCursor]: eE
        }),
        children: [(0, l.jsx)(ea, {
          className: $.avatarUploaderInner,
          src: ek,
          avatarDecoration: e_ ? null : eO,
          size: d.AvatarSizes.SIZE_80,
          "aria-label": H.username
        }), e_ && (0, l.jsx)(j.default, {
          initTranslate3d: "translate3d(-20px, -120px, 0)",
          children: (0, l.jsx)(ea, {
            src: ee,
            avatarDecoration: eO,
            size: d.AvatarSizes.SIZE_80,
            status: Y.StatusTypes.UNKNOWN,
            className: $.tryingOutAvatarDecoration,
            "aria-hidden": !0
          })
        }, eO), eE ? null : (0, l.jsx)("div", {
          className: $.hoverIconWrapper,
          children: (0, l.jsx)(G.default, {
            className: $.hoverIcon,
            color: "white"
          })
        }), at()]
      }) : function() {
        let e = null != eG && !ei,
          a = (0, l.jsxs)("div", {
            className: et({
              isPremium: ei,
              hasBanner: e4,
              hasProfileEffect: e1
            }),
            children: [(0, l.jsx)(T.default, {
              disabled: eE,
              ref: eM,
              showIcon: null == eO,
              hint: e ? Q.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Q.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: n()(eS, $.avatarUploaderInner),
              image: ek,
              onChange: ae,
              makeURL: () => ek,
              maxFileSizeBytes: X.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: K.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, K.handleOpenSelectImageModal)(q.UploadTypes.AVATAR, null == eG ? void 0 : eG.guildId, eA, void 0)
            }), null != eO && (0, l.jsx)("img", {
              className: $.avatarDecoration,
              src: eO,
              alt: " ",
              "aria-hidden": !0
            }), at()]
          });
        return e ? (0, l.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == er || er({
              object: Y.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, l.jsx)(U.UserPopoutBadgeList, {
        user: H,
        guildId: null == el ? void 0 : el.id,
        isTryItOutFlow: eA,
        forProfileEffectModal: ej
      }), function() {
        let e = null == eL ? void 0 : eL.getPreviewBio(ed);
        return (0, l.jsxs)(N.default.Overlay, {
          className: n()($.body, eU),
          children: [(0, l.jsx)(R.default, {
            isTryItOut: eA,
            user: H,
            nickname: e8,
            pronouns: null != ec ? ec : null == eL ? void 0 : eL.pronouns,
            usernameIcon: (() => {
              if (!!(null != eG) && null !== ef) {
                if (!(null == eG.avatar && null == ef)) return (0, l.jsx)(_.default, {
                  user: H,
                  nickname: e8
                })
              }
            })()
          }), !ey && (0, l.jsx)(M.default, {
            customStatusActivity: e6
          }), (0, l.jsx)(C.default, {}), !eN && (0, l.jsx)(b.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: el,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: e7,
            lastSection: eP,
            lineClamp: ej ? 3 : void 0
          }), !eC && (0, l.jsx)(w.default, {
            userId: H.id,
            guildId: null == el ? void 0 : el.id
          }), !eP && (0, l.jsx)(V.default, {
            activityName: eI,
            activityCharacter: eT,
            showExampleButton: null == el && !ex
          })]
        })
      }()]
    })]
  })
}