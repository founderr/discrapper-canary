"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("399606"),
  n = s("481060"),
  i = s("674180"),
  r = s("267101"),
  o = s("430824"),
  d = s("584825"),
  u = s("198139"),
  c = s("689938");

function E(e) {
  let {
    guildId: t,
    allPeriods: E
  } = e, _ = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t)), I = (0, d.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0
  }), T = (0, r.useGuildProductsForGuild)(t, {
    publishedOnly: !1
  }), {
    allowSelfRemoveMonetization: S
  } = (0, i.useShouldRestrictUpdatingCreatorMonetizationSettings)(t), f = E.filter(e => {
    var t;
    let s = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
    return (null == s ? void 0 : s.status) === u.PaymentPayoutGroupStatuses.OPEN || (null == s ? void 0 : s.status) === u.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED
  }), m = I.length > 0, N = T.length > 0, g = f.length > 0;
  return null == _ ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      children: c.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_DESCRIPTION.format({
        guildName: _.toString()
      })
    }), (0, a.jsx)(n.Spacer, {
      size: 16
    }), (0, a.jsx)(n.Button, {
      disabled: !S || m || N || g,
      look: n.Button.Looks.FILLED,
      color: n.Button.Colors.RED,
      onClick: () => {
        var e;
        return e = _, void(0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("35282")]).then(s.bind(s, "157429"));
          return s => (0, a.jsx)(t, {
            ...s,
            guild: e
          })
        })
      },
      children: c.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_CTA
    })]
  })
}