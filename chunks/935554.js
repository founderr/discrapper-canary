t.d(s, {
  Z: function() {
    return I
  }
});
var n = t(735250);
t(470079);
var r = t(730647),
  i = t(584825),
  l = t(290348),
  o = t(934826),
  a = t(330181),
  c = t(939225),
  d = t(36246),
  C = t(305342),
  u = t(981631),
  _ = t(485383);

function x(e) {
  var s;
  let {
    guildId: t
  } = e, r = (0, i.GG)(t)[0], {
    editStateIds: x
  } = l.B7(null !== (s = null == r ? void 0 : r.id) && void 0 !== s ? s : null, t), {
    activeSubscription: I
  } = (0, o.Z)(null == r ? void 0 : r.id);
  return (0, n.jsxs)("div", {
    className: _.container,
    children: [null != r ? (0, n.jsx)(a.Z, {
      groupListingId: r.id,
      subscription: I
    }) : null, (0, n.jsx)(c.Z, {
      subscription: I
    }), (0, n.jsx)(d.Z, {
      guildId: t,
      children: x.map(e => {
        var s;
        return (0, n.jsx)(C.Z, {
          guildId: t,
          groupListingId: null !== (s = null == r ? void 0 : r.id) && void 0 !== s ? s : "",
          listingId: e,
          analyticsLocation: u.Sbl.ROLE_SUBSCRIPTIONS_TAB
        }, e)
      })
    })]
  })
}

function I(e) {
  let {
    guildId: s
  } = e;
  return (0, n.jsx)(r.l, {
    guildId: s,
    refetchOnMount: !0,
    children: (0, n.jsx)(x, {
      guildId: s
    })
  })
}