t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  E = t(481060),
  d = t(570140),
  _ = t(496929),
  T = t(37234),
  S = t(230711),
  u = t(410030),
  I = t(960359),
  N = t(730417),
  A = t(524347),
  C = t(454585),
  O = t(163684),
  m = t(178100),
  h = t(518638),
  g = t(725727),
  R = t(454982),
  M = t(197115),
  x = t(504983),
  p = t(703656),
  D = t(594174),
  L = t(580130),
  P = t(669079),
  Z = t(74538),
  f = t(695346),
  j = t(317941),
  v = t(622474),
  U = t(981631),
  B = t(474936),
  b = t(689938),
  G = t(612011);

function F(e) {
  let s, {
      outboundPromotion: t,
      code: a,
      addClaimedOutboundPromotionCode: r,
      disabled: o
    } = e,
    [c, d] = i.useState(!1),
    [_, T] = i.useState(!1),
    S = () => d(e => !e),
    I = (0, u.ZP)(),
    N = (0, h.Pz)(t.id, I),
    A = null != a,
    O = (0, m.Z)(t, A);
  A && c ? s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: O,
    onClickDetails: S
  }) : A && !c ? s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: O,
    onClickDetails: S
  }) : !A && c ? s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: O,
    onClickDetails: S
  }) : !A && !c && (s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: O,
    onClickDetails: S
  }));
  let g = A ? b.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : b.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
    M = i.useCallback(() => T(!1), []),
    {
      outboundTitle: x,
      outboundTermsAndConditions: p
    } = t;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: l()(G.skuCard, G.promotionCard),
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
            children: [(0, n.jsx)(E.Heading, {
              variant: "heading-md/semibold",
              children: x
            }), (0, n.jsx)(E.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: G.__invalid_promotionText,
              children: s
            })]
          })]
        }), (0, n.jsx)(E.Button, {
          className: G.promotionCardButton,
          color: E.Button.Colors.BRAND,
          size: E.Button.Sizes.SMALL,
          onClick: () => T(!0),
          disabled: !0 === o,
          children: g
        })]
      }), c && (0, n.jsx)(E.Text, {
        className: G.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: C.Z.parse(p, !1, {
          allowLinks: !0
        })
      })]
    }), _ && (0, n.jsx)(E.Modal, {
      renderModal: e => (0, n.jsx)(R.Z, {
        ...e,
        onClose: M,
        onClaim: r,
        code: a,
        outboundPromotion: t
      }),
      onCloseRequest: M
    })]
  })
}
s.Z = function() {
  let e = (0, c.Wu)([L.Z], () => L.Z.getGiftable()),
    [s, t] = o().partition(e, e => {
      let {
        giftCodeBatchId: s
      } = e;
      return null == s
    }),
    a = (0, c.e7)([D.default], () => Z.ZP.isPremium(D.default.getCurrentUser())),
    r = o().groupBy(s, e => (0, P.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [u, C] = i.useState(!1),
    m = (0, c.e7)([A.Z], () => A.Z.userStatus);
  i.useEffect(() => {
    d.Z.wait(() => {
      (0, _.Qv)().then(() => C(!0))
    })
  }, []);
  let h = (0, N.dy)();
  i.useEffect(() => {
    h && d.Z.wait(async () => {
      await (0, I.R5)()
    })
  }, [h]);
  let R = f.bh.useSetting(),
    V = null != m || !h,
    {
      promotionsLoaded: y,
      activeOutboundPromotions: Y,
      claimedEndedOutboundPromotions: H,
      claimedOutboundPromotionCodeMap: k,
      addClaimedOutboundPromotionCode: w
    } = (0, g.lG)(),
    W = Y.length + H.length > 0,
    K = O.g.useExperiment({
      location: "EntitlementGifts"
    }, {
      autoTrackExposure: !a,
      disable: a
    }).enabled && W;

  function z() {
    S.Z.open(U.oAB.PREMIUM)
  }
  return u && y && V ? (0, n.jsxs)(n.Fragment, {
    children: [h ? (0, n.jsx)(v.Z, {
      dropsOptedOut: R,
      dropsStatuses: m
    }) : null, function() {
      var e;
      let s = t.find(e => e.giftCodeBatchId === B.m8 && !e.consumed),
        i = null !== (e = t.filter(e => e.giftCodeBatchId === B.rX && !e.consumed)) && void 0 !== e ? e : [],
        [r, c] = o().partition(i, e => {
          let {
            subscriptionPlanId: s
          } = e;
          return s === B.Xh.PREMIUM_YEAR_TIER_2
        }),
        d = K ? (0, n.jsxs)("div", {
          className: G.promoHeaderContainer,
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(E.Heading, {
              variant: "heading-md/semibold",
              children: W ? b.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
            }), (0, n.jsx)(E.Heading, {
              variant: "text-sm/normal",
              className: G.promoDescription,
              children: b.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_GIFTS_DESCRIPTION.format({
                onClick: () => {
                  (0, T.xf)(), (0, p.uL)(U.Z5c.APPLICATION_STORE)
                }
              })
            })]
          }), (0, n.jsx)(M.Z, {
            showGradient: !0,
            className: G.promoNitroButton,
            subscriptionTier: B.Si.TIER_2,
            buttonText: b.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          })]
        }) : (0, n.jsx)(E.Heading, {
          variant: "heading-md/semibold",
          children: W ? b.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
        });
      return (0, n.jsx)(x.Z, {
        className: G.containerWithMargin,
        isShown: K,
        type: x.Y.PREMIUM,
        hasBackground: !0,
        children: (0, n.jsxs)(E.FormSection, {
          className: l()({
            [G.containerWithMargin]: !K
          }),
          children: [d, W ? (0, n.jsx)(E.FormDivider, {
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
              disabled: !a
            }, t.id)
          }), Y.map(e => (0, n.jsx)(F, {
            outboundPromotion: e,
            code: k[e.id],
            addClaimedOutboundPromotionCode: w,
            disabled: !a
          }, e.id)), null != s ? (0, n.jsx)(j.Z, {
            className: G.skuCard,
            skuId: s.skuId,
            subscriptionPlanId: s.subscriptionPlanId,
            entitlements: [s],
            giftCodeBatchId: B.m8
          }, (0, P.Bg)(s.skuId, s.subscriptionPlanId)) : null, r.length > 0 ? (0, n.jsx)(j.Z, {
            className: G.skuCard,
            skuId: r[0].skuId,
            subscriptionPlanId: r[0].subscriptionPlanId,
            entitlements: r,
            giftCodeBatchId: B.rX
          }, (0, P.Bg)(r[0].skuId, r[0].subscriptionPlanId)) : null, c.length > 0 ? (0, n.jsx)(j.Z, {
            className: G.skuCard,
            skuId: c[0].skuId,
            subscriptionPlanId: c[0].subscriptionPlanId,
            entitlements: c,
            giftCodeBatchId: B.rX
          }, (0, P.Bg)(c[0].skuId, c[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, n.jsx)(E.FormSection, {
      className: G.containerWithMargin,
      children: (0, n.jsxs)(E.HeadingLevel, {
        component: (0, n.jsx)(E.Heading, {
          variant: "heading-md/semibold",
          children: b.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, n.jsx)(E.FormDivider, {
          className: G.divider
        }), 0 === Object.keys(r).length ? (0, n.jsxs)("div", {
          className: G.emptyState,
          children: [(0, n.jsx)("div", {
            className: G.emptyStateImage
          }), (0, n.jsx)(E.H, {
            className: G.emptyStateHeader,
            children: b.Z.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, n.jsx)("p", {
            className: G.emptyStateSubtext,
            children: b.Z.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: z
            })
          })]
        }) : o().keys(r).map(e => {
          let {
            skuId: s,
            subscriptionPlanId: t,
            giftStyle: i
          } = (0, P.Z0)(e);
          return (0, n.jsx)(j.Z, {
            className: G.skuCard,
            skuId: s,
            subscriptionPlanId: t,
            entitlements: r[e],
            giftStyle: i
          }, e)
        })]
      })
    })]
  }) : (0, n.jsx)(E.Spinner, {
    className: G.loading
  })
}