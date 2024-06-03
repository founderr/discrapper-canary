"use strict";
l.r(t), l("47120"), l("627341");
var s = l("735250"),
  a = l("470079"),
  i = l("120356"),
  n = l.n(i),
  r = l("278074"),
  o = l("979554"),
  d = l("399606"),
  u = l("780384"),
  c = l("481060"),
  m = l("37234"),
  C = l("809206"),
  f = l("727637"),
  h = l("410030"),
  I = l("100527"),
  E = l("906732"),
  p = l("1585"),
  L = l("786761"),
  g = l("3148"),
  v = l("739566"),
  x = l("753206"),
  T = l("333867"),
  S = l("197115"),
  P = l("300284"),
  A = l("962746"),
  N = l("876917"),
  _ = l("642619"),
  O = l("318661"),
  b = l("25990"),
  j = l("594174"),
  R = l("642113"),
  M = l("151785"),
  D = l("626135"),
  B = l("74538"),
  y = l("335131"),
  F = l("1870"),
  U = l("884697"),
  k = l("188584"),
  w = l("724994"),
  H = l("328456"),
  z = l("390698"),
  V = l("141011"),
  W = l("426171"),
  G = l("224068"),
  Y = l("813083"),
  Z = l("823941"),
  K = l("680942"),
  X = l("558060"),
  q = l("237031"),
  J = l("372654"),
  Q = l("616066"),
  $ = l("832149"),
  ee = l("215023"),
  et = l("981631"),
  el = l("474936"),
  es = l("231338"),
  ea = l("689938"),
  ei = l("975075");
