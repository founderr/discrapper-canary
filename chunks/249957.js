"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
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
  S = n("132881"),
  g = n("865331");

function C(e) {
  let {
    userId: t,
    guildId: n
  } = e, a = (0, c.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, l.jsxs)("div", {
    className: s(g.header),
    style: {
      backgroundColor: a
    },
    children: [(0, l.jsxs)("div", {
      className: s(g.headerTitle),
      children: [(0, l.jsx)(d.default, {
        width: 16,
        height: 16
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: "Mod View"
      })]
    }), (0, l.jsx)("div", {
      children: (0, l.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: g.keyComboInner,
        className: g.keyComboContainer
      })
    })]
  })
}

function _(e) {
  let {
    userId: t,
    guildId: n,
    location: a,
    className: d,
    onNavigate: _
  } = e, I = (0, i.default)([u.default], () => u.default.getUser(t), [t]), T = (0, i.default)([o.default], () => o.default.getMember(n, t), [n, t]), v = (0, c.useProfileThemedPanelBackground)(t, n);
  return null == I || null == T ? null : (0, l.jsxs)(r.Scroller, {
    className: s(g.container, d),
    style: {
      backgroundColor: v
    },
    children: [(0, l.jsx)(C, {
      userId: t,
      guildId: n
    }), (0, l.jsxs)("div", {
      className: s(g.innerContainer),
      children: [(0, l.jsx)(E.default, {
        member: T
      }), (0, l.jsx)(S.default, {
        userId: t,
        guildId: n
      }), (0, l.jsx)(p.default, {
        member: T,
        onNavigate: _
      }), (0, l.jsx)(h.default, {
        member: T
      }), (0, l.jsx)(f.default, {
        member: T
      }), (0, l.jsx)(m.default, {
        member: T
      })]
    })]
  })
}