"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  r = n("700582"),
  i = n("987209"),
  o = n("699516"),
  d = n("594174"),
  u = n("51144"),
  c = n("335131"),
  f = n("689938");
t.default = e => {
  let {
    selectedSkuId: t,
    className: n
  } = e, E = (0, l.useStateFromStoresArray)([o.default], () => o.default.getFriendIDs()), S = (0, l.useStateFromStoresArray)([d.default], () => d.default.filter(e => E.includes(e.id) && !e.bot), [E]), {
    giftRecipient: C,
    setGiftRecipient: p,
    giftRecipientError: T,
    setGiftRecipientError: m,
    setValidatingGiftRecipient: I
  } = (0, i.useGiftContext)();
  if (null == t) return null;
  let _ = async e => {
    I(!0), null != T && m(), p(e), !await (0, c.validateCollectiblesRecipient)(e.id, t) && m(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), I(!1)
  };
  return (0, a.jsxs)("div", {
    className: n,
    children: [(0, a.jsx)(s.FormTitle, {
      children: f.default.Messages.FORM_LABEL_SEND_TO
    }), (0, a.jsx)(s.SearchableSelect, {
      placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
      renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(r.default, {
        user: e.value,
        size: s.AvatarSizes.SIZE_20
      }),
      value: C,
      onChange: _,
      options: S.map(e => ({
        value: e,
        label: "".concat(u.default.getUserTag(e))
      }))
    })]
  })
}