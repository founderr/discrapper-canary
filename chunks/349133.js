"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  l = n("446674"),
  i = n("87657"),
  a = n("635357"),
  o = n("27618"),
  u = n("697218"),
  d = n("158998"),
  c = n("21526"),
  f = n("782340"),
  E = e => {
    let {
      selectedSkuId: t,
      className: n
    } = e, E = (0, l.useStateFromStoresArray)([o.default], () => o.default.getFriendIDs()), p = (0, l.useStateFromStoresArray)([u.default], () => u.default.filter(e => E.includes(e.id) && !e.bot), [E]), {
      giftRecipient: _,
      setGiftRecipient: I,
      giftRecipientError: S,
      setGiftRecipientError: h,
      setValidatingGiftRecipient: m
    } = (0, a.useGiftContext)();
    if (null == t) return null;
    let C = async e => {
      m(!0), null != S && h(), I(e);
      let n = await (0, c.validateCollectiblesRecipient)(e.id, t);
      !n && h(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), m(!1)
    };
    return (0, s.jsxs)("div", {
      className: n,
      children: [(0, s.jsx)(r.FormTitle, {
        children: f.default.Messages.FORM_LABEL_SEND_TO
      }), (0, s.jsx)(r.SearchableSelect, {
        placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(i.default, {
          user: e.value,
          size: r.AvatarSizes.SIZE_20
        }),
        value: _,
        onChange: C,
        options: p.map(e => ({
          value: e,
          label: "".concat(d.default.getUserTag(e))
        }))
      })]
    })
  }