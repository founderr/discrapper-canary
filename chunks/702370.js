t.r(s), t(47120), t(627341);
var i = t(735250),
  l = t(470079),
  n = t(120356),
  a = t.n(n),
  r = t(278074),
  o = t(979554),
  d = t(399606),
  c = t(780384),
  u = t(481060),
  E = t(37234),
  C = t(809206),
  m = t(727637),
  L = t(410030),
  I = t(100527),
  x = t(906732),
  T = t(1585),
  _ = t(786761),
  h = t(3148),
  v = t(739566),
  N = t(753206),
  S = t(333867),
  O = t(197115),
  p = t(300284),
  A = t(25373),
  g = t(876917),
  j = t(642619),
  Z = t(25990),
  f = t(594174),
  P = t(626135),
  D = t(74538),
  M = t(335131),
  R = t(1870),
  B = t(884697),
  k = t(188584),
  b = t(724994),
  U = t(328456),
  F = t(390698),
  w = t(141011),
  y = t(426171),
  H = t(224068),
  V = t(813083),
  G = t(823941),
  z = t(680942),
  W = t(558060),
  Y = t(237031),
  K = t(372654),
  Q = t(616066),
  X = t(832149),
  q = t(215023),
  J = t(981631),
  $ = t(474936),
  ee = t(231338),
  es = t(689938),
  et = t(178215);
