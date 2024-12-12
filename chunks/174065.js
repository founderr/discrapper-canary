var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(70956);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = 360,
    d = 10,
    f = 1,
    _ = { captionsById: new Map() },
    h = _,
    p = !1,
    m = null;
function g() {
    (h = _), (p = !1), (m = null);
}
function E(e) {
    let {} = e;
    p = !1;
}
function v(e) {
    let {} = e;
    !p && (p = !0);
}
function I(e) {
    let { emojiCaptions: n } = e;
    (h.captionsById = new Map(Object.entries(n))), (p = !1), (m = Date.now() + c * l.Z.Millis.MINUTE);
}
function T(e) {
    let { is4XXError: n } = e;
    p = !1;
    let r = n ? d : f;
    m = Date.now() + r * l.Z.Millis.MINUTE;
}
class b extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        h = null != e ? { captionsById: new Map(e.captionsById) } : _;
    }
    getState() {
        return h;
    }
    getCaptionsForEmojiById(e) {
        var n;
        let { emojiId: r } = e;
        return null !== (n = h.captionsById.get(r)) && void 0 !== n ? n : [];
    }
    getIsFetching() {
        return p;
    }
    getEmojiCaptionsTTL() {
        return m;
    }
    hasPersistedState() {
        return h.captionsById.size > 0;
    }
    clear() {
        (h = _), (p = !1), (m = null);
    }
}
u(b, 'displayName', 'EmojiCaptionsStore'),
    u(b, 'persistKey', 'EmojiCaptionsStore'),
    (n.Z = new b(o.Z, {
        LOGOUT: g,
        EMOJI_CAPTIONS_FETCH: v,
        EMOJI_CAPTIONS_FETCH_SUCCESS: I,
        EMOJI_CAPTIONS_FETCH_ERROR: T,
        POST_CONNECTION_OPEN: E
    }));
