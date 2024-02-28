"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  s = n("446674"),
  u = n("77078"),
  r = n("788506"),
  d = n("166257"),
  o = n("432173"),
  c = n("300322"),
  f = n("845579"),
  E = n("957255"),
  M = n("315102"),
  m = n("402671"),
  g = n("49111"),
  S = n("958706"),
  I = n("782340"),
  p = n("755640");
let h = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function v(e) {
  var t;
  let {
    emoji: n,
    isFocused: i
  } = e, {
    animated: s,
    src: r,
    surrogates: d
  } = n;
  return null == r && null != n.id ? r = M.default.getEmojiURL({
    id: n.id,
    animated: !!s,
    size: 20
  }) : null == r && (r = m.default.getURL(d)), (0, a.jsx)(u.Tooltip, {
    text: n.allNamesString,
    hideOnClick: !0,
    spacing: 16,
    forceOpen: i,
    children: e => (0, a.jsx)("div", {
      "aria-label": I.default.Messages.ADD_REACTION_NAMED.format({
        emojiName: n.name
      }),
      className: l(p.button, {
        [p.focused]: i
      }),
      ...e,
      children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
        className: l("emoji", "emoji-text", p.icon),
        ...e,
        children: d
      }) : (0, a.jsx)("img", {
        className: p.icon,
        src: r,
        alt: ""
      })
    })
  }, null !== (t = n.id) && void 0 !== t ? t : n.name)
}

function _(e, t) {
  let n = (0, r.useEmojiInPriorityOrder)(t.guild_id),
    i = n.filter(e => {
      var n;
      return !(e.useSpriteSheet && h.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !m.default.isEmojiPremiumLocked({
        emoji: e,
        channel: t,
        intention: S.EmojiIntention.REACTION
      })
    });
  i.length > 4 && (i.length = 4);
  let l = f.RenderReactions.useSetting(),
    M = (0, c.useIsActiveChannelOrUnarchivableThread)(t),
    I = (0, s.useStateFromStores)([E.default], () => l && M && (t.isPrivate() || E.default.can(g.Permissions.ADD_REACTIONS, t)), [t, M, l]),
    _ = n => {
      (0, d.addReaction)(t.id, e.id, (0, o.toReactionEmoji)(n), void 0)
    };
  return I && i.length > 0 ? (0, a.jsx)(u.MenuGroup, {
    className: p.wrapper,
    children: i.map((e, t) => {
      var n;
      return (0, a.jsx)(u.MenuItem, {
        id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
        render: t => {
          let {
            isFocused: n
          } = t;
          return (0, a.jsx)(v, {
            emoji: e,
            isFocused: n
          })
        },
        action: () => _(e),
        dontCloseOnActionIfHoldingShiftKey: !0
      }, t)
    })
  }) : null
}