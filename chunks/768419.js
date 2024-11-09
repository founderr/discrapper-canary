let r, i, a;
n(47120), n(653041), n(724458), n(757143), n(789020);
var s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(261470),
    f = n(442837),
    _ = n(902704),
    h = n(846519),
    p = n(570140),
    m = n(586902),
    g = n(726542),
    E = n(524331),
    v = n(710845),
    I = n(594190),
    S = n(314897),
    T = n(553795),
    b = n(517100),
    y = n(158776),
    A = n(606304),
    N = n(979651),
    C = n(626135),
    R = n(81063),
    O = n(70956),
    D = n(823379),
    L = n(781518),
    x = n(616922),
    w = n(981631);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let P = g.Z.get(w.ABu.SPOTIFY),
    k = 'hm://pusher/v1/connections/',
    U = 30 * O.Z.Millis.SECOND,
    G = 30 * O.Z.Millis.SECOND,
    B = 5 * O.Z.Millis.MINUTE,
    Z = 5 * O.Z.Millis.SECOND,
    F = 1.5 * O.Z.Millis.SECOND,
    V = 1 * O.Z.Millis.MINUTE,
    j = 3 * O.Z.Millis.SECOND;
((l = s || (s = {})).PLAYER_STATE_CHANGED = 'PLAYER_STATE_CHANGED'), (l.DEVICE_STATE_CHANGED = 'DEVICE_STATE_CHANGED');
let H = {
        MESSAGE: 'message',
        PING: 'ping',
        PONG: 'pong'
    },
    Y = 'single',
    W = new v.Z('Spotify'),
    K = new h.V7(),
    z = new h.V7(),
    q = new h.V7(),
    Q = new h.V7(),
    X = new h.V7(),
    J = {},
    $ = {},
    ee = {},
    et = !1,
    en = null;
