n.d(t, {
  Z: function() {
    return R
  }
});
var s = n(735250),
  i = n(470079),
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
  T = n(351402),
  g = n(730647),
  p = n(772021),
  N = n(396828),
  S = n(475413),
  C = n(20967),
  A = n(504762),
  f = n(807152),
  Z = n(176505),
  L = n(689938),
  O = n(970212);

function v(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]), v = (0, a.e7)([_.Z], () => _.Z.isConnected()), R = (0, E.Z)(t), P = (0, p.Z)(t), x = (0, a.e7)([T.Z], () => T.Z.isSubscriptionFetching), M = (0, g.f)(), {
    shouldHideGuildPurchaseEntryPoints: D,
    restrictionsLoading: b
  } = (0, h.uP)(t), y = null == n || !M || x || b;
  (0, u.Tt)({
    subsection: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    location: null == n ? void 0 : n.name
  }), (0, c.Z)(l.tq ? "role-subscriptions-overview" : void 0);
  let j = v && (null == n || !(R || P) || D && !b);
  if (i.useEffect(() => {
      o.jg()
    }, []), i.useEffect(() => {
      j && !l.tq && (0, d.M)(t, Z.oC.ROLE_SUBSCRIPTIONS)
    }, [t, j]), l.tq && j) {
    let e = null == n ? C.J.NOT_GUILD_MEMBER : C.J.GUILD_NOT_ELIGIBLE;
    return (0, s.jsx)(C.z, {
      errorType: e
    })
  }
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsxs)(I.Z, {
      toolbar: (0, s.jsx)(i.Fragment, {}),
      className: O.headerBar,
      children: [(0, s.jsx)(I.Z.Icon, {
        icon: (0, r.makeIconCompat)(N.Z),
        "aria-hidden": !0
      }), (0, s.jsx)(I.Z.Title, {
        children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })]
    }), (0, s.jsx)("div", {
      id: f.v
    }), (0, s.jsx)("div", {
      className: O.content,
      children: R ? (0, s.jsx)(r.ScrollerNone, {
        className: O.scroller,
        children: (0, s.jsx)("div", {
          className: O.scrollerContent,
          children: y ? (0, s.jsx)(r.Spinner, {}) : (0, s.jsx)(S.Z, {
            guild: n
          })
        })
      }) : (0, s.jsx)(A.Z, {})
    })]
  })
}

function R(e) {
  let {
    guildId: t
  } = e;
  return (0, s.jsx)(g.l, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, s.jsx)(v, {
      guildId: t
    })
  })
}