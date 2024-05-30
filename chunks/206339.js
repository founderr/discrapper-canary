"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("570140"),
  S = s("496929"),
  E = s("230711"),
  T = s("410030"),
  _ = s("960359"),
  f = s("730417"),
  m = s("524347"),
  g = s("454585"),
  I = s("178100"),
  N = s("518638"),
  h = s("725727"),
  C = s("454982"),
  A = s("580130"),
  p = s("669079"),
  O = s("695346"),
  R = s("317941"),
  x = s("622474"),
  M = s("981631"),
  v = s("474936"),
  L = s("689938"),
  D = s("193225");

function P(e) {
  let t, {
      outboundPromotion: s,
      code: l,
      addClaimedOutboundPromotionCode: r
    } = e,
    [o, d] = n.useState(!1),
    [c, S] = n.useState(!1),
    E = () => d(e => !e),
    _ = (0, T.default)(),
    f = (0, N.getPromotionImageURL)(s.id, _),
    m = null != l,
    h = (0, I.default)(s, m);
  m && o ? t = L.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : m && !o ? t = L.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : !m && o ? t = L.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : !m && !o && (t = L.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }));
  let A = m ? L.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : L.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
    p = n.useCallback(() => S(!1), []),
    {
      outboundTitle: O,
      outboundTermsAndConditions: R
    } = s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(D.skuCard, D.promotionCard),
      children: [(0, a.jsxs)("div", {
        className: D.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: D.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: D.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: f,
              className: D.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: O
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: D.__invalid_promotionText,
              children: t
            })]
          })]
        }), (0, a.jsx)(u.Button, {
          className: D.promotionCardButton,
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.SMALL,
          onClick: () => S(!0),
          children: A
        })]
      }), o && (0, a.jsx)(u.Text, {
        className: D.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: g.default.parse(R, !1, {
          allowLinks: !0
        })
      })]
    }), c && (0, a.jsx)(u.Modal, {
      renderModal: e => (0, a.jsx)(C.default, {
        ...e,
        onClose: p,
        onClaim: r,
        code: l,
        outboundPromotion: s
      }),
      onCloseRequest: p
    })]
  })
}
t.default = function() {
  let e = (0, d.useStateFromStoresArray)([A.default], () => A.default.getGiftable()),
    [t, s] = o().partition(e, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    l = o().groupBy(t, e => (0, p.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [i, r] = n.useState(!1),
    T = (0, d.useStateFromStores)([m.default], () => m.default.userStatus);
  n.useEffect(() => {
    c.default.wait(() => {
      (0, S.fetchGiftableEntitlements)().then(() => r(!0))
    })
  }, []);
  let g = (0, f.useAnyDropsEnabled)();
  n.useEffect(() => {
    g && c.default.wait(async () => {
      await (0, _.fetchDropsUserStatus)()
    })
  }, [g]);
  let I = O.DropsOptedOut.useSetting(),
    N = null != T || !g,
    {
      promotionsLoaded: C,
      activeOutboundPromotions: b,
      claimedEndedOutboundPromotions: j,
      claimedOutboundPromotionCodeMap: U,
      addClaimedOutboundPromotionCode: y
    } = (0, h.useOutboundPromotions)();

  function G() {
    E.default.open(M.UserSettingsSections.PREMIUM)
  }
  return i && C && N ? (0, a.jsxs)(a.Fragment, {
    children: [g ? (0, a.jsx)(x.default, {
      dropsOptedOut: I,
      dropsStatuses: T
    }) : null, function() {
      var e;
      let t = s.find(e => e.giftCodeBatchId === v.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID && !e.consumed),
        n = null !== (e = s.filter(e => e.giftCodeBatchId === v.STICKERS_GIFT_CODE_BATCH_ID && !e.consumed)) && void 0 !== e ? e : [],
        [l, i] = o().partition(n, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === v.SubscriptionPlans.PREMIUM_YEAR_TIER_2
        }),
        r = b.length + j.length > 0;
      return (0, a.jsx)(u.FormSection, {
        children: (0, a.jsxs)(u.HeadingLevel, {
          component: (0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            children: r ? L.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
          }),
          children: [r ? (0, a.jsx)(u.FormDivider, {
            className: D.divider
          }) : null, j.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, a.jsx)(P, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: y
            }, s.id)
          }), b.map(e => (0, a.jsx)(P, {
            outboundPromotion: e,
            code: U[e.id],
            addClaimedOutboundPromotionCode: y
          }, e.id)), null != t ? (0, a.jsx)(R.default, {
            className: D.skuCard,
            skuId: t.skuId,
            subscriptionPlanId: t.subscriptionPlanId,
            entitlements: [t],
            giftCodeBatchId: v.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID
          }, (0, p.makeComboId)(t.skuId, t.subscriptionPlanId)) : null, l.length > 0 ? (0, a.jsx)(R.default, {
            className: D.skuCard,
            skuId: l[0].skuId,
            subscriptionPlanId: l[0].subscriptionPlanId,
            entitlements: l,
            giftCodeBatchId: v.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, p.makeComboId)(l[0].skuId, l[0].subscriptionPlanId)) : null, i.length > 0 ? (0, a.jsx)(R.default, {
            className: D.skuCard,
            skuId: i[0].skuId,
            subscriptionPlanId: i[0].subscriptionPlanId,
            entitlements: i,
            giftCodeBatchId: v.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, p.makeComboId)(i[0].skuId, i[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, a.jsx)(u.FormSection, {
      children: (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: L.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, a.jsx)(u.FormDivider, {
          className: D.divider
        }), 0 === Object.keys(l).length ? (0, a.jsxs)("div", {
          className: D.emptyState,
          children: [(0, a.jsx)("div", {
            className: D.emptyStateImage
          }), (0, a.jsx)(u.H, {
            className: D.emptyStateHeader,
            children: L.default.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, a.jsx)("p", {
            className: D.emptyStateSubtext,
            children: L.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: G
            })
          })]
        }) : o().keys(l).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: s,
            giftStyle: n
          } = (0, p.parseComboId)(e);
          return (0, a.jsx)(R.default, {
            className: D.skuCard,
            skuId: t,
            subscriptionPlanId: s,
            entitlements: l[e],
            giftStyle: n
          }, e)
        })]
      })
    })]
  }) : (0, a.jsx)(u.Spinner, {
    className: D.loading
  })
}