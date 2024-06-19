n.d(t, {
  Z: function() {
    return x
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(399606),
  r = n(481060),
  o = n(271383),
  c = n(594174),
  u = n(777288),
  d = n(991570),
  h = n(753042),
  m = n(787469),
  p = n(477718),
  E = n(791176),
  g = n(908474),
  f = n(467014),
  C = n(689938),
  _ = n(332513);

function I(e) {
  let {
    userId: t,
    guildId: n
  } = e, i = (0, d.f)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, l.jsxs)("div", {
    className: s()(_.header),
    style: {
      backgroundColor: i
    },
    children: [(0, l.jsxs)("div", {
      className: s()(_.headerTitle),
      children: [(0, l.jsx)(u.Z, {
        width: 16,
        height: 16
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: C.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE
      })]
    }), (0, l.jsx)("div", {
      children: (0, l.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: _.keyComboInner,
        className: _.keyComboContainer
      })
    })]
  })
}

function x(e) {
  let {
    userId: t,
    guildId: n,
    location: i,
    className: u,
    onNavigate: C
  } = e, x = (0, a.e7)([c.default], () => c.default.getUser(t), [t]), T = (0, a.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]), N = (0, d.f)(t, n);
  return null == x || null == T ? null : (0, l.jsxs)(r.Scroller, {
    className: s()(_.container, u),
    style: {
      backgroundColor: N
    },
    children: [(0, l.jsx)(I, {
      userId: t,
      guildId: n
    }), (0, l.jsxs)("div", {
      className: s()(_.innerContainer),
      children: [(0, l.jsx)(g.Z, {
        member: T
      }), (0, l.jsx)(f.Z, {
        userId: t,
        guildId: n
      }), (0, l.jsx)(E.Z, {
        member: T,
        onNavigate: C
      }), (0, l.jsx)(m.Z, {
        member: T
      }), (0, l.jsx)(h.Z, {
        member: T
      }), (0, l.jsx)(p.Z, {
        member: T
      })]
    })]
  })
}