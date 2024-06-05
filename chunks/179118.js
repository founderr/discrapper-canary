"use strict";
t.r(s), t.d(s, {
  default: function() {
    return j
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  i = t("120356"),
  r = t.n(i),
  n = t("392711"),
  u = t.n(n),
  o = t("442837"),
  d = t("481060"),
  c = t("37234"),
  _ = t("194359"),
  m = t("265875"),
  f = t("700582"),
  I = t("479446"),
  C = t("590783"),
  E = t("699516"),
  T = t("246946"),
  N = t("800599"),
  S = t("594174"),
  p = t("581874"),
  A = t("366695"),
  L = t("572004"),
  R = t("669079"),
  x = t("74538"),
  g = t("51144"),
  M = t("981631"),
  h = t("474936"),
  O = t("689938"),
  P = t("766996");

function j(e) {
  let {
    giftCode: s,
    application: t,
    sku: i,
    subscriptionPlan: n,
    selectedGiftStyle: u,
    onClose: c,
    hasSentMessage: _,
    giftRecipient: m,
    giftMessageError: I,
    isSendingMessage: E
  } = e, [N, S] = l.useState(p.default.Modes.DEFAULT), j = (0, o.useStateFromStores)([T.default], () => T.default.enabled), v = _ || null != u && null != m, F = () => null != n ? n.skuId : null != i ? i.id : null, y = () => {
    let e;
    let s = null != u && h.SeasonalGiftStyles2023.includes(u);
    return null != I ? O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == n ? null : (e = n.interval === h.SubscriptionIntervalTypes.MONTH ? v ? s ? O.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : v ? s ? O.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, x.getTierDisplayName)(n.id),
      intervalCount: n.intervalCount
    })
  }, b = (e, s) => {
    null != i && (0, R.trackGiftCodeCopy)(new C.default({
      code: s,
      maxUses: 1
    }), i);
    try {
      (0, L.copy)(e), S(p.default.Modes.SUCCESS)
    } catch (e) {
      S(p.default.Modes.ERROR)
    }
    setTimeout(() => {
      S(p.default.Modes.DEFAULT)
    }, 1500)
  }, G = () => {
    let e;
    if (null == s) return null;
    switch (N) {
      case p.default.Modes.SUCCESS:
        e = O.default.Messages.BILLING_GIFT_COPIED;
        break;
      case p.default.Modes.ERROR:
        e = O.default.Messages.FAILED;
        break;
      default:
        e = O.default.Messages.COPY
    }
    return (0, a.jsxs)("div", {
      className: P.giftCodeSection,
      children: [(0, a.jsx)(d.FormTitle, {
        children: O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != s && (0, a.jsx)(p.default, {
        hideMessage: j ? O.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, R.getGiftCodeURL)(s),
        mode: N,
        text: e,
        onCopy: e => b(e, s),
        supportsCopy: L.SUPPORTS_COPY,
        className: P.__invalid_copyInput,
        buttonColor: p.default.ButtonColors.LINK,
        buttonLook: p.default.ButtonLooks.LINK
      }), (0, a.jsx)("div", {
        className: P.subtext,
        children: O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (E) return (0, a.jsxs)("div", {
    className: P.confirmation,
    children: [null != t ? (0, a.jsx)(A.default, {
      game: t,
      className: P.__invalid_icon,
      size: A.default.Sizes.LARGE,
      skuId: F()
    }) : null, (0, a.jsx)(d.Spinner, {
      type: d.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let D = (null == i ? void 0 : i.productLine) === M.SKUProductLines.COLLECTIBLES;
  return (0, a.jsxs)("div", {
    className: P.confirmation,
    children: [null != t ? (0, a.jsx)(A.default, {
      game: t,
      className: P.__invalid_icon,
      size: A.default.Sizes.LARGE,
      skuId: F()
    }) : null, (0, a.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      className: r()({
        [P.header]: null == u && !D,
        [P.headerCustomGifting]: null != u && !D
      }),
      children: null != m || _ && null == I ? O.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != I ? O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : O.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), _ && null != m && null == I || v ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.default, {
        user: m,
        className: P.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }), (0, a.jsx)(d.Heading, {
        className: P.giftRecipientName,
        variant: "heading-md/semibold",
        children: g.default.getName(m)
      }), (0, a.jsxs)("div", {
        className: P.giftRecipientTag,
        children: [" ", g.default.getUserTag(m)]
      }), (0, a.jsx)("div", {
        className: P.giftSentMessage,
        children: y()
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: P.blurb,
        children: y()
      }), null == I && (0, a.jsx)(U, {
        giftCode: s,
        onClose: c
      }), (0, a.jsx)("div", {
        className: P.divider
      }), G()]
    })]
  })
}
let U = e => {
  let {
    giftCode: s,
    onClose: t
  } = e;
  l.useEffect(() => {
    _.default.fetchRelationships(), (0, m.fetchUserAffinities)()
  }, []);
  let [i, r] = l.useState(), [n, C] = l.useState(!1), [T, p] = l.useState(!1), {
    userAffinities: A,
    isLoading: L
  } = (0, o.useStateFromStoresObject)([N.default], () => ({
    userAffinities: N.default.getUserAffinitiesUserIds(),
    isLoading: N.default.getFetching()
  })), R = Array.from(A.values()), x = (0, o.useStateFromStores)([E.default], () => E.default.getFriendIDs()), M = u().difference(x, R), h = [...R, ...M], j = (0, o.useStateFromStores)([S.default], () => S.default.filter(e => h.includes(e.id) && !e.bot), [h]);
  if (null == j || 0 === j.length) return null;
  let U = u().sortBy(j, e => h.indexOf(e.id));
  return (0, a.jsxs)("div", {
    className: P.giftRecipientSection,
    children: [(0, a.jsx)(d.FormTitle, {
      children: O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, a.jsxs)("div", {
      className: P.giftRecipient,
      children: [(0, a.jsx)(d.SearchableSelect, {
        placeholder: O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: P.giftRecipientInputWrapper,
        className: n ? P.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(f.default, {
          user: e.value,
          size: d.AvatarSizes.SIZE_20
        }),
        renderLeading: () => L ? (0, a.jsx)(d.Spinner, {
          type: d.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: i,
        onChange: e => {
          r(e), C(!1)
        },
        options: U.map(e => ({
          value: e,
          label: "".concat(g.default.getUserTag(e))
        }))
      }), (0, a.jsx)(d.Button, {
        disabled: null == i,
        submitting: T,
        className: P.sendToRecipientButton,
        onClick: () => {
          p(!0), (0, I.sendGiftMessage)(i, s).then(() => {
            t(), (0, c.popAllLayers)()
          }).catch(() => {
            C(!0), p(!1)
          })
        },
        children: O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: n ? P.subtextError : P.subtext,
      children: n ? O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : O.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}