"use strict";
s.r(t), s("47120"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("278074"),
  o = s("979554"),
  d = s("399606"),
  u = s("780384"),
  c = s("481060"),
  m = s("37234"),
  C = s("809206"),
  E = s("727637"),
  I = s("410030"),
  f = s("100527"),
  L = s("906732"),
  h = s("1585"),
  T = s("786761"),
  p = s("3148"),
  v = s("739566"),
  P = s("753206"),
  S = s("333867"),
  _ = s("197115"),
  x = s("300284"),
  g = s("589266"),
  A = s("876917"),
  O = s("642619"),
  N = s("447452"),
  D = s("318661"),
  b = s("25990"),
  M = s("594174"),
  j = s("642113"),
  B = s("151785"),
  R = s("626135"),
  y = s("74538"),
  k = s("335131"),
  F = s("1870"),
  U = s("884697"),
  w = s("188584"),
  H = s("724994"),
  W = s("328456"),
  z = s("390698"),
  G = s("141011"),
  V = s("426171"),
  Y = s("224068"),
  K = s("813083"),
  X = s("823941"),
  Z = s("680942"),
  q = s("558060"),
  J = s("237031"),
  Q = s("372654"),
  $ = s("616066"),
  ee = s("832149"),
  et = s("215023"),
  es = s("981631"),
  el = s("474936"),
  ea = s("231338"),
  ei = s("689938"),
  en = s("975075");
let er = e => {
    let {
      item: t,
      user: s,
      isBundleItem: i = !1
    } = e, n = a.useRef(null), d = (0, E.default)(n);
    return (0, r.match)(t.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, l.jsx)("div", {
      className: i ? en.bundleAvatarPreviewContainer : en.avatarPreviewContainer,
      children: (0, l.jsx)($.AvatarDecorationPreview, {
        user: s,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
      className: i ? en.bundlePfxPreviewContainer : en.pfxPreviewContainer,
      ref: n,
      children: (0, l.jsx)(A.default, {
        profileEffectId: t.id,
        isHovering: d,
        removeSetHeight: !0
      })
    })).otherwise(() => null)
  },
  eo = e => {
    let {
      product: t,
      user: s
    } = e, [i, n] = a.useState(0);
    a.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && n(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, s.id]);
    let r = t.items.length;
    return (0, l.jsx)("div", {
      className: en.bundlePreviewContainer,
      children: (0, l.jsx)(c.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, l.jsx)(c.Slide, {
            id: i,
            children: (0, l.jsxs)("div", {
              className: en.bundlePreviewSlide,
              children: [(0, l.jsx)(er, {
                item: e,
                user: s,
                isBundleItem: !0
              }), (0, l.jsxs)(c.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: en.bundleSlideTitle,
                children: [null == n ? void 0 : n.name, " ", o]
              })]
            })
          }, i)
        })
      })
    })
  },
  ed = e => {
    let {
      product: t,
      user: s
    } = e;
    return (0, U.isBundleProduct)(t) ? (0, l.jsx)(eo, {
      product: t,
      user: s
    }) : t.items.length > 0 ? (0, l.jsx)(er, {
      item: t.items[0],
      user: s
    }) : null
  },
  eu = e => {
    var t, s;
    let {
      product: i,
      user: r,
      category: E,
      onClose: f,
      returnRef: T
    } = e, {
      analyticsLocations: p
    } = (0, L.default)(), v = y.default.canUseCollectibles(r), {
      isPurchased: P,
      isPartiallyPurchased: g
    } = (0, H.useProductPurchaseState)(i), A = (0, d.useStateFromStores)([F.default], () => F.default.isClaiming === i.skuId), N = (0, x.default)({
      analyticsLocations: p
    }), D = (0, I.default)(), b = (0, u.isThemeDark)(D), M = (0, U.isPremiumCollectiblesProduct)(i), j = (0, U.extractPriceByPurchaseTypes)(i, es.PriceSetAssignmentPurchaseTypes.DEFAULT), B = (null == j ? void 0 : j.amount) === 0, {
      firstAvatarDecoration: R,
      firstProfileEffect: G
    } = (0, W.useShopProductItems)(i), V = a.useMemo(() => (0, U.getProductDiscount)(i, v), [i, v]), X = a.useCallback(() => {
      if (f(), (0, m.popLayer)(), N(), null != R) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: R,
          analyticsLocations: p
        });
        return
      }
      null != G && (0, O.openProfileEffectModal)({
        initialSelectedEffectId: G.id,
        analyticsLocations: p
      })
    }, [p, R, G, f, N]);
    a.useEffect(() => {
      if (null != R) return (0, C.setPendingAvatarDecoration)(R), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [R]);
    let Q = e => (0, l.jsx)(_.default, {
        subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: J.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, J.openCollectiblesShopProductDetailsModal)({
            product: i,
            category: E,
            returnRef: T,
            analyticsLocations: p
          })
        }
      }),
      {
        firstAvatarDecoration: $,
        firstProfileEffect: et
      } = (0, w.useBundledProducts)(i),
      er = i.type === o.CollectiblesItemType.BUNDLE ? ei.default.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == $ ? void 0 : $.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (s = null == et ? void 0 : et.name) && void 0 !== s ? s : ""
      }) : i.summary;
    return (0, l.jsxs)("div", {
      className: en.collectibleInfoContainer,
      children: [(0, l.jsx)("div", {
        className: en.titleContainer,
        children: (0, l.jsx)(K.default, {
          category: E,
          display: "modal"
        })
      }), (0, l.jsx)(ed, {
        product: i,
        user: r
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsxs)("div", {
          className: en.description,
          children: [(0, l.jsx)(Y.default, {
            product: i,
            isDarkText: !b
          }), (0, l.jsx)(c.Heading, {
            variant: "heading-xl/extrabold",
            className: en.headingWithItemTypePill,
            children: i.name
          }), (0, l.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: er
          }), P || g ? (0, l.jsx)(z.AlreadyOwned, {
            className: en.priceTag,
            isPartiallyPurchased: g
          }) : M ? (0, l.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: en.priceTag,
            children: ei.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, l.jsx)(q.default, {
            product: i,
            discount: V,
            isPremiumUser: v,
            className: v ? en.priceTag : en.priceTagContainer,
            nitroUpsell: !v
          })]
        }), (0, l.jsx)("div", {
          className: en.buttonsContainer,
          children: (0, l.jsxs)("div", {
            className: en.primaryButtons,
            children: [!M || v || B ? P ? (0, l.jsx)(c.Button, {
              className: en.button,
              look: c.Button.Looks.FILLED,
              onClick: X,
              children: ei.default.Messages.COLLECTIBLES_USE_NOW
            }) : g ? null : M ? (0, l.jsx)(c.Button, {
              className: en.button,
              look: c.Button.Looks.FILLED,
              submitting: A,
              submittingStartedLabel: ei.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: ei.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, k.claimPremiumCollectiblesProduct)(i.skuId), f(), (0, ee.default)({
                  product: i,
                  analyticsLocations: p
                })
              },
              children: ei.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, l.jsx)(c.Button, {
              className: en.button,
              look: c.Button.Looks.FILLED,
              onClick: () => (0, S.default)({
                skuId: i.skuId,
                analyticsLocations: p,
                onClose: e => e ? f() : (0, ea.NOOP)()
              }),
              children: (0, U.isBundleProduct)(i) ? ei.default.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? ei.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : ei.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : Q(ei.default.Messages.UNLOCK_WITH_NITRO), !M && !B && (0, l.jsx)(Z.default, {
              product: i,
              onSuccess: f,
              disableCustomColor: !0
            })]
          })
        }), (0, l.jsx)(c.Text, {
          className: n()(en.disclaimer, !b && en.disclaimerLight),
          variant: "text-xxs/normal",
          children: P ? null : M ? ei.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, U.isBundleProduct)(i) ? ei.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? ei.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : ei.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ec = e => {
    let {
      product: t,
      user: s
    } = e, a = y.default.canUsePremiumProfileCustomization(s), i = (0, d.useStateFromStoresObject)([b.default], () => b.default.getAllPending()), n = (0, D.useDisplayProfileWithFetchEffect)(s.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, u = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [c] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: C
    } = (0, W.useShopProductItems)(t), {
      updatedOnAllSurfaces: E
    } = (0, N.useSimplifiedProfileExperiment)({
      location: "CollectibleProductProfilePreview"
    });
    return (0, l.jsxs)("div", {
      className: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? en.previewsContainerInner : en.profileEffectPreviewsContainerInner,
      children: [(0, l.jsx)(g.default, {
        ...i,
        location: "CollectiblesShopProductDetailsModal",
        user: s,
        canUsePremiumCustomization: a,
        onAvatarChange: ea.NOOP,
        onBannerChange: ea.NOOP,
        bodyClassName: en.profileCustomizationBody,
        pendingAvatarDecoration: m,
        pendingProfileEffectId: null == C ? void 0 : C.id,
        forProfileEffectModal: null != C,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideCustomStatus: !0,
        hideFakeActivity: r || u,
        hideBioSection: r && !E,
        hideMemberStatusSection: r,
        hideRecentGames: !0,
        useLargeBanner: !0
      }), r && (0, l.jsx)(eC, {
        user: s
      })]
    })
  },
  em = e => {
    let {
      author: t
    } = e;
    return (0, T.createMessageRecord)({
      ...(0, p.default)({
        author: t,
        channelId: "1337",
        content: ei.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: es.MessageStates.SENT,
      id: "0"
    })
  },
  eC = e => {
    let {
      user: t
    } = e, s = em({
      author: t
    });
    return (0, l.jsx)(c.FocusBlock, {
      children: (0, l.jsxs)(c.Card, {
        className: en.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, l.jsx)(P.default, {
          className: en.mockMessage,
          author: (0, v.getMessageAuthor)(s),
          message: s
        }, s.id), (0, l.jsxs)("div", {
          className: en.mockInput,
          children: [(0, l.jsx)(B.default, {
            className: en.mockInputButton,
            width: 24,
            height: 24
          }), (0, l.jsx)(j.default, {
            className: en.mockInputButton,
            width: 24,
            height: 24
          })]
        })]
      })
    })
  };
t.default = e => {
  var t, s;
  let {
    transitionState: i,
    onClose: n,
    product: r,
    category: u,
    returnRef: m,
    analyticsSource: C,
    analyticsLocations: E
  } = e, I = (0, d.useStateFromStores)([M.default], () => M.default.getCurrentUser()), {
    analyticsLocations: h
  } = (0, L.default)([...E, f.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, V.useProductDetailsLinkableRoute)(r);
  let [T] = r.items;
  return (a.useEffect(() => {
    let e = (null == T ? void 0 : T.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    R.default.track(es.AnalyticEvents.OPEN_MODAL, {
      type: es.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: h,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(k.productDetailsOpened)
  }, [C, h, r.skuId, r.items, null == T ? void 0 : T.type]), null == I) ? null : (0, l.jsx)(L.AnalyticsLocationProvider, {
    value: h,
    children: (0, l.jsx)(c.ModalRoot, {
      hideShadow: !0,
      className: en.modalRoot,
      returnRef: m,
      transitionState: i,
      size: c.ModalSize.DYNAMIC,
      children: (0, l.jsxs)(c.ModalContent, {
        className: en.modalContent,
        children: [(0, l.jsx)(eu, {
          user: I,
          product: r,
          category: u,
          onClose: n
        }), (0, l.jsxs)("div", {
          className: r.type === o.CollectiblesItemType.AVATAR_DECORATION ? en.collectiblePreviewsContainerWithChat : en.collectiblePreviewsContainerNoChat,
          children: [(0, l.jsx)(G.default, {
            asset: null !== (s = u.pdpBg) && void 0 !== s ? s : r.banner,
            addGradient: null === (t = et.categoryBannerOverrides[u.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, Q.getAssetSizeByHeight)(540),
            className: en.categoryBanner,
            blur: !0
          }), (0, l.jsx)(ec, {
            user: I,
            product: r
          }), (0, l.jsxs)("div", {
            className: en.profilePreviewHeader,
            children: [(0, l.jsx)("div", {
              className: en.titleImageContainer,
              children: (0, l.jsx)("img", {
                className: en.titleImage,
                src: (0, U.getCollectiblesAssetURL)(u.logo, {
                  size: X.LOGO_SIZE
                }),
                alt: u.name
              })
            }), (0, l.jsx)(c.ModalCloseButton, {
              onClick: n,
              className: en.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}