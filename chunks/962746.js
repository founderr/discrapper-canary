"use strict";
l.r(a), l.d(a, {
  default: function() {
    return er
  }
}), l("47120");
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  r = l.n(n),
  o = l("866442"),
  s = l("442837"),
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
  A = l("583405"),
  I = l("208567"),
  x = l("680295"),
  T = l("168631"),
  P = l("318661"),
  y = l("943217"),
  U = l("793397"),
  E = l("502762"),
  N = l("347949"),
  j = l("155916"),
  C = l("138394"),
  b = l("131640"),
  M = l("790711"),
  R = l("19836"),
  w = l("538564"),
  _ = l("319300"),
  k = l("584045"),
  B = l("204197"),
  O = l("761174"),
  z = l("695346"),
  L = l("271383"),
  D = l("158776"),
  F = l("246946"),
  G = l("451478"),
  W = l("311715"),
  H = l("586791"),
  V = l("768581"),
  Z = l("74538"),
  Y = l("51144"),
  q = l("998502"),
  K = l("414666"),
  X = l("654904"),
  J = l("200299"),
  Q = l("981631"),
  $ = l("486324"),
  ee = l("228168"),
  ea = l("689938"),
  el = l("852552"),
  et = l("471031");
let ei = q.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  en = (0, U.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: el.avatarUploaderPremium,
    premiumUserWithoutBanner: el.avatarUploaderPremiumNoBanner,
    default: el.avatarUploaderNormal
  });

