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
  A = l("208567"),
  y = l("680295"),
  T = l("168631"),
  x = l("318661"),
  P = l("943217"),
  E = l("793397"),
  j = l("502762"),
  N = l("347949"),
  U = l("155916"),
  C = l("138394"),
  b = l("131640"),
  w = l("790711"),
  M = l("19836"),
  _ = l("538564"),
  k = l("319300"),
  B = l("584045"),
  R = l("204197"),
  O = l("761174"),
  z = l("695346"),
  L = l("271383"),
  F = l("158776"),
  D = l("246946"),
  G = l("451478"),
  W = l("311715"),
  Z = l("586791"),
  H = l("768581"),
  V = l("74538"),
  Y = l("51144"),
  K = l("998502"),
  X = l("414666"),
  q = l("654904"),
  J = l("200299"),
  Q = l("981631"),
  $ = l("486324"),
  ee = l("228168"),
  ea = l("689938"),
  el = l("852552"),
  et = l("471031");
let ei = K.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  en = (0, E.buildGetPremiumUserBannerStyles)({
    premiumUserWithBanner: el.avatarUploaderPremium,
    premiumUserWithoutBanner: el.avatarUploaderPremiumNoBanner,
    default: el.avatarUploaderNormal
  });

function er(e) {
  var a, n, E, K;
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
    pendingProfileEffectId: ey,
    avatarClassName: eT,
    activityName: ex,
    activityCharacter: eP,
    isTryItOutFlow: eE = !1,
    disabledInputs: ej = !1,
    hideExampleButton: eN = !1,
    hideFakeActivity: eU = !1,
    hideBioSection: eC = !1,
    hideRecentGames: eb = !1,
    forProfileEffectModal: ew = !1,
    hideMemberStatusSection: eM = !0,
    bodyClassName: e_,
    slideInAvatarDecoration: ek = !1,
    useLargeBanner: eB = !1
  } = e, eR = i.useRef(null), [eO, ez] = i.useState(!1), eL = z.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eF,
    avatarSrc: eD,
    eventHandlers: eG
  } = (0, R.default)({
    user: er,
    guildId: null == es ? void 0 : es.id,
    avatarDecorationOverride: (0, h.hasGlobalDefaultAvatarDecoration)(er, es) && null == eh ? void 0 : eh,
    avatarOverride: eg,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eW = (0, x.default)(er.id, null == es ? void 0 : es.id), eZ = (0, o.useStateFromStores)([v.default], () => v.default.syncProfileThemeWithUserTheme), eH = (0, m.default)(), eV = (0, o.useStateFromStores)([L.default], () => null == es ? null : L.default.getMember(es.id, er.id)), eY = null === (a = (0, x.default)(er.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eK = null == eW ? void 0 : eW.profileEffectId, eX = null != es && null == ey ? ey !== eK && null !== ey ? eK : eY : ey, eq = void 0 === eg ? er.getAvatarURL(void 0, 80) : eg, eJ = (0, g.default)(eq, (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_530).hsl(), !1), eQ = null == eW ? void 0 : eW.getPreviewThemeColors(eA), e$ = null !== (n = null == eQ ? void 0 : eQ[0]) && void 0 !== n ? n : null == eW ? void 0 : eW.primaryColor, e0 = eZ ? eH : (0, T.getProfileTheme)(e$), e1 = (0, I.default)(null !== (E = null != ef ? ef : e$) && void 0 !== E ? E : (0, s.hex2int)(eJ)).hsl, e4 = (0, o.useStateFromStores)([G.default], () => G.default.isFocused()), e8 = null == eW ? void 0 : eW.getPreviewBanner(em, eL ? e4 : eO), e2 = null != e8 || null != eX, e5 = eB || null != eX, e6 = null !== (K = (0, q.getPreviewNickname)(eS, null == eV ? void 0 : eV.nick)) && void 0 !== K ? K : (0, q.getPreviewDisplayName)(eI, Y.default.getName(er)), [e3, e7] = (0, o.useStateFromStoresArray)([F.default], () => [F.default.findActivity(er.id, e => e.type === Q.ActivityTypes.CUSTOM_STATUS), F.default.getStatus(er.id)]), e9 = (0, d.useStatusFillColor)(e7), ae = (0, o.useStateFromStores)([D.default], () => D.default.hidePersonalInformation), aa = (null == eW ? void 0 : eW.canUsePremiumProfileCustomization) || eo, al = i.useCallback(() => {
    var e, a;
    null === (a = eR.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), at = i.useCallback((e, a) => {
    null == e || null == a ? ed(null) : "image/gif" !== a.type || V.default.canUseAnimatedAvatar(er) ? (0, d.openModalLazy)(async () => {
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
          opacity: (0, d.getStatusBackdropOpacity)(e7, e)
        }
      }), (0, t.jsx)("svg", {
        className: el.statusDot,
        children: (0, t.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e9,
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
    analyticsLocations: as
  } = (0, p.default)(), ao = (0, O.useIsUserRecentGamesEnabled)({
    userId: er.id,
    location: "28tk0bf_4"
  });
  i.useEffect(() => {
    if (eL) return;
    let e = null == eW ? void 0 : eW.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!H.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eW, eL]);
  let au = null == es;
  return (0, t.jsxs)(j.default, {
    forceShowPremium: eo,
    user: er,
    displayProfile: eW,
    profileType: ee.UserProfileTypes.POPOUT,
    pendingThemeColors: eA,
    pendingProfileEffectId: eX,
    className: ew ? aa ? el.profileEffectsModalCustomizationPreviewWithTheme : el.profileEffectsModalCustomizationPreviewWithoutTheme : aa ? el.profileCustomizationPreviewWithTheme : el.profileCustomizationPreviewWithoutTheme,
    children: [(0, t.jsx)(y.default, {
      profileEffectId: void 0 !== eX ? eX : eK
    }), (0, t.jsxs)(d.HeadingLevel, {
      children: [(0, t.jsx)(P.default, {
        profileType: ee.UserProfileTypes.POPOUT,
        hasBanner: e2,
        isPremium: eo,
        hasThemeColors: aa,
        overrideBannerWidth: ew ? 280 : void 0,
        hasProfileEffect: e5,
        children: eo ? (0, t.jsxs)("div", {
          onMouseMove: () => ez(!0),
          onMouseLeave: () => ez(!1),
          children: [(0, t.jsx)(A.default, {
            className: el.bannerUploader,
            showRemoveButton: !1,
            disabled: !eo || ej,
            image: e8,
            makeURL: () => e8,
            onChange: ai,
            imageStyle: {
              backgroundColor: e1
            },
            imageClassName: r()(e2 ? el.bannerUploaderInnerSquare : el.bannerUploaderInnerSquareEmpty),
            hint: ea.default.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, q.handleOpenSelectImageModal)($.UploadTypes.BANNER, null == eV ? void 0 : eV.guildId, eE, void 0),
            hideSize: !0,
            maxFileSizeBytes: J.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
            onFileSizeError: q.showFileSizeErrorModal
          }), !eL && H.isAnimatedImageURL(e8) ? (0, t.jsx)(W.default, {
            className: el.gifTag
          }) : null]
        }) : (0, t.jsx)("div", {
          className: e5 ? el.bannerUploaderInnerSquare : el.bannerNormal,
          style: {
            backgroundColor: e1
          },
          children: ej ? null : (0, t.jsx)(d.Clickable, {
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
        let e = () => (0, q.handleOpenSelectImageModal)($.UploadTypes.AVATAR, null == eV ? void 0 : eV.guildId, eE),
          a = () => (0, S.openAvatarDecorationModal)({
            guild: null == es ? void 0 : es,
            analyticsLocations: as,
            isTryItOutFlow: eE
          });
        return (0, t.jsxs)(d.Clickable, {
          ...eG,
          "aria-disabled": ej,
          onClick: ej ? void 0 : i => {
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
            isPremium: eo,
            hasBanner: e2,
            hasProfileEffect: e5
          }), {
            [el.defaultCursor]: ej
          }),
          children: [(0, t.jsx)(ei, {
            className: el.avatarUploaderInner,
            src: eD,
            avatarDecoration: ek ? null : eF,
            size: d.AvatarSizes.SIZE_80,
            "aria-label": er.username
          }), ek && (0, t.jsx)(U.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, t.jsx)(ei, {
              src: et,
              avatarDecoration: eF,
              size: d.AvatarSizes.SIZE_80,
              status: Q.StatusTypes.UNKNOWN,
              className: el.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eF), ej ? null : (0, t.jsx)("div", {
            className: el.hoverIconWrapper,
            children: (0, t.jsx)(Z.default, {
              className: el.hoverIcon,
              color: "white"
            })
          }), an()]
        })
      }() : function() {
        let e = null != eV && !eo,
          a = (0, t.jsxs)("div", {
            className: en({
              isPremium: eo,
              hasBanner: e2,
              hasProfileEffect: e5
            }),
            children: [(0, t.jsx)(A.default, {
              disabled: ej,
              ref: eR,
              showIcon: null == eF,
              hint: e ? ea.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : ea.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r()(eT, el.avatarUploaderInner),
              image: eD,
              onChange: at,
              makeURL: () => eD,
              maxFileSizeBytes: J.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: q.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, q.handleOpenSelectImageModal)($.UploadTypes.AVATAR, null == eV ? void 0 : eV.guildId, eE, void 0)
            }), null != eF && (0, t.jsx)("img", {
              className: el.avatarDecoration,
              src: eF,
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
        guildId: null == es ? void 0 : es.id,
        isTryItOutFlow: eE,
        forProfileEffectModal: ew
      }), function() {
        let e = null == eW ? void 0 : eW.getPreviewBio(ev);
        return (0, t.jsxs)(j.default.Overlay, {
          className: r()(el.body, e_),
          children: [(0, t.jsx)(B.default, {
            isTryItOut: eE,
            user: er,
            nickname: null != e6 ? e6 : er.username,
            pronouns: null != ep ? ep : null == eW ? void 0 : eW.pronouns,
            usernameIcon: (() => {
              if (!!(null != eV) && null !== eg) {
                if (!(null == eV.avatar && null == eg)) return (0, t.jsx)(w.default, {
                  user: er,
                  nickname: e6
                })
              }
            })()
          }), !ew && (0, t.jsx)(_.default, {
            customStatusActivity: e3
          }), (0, t.jsx)(C.default, {}), !eC && (0, t.jsx)(M.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: es,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: ae,
            lastSection: eU,
            lineClamp: ew ? 3 : void 0
          }), !eb && ao && (0, t.jsx)(N.UserProfileRecentGamesSection, {
            userId: er.id
          }), !eM && (0, t.jsx)(k.default, {
            userId: er.id,
            guildId: null == es ? void 0 : es.id
          }), !eU && (0, t.jsx)(X.default, {
            activityName: ex,
            activityCharacter: eP,
            showExampleButton: null == es && !eN
          })]
        })
      }()]
    })]
  })
}