n.d(t, {
  Z: function() {
return P;
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  i = n.n(a),
  o = n(392711),
  c = n.n(o),
  l = n(442837),
  d = n(481060),
  u = n(37234),
  f = n(194359),
  p = n(700582),
  g = n(925329),
  C = n(479446),
  _ = n(522489),
  m = n(93127),
  h = n(814443),
  b = n(590783),
  x = n(699516),
  E = n(246946),
  I = n(594174),
  v = n(572004),
  S = n(669079),
  L = n(74538),
  T = n(51144),
  N = n(981631),
  O = n(474936),
  k = n(689938),
  j = n(882284);

function P(e) {
  let {
giftCode: t,
application: n,
sku: a,
subscriptionPlan: o,
selectedGiftStyle: c,
onClose: u,
hasSentMessage: f,
giftRecipient: C,
giftMessageError: m,
isSendingMessage: h
  } = e, [x, I] = r.useState(d.CopyInput.Modes.DEFAULT), P = (0, l.e7)([E.Z], () => E.Z.enabled), R = f || null != c && null != C, A = (null == a ? void 0 : a.productLine) === N.POd.COLLECTIBLES, Z = () => null != o ? o.skuId : null != a ? a.id : null, M = () => {
let e;
let t = null != c && O.V4.includes(c);
return null != m ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == o ? null : (e = o.interval === O.rV.MONTH ? R ? t ? k.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : R ? t ? k.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
  skuName: (0, L.aq)(o.id),
  intervalCount: o.intervalCount
});
  }, y = (e, t) => {
null != a && (0, S.dM)(new b.Z({
  code: t,
  maxUses: 1
}), a);
try {
  (0, v.JG)(e), I(d.CopyInput.Modes.SUCCESS);
} catch (e) {
  I(d.CopyInput.Modes.ERROR);
}
setTimeout(() => {
  I(d.CopyInput.Modes.DEFAULT);
}, 1500);
  }, w = () => {
let e;
if (null == t)
  return null;
switch (x) {
  case d.CopyInput.Modes.SUCCESS:
    e = k.Z.Messages.BILLING_GIFT_COPIED;
    break;
  case d.CopyInput.Modes.ERROR:
    e = k.Z.Messages.FAILED;
    break;
  default:
    e = k.Z.Messages.COPY;
}
return (0, s.jsxs)('div', {
  className: j.giftCodeSection,
  children: [
    (0, s.jsx)(d.FormTitle, {
      children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
    }),
    null != t && (0, s.jsx)(d.CopyInput, {
      hideMessage: P ? k.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
      value: (0, S.Nz)(t),
      mode: x,
      text: e,
      onCopy: e => y(e, t),
      supportsCopy: v.wS,
      className: j.__invalid_copyInput,
      buttonColor: d.ButtonColors.LINK,
      buttonLook: d.ButtonLooks.LINK
    }),
    (0, s.jsx)('div', {
      className: j.subtext,
      children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
    })
  ]
});
  };
  return h ? (0, s.jsxs)('div', {
className: j.confirmation,
children: [
  null != n ? (0, s.jsx)(g.Z, {
    game: n,
    className: j.__invalid_icon,
    size: g.Z.Sizes.LARGE,
    skuId: Z()
  }) : null,
  (0, s.jsx)(d.Spinner, {
    type: d.SpinnerTypes.PULSING_ELLIPSIS
  })
]
  }) : (0, s.jsxs)('div', {
className: j.confirmation,
children: [
  null != n ? (0, s.jsx)(g.Z, {
    game: n,
    className: j.__invalid_icon,
    size: g.Z.Sizes.LARGE,
    skuId: Z()
  }) : null,
  (0, s.jsx)(d.Heading, {
    variant: 'heading-lg/semibold',
    className: i()({
      [j.header]: null == c && !A,
      [j.headerCustomGifting]: null != c && !A
    }),
    children: null != C || f && null == m ? k.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != m ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : k.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
  }),
  f && null != C && null == m || R ? (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(p.Z, {
        user: C,
        className: j.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }),
      (0, s.jsx)(d.Heading, {
        className: j.giftRecipientName,
        variant: 'heading-md/semibold',
        children: T.ZP.getName(C)
      }),
      (0, s.jsxs)('div', {
        className: j.giftRecipientTag,
        children: [
          ' ',
          T.ZP.getUserTag(C)
        ]
      }),
      (0, s.jsx)('div', {
        className: j.giftSentMessage,
        children: M()
      })
    ]
  }) : (() => {
    let e = (0, S.MY)(C, A),
      {
        removeGiftRecipientUI: n
      } = _.m.getCurrentConfig({
        location: 'GiftPurchaseConfirmation'
      }, {
        autoTrackExposure: !1,
        disable: __BILLING_STANDALONE__ || e !== S.xr.CUSTOM_STYLE
      });
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)('div', {
          className: j.blurb,
          children: M()
        }),
        !n && null == m && (0, s.jsx)(B, {
          giftCode: t,
          onClose: u
        }),
        (0, s.jsx)('div', {
          className: j.divider
        }),
        w()
      ]
    });
  })()
]
  });
}
let B = e => {
  let {
giftCode: t,
onClose: n
  } = e;
  r.useEffect(() => {
f.Z.fetchRelationships(), (0, m.W)();
  }, []);
  let [a, i] = r.useState(), [o, g] = r.useState(!1), [_, b] = r.useState(!1), {
userAffinities: E,
isLoading: v
  } = (0, l.cj)([h.Z], () => ({
userAffinities: h.Z.getUserAffinitiesUserIds(),
isLoading: h.Z.getFetching()
  })), S = Array.from(E.values()), L = (0, l.e7)([x.Z], () => x.Z.getFriendIDs()), N = c().difference(L, S), O = [
...S,
...N
  ], P = (0, l.e7)([I.default], () => I.default.filter(e => O.includes(e.id) && !e.bot), [O]);
  if (null == P || 0 === P.length)
return null;
  let B = c().sortBy(P, e => O.indexOf(e.id));
  return (0, s.jsxs)('div', {
className: j.giftRecipientSection,
children: [
  (0, s.jsx)(d.FormTitle, {
    children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
  }),
  (0, s.jsxs)('div', {
    className: j.giftRecipient,
    children: [
      (0, s.jsx)(d.SearchableSelect, {
        placeholder: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: j.giftRecipientInputWrapper,
        className: o ? j.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(p.Z, {
          user: e.value,
          size: d.AvatarSizes.SIZE_20
        }),
        renderLeading: () => v ? (0, s.jsx)(d.Spinner, {
          type: d.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          i(e), g(!1);
        },
        options: B.map(e => ({
          value: e,
          label: ''.concat(T.ZP.getUserTag(e))
        }))
      }),
      (0, s.jsx)(d.Button, {
        disabled: null == a,
        submitting: _,
        className: j.sendToRecipientButton,
        onClick: () => {
          b(!0), (0, C.Y)(a, t).then(() => {
            n(), (0, u.Ou)();
          }).catch(() => {
            g(!0), b(!1);
          });
        },
        children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: o ? j.subtextError : j.subtext,
    children: o ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
  })
]
  });
};