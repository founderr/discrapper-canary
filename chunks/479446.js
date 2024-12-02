n.d(t, {
    Ou: function () {
        return _;
    },
    SR: function () {
        return r;
    },
    YD: function () {
        return f;
    }
}),
    n(411104);
var r,
    i,
    a = n(512722),
    s = n.n(a),
    o = n(493683),
    l = n(904245),
    u = n(957730),
    c = n(592125),
    d = n(669079);
((i = r || (r = {})).ACTION = 'action'), (i.LOOP = 'loop'), (i.IDLE = 'idle');
let f = async (e, t) => {
        if (null == t) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let n = await o.Z.openPrivateChannel(e.id).then((e) => {
                let t = c.Z.getChannel(e);
                if ((s()(null != t, 'PrivateChannel is null'), null == t)) throw Error('Channel must be defined');
                return t;
            }),
            r = (0, d.Nz)(t);
        return l.Z.sendMessage(n.id, u.ZP.parse(n, r), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    _ = (e) => {};
