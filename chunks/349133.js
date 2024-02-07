"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var i = n("77078"),
  r = n("446674"),
  l = n("87657"),
  a = n("635357"),
  u = n("27618"),
  o = n("697218"),
  d = n("158998"),
  c = n("21526"),
  f = n("782340"),
  p = e => {
    let {
      selectedSkuId: t,
      className: n
    } = e, p = (0, r.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), S = (0, r.useStateFromStoresArray)([o.default], () => o.default.filter(e => p.includes(e.id) && !e.bot), [p]), {
      giftRecipient: E,
      setGiftRecipient: m,
      giftRecipientError: _,
      setGiftRecipientError: I,
      setValidatingGiftRecipient: C
    } = (0, a.useGiftContext)();
    if (null == t) return null;
    let T = async e => {
      C(!0), null != _ && I(), m(e);
      let n = await (0, c.validateCollectiblesRecipient)(e.id, t);
      !n && I(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), C(!1)
    };
    return (0, s.jsxs)("div", {
      className: n,
      children: [(0, s.jsx)(i.FormTitle, {
        children: f.default.Messages.FORM_LABEL_SEND_TO
      }), (0, s.jsx)(i.SearchableSelect, {
        placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(l.default, {
          user: e.value,
          size: i.AvatarSizes.SIZE_20
        }),
        value: E,
        onChange: T,
        options: S.map(e => ({
          value: e,
          label: "".concat(d.default.getUserTag(e))
        }))
      })]
    })
  }