n.d(t, {
  Z: function() {
    return R
  }
});
var i = n(735250),
  s = n(470079),
  l = n(873546),
  a = n(442837),
  r = n(481060),
  o = n(355467),
  c = n(270237),
  u = n(252618),
  d = n(423e3),
  E = n(200876),
  h = n(674180),
  _ = n(38618),
  I = n(984370),
  m = n(430824),
  g = n(351402),
  p = n(730647),
  N = n(772021),
  T = n(396828),
  C = n(475413),
  S = n(20967),
  A = n(504762),
  f = n(807152),
  Z = n(176505),
  v = n(689938),
  L = n(970212);

function O(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]), O = (0, a.e7)([_.Z], () => _.Z.isConnected()), R = (0, E.Z)(t), x = (0, N.Z)(t), M = (0, a.e7)([g.Z], () => g.Z.isSubscriptionFetching), P = (0, p.f)(), {
    shouldHideGuildPurchaseEntryPoints: D,
    restrictionsLoading: b
  } = (0, h.uP)(t), y = null == n || !P || M || b;
  (0, u.Tt)({
    subsection: v.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    location: null == n ? void 0 : n.name
  }), (0, c.Z)(l.tq ? "role-subscriptions-overview" : void 0);
  let j = O && (null == n || !(R || x) || D && !b);
  if (s.useEffect(() => {
      o.jg()
    }, []), s.useEffect(() => {
      j && !l.tq && (0, d.M)(t, Z.oC.ROLE_SUBSCRIPTIONS)
    }, [t, j]), l.tq && j) {
    let e = null == n ? S.J.NOT_GUILD_MEMBER : S.J.GUILD_NOT_ELIGIBLE;
    return (0, i.jsx)(S.z, {
      errorType: e
    })
  }
  return (0, i.jsxs)("div", {
    className: L.container,
    children: [(0, i.jsxs)(I.Z, {
      toolbar: (0, i.jsx)(s.Fragment, {}),
      className: L.headerBar,
      children: [(0, i.jsx)(I.Z.Icon, {
        icon: (0, r.makeIconCompat)(T.Z),
        "aria-hidden": !0
      }), (0, i.jsx)(I.Z.Title, {
        children: v.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })]
    }), (0, i.jsx)("div", {
      id: f.v
    }), (0, i.jsx)("div", {
      className: L.content,
      children: R ? (0, i.jsx)(r.ScrollerNone, {
        className: L.scroller,
        children: (0, i.jsx)("div", {
          className: L.scrollerContent,
          children: y ? (0, i.jsx)(r.Spinner, {}) : (0, i.jsx)(C.Z, {
            guild: n
          })
        })
      }) : (0, i.jsx)(A.Z, {})
    })]
  })
}

function R(e) {
  let {
    guildId: t
  } = e;
  return (0, i.jsx)(p.l, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, i.jsx)(O, {
      guildId: t
    })
  })
}