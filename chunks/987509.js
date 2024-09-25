n.d(t, {
    ZP: function () {
        return x;
    },
    dL: function () {
        return f;
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
    n(47120),
    n(653041);
var l = n(392711),
    s = n(493683),
    a = n(212819),
    r = n(938078),
    i = n(823385),
    o = n(592125),
    u = n(496675),
    c = n(594174),
    d = n(823379),
    h = n(41837),
    m = n(981631);
n(689938);
function f(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === m.d4z.DM
        ? {
              type: 'user',
              id: t.recipients[0]
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
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function E(e) {
    let t = _(e);
    if (null != t) return t;
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
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: a.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function M(e, t) {
    let n;
    let l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let s = [];
    for (let t of e) {
        if (null != t)
            if (t.type === a.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                !l.has(e) && (l.add(e), null != n && (s.push(n), (n = void 0)), s.push(t));
            }
    }
    return s;
}
function v(e, t) {
    return e.filter((e) => {
        var n, l;
        return (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, h.o)(e) && ((n = e), (l = t), n.type === a.h8.USER ? l || null != o.Z.getDMChannelFromUserId(n.record.id) : n.type === a.h8.GROUP_DM || (n.record.type !== m.d4z.GUILD_FORUM && n.record.type !== m.d4z.GUILD_MEDIA && u.Z.can(m.Plq.VIEW_CHANNEL, n.record) && u.Z.can(m.Plq.SEND_MESSAGES, n.record)))));
    });
}
function x(e) {
    let { results: t, hasQuery: n, queryMode: s, frequentChannels: a, targetDestination: o, selectedDestinations: u, pinnedDestinations: c, originDestination: d, includeMissingDMs: h } = e;
    if (n) return M(v(t, h));
    let m = null != c && c.length > 0 ? c.map((e) => S(e)) : [],
        f = i.Z.getChannelHistory(),
        g = f.length > 0 ? f.map((e) => (0, r.Z)(e)) : [],
        _ = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
        E = v([...m, null != o ? S(o) : null, ...g, ..._], h),
        x = (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
        p = null == d || x ? [] : [d.id];
    return null != s ? M(E.filter((e) => e.type === s)) : M(E, p).slice(0, 15);
}
