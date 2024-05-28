"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("700582"),
  r = s("987209"),
  d = s("699516"),
  u = s("594174"),
  o = s("51144"),
  c = s("335131"),
  S = s("689938");
t.default = e => {
  let {
    selectedSkuId: t,
    className: s
  } = e, E = (0, l.useStateFromStoresArray)([d.default], () => d.default.getFriendIDs()), f = (0, l.useStateFromStoresArray)([u.default], () => u.default.filter(e => E.includes(e.id) && !e.bot), [E]), {
    giftRecipient: I,
    setGiftRecipient: _,
    giftRecipientError: T,
    setGiftRecipientError: C,
    setValidatingGiftRecipient: N
  } = (0, r.useGiftContext)();
  if (null == t) return null;
  let A = async e => {
    N(!0), null != T && C(), _(e), !await (0, c.validateCollectiblesRecipient)(e.id, t) && C(S.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), N(!1)
  };
  return (0, a.jsxs)("div", {
    className: s,
    children: [(0, a.jsx)(n.FormTitle, {
      children: S.default.Messages.FORM_LABEL_SEND_TO
    }), (0, a.jsx)(n.SearchableSelect, {
      placeholder: S.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
      renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(i.default, {
        user: e.value,
        size: n.AvatarSizes.SIZE_20
      }),
      value: I,
      onChange: A,
      options: f.map(e => ({
        value: e,
        label: "".concat(o.default.getUserTag(e))
      }))
    })]
  })
}