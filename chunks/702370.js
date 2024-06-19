s.r(t), s(47120), s(627341);
var i = s(735250),
  l = s(470079),
  n = s(120356),
  a = s.n(n),
  r = s(278074),
  o = s(979554),
  d = s(399606),
  c = s(780384),
  u = s(481060),
  E = s(37234),
  C = s(809206),
  m = s(727637),
  L = s(410030),
  I = s(100527),
  x = s(906732),
  T = s(1585),
  _ = s(786761),
  h = s(3148),
  v = s(739566),
  N = s(753206),
  S = s(333867),
  g = s(197115),
  p = s(300284),
  A = s(589266),
  O = s(876917),
  f = s(642619),
  P = s(447452),
  j = s(318661),
  Z = s(25990),
  M = s(594174),
  R = s(626135),
  D = s(74538),
  B = s(335131),
  b = s(1870),
  k = s(884697),
  U = s(188584),
  F = s(724994),
  w = s(328456),
  y = s(390698),
  H = s(141011),
  V = s(426171),
  G = s(224068),
  z = s(813083),
  W = s(823941),
  Y = s(680942),
  K = s(558060),
  Q = s(237031),
  X = s(372654),
  q = s(616066),
  J = s(832149),
  $ = s(215023),
  ee = s(981631),
  et = s(474936),
  es = s(231338),
  ei = s(689938),
  el = s(178215);
