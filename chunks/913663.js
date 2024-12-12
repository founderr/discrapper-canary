var i,
    a = r(442837),
    s = r(570140),
    o = r(703558);
function l(e, n, r) {
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
let u = {},
    c = {};
function d(e) {
    let { channelId: n, sticker: r, draftType: i } = e;
    (i === o.d.FirstThreadMessage ? c : u)[n] = [r];
}
function f(e) {
    let { channelId: n, draftType: r } = e,
        i = r === o.d.FirstThreadMessage ? c : u;
    null != i[n] && delete i[n];
}
function _() {
    (u = {}), (c = {});
}
class h extends (i = a.ZP.Store) {
    getStickerPreview(e, n) {
        return (n === o.d.FirstThreadMessage ? c : u)[e];
    }
}
l(h, 'displayName', 'StickerMessagePreviewStore');
let p = new h(s.Z, {
    ADD_STICKER_PREVIEW: d,
    CLEAR_STICKER_PREVIEW: f,
    LOGOUT: _
});
n.Z = p;
