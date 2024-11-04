var i = n(200651),
    l = n(192379),
    r = n(481369),
    s = n(944103),
    a = n(946050),
    o = n(256413),
    c = n(292853),
    u = n(359565),
    d = n(226027);
t.Z = l.memo(function (e) {
    let { channel: t, narrow: n } = e,
        l = (0, o.Z)(t),
        h = (0, r.Z)(),
        { canRenderNotice: m, recordNoticeRender: p } = (0, s.Z)(t);
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
          : l && h.includes(d.E.OPT_IN_CHANNEL)
            ? (0, i.jsx)(c.Z, {
                  channel: t,
                  narrow: n
              })
            : m
              ? (0, i.jsx)(a.Z, {
                    channel: t,
                    onChannelChange: p
                })
              : null;
});
