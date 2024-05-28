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
  h = l("809206"),
  f = l("410030"),
  C = l("100527"),
  I = l("906732"),
  p = l("1585"),
  E = l("786761"),
  x = l("3148"),
  v = l("739566"),
  g = l("753206"),
  L = l("333867"),
  T = l("197115"),
  N = l("300284"),
  S = l("962746"),
  A = l("731896"),
  P = l("642619"),
  j = l("318661"),
  _ = l("25990"),
  b = l("594174"),
  O = l("642113"),
  R = l("151785"),
  M = l("626135"),
  D = l("74538"),
  B = l("335131"),
  y = l("1870"),
  k = l("884697"),
  U = l("188584"),
  F = l("724994"),
  w = l("328456"),
  H = l("390698"),
  z = l("141011"),
  V = l("426171"),
  W = l("224068"),
  G = l("813083"),
  Y = l("823941"),
  Z = l("680942"),
  K = l("558060"),
  X = l("237031"),
  q = l("372654"),
  J = l("616066"),
  Q = l("832149"),
  $ = l("215023"),
  ee = l("981631"),
  et = l("474936"),
  el = l("231338"),
  es = l("689938"),
  ea = l("975075"),
  ei = l("689262");
let en = e => {
    var t;
    let {
      item: l
    } = e, a = (0, A.useProfileEffectPreset)(l.id), {
      thumbnailPreviewSrc: i,
      accessibilityLabel: n
    } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("img", {
        src: ei,
        alt: "",
        className: ea.sampleProfileAsset
      }), null != i && (0, s.jsx)("img", {
        src: i,
        alt: n,
        className: ea.staticPfxPreview
      })]
    })
  },
  er = e => {
    let {
      item: t,
      user: l,
      isBundleItem: a = !1
    } = e;
    return (0, r.match)(t.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, s.jsx)("div", {
      className: a ? ea.bundleAvatarPreviewContainer : ea.avatarPreviewContainer,
      children: (0, s.jsx)(J.AvatarDecorationPreview, {
        user: l,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsxs)("div", {
      className: a ? ea.bundlePfxPreviewContainer : ea.pfxPreviewContainer,
      children: [(0, s.jsx)(en, {
        item: t
      }), ","]
    })).otherwise(() => null)
  },
  eo = e => {
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
      className: ea.bundlePreviewContainer,
      children: (0, s.jsx)(u.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, s.jsx)(u.Slide, {
            id: i,
            children: (0, s.jsxs)("div", {
              className: ea.bundlePreviewSlide,
              children: [(0, s.jsx)(er, {
                item: e,
                user: l,
                isBundleItem: !0
              }), (0, s.jsxs)(u.Text, {
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
      user: l
    } = e;
    return (0, k.isBundleProduct)(t) ? (0, s.jsx)(eo, {
      product: t,
      user: l
    }) : t.items.length > 0 ? (0, s.jsx)(er, {
      item: t.items[0],
      user: l
    }) : null
  },
  ec = e => {
    var t, l;
    let {
      product: i,
      user: r,
      category: C,
      onClose: E,
      returnRef: x
    } = e, {
      analyticsLocations: v
    } = (0, I.default)(), g = D.default.canUseCollectibles(r), {
      isPurchased: S,
      isPartiallyPurchased: A
    } = (0, F.useProductPurchaseState)(i), j = (0, d.useStateFromStores)([y.default], () => y.default.isClaiming === i.skuId), _ = (0, N.default)({
      analyticsLocations: v
    }), b = (0, f.default)(), O = (0, c.isThemeDark)(b), R = (0, k.isPremiumCollectiblesProduct)(i), M = (0, k.extractPriceByPurchaseTypes)(i, ee.PriceSetAssignmentPurchaseTypes.DEFAULT), z = (null == M ? void 0 : M.amount) === 0, {
      firstAvatarDecoration: V,
      firstProfileEffect: Y
    } = (0, w.useShopProductItems)(i), q = a.useCallback(() => {
      if (E(), (0, m.popLayer)(), _(), null != V) {
        (0, p.openAvatarDecorationModal)({
          initialSelectedDecoration: V,
          analyticsLocations: v
        });
        return
      }
      null != Y && (0, P.openProfileEffectModal)({
        initialSelectedEffectId: Y.id,
        analyticsLocations: v
      })
    }, [v, V, Y, E, _]);
    a.useEffect(() => {
      if (null != V) return (0, h.setPendingAvatarDecoration)(V), () => (0, h.setPendingAvatarDecoration)(void 0)
    }, [V]);
    let J = e => (0, s.jsx)(T.default, {
        subscriptionTier: et.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: X.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, X.openCollectiblesShopProductDetailsModal)({
            product: i,
            category: C,
            returnRef: x,
            analyticsLocations: v
          })
        }
      }),
      {
        firstAvatarDecoration: $,
        firstProfileEffect: ei
      } = (0, U.useBundledProducts)(i),
      en = i.type === o.CollectiblesItemType.BUNDLE ? es.default.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == $ ? void 0 : $.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (l = null == ei ? void 0 : ei.name) && void 0 !== l ? l : ""
      }) : i.summary;
    return (0, s.jsxs)("div", {
      className: ea.collectibleInfoContainer,
      children: [(0, s.jsx)("div", {
        className: ea.titleContainer,
        children: (0, s.jsx)(G.default, {
          category: C,
          display: "modal"
        })
      }), (0, s.jsx)(ed, {
        product: i,
        user: r
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: ea.description,
          children: [(0, s.jsx)(W.default, {
            product: i,
            isDarkText: !O
          }), (0, s.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: ea.headingWithItemTypePill,
            children: i.name
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: en
          }), S || A ? (0, s.jsx)(H.AlreadyOwned, {
            className: ea.priceTag,
            isPartiallyPurchased: A
          }) : R ? (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: ea.priceTag,
            children: es.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, s.jsx)(K.default, {
            product: i,
            className: g ? ea.priceTag : ea.priceTagContainer,
            nitroUpsell: !g
          })]
        }), (0, s.jsx)("div", {
          className: ea.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: ea.primaryButtons,
            children: [!R || g || z ? S ? (0, s.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: q,
              children: es.default.Messages.COLLECTIBLES_USE_NOW
            }) : A ? null : R ? (0, s.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              submitting: j,
              submittingStartedLabel: es.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: es.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, B.claimPremiumCollectiblesProduct)(i.skuId), E(), (0, Q.default)({
                  product: i,
                  analyticsLocations: v
                })
              },
              children: es.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, L.default)({
                skuId: i.skuId,
                analyticsLocations: v,
                onClose: e => e ? E() : (0, el.NOOP)()
              }),
              children: null != Y ? es.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : es.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : J(es.default.Messages.UNLOCK_WITH_NITRO), !R && !z && (0, s.jsx)(Z.default, {
              product: i,
              onSuccess: E,
              disableCustomColor: !0
            })]
          })
        }), (0, s.jsx)(u.Text, {
          className: n()(ea.disclaimer, !O && ea.disclaimerLight),
          variant: "text-xxs/normal",
          children: S ? null : R ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : null != Y ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eu = e => {
    let {
      product: t,
      user: l
    } = e, a = D.default.canUsePremiumProfileCustomization(l), i = (0, d.useStateFromStoresObject)([_.default], () => _.default.getAllPending()), n = (0, j.useDisplayProfileWithFetchEffect)(l.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, c = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: h
    } = (0, w.useShopProductItems)(t);
    return (0, s.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.previewsContainerInner : ea.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(S.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: el.NOOP,
        onBannerChange: el.NOOP,
        bodyClassName: ea.profileCustomizationBody,
        pendingAvatarDecoration: m,
        pendingProfileEffectId: null == h ? void 0 : h.id,
        forProfileEffectModal: null != h,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: r || c,
        hideBioSection: r,
        hideMemberStatusSection: r,
        hideRecentGames: !0,
        useLargeBanner: !0
      }), r && (0, s.jsx)(eh, {
        user: l
      })]
    })
  },
  em = e => {
    let {
      author: t
    } = e;
    return (0, E.createMessageRecord)({
      ...(0, x.default)({
        author: t,
        channelId: "1337",
        content: es.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: ee.MessageStates.SENT,
      id: "0"
    })
  },
  eh = e => {
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
        children: [(0, s.jsx)(g.default, {
          className: ea.mockMessage,
          author: (0, v.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: ea.mockInput,
          children: [(0, s.jsx)(R.default, {
            className: ea.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(O.default, {
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
    analyticsSource: h,
    analyticsLocations: f
  } = e, p = (0, d.useStateFromStores)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: E
  } = (0, I.default)([...f, C.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, V.useProductDetailsLinkableRoute)(r);
  let [x] = r.items;
  return (a.useEffect(() => {
    let e = (null == x ? void 0 : x.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    M.default.track(ee.AnalyticEvents.OPEN_MODAL, {
      type: ee.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: h,
      location_stack: E,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(B.productDetailsOpened)
  }, [h, E, r.skuId, r.items, null == x ? void 0 : x.type]), null == p) ? null : (0, s.jsx)(I.AnalyticsLocationProvider, {
    value: E,
    children: (0, s.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: ea.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(u.ModalContent, {
        className: ea.modalContent,
        children: [(0, s.jsx)(ec, {
          user: p,
          product: r,
          category: c,
          onClose: n
        }), (0, s.jsxs)("div", {
          className: r.type === o.CollectiblesItemType.AVATAR_DECORATION ? ea.collectiblePreviewsContainerWithChat : ea.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(z.default, {
            asset: null !== (l = c.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = $.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, q.getAssetSizeByHeight)(540),
            className: ea.categoryBanner,
            blur: !0
          }), (0, s.jsx)(eu, {
            user: p,
            product: r
          }), (0, s.jsxs)("div", {
            className: ea.profilePreviewHeader,
            children: [(0, s.jsx)("div", {
              className: ea.titleImageContainer,
              children: (0, s.jsx)("img", {
                className: ea.titleImage,
                src: (0, k.getCollectiblesAssetURL)(c.logo, {
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