"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var n = s("735250"),
  r = s("470079"),
  a = s("120356"),
  l = s.n(a),
  i = s("392711"),
  o = s.n(i),
  d = s("442837"),
  u = s("481060"),
  c = s("37234"),
  p = s("194359"),
  h = s("265875"),
  S = s("700582"),
  f = s("479446"),
  E = s("590783"),
  P = s("699516"),
  A = s("246946"),
  _ = s("800599"),
  m = s("594174"),
  T = s("581874"),
  I = s("366695"),
  C = s("572004"),
  R = s("669079"),
  N = s("74538"),
  g = s("51144"),
  y = s("981631"),
  O = s("474936"),
  M = s("689938"),
  L = s("766996");

function x(e) {
  let {
    giftCode: t,
    application: s,
    sku: a,
    subscriptionPlan: i,
    selectedGiftStyle: o,
    onClose: c,
    hasSentMessage: p,
    giftRecipient: h,
    giftMessageError: f,
    isSendingMessage: P
  } = e, [_, m] = r.useState(T.default.Modes.DEFAULT), x = (0, d.useStateFromStores)([A.default], () => A.default.enabled), D = p || null != o && null != h, b = () => null != i ? i.skuId : null != a ? a.id : null, F = () => {
    let e;
    let t = null != o && O.SeasonalGiftStyles2023.includes(o);
    return null != f ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === O.SubscriptionIntervalTypes.MONTH ? D ? t ? M.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : D ? t ? M.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, N.getTierDisplayName)(i.id),
      intervalCount: i.intervalCount
    })
  }, v = (e, t) => {
    null != a && (0, R.trackGiftCodeCopy)(new E.default({
      code: t,
      maxUses: 1
    }), a);
    try {
      (0, C.copy)(e), m(T.default.Modes.SUCCESS)
    } catch (e) {
      m(T.default.Modes.ERROR)
    }
    setTimeout(() => {
      m(T.default.Modes.DEFAULT)
    }, 1500)
  }, j = () => {
    let e;
    if (null == t) return null;
    switch (_) {
      case T.default.Modes.SUCCESS:
        e = M.default.Messages.BILLING_GIFT_COPIED;
        break;
      case T.default.Modes.ERROR:
        e = M.default.Messages.FAILED;
        break;
      default:
        e = M.default.Messages.COPY
    }
    return (0, n.jsxs)("div", {
      className: L.giftCodeSection,
      children: [(0, n.jsx)(u.FormTitle, {
        children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != t && (0, n.jsx)(T.default, {
        hideMessage: x ? M.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, R.getGiftCodeURL)(t),
        mode: _,
        text: e,
        onCopy: e => v(e, t),
        supportsCopy: C.SUPPORTS_COPY,
        className: L.__invalid_copyInput,
        buttonColor: T.default.ButtonColors.LINK,
        buttonLook: T.default.ButtonLooks.LINK
      }), (0, n.jsx)("div", {
        className: L.subtext,
        children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (P) return (0, n.jsxs)("div", {
    className: L.confirmation,
    children: [null != s ? (0, n.jsx)(I.default, {
      game: s,
      className: L.__invalid_icon,
      size: I.default.Sizes.LARGE,
      skuId: b()
    }) : null, (0, n.jsx)(u.Spinner, {
      type: u.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let U = (null == a ? void 0 : a.productLine) === y.SKUProductLines.COLLECTIBLES;
  return (0, n.jsxs)("div", {
    className: L.confirmation,
    children: [null != s ? (0, n.jsx)(I.default, {
      game: s,
      className: L.__invalid_icon,
      size: I.default.Sizes.LARGE,
      skuId: b()
    }) : null, (0, n.jsx)(u.Heading, {
      variant: "heading-lg/semibold",
      className: l()({
        [L.header]: null == o && !U,
        [L.headerCustomGifting]: null != o && !U
      }),
      children: null != h || p && null == f ? M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != f ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), p && null != h && null == f || D ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(S.default, {
        user: h,
        className: L.giftRecipient,
        size: u.AvatarSizes.SIZE_80
      }), (0, n.jsx)(u.Heading, {
        className: L.giftRecipientName,
        variant: "heading-md/semibold",
        children: g.default.getName(h)
      }), (0, n.jsxs)("div", {
        className: L.giftRecipientTag,
        children: [" ", g.default.getUserTag(h)]
      }), (0, n.jsx)("div", {
        className: L.giftSentMessage,
        children: F()
      })]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: L.blurb,
        children: F()
      }), null == f && (0, n.jsx)(B, {
        giftCode: t,
        onClose: c
      }), (0, n.jsx)("div", {
        className: L.divider
      }), j()]
    })]
  })
}
let B = e => {
  let {
    giftCode: t,
    onClose: s
  } = e;
  r.useEffect(() => {
    p.default.fetchRelationships(), (0, h.fetchUserAffinities)()
  }, []);
  let [a, l] = r.useState(), [i, E] = r.useState(!1), [A, T] = r.useState(!1), {
    userAffinities: I,
    isLoading: C
  } = (0, d.useStateFromStoresObject)([_.default], () => ({
    userAffinities: _.default.getUserAffinitiesUserIds(),
    isLoading: _.default.getFetching()
  })), R = Array.from(I.values()), N = (0, d.useStateFromStores)([P.default], () => P.default.getFriendIDs()), y = o().difference(N, R), O = [...R, ...y], x = (0, d.useStateFromStores)([m.default], () => m.default.filter(e => O.includes(e.id) && !e.bot), [O]);
  if (null == x || 0 === x.length) return null;
  let B = o().sortBy(x, e => O.indexOf(e.id));
  return (0, n.jsxs)("div", {
    className: L.giftRecipientSection,
    children: [(0, n.jsx)(u.FormTitle, {
      children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, n.jsxs)("div", {
      className: L.giftRecipient,
      children: [(0, n.jsx)(u.SearchableSelect, {
        placeholder: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: L.giftRecipientInputWrapper,
        className: i ? L.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(S.default, {
          user: e.value,
          size: u.AvatarSizes.SIZE_20
        }),
        renderLeading: () => C ? (0, n.jsx)(u.Spinner, {
          type: u.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          l(e), E(!1)
        },
        options: B.map(e => ({
          value: e,
          label: "".concat(g.default.getUserTag(e))
        }))
      }), (0, n.jsx)(u.Button, {
        disabled: null == a,
        submitting: A,
        className: L.sendToRecipientButton,
        onClick: () => {
          T(!0), (0, f.sendGiftMessage)(a, t).then(() => {
            s(), (0, c.popAllLayers)()
          }).catch(() => {
            E(!0), T(!1)
          })
        },
        children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, n.jsx)("div", {
      className: i ? L.subtextError : L.subtext,
      children: i ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}