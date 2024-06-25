"use strict";
s.d(t, {
  Z: function() {
    return A
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(392711),
  o = s.n(l),
  c = s(442837),
  u = s(481060),
  d = s(37234),
  C = s(194359),
  f = s(700582),
  p = s(479446),
  E = s(93127),
  g = s(814443),
  m = s(590783),
  h = s(699516),
  x = s(246946),
  I = s(594174),
  _ = s(366695),
  T = s(572004),
  S = s(669079),
  L = s(74538),
  N = s(51144),
  b = s(981631),
  v = s(474936),
  O = s(689938),
  Z = s(557357);

function A(e) {
  let {
    giftCode: t,
    application: s,
    sku: a,
    subscriptionPlan: l,
    selectedGiftStyle: o,
    onClose: d,
    hasSentMessage: C,
    giftRecipient: p,
    giftMessageError: E,
    isSendingMessage: g
  } = e, [h, I] = r.useState(u.CopyInput.Modes.DEFAULT), A = (0, c.e7)([x.Z], () => x.Z.enabled), j = C || null != o && null != p, P = () => null != l ? l.skuId : null != a ? a.id : null, M = () => {
    let e;
    let t = null != o && v.V4.includes(o);
    return null != E ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == l ? null : (e = l.interval === v.rV.MONTH ? j ? t ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : j ? t ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, L.aq)(l.id),
      intervalCount: l.intervalCount
    })
  }, k = (e, t) => {
    null != a && (0, S.dM)(new m.Z({
      code: t,
      maxUses: 1
    }), a);
    try {
      (0, T.JG)(e), I(u.CopyInput.Modes.SUCCESS)
    } catch (e) {
      I(u.CopyInput.Modes.ERROR)
    }
    setTimeout(() => {
      I(u.CopyInput.Modes.DEFAULT)
    }, 1500)
  }, y = () => {
    let e;
    if (null == t) return null;
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
      className: Z.giftCodeSection,
      children: [(0, n.jsx)(u.FormTitle, {
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != t && (0, n.jsx)(u.CopyInput, {
        hideMessage: A ? O.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, S.Nz)(t),
        mode: h,
        text: e,
        onCopy: e => k(e, t),
        supportsCopy: T.wS,
        className: Z.__invalid_copyInput,
        buttonColor: u.ButtonColors.LINK,
        buttonLook: u.ButtonLooks.LINK
      }), (0, n.jsx)("div", {
        className: Z.subtext,
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (g) return (0, n.jsxs)("div", {
    className: Z.confirmation,
    children: [null != s ? (0, n.jsx)(_.Z, {
      game: s,
      className: Z.__invalid_icon,
      size: _.Z.Sizes.LARGE,
      skuId: P()
    }) : null, (0, n.jsx)(u.Spinner, {
      type: u.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let B = (null == a ? void 0 : a.productLine) === b.POd.COLLECTIBLES;
  return (0, n.jsxs)("div", {
    className: Z.confirmation,
    children: [null != s ? (0, n.jsx)(_.Z, {
      game: s,
      className: Z.__invalid_icon,
      size: _.Z.Sizes.LARGE,
      skuId: P()
    }) : null, (0, n.jsx)(u.Heading, {
      variant: "heading-lg/semibold",
      className: i()({
        [Z.header]: null == o && !B,
        [Z.headerCustomGifting]: null != o && !B
      }),
      children: null != p || C && null == E ? O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != E ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), C && null != p && null == E || j ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.Z, {
        user: p,
        className: Z.giftRecipient,
        size: u.AvatarSizes.SIZE_80
      }), (0, n.jsx)(u.Heading, {
        className: Z.giftRecipientName,
        variant: "heading-md/semibold",
        children: N.ZP.getName(p)
      }), (0, n.jsxs)("div", {
        className: Z.giftRecipientTag,
        children: [" ", N.ZP.getUserTag(p)]
      }), (0, n.jsx)("div", {
        className: Z.giftSentMessage,
        children: M()
      })]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: Z.blurb,
        children: M()
      }), null == E && (0, n.jsx)(R, {
        giftCode: t,
        onClose: d
      }), (0, n.jsx)("div", {
        className: Z.divider
      }), y()]
    })]
  })
}
let R = e => {
  let {
    giftCode: t,
    onClose: s
  } = e;
  r.useEffect(() => {
    C.Z.fetchRelationships(), (0, E.W)()
  }, []);
  let [a, i] = r.useState(), [l, m] = r.useState(!1), [x, _] = r.useState(!1), {
    userAffinities: T,
    isLoading: S
  } = (0, c.cj)([g.Z], () => ({
    userAffinities: g.Z.getUserAffinitiesUserIds(),
    isLoading: g.Z.getFetching()
  })), L = Array.from(T.values()), b = (0, c.e7)([h.Z], () => h.Z.getFriendIDs()), v = o().difference(b, L), A = [...L, ...v], R = (0, c.e7)([I.default], () => I.default.filter(e => A.includes(e.id) && !e.bot), [A]);
  if (null == R || 0 === R.length) return null;
  let j = o().sortBy(R, e => A.indexOf(e.id));
  return (0, n.jsxs)("div", {
    className: Z.giftRecipientSection,
    children: [(0, n.jsx)(u.FormTitle, {
      children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, n.jsxs)("div", {
      className: Z.giftRecipient,
      children: [(0, n.jsx)(u.SearchableSelect, {
        placeholder: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: Z.giftRecipientInputWrapper,
        className: l ? Z.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(f.Z, {
          user: e.value,
          size: u.AvatarSizes.SIZE_20
        }),
        renderLeading: () => S ? (0, n.jsx)(u.Spinner, {
          type: u.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          i(e), m(!1)
        },
        options: j.map(e => ({
          value: e,
          label: "".concat(N.ZP.getUserTag(e))
        }))
      }), (0, n.jsx)(u.Button, {
        disabled: null == a,
        submitting: x,
        className: Z.sendToRecipientButton,
        onClick: () => {
          _(!0), (0, p.Y)(a, t).then(() => {
            s(), (0, d.Ou)()
          }).catch(() => {
            m(!0), _(!1)
          })
        },
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, n.jsx)("div", {
      className: l ? Z.subtextError : Z.subtext,
      children: l ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}