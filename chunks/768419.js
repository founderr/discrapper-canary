let r, i, a;
var o,
    s,
    l = n(47120);
var u = n(653041);
var c = n(724458);
var d = n(757143);
var _ = n(789020);
var E = n(392711),
    f = n.n(E),
    h = n(261470),
    p = n(442837),
    m = n(902704),
    I = n(846519),
    T = n(570140),
    g = n(586902),
    S = n(726542),
    A = n(524331),
    v = n(710845),
    N = n(594190),
    O = n(314897),
    R = n(553795),
    C = n(517100),
    y = n(158776),
    L = n(606304),
    b = n(979651),
    D = n(626135),
    M = n(81063),
    P = n(70956),
    U = n(823379),
    w = n(781518),
    x = n(616922),
    G = n(981631);
function k(e, t, n) {
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
let B = S.Z.get(G.ABu.SPOTIFY),
    F = 'wss://dealer.spotify.com/?access_token=',
    Z = 'hm://pusher/v1/connections/',
    V = 30 * P.Z.Millis.SECOND,
    H = 30 * P.Z.Millis.SECOND,
    Y = 100,
    j = 5 * P.Z.Millis.MINUTE,
    W = 5 * P.Z.Millis.SECOND,
    K = 1.5 * P.Z.Millis.SECOND,
    z = 'Computer',
    q = 5,
    Q = 1 * P.Z.Millis.MINUTE,
    X = 3 * P.Z.Millis.SECOND,
    $ = 128;
!(function (e) {
    (e.PLAYER_STATE_CHANGED = 'PLAYER_STATE_CHANGED'), (e.DEVICE_STATE_CHANGED = 'DEVICE_STATE_CHANGED');
})(o || (o = {}));
let J = {
        MESSAGE: 'message',
        PING: 'ping',
        PONG: 'pong'
    },
    ee = 'single',
    et = new v.Z('Spotify'),
    en = new I.V7(),
    er = new I.V7(),
    ei = new I.V7(),
    ea = new I.V7(),
    eo = new I.V7(),
    es = {},
    el = {},
    eu = {},
    ec = !1,
    ed = null;
function e_() {
    for (let e in es) {
        let t = es[e];
        if (!t.connected || null == el[e]) continue;
        let n = el[e].find((e) => e.is_active);
        if (null != n)
            return {
                socket: t,
                device: n
            };
    }
}
function eE(e, t) {
    let n = Date.now(),
        r = null != e ? e.startTime : 0,
        i = n - t;
    return Math.abs(i - r) > K ? i : r;
}
function ef(e) {
    T.Z.dispatch({
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
function eh(e) {
    return y.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, x.Ps)(e.party.id));
}
let ep = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class em {
    get connected() {
        return null != this.socket && ep.has(this.socket.readyState);
    }
    connect() {
        !this.connected &&
            !this._requestedConnect &&
            (et.info('WS Connecting'),
            (this._requestedDisconnect = !1),
            (this._requestedConnect = !0),
            eF(this.accountId, this.accessToken)
                .then(() => {
                    (this._requestedConnect = !1), (this.socket = new WebSocket(''.concat(F).concat(this.accessToken))), (this.socket.onopen = this.handleOpen.bind(this)), (this.socket.onmessage = this.handleMessage.bind(this)), (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
                })
                .catch((e) => {
                    et.error(e), (this._requestedConnect = !1), this.handleClose();
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
        this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({ type: J.PING })));
    }
    handleOpen() {
        et.info('WS Connected'), this.backoff.succeed(), this.pingInterval.start(V, () => this.ping()), (0, w.Ai)(this.accountId, this.accessToken), (0, w.PW)(this.accountId, this.accessToken);
    }
    handleMessage(e) {
        let { data: t } = e;
        if ('string' != typeof t) return;
        let { type: n, uri: r, payloads: i } = JSON.parse(t);
        switch (n) {
            case J.MESSAGE:
                if ('string' == typeof r && r.startsWith(Z)) (this.connectionId = decodeURIComponent(r.split(Z)[1])), (0, w.am)(this.accountId, this.accessToken, this.connectionId);
                else if (Array.isArray(i)) {
                    for (let { events: e } of i) if (null != e) for (let t of e) this.handleEvent(t);
                }
            case J.PONG:
        }
    }
    handleClose() {
        if ((this.pingInterval.stop(), !this._requestedDisconnect))
            try {
                let e = this.backoff.fail(() => {
                    !this._requestedDisconnect && this.connect();
                });
                et.info('WS Disconnected. Next retry in '.concat(Math.round(e), 'ms'));
            } catch (e) {}
    }
    handleEvent(e) {
        let { type: t, event: n } = e;
        switch (t) {
            case 'PLAYER_STATE_CHANGED':
                null != n && null != n.state && eB(this.accountId, this.accessToken, n.state);
                break;
            case 'DEVICE_STATE_CHANGED':
                this.handleDeviceStateChange();
        }
    }
    constructor(e, t) {
        k(this, 'accessToken', void 0),
            k(this, 'accountId', void 0),
            k(this, 'connectionId', void 0),
            k(this, 'isPremium', void 0),
            k(this, 'pingInterval', void 0),
            k(this, 'backoff', void 0),
            k(this, 'socket', void 0),
            k(this, '_requestedDisconnect', !1),
            k(this, '_requestedConnect', !1),
            k(
                this,
                'handleDeviceStateChange',
                f().throttle(() => {
                    (0, w.PW)(this.accountId, this.accessToken), eF(this.accountId, this.accessToken);
                }, X)
            ),
            (this.accountId = e),
            (this.accessToken = t),
            (this.pingInterval = new I.Xp()),
            (this.backoff = new h.Z(void 0, Q)),
            this.connect();
    }
}
function eI(e, t) {
    e in es ? ((es[e].accessToken = t), et.info('Updated account access token: '.concat(e))) : ((es[e] = new em(e, t)), et.info('Added account: '.concat(e)));
}
function eT(e) {
    if (!(e in es)) return;
    es[e].disconnect(), delete es[e];
    let t = eu[e];
    null != t && null != r && t.track.id === r.track.id && (r = null), delete eu[e], et.info('Removed account: '.concat(e));
}
function eg(e, t) {
    for (let n of el[e]) n.is_active = n.id === t;
}
function eS(e, t, n) {
    var r, a;
    let o = e_();
    if (null == o) return !1;
    let { socket: s, device: l } = o,
        { sync_id: u, party: c, timestamps: d } = t;
    if (null == u || null == c || null == c.id || !(0, x.Ps)(c.id)) return !1;
    let _ = null != d && null != d.start ? d.start : Date.now(),
        E = Math.max(0, Date.now() - _),
        f = !1,
        h = eu[s.accountId];
    null != h && !1 === h.repeat && (f = null);
    let p = (0, x.c8)(null !== (a = null === (r = t.metadata) || void 0 === r ? void 0 : r.type) && void 0 !== a ? a : x.Hw.TRACK);
    if (null == p) return;
    (0, w.hY)(s.accountId, s.accessToken, u, p, {
        position: +E,
        deviceId: l.id,
        repeat: f
    }),
        (i = {
            userId: e,
            partyId: c.id,
            trackId: u,
            startTime: _
        });
    let m = 'presence change';
    n &&
        ((m = 'started'),
        D.default.track(G.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: c.id,
            other_user_id: e
        })),
        et.info('Listen along '.concat(m, ': ').concat(s.accountId, ' to ').concat(e, ' playing ').concat(u, ' on ').concat(l.name));
}
function eA() {
    D.default.track(G.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
        party_id: null != i ? i.partyId : null,
        other_user_id: null != i ? i.userId : null
    });
    let e = null != i ? i.trackId : null;
    (i = null), et.info('Listen along stopped');
    let t = e_();
    if (null == t) return;
    let { socket: n } = t,
        r = eu[n.accountId];
    if (null != r && r.track.id === e) (0, w.wO)(n.accountId, n.accessToken);
}
function ev() {
    let e = Object.keys(es),
        t = R.Z.getAccounts().filter((e) => {
            let { type: t } = e;
            return t === G.ABu.SPOTIFY;
        });
    if (null == t) return !1;
    let n = t.map((e) => {
        let { id: t } = e;
        return t;
    });
    for (let t of e) {
        if (!n.includes(t)) eT(t);
    }
    let i = !1;
    for (let n of t) {
        if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
            if (null != n.accessToken) {
                eI(n.id, n.accessToken);
                continue;
            }
            (0, w.hP)(n.id);
        }
    }
    return i;
}
function eN(e) {
    let { accountId: t, accessToken: n } = e;
    return eI(t, n), !1;
}
function eO(e) {
    let { accountId: t } = e;
    eT(t);
}
function eR(e) {
    let { accountId: t, isPlaying: n, repeat: a, track: o, position: s, device: l, context: u } = e,
        c = !1;
    if (null != l) {
        if (null != el[t]) {
            let e = el[t].find((e) => {
                let { id: t } = e;
                return t === l.id;
            });
            null == e ? (el[t].push(l), (c = !0)) : !(0, m.Z)(e, l) && (Object.assign(e, l), (c = !0)), eg(t, l.id);
        } else (el[t] = [l]), (c = !0);
    }
    n ? null == ed || ed.start(H, eP) : ((o = null), null == ed || ed.stop());
    let d = R.Z.getAccount(t, G.ABu.SPOTIFY);
    if (null == d) return c;
    let _ = eu[t],
        E =
            null != o
                ? {
                      account: d,
                      track: o,
                      startTime: eE(_, s),
                      context: u,
                      repeat: a
                  }
                : null,
        h = null != l && null != i && 0 === s && !n;
    !h && (eu[t] = E);
    let p = r;
    if (
        ((r = f()
            .values(eu)
            .find((e) => null != e)),
        eU(O.default.getId()),
        null == o || h ? ea.stop() : ea.start(o.duration - s + W, () => ef(d.id)),
        null != i && ((!n && s > 0) || null == l || (null != E && i.trackId !== E.track.id))
            ? (et.info('Listen along active but playback stopped or track changed. Stopping listen along in '.concat(W, 'ms')),
              eo.start(W, () => {
                  et.info('Stopping listening along'), (0, A.Z)(), ef(d.id);
              }))
            : eo.isStarted() && (et.info('Listen along stop cancelled as playback of track resumed'), eo.stop()),
        p === r || (null == _ && null == E) || (null != _ && null != E && _.track.id === E.track.id && _.startTime === E.startTime))
    )
        return c;
    null != o &&
        (T.Z.dispatch({
            type: 'SPOTIFY_NEW_TRACK',
            track: o,
            connectionId: t
        }),
        D.default.track(G.rMx.ACTIVITY_UPDATED, {
            party_platform: G.ABu.SPOTIFY,
            track_id: o.id,
            has_images: !0,
            details: o.album.name,
            state: o.name,
            album_id: o.album.id,
            author_ids: o.artists.map((e) => e.id),
            author_names: o.artists.map((e) => e.name)
        }));
}
function eC(e) {
    let { id: t } = e;
    a = t;
}
function ey(e) {
    let { accountId: t, devices: n } = e;
    (el[t] = n), et.info('Devices updated for '.concat(t, ':'), n);
}
function eL(e) {
    let { accountId: t, deviceId: n } = e;
    eg(t, n);
}
function eb(e) {
    var t;
    let n,
        { activity: r, metadata: a } = e,
        o = e_();
    if (null == o) return !1;
    let { socket: s, device: l } = o,
        { sync_id: u, party: c } = r;
    return (
        !!(null != u && null != c && null != c.id && (0, x.Ps)(c.id)) &&
        (null != a && (n = a.context_uri),
        null != i && eA(),
        null != a &&
            void ((0, w.hY)(s.accountId, s.accessToken, u, null !== (t = a.type) && void 0 !== t ? t : x.Hw.TRACK, {
                contextUri: n,
                deviceId: l.id
            }),
            et.info('Play started: '.concat(s.accountId, ' playing ').concat(u, ' on ').concat(l.name))))
    );
}
function eD(e) {
    let { activity: t, userId: n } = e;
    return eS(n, t, !0);
}
function eM() {
    if (null == i || null == e_()) return !1;
    let { userId: e } = i,
        t = eh(e);
    if (null == t)
        return (
            ei.start(j, () => {
                if (null != i && i.userId === e) (0, A.Z)();
            }),
            !1
        );
    ei.stop();
    let { sync_id: n, timestamps: r, party: a } = t,
        o = null != n && i.trackId !== n,
        s = null != r && i.startTime !== r.start;
    return o || s ? eS(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
}
function eP() {
    if (null == r) return;
    let e = e_();
    if (null == e) return;
    let { socket: t } = e;
    (ec = !0), (0, w.wO)(t.accountId, t.accessToken), D.default.track(G.rMx.SPOTIFY_AUTO_PAUSED), et.info('Playback auto paused');
}
function eU(e) {
    if (e === O.default.getId()) {
        let t = b.Z.isCurrentClientInVoiceChannel(),
            n = (0, g.O)({
                userId: e,
                checkSoundSharing: !0,
                checkSoundboardSounds: !1
            });
        t && n && null != r ? (en.start(H, eP, !1), er.stop()) : er.start(Y, () => en.stop(), !1);
    }
    return !1;
}
function ew(e) {
    let { userId: t } = e;
    return eU(t);
}
function ex(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n } = t;
        return eU(n) || e;
    }, !1);
}
function eG(e) {
    let { accountId: t, isPremium: n } = e,
        r = es[t];
    if (null == r) return !1;
    (r.isPremium = n), et.info('Profile updated for '.concat(t, ': isPremium = ').concat(n));
}
function ek(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
        null == ed || ed.stop();
        let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
        null != e && N.ZP.getObservedAppNameForWindow(e) === B.name && n ? (ed = new I.Xp()).start(H, eP) : (null == ed || ed.stop(), (ed = null));
    } else null == t && (null == ed || ed.stop(), (ed = null));
}
function eB(e, t, n) {
    var r, i, a, o, s, l, u, c, d, _, E, f, h, p;
    let m,
        I,
        { device: g, progress_ms: S, is_playing: A, repeat_state: v, item: N, context: O } = n;
    if (null != N && N.type === x.Hw.TRACK) {
        let e = N.id;
        null != N.linked_from && null != N.linked_from.id && (e = N.linked_from.id),
            (m = {
                id: e,
                name: N.name,
                duration: N.duration_ms,
                type: x.Hw.TRACK,
                album: {
                    id: null !== (s = null === (r = N.album) || void 0 === r ? void 0 : r.id) && void 0 !== s ? s : '',
                    name: null !== (l = null === (i = N.album) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : '',
                    image: null === (a = N.album) || void 0 === a ? void 0 : a.images[0],
                    type: null !== (u = null === (o = N.album) || void 0 === o ? void 0 : o.type) && void 0 !== u ? u : x.Hw.ALBUM
                },
                artists: Array.isArray(N.artists) ? N.artists.filter((e) => (0, U.lm)(e.id) && (0, U.lm)(e.name)) : [],
                isLocal: N.is_local || !1
            });
    } else
        null != N &&
            N.type === x.Hw.EPISODE &&
            (m = {
                id: N.id,
                name: N.name,
                duration: N.duration_ms,
                type: x.Hw.EPISODE,
                album: {
                    id: null !== (f = null === (c = N.show) || void 0 === c ? void 0 : c.id) && void 0 !== f ? f : '',
                    name: null !== (h = null === (d = N.show) || void 0 === d ? void 0 : d.name) && void 0 !== h ? h : '',
                    image: null === (_ = N.show) || void 0 === _ ? void 0 : _.images[0],
                    type: null !== (p = null === (E = N.album) || void 0 === E ? void 0 : E.type) && void 0 !== p ? p : x.Hw.SHOW
                },
                artists: [],
                isLocal: !1
            });
    if (
        (null != g &&
            !0 !== g.is_active &&
            (g = {
                ...g,
                is_active: !0
            }),
        null != O && [x.Hw.PLAYLIST, x.Hw.ALBUM].includes(O.type))
    ) {
        let n = eV.getPlayerState(e);
        I =
            null != n && null != n.context && n.context.uri === O.uri
                ? Promise.resolve(n.context)
                : O.type === x.Hw.ALBUM
                  ? Promise.resolve(O)
                  : w.rC
                        .get(e, t, { url: O.href })
                        .then((e) => {
                            let { body: t } = e;
                            return t;
                        })
                        .catch((e) => {
                            if (e && 404 === e.status) return null;
                            throw e;
                        });
    } else I = Promise.resolve(void 0);
    return I.then((t) => {
        null != t && t.type === x.Hw.PLAYLIST && !t.public && (t = null),
            T.Z.dispatch({
                type: 'SPOTIFY_PLAYER_STATE',
                accountId: e,
                track: m,
                volumePercent: null != g ? g.volume_percent : 0,
                isPlaying: A,
                repeat: 'off' !== v,
                position: S,
                context: t,
                device: g
            });
    });
}
function eF(e, t) {
    return w.rC
        .get(e, t, {
            url: x.C7.PLAYER,
            query: { additional_types: ''.concat(x.Hw.TRACK, ',').concat(x.Hw.EPISODE) },
            onlyRetryOnAuthorizationErrors: !0
        })
        .then((n) => {
            let r = n.body;
            null != r ? eB(e, t, r).then(() => n) : ef(e);
        })
        .catch(() => ef(e));
}
class eZ extends (s = p.ZP.Store) {
    initialize() {
        this.waitFor(R.Z, L.Z), this.syncWith([y.Z], () => eM()), (0, w.k1)();
    }
    hasConnectedAccount() {
        return Object.keys(es).length > 0;
    }
    getActiveSocketAndDevice() {
        return e_();
    }
    getPlayableComputerDevices() {
        let e = [];
        for (let t in es) {
            let n = es[t];
            if (!n.connected || null == el[t]) continue;
            let r = el[t].find((e) => !e.is_restricted && e.type === z);
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
        return null != e_() && null != t && null != n && null != n.id && (0, x.Ps)(n.id);
    }
    getSyncingWith() {
        return i;
    }
    wasAutoPaused() {
        return ec;
    }
    getLastPlayedTrackId() {
        return a;
    }
    getTrack() {
        return null != r ? r.track : null;
    }
    getPlayerState(e) {
        return eu[e];
    }
    shouldShowActivity() {
        return null != r && r.account.showActivity && !C.Z.isIdle();
    }
    getActivity() {
        let e, t, n;
        if (null == r) return null != i ? eh(i.userId) : null;
        let {
                track: { artists: a, album: o, name: s, id: l, duration: u, isLocal: c, type: d },
                startTime: _,
                context: E
            } = r,
            f = a.slice(0, q);
        a.length > 0 &&
            (e = f
                .map((e) => {
                    let { name: t } = e;
                    return t.replace(/;/g, '');
                })
                .join('; '));
        let h = {},
            p = null != o.image ? (0, M.getAssetFromImageURL)(G.ABu.SPOTIFY, o.image.url) : null;
        null != o.image && null != p && (h.large_image = p), o.type !== ee && (h.large_text = o.name), null != E && (t = E.uri), (n = null != i && null != i.partyId ? i.partyId : ''.concat(x.lS).concat(O.default.getId()));
        let m = s.length > $ ? s.substring(0, $ - 3) + '...' : s,
            I = {
                context_uri: t,
                album_id: o.id,
                artist_ids: f.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                type: d,
                button_urls: []
            },
            T = {
                name: B.name,
                assets: h,
                details: m,
                state: e,
                timestamps: {
                    start: _,
                    end: _ + u
                },
                party: { id: n }
            };
        return !c && ((T.sync_id = l), (T.flags = G.xjy.PLAY | G.xjy.SYNC), (T.metadata = I)), T;
    }
}
k(eZ, 'displayName', 'SpotifyStore');
let eV = new eZ(T.Z, {
    USER_CONNECTIONS_UPDATE: ev,
    CONNECTION_OPEN: ev,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN: eN,
    SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: eO,
    SPOTIFY_PROFILE_UPDATE: eG,
    SPOTIFY_PLAYER_STATE: eR,
    SPOTIFY_PLAYER_PLAY: eC,
    ACTIVITY_PLAY: eb,
    ACTIVITY_SYNC: eD,
    ACTIVITY_SYNC_STOP: eA,
    SPOTIFY_SET_DEVICES: ey,
    SPOTIFY_SET_ACTIVE_DEVICE: eL,
    SPEAKING: ew,
    VOICE_STATE_UPDATES: ex,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ek
});
t.Z = eV;
