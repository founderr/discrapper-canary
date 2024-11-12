n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041),
    n(47120);
var i = n(200651);
n(192379);
var r = n(287734),
    l = n(872810),
    a = n(122810),
    s = n(841784),
    o = n(503438),
    c = n(802856),
    d = n(420660),
    u = n(918701),
    h = n(23404),
    m = n(769654),
    p = n(81063),
    g = n(761282),
    f = n(358924),
    _ = n(868854),
    E = n(817915),
    I = n(981631);
function C(e) {
    let { party: t, onChannelContextMenu: n, quest: C } = e,
        v = (0, _.L)(),
        { voiceChannels: S, currentActivities: N, partiedMembers: T, applicationStreams: x, guildContext: b } = t,
        A = [],
        Z = (e) => {
            var t, n;
            let { length: r } = A;
            if (0 === r) {
                A.push(e);
                return;
            }
            let l = A[r - 1],
                a = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
                s = ''.concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : '').startsWith('game') && a.startsWith('rich-presence');
            A.push((0, i.jsx)(f.Z.Separator, { inset: s }, 'sep-'.concat(a))), A.push(e);
        };
    for (let { activity: e } of (S.length > 0 &&
        S.forEach((e) => {
            let { members: t, channel: r, guild: l } = e;
            Z(
                (0, i.jsx)(
                    f.Z.VoiceSection,
                    {
                        guild: l,
                        channel: r,
                        members: t,
                        partySize: (function (e, t) {
                            let n;
                            let i = e.length,
                                r = 0;
                            !1;
                            n = i + r;
                            return {
                                knownSize: i,
                                unknownSize: r,
                                totalSize: n
                            };
                        })(t),
                        onChannelContextMenu: n,
                        onGuildClick: () => {
                            (0, m.X)(l.id);
                        }
                    },
                    'voice-'.concat(r.id)
                )
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = g.ct(e);
            if (null != t) {
                Z(t);
                break;
            }
        }
    return (
        x.length > 0 &&
            v &&
            x.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                Z(
                    (0, i.jsx)(
                        f.Z.ApplicationStreamingSection,
                        {
                            guildId: null == b ? void 0 : b.id,
                            user: n,
                            activity: a,
                            applicationStream: t,
                            onPreviewClick: () => {
                                r.default.selectVoiceChannel(t.channelId), (0, l.iV)(t);
                            }
                        },
                        'application-stream-'.concat(t.ownerId)
                    )
                );
            }),
        N.forEach((e, t) => {
            var n, r, l, m, g, _, v, x, A;
            let { activity: y, game: L, playingMembers: R, activityUser: j } = e;
            if (null == y || null == y.type) return null;
            if (N.length > 1 && y.type === I.IIU.PLAYING && !(0, a.Z)(y) && null != L)
                Z(
                    (0, i.jsx)(
                        f.Z.GameSection,
                        {
                            icon: L.getIconURL(E.Z),
                            name: L.name,
                            partySize: {
                                knownSize: R.length,
                                unknownSize: 0,
                                totalSize: R.length
                            },
                            members: R
                        },
                        'game-'.concat(null !== (n = y.session_id) && void 0 !== n ? n : t, '-').concat(null !== (r = y.application_id) && void 0 !== r ? r : t)
                    )
                );
            else if ((0, s.Z)(y)) {
                let e = new Set(R.map((e) => e.id)),
                    t = null === (l = S.find((e) => null != e)) || void 0 === l ? void 0 : l.channel;
                null != t &&
                    Z(
                        (0, i.jsx)(
                            f.Z.EmbeddedActivitySection,
                            {
                                activity: y,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(y.application_id)
                        )
                    );
            } else if ((null != y.assets || (0, a.Z)(y)) && y.type === I.IIU.PLAYING)
                Z(
                    (0, i.jsx)(
                        f.Z.RichPresenceSection,
                        {
                            activity: y,
                            getAssetImage: p.getAssetImage
                        },
                        'rich-presence-'.concat(null !== (m = y.session_id) && void 0 !== m ? m : t, '-').concat(j.id)
                    )
                );
            else if ((0, d.Z)(y)) {
                let e = S.length > 0 && S[0].members.length > 1,
                    n = R.length > 1;
                Z(
                    (0, i.jsx)(
                        f.Z.TwitchSection,
                        {
                            guildId: null == b ? void 0 : b.id,
                            activity: y,
                            user: e || n ? j : null,
                            getAssetImage: p.getAssetImage
                        },
                        'streaming-'.concat(null !== (g = y.session_id) && void 0 !== g ? g : t)
                    )
                );
            } else
                (0, o.Z)(y)
                    ? Z(
                          (0, i.jsx)(
                              f.Z.SpotifySection,
                              {
                                  activity: y,
                                  isSolo: 1 === T.length,
                                  partySize: {
                                      knownSize: R.length,
                                      unknownSize: 0,
                                      totalSize: R.length
                                  },
                                  getAssetImage: p.getAssetImage,
                                  members: R
                              },
                              'spotify-'.concat(null !== (_ = y.session_id) && void 0 !== _ ? _ : t, '-').concat(j.id)
                          )
                      )
                    : (null != y.assets || (0, a.Z)(y)) && y.type === I.IIU.LISTENING
                      ? Z(
                            (0, i.jsx)(
                                f.Z.RichPresenceSection,
                                {
                                    activity: y,
                                    getAssetImage: p.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (v = y.session_id) && void 0 !== v ? v : t, '-').concat(j.id)
                            )
                        )
                      : (0, c.Z)(y) && Z((0, i.jsx)(f.Z.XboxSection, { title: L.name }, 'xbox-'.concat(null !== (x = y.session_id) && void 0 !== x ? x : t)));
            null != C && null != L && (0, u._D)(y, C) && Z((0, i.jsx)(h.Z, { quest: C }, 'quest-'.concat(C.id, '-').concat(null !== (A = y.session_id) && void 0 !== A ? A : t)));
        }),
        A.length > 0 ? (0, i.jsx)(f.Z.Body, { children: A }) : null
    );
}
