"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var i = s("735250");
s("470079");
var l = s("730647"),
  r = s("584825"),
  a = s("290348"),
  n = s("934826"),
  d = s("330181"),
  o = s("939225"),
  u = s("36246"),
  c = s("305342"),
  C = s("981631"),
  _ = s("382020");

function f(e) {
  var t;
  let {
    guildId: s
  } = e, l = (0, r.useGroupListingsForGuild)(s)[0], {
    editStateIds: f
  } = a.useEditStateIds(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null, s), {
    activeSubscription: S
  } = (0, n.default)(null == l ? void 0 : l.id);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [null != l ? (0, i.jsx)(d.default, {
      groupListingId: l.id,
      subscription: S
    }) : null, (0, i.jsx)(o.default, {
      subscription: S
    }), (0, i.jsx)(u.default, {
      guildId: s,
      children: f.map(e => {
        var t;
        return (0, i.jsx)(c.default, {
          guildId: s,
          groupListingId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
          listingId: e,
          analyticsLocation: C.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
        }, e)
      })
    })]
  })
}

function S(e) {
  let {
    guildId: t
  } = e;
  return (0, i.jsx)(l.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, i.jsx)(f, {
      guildId: t
    })
  })
}