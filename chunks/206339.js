t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(481060),
  _ = t(570140),
  E = t(496929),
  u = t(37234),
  T = t(230711),
  S = t(410030),
  I = t(960359),
  N = t(730417),
  C = t(524347),
  m = t(454585),
  A = t(163684),
  O = t(178100),
  g = t(518638),
  h = t(725727),
  R = t(454982),
  p = t(197115),
  x = t(504983),
  M = t(703656),
  D = t(594174),
  f = t(580130),
  L = t(669079),
  P = t(74538),
  Z = t(695346),
  v = t(317941),
  b = t(622474),
  j = t(981631),
  U = t(474936),
  B = t(689938),
  G = t(612011);

function F(e) {
  let s, {
      outboundPromotion: t,
      code: i,
      addClaimedOutboundPromotionCode: o,
      disabled: l
    } = e,
    [c, _] = a.useState(!1),
    [E, u] = a.useState(!1),
    T = () => _(e => !e),
    I = (0, S.ZP)(),
    N = (0, g.Pz)(t.id, I),
    C = null != i,
    A = (0, O.Z)(t, C);
  C && c ? s = B.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: A,
    onClickDetails: T
  }) : C && !c ? s = B.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: A,
    onClickDetails: T
  }) : !C && c ? s = B.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: A,
    onClickDetails: T
  }) : !C && !c && (s = B.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: A,
    onClickDetails: T
  }));
  let h = C ? B.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : B.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
    p = a.useCallback(() => u(!1), []),
    {
      outboundTitle: x,
      outboundTermsAndConditions: M
    } = t;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: r()(G.skuCard, G.promotionCard),
      children: [(0, n.jsxs)("div", {
        className: G.mainPromotionCardContainer,
        children: [(0, n.jsxs)("div", {
          className: G.promotionCardLeftContainer,
          children: [(0, n.jsx)("div", {
            className: G.promotionIcon,
            children: (0, n.jsx)("img", {
              alt: "",
              src: N,
              className: G.promotionIconImage
            })
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              children: x
            }), (0, n.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: G.__invalid_promotionText,
              children: s
            })]
          })]
        }), (0, n.jsx)(d.Button, {
          className: G.promotionCardButton,
          color: d.Button.Colors.BRAND,
          size: d.Button.Sizes.SMALL,
          onClick: () => u(!0),
          disabled: !0 === l,
          children: h
        })]
      }), c && (0, n.jsx)(d.Text, {
        className: G.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: m.Z.parse(M, !1, {
          allowLinks: !0
        })
      })]
    }), E && (0, n.jsx)(d.Modal, {
      renderModal: e => (0, n.jsx)(R.Z, {
        ...e,
        onClose: p,
        onClaim: o,
        code: i,
        outboundPromotion: t
      }),
      onCloseRequest: p
    })]
  })
}
s.Z = function() {
  let e = (0, c.Wu)([f.Z], () => f.Z.getGiftable()),
    [s, t] = l().partition(e, e => {
      let {
        giftCodeBatchId: s
      } = e;
      return null == s
    }),
    i = (0, c.e7)([D.default], () => P.ZP.isPremium(D.default.getCurrentUser())),
    o = l().groupBy(s, e => (0, L.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [S, m] = a.useState(!1),
    O = (0, c.e7)([C.Z], () => C.Z.userStatus);
  a.useEffect(() => {
    _.Z.wait(() => {
      (0, E.Qv)().then(() => m(!0))
    })
  }, []);
  let g = (0, N.dy)();
  a.useEffect(() => {
    g && _.Z.wait(async () => {
      await (0, I.R5)()
    })
  }, [g]);
  let R = Z.bh.useSetting(),
    V = null != O || !g,
    {
      promotionsLoaded: y,
      activeOutboundPromotions: Y,
      claimedEndedOutboundPromotions: H,
      claimedOutboundPromotionCodeMap: k,
      addClaimedOutboundPromotionCode: w
    } = (0, h.lG)(),
    W = Y.length + H.length > 0,
    K = A.g.useExperiment({
      location: "EntitlementGifts"
    }, {
      autoTrackExposure: !i,
      disable: i
    }).enabled && W;

  function z() {
    T.Z.open(j.oAB.PREMIUM)
  }
  return S && y && V ? (0, n.jsxs)(n.Fragment, {
    children: [g ? (0, n.jsx)(b.Z, {
      dropsOptedOut: R,
      dropsStatuses: O
    }) : null, function() {
      var e;
      let s = t.find(e => e.giftCodeBatchId === U.m8 && !e.consumed),
        a = null !== (e = t.filter(e => e.giftCodeBatchId === U.rX && !e.consumed)) && void 0 !== e ? e : [],
        [o, c] = l().partition(a, e => {
          let {
            subscriptionPlanId: s
          } = e;
          return s === U.Xh.PREMIUM_YEAR_TIER_2
        }),
        _ = K ? (0, n.jsxs)("div", {
          className: G.promoHeaderContainer,
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              children: W ? B.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
            }), (0, n.jsx)(d.Heading, {
              variant: "text-sm/normal",
              className: G.promoDescription,
              children: B.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_GIFTS_DESCRIPTION.format({
                onClick: () => {
                  (0, u.xf)(), (0, M.uL)(j.Z5c.APPLICATION_STORE)
                }
              })
            })]
          }), (0, n.jsx)(p.Z, {
            showGradient: !0,
            className: G.promoNitroButton,
            subscriptionTier: U.Si.TIER_2,
            buttonText: B.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          })]
        }) : (0, n.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: W ? B.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
        });
      return (0, n.jsx)(x.Z, {
        className: G.containerWithMargin,
        isShown: K,
        type: x.Y.PREMIUM,
        hasBackground: !0,
        children: (0, n.jsxs)(d.FormSection, {
          className: r()({
            [G.containerWithMargin]: !K
          }),
          children: [_, W ? (0, n.jsx)(d.FormDivider, {
            className: G.divider
          }) : null, H.map(e => {
            let {
              code: s,
              promotion: t
            } = e;
            return (0, n.jsx)(F, {
              outboundPromotion: t,
              code: s,
              addClaimedOutboundPromotionCode: w,
              disabled: !i
            }, t.id)
          }), Y.map(e => (0, n.jsx)(F, {
            outboundPromotion: e,
            code: k[e.id],
            addClaimedOutboundPromotionCode: w,
            disabled: !i
          }, e.id)), null != s ? (0, n.jsx)(v.Z, {
            className: G.skuCard,
            skuId: s.skuId,
            subscriptionPlanId: s.subscriptionPlanId,
            entitlements: [s],
            giftCodeBatchId: U.m8
          }, (0, L.Bg)(s.skuId, s.subscriptionPlanId)) : null, o.length > 0 ? (0, n.jsx)(v.Z, {
            className: G.skuCard,
            skuId: o[0].skuId,
            subscriptionPlanId: o[0].subscriptionPlanId,
            entitlements: o,
            giftCodeBatchId: U.rX
          }, (0, L.Bg)(o[0].skuId, o[0].subscriptionPlanId)) : null, c.length > 0 ? (0, n.jsx)(v.Z, {
            className: G.skuCard,
            skuId: c[0].skuId,
            subscriptionPlanId: c[0].subscriptionPlanId,
            entitlements: c,
            giftCodeBatchId: U.rX
          }, (0, L.Bg)(c[0].skuId, c[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, n.jsx)(d.FormSection, {
      className: G.containerWithMargin,
      children: (0, n.jsxs)(d.HeadingLevel, {
        component: (0, n.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          children: B.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, n.jsx)(d.FormDivider, {
          className: G.divider
        }), 0 === Object.keys(o).length ? (0, n.jsxs)("div", {
          className: G.emptyState,
          children: [(0, n.jsx)("div", {
            className: G.emptyStateImage
          }), (0, n.jsx)(d.H, {
            className: G.emptyStateHeader,
            children: B.Z.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, n.jsx)("p", {
            className: G.emptyStateSubtext,
            children: B.Z.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: z
            })
          })]
        }) : l().keys(o).map(e => {
          let {
            skuId: s,
            subscriptionPlanId: t,
            giftStyle: a
          } = (0, L.Z0)(e);
          return (0, n.jsx)(v.Z, {
            className: G.skuCard,
            skuId: s,
            subscriptionPlanId: t,
            entitlements: o[e],
            giftStyle: a
          }, e)
        })]
      })
    })]
  }) : (0, n.jsx)(d.Spinner, {
    className: G.loading
  })
}