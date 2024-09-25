var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(70956);
function l(e, t, n) {
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
let u = 360,
    c = 10,
    d = 1,
    _ = { captionsById: new Map() },
    E = _,
    f = !1,
    h = null;
function p() {
    (E = _), (f = !1), (h = null);
}
function m(e) {
    let {} = e;
    f = !1;
}
function I(e) {
    let {} = e;
    !f && (f = !0);
}
function T(e) {
    let { emojiCaptions: t } = e;
    (E.captionsById = new Map(Object.entries(t))), (f = !1), (h = Date.now() + u * s.Z.Millis.MINUTE);
}
function g(e) {
    let { is4XXError: t } = e;
    f = !1;
    let n = t ? c : d;
    h = Date.now() + n * s.Z.Millis.MINUTE;
}
class S extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        E = null != e ? { captionsById: new Map(e.captionsById) } : _;
    }
    getState() {
        return E;
    }
    getCaptionsForEmojiById(e) {
        var t;
        let { emojiId: n } = e;
        return null !== (t = E.captionsById.get(n)) && void 0 !== t ? t : [];
    }
    getIsFetching() {
        return f;
    }
    getEmojiCaptionsTTL() {
        return h;
    }
    hasPersistedState() {
        return E.captionsById.size > 0;
    }
    clear() {
        (E = _), (f = !1), (h = null);
    }
}
l(S, 'displayName', 'EmojiCaptionsStore'),
    l(S, 'persistKey', 'EmojiCaptionsStore'),
    (t.Z = new S(o.Z, {
        LOGOUT: p,
        EMOJI_CAPTIONS_FETCH: I,
        EMOJI_CAPTIONS_FETCH_SUCCESS: T,
        EMOJI_CAPTIONS_FETCH_ERROR: g,
        POST_CONNECTION_OPEN: m
    }));
