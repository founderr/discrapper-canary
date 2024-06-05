"use strict";
t.r(a), t.d(a, {
  default: function() {
    return er
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
  g = t("220082"),
  h = t("864106"),
  S = t("1585"),
  I = t("583405"),
  T = t("208567"),
  P = t("680295"),
  A = t("168631"),
  E = t("318661"),
  y = t("943217"),
  x = t("793397"),
  j = t("502762"),
  U = t("347949"),
  N = t("155916"),
  C = t("138394"),
  b = t("131640"),
  w = t("790711"),
  _ = t("19836"),
  M = t("538564"),
  B = t("319300"),
  R = t("584045"),
  k = t("204197"),
  O = t("761174"),
  z = t("695346"),
  L = t("271383"),
  F = t("158776"),
  D = t("246946"),
  G = t("451478"),
  Z = t("311715"),
  W = t("586791"),
  H = t("768581"),
  V = t("74538"),
  K = t("998502"),
  X = t("414666"),
  Y = t("654904"),
  q = t("200299"),
  J = t("981631"),
  Q = t("486324"),
  $ = t("228168"),
  ee = t("689938"),
  ea = t("852552"),
  et = t("471031");
let el = K.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  ei = (0, x.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: ea.avatarUploaderPremium,
    premiumUserWithoutBanner: ea.avatarUploaderPremiumNoBanner,
    default: ea.avatarUploaderNormal
  });

function er(e) {
  var a, r, x;
  let {
    user: K,
    guild: er,
    canUsePremiumCustomization: en,
    onUpsellClick: es,
    onAvatarChange: eo,
    onBannerChange: eu,
    pendingAccentColor: ed,
    pendingBanner: ec,
    pendingBio: ef,
    pendingPronouns: em,
    pendingAvatar: ev,
    pendingAvatarDecoration: ep,
    pendingNickname: eg,
    pendingGlobalName: eh,
    pendingThemeColors: eS,
    pendingProfileEffectId: eI,
    avatarClassName: eT,
    activityName: eP,
    activityCharacter: eA,
    isTryItOutFlow: eE = !1,
    disabledInputs: ey = !1,
    hideExampleButton: ex = !1,
    hideFakeActivity: ej = !1,
    hideCustomStatus: eU = !1,
    hideBioSection: eN = !1,
    hideRecentGames: eC = !1,
    forProfileEffectModal: eb = !1,
    hideMemberStatusSection: ew = !0,
    bodyClassName: e_,
    slideInAvatarDecoration: eM = !1,
    useLargeBanner: eB = !1
  } = e, eR = i.useRef(null), [ek, eO] = i.useState(!1), ez = z.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eL,
    avatarSrc: eF,
    eventHandlers: eD
  } = (0, k.default)({
    user: K,
    guildId: null == er ? void 0 : er.id,
    avatarDecorationOverride: (0, h.hasGlobalDefaultAvatarDecoration)(K, er) && null == ep ? void 0 : ep,
    avatarOverride: ev,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eG = (0, E.default)(K.id, null == er ? void 0 : er.id), eZ = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eW = (0, m.default)(), eH = (0, o.useStateFromStores)([L.default], () => null == er ? null : L.default.getMember(er.id, K.id)), eV = null === (a = (0, E.default)(K.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eK = null == eG ? void 0 : eG.profileEffectId, eX = null != er && null == eI ? eI !== eK && null !== eI ? eK : eV : eI, eY = void 0 === ev ? K.getAvatarURL(void 0, 80) : ev, eq = (0, g.default)(eY, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eJ = null == eG ? void 0 : eG.getPreviewThemeColors(eS), eQ = null !== (r = null == eJ ? void 0 : eJ[0]) && void 0 !== r ? r : null == eG ? void 0 : eG.primaryColor, e$ = eZ ? eW : (0, A.getProfileTheme)(eQ), e0 = (0, I.default)(null !== (x = null != ed ? ed : eQ) && void 0 !== x ? x : (0, s.hex2int)(eq)).hsl, e1 = (0, o.useStateFromStores)([G.default], () => G.default.isFocused()), e4 = null == eG ? void 0 : eG.getPreviewBanner(ec, ez ? e1 : ek), e6 = null != e4 || null != eX, e8 = eB || null != eX, e9 = (0, Y.getPreviewName)({
    pendingNickname: eg,
    pendingGlobalName: eh,
    user: K,
    guildMember: eH
  }), [e2, e7] = (0, o.useStateFromStoresArray)([F.default], () => [F.default.findActivity(K.id, e => e.type === J.ActivityTypes.CUSTOM_STATUS), F.default.getStatus(K.id)]), e5 = (0, d.useStatusFillColor)(e7), e3 = (0, o.useStateFromStores)([D.default], () => D.default.hidePersonalInformation), ae = (null == eG ? void 0 : eG.canUsePremiumProfileCustomization) || en, aa = i.useCallback(() => {
    var e, a;
    null === (a = eR.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), at = i.useCallback((e, a) => {
    null == e || null == a ? eo(null) : "image/gif" !== a.type || V.default.canUseAnimatedAvatar(K) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: eo,
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
          t.onClose(), aa()
        }
      })
    })
  }, [K, aa, eo]), al = (e, a) => {
    if (null == e || null == a) return eu(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("22872")]).then(t.bind(t, "850085"));
      return t => (0, l.jsx)(i, {
        onCrop: eu,
        uploadType: Q.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...t
      })
    })
  };

  function ai() {
    let e = null != e$ ? (0, d.getStatusBackdropColor)(e$) : null;
    return (0, l.jsxs)("div", {
      className: ea.status,
      children: [null != e && (null == eG ? void 0 : eG.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: ea.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e7, e)
        }
      }), (0, l.jsx)("svg", {
        className: ea.statusDot,
        children: (0, l.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e5,
          mask: "url(#".concat((0, d.getStatusMask)(e7, !1), ")")
        })
      })]
    })
  }
  let ar = "ProfileCustomizationPreview";
  (0, f.useTriggerDebuggingAA)({
    location: ar + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: ar + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: an
  } = (0, p.default)(), as = (0, O.useIsUserRecentGamesEnabled)({
    userId: K.id,
    location: "28tk0bf_4"
  });
  i.useEffect(() => {
    if (ez) return;
    let e = null == eG ? void 0 : eG.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!H.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eG, ez]);
  let ao = null == er;
  return (0, l.jsxs)(j.default, {
    forceShowPremium: en,
    user: K,
    displayProfile: eG,
    profileType: $.UserProfileTypes.POPOUT,
    pendingThemeColors: eS,
    pendingProfileEffectId: eX,
    className: eb ? ae ? ea.profileEffectsModalCustomizationPreviewWithTheme : ea.profileEffectsModalCustomizationPreviewWithoutTheme : ae ? ea.profileCustomizationPreviewWithTheme : ea.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(P.default, {
      profileEffectId: void 0 !== eX ? eX : eK
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(y.default, {
        profileType: $.UserProfileTypes.POPOUT,
        hasBanner: e6,
        isPremium: en,
        hasThemeColors: ae,
        overrideBannerWidth: eb ? 280 : void 0,
        hasProfileEffect: e8,
        children: en ? (0, l.jsxs)("div", {
          onMouseMove: () => eO(!0),
          onMouseLeave: () => eO(!1),
          children: [(0, l.jsx)(T.default, {
            className: ea.bannerUploader,
            showRemoveButton: !1,
            disabled: !en || ey,
            image: e4,
            makeURL: () => e4,
            onChange: al,
            imageStyle: {
              backgroundColor: e0
            },
            imageClassName: n()(e6 ? ea.bannerUploaderInnerSquare : ea.bannerUploaderInnerSquareEmpty),
            hint: ee.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(Q.UploadTypes.BANNER, null == eH ? void 0 : eH.guildId, eE, void 0),
            hideSize: !0,
            maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: Y.showFileSizeErrorModal
          }), !ez && H.isAnimatedImageURL(e4) ? (0, l.jsx)(Z.default, {
            className: ea.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: e8 ? ea.bannerUploaderInnerSquare : ea.bannerNormal,
          style: {
            backgroundColor: e0
          },
          children: ey ? null : (0, l.jsx)(d.Clickable, {
            onClick: () => null == es ? void 0 : es({
              object: J.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: ea.bannerNitroUpsell,
            children: (0, l.jsx)(d.Heading, {
              className: ea.bannerNitroUpsellText,
              variant: "eyebrow",
              children: ee.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), ao ? function() {
        let e = () => (0, Y.handleOpenSelectImageModal)(Q.UploadTypes.AVATAR, null == eH ? void 0 : eH.guildId, eE),
          a = () => (0, S.openAvatarDecorationModal)({
            guild: null == er ? void 0 : er,
            analyticsLocations: an,
            isTryItOutFlow: eE
          });
        return (0, l.jsxs)(d.Clickable, {
          ...eD,
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
          className: n()(ei({
            isPremium: en,
            hasBanner: e6,
            hasProfileEffect: e8
          }), {
            [ea.defaultCursor]: ey
          }),
          children: [(0, l.jsx)(el, {
            className: ea.avatarUploaderInner,
            src: eF,
            avatarDecoration: eM ? null : eL,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": K.username
          }), eM && (0, l.jsx)(N.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, l.jsx)(el, {
              src: et,
              avatarDecoration: eL,
              size: d.AvatarSizes.SIZE_80,
              status: J.StatusTypes.UNKNOWN,
              className: ea.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eL), ey ? null : (0, l.jsx)("div", {
            className: ea.hoverIconWrapper,
            children: (0, l.jsx)(W.default, {
              className: ea.hoverIcon,
              color: "white"
            })
          }), ai()]
        })
      }() : function() {
        let e = null != eH && !en,
          a = (0, l.jsxs)("div", {
            className: ei({
              isPremium: en,
              hasBanner: e6,
              hasProfileEffect: e8
            }),
            children: [(0, l.jsx)(T.default, {
              disabled: ey,
              ref: eR,
              showIcon: null == eL,
              hint: e ? ee.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : ee.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: n()(eT, ea.avatarUploaderInner),
              image: eF,
              onChange: at,
              makeURL: () => eF,
              maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: Y.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(Q.UploadTypes.AVATAR, null == eH ? void 0 : eH.guildId, eE, void 0)
            }), null != eL && (0, l.jsx)("img", {
              className: ea.avatarDecoration,
              src: eL,
              alt: " ",
              "aria-hidden": !0
            }), ai()]
          });
        return e ? (0, l.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == es || es({
              object: J.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, l.jsx)(b.UserPopoutBadgeList, {
        user: K,
        guildId: null == er ? void 0 : er.id,
        isTryItOutFlow: eE,
        forProfileEffectModal: eb
      }), function() {
        let e = null == eG ? void 0 : eG.getPreviewBio(ef);
        return (0, l.jsxs)(j.default.Overlay, {
          className: n()(ea.body, e_),
          children: [(0, l.jsx)(R.default, {
            isTryItOut: eE,
            user: K,
            nickname: e9,
            pronouns: null != em ? em : null == eG ? void 0 : eG.pronouns,
            usernameIcon: (() => {
              if (!!(null != eH) && null !== ev) {
                if (!(null == eH.avatar && null == ev)) return (0, l.jsx)(w.default, {
                  user: K,
                  nickname: e9
                })
              }
            })()
          }), !eU && (0, l.jsx)(M.default, {
            customStatusActivity: e2
          }), (0, l.jsx)(C.default, {}), !eN && (0, l.jsx)(_.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: er,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: e3,
            lastSection: ej,
            lineClamp: eb ? 3 : void 0
          }), !eC && as && (0, l.jsx)(U.UserProfileRecentGamesSection, {
            userId: K.id
          }), !ew && (0, l.jsx)(B.default, {
            userId: K.id,
            guildId: null == er ? void 0 : er.id
          }), !ej && (0, l.jsx)(X.default, {
            activityName: eP,
            activityCharacter: eA,
            showExampleButton: null == er && !ex
          })]
        })
      }()]
    })]
  })
}