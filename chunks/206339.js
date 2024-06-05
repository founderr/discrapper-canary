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
  I = s("730417"),
  N = s("524347"),
  f = s("454585"),
  g = s("178100"),
  m = s("518638"),
  C = s("725727"),
  A = s("454982"),
  h = s("580130"),
  O = s("669079"),
  p = s("695346"),
  R = s("317941"),
  x = s("622474"),
  M = s("981631"),
  D = s("474936"),
  L = s("689938"),
  P = s("193225");

function b(e) {
  let t, {
      outboundPromotion: s,
      code: l,
      addClaimedOutboundPromotionCode: r
    } = e,
    [o, d] = n.useState(!1),
    [c, S] = n.useState(!1),
    E = () => d(e => !e),
    _ = (0, T.default)(),
    I = (0, m.getPromotionImageURL)(s.id, _),
    N = null != l,
    C = (0, g.default)(s, N);
  N && o ? t = L.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: C,
    onClickDetails: E
  }) : N && !o ? t = L.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: C,
    onClickDetails: E
  }) : !N && o ? t = L.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: C,
    onClickDetails: E
  }) : !N && !o && (t = L.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: C,
    onClickDetails: E
  }));
  let h = N ? L.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : L.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
    O = n.useCallback(() => S(!1), []),
    {
      outboundTitle: p,
      outboundTermsAndConditions: R
    } = s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(P.skuCard, P.promotionCard),
      children: [(0, a.jsxs)("div", {
        className: P.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: P.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: P.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: I,
              className: P.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: p
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: P.__invalid_promotionText,
              children: t
            })]
          })]
        }), (0, a.jsx)(u.Button, {
          className: P.promotionCardButton,
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.SMALL,
          onClick: () => S(!0),
          children: h
        })]
      }), o && (0, a.jsx)(u.Text, {
        className: P.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: f.default.parse(R, !1, {
          allowLinks: !0
        })
      })]
    }), c && (0, a.jsx)(u.Modal, {
      renderModal: e => (0, a.jsx)(A.default, {
        ...e,
        onClose: O,
        onClaim: r,
        code: l,
        outboundPromotion: s
      }),
      onCloseRequest: O
    })]
  })
}
t.default = function() {
  let e = (0, d.useStateFromStoresArray)([h.default], () => h.default.getGiftable()),
    [t, s] = o().partition(e, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    l = o().groupBy(t, e => (0, O.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [i, r] = n.useState(!1),
    T = (0, d.useStateFromStores)([N.default], () => N.default.userStatus);
  n.useEffect(() => {
    c.default.wait(() => {
      (0, S.fetchGiftableEntitlements)().then(() => r(!0))
    })
  }, []);
  let f = (0, I.useAnyDropsEnabled)();
  n.useEffect(() => {
    f && c.default.wait(async () => {
      await (0, _.fetchDropsUserStatus)()
    })
  }, [f]);
  let g = p.DropsOptedOut.useSetting(),
    m = null != T || !f,
    {
      promotionsLoaded: A,
      activeOutboundPromotions: v,
      claimedEndedOutboundPromotions: U,
      claimedOutboundPromotionCodeMap: j,
      addClaimedOutboundPromotionCode: G
    } = (0, C.useOutboundPromotions)();

  function F() {
    E.default.open(M.UserSettingsSections.PREMIUM)
  }
  return i && A && m ? (0, a.jsxs)(a.Fragment, {
    children: [f ? (0, a.jsx)(x.default, {
      dropsOptedOut: g,
      dropsStatuses: T
    }) : null, function() {
      var e;
      let t = s.find(e => e.giftCodeBatchId === D.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID && !e.consumed),
        n = null !== (e = s.filter(e => e.giftCodeBatchId === D.STICKERS_GIFT_CODE_BATCH_ID && !e.consumed)) && void 0 !== e ? e : [],
        [l, i] = o().partition(n, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === D.SubscriptionPlans.PREMIUM_YEAR_TIER_2
        }),
        r = v.length + U.length > 0;
      return (0, a.jsx)(u.FormSection, {
        children: (0, a.jsxs)(u.HeadingLevel, {
          component: (0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            children: r ? L.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
          }),
          children: [r ? (0, a.jsx)(u.FormDivider, {
            className: P.divider
          }) : null, U.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, a.jsx)(b, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: G
            }, s.id)
          }), v.map(e => (0, a.jsx)(b, {
            outboundPromotion: e,
            code: j[e.id],
            addClaimedOutboundPromotionCode: G
          }, e.id)), null != t ? (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: t.skuId,
            subscriptionPlanId: t.subscriptionPlanId,
            entitlements: [t],
            giftCodeBatchId: D.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID
          }, (0, O.makeComboId)(t.skuId, t.subscriptionPlanId)) : null, l.length > 0 ? (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: l[0].skuId,
            subscriptionPlanId: l[0].subscriptionPlanId,
            entitlements: l,
            giftCodeBatchId: D.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, O.makeComboId)(l[0].skuId, l[0].subscriptionPlanId)) : null, i.length > 0 ? (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: i[0].skuId,
            subscriptionPlanId: i[0].subscriptionPlanId,
            entitlements: i,
            giftCodeBatchId: D.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, O.makeComboId)(i[0].skuId, i[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, a.jsx)(u.FormSection, {
      children: (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: L.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, a.jsx)(u.FormDivider, {
          className: P.divider
        }), 0 === Object.keys(l).length ? (0, a.jsxs)("div", {
          className: P.emptyState,
          children: [(0, a.jsx)("div", {
            className: P.emptyStateImage
          }), (0, a.jsx)(u.H, {
            className: P.emptyStateHeader,
            children: L.default.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, a.jsx)("p", {
            className: P.emptyStateSubtext,
            children: L.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: F
            })
          })]
        }) : o().keys(l).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: s,
            giftStyle: n
          } = (0, O.parseComboId)(e);
          return (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: t,
            subscriptionPlanId: s,
            entitlements: l[e],
            giftStyle: n
          }, e)
        })]
      })
    })]
  }) : (0, a.jsx)(u.Spinner, {
    className: P.loading
  })
}