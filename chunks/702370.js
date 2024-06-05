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
  S = s("753206"),
  _ = s("333867"),
  P = s("197115"),
  x = s("300284"),
  g = s("589266"),
  A = s("876917"),
  O = s("642619"),
  N = s("318661"),
  D = s("25990"),
  M = s("594174"),
  b = s("642113"),
  j = s("151785"),
  B = s("626135"),
  R = s("74538"),
  y = s("335131"),
  k = s("1870"),
  F = s("884697"),
  U = s("188584"),
  w = s("724994"),
  H = s("328456"),
  W = s("390698"),
  z = s("141011"),
  G = s("426171"),
  V = s("224068"),
  Y = s("813083"),
  K = s("823941"),
  X = s("680942"),
  Z = s("558060"),
  q = s("237031"),
  J = s("372654"),
  Q = s("616066"),
  $ = s("832149"),
  ee = s("215023"),
  et = s("981631"),
  es = s("474936"),
  el = s("231338"),
  ea = s("689938"),
  ei = s("975075");
let en = e => {
    let {
      item: t,
      user: s,
      isBundleItem: i = !1
    } = e, n = a.useRef(null), d = (0, E.default)(n);
    return (0, r.match)(t.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, l.jsx)("div", {
      className: i ? ei.bundleAvatarPreviewContainer : ei.avatarPreviewContainer,
      children: (0, l.jsx)(Q.AvatarDecorationPreview, {
        user: s,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
      className: i ? ei.bundlePfxPreviewContainer : ei.pfxPreviewContainer,
      ref: n,
      children: (0, l.jsx)(A.default, {
        profileEffectId: t.id,
        isHovering: d,
        removeSetHeight: !0
      })
    })).otherwise(() => null)
  },
  er = e => {
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
      className: ei.bundlePreviewContainer,
      children: (0, l.jsx)(c.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, l.jsx)(c.Slide, {
            id: i,
            children: (0, l.jsxs)("div", {
              className: ei.bundlePreviewSlide,
              children: [(0, l.jsx)(en, {
                item: e,
                user: s,
                isBundleItem: !0
              }), (0, l.jsxs)(c.Text, {
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
      user: s
    } = e;
    return (0, F.isBundleProduct)(t) ? (0, l.jsx)(er, {
      product: t,
      user: s
    }) : t.items.length > 0 ? (0, l.jsx)(en, {
      item: t.items[0],
      user: s
    }) : null
  },
  ed = e => {
    var t, s;
    let {
      product: i,
      user: r,
      category: E,
      onClose: f,
      returnRef: T
    } = e, {
      analyticsLocations: p
    } = (0, L.default)(), v = R.default.canUseCollectibles(r), {
      isPurchased: S,
      isPartiallyPurchased: g
    } = (0, w.useProductPurchaseState)(i), A = (0, d.useStateFromStores)([k.default], () => k.default.isClaiming === i.skuId), N = (0, x.default)({
      analyticsLocations: p
    }), D = (0, I.default)(), M = (0, u.isThemeDark)(D), b = (0, F.isPremiumCollectiblesProduct)(i), j = (0, F.extractPriceByPurchaseTypes)(i, et.PriceSetAssignmentPurchaseTypes.DEFAULT), B = (null == j ? void 0 : j.amount) === 0, {
      firstAvatarDecoration: z,
      firstProfileEffect: G
    } = (0, H.useShopProductItems)(i), K = a.useMemo(() => (0, F.getProductDiscount)(i, v), [i, v]), J = a.useCallback(() => {
      if (f(), (0, m.popLayer)(), N(), null != z) {
        (0, h.openAvatarDecorationModal)({
          initialSelectedDecoration: z,
          analyticsLocations: p
        });
        return
      }
      null != G && (0, O.openProfileEffectModal)({
        initialSelectedEffectId: G.id,
        analyticsLocations: p
      })
    }, [p, z, G, f, N]);
    a.useEffect(() => {
      if (null != z) return (0, C.setPendingAvatarDecoration)(z), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [z]);
    let Q = e => (0, l.jsx)(P.default, {
        subscriptionTier: es.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: q.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, q.openCollectiblesShopProductDetailsModal)({
            product: i,
            category: E,
            returnRef: T,
            analyticsLocations: p
          })
        }
      }),
      {
        firstAvatarDecoration: ee,
        firstProfileEffect: en
      } = (0, U.useBundledProducts)(i),
      er = i.type === o.CollectiblesItemType.BUNDLE ? ea.default.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == ee ? void 0 : ee.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (s = null == en ? void 0 : en.name) && void 0 !== s ? s : ""
      }) : i.summary;
    return (0, l.jsxs)("div", {
      className: ei.collectibleInfoContainer,
      children: [(0, l.jsx)("div", {
        className: ei.titleContainer,
        children: (0, l.jsx)(Y.default, {
          category: E,
          display: "modal"
        })
      }), (0, l.jsx)(eo, {
        product: i,
        user: r
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsxs)("div", {
          className: ei.description,
          children: [(0, l.jsx)(V.default, {
            product: i,
            isDarkText: !M
          }), (0, l.jsx)(c.Heading, {
            variant: "heading-xl/extrabold",
            className: ei.headingWithItemTypePill,
            children: i.name
          }), (0, l.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: er
          }), S || g ? (0, l.jsx)(W.AlreadyOwned, {
            className: ei.priceTag,
            isPartiallyPurchased: g
          }) : b ? (0, l.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: ei.priceTag,
            children: ea.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, l.jsx)(Z.default, {
            product: i,
            discount: K,
            isPremiumUser: v,
            className: v ? ei.priceTag : ei.priceTagContainer,
            nitroUpsell: !v
          })]
        }), (0, l.jsx)("div", {
          className: ei.buttonsContainer,
          children: (0, l.jsxs)("div", {
            className: ei.primaryButtons,
            children: [!b || v || B ? S ? (0, l.jsx)(c.Button, {
              className: ei.button,
              look: c.Button.Looks.FILLED,
              onClick: J,
              children: ea.default.Messages.COLLECTIBLES_USE_NOW
            }) : g ? null : b ? (0, l.jsx)(c.Button, {
              className: ei.button,
              look: c.Button.Looks.FILLED,
              submitting: A,
              submittingStartedLabel: ea.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: ea.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, y.claimPremiumCollectiblesProduct)(i.skuId), f(), (0, $.default)({
                  product: i,
                  analyticsLocations: p
                })
              },
              children: ea.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, l.jsx)(c.Button, {
              className: ei.button,
              look: c.Button.Looks.FILLED,
              onClick: () => (0, _.default)({
                skuId: i.skuId,
                analyticsLocations: p,
                onClose: e => e ? f() : (0, el.NOOP)()
              }),
              children: (0, F.isBundleProduct)(i) ? ea.default.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? ea.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : ea.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : Q(ea.default.Messages.UNLOCK_WITH_NITRO), !b && !B && (0, l.jsx)(X.default, {
              product: i,
              onSuccess: f,
              disableCustomColor: !0
            })]
          })
        }), (0, l.jsx)(c.Text, {
          className: n()(ei.disclaimer, !M && ei.disclaimerLight),
          variant: "text-xxs/normal",
          children: S ? null : b ? ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, F.isBundleProduct)(i) ? ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : ea.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eu = e => {
    let {
      product: t,
      user: s
    } = e, a = R.default.canUsePremiumProfileCustomization(s), i = (0, d.useStateFromStoresObject)([D.default], () => D.default.getAllPending()), n = (0, N.useDisplayProfileWithFetchEffect)(s.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, u = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [c] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: C
    } = (0, H.useShopProductItems)(t);
    return (0, l.jsxs)("div", {
      className: (null == c ? void 0 : c.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ei.previewsContainerInner : ei.profileEffectPreviewsContainerInner,
      children: [(0, l.jsx)(g.default, {
        ...i,
        location: "CollectiblesShopProductDetailsModal",
        user: s,
        canUsePremiumCustomization: a,
        onAvatarChange: el.NOOP,
        onBannerChange: el.NOOP,
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
      }), r && (0, l.jsx)(em, {
        user: s
      })]
    })
  },
  ec = e => {
    let {
      author: t
    } = e;
    return (0, T.createMessageRecord)({
      ...(0, p.default)({
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
    } = e, s = ec({
      author: t
    });
    return (0, l.jsx)(c.FocusBlock, {
      children: (0, l.jsxs)(c.Card, {
        className: ei.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, l.jsx)(S.default, {
          className: ei.mockMessage,
          author: (0, v.getMessageAuthor)(s),
          message: s
        }, s.id), (0, l.jsxs)("div", {
          className: ei.mockInput,
          children: [(0, l.jsx)(j.default, {
            className: ei.mockInputButton,
            width: 24,
            height: 24
          }), (0, l.jsx)(b.default, {
            className: ei.mockInputButton,
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
  (0, G.useProductDetailsLinkableRoute)(r);
  let [T] = r.items;
  return (a.useEffect(() => {
    let e = (null == T ? void 0 : T.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    B.default.track(et.AnalyticEvents.OPEN_MODAL, {
      type: et.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: h,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(y.productDetailsOpened)
  }, [C, h, r.skuId, r.items, null == T ? void 0 : T.type]), null == I) ? null : (0, l.jsx)(L.AnalyticsLocationProvider, {
    value: h,
    children: (0, l.jsx)(c.ModalRoot, {
      hideShadow: !0,
      className: ei.modalRoot,
      returnRef: m,
      transitionState: i,
      size: c.ModalSize.DYNAMIC,
      children: (0, l.jsxs)(c.ModalContent, {
        className: ei.modalContent,
        children: [(0, l.jsx)(ed, {
          user: I,
          product: r,
          category: u,
          onClose: n
        }), (0, l.jsxs)("div", {
          className: r.type === o.CollectiblesItemType.AVATAR_DECORATION ? ei.collectiblePreviewsContainerWithChat : ei.collectiblePreviewsContainerNoChat,
          children: [(0, l.jsx)(z.default, {
            asset: null !== (s = u.pdpBg) && void 0 !== s ? s : r.banner,
            addGradient: null === (t = ee.categoryBannerOverrides[u.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, J.getAssetSizeByHeight)(540),
            className: ei.categoryBanner,
            blur: !0
          }), (0, l.jsx)(eu, {
            user: I,
            product: r
          }), (0, l.jsxs)("div", {
            className: ei.profilePreviewHeader,
            children: [(0, l.jsx)("div", {
              className: ei.titleImageContainer,
              children: (0, l.jsx)("img", {
                className: ei.titleImage,
                src: (0, F.getCollectiblesAssetURL)(u.logo, {
                  size: K.LOGO_SIZE
                }),
                alt: u.name
              })
            }), (0, l.jsx)(c.ModalCloseButton, {
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