var r,
    i = n(442837),
    a = n(570140),
    o = n(703558);
function s(e, t, n) {
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
let l = {},
    u = {};
function c(e) {
    let { channelId: t, sticker: n, draftType: r } = e;
    (r === o.d.FirstThreadMessage ? u : l)[t] = [n];
}
function d(e) {
    let { channelId: t, draftType: n } = e,
        r = n === o.d.FirstThreadMessage ? u : l;
    null != r[t] && delete r[t];
}
function _() {
    (l = {}), (u = {});
}
class E extends (r = i.ZP.Store) {
    getStickerPreview(e, t) {
        return (t === o.d.FirstThreadMessage ? u : l)[e];
    }
}
s(E, 'displayName', 'StickerMessagePreviewStore');
let f = new E(a.Z, {
    ADD_STICKER_PREVIEW: c,
    CLEAR_STICKER_PREVIEW: d,
    LOGOUT: _
});
t.Z = f;
