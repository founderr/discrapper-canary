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
  h = t("220082"),
  g = t("864106"),
  S = t("1585"),
  I = t("583405"),
  T = t("208567"),
  A = t("680295"),
  E = t("168631"),
  P = t("318661"),
  x = t("943217"),
  y = t("793397"),
  N = t("502762"),
  j = t("347949"),
  C = t("155916"),
  U = t("138394"),
  b = t("131640"),
  _ = t("790711"),
  M = t("19836"),
  w = t("538564"),
  R = t("319300"),
  B = t("584045"),
  O = t("204197"),
  k = t("761174"),
  z = t("695346"),
  L = t("271383"),
  F = t("158776"),
  D = t("246946"),
  G = t("451478"),
  W = t("311715"),
  Z = t("586791"),
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
  ei = (0, y.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: ea.avatarUploaderPremium,
    premiumUserWithoutBanner: ea.avatarUploaderPremiumNoBanner,
    default: ea.avatarUploaderNormal
  });

function er(e) {
  var a, r, y;
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
    pendingNickname: eh,
    pendingGlobalName: eg,
    pendingThemeColors: eS,
    pendingProfileEffectId: eI,
    avatarClassName: eT,
    activityName: eA,
    activityCharacter: eE,
    isTryItOutFlow: eP = !1,
    disabledInputs: ex = !1,
    hideExampleButton: ey = !1,
    hideFakeActivity: eN = !1,
    hideCustomStatus: ej = !1,
    hideBioSection: eC = !1,
    hideRecentGames: eU = !1,
    forProfileEffectModal: eb = !1,
    hideMemberStatusSection: e_ = !0,
    bodyClassName: eM,
    slideInAvatarDecoration: ew = !1,
    useLargeBanner: eR = !1
  } = e, eB = i.useRef(null), [eO, ek] = i.useState(!1), ez = z.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eL,
    avatarSrc: eF,
    eventHandlers: eD
  } = (0, O.default)({
    user: K,
    guildId: null == er ? void 0 : er.id,
    avatarDecorationOverride: (0, g.hasGlobalDefaultAvatarDecoration)(K, er) && null == ep ? void 0 : ep,
    avatarOverride: ev,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eG = (0, P.default)(K.id, null == er ? void 0 : er.id), eW = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eZ = (0, m.default)(), eH = (0, o.useStateFromStores)([L.default], () => null == er ? null : L.default.getMember(er.id, K.id)), eV = null != er, eK = null === (a = (0, P.default)(K.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eX = null == eG ? void 0 : eG.profileEffectId, eY = eV && null == eI ? eI !== eX && null !== eI ? eX : eK : eI, eq = void 0 === ev ? K.getAvatarURL(void 0, 80) : ev, eJ = (0, h.default)(eq, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eQ = null == eG ? void 0 : eG.getPreviewThemeColors(eS), e$ = null !== (r = null == eQ ? void 0 : eQ[0]) && void 0 !== r ? r : null == eG ? void 0 : eG.primaryColor, e0 = eW ? eZ : (0, E.getProfileTheme)(e$), e1 = (0, I.default)(null !== (y = null != ed ? ed : e$) && void 0 !== y ? y : (0, s.hex2int)(eJ)).hsl, e4 = (0, o.useStateFromStores)([G.default], () => G.default.isFocused()), e6 = null == eG ? void 0 : eG.getPreviewBanner(ec, ez ? e4 : eO), e8 = null != e6 || null != eY, e9 = eR || null != eY, e7 = (0, Y.getPreviewName)({
    pendingNickname: eh,
    pendingGlobalName: eg,
    user: K,
    guildMember: eH
  }), [e2, e5] = (0, o.useStateFromStoresArray)([F.default], () => [F.default.findActivity(K.id, e => e.type === J.ActivityTypes.CUSTOM_STATUS), F.default.getStatus(K.id)]), e3 = (0, d.useStatusFillColor)(e5), ae = (0, o.useStateFromStores)([D.default], () => D.default.hidePersonalInformation), aa = (null == eG ? void 0 : eG.canUsePremiumProfileCustomization) || en, at = i.useCallback(() => {
    var e, a;
    null === (a = eB.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), al = i.useCallback((e, a) => {
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
          t.onClose(), at()
        }
      })
    })
  }, [K, at, eo]), ai = (e, a) => {
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

  function ar() {
    let e = null != e0 ? (0, d.getStatusBackdropColor)(e0) : null;
    return (0, l.jsxs)("div", {
      className: ea.status,
      children: [null != e && (null == eG ? void 0 : eG.canUsePremiumProfileCustomization) && (0, l.jsx)("div", {
        className: ea.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e5, e)
        }
      }), (0, l.jsx)("svg", {
        className: ea.statusDot,
        children: (0, l.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e3,
          mask: "url(#".concat((0, d.getStatusMask)(e5, !1), ")")
        })
      })]
    })
  }
  let an = "ProfileCustomizationPreview";
  (0, f.useTriggerDebuggingAA)({
    location: an + " auto on",
    autoTrackExposure: !0
  }), (0, f.useTriggerDebuggingAA)({
    location: an + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: as
  } = (0, p.default)(), ao = (0, k.useIsUserRecentGamesEnabled)({
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
  let au = null == er;
  return (0, l.jsxs)(N.default, {
    forceShowPremium: en,
    user: K,
    displayProfile: eG,
    profileType: $.UserProfileTypes.POPOUT,
    pendingThemeColors: eS,
    pendingProfileEffectId: eY,
    className: eb ? aa ? ea.profileEffectsModalCustomizationPreviewWithTheme : ea.profileEffectsModalCustomizationPreviewWithoutTheme : aa ? ea.profileCustomizationPreviewWithTheme : ea.profileCustomizationPreviewWithoutTheme,
    children: [(0, l.jsx)(A.default, {
      profileEffectId: void 0 !== eY ? eY : eX
    }), (0, l.jsxs)(d.HeadingLevel, {
      children: [(0, l.jsx)(x.default, {
        profileType: $.UserProfileTypes.POPOUT,
        hasBanner: e8,
        isPremium: en,
        hasThemeColors: aa,
        overrideBannerWidth: eb ? 280 : void 0,
        hasProfileEffect: e9,
        children: en ? (0, l.jsxs)("div", {
          onMouseMove: () => ek(!0),
          onMouseLeave: () => ek(!1),
          children: [(0, l.jsx)(T.default, {
            className: ea.bannerUploader,
            showRemoveButton: !1,
            disabled: !en || ex,
            image: e6,
            makeURL: () => e6,
            onChange: ai,
            imageStyle: {
              backgroundColor: e1
            },
            imageClassName: n()(e8 ? ea.bannerUploaderInnerSquare : ea.bannerUploaderInnerSquareEmpty),
            hint: ee.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(Q.UploadTypes.BANNER, null == eH ? void 0 : eH.guildId, eP, void 0),
            hideSize: !0,
            maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: Y.showFileSizeErrorModal
          }), !ez && H.isAnimatedImageURL(e6) ? (0, l.jsx)(W.default, {
            className: ea.gifTag
          }) : null]
        }) : (0, l.jsx)("div", {
          className: e9 ? ea.bannerUploaderInnerSquare : ea.bannerNormal,
          style: {
            backgroundColor: e1
          },
          children: ex ? null : (0, l.jsx)(d.Clickable, {
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
      }), au ? (0, l.jsxs)(d.Clickable, {
        ...eD,
        "aria-disabled": ex,
        onClick: ex ? void 0 : e => {
          (0, c.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, "445924"));
            return () => (0, l.jsx)(e, {
              onClose: c.closeContextMenu,
              onChangeAvatar: () => (0, Y.handleOpenSelectImageModal)(Q.UploadTypes.AVATAR, null == eH ? void 0 : eH.guildId, eP),
              onChangeAvatarDecoration: () => {
                (0, S.openAvatarDecorationModal)({
                  guild: null == er ? void 0 : er,
                  analyticsLocations: as,
                  isTryItOutFlow: eP
                })
              }
            })
          })
        },
        className: n()(ei({
          isPremium: en,
          hasBanner: e8,
          hasProfileEffect: e9
        }), {
          [ea.defaultCursor]: ex
        }),
        children: [(0, l.jsx)(el, {
          className: ea.avatarUploaderInner,
          src: eF,
          avatarDecoration: ew ? null : eL,
          size: d.AvatarSizes.SIZE_80,
          "aria-label": K.username
        }), ew && (0, l.jsx)(C.default, {
          initTranslate3d: "translate3d(-20px, -120px, 0)",
          children: (0, l.jsx)(el, {
            src: et,
            avatarDecoration: eL,
            size: d.AvatarSizes.SIZE_80,
            status: J.StatusTypes.UNKNOWN,
            className: ea.tryingOutAvatarDecoration,
            "aria-hidden": !0
          })
        }, eL), ex ? null : (0, l.jsx)("div", {
          className: ea.hoverIconWrapper,
          children: (0, l.jsx)(Z.default, {
            className: ea.hoverIcon,
            color: "white"
          })
        }), ar()]
      }) : function() {
        let e = null != eH && !en,
          a = (0, l.jsxs)("div", {
            className: ei({
              isPremium: en,
              hasBanner: e8,
              hasProfileEffect: e9
            }),
            children: [(0, l.jsx)(T.default, {
              disabled: ex,
              ref: eB,
              showIcon: null == eL,
              hint: e ? ee.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : ee.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: n()(eT, ea.avatarUploaderInner),
              image: eF,
              onChange: al,
              makeURL: () => eF,
              maxFileSizeBytes: q.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: Y.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, Y.handleOpenSelectImageModal)(Q.UploadTypes.AVATAR, null == eH ? void 0 : eH.guildId, eP, void 0)
            }), null != eL && (0, l.jsx)("img", {
              className: ea.avatarDecoration,
              src: eL,
              alt: " ",
              "aria-hidden": !0
            }), ar()]
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
        isTryItOutFlow: eP,
        forProfileEffectModal: eb
      }), function() {
        let e = null == eG ? void 0 : eG.getPreviewBio(ef);
        return (0, l.jsxs)(N.default.Overlay, {
          className: n()(ea.body, eM),
          children: [(0, l.jsx)(B.default, {
            isTryItOut: eP,
            user: K,
            nickname: e7,
            pronouns: null != em ? em : null == eG ? void 0 : eG.pronouns,
            usernameIcon: (() => {
              if (!!(null != eH) && null !== ev) {
                if (!(null == eH.avatar && null == ev)) return (0, l.jsx)(_.default, {
                  user: K,
                  nickname: e7
                })
              }
            })()
          }), !ej && (0, l.jsx)(w.default, {
            customStatusActivity: e2
          }), (0, l.jsx)(U.default, {}), !eC && (0, l.jsx)(M.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: er,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: ae,
            lastSection: eN,
            lineClamp: eb ? 3 : void 0
          }), !eU && ao && (0, l.jsx)(j.UserProfileRecentGamesSection, {
            userId: K.id
          }), !e_ && (0, l.jsx)(R.default, {
            userId: K.id,
            guildId: null == er ? void 0 : er.id
          }), !eN && (0, l.jsx)(X.default, {
            activityName: eA,
            activityCharacter: eE,
            showExampleButton: null == er && !ey
          })]
        })
      }()]
    })]
  })
}