"use strict";
l.r(t), l("47120"), l("627341");
var s = l("735250"),
  a = l("470079"),
  i = l("120356"),
  n = l.n(i),
  r = l("278074"),
  o = l("979554"),
  d = l("399606"),
  c = l("780384"),
  u = l("481060"),
  m = l("37234"),
  C = l("809206"),
  I = l("410030"),
  E = l("100527"),
  p = l("906732"),
  f = l("1585"),
  h = l("125988"),
  T = l("786761"),
  A = l("3148"),
  v = l("739566"),
  x = l("753206"),
  L = l("333867"),
  g = l("963249"),
  _ = l("197115"),
  N = l("300284"),
  O = l("962746"),
  R = l("731896"),
  b = l("642619"),
  S = l("318661"),
  y = l("25990"),
  P = l("594174"),
  j = l("642113"),
  D = l("151785"),
  M = l("626135"),
  F = l("74538"),
  B = l("335131"),
  k = l("1870"),
  U = l("884697"),
  w = l("141011"),
  z = l("426171"),
  V = l("224068"),
  H = l("813083"),
  W = l("823941"),
  G = l("680942"),
  Y = l("558060"),
  Z = l("237031"),
  K = l("372654"),
  X = l("832149"),
  q = l("215023"),
  J = l("981631"),
  Q = l("474936"),
  $ = l("231338"),
  ee = l("689938"),
  et = l("975075"),
  el = l("689262"),
  es = l("660097");
