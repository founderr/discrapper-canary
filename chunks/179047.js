"use strict";
l.r(t), l.d(t, {
  default: function() {
    return er
  }
}), l("222007");
var s = l("37983"),
  a = l("884691"),
  i = l("635058"),
  o = l("265586"),
  n = l("65597"),
  r = l("77078"),
  d = l("54239"),
  u = l("152584"),
  c = l("812204"),
  C = l("685665"),
  E = l("606292"),
  I = l("688318"),
  m = l("692038"),
  T = l("815297"),
  f = l("574073"),
  L = l("291655"),
  p = l("946964"),
  A = l("649844"),
  _ = l("635956"),
  g = l("38766"),
  O = l("184900"),
  h = l("493390"),
  v = l("217513"),
  S = l("790618"),
  N = l("697218"),
  y = l("46829"),
  x = l("216422"),
  R = l("351825"),
  b = l("599110"),
  M = l("719923"),
  P = l("21526"),
  D = l("775416"),
  k = l("491232"),
  j = l("716120"),
  B = l("89569"),
  w = l("665484"),
  F = l("342676"),
  U = l("450492"),
  H = l("920580"),
  V = l("791309"),
  z = l("54809"),
  W = l("408381"),
  G = l("264579"),
  Y = l("177586"),
  K = l("380171"),
  X = l("49111"),
  Z = l("646718"),
  q = l("843455"),
  J = l("782340"),
  Q = l("219591"),
  $ = l("53708");
