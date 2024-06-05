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
  f = s("524347"),
  m = s("454585"),
  N = s("178100"),
  g = s("518638"),
  h = s("725727"),
  C = s("454982"),
  O = s("580130"),
  A = s("669079"),
  p = s("695346"),
  R = s("317941"),
  x = s("622474"),
  M = s("981631"),
  D = s("689938"),
  L = s("193225");

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
    I = (0, g.getPromotionImageURL)(s.id, _),
    f = null != l,
    h = (0, N.default)(s, f);
  f && o ? t = D.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : f && !o ? t = D.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : !f && o ? t = D.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }) : !f && !o && (t = D.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: h,
    onClickDetails: E
  }));
  let O = f ? D.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : D.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
    A = n.useCallback(() => S(!1), []),
    {
      outboundTitle: p,
      outboundTermsAndConditions: R
    } = s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(L.skuCard, L.promotionCard),
      children: [(0, a.jsxs)("div", {
        className: L.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: L.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: L.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: I,
              className: L.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: p
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: L.__invalid_promotionText,
              children: t
            })]
          })]
        }), (0, a.jsx)(u.Button, {
          className: L.promotionCardButton,
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.SMALL,
          onClick: () => S(!0),
          children: O
        })]
      }), o && (0, a.jsx)(u.Text, {
        className: L.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: m.default.parse(R, !1, {
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
    [t] = o().partition(e, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    s = o().groupBy(t, e => (0, A.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [l, i] = n.useState(!1),
    r = (0, d.useStateFromStores)([f.default], () => f.default.userStatus);
  n.useEffect(() => {
    c.default.wait(() => {
      (0, S.fetchGiftableEntitlements)().then(() => i(!0))
    })
  }, []);
  let T = (0, I.useAnyDropsEnabled)();
  n.useEffect(() => {
    T && c.default.wait(async () => {
      await (0, _.fetchDropsUserStatus)()
    })
  }, [T]);
  let m = p.DropsOptedOut.useSetting(),
    N = null != r || !T,
    {
      promotionsLoaded: g,
      activeOutboundPromotions: C,
      claimedEndedOutboundPromotions: v,
      claimedOutboundPromotionCodeMap: b,
      addClaimedOutboundPromotionCode: U
    } = (0, h.useOutboundPromotions)();

  function j() {
    E.default.open(M.UserSettingsSections.PREMIUM)
  }
  return l && g && N ? (0, a.jsxs)(a.Fragment, {
    children: [T ? (0, a.jsx)(x.default, {
      dropsOptedOut: m,
      dropsStatuses: r
    }) : null, function() {
      let e = C.length + v.length > 0;
      return (0, a.jsx)(u.FormSection, {
        children: (0, a.jsxs)(u.HeadingLevel, {
          component: (0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            children: e ? D.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
          }),
          children: [e ? (0, a.jsx)(u.FormDivider, {
            className: L.divider
          }) : null, v.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, a.jsx)(P, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: U
            }, s.id)
          }), C.map(e => (0, a.jsx)(P, {
            outboundPromotion: e,
            code: b[e.id],
            addClaimedOutboundPromotionCode: U
          }, e.id))]
        })
      })
    }(), (0, a.jsx)(u.FormSection, {
      children: (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: D.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, a.jsx)(u.FormDivider, {
          className: L.divider
        }), 0 === Object.keys(s).length ? (0, a.jsxs)("div", {
          className: L.emptyState,
          children: [(0, a.jsx)("div", {
            className: L.emptyStateImage
          }), (0, a.jsx)(u.H, {
            className: L.emptyStateHeader,
            children: D.default.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, a.jsx)("p", {
            className: L.emptyStateSubtext,
            children: D.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: j
            })
          })]
        }) : o().keys(s).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: l
          } = (0, A.parseComboId)(e);
          return (0, a.jsx)(R.default, {
            className: L.skuCard,
            skuId: t,
            subscriptionPlanId: n,
            entitlements: s[e],
            giftStyle: l
          }, e)
        })]
      })
    })]
  }) : (0, a.jsx)(u.Spinner, {
    className: L.loading
  })
}