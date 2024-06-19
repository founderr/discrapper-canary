t.d(n, {
  Z: function() {
    return A
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  u = t(543241),
  s = t(222677),
  c = t(995774),
  d = t(665906),
  E = t(695346),
  f = t(496675),
  M = t(768581),
  g = t(176354),
  m = t(981631),
  I = t(185923),
  Z = t(689938),
  _ = t(219005);
let v = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function S(e) {
  var n;
  let {
    emoji: t,
    isFocused: a
  } = e, {
    animated: r,
    src: u,
    surrogates: s
  } = t;
  return null == u && null != t.id ? u = M.ZP.getEmojiURL({
    id: t.id,
    animated: !!r,
    size: 20
  }) : null == u && (u = g.ZP.getURL(s)), (0, i.jsx)(o.Tooltip, {
    text: t.allNamesString,
    hideOnClick: !0,
    spacing: 16,
    forceOpen: a,
    children: e => (0, i.jsx)("div", {
      "aria-label": Z.Z.Messages.ADD_REACTION_NAMED.format({
        emojiName: t.name
      }),
      className: l()(_.button, {
        [_.focused]: a
      }),
      ...e,
      children: null == u || "" === u.trim() ? (0, i.jsx)("span", {
        className: l()("emoji", "emoji-text", _.icon),
        ...e,
        children: s
      }) : (0, i.jsx)("img", {
        className: _.icon,
        src: u,
        alt: ""
      })
    })
  }, null !== (n = t.id) && void 0 !== n ? n : t.name)
}

function A(e, n) {
  let t = (0, u.MZ)(n.guild_id).filter(e => {
    var t;
    return !(e.useSpriteSheet && v.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : "") >= 0) && !g.ZP.isEmojiPremiumLocked({
      emoji: e,
      channel: n,
      intention: I.Hz.REACTION
    })
  });
  t.length > 4 && (t.length = 4);
  let a = E.nc.useSetting(),
    l = (0, d.$R)(n),
    M = (0, r.e7)([f.Z], () => a && l && (n.isPrivate() || f.Z.can(m.Plq.ADD_REACTIONS, n)), [n, l, a]),
    Z = t => {
      (0, s.rU)(n.id, e.id, (0, c.g1)(t), void 0)
    };
  return M && t.length > 0 ? (0, i.jsx)(o.MenuGroup, {
    className: _.wrapper,
    children: t.map((e, n) => {
      var t;
      return (0, i.jsx)(o.MenuItem, {
        id: "quickreact-".concat(null !== (t = e.id) && void 0 !== t ? t : n),
        render: n => {
          let {
            isFocused: t
          } = n;
          return (0, i.jsx)(S, {
            emoji: e,
            isFocused: t
          })
        },
        action: () => Z(e),
        dontCloseOnActionIfHoldingShiftKey: !0
      }, n)
    })
  }) : null
}