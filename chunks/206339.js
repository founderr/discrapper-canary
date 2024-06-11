"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("570140"),
  S = s("496929"),
  E = s("37234"),
  T = s("230711"),
  _ = s("410030"),
  I = s("960359"),
  N = s("730417"),
  g = s("524347"),
  f = s("454585"),
  m = s("163684"),
  A = s("178100"),
  C = s("518638"),
  O = s("725727"),
  h = s("454982"),
  R = s("197115"),
  p = s("504983"),
  M = s("703656"),
  D = s("594174"),
  x = s("580130"),
  L = s("669079"),
  P = s("74538"),
  b = s("695346"),
  v = s("317941"),
  U = s("622474"),
  j = s("981631"),
  G = s("474936"),
  F = s("689938"),
  B = s("193225");

function y(e) {
  let t, {
      outboundPromotion: s,
      code: i,
      addClaimedOutboundPromotionCode: r,
      disabled: o
    } = e,
    [d, c] = n.useState(!1),
    [S, E] = n.useState(!1),
    T = () => c(e => !e),
    I = (0, _.default)(),
    N = (0, C.getPromotionImageURL)(s.id, I),
    g = null != i,
    m = (0, A.default)(s, g);
  g && d ? t = F.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: m,
    onClickDetails: T
  }) : g && !d ? t = F.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: m,
    onClickDetails: T
  }) : !g && d ? t = F.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: m,
    onClickDetails: T
  }) : !g && !d && (t = F.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: m,
    onClickDetails: T
  }));
  let O = g ? F.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : F.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
    R = n.useCallback(() => E(!1), []),
    {
      outboundTitle: p,
      outboundTermsAndConditions: M
    } = s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l()(B.skuCard, B.promotionCard),
      children: [(0, a.jsxs)("div", {
        className: B.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: B.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: B.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: N,
              className: B.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: p
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: B.__invalid_promotionText,
              children: t
            })]
          })]
        }), (0, a.jsx)(u.Button, {
          className: B.promotionCardButton,
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.SMALL,
          onClick: () => E(!0),
          disabled: !0 === o,
          children: O
        })]
      }), d && (0, a.jsx)(u.Text, {
        className: B.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f.default.parse(M, !1, {
          allowLinks: !0
        })
      })]
    }), S && (0, a.jsx)(u.Modal, {
      renderModal: e => (0, a.jsx)(h.default, {
        ...e,
        onClose: R,
        onClaim: r,
        code: i,
        outboundPromotion: s
      }),
      onCloseRequest: R
    })]
  })
}
t.default = function() {
  let e = (0, d.useStateFromStoresArray)([x.default], () => x.default.getGiftable()),
    [t, s] = o().partition(e, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    i = (0, d.useStateFromStores)([D.default], () => P.default.isPremium(D.default.getCurrentUser())),
    r = o().groupBy(t, e => (0, L.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [_, f] = n.useState(!1),
    A = (0, d.useStateFromStores)([g.default], () => g.default.userStatus);
  n.useEffect(() => {
    c.default.wait(() => {
      (0, S.fetchGiftableEntitlements)().then(() => f(!0))
    })
  }, []);
  let C = (0, N.useAnyDropsEnabled)();
  n.useEffect(() => {
    C && c.default.wait(async () => {
      await (0, I.fetchDropsUserStatus)()
    })
  }, [C]);
  let h = b.DropsOptedOut.useSetting(),
    V = null != A || !C,
    {
      promotionsLoaded: H,
      activeOutboundPromotions: Y,
      claimedEndedOutboundPromotions: k,
      claimedOutboundPromotionCodeMap: w,
      addClaimedOutboundPromotionCode: W
    } = (0, O.useOutboundPromotions)(),
    K = Y.length + k.length > 0,
    Q = m.OutboundPromoDesktopUpsellExperiment.useExperiment({
      location: "EntitlementGifts"
    }, {
      autoTrackExposure: !0
    }).enabled && !i && K;

  function z() {
    T.default.open(j.UserSettingsSections.PREMIUM)
  }
  return _ && H && V ? (0, a.jsxs)(a.Fragment, {
    children: [C ? (0, a.jsx)(U.default, {
      dropsOptedOut: h,
      dropsStatuses: A
    }) : null, function() {
      var e;
      let t = s.find(e => e.giftCodeBatchId === G.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID && !e.consumed),
        n = null !== (e = s.filter(e => e.giftCodeBatchId === G.STICKERS_GIFT_CODE_BATCH_ID && !e.consumed)) && void 0 !== e ? e : [],
        [r, d] = o().partition(n, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === G.SubscriptionPlans.PREMIUM_YEAR_TIER_2
        }),
        c = Q ? (0, a.jsxs)("div", {
          className: B.promoHeaderContainer,
          children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: K ? F.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
            }), (0, a.jsx)(u.Heading, {
              variant: "text-sm/normal",
              className: B.promoDescription,
              children: F.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_GIFTS_DESCRIPTION.format({
                onClick: () => {
                  (0, E.popLayer)(), (0, M.transitionTo)(j.Routes.APPLICATION_STORE)
                }
              })
            })]
          }), (0, a.jsx)(R.default, {
            showGradient: !0,
            className: B.promoNitroButton,
            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
            buttonText: F.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          })]
        }) : (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: K ? F.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
        });
      return (0, a.jsx)(p.default, {
        className: B.containerWithMargin,
        isShown: Q,
        type: p.FeatureBorderTypes.PREMIUM,
        hasBackground: !0,
        children: (0, a.jsxs)(u.FormSection, {
          className: l()({
            [B.containerWithMargin]: !Q
          }),
          children: [c, K ? (0, a.jsx)(u.FormDivider, {
            className: B.divider
          }) : null, k.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, a.jsx)(y, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: W,
              disabled: !i
            }, s.id)
          }), Y.map(e => (0, a.jsx)(y, {
            outboundPromotion: e,
            code: w[e.id],
            addClaimedOutboundPromotionCode: W,
            disabled: !i
          }, e.id)), null != t ? (0, a.jsx)(v.default, {
            className: B.skuCard,
            skuId: t.skuId,
            subscriptionPlanId: t.subscriptionPlanId,
            entitlements: [t],
            giftCodeBatchId: G.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID
          }, (0, L.makeComboId)(t.skuId, t.subscriptionPlanId)) : null, r.length > 0 ? (0, a.jsx)(v.default, {
            className: B.skuCard,
            skuId: r[0].skuId,
            subscriptionPlanId: r[0].subscriptionPlanId,
            entitlements: r,
            giftCodeBatchId: G.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, L.makeComboId)(r[0].skuId, r[0].subscriptionPlanId)) : null, d.length > 0 ? (0, a.jsx)(v.default, {
            className: B.skuCard,
            skuId: d[0].skuId,
            subscriptionPlanId: d[0].subscriptionPlanId,
            entitlements: d,
            giftCodeBatchId: G.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, L.makeComboId)(d[0].skuId, d[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, a.jsx)(u.FormSection, {
      className: B.containerWithMargin,
      children: (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: F.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, a.jsx)(u.FormDivider, {
          className: B.divider
        }), 0 === Object.keys(r).length ? (0, a.jsxs)("div", {
          className: B.emptyState,
          children: [(0, a.jsx)("div", {
            className: B.emptyStateImage
          }), (0, a.jsx)(u.H, {
            className: B.emptyStateHeader,
            children: F.default.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, a.jsx)("p", {
            className: B.emptyStateSubtext,
            children: F.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: z
            })
          })]
        }) : o().keys(r).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: s,
            giftStyle: n
          } = (0, L.parseComboId)(e);
          return (0, a.jsx)(v.default, {
            className: B.skuCard,
            skuId: t,
            subscriptionPlanId: s,
            entitlements: r[e],
            giftStyle: n
          }, e)
        })]
      })
    })]
  }) : (0, a.jsx)(u.Spinner, {
    className: B.loading
  })
}