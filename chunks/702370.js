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
  C = l("410030"),
  f = l("100527"),
  p = l("906732"),
  I = l("1585"),
  x = l("786761"),
  E = l("3148"),
  g = l("739566"),
  v = l("753206"),
  L = l("333867"),
  T = l("197115"),
  N = l("300284"),
  A = l("962746"),
  S = l("731896"),
  j = l("642619"),
  P = l("318661"),
  _ = l("25990"),
  b = l("594174"),
  O = l("642113"),
  R = l("151785"),
  M = l("626135"),
  y = l("74538"),
  D = l("335131"),
  B = l("1870"),
  k = l("884697"),
  U = l("724994"),
  F = l("328456"),
  w = l("390698"),
  z = l("141011"),
  H = l("426171"),
  V = l("224068"),
  W = l("813083"),
  G = l("823941"),
  Y = l("680942"),
  Z = l("558060"),
  K = l("237031"),
  X = l("372654"),
  q = l("616066"),
  J = l("832149"),
  Q = l("215023"),
  $ = l("981631"),
  ee = l("474936"),
  et = l("231338"),
  el = l("689938"),
  es = l("975075"),
  ea = l("689262");
let ei = e => {
    var t;
    let {
      item: l
    } = e, a = (0, S.useProfileEffectPreset)(l.id), {
      thumbnailPreviewSrc: i,
      accessibilityLabel: n
    } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("img", {
        src: ea,
        alt: "",
        className: es.sampleProfileAsset
      }), null != i && (0, s.jsx)("img", {
        src: i,
        alt: n,
        className: es.staticPfxPreview
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
      className: a ? es.bundleAvatarPreviewContainer : es.avatarPreviewContainer,
      children: (0, s.jsx)(q.AvatarDecorationPreview, {
        user: l,
        item: t
      })
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, s.jsxs)("div", {
      className: a ? es.bundlePfxPreviewContainer : es.pfxPreviewContainer,
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
      className: es.bundlePreviewContainer,
      children: (0, s.jsx)(u.Slides, {
        activeSlide: String(i),
        children: t.items.map((e, a) => {
          let i = String(a),
            n = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
            o = "(".concat(a + 1, "/").concat(r, ")");
          return (0, s.jsx)(u.Slide, {
            id: i,
            children: (0, s.jsxs)("div", {
              className: es.bundlePreviewSlide,
              children: [(0, s.jsx)(en, {
                item: e,
                user: l,
                isBundleItem: !0
              }), (0, s.jsxs)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: es.bundleSlideTitle,
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
    return (0, k.isBundleProduct)(t) ? (0, s.jsx)(er, {
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
      returnRef: o
    } = e, {
      analyticsLocations: f
    } = (0, p.default)(), x = y.default.canUseCollectibles(l), {
      isPurchased: E,
      isPartiallyPurchased: g
    } = (0, U.useProductPurchaseState)(t), v = (0, d.useStateFromStores)([B.default], () => B.default.isClaiming === t.skuId), A = (0, N.default)({
      analyticsLocations: f
    }), S = (0, C.default)(), P = (0, c.isThemeDark)(S), _ = (0, k.isPremiumCollectiblesProduct)(t), b = (0, k.extractPriceByPurchaseTypes)(t, $.PriceSetAssignmentPurchaseTypes.DEFAULT), O = (null == b ? void 0 : b.amount) === 0, {
      firstAvatarDecoration: R,
      firstProfileEffect: M
    } = (0, F.useShopProductItems)(t), z = a.useCallback(() => {
      if (r(), (0, m.popLayer)(), A(), null != R) {
        (0, I.openAvatarDecorationModal)({
          initialSelectedDecoration: R,
          analyticsLocations: f
        });
        return
      }
      null != M && (0, j.openProfileEffectModal)({
        initialSelectedEffectId: M.id,
        analyticsLocations: f
      })
    }, [f, R, M, r, A]);
    a.useEffect(() => {
      if (null != R) return (0, h.setPendingAvatarDecoration)(R), () => (0, h.setPendingAvatarDecoration)(void 0)
    }, [R]);
    let H = e => (0, s.jsx)(T.default, {
      subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
      fullWidth: !0,
      buttonText: e,
      onClick: K.closeCollectiblesShopProductDetailsModal,
      onSubscribeModalClose: () => {
        (0, K.openCollectiblesShopProductDetailsModal)({
          product: t,
          category: i,
          returnRef: o,
          analyticsLocations: f
        })
      }
    });
    return (0, s.jsxs)("div", {
      className: es.collectibleInfoContainer,
      children: [(0, s.jsx)("div", {
        className: es.titleContainer,
        children: (0, s.jsx)(W.default, {
          category: i,
          display: "modal"
        })
      }), (0, s.jsx)(eo, {
        product: t,
        user: l
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsxs)("div", {
          className: es.description,
          children: [(0, s.jsx)(V.default, {
            product: t,
            isDarkText: !P
          }), (0, s.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: es.headingWithItemTypePill,
            children: t.name
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: t.summary
          }), E || g ? (0, s.jsx)(w.AlreadyOwned, {
            className: es.priceTag,
            isPartiallyPurchased: g
          }) : _ ? (0, s.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: es.priceTag,
            children: el.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, s.jsx)(Z.default, {
            product: t,
            className: x ? es.priceTag : es.priceTagContainer,
            nitroUpsell: !x
          })]
        }), (0, s.jsx)("div", {
          className: es.buttonsContainer,
          children: (0, s.jsxs)("div", {
            className: es.primaryButtons,
            children: [!_ || x || O ? E ? (0, s.jsx)(u.Button, {
              className: es.button,
              look: u.Button.Looks.FILLED,
              onClick: z,
              children: el.default.Messages.COLLECTIBLES_USE_NOW
            }) : g ? null : _ ? (0, s.jsx)(u.Button, {
              className: es.button,
              look: u.Button.Looks.FILLED,
              submitting: v,
              submittingStartedLabel: el.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: el.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, D.claimPremiumCollectiblesProduct)(t.skuId), r(), (0, J.default)({
                  product: t,
                  analyticsLocations: f
                })
              },
              children: el.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, s.jsx)(u.Button, {
              className: es.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, L.default)({
                skuId: t.skuId,
                analyticsLocations: f,
                onClose: e => e ? r() : (0, et.NOOP)()
              }),
              children: null != M ? el.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : el.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : H(el.default.Messages.UNLOCK_WITH_NITRO), !_ && !O && (0, s.jsx)(Y.default, {
              product: t,
              onSuccess: r,
              disableCustomColor: !0
            })]
          })
        }), (0, s.jsx)(u.Text, {
          className: n()(es.disclaimer, !P && es.disclaimerLight),
          variant: "text-xxs/normal",
          children: E ? null : _ ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : null != M ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ec = e => {
    let {
      product: t,
      user: l
    } = e, a = y.default.canUsePremiumProfileCustomization(l), i = (0, d.useStateFromStoresObject)([_.default], () => _.default.getAllPending()), n = (0, P.useDisplayProfileWithFetchEffect)(l.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, c = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: h
    } = (0, F.useShopProductItems)(t);
    return (0, s.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? es.previewsContainerInner : es.profileEffectPreviewsContainerInner,
      children: [(0, s.jsx)(A.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: a,
        onAvatarChange: et.NOOP,
        onBannerChange: et.NOOP,
        bodyClassName: es.profileCustomizationBody,
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
      }), r && (0, s.jsx)(em, {
        user: l
      })]
    })
  },
  eu = e => {
    let {
      author: t
    } = e;
    return (0, x.createMessageRecord)({
      ...(0, E.default)({
        author: t,
        channelId: "1337",
        content: el.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: $.MessageStates.SENT,
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
        className: es.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, s.jsx)(v.default, {
          className: es.mockMessage,
          author: (0, g.getMessageAuthor)(l),
          message: l
        }, l.id), (0, s.jsxs)("div", {
          className: es.mockInput,
          children: [(0, s.jsx)(R.default, {
            className: es.mockInputButton,
            width: 24,
            height: 24
          }), (0, s.jsx)(O.default, {
            className: es.mockInputButton,
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
    analyticsLocations: C
  } = e, I = (0, d.useStateFromStores)([b.default], () => b.default.getCurrentUser()), {
    analyticsLocations: x
  } = (0, p.default)([...C, f.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, H.useProductDetailsLinkableRoute)(r);
  let [E] = r.items;
  return (a.useEffect(() => {
    let e = (null == E ? void 0 : E.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    M.default.track($.AnalyticEvents.OPEN_MODAL, {
      type: $.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: h,
      location_stack: x,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(D.productDetailsOpened)
  }, [h, x, r.skuId, r.items, null == E ? void 0 : E.type]), null == I) ? null : (0, s.jsx)(p.AnalyticsLocationProvider, {
    value: x,
    children: (0, s.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: es.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, s.jsxs)(u.ModalContent, {
        className: es.modalContent,
        children: [(0, s.jsx)(ed, {
          user: I,
          product: r,
          category: c,
          onClose: n
        }), (0, s.jsxs)("div", {
          className: (null == E ? void 0 : E.type) === o.CollectiblesItemType.AVATAR_DECORATION ? es.collectiblePreviewsContainerWithChat : es.collectiblePreviewsContainerNoChat,
          children: [(0, s.jsx)(z.default, {
            asset: null !== (l = c.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = Q.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, X.getAssetSizeByHeight)(540),
            className: es.categoryBanner,
            blur: !0
          }), (0, s.jsx)(ec, {
            user: I,
            product: r
          }), (0, s.jsxs)("div", {
            className: es.profilePreviewHeader,
            children: [(0, s.jsx)("div", {
              className: es.titleImageContainer,
              children: (0, s.jsx)("img", {
                className: es.titleImage,
                src: (0, k.getCollectiblesAssetURL)(c.logo, {
                  size: G.LOGO_SIZE
                }),
                alt: c.name
              })
            }), (0, s.jsx)(u.ModalCloseButton, {
              onClick: n,
              className: es.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}