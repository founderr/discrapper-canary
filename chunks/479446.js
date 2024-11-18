n.d(t, {
    Ou: function () {
        return p;
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
    l = n.n(s),
    a = n(493683),
    o = n(904245),
    c = n(957730),
    u = n(592125),
    d = n(669079);
((r = i || (i = {})).ACTION = 'action'), (r.LOOP = 'loop'), (r.IDLE = 'idle');
let h = async (e, t) => {
        if (null == t) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let n = await a.Z.openPrivateChannel(e.id).then((e) => {
                let t = u.Z.getChannel(e);
                if ((l()(null != t, 'PrivateChannel is null'), null == t)) throw Error('Channel must be defined');
                return t;
            }),
            i = (0, d.Nz)(t);
        return o.Z.sendMessage(n.id, c.ZP.parse(n, i), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    p = (e) => {};
