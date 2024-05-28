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
  I = s("454585"),
  g = s("178100"),
  N = s("518638"),
  h = s("725727"),
  C = s("454982"),
  O = s("580130"),
  A = s("669079"),
  p = s("695346"),
  R = s("317941"),
  x = s("622474"),
  M = s("981631"),
  L = s("474936"),
  D = s("689938"),
  P = s("193225");

function v(e) {
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
    h = (0, g.default)(s, m);
  m && o ? t = D.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : m && !o ? t = D.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : !m && o ? t = D.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : !m && !o && (t = D.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }));
  let O = m ? D.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : D.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
    A = n.useCallback(() => S(!1), []),
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
              src: f,
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
          children: O
        })]
      }), o && (0, a.jsx)(u.Text, {
        className: P.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: I.default.parse(R, !1, {
          allowLinks: !0
        })
      })]
    }), c && (0, a.jsx)(u.Modal, {
      renderModal: e => (0, a.jsx)(C.default, {
        ...e,
        onClose: A,
        onClaim: r,
        code: l,
        outboundPromotion: s
      }),
      onCloseRequest: A
    })]
  })
}
t.default = function() {
  let e = (0, d.useStateFromStoresArray)([O.default], () => O.default.getGiftable()),
    [t, s] = o().partition(e, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    l = o().groupBy(t, e => (0, A.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [i, r] = n.useState(!1),
    T = (0, d.useStateFromStores)([m.default], () => m.default.userStatus);
  n.useEffect(() => {
    c.default.wait(() => {
      (0, S.fetchGiftableEntitlements)().then(() => r(!0))
    })
  }, []);
  let I = (0, f.useAnyDropsEnabled)();
  n.useEffect(() => {
    I && c.default.wait(async () => {
      await (0, _.fetchDropsUserStatus)()
    })
  }, [I]);
  let g = p.DropsOptedOut.useSetting(),
    N = null != T || !I,
    {
      promotionsLoaded: C,
      activeOutboundPromotions: b,
      claimedEndedOutboundPromotions: j,
      claimedOutboundPromotionCodeMap: U,
      addClaimedOutboundPromotionCode: G
    } = (0, h.useOutboundPromotions)();

  function F() {
    E.default.open(M.UserSettingsSections.PREMIUM)
  }
  return i && C && N ? (0, a.jsxs)(a.Fragment, {
    children: [I ? (0, a.jsx)(x.default, {
      dropsOptedOut: g,
      dropsStatuses: T
    }) : null, function() {
      var e;
      let t = s.find(e => e.giftCodeBatchId === L.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID && !e.consumed),
        n = null !== (e = s.filter(e => e.giftCodeBatchId === L.STICKERS_GIFT_CODE_BATCH_ID && !e.consumed)) && void 0 !== e ? e : [],
        [l, i] = o().partition(n, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === L.SubscriptionPlans.PREMIUM_YEAR_TIER_2
        }),
        r = b.length + j.length > 0;
      return (0, a.jsx)(u.FormSection, {
        children: (0, a.jsxs)(u.HeadingLevel, {
          component: (0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            children: r ? D.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
          }),
          children: [r ? (0, a.jsx)(u.FormDivider, {
            className: P.divider
          }) : null, j.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, a.jsx)(v, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: G
            }, s.id)
          }), b.map(e => (0, a.jsx)(v, {
            outboundPromotion: e,
            code: U[e.id],
            addClaimedOutboundPromotionCode: G
          }, e.id)), null != t ? (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: t.skuId,
            subscriptionPlanId: t.subscriptionPlanId,
            entitlements: [t],
            giftCodeBatchId: L.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID
          }, (0, A.makeComboId)(t.skuId, t.subscriptionPlanId)) : null, l.length > 0 ? (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: l[0].skuId,
            subscriptionPlanId: l[0].subscriptionPlanId,
            entitlements: l,
            giftCodeBatchId: L.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, A.makeComboId)(l[0].skuId, l[0].subscriptionPlanId)) : null, i.length > 0 ? (0, a.jsx)(R.default, {
            className: P.skuCard,
            skuId: i[0].skuId,
            subscriptionPlanId: i[0].subscriptionPlanId,
            entitlements: i,
            giftCodeBatchId: L.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, A.makeComboId)(i[0].skuId, i[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, a.jsx)(u.FormSection, {
      children: (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: D.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, a.jsx)(u.FormDivider, {
          className: P.divider
        }), 0 === Object.keys(l).length ? (0, a.jsxs)("div", {
          className: P.emptyState,
          children: [(0, a.jsx)("div", {
            className: P.emptyStateImage
          }), (0, a.jsx)(u.H, {
            className: P.emptyStateHeader,
            children: D.default.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, a.jsx)("p", {
            className: P.emptyStateSubtext,
            children: D.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: F
            })
          })]
        }) : o().keys(l).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: s,
            giftStyle: n
          } = (0, A.parseComboId)(e);
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