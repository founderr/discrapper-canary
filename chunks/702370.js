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
  h = s("809206"),
  f = s("410030"),
  p = s("100527"),
  C = s("906732"),
  I = s("1585"),
  E = s("786761"),
  v = s("3148"),
  g = s("739566"),
  x = s("753206"),
  T = s("333867"),
  L = s("197115"),
  N = s("300284"),
  A = s("962746"),
  P = s("731896"),
  S = s("642619"),
  b = s("318661"),
  j = s("25990"),
  _ = s("594174"),
  O = s("642113"),
  y = s("151785"),
  R = s("626135"),
  B = s("74538"),
  M = s("335131"),
  D = s("1870"),
  k = s("884697"),
  F = s("188584"),
  U = s("724994"),
  w = s("328456"),
  z = s("390698"),
  H = s("141011"),
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
    } = e, a = (0, P.useProfileEffectPreset)(s.id), {
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
    })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, l.jsxs)("div", {
      className: a ? ea.bundlePfxPreviewContainer : ea.pfxPreviewContainer,
      children: [(0, l.jsx)(en, {
        item: t
      }), ","]
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
    return (0, k.isBundleProduct)(t) ? (0, l.jsx)(eo, {
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
      category: p,
      onClose: E,
      returnRef: v
    } = e, {
      analyticsLocations: g
    } = (0, C.default)(), x = B.default.canUseCollectibles(r), {
      isPurchased: A,
      isPartiallyPurchased: P
    } = (0, U.useProductPurchaseState)(i), b = (0, d.useStateFromStores)([D.default], () => D.default.isClaiming === i.skuId), j = (0, N.default)({
      analyticsLocations: g
    }), _ = (0, f.default)(), O = (0, c.isThemeDark)(_), y = (0, k.isPremiumCollectiblesProduct)(i), R = (0, k.extractPriceByPurchaseTypes)(i, ee.PriceSetAssignmentPurchaseTypes.DEFAULT), H = (null == R ? void 0 : R.amount) === 0, {
      firstAvatarDecoration: V,
      firstProfileEffect: Y
    } = (0, w.useShopProductItems)(i), q = a.useCallback(() => {
      if (E(), (0, m.popLayer)(), j(), null != V) {
        (0, I.openAvatarDecorationModal)({
          initialSelectedDecoration: V,
          analyticsLocations: g
        });
        return
      }
      null != Y && (0, S.openProfileEffectModal)({
        initialSelectedEffectId: Y.id,
        analyticsLocations: g
      })
    }, [g, V, Y, E, j]);
    a.useEffect(() => {
      if (null != V) return (0, h.setPendingAvatarDecoration)(V), () => (0, h.setPendingAvatarDecoration)(void 0)
    }, [V]);
    let J = e => (0, l.jsx)(L.default, {
        subscriptionTier: et.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: X.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, X.openCollectiblesShopProductDetailsModal)({
            product: i,
            category: p,
            returnRef: v,
            analyticsLocations: g
          })
        }
      }),
      {
        firstAvatarDecoration: $,
        firstProfileEffect: ei
      } = (0, F.useBundledProducts)(i),
      en = i.type === o.CollectiblesItemType.BUNDLE ? el.default.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == $ ? void 0 : $.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (s = null == ei ? void 0 : ei.name) && void 0 !== s ? s : ""
      }) : i.summary;
    return (0, l.jsxs)("div", {
      className: ea.collectibleInfoContainer,
      children: [(0, l.jsx)("div", {
        className: ea.titleContainer,
        children: (0, l.jsx)(G.default, {
          category: p,
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
            children: en
          }), A || P ? (0, l.jsx)(z.AlreadyOwned, {
            className: ea.priceTag,
            isPartiallyPurchased: P
          }) : y ? (0, l.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: ea.priceTag,
            children: el.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, l.jsx)(K.default, {
            product: i,
            className: x ? ea.priceTag : ea.priceTagContainer,
            nitroUpsell: !x
          })]
        }), (0, l.jsx)("div", {
          className: ea.buttonsContainer,
          children: (0, l.jsxs)("div", {
            className: ea.primaryButtons,
            children: [!y || x || H ? A ? (0, l.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: q,
              children: el.default.Messages.COLLECTIBLES_USE_NOW
            }) : P ? null : y ? (0, l.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              submitting: b,
              submittingStartedLabel: el.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: el.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, M.claimPremiumCollectiblesProduct)(i.skuId), E(), (0, Q.default)({
                  product: i,
                  analyticsLocations: g
                })
              },
              children: el.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, l.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, T.default)({
                skuId: i.skuId,
                analyticsLocations: g,
                onClose: e => e ? E() : (0, es.NOOP)()
              }),
              children: null != Y ? el.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : el.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : J(el.default.Messages.UNLOCK_WITH_NITRO), !y && !H && (0, l.jsx)(Z.default, {
              product: i,
              onSuccess: E,
              disableCustomColor: !0
            })]
          })
        }), (0, l.jsx)(u.Text, {
          className: n()(ea.disclaimer, !O && ea.disclaimerLight),
          variant: "text-xxs/normal",
          children: A ? null : y ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : null != Y ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  eu = e => {
    let {
      product: t,
      user: s
    } = e, a = B.default.canUsePremiumProfileCustomization(s), i = (0, d.useStateFromStoresObject)([j.default], () => j.default.getAllPending()), n = (0, b.useDisplayProfileWithFetchEffect)(s.id), r = t.type === o.CollectiblesItemType.AVATAR_DECORATION, c = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items, {
      firstAvatarDecoration: m,
      firstProfileEffect: h
    } = (0, w.useShopProductItems)(t);
    return (0, l.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.previewsContainerInner : ea.profileEffectPreviewsContainerInner,
      children: [(0, l.jsx)(A.default, {
        ...i,
        user: s,
        canUsePremiumCustomization: a,
        onAvatarChange: es.NOOP,
        onBannerChange: es.NOOP,
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
      }), r && (0, l.jsx)(eh, {
        user: s
      })]
    })
  },
  em = e => {
    let {
      author: t
    } = e;
    return (0, E.createMessageRecord)({
      ...(0, v.default)({
        author: t,
        channelId: "1337",
        content: el.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: ee.MessageStates.SENT,
      id: "0"
    })
  },
  eh = e => {
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
        children: [(0, l.jsx)(x.default, {
          className: ea.mockMessage,
          author: (0, g.getMessageAuthor)(s),
          message: s
        }, s.id), (0, l.jsxs)("div", {
          className: ea.mockInput,
          children: [(0, l.jsx)(y.default, {
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
    analyticsSource: h,
    analyticsLocations: f
  } = e, I = (0, d.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
    analyticsLocations: E
  } = (0, C.default)([...f, p.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, V.useProductDetailsLinkableRoute)(r);
  let [v] = r.items;
  return (a.useEffect(() => {
    let e = (null == v ? void 0 : v.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    R.default.track(ee.AnalyticEvents.OPEN_MODAL, {
      type: ee.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: h,
      location_stack: E,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(M.productDetailsOpened)
  }, [h, E, r.skuId, r.items, null == v ? void 0 : v.type]), null == I) ? null : (0, l.jsx)(C.AnalyticsLocationProvider, {
    value: E,
    children: (0, l.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: ea.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, l.jsxs)(u.ModalContent, {
        className: ea.modalContent,
        children: [(0, l.jsx)(ec, {
          user: I,
          product: r,
          category: c,
          onClose: n
        }), (0, l.jsxs)("div", {
          className: r.type === o.CollectiblesItemType.AVATAR_DECORATION ? ea.collectiblePreviewsContainerWithChat : ea.collectiblePreviewsContainerNoChat,
          children: [(0, l.jsx)(H.default, {
            asset: null !== (s = c.pdpBg) && void 0 !== s ? s : r.banner,
            addGradient: null === (t = $.categoryBannerOverrides[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, q.getAssetSizeByHeight)(540),
            className: ea.categoryBanner,
            blur: !0
          }), (0, l.jsx)(eu, {
            user: I,
            product: r
          }), (0, l.jsxs)("div", {
            className: ea.profilePreviewHeader,
            children: [(0, l.jsx)("div", {
              className: ea.titleImageContainer,
              children: (0, l.jsx)("img", {
                className: ea.titleImage,
                src: (0, k.getCollectiblesAssetURL)(c.logo, {
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