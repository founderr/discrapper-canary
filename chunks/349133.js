"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var n = s("37983");
s("884691");
var r = s("77078"),
  l = s("446674"),
  i = s("87657"),
  a = s("635357"),
  o = s("27618"),
  u = s("697218"),
  d = s("158998"),
  c = s("21526"),
  f = s("782340"),
  E = e => {
    let {
      selectedSkuId: t,
      className: s
    } = e, E = (0, l.useStateFromStoresArray)([o.default], () => o.default.getFriendIDs()), _ = (0, l.useStateFromStoresArray)([u.default], () => u.default.filter(e => E.includes(e.id) && !e.bot), [E]), {
      giftRecipient: p,
      setGiftRecipient: I,
      giftRecipientError: S,
      setGiftRecipientError: h,
      setValidatingGiftRecipient: m
    } = (0, a.useGiftContext)();
    if (null == t) return null;
    let C = async e => {
      m(!0), null != S && h(), I(e);
      let s = await (0, c.validateCollectiblesRecipient)(e.id, t);
      !s && h(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), m(!1)
    };
    return (0, n.jsxs)("div", {
      className: s,
      children: [(0, n.jsx)(r.FormTitle, {
        children: f.default.Messages.FORM_LABEL_SEND_TO
      }), (0, n.jsx)(r.SearchableSelect, {
        placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(i.default, {
          user: e.value,
          size: r.AvatarSizes.SIZE_20
        }),
        value: p,
        onChange: C,
        options: _.map(e => ({
          value: e,
          label: "".concat(d.default.getUserTag(e))
        }))
      })]
    })
  }