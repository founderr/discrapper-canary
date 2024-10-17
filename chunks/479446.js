t.d(n, {
    Ou: function () {
        return f;
    },
    SR: function () {
        return o;
    },
    YD: function () {
        return p;
    }
}),
    t(411104);
var o,
    r,
    l = t(512722),
    i = t.n(l),
    a = t(493683),
    s = t(904245),
    c = t(957730),
    u = t(592125),
    d = t(669079);
((r = o || (o = {})).ACTION = 'action'), (r.LOOP = 'loop'), (r.IDLE = 'idle');
let p = async (e, n) => {
        if (null == n) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let t = await a.Z.openPrivateChannel(e.id).then((e) => {
                let n = u.Z.getChannel(e);
                if ((i()(null != n, 'PrivateChannel is null'), null == n)) throw Error('Channel must be defined');
                return n;
            }),
            o = (0, d.Nz)(n);
        return s.Z.sendMessage(t.id, c.ZP.parse(t, o), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    f = (e) => {};
