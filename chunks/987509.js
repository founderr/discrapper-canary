t.d(n, {
    ZP: function () {
        return p;
    },
    dL: function () {
        return m;
    },
    hC: function () {
        return g;
    },
    hl: function () {
        return _;
    },
    qx: function () {
        return E;
    }
}),
    t(47120),
    t(653041);
var l = t(392711),
    s = t(493683),
    a = t(212819),
    r = t(938078),
    i = t(823385),
    o = t(592125),
    u = t(496675),
    c = t(594174),
    d = t(823379),
    h = t(41837),
    f = t(981631);
t(689938);
function m(e) {
    let n = o.Z.getChannel(e);
    return (null == n ? void 0 : n.type) === f.d4z.DM
        ? {
              type: 'user',
              id: n.recipients[0]
          }
        : {
              type: 'channel',
              id: e
          };
}
function g(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function _(e) {
    if ('channel' === e.type) return e.id;
    let n = o.Z.getDMFromUserId(e.id);
    if (null != n) return n;
}
async function E(e) {
    let n = _(e);
    if (null != n) return n;
    if ('user' === e.type)
        try {
            return await s.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function S(e) {
    if ('user' !== e.type) return (0, r.Z)(e.id);
    {
        let n = c.default.getUser(e.id);
        return null != n
            ? {
                  type: a.h8.USER,
                  record: n,
                  score: 0
              }
            : null;
    }
}
function M(e, n) {
    let t;
    let l = new Set();
    if (null != n) for (let e of n) l.add(e);
    let s = [];
    for (let n of e) {
        if (null != n)
            if (n.type === a.h8.HEADER) t = n;
            else {
                let { id: e } = n.record;
                !l.has(e) && (l.add(e), null != t && (s.push(t), (t = void 0)), s.push(n));
            }
    }
    return s;
}
function v(e, n) {
    return e.filter((e) => {
        var t, l;
        return (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, h.o)(e) && ((t = e), (l = n), t.type === a.h8.USER ? l || null != o.Z.getDMChannelFromUserId(t.record.id) : t.type === a.h8.GROUP_DM || (t.record.type !== f.d4z.GUILD_FORUM && t.record.type !== f.d4z.GUILD_MEDIA && u.Z.can(f.Plq.VIEW_CHANNEL, t.record) && u.Z.can(f.Plq.SEND_MESSAGES, t.record)))));
    });
}
function p(e) {
    let { results: n, hasQuery: t, queryMode: s, frequentChannels: a, targetDestination: o, selectedDestinations: u, pinnedDestinations: c, originDestination: d, includeMissingDMs: h } = e;
    if (t) return M(v(n, h));
    let f = null != c && c.length > 0 ? c.map((e) => S(e)) : [],
        m = i.Z.getChannelHistory(),
        g = m.length > 0 ? m.map((e) => (0, r.Z)(e)) : [],
        _ = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
        E = v([...f, null != o ? S(o) : null, ...g, ..._], h),
        p = (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
        x = null == d || p ? [] : [d.id];
    return null != s ? M(E.filter((e) => e.type === s)) : M(E, x).slice(0, 15);
}
