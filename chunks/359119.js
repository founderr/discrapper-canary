n.d(t, {
    ny: function () {
        return i;
    },
    pj: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(592125);
let u = 5 * n(70956).Z.Millis.SECOND;
!(function (e) {
    (e[(e.STRANGER_DANGER = 1)] = 'STRANGER_DANGER'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = 'INAPPROPRIATE_CONVERSATION_TIER_1'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = 'INAPPROPRIATE_CONVERSATION_TIER_2');
})(r || (r = {})),
    !(function (e) {
        (e[(e.UPVOTE = 0)] = 'UPVOTE'), (e[(e.DOWNVOTE = 1)] = 'DOWNVOTE');
    })(i || (i = {}));
let c = [],
    d = {},
    _ = new Set();
function E(e) {
    return 2 === e.type || 3 === e.type;
}
function f(e) {
    let { safetyWarnings: t } = e;
    null != t && ((d[e.id] = t), t.some((e) => E(e) && null != e.dismiss_timestamp && !v(e.dismiss_timestamp)) ? _.add(e.id) : _.delete(e.id)), null == t && (null != d[e.id] && delete d[e.id], _.delete(e.id));
}
function h(e) {
    f(e.channel);
}
function p(e) {
    e.channels.forEach((e) => {
        f(e);
    });
}
function m(e) {
    let { channel: t } = e;
    null != d[t.id] && delete d[t.id], _.delete(t.id);
}
function I(e) {
    let { channelId: t, warningId: n, feedbackType: r } = e,
        i = d[t];
    if (null != i)
        d[t] = i.map((e) =>
            e.id === n
                ? {
                      ...e,
                      feedback_type: r
                  }
                : e
        );
}
function T(e) {
    let { channelId: t } = e,
        n = d[t];
    if ((_.delete(t), null != n))
        d[t] = n.map((e) => ({
            ...e,
            dismiss_timestamp: void 0
        }));
}
function g(e) {
    let { channelId: t, warningIds: n } = e,
        r = d[t];
    if (null == r) return;
    let i = new Date().toISOString();
    d[t] = r.map((e) =>
        n.includes(e.id)
            ? {
                  ...e,
                  dismiss_timestamp: i
              }
            : e
    );
}
function S(e) {
    let { channelId: t } = e;
    _.add(t);
}
function A() {
    (d = {}),
        Object.values(l.Z.getMutablePrivateChannels()).forEach((e) => {
            f(e);
        });
}
function v(e) {
    return new Date(e).getTime() > Date.now() - u;
}
class N extends o.ZP.Store {
    initialize() {
        this.waitFor(l.Z);
    }
    getChannelSafetyWarning(e, t) {
        var n;
        return null === (n = d[e]) || void 0 === n ? void 0 : n.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : c;
    }
    hasShownInitialTooltipForChannel(e) {
        return _.has(e);
    }
}
t.ZP = new N(s.Z, {
    CHANNEL_CREATE: h,
    CHANNEL_DELETE: m,
    CHANNEL_UPDATES: p,
    CONNECTION_OPEN: A,
    CONNECTION_OPEN_SUPPLEMENTAL: A,
    CHANNEL_SAFETY_WARNING_FEEDBACK: I,
    CLEAR_CHANNEL_SAFETY_WARNINGS: T,
    DISMISS_CHANNEL_SAFETY_WARNINGS: g,
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: S
});
