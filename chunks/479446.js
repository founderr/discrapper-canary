n.d(t, {
    Ou: function () {
        return g;
    },
    SR: function () {
        return i;
    },
    YD: function () {
        return h;
    }
}),
    n(411104);
var i,
    r,
    s = n(512722),
    a = n.n(s),
    l = n(493683),
    o = n(904245),
    c = n(957730),
    u = n(592125),
    d = n(669079);
((r = i || (i = {})).ACTION = 'action'), (r.LOOP = 'loop'), (r.IDLE = 'idle');
let h = async (e, t) => {
        if (null == t) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let n = await l.Z.openPrivateChannel(e.id).then((e) => {
                let t = u.Z.getChannel(e);
                if ((a()(null != t, 'PrivateChannel is null'), null == t)) throw Error('Channel must be defined');
                return t;
            }),
            i = (0, d.Nz)(t);
        return o.Z.sendMessage(n.id, c.ZP.parse(n, i), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    g = (e) => {};