function er() {
    for (let e in J) {
        let t = J[e];
        if (!t.connected || null == $[e]) continue;
        let n = $[e].find((e) => e.is_active);
        if (null != n)
            return {
                socket: t,
                device: n
            };
    }
}
function ei(e) {
    p.Z.dispatch({
        type: 'SPOTIFY_PLAYER_STATE',
        accountId: e,
        track: null,
        volumePercent: 0,
        isPlaying: !1,
        repeat: !1,
        position: 0,
        context: null
    });
}
function ea(e) {
    return y.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, x.Ps)(e.party.id));
}
let es = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eo {
    get connected() {
        return null != this.socket && es.has(this.socket.readyState);
    }
    connect() {
        !this.connected &&
            !this._requestedConnect &&
            (W.info('WS Connecting'),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            eg(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1), (this.socket = new WebSocket(''.concat('wss://dealer.spotify.com/?access_token=').concat(this.accessToken))), (this.socket.onopen = this.handleOpen.bind(this)), (this.socket.onmessage = this.handleMessage.bind(this)), (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    W.error(e), (this._requestedConnect = !1), this.handleClose();
                }));
    }
    disconnect() {
        (this._requestedDisconnect = !0), this.backoff.cancel();
        try {
            var e;
            null === (e = this.socket) || void 0 === e || e.close();
        } catch (e) {}
    }
    ping() {
        var e;
        this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({ type: H.PING })));
    }
    handleOpen() {
        W.info('WS Connected'), this.backoff.succeed(), this.pingInterval.start(U, () => this.ping()), (0, L.Ai)(this.accountId, this.accessToken), (0, L.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ('string' != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        switch (n) {
            case H.MESSAGE:
                if ('string' == typeof r && r.startsWith(k)) (this.connectionId = decodeURIComponent(r.split(k)[1])), (0, L.am)(this.accountId, this.accessToken, this.connectionId);
                else if (Array.isArray(i)) {
                    for (let { events: e } of i) if (null != e) for (let t of e) this.handleEvent(t);
                }
            case H.PONG:
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    !this._requestedDisconnect && this.connect();
                });
                W.info('WS Disconnected. Next retry in '.concat(Math.round(e), 'ms'));
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case 'PLAYER_STATE_CHANGED':
                null != n && null != n.state && em(this.accountId, this.accessToken, n.state);
                break;
            case 'DEVICE_STATE_CHANGED':
                this.handleDeviceStateChange();
        }
    }
    constructor(e, t) {
        M(this, 'accessToken', void 0),
            M(this, 'accountId', void 0),
            M(this, 'connectionId', void 0),
            M(this, 'isPremium', void 0),
            M(this, 'pingInterval', void 0),
            M(this, 'backoff', void 0),
            M(this, 'socket', void 0),
            M(this, '_requestedDisconnect', !1),
            M(this, '_requestedConnect', !1),
            M(
                this,
                'handleDeviceStateChange',
                c().throttle(() => {
                    (0, L.PW)(this.accountId, this.accessToken), eg(this.accountId, this.accessToken);
                }, j)
            ),
            (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new h.Xp()),
            (this.backoff = new d.Z(void 0, V)),
            this.connect();
    }
}
function el(e, t) {
    e in J ? ((J[e].accessToken = t), W.info('Updated account access token: '.concat(e))) : ((J[e] = new eo(e, t)), W.info('Added account: '.concat(e)));
}
function eu(e) {
    if (!(e in J)) return;
    J[e].disconnect(), delete J[e];
    let t = ee[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete ee[e], W.info('Removed account: '.concat(e));
}
function ec(e, t) {
    for (let n of $[e]) n.is_active = n.id === t;
}
function ed(e, t, n) {
    var r, a;
    let s = er();
    if (null == s) return !1;
    let { socket: o, device: l } = s,
        { sync_id: u, party: c, timestamps: d } = t;
    if (null == u || null == c || null == c.id || !(0, x.Ps)(c.id)) return !1;
    let f = null != d && null != d.start ? d.start : Date.now(),
        _ = Math.max(0, Date.now() - f),
        h = !1,
        p = ee[o.accountId];
    null != p && !1 === p.repeat && (h = null);
    let m = (0, x.c8)(null !== (a = null === (r = t.metadata) || void 0 === r ? void 0 : r.type) && void 0 !== a ? a : x.Hw.TRACK);
    if (null == m) return;
    (0, L.hY)(o.accountId, o.accessToken, u, m, {
        position: +_,
        deviceId: l.id,
        repeat: h
    }),
        (i = {
            userId: e,
            partyId: c.id,
            trackId: u,
            startTime: f
        });
    let g = 'presence change';
    n &&
        ((g = 'started'),
        C.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: c.id,
            other_user_id: e
        })),
        W.info('Listen along '.concat(g, ': ').concat(o.accountId, ' to ').concat(e, ' playing ').concat(u, ' on ').concat(l.name));
}
function ef() {
    C.default.track(w.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null
    });
    let e = null != i ? i.trackId : null;
    (i = null), W.info('Listen along stopped');
    let t = er();
    if (null == t) return;
    let { socket: n } = t,
        r = ee[n.accountId];
    if (null != r && r.track.id === e) (0, L.wO)(n.accountId, n.accessToken);
}
function e_() {
    let e = Object.keys(J),
        t = T.Z.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === w.ABu.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) {
        if (!n.includes(t)) eu(t);
    }
    let i = !1;
    for (let n of t) {
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                el(n.id, n.accessToken);
                continue;
            }
            (0, L.hP)(n.id);
        }
    }
    return i;
}
function eh() {
    if (null == r) return;
    let e = er();
    if (null == e) return;
    let { socket: t } = e;
    (et = !0), (0, L.wO)(t.accountId, t.accessToken), C.default.track(w.rMx.SPOTIFY_AUTO_PAUSED), W.info('Playback auto paused');
}
function ep(e) {
    if (e === S.default.getId()) {
        let t = N.Z.isCurrentClientInVoiceChannel(),
            n = (0, m.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1
            });
        t && n && null != r ? (K.start(G, eh, !1), z.stop()) : z.start(100, () => K.stop(), !1);
    }
    return !1;
}
function em(e, t, n) {
    var r, i, a, s, o, l, u, c, d, f, _, h, m, g;
    let E,
        v,
        { device: I, progress_ms: S, is_playing: T, repeat_state: b, item: y, context: A } = n;
    if (null != y && y.type === x.Hw.TRACK) {
        let e = y.id;
        null != y.linked_from && null != y.linked_from.id && (e = y.linked_from.id),
            (E = {
                id: e,
                name: y.name,
                duration: y.duration_ms,
                type: x.Hw.TRACK,
                album: {
                    id: null !== (o = null === (r = y.album) || void 0 === r ? void 0 : r.id) && void 0 !== o ? o : '',
                    name: null !== (l = null === (i = y.album) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : '',
                    image: null === (a = y.album) || void 0 === a ? void 0 : a.images[0],
                    type: null !== (u = null === (s = y.album) || void 0 === s ? void 0 : s.type) && void 0 !== u ? u : x.Hw.ALBUM
                },
                artists: Array.isArray(y.artists) ? y.artists.filter((e) => (0, D.lm)(e.id) && (0, D.lm)(e.name)) : [],
                isLocal: y.is_local || !1
            });
    } else
        null != y &&
            y.type === x.Hw.EPISODE &&
            (E = {
                id: y.id,
                name: y.name,
                duration: y.duration_ms,
                type: x.Hw.EPISODE,
                album: {
                    id: null !== (h = null === (c = y.show) || void 0 === c ? void 0 : c.id) && void 0 !== h ? h : '',
                    name: null !== (m = null === (d = y.show) || void 0 === d ? void 0 : d.name) && void 0 !== m ? m : '',
                    image: null === (f = y.show) || void 0 === f ? void 0 : f.images[0],
                    type: null !== (g = null === (_ = y.album) || void 0 === _ ? void 0 : _.type) && void 0 !== g ? g : x.Hw.SHOW
                },
                artists: [],
                isLocal: !1
            });
    if (
        (null != I &&
            !0 !== I.is_active &&
            (I = {
                ...I,
                is_active: !0
            }),
        null != A && [x.Hw.PLAYLIST, x.Hw.ALBUM].includes(A.type))
    ) {
        let n = ev.getPlayerState(e);
        v =
            null != n && null != n.context && n.context.uri === A.uri
                ? Promise.resolve(n.context)
                : A.type === x.Hw.ALBUM
                  ? Promise.resolve(A)
                  : L.rC
                        .get(e, t, { url: A.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else v = Promise.resolve(void 0);
    return v.then((t) => {
        null != t && t.type === x.Hw.PLAYLIST && !t.public && (t = null),
            p.Z.dispatch({
                type: 'SPOTIFY_PLAYER_STATE',
                accountId: e,
                track: E,
                volumePercent: null != I ? I.volume_percent : 0,
                isPlaying: T,
                repeat: 'off' !== b,
                position: S,
                context: t,
                device: I
            });
    });
}
function eg(e, t) {
    return L.rC
        .get(e, t, {
            url: x.C7.PLAYER,
            query: { additional_types: ''.concat(x.Hw.TRACK, ',').concat(x.Hw.EPISODE) },
            onlyRetryOnAuthorizationErrors: !0
        })
        .then((n) => {
            let r = n.body;
            null != r ? em(e, t, r).then(() => n) : ei(e);
        })
        .catch(() => ei(e));
}
class eE extends (o = f.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, A.Z),
            this.syncWith([y.Z], () =>
                (function () {
                    if (null == i || null == er()) return !1;
                    let { userId: e } = i,
                        t = ea(e);
                    if (null == t)
                        return (
                            q.start(B, () => {
                                if (null != i && i.userId === e) (0, E.Z)();
                            }),
                            !1
                        );
                    q.stop();
                    let { sync_id: n, timestamps: r, party: a } = t,
                        s = null != n && i.trackId !== n,
                        o = null != r && i.startTime !== r.start;
                    return s || o ? ed(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
                })()
            ),
            (0, L.k1)();
    }
    hasConnectedAccount() {
        return Object.keys(J).length > 0;
    }
    getActiveSocketAndDevice() {
        return er();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in J) {
            let n = J[t];
            if (!n.connected || null == $[t]) continue;
            let r = $[t].find((e) => !e.is_restricted && 'Computer' === e.type);
            null != r &&
                e.push({
                    socket: n,
                    device: r
                });
        }
        return e;
    }
    canPlay(e) {
        let { sync_id: t, party: n } = e;
        return null != er() && null != t && null != n && null != n.id && (0, x.Ps)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return et;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return ee[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !b.Z.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? ea(i.userId) : null;
        let {
                track: { artists: a, album: s, name: o, id: l, duration: u, isLocal: c, type: d },
                startTime: f,
                context: _
            } = r,
            h = a.slice(0, 5);
        a.length > 0 &&
            (e = h
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, '');
                })
                .join('; '));
        let p = {},
            m = null != s.image ? (0, R.getAssetFromImageURL)(w.ABu.SPOTIFY, s.image.url) : null;
        null != s.image && null != m && (p.large_image = m), s.type !== Y && (p.large_text = s.name), null != _ && (t = _.uri), (n = null != i && null != i.partyId ? i.partyId : ''.concat(x.lS).concat(S.default.getId()));
        let g = o.length > 128 ? o.substring(0, 125) + '...' : o,
            E = {
                context_uri: t,
                album_id: s.id,
                artist_ids: h.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: []
            },
            v = {
                name: P.name,
                assets: p,
                details: g,
                state: e,
                timestamps: {
                    start: f,
                    end: f + u
                },
                party: { id: n }
            };
        return !c && ((v.sync_id = l), (v.flags = w.xjy.PLAY | w.xjy.SYNC), (v.metadata = E)), v;
    }
}
M(eE, 'displayName', 'SpotifyStore');
let ev = new eE(p.Z, {
    USER_CONNECTIONS_UPDATE: e_,
    CONNECTION_OPEN: e_,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: function (e) {
        let { accountId: t, accessToken: n } = e;
        return el(t, n), !1;
    },
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function (e) {
        let { accountId: t } = e;
        eu(t);
    },
    SPOTIFY_PROFILE_UPDATE: function (e) {
        let { accountId: t, isPremium: n } = e,
            r = J[t];
        if (null == r) return !1;
        (r.isPremium = n), W.info('Profile updated for '.concat(t, ': isPremium = ').concat(n));
    },
    SPOTIFY_PLAYER_STATE: function (e) {
        let { accountId: t, isPlaying: n, repeat: a, track: s, position: o, device: l, context: u } = e,
            d = !1;
        if (null != l) {
            if (null != $[t]) {
                let e = $[t].find((e) => {
                    let { id: t } = e;
                    return t === l.id;
                });
                null == e ? ($[t].push(l), (d = !0)) : !(0, _.Z)(e, l) && (Object.assign(e, l), (d = !0)), ec(t, l.id);
            } else ($[t] = [l]), (d = !0);
        }
        n ? null == en || en.start(G, eh) : ((s = null), null == en || en.stop());
        let f = T.Z.getAccount(t, w.ABu.SPOTIFY);
        if (null == f) return d;
        let h = ee[t],
            m =
                null != s
                    ? {
                          account: f,
                          track: s,
                          startTime: (function (e, t) {
                              let n = Date.now(),
                                  r = null != e ? e.startTime : 0,
                                  i = n - t;
                              return Math.abs(i - r) > F ? i : r;
                          })(h, o),
                          context: u,
                          repeat: a
                      }
                    : null,
            g = null != l && null != i && 0 === o && !n;
        !g && (ee[t] = m);
        let v = r;
        if (
            ((r = c()
                .values(ee)
                .find((e) => null != e)),
            ep(S.default.getId()),
            null == s || g ? Q.stop() : Q.start(s.duration - o + Z, () => ei(f.id)),
            null != i && ((!n && o > 0) || null == l || (null != m && i.trackId !== m.track.id))
                ? (W.info('Listen along active but playback stopped or track changed. Stopping listen along in '.concat(Z, 'ms')),
                  X.start(Z, () => {
                      W.info('Stopping listening along'), (0, E.Z)(), ei(f.id);
                  }))
                : X.isStarted() && (W.info('Listen along stop cancelled as playback of track resumed'), X.stop()),
            v === r || (null == h && null == m) || (null != h && null != m && h.track.id === m.track.id && h.startTime === m.startTime))
        )
            return d;
        null != s &&
            (p.Z.dispatch({
                type: 'SPOTIFY_NEW_TRACK',
                track: s,
                connectionId: t
            }),
            C.default.track(w.rMx.ACTIVITY_UPDATED, {
                party_platform: w.ABu.SPOTIFY,
                track_id: s.id,
                has_images: !0,
                details: s.album.name,
                state: s.name,
                album_id: s.album.id,
                author_ids: s.artists.map((e) => e.id),
                author_names: s.artists.map((e) => e.name)
            }));
    },
    SPOTIFY_PLAYER_PLAY: function (e) {
        let { id: t } = e;
        a = t;
    },
    ACTIVITY_PLAY: function (e) {
        var t;
        let n,
            { activity: r, metadata: a } = e,
            s = er();
        if (null == s) return !1;
        let { socket: o, device: l } = s,
            { sync_id: u, party: c } = r;
        return (
            !!(null != u && null != c && null != c.id && (0, x.Ps)(c.id)) &&
            (null != a && (n = a.context_uri),
            null != i && ef(),
            null != a &&
                void ((0, L.hY)(o.accountId, o.accessToken, u, null !== (t = a.type) && void 0 !== t ? t : x.Hw.TRACK, {
                    contextUri: n,
                    deviceId: l.id
                }),
                W.info('Play started: '.concat(o.accountId, ' playing ').concat(u, ' on ').concat(l.name))))
        );
    },
    ACTIVITY_SYNC: function (e) {
        let { activity: t, userId: n } = e;
        return ed(n, t, !0);
    },
    ACTIVITY_SYNC_STOP: ef,
    SPOTIFY_SET_DEVICES: function (e) {
        let { accountId: t, devices: n } = e;
        ($[t] = n), W.info('Devices updated for '.concat(t, ':'), n);
    },
    SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
        let { accountId: t, deviceId: n } = e;
        ec(t, n);
    },
    SPEAKING: function (e) {
        let { userId: t } = e;
        return ep(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n } = t;
            return ep(n) || e;
        }, !1);
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if ((null == t ? void 0 : t.desktopSettings) != null) {
            null == en || en.stop();
            let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
            null != e && I.ZP.getObservedAppNameForWindow(e) === P.name && n ? (en = new h.Xp()).start(G, eh) : (null == en || en.stop(), (en = null));
        } else null == t && (null == en || en.stop(), (en = null));
    }
});
t.Z = ev;
