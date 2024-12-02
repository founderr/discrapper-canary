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
        { voiceChannels: N, currentActivities: S, partiedMembers: T, applicationStreams: b, guildContext: x } = t,
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
    for (let { activity: e } of (N.length > 0 &&
        N.forEach((e) => {
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
        b.length > 0 &&
            v &&
            b.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                Z(
                    (0, i.jsx)(
                        f.Z.ApplicationStreamingSection,
                        {
                            guildId: null == x ? void 0 : x.id,
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
        S.forEach((e, t) => {
            var n, r, l, m, g, _, v, b, A;
            let { activity: L, game: y, playingMembers: P, activityUser: O } = e;
            if (null == L || null == L.type) return null;
            if (S.length > 1 && L.type === I.IIU.PLAYING && !(0, a.Z)(L) && null != y)
                Z(
                    (0, i.jsx)(
                        f.Z.GameSection,
                        {
                            icon: y.getIconURL(E.Z),
                            name: y.name,
                            partySize: {
                                knownSize: P.length,
                                unknownSize: 0,
                                totalSize: P.length
                            },
                            members: P
                        },
                        'game-'.concat(null !== (n = L.session_id) && void 0 !== n ? n : t, '-').concat(null !== (r = L.application_id) && void 0 !== r ? r : t)
                    )
                );
            else if ((0, s.Z)(L)) {
                let e = new Set(P.map((e) => e.id)),
                    t = null === (l = N.find((e) => null != e)) || void 0 === l ? void 0 : l.channel;
                null != t &&
                    Z(
                        (0, i.jsx)(
                            f.Z.EmbeddedActivitySection,
                            {
                                activity: L,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(L.application_id)
                        )
                    );
            } else if ((null != L.assets || (0, a.Z)(L)) && L.type === I.IIU.PLAYING)
                Z(
                    (0, i.jsx)(
                        f.Z.RichPresenceSection,
                        {
                            activity: L,
                            getAssetImage: p.getAssetImage
                        },
                        'rich-presence-'.concat(null !== (m = L.session_id) && void 0 !== m ? m : t, '-').concat(O.id)
                    )
                );
            else if ((0, d.Z)(L)) {
                let e = N.length > 0 && N[0].members.length > 1,
                    n = P.length > 1;
                Z(
                    (0, i.jsx)(
                        f.Z.TwitchSection,
                        {
                            guildId: null == x ? void 0 : x.id,
                            activity: L,
                            user: e || n ? O : null,
                            getAssetImage: p.getAssetImage
                        },
                        'streaming-'.concat(null !== (g = L.session_id) && void 0 !== g ? g : t)
                    )
                );
            } else
                (0, o.Z)(L)
                    ? Z(
                          (0, i.jsx)(
                              f.Z.SpotifySection,
                              {
                                  activity: L,
                                  isSolo: 1 === T.length,
                                  partySize: {
                                      knownSize: P.length,
                                      unknownSize: 0,
                                      totalSize: P.length
                                  },
                                  getAssetImage: p.getAssetImage,
                                  members: P
                              },
                              'spotify-'.concat(null !== (_ = L.session_id) && void 0 !== _ ? _ : t, '-').concat(O.id)
                          )
                      )
                    : (null != L.assets || (0, a.Z)(L)) && L.type === I.IIU.LISTENING
                      ? Z(
                            (0, i.jsx)(
                                f.Z.RichPresenceSection,
                                {
                                    activity: L,
                                    getAssetImage: p.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (v = L.session_id) && void 0 !== v ? v : t, '-').concat(O.id)
                            )
                        )
                      : (0, c.Z)(L) && Z((0, i.jsx)(f.Z.XboxSection, { title: y.name }, 'xbox-'.concat(null !== (b = L.session_id) && void 0 !== b ? b : t)));
            null != C && null != y && (0, u._D)(L, C) && Z((0, i.jsx)(h.Z, { quest: C }, 'quest-'.concat(C.id, '-').concat(null !== (A = L.session_id) && void 0 !== A ? A : t)));
        }),
        A.length > 0 ? (0, i.jsx)(f.Z.Body, { children: A }) : null
    );
}
