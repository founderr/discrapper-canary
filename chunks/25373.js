"use strict";
l.r(a), l.d(a, {
  default: function() {
    return X
  }
}), l("47120");
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  r = l.n(n),
  s = l("442837"),
  o = l("481060"),
  u = l("239091"),
  d = l("410030"),
  c = l("607070"),
  f = l("906732"),
  m = l("864106"),
  v = l("1585"),
  p = l("208567"),
  g = l("680295"),
  h = l("168631"),
  S = l("318661"),
  A = l("502762"),
  I = l("155916"),
  x = l("138394"),
  y = l("131640"),
  E = l("790711"),
  T = l("19836"),
  P = l("538564"),
  U = l("319300"),
  j = l("584045"),
  N = l("204197"),
  C = l("695346"),
  b = l("271383"),
  M = l("158776"),
  w = l("246946"),
  _ = l("586791"),
  R = l("768581"),
  k = l("74538"),
  B = l("51144"),
  O = l("998502"),
  z = l("414666"),
  L = l("654904"),
  F = l("813454"),
  D = l("200299"),
  G = l("981631"),
  W = l("486324"),
  Z = l("228168"),
  H = l("689938"),
  V = l("455108"),
  Y = l("471031");
let K = O.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function X(e) {
  var a, n;
  let {
    user: O,
    guild: X,
    canUsePremiumCustomization: q,
    onUpsellClick: J,
    onAvatarChange: Q,
    onBannerChange: $,
    pendingAccentColor: ee,
    pendingBanner: ea,
    pendingBio: el,
    pendingPronouns: et,
    pendingAvatar: ei,
    pendingAvatarDecoration: en,
    pendingNickname: er,
    pendingGlobalName: es,
    pendingThemeColors: eo,
    pendingProfileEffectId: eu,
    avatarClassName: ed,
    activityName: ec,
    activityCharacter: ef,
    isTryItOutFlow: em = !1,
    disabledInputs: ev = !1,
    hideExampleButton: ep = !1,
    hideFakeActivity: eg = !1,
    hideBioSection: eh = !1,
    forProfileEffectModal: eS = !1,
    hideMemberStatusSection: eA = !0,
    bodyClassName: eI,
    slideInAvatarDecoration: ex = !1
  } = e, {
    analyticsLocations: ey
  } = (0, f.default)(), eE = i.useRef(null), eT = C.GifAutoPlay.getSetting(), {
    avatarDecorationSrc: eP,
    avatarSrc: eU,
    eventHandlers: ej
  } = (0, N.default)({
    user: O,
    guildId: null == X ? void 0 : X.id,
    avatarDecorationOverride: (0, m.hasGlobalDefaultAvatarDecoration)(O, X) && null == en ? void 0 : en,
    avatarOverride: ei,
    size: o.AvatarSizes.SIZE_80,
    showPending: !0
  }), eN = (0, S.default)(O.id, null == X ? void 0 : X.id), eC = (0, s.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme), eb = (0, d.default)(), eM = (0, s.useStateFromStores)([b.default], () => null == X ? null : b.default.getMember(X.id, O.id)), ew = null == eN ? void 0 : eN.profileEffectId, e_ = (0, L.getPreviewProfileEffectId)({
    pendingProfileEffectId: eu,
    displayProfile: eN
  }), eR = null == eN ? void 0 : eN.getPreviewThemeColors(eo), ek = null !== (a = null == eR ? void 0 : eR[0]) && void 0 !== a ? a : null == eN ? void 0 : eN.primaryColor, eB = eC ? eb : (0, h.getProfileTheme)(ek), eO = null !== (n = (0, L.getPreviewNickname)(er, null == eM ? void 0 : eM.nick)) && void 0 !== n ? n : (0, L.getPreviewDisplayName)(es, B.default.getName(O)), [ez, eL] = (0, s.useStateFromStoresArray)([M.default], () => [M.default.findActivity(O.id, e => e.type === G.ActivityTypes.CUSTOM_STATUS), M.default.getStatus(O.id)]), eF = (0, o.useStatusFillColor)(eL), eD = (0, s.useStateFromStores)([w.default], () => w.default.hidePersonalInformation), eG = i.useCallback(() => {
    var e, a;
    null === (a = eE.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), eW = i.useCallback((e, a) => {
    null == e || null == a ? Q(null) : "image/gif" !== a.type || k.default.canUseAnimatedAvatar(O) ? (0, o.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([l.e("99387"), l.e("22872")]).then(l.bind(l, "850085"));
      return l => (0, t.jsx)(i, {
        onCrop: Q,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...l
      })
    }) : (0, o.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([l.e("99387"), l.e("9362")]).then(l.bind(l, "561910"));
      return l => (0, t.jsx)(a, {
        ...l,
        imgURI: e,
        onChangeAvatar: () => {
          l.onClose(), eG()
        }
      })
    })
  }, [O, eG, Q]);

  function eZ() {
    let e = null != eB ? (0, o.getStatusBackdropColor)(eB) : null;
    return (0, t.jsxs)("div", {
      className: V.status,
      children: [null != e && (null == eN ? void 0 : eN.canUsePremiumProfileCustomization) && (0, t.jsx)("div", {
        className: V.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, o.getStatusBackdropOpacity)(eL, e)
        }
      }), (0, t.jsx)("svg", {
        className: V.statusDot,
        children: (0, t.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: eF,
          mask: "url(#".concat((0, o.getStatusMask)(eL, !1), ")")
        })
      })]
    })
  }
  i.useEffect(() => {
    if (eT) return;
    let e = null == eN ? void 0 : eN.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!R.isAnimatedImageURL(e)) new Image().src = null != e ? e : ""
  }, [eN, eT]);
  let eH = null == X;
  return (0, t.jsxs)(A.default, {
    forceShowPremium: q,
    user: O,
    displayProfile: eN,
    profileType: Z.UserProfileTypes.BITE_SIZE,
    pendingThemeColors: eo,
    pendingProfileEffectId: e_,
    className: r()(V.container, {
      [V.profileEffectPreview]: eS
    }),
    children: [(0, t.jsx)(g.default, {
      profileEffectId: void 0 !== e_ ? e_ : ew
    }), (0, t.jsxs)(o.HeadingLevel, {
      children: [(0, t.jsx)(F.default, {
        displayProfile: eN,
        canUsePremiumCustomization: q,
        pendingBanner: ea,
        pendingAccentColor: ee,
        previewAvatar: eU,
        previewThemeColors: eR,
        previewProfileEffectId: e_,
        isTryItOutFlow: em,
        disabledInputs: ev,
        forProfileEffectModal: eS,
        onBannerChange: $,
        onUpsellClick: () => null == J ? void 0 : J({
          object: G.AnalyticsObjects.EDIT_PROFILE_BANNER
        })
      }), eH ? function() {
        let e = () => (0, L.handleOpenSelectImageModal)(W.UploadTypes.AVATAR, null == eM ? void 0 : eM.guildId, em),
          a = () => (0, v.openAvatarDecorationModal)({
            guild: null == X ? void 0 : X,
            analyticsLocations: ey,
            isTryItOutFlow: em
          });
        return (0, t.jsxs)(o.Clickable, {
          ...ej,
          "aria-disabled": ev,
          onClick: ev ? void 0 : i => {
            (0, u.openContextMenuLazy)(i, async () => {
              let {
                default: i
              } = await l.e("34627").then(l.bind(l, "445924"));
              return () => (0, t.jsx)(i, {
                changeAvatarAction: e,
                changeDecorationAction: a
              })
            })
          },
          className: r()(V.avatarUploader, {
            [V.defaultCursor]: ev
          }),
          children: [(0, t.jsx)(K, {
            className: V.avatarUploaderInner,
            src: eU,
            avatarDecoration: ex ? null : eP,
            size: o.AvatarSizes.SIZE_80,
            "aria-label": O.username
          }), ex && (0, t.jsx)(I.default, {
            initTranslate3d: "translate3d(-20px, -120px, 0)",
            children: (0, t.jsx)(K, {
              src: Y,
              avatarDecoration: eP,
              size: o.AvatarSizes.SIZE_80,
              status: G.StatusTypes.UNKNOWN,
              className: V.tryingOutAvatarDecoration,
              "aria-hidden": !0
            })
          }, eP), ev ? null : (0, t.jsx)("div", {
            className: V.hoverIconWrapper,
            children: (0, t.jsx)(_.default, {
              className: V.hoverIcon,
              color: "white"
            })
          }), eZ()]
        })
      }() : function() {
        let e = null != eM && !q,
          a = (0, t.jsxs)("div", {
            className: V.avatarUploader,
            children: [(0, t.jsx)(p.default, {
              disabled: ev,
              ref: eE,
              showIcon: null == eP,
              hint: e ? H.default.Messages.UNLOCK_GUILD_MEMBER_AVATAR : H.default.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: r()(ed, V.avatarUploaderInner),
              image: eU,
              onChange: eW,
              makeURL: () => eU,
              maxFileSizeBytes: D.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: L.showFileSizeErrorModal,
              onOpenImageSelectModal: () => (0, L.handleOpenSelectImageModal)(W.UploadTypes.AVATAR, null == eM ? void 0 : eM.guildId, em, void 0)
            }), null != eP && (0, t.jsx)("img", {
              className: V.avatarDecoration,
              src: eP,
              alt: " ",
              "aria-hidden": !0
            }), eZ()]
          });
        return e ? (0, t.jsx)(o.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == J || J({
              object: G.AnalyticsObjects.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, t.jsx)(y.UserPopoutBadgeList, {
        user: O,
        guildId: null == X ? void 0 : X.id,
        isTryItOutFlow: em,
        forProfileEffectModal: eS
      }), function() {
        let e = null == eN ? void 0 : eN.getPreviewBio(el);
        return (0, t.jsxs)(A.default.Overlay, {
          className: r()(V.body, eI),
          children: [(0, t.jsx)(j.default, {
            isTryItOut: em,
            user: O,
            nickname: null != eO ? eO : O.username,
            pronouns: null != et ? et : null == eN ? void 0 : eN.pronouns,
            usernameIcon: (() => {
              if (!!(null != eM) && null !== ei) {
                if (!(null == eM.avatar && null == ei)) return (0, t.jsx)(E.default, {
                  user: O,
                  nickname: eO
                })
              }
            })()
          }), !eS && (0, t.jsx)(P.default, {
            customStatusActivity: ez
          }), (0, t.jsx)(x.default, {}), !eh && (0, t.jsx)(T.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: X,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: eD,
            lastSection: eg,
            lineClamp: eS ? 3 : void 0
          }), !eA && (0, t.jsx)(U.default, {
            userId: O.id,
            guildId: null == X ? void 0 : X.id
          }), !eg && (0, t.jsx)(z.default, {
            activityName: ec,
            activityCharacter: ef,
            showExampleButton: null == X && !ep
          })]
        })
      }()]
    })]
  })
}