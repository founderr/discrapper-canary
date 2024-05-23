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
  h = l("410030"),
  I = l("100527"),
  f = l("906732"),
  p = l("1585"),
  E = l("786761"),
  x = l("3148"),
  T = l("739566"),
  g = l("753206"),
  v = l("333867"),
  L = l("963249"),
  N = l("197115"),
  A = l("300284"),
  _ = l("962746"),
  b = l("731896"),
  S = l("642619"),
  j = l("318661"),
  O = l("25990"),
  P = l("594174"),
  R = l("642113"),
  y = l("151785"),
  M = l("626135"),
  D = l("74538"),
  B = l("335131"),
  k = l("1870"),
  F = l("884697"),
  U = l("328456"),
  w = l("141011"),
  H = l("426171"),
  z = l("224068"),
  V = l("813083"),
  W = l("823941"),
  G = l("680942"),
  Y = l("558060"),
  K = l("237031"),
  Z = l("372654"),
  X = l("616066"),
  q = l("832149"),
  J = l("215023"),
  Q = l("981631"),
  $ = l("474936"),
  ee = l("231338"),
  et = l("689938"),
  el = l("975075"),
  es = l("689262");
let ea = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, f.default)(), i = a.useRef(null);
    return (0, s.jsx)(u.Clickable, {
      className: el.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, L.default)({
          subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  ei = e => {
    var t;
    let {
      item: l
    } = e, a = (0, b.useProfileEffectPreset)(l.id), {
      thumbnailPreviewSrc: i,
      accessibilityLabel: n
    } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("img", {
        src: es,
        alt: "",
        className: el.sampleProfileAsset
      }), null != i && (0, s.jsx)("img", {
        src: i,
        alt: n,
        className: el.staticPfxPreview
      })]
    })
  },
  en = e => {
    let {
      item: t,
      user: l,
      isBundleItem: a = !1
    } = e;
    return (0, r.match)(t.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, s.jsx)("div", {
      className: a ? el.bundleAvatarPreviewContainer : el.avatarPreviewContainer,
      children: (0, s.jsx)(X.AvatarDecorationPreview, {
        user: l,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsxs)("div", {
      className: a ? el.bundlePfxPreviewContainer : el.pfxPreviewContainer,
      children: [(0, s.jsx)(ei, {
        item: t
      }), ","]
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
      className: el.bundlePreviewContainer,
      children: (0, s.jsx)(u.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, s.jsx)(u.Slide, {
            id: i,
            children: (0, s.jsxs)("div", {
              className: el.bundlePreviewSlide,
              children: [(0, s.jsx)(en, {
                item: e,
                user: l,
                isBundleItem: !0
              }), (0, s.jsxs)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: el.bundleSlideTitle,
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
    return t.type === o.CollectiblesItemType.BUNDLE ? (0, s.jsx)(er, {
      product: t,
      user: l
    }) : t.items.length > 0 ? (0, s.jsx)(en, {
      item: t.items[0],
      user: l
    }) : null
  },
  ed = e => {
    let {
      product: t,
      user: l,
      category: i,
      onClose: r,
      returnRef: I
    } = e, {
      analyticsLocations: E
    } = (0, f.default)(), x = D.default.canUseCollectibles(l), [T, g] = (0, d.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId]), L = (0, A.default)({
      analyticsLocations: E
    }), _ = (0, h.default)(), b = (0, c.isThemeDark)(_), j = (0, F.isPremiumCollectiblesProduct)(t), O = (0, F.extractPriceByPurchaseTypes)(t, Q.PriceSetAssignmentPurchaseTypes.DEFAULT), P = (null == O ? void 0 : O.amount) === 0, [R] = t.items;
    a.useEffect(() => {
      if ((null == R ? void 0 : R.type) === o.CollectiblesItemType.AVATAR_DECORATION) return (0, C.setPendingAvatarDecoration)(R), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [R]);
    let y = e => (0, s.jsx)(N.default, {
      subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2,
      fullWidth: !0,
      buttonText: e,
      onClick: K.closeCollectiblesShopProductDetailsModal,
      onSubscribeModalClose: () => {
        (0, K.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: i,
          returnRef: I,
          analyticsLocations: E
        })
      }
    });
    return (0, s.jsxs)("div", {
      className: el.collectibleInfoContainer,
      children: [(0, s.jsx)("div", {
        className: el.titleContainer,
        children: (0, s.jsx)(V.default, {
          category: i,
          display: "modal"
        })
      }), (0, s.jsx)(eo, {
        product: t,
        user: l
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: el.description,
          children: [(0, s.jsx)(z.default, {
            product: t,
            isDarkText: !b
          }), (0, s.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: el.headingWithItemTypePill,
            children: t.name
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: t.summary
          }), null != T ? (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: el.priceTag,
            children: et.default.Messages.COLLECTIBLES_ALREADY_OWNED
          }) : j ? (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: el.priceTag,
            children: et.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : x ? (0, s.jsx)(Y.default, {
            product: t,
            className: el.priceTag
          }) : (0, s.jsx)(Y.default, {
            product: t,
            className: el.priceTagContainer,
            renderNitroPrice: e => (0, s.jsx)(u.Text, {
              variant: "text-xs/medium",
              children: et.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                price: e,
                subscribeNowHook: e => (0, s.jsx)(ea, {
                  text: e
                })
              })
            })
          })]
        }), (0, s.jsx)("div", {
          className: el.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: el.primaryButtons,
            children: [!j || x || P ? null != T ? (0, s.jsx)(u.Button, {
              className: el.button,
              look: u.Button.Looks.FILLED,
              onClick: () => {
                if (r(), (0, m.popLayer)(), L(), (null == R ? void 0 : R.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, p.openAvatarDecorationModal)({
                    initialSelectedDecoration: R,
                    analyticsLocations: E
                  });
                  return
                }(null == R ? void 0 : R.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
                  initialSelectedEffectId: R.id,
                  analyticsLocations: E
                })
              },
              children: et.default.Messages.COLLECTIBLES_USE_NOW
            }) : j ? (0, s.jsx)(u.Button, {
              className: el.button,
              look: u.Button.Looks.FILLED,
              submitting: g,
              submittingStartedLabel: et.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: et.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, B.claimPremiumCollectiblesProduct)(t.skuId), r(), (0, q.default)({
                  product: t,
                  analyticsLocations: E
                })
              },
              children: et.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(u.Button, {
              className: el.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, v.default)({
                skuId: t.skuId,
                analyticsLocations: E,
                onClose: e => e ? r() : (0, ee.NOOP)()
              }),
              children: (null == R ? void 0 : R.type) === o.CollectiblesItemType.PROFILE_EFFECT ? et.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : et.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : y(et.default.Messages.UNLOCK_WITH_NITRO), !j && !P && (0, s.jsx)(G.default, {
              product: t,
              onSuccess: r,
              disableCustomColor: !0
            })]
          })
        }), (0, s.jsx)(u.Text, {
          className: n()(el.disclaimer, !b && el.disclaimerLight),
          variant: "text-xxs/normal",
          children: null != T ? null : j ? et.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == R ? void 0 : R.type) === o.CollectiblesItemType.PROFILE_EFFECT ? et.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : et.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ec = e => {
    let {
      product: t,
      user: l
    } = e, a = D.default.canUsePremiumProfileCustomization(l), i = (0, d.useStateFromStoresObject)([O.default], () => O.default.getAllPending()), n = (0, j.useDisplayProfileWithFetchEffect)(l.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, c = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: C
    } = (0, U.useShopProductItems)(t);
    return (0, s.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? el.previewsContainerInner : el.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(_.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: ee.NOOP,
        onBannerChange: ee.NOOP,
        bodyClassName: el.profileCustomizationBody,
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
      }), r && (0, s.jsx)(em, {
        user: l
      })]
    })
  },
  eu = e => {
    let {
      author: t
    } = e;
    return (0, E.createMessageRecord)({
      ...(0, x.default)({
        author: t,
        channelId: "1337",
        content: et.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: Q.MessageStates.SENT,
      id: "0"
    })
  },
  em = e => {
    let {
      user: t
    } = e, l = eu({
      author: t
    });
    return (0, s.jsx)(u.FocusBlock, {
      children: (0, s.jsxs)(u.Card, {
        className: el.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(g.default, {
          className: el.mockMessage,
          author: (0, T.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: el.mockInput,
          children: [(0, s.jsx)(y.default, {
            className: el.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(R.default, {
            className: el.mockInputButton,
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
    analyticsLocations: h
  } = e, p = (0, d.useStateFromStores)([P.default], () => P.default.getCurrentUser()), {
    analyticsLocations: E
  } = (0, f.default)([...h, I.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, H.useProductDetailsLinkableRoute)(r);
  let [x] = r.items;
  return (a.useEffect(() => {
    let e = (null == x ? void 0 : x.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    M.default.track(Q.AnalyticEvents.OPEN_MODAL, {
      type: Q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: E,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(B.productDetailsOpened)
  }, [C, E, r.skuId, r.items, null == x ? void 0 : x.type]), null == p) ? null : (0, s.jsx)(f.AnalyticsLocationProvider, {
    value: E,
    children: (0, s.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: el.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(u.ModalContent, {
        className: el.modalContent,
        children: [(0, s.jsx)(ed, {
          user: p,
          product: r,
          category: c,
          onClose: n
        }), (0, s.jsxs)("div", {
          className: (null == x ? void 0 : x.type) === o.CollectiblesItemType.AVATAR_DECORATION ? el.collectiblePreviewsContainerWithChat : el.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(w.default, {
            asset: null !== (l = c.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = J.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, Z.getAssetSizeByHeight)(540),
            className: el.categoryBanner,
            blur: !0
          }), (0, s.jsx)(ec, {
            user: p,
            product: r
          }), (0, s.jsxs)("div", {
            className: el.profilePreviewHeader,
            children: [(0, s.jsx)("div", {
              className: el.titleImageContainer,
              children: (0, s.jsx)("img", {
                className: el.titleImage,
                src: (0, F.getCollectiblesAssetURL)(c.logo, {
                  size: W.LOGO_SIZE
                }),
                alt: c.name
              })
            }), (0, s.jsx)(u.ModalCloseButton, {
              onClick: n,
              className: el.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}