var r,
    i = n(47120);
var a = n(411104);
var o = n(653041);
var s = n(998459);
var l = n(348327),
    u = n.n(l),
    c = n(442837),
    d = n(544891),
    _ = n(570140),
    E = n(457330),
    f = n(726542),
    h = n(81063),
    p = n(70956),
    m = n(553795),
    I = n(246946),
    T = n(981631);
function g(e, t, n) {
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
let S = '33kozedd0zs6fbauka98psnc7zwom2s',
    A = 1 * p.Z.Millis.MINUTE,
    v = (e) => 'https://youtube.com/watch?v='.concat(e),
    N = 5 * p.Z.Millis.MINUTE,
    O = 'https://api.twitch.tv/helix',
    R = /live_user_(.*)-\{width\}/,
    C = 128,
    y = null,
    L = 0,
    b = null,
    D = new Set(),
    M = {};
function P(e) {
    var t;
    return null === (t = R.exec(e)) || void 0 === t ? void 0 : t[1];
}
function U(e, t, n) {
    return d.tn.get({
        url: ''.concat(O).concat(e),
        query: t,
        headers: {
            'Client-ID': S,
            Authorization: 'Bearer '.concat(n)
        }
    });
}
async function w(e, t) {
    var n;
    let r = M[e];
    if (null != r) return r;
    let {
            body: { data: i }
        } = await U('/games', { id: e }, t),
        a = null === (n = i[0]) || void 0 === n ? void 0 : n.name;
    return (M[e] = a), a;
}
class x {
    start() {
        !this._started && ((this._started = !0), m.Z.isFetching() ? E.Z.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (b = null),
            (L = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            _.Z.dispatch({
                type: 'STREAMING_UPDATE',
                stream: null
            });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
        try {
            var n, r, i;
            let {
                    body: { data: a }
                } = await U(
                    '/streams',
                    {
                        user_id: e.id,
                        first: 1
                    },
                    t
                ),
                o = a[0];
            if (null == o || 'live' !== o.type) throw Error('no stream');
            let { thumbnail_url: s, game_id: l, title: u } = o,
                c = { large_image: null != s && null !== (r = (0, h.getAssetFromImageURL)(T.ABu.TWITCH, s)) && void 0 !== r ? r : void 0 },
                d = await w(l, t),
                _ = f.Z.get(T.ABu.TWITCH),
                E = null !== (i = P(s)) && void 0 !== i ? i : e.name,
                p = null != u && '' !== u ? u.slice(0, C) : void 0,
                m = null != d && '' !== d ? d.slice(0, C) : void 0;
            return {
                url:
                    null === (n = _.getPlatformUserUrl) || void 0 === n
                        ? void 0
                        : n.call(_, {
                              id: e.id,
                              name: E
                          }),
                name: _.name,
                assets: c,
                details: p,
                state: m
            };
        } catch (n) {
            if (401 === n.status && null == t)
                return E.Z.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkTwitch(e, t))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((b = null), e.revoked || D.has(e.id))) return null;
        try {
            var n;
            let {
                body: { items: r }
            } = await d.tn.get({
                url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
                query: {
                    part: 'id,snippet',
                    broadcastStatus: 'active',
                    broadcastType: 'all'
                },
                headers: { Authorization: 'Bearer '.concat(null != t ? t : e.accessToken) },
                oldFormErrors: !0
            });
            if (r.length < 1) throw Error('no stream');
            let {
                    id: i,
                    snippet: { title: a, thumbnails: o }
                } = r[0],
                s = { large_image: null !== (n = (0, h.getAssetFromImageURL)(T.ABu.YOUTUBE, o.high.url)) && void 0 !== n ? n : void 0 },
                l = null != a && '' !== a ? a.slice(0, C) : void 0;
            return (b = {
                url: v(i),
                name: f.Z.get(T.ABu.YOUTUBE).name,
                details: l,
                assets: s
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return E.Z.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && D.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = m.Z.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [T.ABu.TWITCH],
            n = Date.now();
        L <= n && (t.push(T.ABu.YOUTUBE), (L = n + N)),
            Promise.allSettled(e.filter((e) => t.includes(e.type)).map((e) => (e.type === T.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e)))).then((e) => {
                if (this._started) {
                    var t;
                    let n = null === (t = e.find((e) => 'fulfilled' === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                    null == n && null != b && (n = b),
                        _.Z.dispatch({
                            type: 'STREAMING_UPDATE',
                            stream: n
                        });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), A));
    }
    constructor() {
        g(this, '_nextCheck', void 0), g(this, '_started', void 0), (this._started = !1);
    }
}
let G = new x();
function k() {
    I.Z.enabled ? G.start() : G.stop();
}
function B(e) {
    var t;
    if (u()(e.stream, y)) return !1;
    y = null !== (t = e.stream) && void 0 !== t ? t : null;
}
class F extends (r = c.ZP.Store) {
    initialize() {
        k(), this.waitFor(m.Z), this.syncWith([I.Z], k);
    }
    getStream() {
        return y;
    }
}
g(F, 'displayName', 'ExternalStreamingStore'),
    (t.Z = new F(_.Z, {
        STREAMING_UPDATE: B,
        USER_CONNECTIONS_UPDATE: () => G._check()
    }));
