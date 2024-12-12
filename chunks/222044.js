var i = r(315314);
var a = r(610138);
var s = r(216116);
var o = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(653041);
var d = r(147913),
    f = r(339085),
    _ = r(592125),
    h = r(768581),
    p = r(176354),
    m = r(176505),
    g = r(149203);
function E(e, n, r) {
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
let v = new Worker(new URL('/assets/' + r.u('80493'), r.b));
function I(e) {
    return new Promise((n) => {
        let r = (i) => {
            let {
                data: { url: a }
            } = i;
            null == v || v.removeEventListener('message', r), e === a && n();
        };
        null == v || v.addEventListener('message', r), null == v || v.postMessage({ url: e });
    });
}
function T(e) {
    let n = [],
        r = e.defaultReactionEmoji;
    if ((null == r ? void 0 : r.emojiId) != null) {
        var i, a;
        n.push(
            h.ZP.getEmojiURL({
                id: r.emojiId,
                animated: null !== (a = null === (i = f.ZP.getUsableCustomEmojiById(r.emojiId)) || void 0 === i ? void 0 : i.animated) && void 0 !== a && a,
                size: g.kV.reaction
            })
        );
    } else (null == r ? void 0 : r.emojiName) != null && n.push(p.ZP.getURL(r.emojiName));
    return (
        e.availableTags.forEach((e) => {
            null != e.emojiId
                ? n.push(
                      h.ZP.getEmojiURL({
                          id: e.emojiId,
                          animated: !1,
                          size: g.kV.reaction
                      })
                  )
                : null != e.emojiName && n.push(p.ZP.getURL(e.emojiName));
        }),
        n
    );
}
class b extends d.Z {
    handleChannelPreload(e) {
        let { channelId: n } = e;
        if ((0, m.AB)(n)) return;
        let r = _.Z.getChannel(n);
        null != r &&
            r.isForumLikeChannel() &&
            T(r).forEach((e) => {
                null != e && 0 !== e.length && I(e);
            });
    }
    constructor(...e) {
        super(...e), E(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
n.Z = new b();
