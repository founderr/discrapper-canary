t.d(n, {
    IG: function () {
        return M;
    },
    JK: function () {
        return c;
    },
    ZA: function () {
        return u;
    },
    _m: function () {
        return N;
    },
    ft: function () {
        return O;
    },
    yN: function () {
        return g;
    }
}),
    t(47120);
var i = t(399606),
    s = t(87051),
    a = t(592125),
    _ = t(9156),
    d = t(621600),
    r = t(423589),
    l = t(113449),
    L = t(686660),
    S = t(981631),
    E = t(490897),
    o = t(526761);
function u(e) {
    let n = (0, i.e7)([_.ZP], () => _.ZP.resolveUnreadSetting(e)),
        t = (0, i.e7)([_.ZP], () => _.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: t,
        preset: (0, L.gs)(n, t)
    };
}
function g(e) {
    let n = (0, i.Wu)([_.ZP], () =>
            (0, r.OD)(_.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [t, s] = (0, i.Wu)(
            [_.ZP, a.Z],
            () => {
                let t = a.Z.getChannel(e.parent_id);
                return null != t && n.includes(t.id) ? ['parent', (0, L.p1)((0, L.gs)(_.ZP.resolveUnreadSetting(t), _.ZP.resolvedMessageNotifications(t)))] : ['guild', (0, L.p1)((0, L.gs)(_.ZP.getGuildUnreadSetting(e.guild_id), _.ZP.getMessageNotifications(e.guild_id)))];
            },
            [e.guild_id, e.parent_id, n]
        );
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: t,
        inheritedPreset: s
    };
}
function N(e, n, t) {
    let i = _.ZP.getChannelIdFlags(e, n);
    t === L.s8.ALL_MESSAGES
        ? s.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: S.bL.ALL_MESSAGES,
                  flags: (0, l.pq)(i, o.ic.UNREADS_ALL_MESSAGES)
              },
              d.ZB.PresetAll
          )
        : t === L.s8.MENTIONS
          ? s.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: S.bL.ONLY_MENTIONS,
                    flags: (0, l.pq)(i, o.ic.UNREADS_ONLY_MENTIONS)
                },
                d.ZB.PresetMentions
            )
          : t === L.s8.NOTHING &&
            s.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: S.bL.NO_MESSAGES,
                    flags: (0, l.pq)(i, o.ic.UNREADS_ONLY_MENTIONS)
                },
                d.ZB.PresetNothing
            );
}
function c(e, n) {
    s.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: S.bL.NULL,
            flags: (0, l.YF)(_.ZP.getChannelIdFlags(e, n))
        },
        d.ZB.PresetDefault
    );
}
function M(e, n, t) {
    let i = _.ZP.getChannelIdFlags(e, n);
    s.Z.updateChannelOverrideSettings(e, n, { flags: (0, l.pq)(i, t === E.i.ALL_MESSAGES ? o.ic.UNREADS_ALL_MESSAGES : o.ic.UNREADS_ONLY_MENTIONS) }, d.UE.unreads(t));
}
function O(e, n, t) {
    s.Z.updateChannelOverrideSettings(e, n, { message_notifications: t }, d.UE.notifications(t));
}
