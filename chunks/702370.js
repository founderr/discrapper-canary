"use strict";
l.r(t), l("47120"), l("627341");
var s = l("735250"),
  a = l("470079"),
  i = l("803997"),
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
  T = l("1585"),
  f = l("125988"),
  h = l("786761"),
  A = l("3148"),
  x = l("739566"),
  L = l("753206"),
  g = l("333867"),
  v = l("963249"),
  _ = l("197115"),
  O = l("300284"),
  N = l("962746"),
  R = l("731896"),
  S = l("642619"),
  b = l("318661"),
  y = l("25990"),
  P = l("594174"),
  j = l("642113"),
  M = l("466111"),
  D = l("151785"),
  B = l("626135"),
  F = l("74538"),
  k = l("335131"),
  U = l("1870"),
  w = l("884697"),
  V = l("624377"),
  z = l("141011"),
  H = l("426171"),
  W = l("224068"),
  G = l("813083"),
  Y = l("823941"),
  Z = l("680942"),
  K = l("558060"),
  X = l("409116"),
  q = l("237031"),
  J = l("372654"),
  Q = l("832149"),
  $ = l("414592"),
  ee = l("981631"),
  et = l("474936"),
  el = l("231338"),
  es = l("689938"),
  ea = l("662553"),
  ei = l("689262"),
  en = l("660097");
