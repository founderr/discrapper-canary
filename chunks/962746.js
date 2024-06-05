"use strict";
l.r(a), l.d(a, {
  default: function() {
    return er
  }
}), l("47120");
var t = l("735250"),
  i = l("470079"),
  r = l("120356"),
  n = l.n(r),
  s = l("866442"),
  o = l("442837"),
  u = l("692547"),
  d = l("481060"),
  c = l("239091"),
  f = l("634894"),
  m = l("410030"),
  v = l("607070"),
  p = l("906732"),
  g = l("220082"),
  h = l("864106"),
  S = l("1585"),
  I = l("583405"),
  T = l("208567"),
  A = l("680295"),
  E = l("168631"),
  y = l("318661"),
  P = l("943217"),
  x = l("793397"),
  j = l("502762"),
  U = l("347949"),
  C = l("155916"),
  N = l("138394"),
  b = l("131640"),
  w = l("790711"),
  _ = l("19836"),
  M = l("538564"),
  B = l("319300"),
  R = l("584045"),
  k = l("204197"),
  O = l("761174"),
  z = l("695346"),
  F = l("271383"),
  L = l("158776"),
  D = l("246946"),
  G = l("451478"),
  Z = l("311715"),
  W = l("586791"),
  H = l("768581"),
  V = l("74538"),
  Y = l("998502"),
  X = l("414666"),
  K = l("654904"),
  q = l("200299"),
  J = l("981631"),
  Q = l("486324"),
  $ = l("228168"),
  ee = l("689938"),
  ea = l("852552"),
  el = l("471031");
let et = Y.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  ei = (0, x.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: ea.avatarUploaderPremium,
    premiumUserWithoutBanner: ea.avatarUploaderPremiumNoBanner,
    default: ea.avatarUploaderNormal
  });

