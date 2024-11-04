t.d(n, {
    Ou: function () {
        return f;
    },
    SR: function () {
        return r;
    },
    YD: function () {
        return p;
    }
}),
    t(411104);
var r,
    o,
    i = t(512722),
    l = t.n(i),
    a = t(493683),
    s = t(904245),
    c = t(957730),
    u = t(592125),
    d = t(669079);
((o = r || (r = {})).ACTION = 'action'), (o.LOOP = 'loop'), (o.IDLE = 'idle');
let p = async (e, n) => {
        if (null == n) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let t = await a.Z.openPrivateChannel(e.id).then((e) => {
                let n = u.Z.getChannel(e);
                if ((l()(null != n, 'PrivateChannel is null'), null == n)) throw Error('Channel must be defined');
                return n;
            }),
            r = (0, d.Nz)(n);
        return s.Z.sendMessage(t.id, c.ZP.parse(t, r), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    f = (e) => {};
