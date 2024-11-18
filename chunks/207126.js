n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(422034),
    a = n(938475),
    s = n(628146);
function o(e) {
    let { channel: t } = e;
    if (null == t) return null;
    let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        o = n.map((e, t) => {
            let { user: a } = e;
            return (0, r.jsx)(
                i.O,
                {
                    affinity: a,
                    applyMask: t !== n.length - 1,
                    size: l.AvatarSizes.SIZE_20
                },
                a.id
            );
        });
    return (0, r.jsx)('div', {
        className: s.avatars,
        children: o
    });
}
