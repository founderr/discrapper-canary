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
    l,
    i = t(512722),
    r = t.n(i),
    a = t(493683),
    s = t(904245),
    u = t(957730),
    c = t(592125),
    d = t(669079);
((l = o || (o = {})).ACTION = 'action'), (l.LOOP = 'loop'), (l.IDLE = 'idle');
let p = async (e, n) => {
        if (null == n) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let t = await a.Z.openPrivateChannel(e.id).then((e) => {
                let n = c.Z.getChannel(e);
                if ((r()(null != n, 'PrivateChannel is null'), null == n)) throw Error('Channel must be defined');
                return n;
            }),
            o = (0, d.Nz)(n);
        return s.Z.sendMessage(t.id, u.ZP.parse(t, o), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    f = (e) => {};
