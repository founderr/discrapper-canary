var s = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  i = t(700582),
  r = t(987209),
  o = t(699516),
  d = t(594174),
  c = t(51144),
  u = t(335131),
  E = t(689938);
n.Z = e => {
  let {
    selectedSkuId: n,
    className: t
  } = e, C = (0, a.Wu)([o.Z], () => o.Z.getFriendIDs()), f = (0, a.Wu)([d.default], () => d.default.filter(e => C.includes(e.id) && !e.bot), [C]), {
    giftRecipient: h,
    setGiftRecipient: p,
    giftRecipientError: x,
    setGiftRecipientError: T,
    setValidatingGiftRecipient: m
  } = (0, r.wD)();
  if (null == n) return null;
  let I = async e => {
    m(!0), null != x && T(), p(e), !await (0, u.B1)(e.id, n) && T(E.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), m(!1)
  };
  return (0, s.jsxs)("div", {
    className: t,
    children: [(0, s.jsx)(l.FormTitle, {
      children: E.Z.Messages.FORM_LABEL_SEND_TO
    }), (0, s.jsx)(l.SearchableSelect, {
      placeholder: E.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
      renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(i.Z, {
        user: e.value,
        size: l.AvatarSizes.SIZE_20
      }),
      value: h,
      onChange: I,
      options: f.map(e => ({
        value: e,
        label: "".concat(c.ZP.getUserTag(e))
      }))
    })]
  })
}