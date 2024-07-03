n.d(t, {
    ZP: function () {
        return p;
    },
    dL: function () {
        return h;
    },
    hC: function () {
        return f;
    },
    qx: function () {
        return S;
    }
}), n(47120), n(653041);
var l = n(392711), a = n(493683), i = n(212819), s = n(938078), r = n(823385), c = n(592125), o = n(496675), u = n(594174), d = n(823379), _ = n(41837), E = n(981631);
n(689938);
function h(e) {
    let t = c.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === E.d4z.DM ? {
        type: 'user',
        id: t.recipients[0]
    } : {
        type: 'channel',
        id: e
    };
}
function f(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
async function S(e) {
    if ('channel' === e.type)
        return e.id;
    let t = c.Z.getDMFromUserId(e.id);
    if (null != t)
        return t;
    try {
        return await a.Z.getOrEnsurePrivateChannel(e.id);
    } catch (e) {
        return;
    }
}
function g(e) {
    if ('user' !== e.type)
        return (0, s.Z)(e.id);
    {
        let t = u.default.getUser(e.id);
        return null != t ? {
            type: i.h8.USER,
            record: t,
            score: 0
        } : null;
    }
}
function I(e, t) {
    let n;
    let l = new Set();
    if (null != t)
        for (let e of t)
            l.add(e);
    let a = [];
    for (let t of e) {
        if (null != t)
            if (t.type === i.h8.HEADER)
                n = t;
            else {
                let {id: e} = t.record;
                !l.has(e) && (l.add(e), null != n && (a.push(n), n = void 0), a.push(t));
            }
    }
    return a;
}
function A(e, t) {
    return e.filter(e => {
        var n, l;
        return (0, d.lm)(e) && (e.type === i.h8.HEADER || (0, _.o)(e) && (n = e, l = t, n.type === i.h8.USER ? l || null != c.Z.getDMChannelFromUserId(n.record.id) : n.type === i.h8.GROUP_DM || n.record.type !== E.d4z.GUILD_FORUM && n.record.type !== E.d4z.GUILD_MEDIA && o.Z.can(E.Plq.VIEW_CHANNEL, n.record) && o.Z.can(E.Plq.SEND_MESSAGES, n.record)));
    });
}
function p(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: a,
        frequentChannels: i,
        targetDestination: c,
        selectedDestinations: o,
        pinnedDestinations: u,
        originDestination: d,
        includeMissingDMs: _
    } = e;
    if (n)
        return I(A(t, _));
    let E = null != u && u.length > 0 ? u.map(e => g(e)) : [], h = r.Z.getChannelHistory(), f = h.length > 0 ? h.map(e => (0, s.Z)(e)) : [], S = i.length > 0 ? i.map(e => (0, s.Z)(e.id)) : [], p = A([
            ...E,
            null != c ? g(c) : null,
            ...f,
            ...S
        ], _), m = (null == o ? void 0 : o.find(e => (0, l.isEqual)(e, d))) != null, b = null == d || m ? [] : [d.id];
    return null != a ? I(p.filter(e => e.type === a)) : I(p, b).slice(0, 15);
}
