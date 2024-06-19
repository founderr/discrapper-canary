n.d(t, {
  g: function() {
    return h
  }
});
var i = n(392711),
  s = n.n(i),
  a = n(995774),
  l = n(592125),
  o = n(542578),
  r = n(699516),
  u = n(5192),
  c = n(566006),
  d = n(689938);

function h(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.O.NORMAL,
    h = arguments.length > 3 ? arguments[3] : void 0,
    m = o.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
    p = l.Z.getChannel(e.getChannelId()),
    g = null == p || p.isPrivate() ? null : p.getGuildId(),
    T = e.getReaction(t),
    f = i === c.O.BURST,
    v = s()(m).reject(e => r.Z.isBlocked(e.id)).take(3).map(e => u.ZP.getName(g, null == p ? void 0 : p.id, e)).value();
  if (0 === v.length) return "";
  let E = {
      standard: {
        reactionTooltip1NInteractive: d.Z.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: d.Z.Messages.REACTION_TOOLTIP_1_N,
        reactionTooltip1: d.Z.Messages.REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: d.Z.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: d.Z.Messages.REACTION_TOOLTIP_2_N,
        reactionTooltip2: d.Z.Messages.REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: d.Z.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: d.Z.Messages.REACTION_TOOLTIP_3_N,
        reactionTooltip3: d.Z.Messages.REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: d.Z.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: d.Z.Messages.REACTION_TOOLTIP_N
      },
      burst: {
        reactionTooltip1NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: d.Z.Messages.BURST_REACTION_TOOLTIP_1_N,
        reactionTooltip1: d.Z.Messages.BURST_REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: d.Z.Messages.BURST_REACTION_TOOLTIP_2_N,
        reactionTooltip2: d.Z.Messages.BURST_REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: d.Z.Messages.BURST_REACTION_TOOLTIP_3_N,
        reactionTooltip3: d.Z.Messages.BURST_REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: d.Z.Messages.BURST_REACTION_TOOLTIP_N
      }
    },
    I = f ? E.burst : E.standard,
    N = Math.max(0, (null !== (n = f ? null == T ? void 0 : T.burst_count : null == T ? void 0 : T.count) && void 0 !== n ? n : 0) - v.length),
    x = (0, a.Lh)(t);
  if (1 === v.length) return N > 0 ? null != h ? I.reactionTooltip1NInteractive.format({
    a: v[0],
    n: N,
    emojiName: x,
    onClick: h
  }) : I.reactionTooltip1N.format({
    a: v[0],
    n: N,
    emojiName: x
  }) : I.reactionTooltip1.format({
    a: v[0],
    emojiName: x
  });
  if (2 === v.length) return N > 0 ? null != h ? I.reactionTooltip2NInteractive.format({
    a: v[0],
    b: v[1],
    n: N,
    emojiName: x,
    onClick: h
  }) : I.reactionTooltip2N.format({
    a: v[0],
    b: v[1],
    n: N,
    emojiName: x
  }) : I.reactionTooltip2.format({
    a: v[0],
    b: v[1],
    emojiName: x
  });
  if (3 === v.length) return N > 0 ? null != h ? I.reactionTooltip3NInteractive.format({
    a: v[0],
    b: v[1],
    c: v[2],
    n: N,
    emojiName: x,
    onClick: h
  }) : I.reactionTooltip3N.format({
    a: v[0],
    b: v[1],
    c: v[2],
    n: N,
    emojiName: x
  }) : I.reactionTooltip3.format({
    a: v[0],
    b: v[1],
    c: v[2],
    emojiName: x
  });
  else return null != h ? I.reactionTooltipNInteractive.format({
    n: N,
    emojiName: x,
    onClick: h
  }) : I.reactionTooltipN.format({
    n: N,
    emojiName: x
  })
}