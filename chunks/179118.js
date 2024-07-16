s.d(t, {
  Z: function() {
return k;
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(392711),
  l = s.n(i),
  c = s(442837),
  d = s(481060),
  u = s(37234),
  p = s(194359),
  g = s(700582),
  f = s(925329),
  C = s(479446),
  m = s(522489),
  _ = s(93127),
  h = s(814443),
  b = s(590783),
  x = s(699516),
  I = s(246946),
  E = s(594174),
  L = s(572004),
  S = s(669079),
  v = s(74538),
  T = s(51144),
  N = s(981631),
  O = s(474936),
  j = s(689938),
  Z = s(882284);

function k(e) {
  let {
giftCode: t,
application: s,
sku: a,
subscriptionPlan: i,
selectedGiftStyle: l,
onClose: u,
hasSentMessage: p,
giftRecipient: C,
giftMessageError: _,
isSendingMessage: h
  } = e, [x, E] = r.useState(d.CopyInput.Modes.DEFAULT), k = (0, c.e7)([I.Z], () => I.Z.enabled), A = p || null != l && null != C, P = (null == a ? void 0 : a.productLine) === N.POd.COLLECTIBLES, B = () => null != i ? i.skuId : null != a ? a.id : null, M = () => {
let e;
let t = null != l && O.V4.includes(l);
return null != _ ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === O.rV.MONTH ? A ? t ? j.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : A ? t ? j.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
  skuName: (0, v.aq)(i.id),
  intervalCount: i.intervalCount
});
  }, y = (e, t) => {
null != a && (0, S.dM)(new b.Z({
  code: t,
  maxUses: 1
}), a);
try {
  (0, L.JG)(e), E(d.CopyInput.Modes.SUCCESS);
} catch (e) {
  E(d.CopyInput.Modes.ERROR);
}
setTimeout(() => {
  E(d.CopyInput.Modes.DEFAULT);
}, 1500);
  }, w = () => {
let e;
if (null == t)
  return null;
switch (x) {
  case d.CopyInput.Modes.SUCCESS:
    e = j.Z.Messages.BILLING_GIFT_COPIED;
    break;
  case d.CopyInput.Modes.ERROR:
    e = j.Z.Messages.FAILED;
    break;
  default:
    e = j.Z.Messages.COPY;
}
return (0, n.jsxs)('div', {
  className: Z.giftCodeSection,
  children: [
    (0, n.jsx)(d.FormTitle, {
      children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
    }),
    null != t && (0, n.jsx)(d.CopyInput, {
      hideMessage: k ? j.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
      value: (0, S.Nz)(t),
      mode: x,
      text: e,
      onCopy: e => y(e, t),
      supportsCopy: L.wS,
      className: Z.__invalid_copyInput,
      buttonColor: d.ButtonColors.LINK,
      buttonLook: d.ButtonLooks.LINK
    }),
    (0, n.jsx)('div', {
      className: Z.subtext,
      children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
    })
  ]
});
  };
  return h ? (0, n.jsxs)('div', {
className: Z.confirmation,
children: [
  null != s ? (0, n.jsx)(f.Z, {
    game: s,
    className: Z.__invalid_icon,
    size: f.Z.Sizes.LARGE,
    skuId: B()
  }) : null,
  (0, n.jsx)(d.Spinner, {
    type: d.SpinnerTypes.PULSING_ELLIPSIS
  })
]
  }) : (0, n.jsxs)('div', {
className: Z.confirmation,
children: [
  null != s ? (0, n.jsx)(f.Z, {
    game: s,
    className: Z.__invalid_icon,
    size: f.Z.Sizes.LARGE,
    skuId: B()
  }) : null,
  (0, n.jsx)(d.Heading, {
    variant: 'heading-lg/semibold',
    className: o()({
      [Z.header]: null == l && !P,
      [Z.headerCustomGifting]: null != l && !P
    }),
    children: null != C || p && null == _ ? j.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != _ ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : j.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
  }),
  p && null != C && null == _ || A ? (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(g.Z, {
        user: C,
        className: Z.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }),
      (0, n.jsx)(d.Heading, {
        className: Z.giftRecipientName,
        variant: 'heading-md/semibold',
        children: T.ZP.getName(C)
      }),
      (0, n.jsxs)('div', {
        className: Z.giftRecipientTag,
        children: [
          ' ',
          T.ZP.getUserTag(C)
        ]
      }),
      (0, n.jsx)('div', {
        className: Z.giftSentMessage,
        children: M()
      })
    ]
  }) : (() => {
    let e = (0, S.MY)(C, P),
      {
        removeGiftRecipientUI: s
      } = m.m.getCurrentConfig({
        location: 'GiftPurchaseConfirmation'
      }, {
        autoTrackExposure: !1,
        disable: __BILLING_STANDALONE__ || e !== S.xr.CUSTOM_STYLE
      });
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)('div', {
          className: Z.blurb,
          children: M()
        }),
        !s && null == _ && (0, n.jsx)(R, {
          giftCode: t,
          onClose: u
        }),
        (0, n.jsx)('div', {
          className: Z.divider
        }),
        w()
      ]
    });
  })()
]
  });
}
let R = e => {
  let {
giftCode: t,
onClose: s
  } = e;
  r.useEffect(() => {
p.Z.fetchRelationships(), (0, _.W)();
  }, []);
  let [a, o] = r.useState(), [i, f] = r.useState(!1), [m, b] = r.useState(!1), {
userAffinities: I,
isLoading: L
  } = (0, c.cj)([h.Z], () => ({
userAffinities: h.Z.getUserAffinitiesUserIds(),
isLoading: h.Z.getFetching()
  })), S = Array.from(I.values()), v = (0, c.e7)([x.Z], () => x.Z.getFriendIDs()), N = l().difference(v, S), O = [
...S,
...N
  ], k = (0, c.e7)([E.default], () => E.default.filter(e => O.includes(e.id) && !e.bot), [O]);
  if (null == k || 0 === k.length)
return null;
  let R = l().sortBy(k, e => O.indexOf(e.id));
  return (0, n.jsxs)('div', {
className: Z.giftRecipientSection,
children: [
  (0, n.jsx)(d.FormTitle, {
    children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
  }),
  (0, n.jsxs)('div', {
    className: Z.giftRecipient,
    children: [
      (0, n.jsx)(d.SearchableSelect, {
        placeholder: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: Z.giftRecipientInputWrapper,
        className: i ? Z.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(g.Z, {
          user: e.value,
          size: d.AvatarSizes.SIZE_20
        }),
        renderLeading: () => L ? (0, n.jsx)(d.Spinner, {
          type: d.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          o(e), f(!1);
        },
        options: R.map(e => ({
          value: e,
          label: ''.concat(T.ZP.getUserTag(e))
        }))
      }),
      (0, n.jsx)(d.Button, {
        disabled: null == a,
        submitting: m,
        className: Z.sendToRecipientButton,
        onClick: () => {
          b(!0), (0, C.Y)(a, t).then(() => {
            s(), (0, u.Ou)();
          }).catch(() => {
            f(!0), b(!1);
          });
        },
        children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: i ? Z.subtextError : Z.subtext,
    children: i ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
  })
]
  });
};