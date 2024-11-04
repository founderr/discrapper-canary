var i = n(200651);
n(192379);
var r = n(442837),
    a = n(471445),
    l = n(862099),
    s = n(938475),
    o = n(388032),
    c = n(362057);
t.Z = function (e) {
    let { name: t, channel: n } = e,
        d = (0, r.Wu)(
            [s.ZP],
            () =>
                s.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        u = (0, a.KS)(n);
    return (0, i.jsx)(l.gt, {
        heading: o.intl.string(o.t['X2K3//']),
        topic: t,
        location: o.intl.string(o.t.LZA6NT),
        locationIcon:
            null != u
                ? (0, i.jsx)(u, {
                      size: 'xs',
                      color: 'currentColor',
                      className: c.icon
                  })
                : null,
        children: (0, i.jsx)(l.Co, {
            channel: n,
            speakers: d,
            voiceType: l.bZ.STUDY_ROOM
        })
    });
};
