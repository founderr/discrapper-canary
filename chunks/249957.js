"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
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
  m = n("68777"),
  p = n("463278"),
  E = n("608973"),
  g = n("132881"),
  S = n("63893");

function C(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, c.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, a.jsxs)("div", {
    className: s(S.header),
    style: {
      backgroundColor: l
    },
    children: [(0, a.jsxs)("div", {
      className: s(S.headerTitle),
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
        keyClassName: S.keyComboInner,
        className: S.keyComboContainer
      })
    })]
  })
}

function _(e) {
  let {
    userId: t,
    guildId: n,
    location: l,
    className: d,
    onNavigate: _
  } = e, I = (0, i.default)([u.default], () => u.default.getUser(t), [t]), T = (0, i.default)([o.default], () => o.default.getMember(n, t), [n, t]), v = (0, c.useProfileThemedPanelBackground)(t, n);
  return null == I || null == T ? null : (0, a.jsxs)(r.Scroller, {
    className: s(S.container, d),
    style: {
      backgroundColor: v
    },
    children: [(0, a.jsx)(C, {
      userId: t,
      guildId: n
    }), (0, a.jsxs)("div", {
      className: s(S.innerContainer),
      children: [(0, a.jsx)(E.default, {
        member: T
      }), (0, a.jsx)(g.default, {
        userId: t,
        guildId: n,
        onNavigate: _
      }), (0, a.jsx)(p.default, {
        member: T,
        onNavigate: _
      }), (0, a.jsx)(h.default, {
        member: T
      }), (0, a.jsx)(f.default, {
        member: T
      }), (0, a.jsx)(m.default, {
        member: T
      })]
    })]
  })
}