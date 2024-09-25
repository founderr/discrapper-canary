n.d(t, {
    Ou: function () {
        return E;
    },
    SR: function () {
        return r;
    },
    YD: function () {
        return _;
    }
});
var r,
    i = n(411104);
var a = n(512722),
    o = n.n(a),
    s = n(493683),
    l = n(904245),
    u = n(957730),
    c = n(592125),
    d = n(669079);
!(function (e) {
    (e.ACTION = 'action'), (e.LOOP = 'loop'), (e.IDLE = 'idle');
})(r || (r = {}));
let _ = async (e, t) => {
        if (null == t) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let n = await s.Z.openPrivateChannel(e.id).then((e) => {
                let t = c.Z.getChannel(e);
                if ((o()(null != t, 'PrivateChannel is null'), null == t)) throw Error('Channel must be defined');
                return t;
            }),
            r = (0, d.Nz)(t);
        return l.Z.sendMessage(n.id, u.ZP.parse(n, r), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    E = (e) => {};