let ee = r.AvatarSizes.SIZE_152,
  et = (0, E.getDecorationSizeForAvatarSize)(ee),
  el = (0, k.getLogoSize)(18),
  es = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, C.default)(), i = a.useRef(null);
    return (0, s.jsx)(r.Clickable, {
      className: Q.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, A.default)({
          subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  ea = e => {
    let {
      product: t,
      user: l,
      category: c,
      onClose: m,
      returnRef: T
    } = e, {
      analyticsLocations: f
    } = (0, C.default)(), L = M.default.canUseCollectibles(l), [A, O] = (0, n.useStateFromStoresArray)([D.default], () => [D.default.getPurchase(t.skuId), D.default.isClaiming === t.skuId]), v = (0, g.default)({
      analyticsLocations: f
    }), {
      buttonColors: S,
      backgroundColors: N
    } = (0, Y.default)(t.styles), y = null != S ? {
      background: (0, W.getBackgroundGradient)(S, 90),
      color: S.text.toHslString()
    } : void 0, R = null != N ? {
      background: (0, W.getBackgroundGradient)(N, 135)
    } : void 0, b = (0, k.isPremiumCollectiblesProduct)(t), j = (0, k.extractPriceByPurchaseTypes)(t, X.PriceSetAssignmentPurchaseTypes.DEFAULT), B = (null == j ? void 0 : j.amount) === 0, [K] = t.items;
    a.useEffect(() => {
      if ((null == K ? void 0 : K.type) === o.CollectiblesItemType.AVATAR_DECORATION) return (0, u.setPendingAvatarDecoration)(K), () => (0, u.setPendingAvatarDecoration)(void 0)
    }, [K]);
    let ea = e => (0, s.jsx)(_.default, {
        subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: z.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, z.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: c,
            returnRef: T,
            analyticsLocations: f
          })
        }
      }),
      {
        avatarDecorationSrc: ei,
        eventHandlers: eo
      } = (0, I.default)({
        user: l,
        avatarDecorationOverride: (null == K ? void 0 : K.type) === o.CollectiblesItemType.AVATAR_DECORATION ? K : null,
        size: et
      });
    return (0, s.jsxs)("div", {
      className: Q.collectibleInfoContainer,
      style: R,
      children: [(0, s.jsxs)("div", {
        className: Q.titleContainer,
        children: [(0, s.jsx)("div", {
          children: (0, s.jsx)("img", {
            className: t.categorySkuId === i.CollectiblesCategorySkuId.WINTER ? Q.winterTitleImage : Q.titleImage,
            src: (0, k.getCollectiblesAssetURL)(c.logo, {
              size: el
            }),
            alt: c.name
          })
        }), (0, s.jsx)(F.default, {
          category: c,
          display: "modal"
        })]
      }), (null == K ? void 0 : K.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)("div", {
        className: Q.avatarPreviewContainer,
        children: (0, s.jsx)(r.Avatar, {
          ...eo,
          "aria-label": J.default.Messages.USER_SETTINGS_AVATAR,
          size: ee,
          avatarDecoration: ei,
          src: $
        })
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: Q.description,
          children: [(0, s.jsx)(w.default, {
            item: K
          }), (0, s.jsx)(r.Heading, {
            color: "always-white",
            variant: "heading-xl/extrabold",
            className: Q.headingWithItemTypePill,
            children: t.name
          }), (0, s.jsx)(r.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: t.summary
          }), (() => {
            if (null != A) return (0, s.jsx)(r.Text, {
              color: "always-white",
              variant: "text-md/semibold",
              className: Q.priceTag,
              children: J.default.Messages.COLLECTIBLES_ALREADY_OWNED
            });
            if (b) return (0, s.jsx)(r.Text, {
              color: "always-white",
              variant: "text-md/semibold",
              className: Q.priceTag,
              children: J.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
            });
            if (L) return (0, s.jsx)(H.default, {
              product: t,
              className: Q.priceTag
            });
            if (null == j) return null;
            let e = (0, k.extractPriceByPurchaseTypes)(t, X.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
            return (0, s.jsxs)("div", {
              className: Q.priceTagContainer,
              children: [(0, s.jsx)(V.default, {
                price: j
              }), null != e && !B && (0, s.jsx)(V.default, {
                price: e,
                variant: "text-xs/medium",
                className: Q.premiumPriceTag,
                renderPrice: e => J.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                  price: e,
                  subscribeNowHook: e => (0, s.jsx)(es, {
                    text: e
                  })
                }),
                icon: (0, s.jsx)(r.Tooltip, {
                  text: J.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": J.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  children: e => {
                    let {
                      ...t
                    } = e;
                    return (0, s.jsx)(x.default, {
                      ...t,
                      className: Q.premiumPriceTagIcon,
                      color: "white"
                    })
                  }
                })
              })]
            })
          })()]
        }), (0, s.jsx)("div", {
          className: Q.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: Q.primaryButtons,
            children: [!b || L || B ? null != A ? (0, s.jsx)(r.Button, {
              className: Q.button,
              look: r.Button.Looks.FILLED,
              onClick: () => {
                if (m(), (0, d.popLayer)(), v(), (null == K ? void 0 : K.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, E.openAvatarDecorationModal)({
                    initialSelectedDecoration: K,
                    analyticsLocations: f
                  });
                  return
                }(null == K ? void 0 : K.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, h.openProfileEffectModal)({
                  initialSelectedEffectId: K.id,
                  analyticsLocations: f
                })
              },
              children: J.default.Messages.COLLECTIBLES_USE_NOW
            }) : b ? (0, s.jsx)(r.Button, {
              style: y,
              className: Q.button,
              look: r.Button.Looks.FILLED,
              submitting: O,
              submittingStartedLabel: J.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: J.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, P.claimPremiumCollectiblesProduct)(t.skuId), m(), (0, G.default)({
                  product: t,
                  analyticsLocations: f
                })
              },
              children: J.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(r.Button, {
              style: y,
              className: Q.button,
              look: r.Button.Looks.FILLED,
              onClick: () => (0, p.default)({
                skuId: t.skuId,
                analyticsLocations: f,
                onClose: e => e ? m() : (0, q.NOOP)()
              }),
              children: (null == K ? void 0 : K.type) === o.CollectiblesItemType.PROFILE_EFFECT ? J.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : J.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : ea(J.default.Messages.UNLOCK_WITH_NITRO), !b && !B && (0, s.jsx)(U.default, {
              product: t,
              onSuccess: m
            })]
          })
        }), (0, s.jsx)(r.Text, {
          color: "none",
          className: Q.disclaimer,
          variant: "text-xxs/normal",
          children: null != A ? null : b ? J.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == K ? void 0 : K.type) === o.CollectiblesItemType.PROFILE_EFFECT ? J.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : J.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ei = e => {
    let {
      product: t,
      user: l
    } = e, a = M.default.canUsePremiumProfileCustomization(l), i = (0, n.useStateFromStoresObject)([S.default], () => S.default.getAllPending()), r = (0, v.default)(l.id), d = !!(null == r ? void 0 : r.getPreviewBio(i.pendingBio).value), [u] = t.items;
    return (0, s.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? Q.previewsContainerInner : Q.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(O.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: q.NOOP,
        onBannerChange: q.NOOP,
        bodyClassName: Q.profileCustomizationBody,
        pendingAvatarDecoration: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? u : void 0,
        pendingProfileEffectId: (null == u ? void 0 : u.type) === o.CollectiblesItemType.PROFILE_EFFECT ? u.id : void 0,
        forProfileEffectModal: (null == u ? void 0 : u.type) === o.CollectiblesItemType.PROFILE_EFFECT,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION || d,
        hideBioSection: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideMemberStatusSection: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        useLargeBanner: !0
      }), (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(en, {
        user: l
      })]
    })
  },
  eo = e => {
    let {
      author: t
    } = e, l = (0, m.createMessageRecord)({
      ...(0, T.default)({
        author: t,
        channelId: "1337",
        content: J.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: X.MessageStates.SENT,
      id: "0"
    });
    return l
  },
  en = e => {
    let {
      user: t
    } = e, l = eo({
      author: t
    });
    return (0, s.jsx)(r.FocusBlock, {
      children: (0, s.jsxs)(r.Card, {
        className: Q.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(L.default, {
          className: Q.mockMessage,
          author: (0, f.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: Q.mockInput,
          children: [(0, s.jsx)(R.default, {
            className: Q.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(y.default, {
            className: Q.mockInputButton,
            width: 24,
            height: 24
          })]
        })]
      })
    })
  };
var er = e => {
  let {
    transitionState: t,
    onClose: l,
    product: i,
    category: d,
    returnRef: u,
    analyticsSource: E,
    analyticsLocations: I
  } = e, m = (0, n.default)([N.default], () => N.default.getCurrentUser()), {
    analyticsLocations: T,
    AnalyticsLocationProvider: f
  } = (0, C.default)([...I, c.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, B.useProductDetailsLinkableRoute)(i);
  let [L] = i.items;
  return (a.useEffect(() => {
    let e = (null == L ? void 0 : L.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    b.default.track(X.AnalyticEvents.OPEN_MODAL, {
      type: X.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: E,
      location_stack: T,
      sku_id: i.skuId,
      product_type: e
    }), i.items.map(P.productDetailsOpened)
  }, [E, T, i.skuId, i.items, null == L ? void 0 : L.type]), null == m) ? null : (0, s.jsx)(f, {
    children: (0, s.jsx)(r.ModalRoot, {
      hideShadow: !0,
      className: Q.modalRoot,
      returnRef: u,
      transitionState: t,
      size: r.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(r.ModalContent, {
        className: Q.modalContent,
        children: [(0, s.jsx)(ea, {
          user: m,
          product: i,
          category: d,
          onClose: l
        }), (0, s.jsxs)("div", {
          className: (null == L ? void 0 : L.type) === o.CollectiblesItemType.AVATAR_DECORATION ? Q.collectiblePreviewsContainerWithChat : Q.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(j.default, {
            assetUrlOverride: K.categoryBannerOverrides[d.skuId],
            asset: i.banner,
            size: (0, W.getAssetSizeByHeight)(540),
            className: Q.categoryBanner
          }), (0, s.jsx)(ei, {
            user: m,
            product: i
          })]
        }), (0, s.jsx)(r.ModalCloseButton, {
          onClick: l,
          className: Q.modalCloseButton,
          withCircleBackground: !0
        })]
      })
    })
  })
}