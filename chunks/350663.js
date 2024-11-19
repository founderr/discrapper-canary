n.d(t, {
    C: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
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
    v = n(944486),
    g = n(981631),
    E = n(900357);
let _ = new Set([g.jm8.ENDED, g.jm8.FAILED, g.jm8.PAUSED]);
function C(e) {
    let { participant: t, width: i, locked: l, channel: o } = e,
        a = (0, d.bp)(),
        s = (0, u.e7)([p.Z], () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
        m = null != s && _.has(s.state);
    return !(null != s) || m
        ? null
        : (0, r.jsx)('div', {
              className: E.tileContainer,
              children: (0, r.jsx)(f.ZP, {
                  participant: t,
                  width: i,
                  className: E.tile,
                  fit: h.L.COVER,
                  inPopout: !0,
                  inCall: !0,
                  focused: l,
                  forceIdle: l,
                  channel: o,
                  onContextMenu: l
                      ? void 0
                      : (e, t) => {
                            (0, c.jW)(t, async () => {
                                let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                return (n) =>
                                    (0, r.jsx)(t, {
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
((l = i || (i = {})).HORIZONTAL = 'horizontal'),
    (l.VERTICAL = 'vertical'),
    (t.Z = o.memo(function (e) {
        let { tileWidth: t, layout: n, locked: i, streamParticipants: l, participantsVersion: o } = e,
            a = (0, u.e7)([v.Z], () => v.Z.getVoiceChannelId()),
            c = (0, u.e7)([m.Z], () => m.Z.getChannel(a), [a]);
        return (0, r.jsx)('div', {
            className: s()({
                [E.gridContainer]: !0,
                [E.vertical]: 'vertical' === n,
                [E.horizontal]: 'horizontal' === n
            }),
            children:
                null == c
                    ? []
                    : l.map((e) =>
                          (0, r.jsx)(
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