let ea = u.AvatarSizes.SIZE_152,
  ei = (0, f.getDecorationSizeForAvatarSize)(ea),
  en = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, p.default)(), i = a.useRef(null);
    return (0, s.jsx)(u.Clickable, {
      className: et.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, g.default)({
          subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  er = e => {
    let {
      product: t,
      user: l,
      category: i,
      onClose: E,
      returnRef: T
    } = e, {
      analyticsLocations: A
    } = (0, p.default)(), v = F.default.canUseCollectibles(l), [x, g] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId]), O = (0, N.default)({
      analyticsLocations: A
    }), S = (0, I.default)(), y = (0, c.isThemeDark)(S), P = (0, U.isPremiumCollectiblesProduct)(t), j = (0, U.extractPriceByPurchaseTypes)(t, J.PriceSetAssignmentPurchaseTypes.DEFAULT), D = (null == j ? void 0 : j.amount) === 0, [M] = t.items;
    a.useEffect(() => {
      if ((null == M ? void 0 : M.type) === o.CollectiblesItemType.AVATAR_DECORATION) return (0, C.setPendingAvatarDecoration)(M), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [M]);
    let w = e => (0, s.jsx)(_.default, {
        subscriptionTier: Q.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: Z.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, Z.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: i,
            returnRef: T,
            analyticsLocations: A
          })
        }
      }),
      {
        avatarDecorationSrc: z,
        eventHandlers: W
      } = (0, h.default)({
        user: l,
        avatarDecorationOverride: (null == M ? void 0 : M.type) === o.CollectiblesItemType.AVATAR_DECORATION ? M : null,
        size: ei
      }),
      K = (0, R.useProfileEffectPreset)(t.items[0].id);
    return (0, s.jsxs)("div", {
      className: et.collectibleInfoContainer,
      children: [(0, s.jsx)("div", {
        className: et.titleContainer,
        children: (0, s.jsx)(H.default, {
          category: i,
          display: "modal"
        })
      }), (0, r.match)(M.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, s.jsx)("div", {
        className: et.avatarPreviewContainer,
        children: (0, s.jsx)(u.Avatar, {
          ...W,
          "aria-label": ee.default.Messages.USER_SETTINGS_AVATAR,
          size: ea,
          avatarDecoration: z,
          src: es
        })
      })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsxs)("div", {
        className: et.pfxPreviewContainer,
        children: [(0, s.jsx)("img", {
          src: el,
          alt: "",
          className: et.sampleProfileAsset
        }), null != K && (0, s.jsx)("img", {
          src: K.config.thumbnailPreviewSrc,
          alt: "profile_effect_preview",
          className: et.staticPfxPreview
        })]
      })).otherwise(() => null), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: et.description,
          children: [(0, s.jsx)(V.default, {
            item: M,
            isDarkText: !y
          }), (0, s.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: et.headingWithItemTypePill,
            children: t.name
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: t.summary
          }), null != x ? (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: et.priceTag,
            children: ee.default.Messages.COLLECTIBLES_ALREADY_OWNED
          }) : P ? (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: et.priceTag,
            children: ee.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : v ? (0, s.jsx)(Y.default, {
            product: t,
            className: et.priceTag
          }) : (0, s.jsx)(Y.default, {
            product: t,
            className: et.priceTagContainer,
            renderNitroPrice: e => (0, s.jsx)(u.Text, {
              variant: "text-xs/medium",
              children: ee.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                price: e,
                subscribeNowHook: e => (0, s.jsx)(en, {
                  text: e
                })
              })
            })
          })]
        }), (0, s.jsx)("div", {
          className: et.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: et.primaryButtons,
            children: [!P || v || D ? null != x ? (0, s.jsx)(u.Button, {
              className: et.button,
              look: u.Button.Looks.FILLED,
              onClick: () => {
                if (E(), (0, m.popLayer)(), O(), (null == M ? void 0 : M.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, f.openAvatarDecorationModal)({
                    initialSelectedDecoration: M,
                    analyticsLocations: A
                  });
                  return
                }(null == M ? void 0 : M.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, b.openProfileEffectModal)({
                  initialSelectedEffectId: M.id,
                  analyticsLocations: A
                })
              },
              children: ee.default.Messages.COLLECTIBLES_USE_NOW
            }) : P ? (0, s.jsx)(u.Button, {
              className: et.button,
              look: u.Button.Looks.FILLED,
              submitting: g,
              submittingStartedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: ee.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, B.claimPremiumCollectiblesProduct)(t.skuId), E(), (0, X.default)({
                  product: t,
                  analyticsLocations: A
                })
              },
              children: ee.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(u.Button, {
              className: et.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, L.default)({
                skuId: t.skuId,
                analyticsLocations: A,
                onClose: e => e ? E() : (0, $.NOOP)()
              }),
              children: (null == M ? void 0 : M.type) === o.CollectiblesItemType.PROFILE_EFFECT ? ee.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : ee.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : w(ee.default.Messages.UNLOCK_WITH_NITRO), !P && !D && (0, s.jsx)(G.default, {
              product: t,
              onSuccess: E,
              disableCustomColor: !0
            })]
          })
        }), (0, s.jsx)(u.Text, {
          className: n()(et.disclaimer, !y && et.disclaimerLight),
          variant: "text-xxs/normal",
          children: null != x ? null : P ? ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == M ? void 0 : M.type) === o.CollectiblesItemType.PROFILE_EFFECT ? ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : ee.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eo = e => {
    let {
      product: t,
      user: l
    } = e, a = F.default.canUsePremiumProfileCustomization(l), i = (0, d.useStateFromStoresObject)([y.default], () => y.default.getAllPending()), n = (0, S.useDisplayProfileWithFetchEffect)(l.id), r = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [c] = t.items;
    return (0, s.jsxs)("div", {
      className: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? et.previewsContainerInner : et.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(O.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: $.NOOP,
        onBannerChange: $.NOOP,
        bodyClassName: et.profileCustomizationBody,
        pendingAvatarDecoration: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? c : void 0,
        pendingProfileEffectId: (null == c ? void 0 : c.type) === o.CollectiblesItemType.PROFILE_EFFECT ? c.id : void 0,
        forProfileEffectModal: (null == c ? void 0 : c.type) === o.CollectiblesItemType.PROFILE_EFFECT,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION || r,
        hideBioSection: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideMemberStatusSection: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideRecentGames: !0,
        useLargeBanner: !0
      }), (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(ec, {
        user: l
      })]
    })
  },
  ed = e => {
    let {
      author: t
    } = e;
    return (0, T.createMessageRecord)({
      ...(0, A.default)({
        author: t,
        channelId: "1337",
        content: ee.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: J.MessageStates.SENT,
      id: "0"
    })
  },
  ec = e => {
    let {
      user: t
    } = e, l = ed({
      author: t
    });
    return (0, s.jsx)(u.FocusBlock, {
      children: (0, s.jsxs)(u.Card, {
        className: et.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(x.default, {
          className: et.mockMessage,
          author: (0, v.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: et.mockInput,
          children: [(0, s.jsx)(D.default, {
            className: et.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(j.default, {
            className: et.mockInputButton,
            width: 24,
            height: 24
          })]
        })]
      })
    })
  };
t.default = e => {
  var t, l;
  let {
    transitionState: i,
    onClose: n,
    product: r,
    category: c,
    returnRef: m,
    analyticsSource: C,
    analyticsLocations: I
  } = e, f = (0, d.useStateFromStores)([P.default], () => P.default.getCurrentUser()), {
    analyticsLocations: h
  } = (0, p.default)([...I, E.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, z.useProductDetailsLinkableRoute)(r);
  let [T] = r.items;
  return (a.useEffect(() => {
    let e = (null == T ? void 0 : T.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    M.default.track(J.AnalyticEvents.OPEN_MODAL, {
      type: J.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: h,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(B.productDetailsOpened)
  }, [C, h, r.skuId, r.items, null == T ? void 0 : T.type]), null == f) ? null : (0, s.jsx)(p.AnalyticsLocationProvider, {
    value: h,
    children: (0, s.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: et.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(u.ModalContent, {
        className: et.modalContent,
        children: [(0, s.jsx)(er, {
          user: f,
          product: r,
          category: c,
          onClose: n
        }), (0, s.jsxs)("div", {
          className: (null == T ? void 0 : T.type) === o.CollectiblesItemType.AVATAR_DECORATION ? et.collectiblePreviewsContainerWithChat : et.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(w.default, {
            asset: null !== (l = c.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = q.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, K.getAssetSizeByHeight)(540),
            className: et.categoryBanner,
            blur: !0
          }), (0, s.jsx)(eo, {
            user: f,
            product: r
          }), (0, s.jsxs)("div", {
            className: et.profilePreviewHeader,
            children: [(0, s.jsx)("div", {
              className: et.titleImageContainer,
              children: (0, s.jsx)("img", {
                className: et.titleImage,
                src: (0, U.getCollectiblesAssetURL)(c.logo, {
                  size: W.LOGO_SIZE
                }),
                alt: c.name
              })
            }), (0, s.jsx)(u.ModalCloseButton, {
              onClick: n,
              className: et.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}