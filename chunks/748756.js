a.d(n, {
    V: function () {
        return d;
    }
}),
    a(399606);
var t = a(92114),
    c = a(9156),
    i = a(621600),
    o = a(113449),
    r = a(686660),
    l = a(981631),
    s = a(526761);
function d(e, n) {
    let a = c.ZP.getGuildFlags(e);
    n === r.s8.ALL_MESSAGES
        ? t.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: l.bL.ALL_MESSAGES,
                  flags: (0, o.Q4)(a, s.vc.UNREADS_ALL_MESSAGES)
              },
              i.ZB.PresetAll
          )
        : n === r.s8.MENTIONS
          ? t.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: l.bL.ONLY_MENTIONS,
                    flags: (0, o.Q4)(a, s.vc.UNREADS_ONLY_MENTIONS)
                },
                i.ZB.PresetMentions
            )
          : n === r.s8.NOTHING &&
            t.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: l.bL.NO_MESSAGES,
                    flags: (0, o.Q4)(a, s.vc.UNREADS_ONLY_MENTIONS)
                },
                i.ZB.PresetNothing
            );
}
