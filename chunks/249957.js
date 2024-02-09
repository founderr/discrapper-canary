"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  o = n("26989"),
  u = n("697218"),
  d = n("339123"),
  c = n("763225"),
  f = n("703433"),
  h = n("21363"),
  p = n("68777"),
  m = n("608973"),
  E = n("132881"),
  C = n("63893");

function g(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, c.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s(C.header),
    style: {
      backgroundColor: l
    },
    children: [(0, a.jsxs)("div", {
      className: s(C.headerTitle),
      children: [(0, a.jsx)(d.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: "Mod View"
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: C.keyComboInner,
        className: C.keyComboContainer
      })
    })]
  })
}

function S(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: d,
    onNavigate: S
  } = e, _ = (0, i.default)([u.default], () => u.default.getUser(t), [t]), I = (0, i.default)([o.default], () => o.default.getMember(n, t), [n, t]), T = (0, c.useProfileThemedPanelBackground)(t, n);
  return null == _ || null == I ? null : (0, a.jsxs)(r.Scroller, {
    className: s(C.container, d),
    style: {
      backgroundColor: T
    },
    children: [(0, a.jsx)(g, {
      userId: t,
      guildId: n
    }), (0, a.jsxs)("div", {
      className: s(C.innerContainer),
      children: [(0, a.jsx)(m.default, {
        member: I
      }), (0, a.jsx)(E.default, {
        userId: t,
        guildId: n,
        onNavigate: S
      }), (0, a.jsx)(h.default, {
        member: I
      }), (0, a.jsx)(f.default, {
        member: I
      }), (0, a.jsx)(p.default, {
        member: I
      })]
    })]
  })
}