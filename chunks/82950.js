t.d(n, {
    Z: function () {
        return a;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(207126),
    s = t(91783);
function a(e) {
    let { channel: n } = e;
    return (0, l.jsxs)('div', {
        className: s.channel,
        children: [
            (0, l.jsxs)('div', {
                className: s.channelLeft,
                children: [
                    (0, l.jsx)(i.VoiceNormalIcon, {}),
                    (0, l.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: n.name
                    })
                ]
            }),
            (0, l.jsx)(r.Z, { channel: n })
        ]
    });
}
