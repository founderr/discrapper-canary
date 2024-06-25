n.d(s, {
  Z: function() {
    return P
  }
}), n(47120);
var t = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(392711),
  o = n.n(l),
  c = n(442837),
  u = n(481060),
  _ = n(37234),
  d = n(194359),
  I = n(700582),
  m = n(479446),
  C = n(93127),
  E = n(814443),
  N = n(590783),
  T = n(699516),
  p = n(246946),
  A = n(594174),
  S = n(366695),
  L = n(572004),
  x = n(669079),
  R = n(74538),
  M = n(51144),
  f = n(981631),
  g = n(474936),
  O = n(689938),
  h = n(557357);

function P(e) {
  let {
    giftCode: s,
    application: n,
    sku: i,
    subscriptionPlan: l,
    selectedGiftStyle: o,
    onClose: _,
    hasSentMessage: d,
    giftRecipient: m,
    giftMessageError: C,
    isSendingMessage: E
  } = e, [T, A] = a.useState(u.CopyInput.Modes.DEFAULT), P = (0, c.e7)([p.Z], () => p.Z.enabled), Z = d || null != o && null != m, U = () => null != l ? l.skuId : null != i ? i.id : null, v = () => {
    let e;
    let s = null != o && g.V4.includes(o);
    return null != C ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == l ? null : (e = l.interval === g.rV.MONTH ? Z ? s ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : Z ? s ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, R.aq)(l.id),
      intervalCount: l.intervalCount
    })
  }, b = (e, s) => {
    null != i && (0, x.dM)(new N.Z({
      code: s,
      maxUses: 1
    }), i);
    try {
      (0, L.JG)(e), A(u.CopyInput.Modes.SUCCESS)
    } catch (e) {
      A(u.CopyInput.Modes.ERROR)
    }
    setTimeout(() => {
      A(u.CopyInput.Modes.DEFAULT)
    }, 1500)
  }, F = () => {
    let e;
    if (null == s) return null;
    switch (T) {
      case u.CopyInput.Modes.SUCCESS:
        e = O.Z.Messages.BILLING_GIFT_COPIED;
        break;
      case u.CopyInput.Modes.ERROR:
        e = O.Z.Messages.FAILED;
        break;
      default:
        e = O.Z.Messages.COPY
    }
    return (0, t.jsxs)("div", {
      className: h.giftCodeSection,
      children: [(0, t.jsx)(u.FormTitle, {
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != s && (0, t.jsx)(u.CopyInput, {
        hideMessage: P ? O.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, x.Nz)(s),
        mode: T,
        text: e,
        onCopy: e => b(e, s),
        supportsCopy: L.wS,
        className: h.__invalid_copyInput,
        buttonColor: u.ButtonColors.LINK,
        buttonLook: u.ButtonLooks.LINK
      }), (0, t.jsx)("div", {
        className: h.subtext,
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (E) return (0, t.jsxs)("div", {
    className: h.confirmation,
    children: [null != n ? (0, t.jsx)(S.Z, {
      game: n,
      className: h.__invalid_icon,
      size: S.Z.Sizes.LARGE,
      skuId: U()
    }) : null, (0, t.jsx)(u.Spinner, {
      type: u.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let G = (null == i ? void 0 : i.productLine) === f.POd.COLLECTIBLES;
  return (0, t.jsxs)("div", {
    className: h.confirmation,
    children: [null != n ? (0, t.jsx)(S.Z, {
      game: n,
      className: h.__invalid_icon,
      size: S.Z.Sizes.LARGE,
      skuId: U()
    }) : null, (0, t.jsx)(u.Heading, {
      variant: "heading-lg/semibold",
      className: r()({
        [h.header]: null == o && !G,
        [h.headerCustomGifting]: null != o && !G
      }),
      children: null != m || d && null == C ? O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != C ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), d && null != m && null == C || Z ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(I.Z, {
        user: m,
        className: h.giftRecipient,
        size: u.AvatarSizes.SIZE_80
      }), (0, t.jsx)(u.Heading, {
        className: h.giftRecipientName,
        variant: "heading-md/semibold",
        children: M.ZP.getName(m)
      }), (0, t.jsxs)("div", {
        className: h.giftRecipientTag,
        children: [" ", M.ZP.getUserTag(m)]
      }), (0, t.jsx)("div", {
        className: h.giftSentMessage,
        children: v()
      })]
    }) : (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)("div", {
        className: h.blurb,
        children: v()
      }), null == C && (0, t.jsx)(j, {
        giftCode: s,
        onClose: _
      }), (0, t.jsx)("div", {
        className: h.divider
      }), F()]
    })]
  })
}
let j = e => {
  let {
    giftCode: s,
    onClose: n
  } = e;
  a.useEffect(() => {
    d.Z.fetchRelationships(), (0, C.W)()
  }, []);
  let [i, r] = a.useState(), [l, N] = a.useState(!1), [p, S] = a.useState(!1), {
    userAffinities: L,
    isLoading: x
  } = (0, c.cj)([E.Z], () => ({
    userAffinities: E.Z.getUserAffinitiesUserIds(),
    isLoading: E.Z.getFetching()
  })), R = Array.from(L.values()), f = (0, c.e7)([T.Z], () => T.Z.getFriendIDs()), g = o().difference(f, R), P = [...R, ...g], j = (0, c.e7)([A.default], () => A.default.filter(e => P.includes(e.id) && !e.bot), [P]);
  if (null == j || 0 === j.length) return null;
  let Z = o().sortBy(j, e => P.indexOf(e.id));
  return (0, t.jsxs)("div", {
    className: h.giftRecipientSection,
    children: [(0, t.jsx)(u.FormTitle, {
      children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, t.jsxs)("div", {
      className: h.giftRecipient,
      children: [(0, t.jsx)(u.SearchableSelect, {
        placeholder: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: h.giftRecipientInputWrapper,
        className: l ? h.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, t.jsx)(I.Z, {
          user: e.value,
          size: u.AvatarSizes.SIZE_20
        }),
        renderLeading: () => x ? (0, t.jsx)(u.Spinner, {
          type: u.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: i,
        onChange: e => {
          r(e), N(!1)
        },
        options: Z.map(e => ({
          value: e,
          label: "".concat(M.ZP.getUserTag(e))
        }))
      }), (0, t.jsx)(u.Button, {
        disabled: null == i,
        submitting: p,
        className: h.sendToRecipientButton,
        onClick: () => {
          S(!0), (0, m.Y)(i, s).then(() => {
            n(), (0, _.Ou)()
          }).catch(() => {
            N(!0), S(!1)
          })
        },
        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, t.jsx)("div", {
      className: l ? h.subtextError : h.subtext,
      children: l ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}