function er(e) {
  var a, r, x;
  let {
    user: Y,
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
    activityName: eA,
    activityCharacter: eE,
    isTryItOutFlow: ey = !1,
    disabledInputs: eP = !1,
    hideExampleButton: ex = !1,
    hideFakeActivity: ej = !1,
    hideCustomStatus: eU = !1,
    hideBioSection: eC = !1,
    hideRecentGames: eN = !1,
    forProfileEffectModal: eb = !1,
    hideMemberStatusSection: ew = !0,
    bodyClassName: e_,
    slideInAvatarDecoration: eM = !1,
    useLargeBanner: eB = !1
  } = e, eR = i.useRef(null), [ek, eO] = i.useState(!1), ez = z.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eF,
    avatarSrc: eL,
    eventHandlers: eD
  } = (0, k.default)({
    user: Y,
    guildId: null == er ? void 0 : er.id,
    avatarDecorationOverride: (0, h.hasGlobalDefaultAvatarDecoration)(Y, er) && null == ep ? void 0 : ep,
    avatarOverride: ev,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eG = (0, y.default)(Y.id, null == er ? void 0 : er.id), eZ = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eW = (0, m.default)(), eH = (0, o.useStateFromStores)([F.default], () => null == er ? null : F.default.getMember(er.id, Y.id)), eV = null === (a = (0, y.default)(Y.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eY = null == eG ? void 0 : eG.profileEffectId, eX = null != er && null == eI ? eI !== eY && null !== eI ? eY : eV : eI, eK = void 0 === ev ? Y.getAvatarURL(void 0, 80) : ev, eq = (0, g.default)(eK, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eJ = null == eG ? void 0 : eG.getPreviewThemeColors(eS), eQ = null !== (r = null == eJ ? void 0 : eJ[0]) && void 0 !== r ? r : null == eG ? void 0 : eG.primaryColor, e$ = eZ ? eW : (0, E.getProfileTheme)(eQ), e0 = (0, I.default)(null !== (x = null != ed ? ed : eQ) && void 0 !== x ? x : (0, s.hex2int)(eq)).hsl, e1 = (0, o.useStateFromStores)([G.default], () => G.default.isFocused()), e4 = null == eG ? void 0 : eG.getPreviewBanner(ec, ez ? e1 : ek), e8 = null != e4 || null != eX, e2 = eB || null != eX, e6 = (0, K.getPreviewName)({
    pendingNickname: eg,
    pendingGlobalName: eh,
    user: Y,
    guildMember: eH
  }), [e9, e7] = (0, o.useStateFromStoresArray)([L.default], () => [L.default.findActivity(Y.id, e => e.type === J.ActivityTypes.CUSTOM_STATUS), L.default.getStatus(Y.id)]), e5 = (0, d.useStatusFillColor)(e7), e3 = (0, o.useStateFromStores)([D.default], () => D.default.hidePersonalInformation), ae = (null == eG ? void 0 : eG.canUsePremiumProfileCustomization) || en, aa = i.useCallback(() => {
    var e, a;
    null === (a = eR.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), al = i.useCallback((e, a) => {
    null == e || null == a ? eo(null) : "image/gif" !== a.type || V.default.canUseAnimatedAvatar(Y) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
      return l => (0, t.jsx)(i, {
        onCrop: eo,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...l
      })
    }) : (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([l.e("99387"), l.e("9362")]).then(l.bind(l, "561910"));
      return l => (0, t.jsx)(a, {
        ...l,
        imgURI: e,
        onChangeAvatar: () => {
          l.onClose(), aa()
        }
      })
    })
  }, [Y, aa, eo]), at = (e, a) => {
    if (null == e || null == a) return eu(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
      return l => (0, t.jsx)(i, {
        onCrop: eu,
        uploadType: Q.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...l
      })
    })
  };

  function ai() {
    let e = null != e$ ? (0, d.getStatusBackdropColor)(e$) : null;
    return (0, t.jsxs)("div", {
      className: ea.status,
      children: [null != e && (null == eG ? void 0 : eG.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
        className: ea.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e7, e)
        }
      }), (0, t.jsx)("svg", {
        className: ea.statusDot,
        children: (0, t.jsx)("rect", {
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
    userId: Y.id,
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
  return (0, t.jsxs)(j.default, {
    forceShowPremium: en,
    user: Y,
    displayProfile: eG,
    profileType: $.UserProfileTypes.POPOUT,
    pendingThemeColors: eS,
    pendingProfileEffectId: eX,
    className: eb ? ae ? ea.profileEffectsModalCustomizationPreviewWithTheme : ea.profileEffectsModalCustomizationPreviewWithoutTheme : ae ? ea.profileCustomizationPreviewWithTheme : ea.profileCustomizationPreviewWithoutTheme,
    children: [(0, t.jsx)(A.default, {
      profileEffectId: void 0 !== eX ? eX : eY
    }), (0, t.jsxs)(d.HeadingLevel, {
      children: [(0, t.jsx)(P.default, {
        profileType: $.UserProfileTypes.POPOUT,
        hasBanner: e8,
        isPremium: en,
        hasThemeColors: ae,
        overrideBannerWidth: eb ? 280 : void 0,
        hasProfileEffect: e2,
        children: en ? (0, t.jsxs)("div", {
          onMouseMove: () => eO(!0),
          onMouseLeave: () => eO(!1),
          children: [(0, t.jsx)(T.default, {
            className: ea.bannerUploader,
            showRemoveButton: !1,
            disabled: !en || eP,
            image: e4,
            makeURL: () => e4,
            onChange: at,
            imageStyle: {
              backgroundColor: e0
            },
            imageClassName: n()(e8 ? ea.bannerUploaderInnerSquare : ea.bannerUploaderInnerSquareEmpty),
            hint: ee.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, K.handleOpenSelectImageModal)(Q.UploadTypes.BANNER, null == eH ? void 0 : eH.guildId, ey, void 0),
            hideSize: !0,
            maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: K.showFileSizeErrorModal
          }), !ez && H.isAnimatedImageURL(e4) ? (0, t.jsx)(Z.default, {
            className: ea.gifTag
          }) : null]
        }) : (0, t.jsx)("div", {
          className: e2 ? ea.bannerUploaderInnerSquare : ea.bannerNormal,
          style: {
            backgroundColor: e0
          },
          children: eP ? null : (0, t.jsx)(d.Clickable, {
            onClick: () => null == es ? void 0 : es({
              object: J.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: ea.bannerNitroUpsell,
            children: (0, t.jsx)(d.Heading, {
              className: ea.bannerNitroUpsellText,
              variant: "eyebrow",
              children: ee.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), ao ? function() {
        let e = () => (0, K.handleOpenSelectImageModal)(Q.UploadTypes.AVATAR, null == eH ? void 0 : eH.guildId, ey),
          a = () => (0, S.openAvatarDecorationModal)({
            guild: null == er ? void 0 : er,
            analyticsLocations: an,
            isTryItOutFlow: ey
          });
        return (0, t.jsxs)(d.Clickable, {
          ...eD,
          "aria-disabled": eP,
          onClick: eP ? void 0 : i => {
            (0, c.openContextMenuLazy)(i, async () => {
              let {
                default: i
              } = await l.e("34627").then(l.bind(l, "445924"));
              return () => (0, t.jsx)(i, {
                changeAvatarAction: e,
                changeDecorationAction: a
              })
            })
          },
          className: n()(ei({
            isPremium: en,
            hasBanner: e8,
            hasProfileEffect: e2
          }), {
            [ea.defaultCursor]: eP
          }),
          children: [(0, t.jsx)(et, {
            className: ea.avatarUploaderInner,
            src: eL,
            avatarDecoration: eM ? null : eF,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": Y.username
          }), eM && (0, t.jsx)(C.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, t.jsx)(et, {
              src: el,
              avatarDecoration: eF,
              size: d.AvatarSizes.SIZE_80,
              status: J.StatusTypes.UNKNOWN,
              className: ea.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eF), eP ? null : (0, t.jsx)("div", {
            className: ea.hoverIconWrapper,
            children: (0, t.jsx)(W.default, {
              className: ea.hoverIcon,
              color: "white"
            })
          }), ai()]
        })
      }() : function() {
        let e = null != eH && !en,
          a = (0, t.jsxs)("div", {
            className: ei({
              isPremium: en,
              hasBanner: e8,
              hasProfileEffect: e2
            }),
            children: [(0, t.jsx)(T.default, {
              disabled: eP,
              ref: eR,
              showIcon: null == eF,
              hint: e ? ee.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : ee.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: n()(eT, ea.avatarUploaderInner),
              image: eL,
              onChange: al,
              makeURL: () => eL,
              maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: K.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, K.handleOpenSelectImageModal)(Q.UploadTypes.AVATAR, null == eH ? void 0 : eH.guildId, ey, void 0)
            }), null != eF && (0, t.jsx)("img", {
              className: ea.avatarDecoration,
              src: eF,
              alt: " ",
              "aria-hidden": !0
            }), ai()]
          });
        return e ? (0, t.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == es || es({
              object: J.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, t.jsx)(b.UserPopoutBadgeList, {
        user: Y,
        guildId: null == er ? void 0 : er.id,
        isTryItOutFlow: ey,
        forProfileEffectModal: eb
      }), function() {
        let e = null == eG ? void 0 : eG.getPreviewBio(ef);
        return (0, t.jsxs)(j.default.Overlay, {
          className: n()(ea.body, e_),
          children: [(0, t.jsx)(R.default, {
            isTryItOut: ey,
            user: Y,
            nickname: e6,
            pronouns: null != em ? em : null == eG ? void 0 : eG.pronouns,
            usernameIcon: (() => {
              if (!!(null != eH) && null !== ev) {
                if (!(null == eH.avatar && null == ev)) return (0, t.jsx)(w.default, {
                  user: Y,
                  nickname: e6
                })
              }
            })()
          }), !eU && (0, t.jsx)(M.default, {
            customStatusActivity: e9
          }), (0, t.jsx)(N.default, {}), !eC && (0, t.jsx)(_.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: er,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: e3,
            lastSection: ej,
            lineClamp: eb ? 3 : void 0
          }), !eN && as && (0, t.jsx)(U.UserProfileRecentGamesSection, {
            userId: Y.id
          }), !ew && (0, t.jsx)(B.default, {
            userId: Y.id,
            guildId: null == er ? void 0 : er.id
          }), !ej && (0, t.jsx)(X.default, {
            activityName: eA,
            activityCharacter: eE,
            showExampleButton: null == er && !ex
          })]
        })
      }()]
    })]
  })
}