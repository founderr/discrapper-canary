i.d(a, {
  Z: function() {
    return ei
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  r = i(120356),
  t = i.n(r),
  s = i(866442),
  o = i(442837),
  u = i(692547),
  d = i(481060),
  c = i(239091),
  v = i(634894),
  m = i(410030),
  f = i(607070),
  p = i(906732),
  h = i(220082),
  g = i(864106),
  I = i(1585),
  Z = i(583405),
  x = i(208567),
  P = i(680295),
  T = i(168631),
  S = i(318661),
  A = i(943217),
  E = i(793397),
  N = i(502762),
  j = i(155916),
  C = i(138394),
  y = i(131640),
  U = i(790711),
  _ = i(19836),
  b = i(538564),
  w = i(319300),
  R = i(584045),
  M = i(204197),
  k = i(695346),
  B = i(271383),
  O = i(158776),
  z = i(246946),
  L = i(451478),
  W = i(311715),
  D = i(768581),
  F = i(74538),
  G = i(998502),
  H = i(414666),
  V = i(654904),
  q = i(200299),
  K = i(981631),
  $ = i(486324),
  X = i(228168),
  Y = i(689938),
  J = i(725679),
  Q = i(471031);
let ee = G.ZP.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar,
  ea = (0, E.zW)({
    premiumUserWithBanner: J.avatarUploaderPremium,
    premiumUserWithoutBanner: J.avatarUploaderPremiumNoBanner,
    default: J.avatarUploaderNormal
  });

function ei(e) {
  var a, r, E;
  let {
    user: G,
    guild: ei,
    canUsePremiumCustomization: en,
    onUpsellClick: el,
    onAvatarChange: er,
    onBannerChange: et,
    pendingAccentColor: es,
    pendingBanner: eo,
    pendingBio: eu,
    pendingPronouns: ed,
    pendingAvatar: ec,
    pendingAvatarDecoration: ev,
    pendingNickname: em,
    pendingGlobalName: ef,
    pendingThemeColors: ep,
    pendingProfileEffectId: eh,
    avatarClassName: eg,
    activityName: eI,
    activityCharacter: eZ,
    isTryItOutFlow: ex = !1,
    disabledInputs: eP = !1,
    hideExampleButton: eT = !1,
    hideFakeActivity: eS = !1,
    hideCustomStatus: eA = !1,
    hideBioSection: eE = !1,
    forProfileEffectModal: eN = !1,
    hideMemberStatusSection: ej = !0,
    bodyClassName: eC,
    slideInAvatarDecoration: ey = !1,
    useLargeBanner: eU = !1
  } = e, e_ = l.useRef(null), [eb, ew] = l.useState(!1), eR = k.QK.getSetting(), {
    avatarDecorationSrc: eM,
    avatarSrc: ek,
    eventHandlers: eB
  } = (0, M.Z)({
    user: G,
    guildId: null == ei ? void 0 : ei.id,
    avatarDecorationOverride: (0, g.ad)(G, ei) && null == ev ? void 0 : ev,
    avatarOverride: ec,
    size: d.AvatarSizes.SIZE_80,
    showPending: !0
  }), eO = (0, S.ZP)(G.id, null == ei ? void 0 : ei.id), ez = (0, o.e7)([f.Z], () => f.Z.syncProfileThemeWithUserTheme), eL = (0, m.ZP)(), eW = (0, o.e7)([B.ZP], () => null == ei ? null : B.ZP.getMember(ei.id, G.id)), eD = null != ei, eF = null === (a = (0, S.ZP)(G.id, null)) || void 0 === a ? void 0 : a.profileEffectId, eG = null == eO ? void 0 : eO.profileEffectId, eH = eD && null == eh ? eh !== eG && null !== eh ? eG : eF : eh, eV = void 0 === ec ? G.getAvatarURL(void 0, 80) : ec, eq = (0, h.ZP)(eV, (0, d.useToken)(u.Z.unsafe_rawColors.PRIMARY_530).hsl(), !1), eK = null == eO ? void 0 : eO.getPreviewThemeColors(ep), e$ = null !== (r = null == eK ? void 0 : eK[0]) && void 0 !== r ? r : null == eO ? void 0 : eO.primaryColor, eX = ez ? eL : (0, T.V3)(e$), eY = (0, Z.Z)(null !== (E = null != es ? es : e$) && void 0 !== E ? E : (0, s._i)(eq)).hsl, eJ = (0, o.e7)([L.Z], () => L.Z.isFocused()), eQ = null == eO ? void 0 : eO.getPreviewBanner(eo, eR ? eJ : eb), e0 = null != eQ || null != eH, e4 = eU || null != eH, e1 = (0, V.Ly)({
    pendingNickname: em,
    pendingGlobalName: ef,
    user: G,
    guildMember: eW
  }), [e9, e7] = (0, o.Wu)([O.Z], () => [O.Z.findActivity(G.id, e => e.type === K.IIU.CUSTOM_STATUS), O.Z.getStatus(G.id)]), e8 = (0, d.useStatusFillColor)(e7), e6 = (0, o.e7)([z.Z], () => z.Z.hidePersonalInformation), e2 = (null == eO ? void 0 : eO.canUsePremiumProfileCustomization) || en, e5 = l.useCallback(() => {
    var e, a;
    null === (a = e_.current) || void 0 === a || null === (e = a.inputRef.current) || void 0 === e || e.activateUploadDialogue()
  }, []), e3 = l.useCallback((e, a) => {
    null == e || null == a ? er(null) : "image/gif" !== a.type || F.ZP.canUseAnimatedAvatar(G) ? (0, d.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([i.e("99387"), i.e("22872")]).then(i.bind(i, 850085));
      return i => (0, n.jsx)(l, {
        onCrop: er,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...i
      })
    }) : (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([i.e("99387"), i.e("9362")]).then(i.bind(i, 561910));
      return i => (0, n.jsx)(a, {
        ...i,
        imgURI: e,
        onChangeAvatar: () => {
          i.onClose(), e5()
        }
      })
    })
  }, [G, e5, er]), ae = (e, a) => {
    if (null == e || null == a) return et(null);
    (0, d.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([i.e("99387"), i.e("22872")]).then(i.bind(i, 850085));
      return i => (0, n.jsx)(l, {
        onCrop: et,
        uploadType: $.pC.BANNER,
        file: a,
        imgURI: e,
        allowSkip: !0,
        ...i
      })
    })
  };

  function aa() {
    let e = null != eX ? (0, d.getStatusBackdropColor)(eX) : null;
    return (0, n.jsxs)("div", {
      className: J.status,
      children: [null != e && (null == eO ? void 0 : eO.canUsePremiumProfileCustomization) && (0, n.jsx)("div", {
        className: J.statusDotBackground,
        style: {
          backgroundColor: e,
          opacity: (0, d.getStatusBackdropOpacity)(e7, e)
        }
      }), (0, n.jsx)("svg", {
        className: J.statusDot,
        children: (0, n.jsx)("rect", {
          height: "100%",
          width: "100%",
          fill: e8,
          mask: "url(#".concat((0, d.getStatusMask)(e7, !1), ")")
        })
      })]
    })
  }
  let ai = "ProfileCustomizationPreview";
  (0, v.j)({
    location: ai + " auto on",
    autoTrackExposure: !0
  }), (0, v.j)({
    location: ai + " auto off",
    autoTrackExposure: !1
  });
  let {
    analyticsLocations: an
  } = (0, p.ZP)();
  l.useEffect(() => {
    if (eR) return;
    let e = null == eO ? void 0 : eO.getBannerURL({
      canAnimate: !0,
      size: 480
    });
    if (!!D.F8(e)) new Image().src = null != e ? e : ""
  }, [eO, eR]);
  let al = null == ei;
  return (0, n.jsxs)(N.Z, {
    forceShowPremium: en,
    user: G,
    displayProfile: eO,
    profileType: X.y0.POPOUT,
    pendingThemeColors: ep,
    pendingProfileEffectId: eH,
    className: eN ? e2 ? J.profileEffectsModalCustomizationPreviewWithTheme : J.profileEffectsModalCustomizationPreviewWithoutTheme : e2 ? J.profileCustomizationPreviewWithTheme : J.profileCustomizationPreviewWithoutTheme,
    children: [(0, n.jsx)(P.Z, {
      profileEffectId: void 0 !== eH ? eH : eG
    }), (0, n.jsxs)(d.HeadingLevel, {
      children: [(0, n.jsx)(A.Z, {
        profileType: X.y0.POPOUT,
        hasBanner: e0,
        isPremium: en,
        hasThemeColors: e2,
        overrideBannerWidth: eN ? 280 : void 0,
        hasProfileEffect: e4,
        children: en ? (0, n.jsxs)("div", {
          onMouseMove: () => ew(!0),
          onMouseLeave: () => ew(!1),
          children: [(0, n.jsx)(x.Z, {
            className: J.bannerUploader,
            showRemoveButton: !1,
            disabled: !en || eP,
            image: eQ,
            makeURL: () => eQ,
            onChange: ae,
            imageStyle: {
              backgroundColor: eY
            },
            imageClassName: t()(e0 ? J.bannerUploaderInnerSquare : J.bannerUploaderInnerSquareEmpty),
            hint: Y.Z.Messages.CHANGE_BANNER,
            onOpenImageSelectModal: () => (0, V.$r)($.pC.BANNER, null == eW ? void 0 : eW.guildId, ex, void 0),
            hideSize: !0,
            maxFileSizeBytes: q.B,
            onFileSizeError: V.Wf
          }), !eR && D.F8(eQ) ? (0, n.jsx)(W.Z, {
            className: J.gifTag
          }) : null]
        }) : (0, n.jsx)("div", {
          className: e4 ? J.bannerUploaderInnerSquare : J.bannerNormal,
          style: {
            backgroundColor: eY
          },
          children: eP ? null : (0, n.jsx)(d.Clickable, {
            onClick: () => null == el ? void 0 : el({
              object: K.qAy.EDIT_PROFILE_BANNER
            }),
            className: J.bannerNitroUpsell,
            children: (0, n.jsx)(d.Heading, {
              className: J.bannerNitroUpsellText,
              variant: "eyebrow",
              children: Y.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
            })
          })
        })
      }), al ? (0, n.jsxs)(d.Clickable, {
        ...eB,
        "aria-disabled": eP,
        onClick: eP ? void 0 : e => {
          (0, c.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(i.bind(i, 445924));
            return () => (0, n.jsx)(e, {
              onClose: c.Zy,
              onChangeAvatar: () => (0, V.$r)($.pC.AVATAR, null == eW ? void 0 : eW.guildId, ex),
              onChangeAvatarDecoration: () => {
                (0, I.ps)({
                  guild: null == ei ? void 0 : ei,
                  analyticsLocations: an,
                  isTryItOutFlow: ex
                })
              }
            })
          })
        },
        className: t()(ea({
          isPremium: en,
          hasBanner: e0,
          hasProfileEffect: e4
        }), {
          [J.defaultCursor]: eP
        }),
        children: [(0, n.jsx)(ee, {
          className: J.avatarUploaderInner,
          src: ek,
          avatarDecoration: ey ? null : eM,
          size: d.AvatarSizes.SIZE_80,
          "aria-label": G.username
        }), ey && (0, n.jsx)(j.Z, {
          initTranslate3d: "translate3d(-20px, -120px, 0)",
          children: (0, n.jsx)(ee, {
            src: Q,
            avatarDecoration: eM,
            size: d.AvatarSizes.SIZE_80,
            status: K.Skl.UNKNOWN,
            className: J.tryingOutAvatarDecoration,
            "aria-hidden": !0
          })
        }, eM), eP ? null : (0, n.jsx)("div", {
          className: J.hoverIconWrapper,
          children: (0, n.jsx)(d.PencilIcon, {
            size: "md",
            className: J.hoverIcon,
            color: "white"
          })
        }), aa()]
      }) : function() {
        let e = null != eW && !en,
          a = (0, n.jsxs)("div", {
            className: ea({
              isPremium: en,
              hasBanner: e0,
              hasProfileEffect: e4
            }),
            children: [(0, n.jsx)(x.Z, {
              disabled: eP,
              ref: e_,
              showIcon: null == eM,
              hint: e ? Y.Z.Messages.UNLOCK_GUILD_MEMBER_AVATAR : Y.Z.Messages.CHANGE_AVATAR,
              showRemoveButton: !1,
              imageClassName: t()(eg, J.avatarUploaderInner),
              image: ek,
              onChange: e3,
              makeURL: () => ek,
              maxFileSizeBytes: q.B,
              onFileSizeError: V.Wf,
              onOpenImageSelectModal: () => (0, V.$r)($.pC.AVATAR, null == eW ? void 0 : eW.guildId, ex, void 0)
            }), null != eM && (0, n.jsx)("img", {
              className: J.avatarDecoration,
              src: eM,
              alt: " ",
              "aria-hidden": !0
            }), aa()]
          });
        return e ? (0, n.jsx)(d.Clickable, {
          onClickCapture: e => {
            e.stopPropagation(), null == el || el({
              object: K.qAy.AVATAR
            })
          },
          children: a
        }) : a
      }(), (0, n.jsx)(y.Cb, {
        user: G,
        guildId: null == ei ? void 0 : ei.id,
        isTryItOutFlow: ex,
        forProfileEffectModal: eN
      }), function() {
        let e = null == eO ? void 0 : eO.getPreviewBio(eu);
        return (0, n.jsxs)(N.Z.Overlay, {
          className: t()(J.body, eC),
          children: [(0, n.jsx)(R.Z, {
            isTryItOut: ex,
            user: G,
            nickname: e1,
            pronouns: null != ed ? ed : null == eO ? void 0 : eO.pronouns,
            usernameIcon: (() => {
              if (!!(null != eW) && null !== ec && !!(null != eW.avatar || null != ec)) return (0, n.jsx)(U.Z, {
                user: G,
                nickname: e1
              })
            })()
          }), !eA && (0, n.jsx)(b.Z, {
            customStatusActivity: e9
          }), (0, n.jsx)(C.Z, {}), !eE && (0, n.jsx)(_.Z, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: ei,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: e6,
            lastSection: eS,
            lineClamp: eN ? 3 : void 0
          }), !ej && (0, n.jsx)(w.Z, {
            userId: G.id,
            guildId: null == ei ? void 0 : ei.id
          }), !eS && (0, n.jsx)(H.Z, {
            activityName: eI,
            activityCharacter: eZ,
            showExampleButton: null == ei && !eT
          })]
        })
      }()]
    })]
  })
}