let ei = e => {
    let {
      item: s,
      user: t,
      isBundleItem: n = !1
    } = e, a = l.useRef(null), d = (0, m.Z)(a);
    return (0, r.EQ)(s.type).with(o.Z.AVATAR_DECORATION, () => (0, i.jsx)("div", {
      className: n ? et.bundleAvatarPreviewContainer : et.avatarPreviewContainer,
      children: (0, i.jsx)(Q.R, {
        user: t,
        item: s
      })
    })).with(o.Z.PROFILE_EFFECT, () => (0, i.jsx)("div", {
      className: n ? et.bundlePfxPreviewContainer : et.pfxPreviewContainer,
      ref: a,
      children: (0, i.jsx)(g.Z, {
        profileEffectId: s.id,
        isHovering: d,
        removeSetHeight: !0
      })
    })).otherwise(() => null)
  },
  el = e => {
    let {
      product: s,
      user: t
    } = e, [n, a] = l.useState(0);
    l.useEffect(() => {
      let e = setInterval(() => {
        s.items.length > 0 && a(e => (e + 1) % s.items.length)
      }, 5e3);
      return () => {
        clearInterval(e)
      }
    }, [s.skuId, s.items.length, t.id]);
    let r = s.items.length;
    return (0, i.jsx)("div", {
      className: et.bundlePreviewContainer,
      children: (0, i.jsx)(u.Slides, {
        activeSlide: String(n),
        children: s.items.map((e, l) => {
          let n = String(l),
            a = null != s.bundledProducts ? s.bundledProducts[l] : void 0,
            o = "(".concat(l + 1, "/").concat(r, ")");
          return (0, i.jsx)(u.Slide, {
            id: n,
            children: (0, i.jsxs)("div", {
              className: et.bundlePreviewSlide,
              children: [(0, i.jsx)(ei, {
                item: e,
                user: t,
                isBundleItem: !0
              }), (0, i.jsxs)(u.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: et.bundleSlideTitle,
                children: [null == a ? void 0 : a.name, " ", o]
              })]
            })
          }, n)
        })
      })
    })
  },
  en = e => {
    let {
      product: s,
      user: t
    } = e;
    return (0, B.x6)(s) ? (0, i.jsx)(el, {
      product: s,
      user: t
    }) : s.items.length > 0 ? (0, i.jsx)(ei, {
      item: s.items[0],
      user: t
    }) : null
  },
  ea = e => {
    var s, t;
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
    } = (0, b.L)(n), g = (0, d.e7)([R.Z], () => R.Z.isClaiming === n.skuId), Z = (0, p.Z)({
      analyticsLocations: h
    }), f = (0, L.ZP)(), P = (0, c.wj)(f), w = (0, B.G1)(n), y = (0, B.ql)(n, J.tuJ.DEFAULT), G = (null == y ? void 0 : y.amount) === 0, {
      firstAvatarDecoration: K,
      firstProfileEffect: Q
    } = (0, U.R)(n), q = l.useMemo(() => (0, B.BH)(n, v), [n, v]), ei = l.useCallback(() => {
      if (I(), (0, E.xf)(), Z(), null != K) {
        (0, T.ps)({
          initialSelectedDecoration: K,
          analyticsLocations: h
        });
        return
      }
      null != Q && (0, j.H)({
        initialSelectedEffectId: Q.id,
        analyticsLocations: h
      })
    }, [h, K, Q, I, Z]);
    l.useEffect(() => {
      if (null != K) return (0, C.cV)(K), () => (0, C.cV)(void 0)
    }, [K]);
    let el = e => (0, i.jsx)(O.Z, {
        subscriptionTier: $.Si.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: Y.v,
        onSubscribeModalClose: () => {
          (0, Y.T)({
            product: n,
            category: m,
            returnRef: _,
            analyticsLocations: h
          })
        }
      }),
      {
        firstAvatarDecoration: ea,
        firstProfileEffect: er
      } = (0, k.k)(n),
      eo = n.type === o.Z.BUNDLE ? es.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
        avatarDecorationName: null !== (s = null == ea ? void 0 : ea.name) && void 0 !== s ? s : "",
        profileEffectName: null !== (t = null == er ? void 0 : er.name) && void 0 !== t ? t : ""
      }) : n.summary;
    return (0, i.jsxs)("div", {
      className: et.collectibleInfoContainer,
      children: [(0, i.jsx)("div", {
        className: et.titleContainer,
        children: (0, i.jsx)(V.Z, {
          category: m,
          display: "modal"
        })
      }), (0, i.jsx)(en, {
        product: n,
        user: r
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: et.description,
          children: [(0, i.jsx)(H.Z, {
            product: n,
            isDarkText: !P
          }), (0, i.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: et.headingWithItemTypePill,
            children: n.name
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: eo
          }), N || A ? (0, i.jsx)(F.U, {
            className: et.priceTag,
            isPartiallyPurchased: A
          }) : w ? (0, i.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: et.priceTag,
            children: es.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
          }) : (0, i.jsx)(W.Z, {
            product: n,
            discount: q,
            isPremiumUser: v,
            className: v ? et.priceTag : et.priceTagContainer,
            nitroUpsell: !v
          })]
        }), (0, i.jsx)("div", {
          className: et.buttonsContainer,
          children: (0, i.jsxs)("div", {
            className: et.primaryButtons,
            children: [!w || v || G ? N ? (0, i.jsx)(u.Button, {
              className: et.button,
              look: u.Button.Looks.FILLED,
              onClick: ei,
              children: es.Z.Messages.COLLECTIBLES_USE_NOW
            }) : A ? null : w ? (0, i.jsx)(u.Button, {
              className: et.button,
              look: u.Button.Looks.FILLED,
              submitting: g,
              submittingStartedLabel: es.Z.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: es.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, M.fK)(n.skuId), I(), (0, X.Z)({
                  product: n,
                  analyticsLocations: h
                })
              },
              children: es.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, i.jsx)(u.Button, {
              className: et.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, S.Z)({
                skuId: n.skuId,
                analyticsLocations: h,
                onClose: e => e ? I() : (0, ee.dG)()
              }),
              children: (0, B.x6)(n) ? es.Z.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : n.type === o.Z.PROFILE_EFFECT ? es.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : es.Z.Messages.COLLECTIBLES_BUY_DECORATION
            }) : el(es.Z.Messages.UNLOCK_WITH_NITRO), !w && !G && (0, i.jsx)(z.Z, {
              product: n,
              onSuccess: I,
              disableCustomColor: !0
            })]
          })
        }), (0, i.jsx)(u.Text, {
          className: a()(et.disclaimer, !P && et.disclaimerLight),
          variant: "text-xxs/normal",
          children: N ? null : w ? es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, B.x6)(n) ? es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER : n.type === o.Z.PROFILE_EFFECT ? es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  er = e => {
    let {
      product: s,
      user: t
    } = e, l = D.ZP.canUsePremiumProfileCustomization(t), n = (0, d.cj)([Z.Z], () => Z.Z.getAllPending()), a = s.type === o.Z.AVATAR_DECORATION, [r] = s.items, {
      firstAvatarDecoration: c,
      firstProfileEffect: u
    } = (0, U.R)(s), E = null != u;
    return (0, i.jsxs)("div", {
      className: (null == r ? void 0 : r.type) === o.Z.AVATAR_DECORATION ? et.previewsContainerInner : et.profileEffectPreviewsContainerInner,
      children: [(0, i.jsx)(A.Z, {
        ...n,
        user: t,
        canUsePremiumCustomization: l,
        pendingAvatarDecoration: c,
        pendingProfileEffectId: null == u ? void 0 : u.id,
        disabledInputs: !0,
        hideMessageInput: !E,
        hideExampleButton: !0,
        hideCustomStatus: !0,
        hideBioSection: a
      }), a && (0, i.jsx)(ed, {
        user: t
      })]
    })
  },
  eo = e => {
    let {
      author: s
    } = e;
    return (0, _.e5)({
      ...(0, h.ZP)({
        author: s,
        channelId: "1337",
        content: es.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: J.yb.SENT,
      id: "0"
    })
  },
  ed = e => {
    let {
      user: s
    } = e, t = eo({
      author: s
    });
    return (0, i.jsx)(u.FocusBlock, {
      children: (0, i.jsxs)(u.Card, {
        className: et.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, i.jsx)(N.Z, {
          className: et.mockMessage,
          author: (0, v.ZH)(t),
          message: t
        }, t.id), (0, i.jsxs)("div", {
          className: et.mockInput,
          children: [(0, i.jsx)(u.CirclePlusIcon, {
            size: "md",
            color: "currentColor",
            className: et.mockInputButton
          }), (0, i.jsx)(u.ReactionIcon, {
            size: "md",
            color: "currentColor",
            className: et.mockInputButton
          })]
        })]
      })
    })
  };
s.default = e => {
  var s, t;
  let {
    transitionState: n,
    onClose: a,
    product: r,
    category: c,
    returnRef: E,
    analyticsSource: C,
    analyticsLocations: m
  } = e, L = (0, d.e7)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: T
  } = (0, x.ZP)([...m, I.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, y.u9)(r);
  let [_] = r.items;
  return (l.useEffect(() => {
    let e = (null == _ ? void 0 : _.type) === o.Z.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    P.default.track(J.rMx.OPEN_MODAL, {
      type: J.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: T,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(M.oK)
  }, [C, T, r.skuId, r.items, null == _ ? void 0 : _.type]), null == L) ? null : (0, i.jsx)(x.Gt, {
    value: T,
    children: (0, i.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: et.modalRoot,
      returnRef: E,
      transitionState: n,
      size: u.ModalSize.DYNAMIC,
      children: (0, i.jsxs)(u.ModalContent, {
        className: et.modalContent,
        children: [(0, i.jsx)(ea, {
          user: L,
          product: r,
          category: c,
          onClose: a
        }), (0, i.jsxs)("div", {
          className: r.type === o.Z.AVATAR_DECORATION ? et.collectiblePreviewsContainerWithChat : et.collectiblePreviewsContainerNoChat,
          children: [(0, i.jsx)(w.Z, {
            asset: null !== (t = c.pdpBg) && void 0 !== t ? t : r.banner,
            addGradient: null === (s = q.Ve[c.skuId]) || void 0 === s ? void 0 : s.addGradient,
            size: (0, K.ML)(540),
            className: et.categoryBanner,
            blur: !0
          }), (0, i.jsx)(er, {
            user: L,
            product: r
          }), (0, i.jsxs)("div", {
            className: et.profilePreviewHeader,
            children: [(0, i.jsx)("div", {
              className: et.titleImageContainer,
              children: (0, i.jsx)("img", {
                className: et.titleImage,
                src: (0, B.uV)(c.logo, {
                  size: G.n
                }),
                alt: c.name
              })
            }), (0, i.jsx)(u.ModalCloseButton, {
              onClick: a,
              className: et.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}