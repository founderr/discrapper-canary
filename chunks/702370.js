"use strict";
s.r(t), s("47120"), s("627341");
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("278074"),
  o = s("979554"),
  d = s("399606"),
  c = s("780384"),
  u = s("481060"),
  m = s("37234"),
  C = s("809206"),
  f = s("410030"),
  h = s("100527"),
  I = s("906732"),
  E = s("1585"),
  p = s("786761"),
  x = s("3148"),
  g = s("739566"),
  L = s("753206"),
  v = s("333867"),
  T = s("197115"),
  P = s("300284"),
  S = s("962746"),
  N = s("731896"),
  A = s("642619"),
  _ = s("318661"),
  j = s("25990"),
  b = s("594174"),
  O = s("642113"),
  R = s("151785"),
  M = s("626135"),
  D = s("74538"),
  B = s("335131"),
  y = s("1870"),
  F = s("884697"),
  U = s("188584"),
  k = s("724994"),
  w = s("328456"),
  H = s("390698"),
  z = s("141011"),
  V = s("426171"),
  W = s("224068"),
  G = s("813083"),
  Y = s("823941"),
  Z = s("680942"),
  K = s("558060"),
  X = s("237031"),
  q = s("372654"),
  J = s("616066"),
  Q = s("832149"),
  $ = s("215023"),
  ee = s("981631"),
  et = s("474936"),
  es = s("231338"),
  el = s("689938"),
  ea = s("975075"),
  ei = s("689262");
