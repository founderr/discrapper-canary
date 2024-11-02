n.d(t, {
    AT: function () {
        return p;
    },
    fC: function () {
        return _;
    },
    gr: function () {
        return g;
    },
    hQ: function () {
        return r;
    }
});
var i,
    r,
    l = n(192379),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    c = n(493683),
    u = n(336197),
    d = n(131704),
    m = n(592125),
    f = n(981631),
    h = n(388032);
function p(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let r = 0 === i ? h.t.TjNWND : h.t.H4gnX1,
        l = 0 === i ? h.t.haia19 : h.t['Uq7Y+/'],
        a = n > t;
    return {
        dueInText: h.intl.formatToPlainString(a ? l : r, {
            duration: o()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: a
    };
}
function g(e) {
    let t = (0, s.e7)([m.Z], () => m.Z.getChannel(e.saveData.channelId));
    return l.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new d.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: f.d4z.UNKNOWN,
                        name: h.intl.string(h.t.J90oLS)
                    })
                  : void 0,
        [t, e]
    );
}
async function _(e, t) {
    if ((null == t ? void 0 : t.type) === f.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await c.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await c.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, u.Z)(f.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId));
}
((i = r || (r = {}))[(i.LONG = 0)] = 'LONG'), (i[(i.SHORT = 1)] = 'SHORT');