let er = u.AvatarSizes.SIZE_152,
  eo = (0, T.getDecorationSizeForAvatarSize)(er),
  ed = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, p.default)(), i = a.useRef(null);
    return (0, s.jsx)(u.Clickable, {
      className: ea.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, v.default)({
          subscriptionTier: et.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  ec = e => {
    let {
      product: t,
      user: l,
      category: i,
      onClose: E,
      returnRef: h
    } = e, {
      analyticsLocations: A
    } = (0, p.default)(), x = F.default.canUseCollectibles(l), [L, v] = (0, d.useStateFromStoresArray)([U.default], () => [U.default.getPurchase(t.skuId), U.default.isClaiming === t.skuId]), N = (0, O.default)({
      analyticsLocations: A
    }), b = (0, I.default)(), y = (0, c.isThemeDark)(b), {
      buttonColors: P
    } = (0, V.default)(t.styles), j = null != P ? {
      background: (0, J.getBackgroundGradient)(P, 90),
      color: P.text.toHslString()
    } : void 0, D = (0, w.isPremiumCollectiblesProduct)(t), B = (0, w.extractPriceByPurchaseTypes)(t, ee.PriceSetAssignmentPurchaseTypes.DEFAULT), z = (null == B ? void 0 : B.amount) === 0, [H] = t.items;
    a.useEffect(() => {
      if ((null == H ? void 0 : H.type) === o.CollectiblesItemType.AVATAR_DECORATION) return (0, C.setPendingAvatarDecoration)(H), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [H]);
    let Y = e => (0, s.jsx)(_.default, {
        subscriptionTier: et.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: q.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, q.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: i,
            returnRef: h,
            analyticsLocations: A
          })
        }
      }),
      {
        avatarDecorationSrc: $,
        eventHandlers: ec
      } = (0, f.default)({
        user: l,
        avatarDecorationOverride: (null == H ? void 0 : H.type) === o.CollectiblesItemType.AVATAR_DECORATION ? H : null,
        size: eo
      }),
      eu = (0, R.useProfileEffectPreset)(t.items[0].id);
    return (0, s.jsxs)("div", {
      className: ea.collectibleInfoContainer,
      children: [(0, s.jsx)("div", {
        className: ea.titleContainer,
        children: (0, s.jsx)(G.default, {
          category: i,
          display: "modal"
        })
      }), (0, r.match)(H.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, s.jsx)("div", {
        className: ea.avatarPreviewContainer,
        children: (0, s.jsx)(u.Avatar, {
          ...ec,
          "aria-label": es.default.Messages.USER_SETTINGS_AVATAR,
          size: er,
          avatarDecoration: $,
          src: en
        })
      })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsxs)("div", {
        className: ea.pfxPreviewContainer,
        children: [(0, s.jsx)("img", {
          src: ei,
          alt: "",
          className: ea.sampleProfileAsset
        }), null != eu && (0, s.jsx)("img", {
          src: eu.config.thumbnailPreviewSrc,
          alt: "profile_effect_preview",
          className: ea.staticPfxPreview
        })]
      })).otherwise(() => null), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: ea.description,
          children: [(0, s.jsx)(W.default, {
            item: H,
            isDarkText: !y
          }), (0, s.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: ea.headingWithItemTypePill,
            children: t.name
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: t.summary
          }), (() => {
            if (null != L) return (0, s.jsx)(u.Text, {
              variant: "text-md/semibold",
              className: ea.priceTag,
              children: es.default.Messages.COLLECTIBLES_ALREADY_OWNED
            });
            if (D) return (0, s.jsx)(u.Text, {
              variant: "text-md/semibold",
              className: ea.priceTag,
              children: es.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
            });
            if (x) return (0, s.jsx)(K.default, {
              product: t,
              className: ea.priceTag,
              alwaysWhiteText: y
            });
            if (null == B) return null;
            let e = (0, w.extractPriceByPurchaseTypes)(t, ee.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
            return (0, s.jsxs)("div", {
              className: ea.priceTagContainer,
              children: [(0, s.jsx)(X.default, {
                price: B,
                alwaysWhiteText: y
              }), null != e && !z && (0, s.jsx)(X.default, {
                price: e,
                variant: "text-xs/medium",
                alwaysWhiteText: y,
                className: ea.premiumPriceTag,
                renderPrice: e => es.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                  price: e,
                  subscribeNowHook: e => (0, s.jsx)(ed, {
                    text: e
                  })
                }),
                icon: (0, s.jsx)(u.Tooltip, {
                  text: es.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": es.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  children: e => {
                    let {
                      ...t
                    } = e;
                    return (0, s.jsx)(M.default, {
                      ...t,
                      className: ea.premiumPriceTagIcon,
                      color: y ? "white" : "black"
                    })
                  }
                })
              })]
            })
          })()]
        }), (0, s.jsx)("div", {
          className: ea.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: ea.primaryButtons,
            children: [!D || x || z ? null != L ? (0, s.jsx)(u.Button, {
              style: j,
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => {
                if (E(), (0, m.popLayer)(), N(), (null == H ? void 0 : H.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, T.openAvatarDecorationModal)({
                    initialSelectedDecoration: H,
                    analyticsLocations: A
                  });
                  return
                }(null == H ? void 0 : H.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
                  initialSelectedEffectId: H.id,
                  analyticsLocations: A
                })
              },
              children: es.default.Messages.COLLECTIBLES_USE_NOW
            }) : D ? (0, s.jsx)(u.Button, {
              style: j,
              className: ea.button,
              look: u.Button.Looks.FILLED,
              submitting: v,
              submittingStartedLabel: es.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: es.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, k.claimPremiumCollectiblesProduct)(t.skuId), E(), (0, Q.default)({
                  product: t,
                  analyticsLocations: A
                })
              },
              children: es.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(u.Button, {
              style: j,
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, g.default)({
                skuId: t.skuId,
                analyticsLocations: A,
                onClose: e => e ? E() : (0, el.NOOP)()
              }),
              children: (null == H ? void 0 : H.type) === o.CollectiblesItemType.PROFILE_EFFECT ? es.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : es.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : Y(es.default.Messages.UNLOCK_WITH_NITRO), !D && !z && (0, s.jsx)(Z.default, {
              product: t,
              onSuccess: E
            })]
          })
        }), (0, s.jsx)(u.Text, {
          className: n()(ea.disclaimer, !y && ea.disclaimerLight),
          variant: "text-xxs/normal",
          children: null != L ? null : D ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == H ? void 0 : H.type) === o.CollectiblesItemType.PROFILE_EFFECT ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eu = e => {
    let {
      product: t,
      user: l
    } = e, a = F.default.canUsePremiumProfileCustomization(l), i = (0, d.useStateFromStoresObject)([y.default], () => y.default.getAllPending()), n = (0, b.default)(l.id), r = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [c] = t.items;
    return (0, s.jsxs)("div", {
      className: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.previewsContainerInner : ea.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(N.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: el.NOOP,
        onBannerChange: el.NOOP,
        bodyClassName: ea.profileCustomizationBody,
        pendingAvatarDecoration: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? c : void 0,
        pendingProfileEffectId: (null == c ? void 0 : c.type) === o.CollectiblesItemType.PROFILE_EFFECT ? c.id : void 0,
        forProfileEffectModal: (null == c ? void 0 : c.type) === o.CollectiblesItemType.PROFILE_EFFECT,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION || r,
        hideBioSection: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideMemberStatusSection: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideRecentGames: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        useLargeBanner: !0
      }), (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(eC, {
        user: l
      })]
    })
  },
  em = e => {
    let {
      author: t
    } = e;
    return (0, h.createMessageRecord)({
      ...(0, A.default)({
        author: t,
        channelId: "1337",
        content: es.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: ee.MessageStates.SENT,
      id: "0"
    })
  },
  eC = e => {
    let {
      user: t
    } = e, l = em({
      author: t
    });
    return (0, s.jsx)(u.FocusBlock, {
      children: (0, s.jsxs)(u.Card, {
        className: ea.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(L.default, {
          className: ea.mockMessage,
          author: (0, x.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: ea.mockInput,
          children: [(0, s.jsx)(D.default, {
            className: ea.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(j.default, {
            className: ea.mockInputButton,
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
  } = e, T = (0, d.useStateFromStores)([P.default], () => P.default.getCurrentUser()), {
    analyticsLocations: f
  } = (0, p.default)([...I, E.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, H.useProductDetailsLinkableRoute)(r);
  let [h] = r.items;
  return (a.useEffect(() => {
    let e = (null == h ? void 0 : h.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    return B.default.track(ee.AnalyticEvents.OPEN_MODAL, {
      type: ee.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: f,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(k.productDetailsOpened), () => {
      r.items.map(k.productDetailsClosed)
    }
  }, [C, f, r.skuId, r.items, null == h ? void 0 : h.type]), null == T) ? null : (0, s.jsx)(p.AnalyticsLocationProvider, {
    value: f,
    children: (0, s.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: ea.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(u.ModalContent, {
        className: ea.modalContent,
        children: [(0, s.jsx)(ec, {
          user: T,
          product: r,
          category: c,
          onClose: n
        }), (0, s.jsxs)("div", {
          className: (null == h ? void 0 : h.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.collectiblePreviewsContainerWithChat : ea.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(z.default, {
            asset: null !== (l = c.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = $.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, J.getAssetSizeByHeight)(540),
            className: ea.categoryBanner,
            blur: !0
          }), (0, s.jsx)(eu, {
            user: T,
            product: r
          }), (0, s.jsxs)("div", {
            className: ea.profilePreviewHeader,
            children: [(0, s.jsx)("div", {
              className: ea.titleImageContainer,
              children: (0, s.jsx)("img", {
                className: ea.titleImage,
                src: (0, w.getCollectiblesAssetURL)(c.logo, {
                  size: Y.LOGO_SIZE
                }),
                alt: c.name
              })
            }), (0, s.jsx)(u.ModalCloseButton, {
              onClick: n,
              className: ea.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}