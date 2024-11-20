n.d(t, {
    C: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    u = n(399606),
    d = n(239091),
    c = n(40851),
    h = n(352978),
    f = n(27457),
    p = n(199902),
    m = n(592125),
    v = n(944486),
    g = n(981631),
    E = n(705617);
let Z = new Set([g.jm8.ENDED, g.jm8.FAILED, g.jm8.PAUSED]);
function C(e) {
    let { participant: t, width: i, locked: l, channel: r } = e,
        s = (0, c.bp)(),
        a = (0, u.e7)([p.Z], () => p.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
        m = null != a && Z.has(a.state);
    return !(null != a) || m
        ? null
        : (0, o.jsx)('div', {
              className: E.tileContainer,
              children: (0, o.jsx)(f.ZP, {
                  participant: t,
                  width: i,
                  className: E.tile,
                  fit: h.L.COVER,
                  inPopout: !0,
                  inCall: !0,
                  focused: l,
                  forceIdle: l,
                  channel: r,
                  onContextMenu: l
                      ? void 0
                      : (e, t) => {
                            (0, d.jW)(t, async () => {
                                let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                return (n) =>
                                    (0, o.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        exitFullscreen: () => {},
                                        appContext: s
                                    });
                            });
                        }
              })
          });
}
((l = i || (i = {})).HORIZONTAL = 'horizontal'),
    (l.VERTICAL = 'vertical'),
    (t.Z = r.memo(function (e) {
        let { tileWidth: t, layout: n, locked: i, streamParticipants: l, participantsVersion: r } = e,
            s = (0, u.e7)([v.Z], () => v.Z.getVoiceChannelId()),
            d = (0, u.e7)([m.Z], () => m.Z.getChannel(s), [s]);
        return (0, o.jsx)('div', {
            className: a()({
                [E.gridContainer]: !0,
                [E.vertical]: 'vertical' === n,
                [E.horizontal]: 'horizontal' === n
            }),
            children:
                null == d
                    ? []
                    : l.map((e) =>
                          (0, o.jsx)(
                              C,
                              {
                                  participant: e,
                                  width: t,
                                  locked: i,
                                  channel: d
                              },
                              e.user.id
                          )
                      )
        });
    }));
