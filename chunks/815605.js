n.d(t, {
    Vz: function () {
        return c;
    },
    Zn: function () {
        return f;
    },
    aB: function () {
        return E;
    }
});
var r = n(757143);
var i = n(392711);
var a = n(772848),
    o = n(134432),
    s = n(963838),
    l = n(302221),
    u = n(347904);
let c = 7.5,
    d = 128,
    _ = 32,
    E = (0, i.memoize)(
        (e, t, n, r) =>
            new Promise((e) => {
                let i = new Image();
                (i.src = t),
                    (i.crossOrigin = 'Anonymous'),
                    (i.onload = () => {
                        let t = _ * (0, o.x_)(),
                            a = JSON.stringify(n);
                        if ((null != r && (a = (0, u.s4)(a, (0, l.oo)(r))), (i.width === t && i.height === t) || (0 === i.width && 0 === i.height))) e(JSON.parse(a));
                        else {
                            let t = (d / i.width) * i.height;
                            e(JSON.parse((a = (a = a.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
                        }
                    });
            })
    );
function f(e, t, n, r) {
    let { emojiSize: i, key: o, messageId: l } = null != r ? r : {},
        u = null != i ? 2 * i : void 0,
        c = (0, s._r)(e, u);
    return {
        channelId: n,
        messageId: l,
        emoji: e,
        animationId: (0, a.Z)(),
        url: c,
        key: o,
        color: t
    };
}
