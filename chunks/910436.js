n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(653041),
    n(47120);
var i = n(200651);
n(192379);
var a = n(287734),
    s = n(872810),
    r = n(122810),
    l = n(841784),
    o = n(503438),
    c = n(802856),
    d = n(420660),
    u = n(918701),
    _ = n(23404),
    E = n(769654),
    h = n(81063),
    m = n(761282),
    I = n(358924),
    p = n(868854),
    g = n(817915),
    T = n(981631);
function f(e) {
    let { party: t, onChannelContextMenu: n, quest: f } = e,
        C = (0, p.L)(),
        { voiceChannels: S, currentActivities: N, partiedMembers: A, applicationStreams: v, guildContext: Z } = t,
        L = [],
        R = (e) => {
            var t, n;
            let { length: a } = L;
            if (0 === a) {
                L.push(e);
                return;
            }
            let s = L[a - 1],
                r = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
                l = ''.concat(null !== (n = null == s ? void 0 : s.key) && void 0 !== n ? n : '').startsWith('game') && r.startsWith('rich-presence');
            L.push((0, i.jsx)(I.Z.Separator, { inset: l }, 'sep-'.concat(r))), L.push(e);
        };
    for (let { activity: e } of (S.length > 0 &&
        S.forEach((e) => {
            let { members: t, channel: a, guild: s } = e;
            R(
                (0, i.jsx)(
                    I.Z.VoiceSection,
                    {
                        guild: s,
                        channel: a,
                        members: t,
                        partySize: (function (e, t) {
                            let n;
                            let i = e.length,
                                a = 0;
                            !1;
                            n = i + a;
                            return {
                                knownSize: i,
                                unknownSize: a,
                                totalSize: n
                            };
                        })(t),
                        onChannelContextMenu: n,
                        onGuildClick: () => {
                            (0, E.X)(s.id);
                        }
                    },
                    'voice-'.concat(a.id)
                )
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = m.ct(e);
            if (null != t) {
                R(t);
                break;
            }
        }
    return (
        v.length > 0 &&
            C &&
            v.forEach((e) => {
                let { stream: t, streamUser: n, activity: r } = e;
                R(
                    (0, i.jsx)(
                        I.Z.ApplicationStreamingSection,
                        {
                            guildId: null == Z ? void 0 : Z.id,
                            user: n,
                            activity: r,
                            applicationStream: t,
                            onPreviewClick: () => {
                                a.default.selectVoiceChannel(t.channelId), (0, s.iV)(t);
                            }
                        },
                        'application-stream-'.concat(t.ownerId)
                    )
                );
            }),
        N.forEach((e, t) => {
            var n, a, s, E, m, p, C, v, L;
            let { activity: O, game: x, playingMembers: b, activityUser: M } = e;
            if (null == O || null == O.type) return null;
            if (N.length > 1 && O.type === T.IIU.PLAYING && !(0, r.Z)(O) && null != x)
                R(
                    (0, i.jsx)(
                        I.Z.GameSection,
                        {
                            icon: x.getIconURL(g.Z),
                            name: x.name,
                            partySize: {
                                knownSize: b.length,
                                unknownSize: 0,
                                totalSize: b.length
                            },
                            members: b
                        },
                        'game-'.concat(null !== (n = O.session_id) && void 0 !== n ? n : t, '-').concat(null !== (a = O.application_id) && void 0 !== a ? a : t)
                    )
                );
            else if ((0, l.Z)(O)) {
                let e = new Set(b.map((e) => e.id)),
                    t = null === (s = S.find((e) => null != e)) || void 0 === s ? void 0 : s.channel;
                null != t &&
                    R(
                        (0, i.jsx)(
                            I.Z.EmbeddedActivitySection,
                            {
                                activity: O,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(O.application_id)
                        )
                    );
            } else if ((null != O.assets || (0, r.Z)(O)) && O.type === T.IIU.PLAYING)
                R(
                    (0, i.jsx)(
                        I.Z.RichPresenceSection,
                        {
                            activity: O,
                            getAssetImage: h.getAssetImage
                        },
                        'rich-presence-'.concat(null !== (E = O.session_id) && void 0 !== E ? E : t, '-').concat(M.id)
                    )
                );
            else if ((0, d.Z)(O)) {
                let e = S.length > 0 && S[0].members.length > 1,
                    n = b.length > 1;
                R(
                    (0, i.jsx)(
                        I.Z.TwitchSection,
                        {
                            guildId: null == Z ? void 0 : Z.id,
                            activity: O,
                            user: e || n ? M : null,
                            getAssetImage: h.getAssetImage
                        },
                        'streaming-'.concat(null !== (m = O.session_id) && void 0 !== m ? m : t)
                    )
                );
            } else
                (0, o.Z)(O)
                    ? R(
                          (0, i.jsx)(
                              I.Z.SpotifySection,
                              {
                                  activity: O,
                                  isSolo: 1 === A.length,
                                  partySize: {
                                      knownSize: b.length,
                                      unknownSize: 0,
                                      totalSize: b.length
                                  },
                                  getAssetImage: h.getAssetImage,
                                  members: b
                              },
                              'spotify-'.concat(null !== (p = O.session_id) && void 0 !== p ? p : t, '-').concat(M.id)
                          )
                      )
                    : (null != O.assets || (0, r.Z)(O)) && O.type === T.IIU.LISTENING
                      ? R(
                            (0, i.jsx)(
                                I.Z.RichPresenceSection,
                                {
                                    activity: O,
                                    getAssetImage: h.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (C = O.session_id) && void 0 !== C ? C : t, '-').concat(M.id)
                            )
                        )
                      : (0, c.Z)(O) && R((0, i.jsx)(I.Z.XboxSection, { title: x.name }, 'xbox-'.concat(null !== (v = O.session_id) && void 0 !== v ? v : t)));
            null != f && null != x && (0, u._D)(O, f) && R((0, i.jsx)(_.Z, { quest: f }, 'quest-'.concat(f.id, '-').concat(null !== (L = O.session_id) && void 0 !== L ? L : t)));
        }),
        L.length > 0 ? (0, i.jsx)(I.Z.Body, { children: L }) : null
    );
}
