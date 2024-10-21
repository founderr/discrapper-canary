var i = n(200651),
    s = n(192379),
    a = n(450369),
    l = n(962824);
t.Z = s.memo(function (e) {
    let { channel: t, participants: n, tileWidth: s, selectedParticipant: r } = e;
    return (0, i.jsx)('div', {
        className: l.rowContainer,
        children: n.map((e) =>
            e.id === (null == r ? void 0 : r.id)
                ? null
                : (0, i.jsx)(
                      a.Z,
                      {
                          channel: t,
                          participant: e,
                          width: s
                      },
                      e.id
                  )
        )
    });
});
