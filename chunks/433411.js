t.d(s, {
  Z: function() {
    return N
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(906732),
  c = t(864106),
  E = t(1585),
  d = t(580747),
  _ = t(345861),
  T = t(150039),
  S = t(993413),
  u = t(689938),
  I = t(688898);

function N(e) {
  let {
    user: s,
    guild: t,
    className: a,
    sectionTitle: _,
    forcedDivider: N = !1,
    withTutorial: C = !1,
    isTryItOutFlow: O = !1
  } = e, {
    analyticsLocations: m
  } = (0, o.ZP)(), h = null != t, {
    userAvatarDecoration: g,
    guildAvatarDecoration: R,
    pendingAvatarDecoration: M,
    pendingErrors: x
  } = (0, T.$U)(s, t), p = (0, d.Z)("enable_avatar_decoration_uploads"), D = i.useCallback(() => (0, E.ps)({
    analyticsLocations: m,
    isTryItOutFlow: O,
    guild: t
  }), [m, O, t]), L = O || void 0 !== M ? null != M : (h ? R : g) != null, P = C ? r.ShinyButton : r.Button;
  return (0, n.jsxs)(S.Z, {
    className: a,
    forcedDivider: N,
    hasBackground: !0,
    title: _,
    errors: x,
    children: [(0, n.jsxs)("div", {
      className: I.buttonsContainer,
      children: [(0, n.jsx)(P, {
        size: r.Button.Sizes.SMALL,
        onClick: D,
        className: l()({
          [I.buttonHighlighted]: C
        }),
        children: u.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), L && (0, n.jsx)(r.Button, {
        className: I.removeButton,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.SMALL,
        onClick: function() {
          (0, T.PO)(null == t ? void 0 : t.id, null)
        },
        children: (0, c.ad)(s, t) ? u.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : u.Z.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })]
    }), s.isStaff() && p && (0, n.jsx)(A, {
      user: s
    })]
  })
}
let A = e => {
  let {
    user: s
  } = e;
  return (0, n.jsxs)("div", {
    className: I.overrideButtonsContainer,
    children: [(0, n.jsx)(r.Text, {
      variant: "text-xs/bold",
      children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
    }), (0, n.jsx)(_.Z, {
      onChange: e => {
        null != e && (s.avatarDecoration = {
          asset: e,
          skuID: "PALUE000000001"
        })
      },
      buttonCTA: "Upload Override"
    })]
  })
}