function er(e) {
  var a, n, U, q;
  let {
    user: er,
    guild: eo,
    canUsePremiumCustomization: es,
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
    pendingGlobalName: eA,
    pendingThemeColors: eI,
    pendingProfileEffectId: ex,
    avatarClassName: eT,
    activityName: eP,
    activityCharacter: ey,
    isTryItOutFlow: eU = !1,
    disabledInputs: eE = !1,
    hideExampleButton: eN = !1,
    hideFakeActivity: ej = !1,
    hideBioSection: eC = !1,
    hideRecentGames: eb = !1,
    forProfileEffectModal: eM = !1,
    hideMemberStatusSection: eR = !0,
    bodyClassName: ew,
    slideInAvatarDecoration: e_ = !1,
    useLargeBanner: ek = !1
  } = e, eB = i.useRef(null), [eO, ez] = i.useState(!1), eL = z.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eD,
    avatarSrc: eF,
    eventHandlers: eG
  } = (0, B.default)({
    user: er,
    guildId: null == eo ? void 0 : eo.id,
    avatarDecorationOverride: (0, h.hasGlobalDefaultAvatarDecoration)(er, eo) && null == eh ? void 0 : eh,
    avatarOverride: eg,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eW = (0, P.default)(er.id, null == eo ? void 0 : eo.id), eH = (0, s.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eV = (0, m.default)(), eZ = (0, s.useStateFromStores)([L.default], () => null == eo ? null : L.default.getMember(eo.id, er.id)), eY = null === (a = (0, P.default)(er.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eq = null == eW ? void 0 : eW.profileEffectId, eK = null != eo && null == ex ? ex !== eq && null !== ex ? eq : eY : ex, eX = void 0 === eg ? er.getAvatarURL(void 0, 80) : eg, eJ = (0, g.default)(eX, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eQ = null == eW ? void 0 : eW.getPreviewThemeColors(eI), e$ = null !== (n = null == eQ ? void 0 : eQ[0]) && void 0 !== n ? n : null == eW ? void 0 : eW.primaryColor, e0 = eH ? eV : (0, T.getProfileTheme)(e$), e1 = (0, A.default)(null !== (U = null != ef ? ef : e$) && void 0 !== U ? U : (0, o.hex2int)(eJ)).hsl, e4 = (0, s.useStateFromStores)([G.default], () => G.default.isFocused()), e8 = null == eW ? void 0 : eW.getPreviewBanner(em, eL ? e4 : eO), e6 = null != e8 || null != eK, e9 = ek || null != eK, e3 = null !== (q = (0, X.getPreviewNickname)(eS, null == eZ ? void 0 : eZ.nick)) && void 0 !== q ? q : (0, X.getPreviewDisplayName)(eA, Y.default.getName(er)), [e2, e5] = (0, s.useStateFromStoresArray)([D.default], () => [D.default.findActivity(er.id, e => e.type === Q.ActivityTypes.CUSTOM_STATUS), D.default.getStatus(er.id)]), e7 = (0, d.useStatusFillColor)(e5), ae = (0, s.useStateFromStores)([F.default], () => F.default.hidePersonalInformation), aa = (null == eW ? void 0 : eW.canUsePremiumProfileCustomization) || es, al = i.useCallback(() => {
    var e, a;
    null === (a = eB.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), at = i.useCallback((e, a) => {
    null == e || null == a ? ed(null) : "image/gif" !== a.type || Z.default.canUseAnimatedAvatar(er) ? (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
      return l => (0, t.jsx)(i, {
        onCrop: ed,
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
          l.onClose(), al()
        }
      })
    })
  }, [er, al, ed]), ai = (e, a) => {
    if (null == e || null == a) return ec(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
      return l => (0, t.jsx)(i, {
        onCrop: ec,
        uploadType: $.UploadTypes.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...l
      })
    })
  };

  function an() {
    let e = null != e0 ? (0, d.getStatusBackdropColor)(e0) : null;
    return (0, t.jsxs)("div", {
      className: el.status,
      children: [null != e && (null == eW ? void 0 : eW.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
        className: el.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e5, e)
        }
      }), (0, t.jsx)("svg", {
        className: el.statusDot,
        children: (0, t.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e7,
          mask: "url(#".concat((0, d.getStatusMask)(e5, !1), ")")
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
    analyticsLocations: ao
  } = (0, p.default)(), as = (0, O.useIsUserRecentGamesEnabled)({
    userId: er.id,
    location: "28tk0bf_4"
  });
  i.useEffect(() => {
    if (eL) return;
    let e = null == eW ? void 0 : eW.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!V.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eW, eL]);
  let au = null == eo;
  return (0, t.jsxs)(E.default, {
    forceShowPremium: es,
    user: er,
    displayProfile: eW,
    profileType: ee.UserProfileTypes.POPOUT,
    pendingThemeColors: eI,
    pendingProfileEffectId: eK,
    className: eM ? aa ? el.profileEffectsModalCustomizationPreviewWithTheme : el.profileEffectsModalCustomizationPreviewWithoutTheme : aa ? el.profileCustomizationPreviewWithTheme : el.profileCustomizationPreviewWithoutTheme,
    children: [(0, t.jsx)(x.default, {
      profileEffectId: void 0 !== eK ? eK : eq
    }), (0, t.jsxs)(d.HeadingLevel, {
      children: [(0, t.jsx)(y.default, {
        profileType: ee.UserProfileTypes.POPOUT,
        hasBanner: e6,
        isPremium: es,
        hasThemeColors: aa,
        overrideBannerWidth: eM ? 280 : void 0,
        hasProfileEffect: e9,
        children: es ? (0, t.jsxs)("div", {
          onMouseMove: () => ez(!0),
          onMouseLeave: () => ez(!1),
          children: [(0, t.jsx)(I.default, {
            className: el.bannerUploader,
            showRemoveButton: !1,
            disabled: !es || eE,
            image: e8,
            makeURL: () => e8,
            onChange: ai,
            imageStyle: {
              backgroundColor: e1
            },
            imageClassName: r()(e6 ? el.bannerUploaderInnerSquare : el.bannerUploaderInnerSquareEmpty),
            hint: ea.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, X.handleOpenSelectImageModal)($.UploadTypes.BANNER, null == eZ ? void 0 : eZ.guildId, eU, void 0),
            hideSize: !0,
            maxFileSizeBytes: J.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: X.showFileSizeErrorModal
          }), !eL && V.isAnimatedImageURL(e8) ? (0, t.jsx)(W.default, {
            className: el.gifTag
          }) : null]
        }) : (0, t.jsx)("div", {
          className: e9 ? el.bannerUploaderInnerSquare : el.bannerNormal,
          style: {
            backgroundColor: e1
          },
          children: eE ? null : (0, t.jsx)(d.Clickable, {
            onClick: () => null == eu ? void 0 : eu({
              object: Q.AnalyticsObjects.EDIT_PROFILE_BANNER
            }),
            className: el.bannerNitroUpsell,
            children: (0, t.jsx)(d.Heading, {
              className: el.bannerNitroUpsellText,
              variant: "eyebrow",
              children: ea.default.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), au ? function() {
        let e = () => (0, X.handleOpenSelectImageModal)($.UploadTypes.AVATAR, null == eZ ? void 0 : eZ.guildId, eU),
          a = () => (0, S.openAvatarDecorationModal)({
            guild: null == eo ? void 0 : eo,
            analyticsLocations: ao,
            isTryItOutFlow: eU
          });
        return (0, t.jsxs)(d.Clickable, {
          ...eG,
          "aria-disabled": eE,
          onClick: eE ? void 0 : i => {
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
          className: r()(en({
            isPremium: es,
            hasBanner: e6,
            hasProfileEffect: e9
          }), {
            [el.defaultCursor]: eE
          }),
          children: [(0, t.jsx)(ei, {
            className: el.avatarUploaderInner,
            src: eF,
            avatarDecoration: e_ ? null : eD,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": er.username
          }), e_ && (0, t.jsx)(j.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, t.jsx)(ei, {
              src: et,
              avatarDecoration: eD,
              size: d.AvatarSizes.SIZE_80,
              status: Q.StatusTypes.UNKNOWN,
              className: el.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eD), eE ? null : (0, t.jsx)("div", {
            className: el.hoverIconWrapper,
            children: (0, t.jsx)(H.default, {
              className: el.hoverIcon,
              color: "white"
            })
          }), an()]
        })
      }() : function() {
        let e = null != eZ && !es,
          a = (0, t.jsxs)("div", {
            className: en({
              isPremium: es,
              hasBanner: e6,
              hasProfileEffect: e9
            }),
            children: [(0, t.jsx)(I.default, {
              disabled: eE,
              ref: eB,
              showIcon: null == eD,
              hint: e ? ea.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : ea.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r()(eT, el.avatarUploaderInner),
              image: eF,
              onChange: at,
              makeURL: () => eF,
              maxFileSizeBytes: J.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: X.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, X.handleOpenSelectImageModal)($.UploadTypes.AVATAR, null == eZ ? void 0 : eZ.guildId, eU, void 0)
            }), null != eD && (0, t.jsx)("img", {
              className: el.avatarDecoration,
              src: eD,
              alt: " ",
              "aria-hidden": !0
            }), an()]
          });
        return e ? (0, t.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == eu || eu({
              object: Q.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, t.jsx)(b.UserPopoutBadgeList, {
        user: er,
        guildId: null == eo ? void 0 : eo.id,
        isTryItOutFlow: eU,
        forProfileEffectModal: eM
      }), function() {
        let e = null == eW ? void 0 : eW.getPreviewBio(ev);
        return (0, t.jsxs)(E.default.Overlay, {
          className: r()(el.body, ew),
          children: [(0, t.jsx)(k.default, {
            isTryItOut: eU,
            user: er,
            nickname: null != e3 ? e3 : er.username,
            pronouns: null != ep ? ep : null == eW ? void 0 : eW.pronouns,
            usernameIcon: (() => {
              if (!!(null != eZ) && null !== eg) {
                if (!(null == eZ.avatar && null == eg)) return (0, t.jsx)(M.default, {
                  user: er,
                  nickname: e3
                })
              }
            })()
          }), !eM && (0, t.jsx)(w.default, {
            customStatusActivity: e2
          }), (0, t.jsx)(C.default, {}), !eC && (0, t.jsx)(R.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: eo,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: ae,
            lastSection: ej,
            lineClamp: eM ? 3 : void 0
          }), !eb && as && (0, t.jsx)(N.UserProfileRecentGamesSection, {
            userId: er.id
          }), !eR && (0, t.jsx)(_.default, {
            userId: er.id,
            guildId: null == eo ? void 0 : eo.id
          }), !ej && (0, t.jsx)(K.default, {
            activityName: eP,
            activityCharacter: ey,
            showExampleButton: null == eo && !eN
          })]
        })
      }()]
    })]
  })
}