"use strict";
t.d(s, {
  Z: function() {
    return Z
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  l = t.n(r),
  i = t(392711),
  o = t.n(i),
  c = t(442837),
  u = t(481060),
  d = t(37234),
  C = t(194359),
  E = t(700582),
  f = t(479446),
  m = t(93127),
  p = t(814443),
  g = t(590783),
  h = t(699516),
  I = t(246946),
  _ = t(594174),
  x = t(366695),
  T = t(572004),
  N = t(669079),
  S = t(74538),
  L = t(51144),
  b = t(981631),
  v = t(474936),
  O = t(689938),
  A = t(557357);

function Z(e) {
  let {
    giftCode: s,
    application: t,
    sku: r,
    subscriptionPlan: i,
    selectedGiftStyle: o,
    onClose: d,
    hasSentMessage: C,
    giftRecipient: f,
    giftMessageError: m,
    isSendingMessage: p
  } = e, [h, _] = a.useState(u.CopyInput.Modes.DEFAULT), Z = (0, c.e7)([I.Z], () => I.Z.enabled), j = C || null != o && null != f, P = () => null != i ? i.skuId : null != r ? r.id : null, M = () => {
    let e;
    let s = null != o && v.V4.includes(o);
    return null != m ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === v.rV.MONTH ? j ? s ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : j ? s ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, S.aq)(i.id),
      intervalCount: i.intervalCount
    })
  }, k = (e, s) => {
    null != r && (0, N.dM)(new g.Z({
      code: s,
      maxUses: 1
    }), r);
    try {
      (0, T.JG)(e), _(u.CopyInput.Modes.SUCCESS)
    } catch (e) {
      _(u.CopyInput.Modes.ERROR)
    }
    setTimeout(() => {
      _(u.CopyInput.Modes.DEFAULT)
    }, 1500)
  }, B = () => {
    let e;
    if (null == s) return null;
    switch (h) {
      case u.CopyInput.Modes.SUCCESS:
        e = O.Z.Messages.BILLING_GIFT_COPIED;
        break;
      case u.CopyInput.Modes.ERROR:
        e = O.Z.Messages.FAILED;
        break;
      default:
        e = O.Z.Messages.COPY
    }
    return (0, n.jsxs)("div", {
      className: A.giftCodeSection,
      children: [(0, n.jsx)(u.FormTitle, {
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != s && (0, n.jsx)(u.CopyInput, {
        hideMessage: Z ? O.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, N.Nz)(s),
        mode: h,
        text: e,
        onCopy: e => k(e, s),
        supportsCopy: T.wS,
        className: A.__invalid_copyInput,
        buttonColor: u.ButtonColors.LINK,
        buttonLook: u.ButtonLooks.LINK
      }), (0, n.jsx)("div", {
        className: A.subtext,
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (p) return (0, n.jsxs)("div", {
    className: A.confirmation,
    children: [null != t ? (0, n.jsx)(x.Z, {
      game: t,
      className: A.__invalid_icon,
      size: x.Z.Sizes.LARGE,
      skuId: P()
    }) : null, (0, n.jsx)(u.Spinner, {
      type: u.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let y = (null == r ? void 0 : r.productLine) === b.POd.COLLECTIBLES;
  return (0, n.jsxs)("div", {
    className: A.confirmation,
    children: [null != t ? (0, n.jsx)(x.Z, {
      game: t,
      className: A.__invalid_icon,
      size: x.Z.Sizes.LARGE,
      skuId: P()
    }) : null, (0, n.jsx)(u.Heading, {
      variant: "heading-lg/semibold",
      className: l()({
        [A.header]: null == o && !y,
        [A.headerCustomGifting]: null != o && !y
      }),
      children: null != f || C && null == m ? O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != m ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), C && null != f && null == m || j ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(E.Z, {
        user: f,
        className: A.giftRecipient,
        size: u.AvatarSizes.SIZE_80
      }), (0, n.jsx)(u.Heading, {
        className: A.giftRecipientName,
        variant: "heading-md/semibold",
        children: L.ZP.getName(f)
      }), (0, n.jsxs)("div", {
        className: A.giftRecipientTag,
        children: [" ", L.ZP.getUserTag(f)]
      }), (0, n.jsx)("div", {
        className: A.giftSentMessage,
        children: M()
      })]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: A.blurb,
        children: M()
      }), null == m && (0, n.jsx)(R, {
        giftCode: s,
        onClose: d
      }), (0, n.jsx)("div", {
        className: A.divider
      }), B()]
    })]
  })
}
let R = e => {
  let {
    giftCode: s,
    onClose: t
  } = e;
  a.useEffect(() => {
    C.Z.fetchRelationships(), (0, m.W)()
  }, []);
  let [r, l] = a.useState(), [i, g] = a.useState(!1), [I, x] = a.useState(!1), {
    userAffinities: T,
    isLoading: N
  } = (0, c.cj)([p.Z], () => ({
    userAffinities: p.Z.getUserAffinitiesUserIds(),
    isLoading: p.Z.getFetching()
  })), S = Array.from(T.values()), b = (0, c.e7)([h.Z], () => h.Z.getFriendIDs()), v = o().difference(b, S), Z = [...S, ...v], R = (0, c.e7)([_.default], () => _.default.filter(e => Z.includes(e.id) && !e.bot), [Z]);
  if (null == R || 0 === R.length) return null;
  let j = o().sortBy(R, e => Z.indexOf(e.id));
  return (0, n.jsxs)("div", {
    className: A.giftRecipientSection,
    children: [(0, n.jsx)(u.FormTitle, {
      children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, n.jsxs)("div", {
      className: A.giftRecipient,
      children: [(0, n.jsx)(u.SearchableSelect, {
        placeholder: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: A.giftRecipientInputWrapper,
        className: i ? A.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(E.Z, {
          user: e.value,
          size: u.AvatarSizes.SIZE_20
        }),
        renderLeading: () => N ? (0, n.jsx)(u.Spinner, {
          type: u.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: r,
        onChange: e => {
          l(e), g(!1)
        },
        options: j.map(e => ({
          value: e,
          label: "".concat(L.ZP.getUserTag(e))
        }))
      }), (0, n.jsx)(u.Button, {
        disabled: null == r,
        submitting: I,
        className: A.sendToRecipientButton,
        onClick: () => {
          x(!0), (0, f.Y)(r, s).then(() => {
            t(), (0, d.Ou)()
          }).catch(() => {
            g(!0), x(!1)
          })
        },
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, n.jsx)("div", {
      className: i ? A.subtextError : A.subtext,
      children: i ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}