let en = e => {
    var t;
    let {
      item: s
    } = e, a = (0, N.useProfileEffectPreset)(s.id), {
      thumbnailPreviewSrc: i,
      accessibilityLabel: n
    } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("img", {
        src: ei,
        alt: "",
        className: ea.sampleProfileAsset
      }), null != i && (0, l.jsx)("img", {
        src: i,
        alt: n,
        className: ea.staticPfxPreview
      })]
    })
  },
  er = e => {
    let {
      item: t,
      user: s,
      isBundleItem: a = !1
    } = e;
    return (0, r.match)(t.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, l.jsx)("div", {
      className: a ? ea.bundleAvatarPreviewContainer : ea.avatarPreviewContainer,
      children: (0, l.jsx)(J.AvatarDecorationPreview, {
        user: s,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsx)("div", {
      className: a ? ea.bundlePfxPreviewContainer : ea.pfxPreviewContainer,
      children: (0, l.jsx)(en, {
        item: t
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
      className: ea.bundlePreviewContainer,
      children: (0, l.jsx)(u.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, l.jsx)(u.Slide, {
            id: i,
            children: (0, l.jsxs)("div", {
              className: ea.bundlePreviewSlide,
              children: [(0, l.jsx)(er, {
                item: e,
                user: s,
                isBundleItem: !0
              }), (0, l.jsxs)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: ea.bundleSlideTitle,
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
    return (0, F.isBundleProduct)(t) ? (0, l.jsx)(eo, {
      product: t,
      user: s
    }) : t.items.length > 0 ? (0, l.jsx)(er, {
      item: t.items[0],
      user: s
    }) : null
  },
  ec = e => {
    var t, s;
    let {
      product: i,
      user: r,
      category: h,
      onClose: p,
      returnRef: x
    } = e, {
      analyticsLocations: g
    } = (0, I.default)(), L = D.default.canUseCollectibles(r), {
      isPurchased: S,
      isPartiallyPurchased: N
    } = (0, k.useProductPurchaseState)(i), _ = (0, d.useStateFromStores)([y.default], () => y.default.isClaiming === i.skuId), j = (0, P.default)({
      analyticsLocations: g
    }), b = (0, f.default)(), O = (0, c.isThemeDark)(b), R = (0, F.isPremiumCollectiblesProduct)(i), M = (0, F.extractPriceByPurchaseTypes)(i, ee.PriceSetAssignmentPurchaseTypes.DEFAULT), z = (null == M ? void 0 : M.amount) === 0, {
      firstAvatarDecoration: V,
      firstProfileEffect: Y
    } = (0, w.useShopProductItems)(i), q = (0, F.getFormattedPriceForCollectiblesProduct)(i, L, !1), J = a.useMemo(() => (0, F.getProductDiscount)(i, L), [i, L]), $ = a.useCallback(() => {
      if (p(), (0, m.popLayer)(), j(), null != V) {
        (0, E.openAvatarDecorationModal)({
          initialSelectedDecoration: V,
          analyticsLocations: g
        });
        return
      }
      null != Y && (0, A.openProfileEffectModal)({
        initialSelectedEffectId: Y.id,
        analyticsLocations: g
      })
    }, [g, V, Y, p, j]);
    a.useEffect(() => {
      if (null != V) return (0, C.setPendingAvatarDecoration)(V), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [V]);
    let ei = e => (0, l.jsx)(T.default, {
        subscriptionTier: et.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: X.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, X.openCollectiblesShopProductDetailsModal)({
            product: i,
            category: h,
            returnRef: x,
            analyticsLocations: g
          })
        }
      }),
      {
        firstAvatarDecoration: en,
        firstProfileEffect: er
      } = (0, U.useBundledProducts)(i),
      eo = i.type === o.CollectiblesItemType.BUNDLE ? el.default.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (s = null == er ? void 0 : er.name) && void 0 !== s ? s : ""
      }) : i.summary;
    return (0, l.jsxs)("div", {
      className: ea.collectibleInfoContainer,
      children: [(0, l.jsx)("div", {
        className: ea.titleContainer,
        children: (0, l.jsx)(G.default, {
          category: h,
          display: "modal"
        })
      }), (0, l.jsx)(ed, {
        product: i,
        user: r
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsxs)("div", {
          className: ea.description,
          children: [(0, l.jsx)(W.default, {
            product: i,
            isDarkText: !O
          }), (0, l.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: ea.headingWithItemTypePill,
            children: i.name
          }), (0, l.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: eo
          }), S || N ? (0, l.jsx)(H.AlreadyOwned, {
            className: ea.priceTag,
            isPartiallyPurchased: N
          }) : R ? (0, l.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: ea.priceTag,
            children: el.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, l.jsx)(K.default, {
            product: i,
            discount: J,
            isPremiumUser: L,
            className: L ? ea.priceTag : ea.priceTagContainer,
            nitroUpsell: !L
          })]
        }), (0, l.jsx)("div", {
          className: ea.buttonsContainer,
          children: (0, l.jsxs)("div", {
            className: ea.primaryButtons,
            children: [!R || L || z ? S ? (0, l.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: $,
              children: el.default.Messages.COLLECTIBLES_USE_NOW
            }) : N ? null : R ? (0, l.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              submitting: _,
              submittingStartedLabel: el.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: el.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, B.claimPremiumCollectiblesProduct)(i.skuId), p(), (0, Q.default)({
                  product: i,
                  analyticsLocations: g
                })
              },
              children: el.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, l.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, v.default)({
                skuId: i.skuId,
                analyticsLocations: g,
                onClose: e => e ? p() : (0, es.NOOP)()
              }),
              children: (0, F.isBundleProduct)(i) ? el.default.Messages.COLLECTIBLES_PURCHASE.format({
                price: q
              }) : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? el.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : el.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : ei(el.default.Messages.UNLOCK_WITH_NITRO), !R && !z && (0, l.jsx)(Z.default, {
              product: i,
              onSuccess: p,
              disableCustomColor: !0
            })]
          })
        }), (0, l.jsx)(u.Text, {
          className: n()(ea.disclaimer, !O && ea.disclaimerLight),
          variant: "text-xxs/normal",
          children: S ? null : R ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, F.isBundleProduct)(i) ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER : i.type === o.CollectiblesItemType.PROFILE_EFFECT ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eu = e => {
    let {
      product: t,
      user: s
    } = e, a = D.default.canUsePremiumProfileCustomization(s), i = (0, d.useStateFromStoresObject)([j.default], () => j.default.getAllPending()), n = (0, _.useDisplayProfileWithFetchEffect)(s.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, c = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: C
    } = (0, w.useShopProductItems)(t);
    return (0, l.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.previewsContainerInner : ea.profileEffectPreviewsContainerInner,
      children: [(0, l.jsx)(S.default, {
        ...i,
        user: s,
        canUsePremiumCustomization: a,
        onAvatarChange: es.NOOP,
        onBannerChange: es.NOOP,
        bodyClassName: ea.profileCustomizationBody,
        pendingAvatarDecoration: m,
        pendingProfileEffectId: null == C ? void 0 : C.id,
        forProfileEffectModal: null != C,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: r || c,
        hideBioSection: r,
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
    return (0, p.createMessageRecord)({
      ...(0, x.default)({
        author: t,
        channelId: "1337",
        content: el.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: ee.MessageStates.SENT,
      id: "0"
    })
  },
  eC = e => {
    let {
      user: t
    } = e, s = em({
      author: t
    });
    return (0, l.jsx)(u.FocusBlock, {
      children: (0, l.jsxs)(u.Card, {
        className: ea.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, l.jsx)(L.default, {
          className: ea.mockMessage,
          author: (0, g.getMessageAuthor)(s),
          message: s
        }, s.id), (0, l.jsxs)("div", {
          className: ea.mockInput,
          children: [(0, l.jsx)(R.default, {
            className: ea.mockInputButton,
            width: 24,
            height: 24
          }), (0, l.jsx)(O.default, {
            className: ea.mockInputButton,
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
    category: c,
    returnRef: m,
    analyticsSource: C,
    analyticsLocations: f
  } = e, E = (0, d.useStateFromStores)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: p
  } = (0, I.default)([...f, h.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, V.useProductDetailsLinkableRoute)(r);
  let [x] = r.items;
  return (a.useEffect(() => {
    let e = (null == x ? void 0 : x.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    M.default.track(ee.AnalyticEvents.OPEN_MODAL, {
      type: ee.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: p,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(B.productDetailsOpened)
  }, [C, p, r.skuId, r.items, null == x ? void 0 : x.type]), null == E) ? null : (0, l.jsx)(I.AnalyticsLocationProvider, {
    value: p,
    children: (0, l.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: ea.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, l.jsxs)(u.ModalContent, {
        className: ea.modalContent,
        children: [(0, l.jsx)(ec, {
          user: E,
          product: r,
          category: c,
          onClose: n
        }), (0, l.jsxs)("div", {
          className: r.type === o.CollectiblesItemType.AVATAR_DECORATION ? ea.collectiblePreviewsContainerWithChat : ea.collectiblePreviewsContainerNoChat,
          children: [(0, l.jsx)(z.default, {
            asset: null !== (s = c.pdpBg) && void 0 !== s ? s : r.banner,
            addGradient: null === (t = $.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, q.getAssetSizeByHeight)(540),
            className: ea.categoryBanner,
            blur: !0
          }), (0, l.jsx)(eu, {
            user: E,
            product: r
          }), (0, l.jsxs)("div", {
            className: ea.profilePreviewHeader,
            children: [(0, l.jsx)("div", {
              className: ea.titleImageContainer,
              children: (0, l.jsx)("img", {
                className: ea.titleImage,
                src: (0, F.getCollectiblesAssetURL)(c.logo, {
                  size: Y.LOGO_SIZE
                }),
                alt: c.name
              })
            }), (0, l.jsx)(u.ModalCloseButton, {
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