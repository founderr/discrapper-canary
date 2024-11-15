t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(422034),
    s = t(938475),
    a = t(628146);
function o(e) {
    let { channel: n } = e;
    if (null == n) return null;
    let t = s.ZP.getVoiceStatesForChannel(n).slice(0, 6),
        o = t.map((e, n) => {
            let { user: s } = e;
            return (0, l.jsx)(
                r.O,
                {
                    affinity: s,
                    applyMask: n !== t.length - 1,
                    size: i.AvatarSizes.SIZE_20
                },
                s.id
            );
        });
    return (0, l.jsx)('div', {
        className: a.avatars,
        children: o
    });
}