let en = e => {
    let {
      item: t,
      user: s,
      isBundleItem: n = !1
    } = e, a = l.useRef(null), d = (0, m.Z)(a);
    return (0, r.EQ)(t.type).with(o.Z.AVATAR_DECORATION, () => (0, i.jsx)("div", {
      className: n ? el.bundleAvatarPreviewContainer : el.avatarPreviewContainer,
      children: (0, i.jsx)(q.R, {
        user: s,
        item: t
      })
    })).with(o.Z.PROFILE_EFFECT, () => (0, i.jsx)("div", {
      className: n ? el.bundlePfxPreviewContainer : el.pfxPreviewContainer,
      ref: a,
      children: (0, i.jsx)(O.Z, {
        profileEffectId: t.id,
        isHovering: d,
        removeSetHeight: !0
      })
    })).otherwise(() => null)
  },
  ea = e => {
    let {
      product: t,
      user: s
    } = e, [n, a] = l.useState(0);
    l.useEffect(() => {
      let e = setInterval(() => {
        t.items.length > 0 && a(e => (e + 1) % t.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [t.skuId, t.items.length, s.id]);
    let r = t.items.length;
    return (0, i.jsx)("div", {
      className: el.bundlePreviewContainer,
      children: (0, i.jsx)(u.Slides, {
        activeSlide: String(n),
        children: t.items.map((e, l) => {
          let n = String(l),
            a = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
            o = "(".concat(l + 1, "/").concat(r, ")");
          return (0, i.jsx)(u.Slide, {
            id: n,
            children: (0, i.jsxs)("div", {
              className: el.bundlePreviewSlide,
              children: [(0, i.jsx)(en, {
                item: e,
                user: s,
                isBundleItem: !0
              }), (0, i.jsxs)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: el.bundleSlideTitle,
                children: [null == a ? void 0 : a.name, " ", o]
              })]
            })
          }, n)
        })
      })
    })
  },
  er = e => {
    let {
      product: t,
      user: s
    } = e;
    return (0, k.x6)(t) ? (0, i.jsx)(ea, {
      product: t,
      user: s
    }) : t.items.length > 0 ? (0, i.jsx)(en, {
      item: t.items[0],
      user: s
    }) : null
  },
  eo = e => {
    var t, s;
    let {
      product: n,
      user: r,
      category: m,
      onClose: I,
      returnRef: _
    } = e, {
      analyticsLocations: h
    } = (0, x.ZP)(), v = D.ZP.canUseCollectibles(r), {
      isPurchased: N,
      isPartiallyPurchased: A
    } = (0, F.L)(n), O = (0, d.e7)([b.Z], () => b.Z.isClaiming === n.skuId), P = (0, p.Z)({
      analyticsLocations: h
    }), j = (0, L.ZP)(), Z = (0, c.wj)(j), M = (0, k.G1)(n), R = (0, k.ql)(n, ee.tuJ.DEFAULT), H = (null == R ? void 0 : R.amount) === 0, {
      firstAvatarDecoration: V,
      firstProfileEffect: W
    } = (0, w.R)(n), X = l.useMemo(() => (0, k.BH)(n, v), [n, v]), q = l.useCallback(() => {
      if (I(), (0, E.xf)(), P(), null != V) {
        (0, T.ps)({
          initialSelectedDecoration: V,
          analyticsLocations: h
        });
        return
      }
      null != W && (0, f.H)({
        initialSelectedEffectId: W.id,
        analyticsLocations: h
      })
    }, [h, V, W, I, P]);
    l.useEffect(() => {
      if (null != V) return (0, C.cV)(V), () => (0, C.cV)(void 0)
    }, [V]);
    let $ = e => (0, i.jsx)(g.Z, {
        subscriptionTier: et.Si.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: Q.v,
        onSubscribeModalClose: () => {
          (0, Q.T)({
            product: n,
            category: m,
            returnRef: _,
            analyticsLocations: h
          })
        }
      }),
      {
        firstAvatarDecoration: en,
        firstProfileEffect: ea
      } = (0, U.k)(n),
      eo = n.type === o.Z.BUNDLE ? ei.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (t = null == en ? void 0 : en.name) && void 0 !== t ? t : "",
        profileEffectName: null !== (s = null == ea ? void 0 : ea.name) && void 0 !== s ? s : ""
      }) : n.summary;
    return (0, i.jsxs)("div", {
      className: el.collectibleInfoContainer,
      children: [(0, i.jsx)("div", {
        className: el.titleContainer,
        children: (0, i.jsx)(z.Z, {
          category: m,
          display: "modal"
        })
      }), (0, i.jsx)(er, {
        product: n,
        user: r
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: el.description,
          children: [(0, i.jsx)(G.Z, {
            product: n,
            isDarkText: !Z
          }), (0, i.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: el.headingWithItemTypePill,
            children: n.name
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: eo
          }), N || A ? (0, i.jsx)(y.U, {
            className: el.priceTag,
            isPartiallyPurchased: A
          }) : M ? (0, i.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: el.priceTag,
            children: ei.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, i.jsx)(K.Z, {
            product: n,
            discount: X,
            isPremiumUser: v,
            className: v ? el.priceTag : el.priceTagContainer,
            nitroUpsell: !v
          })]
        }), (0, i.jsx)("div", {
          className: el.buttonsContainer,
          children: (0, i.jsxs)("div", {
            className: el.primaryButtons,
            children: [!M || v || H ? N ? (0, i.jsx)(u.Button, {
              className: el.button,
              look: u.Button.Looks.FILLED,
              onClick: q,
              children: ei.Z.Messages.COLLECTIBLES_USE_NOW
            }) : A ? null : M ? (0, i.jsx)(u.Button, {
              className: el.button,
              look: u.Button.Looks.FILLED,
              submitting: O,
              submittingStartedLabel: ei.Z.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: ei.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, B.fK)(n.skuId), I(), (0, J.Z)({
                  product: n,
                  analyticsLocations: h
                })
              },
              children: ei.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, i.jsx)(u.Button, {
              className: el.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, S.Z)({
                skuId: n.skuId,
                analyticsLocations: h,
                onClose: e => e ? I() : (0, es.dG)()
              }),
              children: (0, k.x6)(n) ? ei.Z.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : n.type === o.Z.PROFILE_EFFECT ? ei.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : ei.Z.Messages.COLLECTIBLES_BUY_DECORATION
            }) : $(ei.Z.Messages.UNLOCK_WITH_NITRO), !M && !H && (0, i.jsx)(Y.Z, {
              product: n,
              onSuccess: I,
              disableCustomColor: !0
            })]
          })
        }), (0, i.jsx)(u.Text, {
          className: a()(el.disclaimer, !Z && el.disclaimerLight),
          variant: "text-xxs/normal",
          children: N ? null : M ? ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, k.x6)(n) ? ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : n.type === o.Z.PROFILE_EFFECT ? ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : ei.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ed = e => {
    let {
      product: t,
      user: s
    } = e, l = D.ZP.canUsePremiumProfileCustomization(s), n = (0, d.cj)([Z.Z], () => Z.Z.getAllPending()), a = (0, j.le)(s.id), r = t.type === o.Z.AVATAR_DECORATION, c = !!(null == a ? void 0 : a.getPreviewBio(n.pendingBio).value), [u] = t.items, {
      firstAvatarDecoration: E,
      firstProfileEffect: C
    } = (0, w.R)(t), m = null != C, {
      updatedOnAllSurfaces: L
    } = (0, P.t)({
      location: "CollectibleProductProfilePreview"
    });
    return (0, i.jsxs)("div", {
      className: (null == u ? void 0 : u.type) === o.Z.AVATAR_DECORATION ? el.previewsContainerInner : el.profileEffectPreviewsContainerInner,
      children: [(0, i.jsx)(A.Z, {
        ...n,
        location: "CollectiblesShopProductDetailsModal",
        user: s,
        canUsePremiumCustomization: l,
        onAvatarChange: es.dG,
        onBannerChange: es.dG,
        bodyClassName: el.profileCustomizationBody,
        pendingAvatarDecoration: E,
        pendingProfileEffectId: null == C ? void 0 : C.id,
        forProfileEffectModal: m,
        disabledInputs: !0,
        hideMessageInput: !m,
        hideExampleButton: !0,
        hideCustomStatus: !0,
        hideFakeActivity: r || c,
        hideBioSection: r && !L,
        hideMemberStatusSection: r,
        useLargeBanner: !0
      }), r && (0, i.jsx)(eu, {
        user: s
      })]
    })
  },
  ec = e => {
    let {
      author: t
    } = e;
    return (0, _.e5)({
      ...(0, h.ZP)({
        author: t,
        channelId: "1337",
        content: ei.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: ee.yb.SENT,
      id: "0"
    })
  },
  eu = e => {
    let {
      user: t
    } = e, s = ec({
      author: t
    });
    return (0, i.jsx)(u.FocusBlock, {
      children: (0, i.jsxs)(u.Card, {
        className: el.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, i.jsx)(N.Z, {
          className: el.mockMessage,
          author: (0, v.ZH)(s),
          message: s
        }, s.id), (0, i.jsxs)("div", {
          className: el.mockInput,
          children: [(0, i.jsx)(u.CirclePlusIcon, {
            size: "md",
            color: "currentColor",
            className: el.mockInputButton
          }), (0, i.jsx)(u.ReactionIcon, {
            size: "md",
            color: "currentColor",
            className: el.mockInputButton
          })]
        })]
      })
    })
  };
t.default = e => {
  var t, s;
  let {
    transitionState: n,
    onClose: a,
    product: r,
    category: c,
    returnRef: E,
    analyticsSource: C,
    analyticsLocations: m
  } = e, L = (0, d.e7)([M.default], () => M.default.getCurrentUser()), {
    analyticsLocations: T
  } = (0, x.ZP)([...m, I.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, V.u9)(r);
  let [_] = r.items;
  return (l.useEffect(() => {
    let e = (null == _ ? void 0 : _.type) === o.Z.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    R.default.track(ee.rMx.OPEN_MODAL, {
      type: ee.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: T,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(B.oK)
  }, [C, T, r.skuId, r.items, null == _ ? void 0 : _.type]), null == L) ? null : (0, i.jsx)(x.Gt, {
    value: T,
    children: (0, i.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: el.modalRoot,
      returnRef: E,
      transitionState: n,
      size: u.ModalSize.DYNAMIC,
      children: (0, i.jsxs)(u.ModalContent, {
        className: el.modalContent,
        children: [(0, i.jsx)(eo, {
          user: L,
          product: r,
          category: c,
          onClose: a
        }), (0, i.jsxs)("div", {
          className: r.type === o.Z.AVATAR_DECORATION ? el.collectiblePreviewsContainerWithChat : el.collectiblePreviewsContainerNoChat,
          children: [(0, i.jsx)(H.Z, {
            asset: null !== (s = c.pdpBg) && void 0 !== s ? s : r.banner,
            addGradient: null === (t = $.Ve[c.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, X.ML)(540),
            className: el.categoryBanner,
            blur: !0
          }), (0, i.jsx)(ed, {
            user: L,
            product: r
          }), (0, i.jsxs)("div", {
            className: el.profilePreviewHeader,
            children: [(0, i.jsx)("div", {
              className: el.titleImageContainer,
              children: (0, i.jsx)("img", {
                className: el.titleImage,
                src: (0, k.uV)(c.logo, {
                  size: W.n
                }),
                alt: c.name
              })
            }), (0, i.jsx)(u.ModalCloseButton, {
              onClick: a,
              className: el.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}