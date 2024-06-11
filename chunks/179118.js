"use strict";
t.r(s), t.d(s, {
  default: function() {
    return P
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  i = t("120356"),
  r = t.n(i),
  n = t("392711"),
  o = t.n(n),
  u = t("442837"),
  d = t("481060"),
  c = t("37234"),
  _ = t("194359"),
  m = t("265875"),
  I = t("700582"),
  f = t("479446"),
  C = t("590783"),
  E = t("699516"),
  T = t("246946"),
  N = t("800599"),
  p = t("594174"),
  S = t("366695"),
  A = t("572004"),
  L = t("669079"),
  R = t("74538"),
  x = t("51144"),
  g = t("981631"),
  M = t("474936"),
  h = t("689938"),
  O = t("766996");

function P(e) {
  let {
    giftCode: s,
    application: t,
    sku: i,
    subscriptionPlan: n,
    selectedGiftStyle: o,
    onClose: c,
    hasSentMessage: _,
    giftRecipient: m,
    giftMessageError: f,
    isSendingMessage: E
  } = e, [N, p] = l.useState(d.CopyInput.Modes.DEFAULT), P = (0, u.useStateFromStores)([T.default], () => T.default.enabled), U = _ || null != o && null != m, v = () => null != n ? n.skuId : null != i ? i.id : null, y = () => {
    let e;
    let s = null != o && M.SeasonalGiftStyles2023.includes(o);
    return null != f ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == n ? null : (e = n.interval === M.SubscriptionIntervalTypes.MONTH ? U ? s ? h.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : U ? s ? h.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, R.getTierDisplayName)(n.id),
      intervalCount: n.intervalCount
    })
  }, F = (e, s) => {
    null != i && (0, L.trackGiftCodeCopy)(new C.default({
      code: s,
      maxUses: 1
    }), i);
    try {
      (0, A.copy)(e), p(d.CopyInput.Modes.SUCCESS)
    } catch (e) {
      p(d.CopyInput.Modes.ERROR)
    }
    setTimeout(() => {
      p(d.CopyInput.Modes.DEFAULT)
    }, 1500)
  }, b = () => {
    let e;
    if (null == s) return null;
    switch (N) {
      case d.CopyInput.Modes.SUCCESS:
        e = h.default.Messages.BILLING_GIFT_COPIED;
        break;
      case d.CopyInput.Modes.ERROR:
        e = h.default.Messages.FAILED;
        break;
      default:
        e = h.default.Messages.COPY
    }
    return (0, a.jsxs)("div", {
      className: O.giftCodeSection,
      children: [(0, a.jsx)(d.FormTitle, {
        children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != s && (0, a.jsx)(d.CopyInput, {
        hideMessage: P ? h.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, L.getGiftCodeURL)(s),
        mode: N,
        text: e,
        onCopy: e => F(e, s),
        supportsCopy: A.SUPPORTS_COPY,
        className: O.__invalid_copyInput,
        buttonColor: d.ButtonColors.LINK,
        buttonLook: d.ButtonLooks.LINK
      }), (0, a.jsx)("div", {
        className: O.subtext,
        children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (E) return (0, a.jsxs)("div", {
    className: O.confirmation,
    children: [null != t ? (0, a.jsx)(S.default, {
      game: t,
      className: O.__invalid_icon,
      size: S.default.Sizes.LARGE,
      skuId: v()
    }) : null, (0, a.jsx)(d.Spinner, {
      type: d.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let G = (null == i ? void 0 : i.productLine) === g.SKUProductLines.COLLECTIBLES;
  return (0, a.jsxs)("div", {
    className: O.confirmation,
    children: [null != t ? (0, a.jsx)(S.default, {
      game: t,
      className: O.__invalid_icon,
      size: S.default.Sizes.LARGE,
      skuId: v()
    }) : null, (0, a.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      className: r()({
        [O.header]: null == o && !G,
        [O.headerCustomGifting]: null != o && !G
      }),
      children: null != m || _ && null == f ? h.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != f ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : h.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), _ && null != m && null == f || U ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.default, {
        user: m,
        className: O.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }), (0, a.jsx)(d.Heading, {
        className: O.giftRecipientName,
        variant: "heading-md/semibold",
        children: x.default.getName(m)
      }), (0, a.jsxs)("div", {
        className: O.giftRecipientTag,
        children: [" ", x.default.getUserTag(m)]
      }), (0, a.jsx)("div", {
        className: O.giftSentMessage,
        children: y()
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: O.blurb,
        children: y()
      }), null == f && (0, a.jsx)(j, {
        giftCode: s,
        onClose: c
      }), (0, a.jsx)("div", {
        className: O.divider
      }), b()]
    })]
  })
}
let j = e => {
  let {
    giftCode: s,
    onClose: t
  } = e;
  l.useEffect(() => {
    _.default.fetchRelationships(), (0, m.fetchUserAffinities)()
  }, []);
  let [i, r] = l.useState(), [n, C] = l.useState(!1), [T, S] = l.useState(!1), {
    userAffinities: A,
    isLoading: L
  } = (0, u.useStateFromStoresObject)([N.default], () => ({
    userAffinities: N.default.getUserAffinitiesUserIds(),
    isLoading: N.default.getFetching()
  })), R = Array.from(A.values()), g = (0, u.useStateFromStores)([E.default], () => E.default.getFriendIDs()), M = o().difference(g, R), P = [...R, ...M], j = (0, u.useStateFromStores)([p.default], () => p.default.filter(e => P.includes(e.id) && !e.bot), [P]);
  if (null == j || 0 === j.length) return null;
  let U = o().sortBy(j, e => P.indexOf(e.id));
  return (0, a.jsxs)("div", {
    className: O.giftRecipientSection,
    children: [(0, a.jsx)(d.FormTitle, {
      children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, a.jsxs)("div", {
      className: O.giftRecipient,
      children: [(0, a.jsx)(d.SearchableSelect, {
        placeholder: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: O.giftRecipientInputWrapper,
        className: n ? O.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(I.default, {
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
          label: "".concat(x.default.getUserTag(e))
        }))
      }), (0, a.jsx)(d.Button, {
        disabled: null == i,
        submitting: T,
        className: O.sendToRecipientButton,
        onClick: () => {
          S(!0), (0, f.sendGiftMessage)(i, s).then(() => {
            t(), (0, c.popAllLayers)()
          }).catch(() => {
            C(!0), S(!1)
          })
        },
        children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: n ? O.subtextError : O.subtext,
      children: n ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}