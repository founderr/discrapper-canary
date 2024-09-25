n.d(t, {
    M: function () {
        return r;
    },
    Z: function () {
        return m;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(500923),
    u = n.n(l),
    c = n(570140),
    d = n(960020),
    _ = n(831244),
    E = n(815605),
    f = n(981631),
    h = n(153190);
!(function (e) {
    (e[(e.NORMAL = 16)] = 'NORMAL'), (e[(e.LARGE = 32)] = 'LARGE');
})(r || (r = {}));
let p = async (e) => {
    var t;
    let { effect: n } = e,
        r = await (0, _.T)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : f.lds, n.emoji.name),
        i = await (0, E.aB)(''.concat(n.channelId, ':').concat(n.messageId, ':').concat(n.emoji.name), n.url, r, n.color);
    return (i.assets[0].p = n.url), i;
};
function m(e) {
    let { className: t, effect: n, onComplete: r, emojiSize: o = 16 } = e,
        l = a.useRef(null),
        _ = o * E.Vz,
        f = (_ + o) / 2,
        m = 'translateY('.concat(f, 'px)');
    return (
        a.useEffect(() => {
            let e;
            if (null != n)
                return (
                    !(async function () {
                        if (null != l.current) {
                            let t = await p({ effect: n });
                            (e = u().loadAnimation({
                                container: l.current,
                                renderer: 'svg',
                                loop: !1,
                                autoplay: !0,
                                animationData: t
                            })).addEventListener('complete', () => {
                                null == r || r(), e.destroy();
                            }),
                                null != n.channelId &&
                                    null != n.messageId &&
                                    null != n.emoji &&
                                    n.key === d.I.HOVER &&
                                    c.Z.dispatch({
                                        type: 'BURST_REACTION_ANIMATION_ADD',
                                        channelId: n.channelId,
                                        messageId: n.messageId,
                                        emoji: n.emoji,
                                        animation: e
                                    });
                        }
                    })(),
                    () => {
                        null != e && e.destroy();
                    }
                );
        }, [r, n, o]),
        (0, i.jsx)('div', {
            className: h.effectsWrapper,
            children: (0, i.jsx)('div', {
                className: s()(h.effect, t),
                style: {
                    transform: m,
                    height: _,
                    width: _
                },
                ref: l
            })
        })
    );
}
