n.d(t, {
    ny: function () {
        return i;
    },
    pj: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(592125);
let c = 5 * n(70956).Z.Millis.SECOND;
((a = r || (r = {}))[(a.STRANGER_DANGER = 1)] = 'STRANGER_DANGER'), (a[(a.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = 'INAPPROPRIATE_CONVERSATION_TIER_1'), (a[(a.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = 'INAPPROPRIATE_CONVERSATION_TIER_2'), ((s = i || (i = {}))[(s.UPVOTE = 0)] = 'UPVOTE'), (s[(s.DOWNVOTE = 1)] = 'DOWNVOTE');
let d = [],
    f = {},
    _ = new Set();
function h(e) {
    let { safetyWarnings: t } = e;
    null != t &&
        ((f[e.id] = t),
        t.some((e) => {
            var t;
            return (
                (2 === (t = e).type || 3 === t.type) &&
                null != e.dismiss_timestamp &&
                !(function (e) {
                    return new Date(e).getTime() > Date.now() - c;
                })(e.dismiss_timestamp)
            );
        })
            ? _.add(e.id)
            : _.delete(e.id)),
        null == t && (null != f[e.id] && delete f[e.id], _.delete(e.id));
}
function p() {
    (f = {}),
        Object.values(u.Z.getMutablePrivateChannels()).forEach((e) => {
            h(e);
        });
}
class m extends o.ZP.Store {
    initialize() {
        this.waitFor(u.Z);
    }
    getChannelSafetyWarning(e, t) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : d;
    }
    hasShownInitialTooltipForChannel(e) {
        return _.has(e);
    }
}
t.ZP = new m(l.Z, {
    CHANNEL_CREATE: function (e) {
        h(e.channel);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null != f[t.id] && delete f[t.id], _.delete(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        e.channels.forEach((e) => {
            h(e);
        });
    },
    CONNECTION_OPEN: p,
    CONNECTION_OPEN_SUPPLEMENTAL: p,
    CHANNEL_SAFETY_WARNING_FEEDBACK: function (e) {
        let { channelId: t, warningId: n, feedbackType: r } = e,
            i = f[t];
        if (null != i)
            f[t] = i.map((e) =>
                e.id === n
                    ? {
                          ...e,
                          feedback_type: r
                      }
                    : e
            );
    },
    CLEAR_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t } = e,
            n = f[t];
        if ((_.delete(t), null != n))
            f[t] = n.map((e) => ({
                ...e,
                dismiss_timestamp: void 0
            }));
    },
    DISMISS_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t, warningIds: n } = e,
            r = f[t];
        if (null == r) return;
        let i = new Date().toISOString();
        f[t] = r.map((e) =>
            n.includes(e.id)
                ? {
                      ...e,
                      dismiss_timestamp: i
                  }
                : e
        );
    },
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function (e) {
        let { channelId: t } = e;
        _.add(t);
    }
});
