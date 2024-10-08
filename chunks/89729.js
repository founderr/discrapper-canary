n.d(t, {
    g: function () {
        return h;
    }
});
var i = n(392711),
    s = n.n(i),
    o = n(995774),
    a = n(592125),
    l = n(542578),
    r = n(699516),
    c = n(5192),
    d = n(566006),
    u = n(689938);
function h(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.O.NORMAL,
        h = arguments.length > 3 ? arguments[3] : void 0,
        m = l.Z.getReactions(e.getChannelId(), e.id, t, 3, i),
        p = a.Z.getChannel(e.getChannelId()),
        g = null == p || p.isPrivate() ? null : p.getGuildId(),
        f = e.getReaction(t),
        _ = i === d.O.BURST,
        T = s()(m)
            .reject((e) => r.Z.isBlocked(e.id))
            .take(3)
            .map((e) => c.ZP.getName(g, null == p ? void 0 : p.id, e))
            .value();
    if (0 === T.length) return '';
    let v = {
            standard: {
                reactionTooltip1NInteractive: u.Z.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                reactionTooltip1N: u.Z.Messages.REACTION_TOOLTIP_1_N,
                reactionTooltip1: u.Z.Messages.REACTION_TOOLTIP_1,
                reactionTooltip2NInteractive: u.Z.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                reactionTooltip2N: u.Z.Messages.REACTION_TOOLTIP_2_N,
                reactionTooltip2: u.Z.Messages.REACTION_TOOLTIP_2,
                reactionTooltip3NInteractive: u.Z.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                reactionTooltip3N: u.Z.Messages.REACTION_TOOLTIP_3_N,
                reactionTooltip3: u.Z.Messages.REACTION_TOOLTIP_3,
                reactionTooltipNInteractive: u.Z.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                reactionTooltipN: u.Z.Messages.REACTION_TOOLTIP_N
            },
            burst: {
                reactionTooltip1NInteractive: u.Z.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                reactionTooltip1N: u.Z.Messages.BURST_REACTION_TOOLTIP_1_N,
                reactionTooltip1: u.Z.Messages.BURST_REACTION_TOOLTIP_1,
                reactionTooltip2NInteractive: u.Z.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                reactionTooltip2N: u.Z.Messages.BURST_REACTION_TOOLTIP_2_N,
                reactionTooltip2: u.Z.Messages.BURST_REACTION_TOOLTIP_2,
                reactionTooltip3NInteractive: u.Z.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                reactionTooltip3N: u.Z.Messages.BURST_REACTION_TOOLTIP_3_N,
                reactionTooltip3: u.Z.Messages.BURST_REACTION_TOOLTIP_3,
                reactionTooltipNInteractive: u.Z.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                reactionTooltipN: u.Z.Messages.BURST_REACTION_TOOLTIP_N
            }
        },
        E = _ ? v.burst : v.standard,
        b = Math.max(0, (null !== (n = _ ? (null == f ? void 0 : f.burst_count) : null == f ? void 0 : f.count) && void 0 !== n ? n : 0) - T.length),
        I = (0, o.Lh)(t);
    if (1 === T.length)
        return b > 0
            ? null != h
                ? E.reactionTooltip1NInteractive.format({
                      a: T[0],
                      n: b,
                      emojiName: I,
                      onClick: h
                  })
                : E.reactionTooltip1N.format({
                      a: T[0],
                      n: b,
                      emojiName: I
                  })
            : E.reactionTooltip1.format({
                  a: T[0],
                  emojiName: I
              });
    if (2 === T.length)
        return b > 0
            ? null != h
                ? E.reactionTooltip2NInteractive.format({
                      a: T[0],
                      b: T[1],
                      n: b,
                      emojiName: I,
                      onClick: h
                  })
                : E.reactionTooltip2N.format({
                      a: T[0],
                      b: T[1],
                      n: b,
                      emojiName: I
                  })
            : E.reactionTooltip2.format({
                  a: T[0],
                  b: T[1],
                  emojiName: I
              });
    if (3 === T.length)
        return b > 0
            ? null != h
                ? E.reactionTooltip3NInteractive.format({
                      a: T[0],
                      b: T[1],
                      c: T[2],
                      n: b,
                      emojiName: I,
                      onClick: h
                  })
                : E.reactionTooltip3N.format({
                      a: T[0],
                      b: T[1],
                      c: T[2],
                      n: b,
                      emojiName: I
                  })
            : E.reactionTooltip3.format({
                  a: T[0],
                  b: T[1],
                  c: T[2],
                  emojiName: I
              });
    else
        return null != h
            ? E.reactionTooltipNInteractive.format({
                  n: b,
                  emojiName: I,
                  onClick: h
              })
            : E.reactionTooltipN.format({
                  n: b,
                  emojiName: I
              });
}
