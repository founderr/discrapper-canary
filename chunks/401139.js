var i = n(200651),
    l = n(192379),
    r = n(450369),
    s = n(962824);
t.Z = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: a } = e;
    return (0, i.jsx)('div', {
        className: s.rowContainer,
        children: n.map((e) =>
            e.id === (null == a ? void 0 : a.id)
                ? null
                : (0, i.jsx)(
                      r.Z,
                      {
                          channel: t,
                          participant: e,
                          width: l
                      },
                      e.id
                  )
        )
    });
});
