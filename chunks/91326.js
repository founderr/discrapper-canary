var i = n(200651);
n(192379);
var r = n(442837),
    l = n(471445),
    a = n(862099),
    o = n(938475),
    s = n(388032),
    c = n(865840);
t.Z = function (e) {
    let { name: t, channel: n } = e,
        d = (0, r.Wu)(
            [o.ZP],
            () =>
                o.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        u = (0, l.KS)(n);
    return (0, i.jsx)(a.gt, {
        heading: s.intl.string(s.t['X2K3//']),
        topic: t,
        location: s.intl.string(s.t.LZA6NT),
        locationIcon:
            null != u
                ? (0, i.jsx)(u, {
                      size: 'xs',
                      color: 'currentColor',
                      className: c.icon
                  })
                : null,
        children: (0, i.jsx)(a.Co, {
            channel: n,
            speakers: d,
            voiceType: a.bZ.STUDY_ROOM
        })
    });
};
