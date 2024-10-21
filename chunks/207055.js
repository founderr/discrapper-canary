n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(846519),
    c = n(586902),
    u = n(317381),
    d = n(812206),
    h = n(835473),
    p = n(362721),
    m = n(574176),
    _ = n(106301),
    f = n(512384),
    E = n(470956),
    g = n(597998),
    C = n(199902),
    I = n(314897),
    T = n(271383),
    x = n(131951),
    v = n(496675),
    S = n(158776),
    N = n(885110),
    A = n(797258),
    Z = n(606304),
    M = n(979651),
    b = n(51144),
    R = n(649739),
    L = n(262317),
    j = n(981631),
    P = n(524484),
    O = n(373372);
let y = s.memo((e) => {
    var t;
    let { mute: n, deaf: s, user: a, channel: l, sessionId: o, nick: g } = e,
        v = a.id,
        O = (0, r.e7)([I.default], () => I.default.getId() === v, [v]),
        [y, D, U] = (0, r.Wu)([x.Z], () => (O ? [!x.Z.isSupported() || x.Z.isSelfMute() || x.Z.isSelfMutedTemporarily(), x.Z.isSelfDeaf(), !1] : [!x.Z.isSupported() || x.Z.isLocalMute(v), !1, x.Z.isLocalVideoDisabled(v)]), [O, v]),
        k = (0, r.e7)([Z.Z], () => Z.Z.isPrioritySpeaker(v)),
        w = (0, c.Z)({
            userId: v,
            checkSoundSharing: !0
        }),
        B = (0, r.e7)([T.ZP], () => T.ZP.isGuestOrLurker(l.guild_id, v)),
        H = (0, r.e7)(
            [u.ZP],
            () =>
                u.ZP.getEmbeddedActivitiesForChannel(l.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(v);
                }),
            [v, l.id]
        ),
        G = (0, h.Z)(null != H ? [H.applicationId] : []),
        V = (0, R.Hr)('voice_users_eligibility_check', !1),
        F = (0, r.e7)([S.Z, N.Z], () => (O ? N.Z.getActivities() : S.Z.getActivities(v, l.guild_id))).find((e) => null != e.application_id && e.type === j.IIU.PLAYING),
        W = (0, r.e7)([d.Z], () => ((null == F ? void 0 : F.application_id) != null ? d.Z.getApplication(null == F ? void 0 : F.application_id) : void 0));
    null != W && R.ZP.trackExposure({ location: 'voice_users' });
    let [z, Y] = (0, r.Wu)([C.Z], () => [C.Z.getStreamForUser(v, l.getGuildId()), C.Z.getActiveStreamForUser(v, l.getGuildId())], [l, v]),
        K = (0, r.e7)([A.Z], () => A.Z.getSessionById(o)),
        q = b.ZP.useName(a),
        X = (0, r.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(l.id, v), [l.id, v]),
        { enableHangStatus: J } = m.n.useExperiment({
            guildId: l.guild_id,
            location: 'VoiceUsers'
        }),
        Q = (0, p.Z)(l, !0, a),
        $ = (0, r.e7)([_.Z], () => (O ? _.Z.getHangStatusActivity() : null), [O]),
        ee = (0, r.e7)([S.Z], () => S.Z.findActivity(v, (e) => e.type === j.IIU.HANG_STATUS), [v]),
        et = (0, E.Eu)(l.id, v);
    return (0, i.jsx)(f.Z, {
        shakeLocation: P.oZ.VOICE_USER,
        isShaking: w,
        children: (0, i.jsx)(L.ZP, {
            ...e,
            nick: null != g ? g : q,
            canDrag: e.canDrag && !B,
            otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
            voicePlatform: X,
            localMute: y && !O,
            localVideoDisabled: U,
            mute: n || y,
            deaf: s || D,
            speaking: w,
            disconnected: et,
            priority: k,
            embeddedApplication: G[0],
            isStreaming: null != z && z.channelId === l.id,
            isWatching: null != Y && Y.state !== j.jm8.ENDED,
            isGuest: B,
            showHangStatus: Q && J && (I.default.getId() === a.id || null != ee),
            hangStatusActivity: O ? $ : ee,
            isSelf: I.default.getId() === a.id,
            application: J || V ? W : void 0
        })
    });
});
y.displayName = 'ConnectedVoiceUser';
let D = [];
t.Z = function (e) {
    let { allowPreviews: t = !0, allowDragging: n = !0, channel: a, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: p, location: m, numAudience: _, withGuildIcon: f = !1, className: C, children: T } = e,
        [x, N] = s.useState(null),
        [A, Z] = s.useState(!1),
        M = s.useRef(null),
        b = (0, E.Es)(a.id, null != c ? c : D),
        R = s.useRef(
            new o.sW(50, () => {
                N(M.current), (M.current = null);
            })
        ),
        P = s.useRef(
            new o.sW(175, () => {
                N(null);
            })
        ),
        U = s.useCallback(
            (e) => {
                t && (Z(!0), P.current.cancel(), (M.current = e), R.current.delay());
            },
            [t]
        ),
        k = s.useCallback(
            (e) => {
                t && (R.current.cancel(), x === e && (Z(!1), P.current.delay()));
            },
            [t, x]
        ),
        w = (0, r.Wu)([S.Z], () => {
            if (u) return [];
            let e = new Set();
            return (
                null == b ||
                    b.forEach((t) => {
                        let { user: n } = t;
                        S.Z.getActivities(n.id, a.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                Array.from(e)
            );
        });
    (0, h.Z)(w);
    let B = (() => {
        if (null == b || 0 === b.length) return null;
        let e = (u && b.length > d + 1 ? b.slice(0, d) : b).map((e) => {
            var t;
            let { user: s, nick: l, voiceState: r } = e;
            return (0, i.jsx)(
                y,
                {
                    user: s,
                    nick: l,
                    isSelfOnOtherClient: I.default.getId() === s.id && r.sessionId !== I.default.getSessionId(),
                    mute: r.isVoiceMuted(),
                    deaf: r.isVoiceDeafened(),
                    video: r.selfVideo,
                    serverMute: r.mute,
                    serverDeaf: r.deaf,
                    sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : '',
                    channel: a,
                    collapsed: u,
                    canDrag: n && v.Z.can(j.Plq.MOVE_MEMBERS, a),
                    showPreview: U,
                    hidePreview: k,
                    previewIsOpen: A,
                    shouldShowPreview: x === s.id,
                    tabIndex: p,
                    location: m
                },
                s.id
            );
        });
        return (
            null != _ && _ > 0
                ? e.push(
                      (0, i.jsx)(L.ul, {
                          collapsed: u,
                          numAudience: _
                      })
                  )
                : u && b.length > d + 1 && e.push((0, i.jsx)(L.XX, { numUsers: b.length - d })),
            e
        );
    })();
    return null == B && null == T
        ? null
        : (0, i.jsxs)(g.e, {
              className: l()(C, O.list, {
                  [O.collapsed]: u,
                  [O.withGuildIcon]: f
              }),
              collapsed: u,
              children: [B, T]
          });
};
