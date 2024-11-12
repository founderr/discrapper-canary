n.d(t, {
    C: function () {
        return i;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    u = n(399606),
    c = n(239091),
    d = n(40851),
    h = n(352978),
    f = n(27457),
    p = n(199902),
    m = n(592125),
    E = n(944486),
    v = n(981631),
    g = n(705617);
let _ = new Set([v.jm8.ENDED, v.jm8.FAILED, v.jm8.PAUSED]);
function C(e) {
    let { participant: t, width: i, locked: r, channel: o } = e,
        a = (0, d.bp)(),
        s = (0, u.e7)([p.Z], () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
        m = null != s && _.has(s.state);
    return !(null != s) || m
        ? null
        : (0, l.jsx)('div', {
              className: g.tileContainer,
              children: (0, l.jsx)(f.ZP, {
                  participant: t,
                  width: i,
                  className: g.tile,
                  fit: h.L.COVER,
                  inPopout: !0,
                  inCall: !0,
                  focused: r,
                  forceIdle: r,
                  channel: o,
                  onContextMenu: r
                      ? void 0
                      : (e, t) => {
                            (0, c.jW)(t, async () => {
                                let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                return (n) =>
                                    (0, l.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        exitFullscreen: () => {},
                                        appContext: a
                                    });
                            });
                        }
              })
          });
}
((r = i || (i = {})).HORIZONTAL = 'horizontal'),
    (r.VERTICAL = 'vertical'),
    (t.Z = o.memo(function (e) {
        let { tileWidth: t, layout: n, locked: i, streamParticipants: r, participantsVersion: o } = e,
            a = (0, u.e7)([E.Z], () => E.Z.getVoiceChannelId()),
            c = (0, u.e7)([m.Z], () => m.Z.getChannel(a), [a]);
        return (0, l.jsx)('div', {
            className: s()({
                [g.gridContainer]: !0,
                [g.vertical]: 'vertical' === n,
                [g.horizontal]: 'horizontal' === n
            }),
            children:
                null == c
                    ? []
                    : r.map((e) =>
                          (0, l.jsx)(
                              C,
                              {
                                  participant: e,
                                  width: t,
                                  locked: i,
                                  channel: c
                              },
                              e.user.id
                          )
                      )
        });
    }));
