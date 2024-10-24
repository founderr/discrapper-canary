var i = n(200651),
    s = n(192379),
    a = n(481369),
    l = n(944103),
    r = n(946050),
    o = n(256413),
    c = n(292853),
    u = n(359565),
    d = n(226027);
t.Z = s.memo(function (e) {
    let { channel: t, narrow: n } = e,
        s = (0, o.Z)(t),
        h = (0, a.Z)(),
        { canRenderNotice: p, recordNoticeRender: m } = (0, l.Z)(t);
    return t.isArchivedLockedThread()
        ? (0, i.jsx)(u.s, {
              channel: t,
              narrow: n
          })
        : t.isLockedThread()
          ? (0, i.jsx)(u.q, {
                channel: t,
                narrow: n
            })
          : s && h.includes(d.E.OPT_IN_CHANNEL)
            ? (0, i.jsx)(c.Z, {
                  channel: t,
                  narrow: n
              })
            : p
              ? (0, i.jsx)(r.Z, {
                    channel: t,
                    onChannelChange: m
                })
              : null;
});