let en = e => {
    let {
      item: t,
      user: l,
      isBundleItem: i = !1
    } = e, n = a.useRef(null), d = (0, f.default)(n);
    return (0, r.match)(t.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, s.jsx)("div", {
      className: i ? ei.bundleAvatarPreviewContainer : ei.avatarPreviewContainer,
      children: (0, s.jsx)(Q.AvatarDecorationPreview, {
        user: l,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsx)("div", {
      className: i ? ei.bundlePfxPreviewContainer : ei.pfxPreviewContainer,
      ref: n,
      children: (0, s.jsx)(N.default, {
        profileEffectId: t.id,
        isHovering: d,
        removeSetHeight: !0
      })
    })).otherwise(() => null)
  },
  er = e => {
    let {
      product: t,
      user: l
    } = e, [i, n] = a.useState(0);
    a.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && n(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, l.id]);
    let r = t.items.length;
    return (0, s.jsx)("div", {
      className: ei.bundlePreviewContainer,
      children: (0, s.jsx)(c.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, s.jsx)(c.Slide, {
            id: i,
            children: (0, s.jsxs)("div", {
              className: ei.bundlePreviewSlide,
              children: [(0, s.jsx)(en, {
                item: e,
                user: l,
                isBundleItem: !0
              }), (0, s.jsxs)(c.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ei.bundleSlideTitle,
                children: [null == n ? void 0 : n.name, " ", o]
              })]
            })
          }, i)
        })
      })
    })
  },
  eo = e => {
    let {
      product: t,
      user: l
    } = e;
    return (0, U.isBundleProduct)(t) ? (0, s.jsx)(er, {
      product: t,
      user: l
    }) : t.items.length > 0 ? (0, s.jsx)(en, {
      item: t.items[0],
      user: l
    }) : null
  },
  ed = e => {
    var t, l;
    let {
      product: i,
      user: r,
      category: f,
      onClose: I,
      returnRef: L
    } = e, {
      analyticsLocations: g
    } = (0, E.default)(), v = B.default.canUseCollectibles(r), {
      isPurchased: x,
      isPartiallyPurchased: A
    } = (0, w.useProductPurchaseState)(i), N = (0, d.useStateFromStores)([F.default], () => F.default.isClaiming === i.skuId), O = (0, P.default)({
      analyticsLocations: g
    }), b = (0, h.default)(), j = (0, u.isThemeDark)(b), R = (0, U.isPremiumCollectiblesProduct)(i), M = (0, U.extractPriceByPurchaseTypes)(i, et.PriceSetAssignmentPurchaseTypes.DEFAULT), D = (null == M ? void 0 : M.amount) === 0, {
      firstAvatarDecoration: V,
      firstProfileEffect: W
    } = (0, H.useShopProductItems)(i), Z = (0, U.getFormattedPriceForCollectiblesProduct)(i, v, !1), J = a.useMemo(() => (0, U.getProductDiscount)(i, v), [i, v]), Q = a.useCallback(() => {
      if (I(), (0, m.popLayer)(), O(), null != V) {
        (0, p.openAvatarDecorationModal)({
          initialSelectedDecoration: V,
          analyticsLocations: g
        });
        return
      }
      null != W && (0, _.openProfileEffectModal)({
        initialSelectedEffectId: W.id,
        analyticsLocations: g
      })
    }, [g, V, W, I, O]);
    a.useEffect(() => {
      if (null != V) return (0, C.setPendingAvatarDecoration)(V), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [V]);
    let ee = e => (0, s.jsx)(S.default, {
        subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: q.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, q.openCollectiblesShopProductDetailsModal)({
            product: i,
            category: f,
            returnRef: L,
            analyticsLocations: g
          })
        }
      }),
      {
        firstAvatarDecoration: en,
        firstProfileEffect: er
      } = (0, k.useBundledProducts)(i),
      ed = i.type === o.CollectiblesItemType.BUNDLE ? ea.default.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (l = null == er ? void 0 : er.name) && void 0 !== l ? l : ""
      }) : i.summary;
    return (0, s.jsxs)("div", {
      className: ei.collectibleInfoContainer,
      children: [(0, s.jsx)("div", {
        className: ei.titleContainer,
        children: (0, s.jsx)(Y.default, {
          category: f,
          display: "modal"
        })
      }), (0, s.jsx)(eo, {
        product: i,
        user: r
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: ei.description,
          children: [(0, s.jsx)(G.default, {
            product: i,
            isDarkText: !j
          }), (0, s.jsx)(c.Heading, {
            variant: "heading-xl/extrabold",
            className: ei.headingWithItemTypePill,
            children: i.name
          }), (0, s.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: ed
          }), x || A ? (0, s.jsx)(z.AlreadyOwned, {
            className: ei.priceTag,
            isPartiallyPurchased: A
          }) : R ? (0, s.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: ei.priceTag,
            children: ea.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, s.jsx)(X.default, {
            product: i,
            discount: J,
            isPremiumUser: v,
            className: v ? ei.priceTag : ei.priceTagContainer,
            nitroUpsell: !v
          })]
        }), (0, s.jsx)("div", {
          className: ei.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: ei.primaryButtons,
            children: [!R || v || D ? x ? (0, s.jsx)(c.Button, {
              className: ei.button,
              look: c.Button.Looks.FILLED,
              onClick: Q,
              children: ea.default.Messages.COLLECTIBLES_USE_NOW
            }) : A ? null : R ? (0, s.jsx)(c.Button, {
              className: ei.button,
              look: c.Button.Looks.FILLED,
              submitting: N,
              submittingStartedLabel: ea.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: ea.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, y.claimPremiumCollectiblesProduct)(i.skuId), I(), (0, $.default)({
                  product: i,
                  analyticsLocations: g
                })
              },
              children: ea.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(c.Button, {
              className: ei.button,
              look: c.Button.Looks.FILLED,
              onClick: () => (0, T.default)({
                skuId: i.skuId,
                analyticsLocations: g,
                onClose: e => e ? I() : (0, es.NOOP)()
              }),
              children: (0, U.isBundleProduct)(i) ? ea.default.Messages.COLLECTIBLES_PURCHASE.format({
                price: Z
              }) : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? ea.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : ea.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : ee(ea.default.Messages.UNLOCK_WITH_NITRO), !R && !D && (0, s.jsx)(K.default, {
              product: i,
              onSuccess: I,
              disableCustomColor: !0
            })]
          })
        }), (0, s.jsx)(c.Text, {
          className: n()(ei.disclaimer, !j && ei.disclaimerLight),
          variant: "text-xxs/normal",
          children: x ? null : R ? ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, U.isBundleProduct)(i) ? ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eu = e => {
    let {
      product: t,
      user: l
    } = e, a = B.default.canUsePremiumProfileCustomization(l), i = (0, d.useStateFromStoresObject)([b.default], () => b.default.getAllPending()), n = (0, O.useDisplayProfileWithFetchEffect)(l.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, u = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [c] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: C
    } = (0, H.useShopProductItems)(t);
    return (0, s.jsxs)("div", {
      className: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ei.previewsContainerInner : ei.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(A.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: es.NOOP,
        onBannerChange: es.NOOP,
        bodyClassName: ei.profileCustomizationBody,
        pendingAvatarDecoration: m,
        pendingProfileEffectId: null == C ? void 0 : C.id,
        forProfileEffectModal: null != C,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: r || u,
        hideBioSection: r,
        hideMemberStatusSection: r,
        hideRecentGames: !0,
        useLargeBanner: !0
      }), r && (0, s.jsx)(em, {
        user: l
      })]
    })
  },
  ec = e => {
    let {
      author: t
    } = e;
    return (0, L.createMessageRecord)({
      ...(0, g.default)({
        author: t,
        channelId: "1337",
        content: ea.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: et.MessageStates.SENT,
      id: "0"
    })
  },
  em = e => {
    let {
      user: t
    } = e, l = ec({
      author: t
    });
    return (0, s.jsx)(c.FocusBlock, {
      children: (0, s.jsxs)(c.Card, {
        className: ei.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(x.default, {
          className: ei.mockMessage,
          author: (0, v.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: ei.mockInput,
          children: [(0, s.jsx)(M.default, {
            className: ei.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(R.default, {
            className: ei.mockInputButton,
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
    category: u,
    returnRef: m,
    analyticsSource: C,
    analyticsLocations: f
  } = e, h = (0, d.useStateFromStores)([j.default], () => j.default.getCurrentUser()), {
    analyticsLocations: p
  } = (0, E.default)([...f, I.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, W.useProductDetailsLinkableRoute)(r);
  let [L] = r.items;
  return (a.useEffect(() => {
    let e = (null == L ? void 0 : L.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    D.default.track(et.AnalyticEvents.OPEN_MODAL, {
      type: et.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: p,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(y.productDetailsOpened)
  }, [C, p, r.skuId, r.items, null == L ? void 0 : L.type]), null == h) ? null : (0, s.jsx)(E.AnalyticsLocationProvider, {
    value: p,
    children: (0, s.jsx)(c.ModalRoot, {
      hideShadow: !0,
      className: ei.modalRoot,
      returnRef: m,
      transitionState: i,
      size: c.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(c.ModalContent, {
        className: ei.modalContent,
        children: [(0, s.jsx)(ed, {
          user: h,
          product: r,
          category: u,
          onClose: n
        }), (0, s.jsxs)("div", {
          className: r.type === o.CollectiblesItemType.AVATAR_DECORATION ? ei.collectiblePreviewsContainerWithChat : ei.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(V.default, {
            asset: null !== (l = u.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = ee.categoryBannerOverrides[u.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, J.getAssetSizeByHeight)(540),
            className: ei.categoryBanner,
            blur: !0
          }), (0, s.jsx)(eu, {
            user: h,
            product: r
          }), (0, s.jsxs)("div", {
            className: ei.profilePreviewHeader,
            children: [(0, s.jsx)("div", {
              className: ei.titleImageContainer,
              children: (0, s.jsx)("img", {
                className: ei.titleImage,
                src: (0, U.getCollectiblesAssetURL)(u.logo, {
                  size: Z.LOGO_SIZE
                }),
                alt: u.name
              })
            }), (0, s.jsx)(c.ModalCloseButton, {
              onClick: n,
              className: ei.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}