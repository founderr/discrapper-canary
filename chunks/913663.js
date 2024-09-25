var r = n(445346),
    i = n(570140),
    a = n(703558);
function o(e, t, n) {
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
let s = {},
    l = {};
function u(e) {
    let { channelId: t, sticker: n, draftType: r } = e;
    (r === a.d.FirstThreadMessage ? l : s)[t] = [n];
}
function c(e) {
    let { channelId: t, draftType: n } = e,
        r = n === a.d.FirstThreadMessage ? l : s;
    null != r[t] && delete r[t];
}
function d() {
    (s = {}), (l = {});
}
class _ extends r.y {
    getStickerPreview(e, t) {
        return (t === a.d.FirstThreadMessage ? l : s)[e];
    }
}
o(_, 'displayName', 'StickerMessagePreviewStore');
let E = new _(i.Z, {
    ADD_STICKER_PREVIEW: u,
    CLEAR_STICKER_PREVIEW: c,
    LOGOUT: d
});
t.Z = E;
