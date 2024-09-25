var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(653041);
var c = n(147913),
    d = n(339085),
    _ = n(592125),
    E = n(768581),
    f = n(176354),
    h = n(176505),
    p = n(149203);
function m(e, t, n) {
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
let I = new Worker(new URL('/assets/' + n.u('80493'), n.b));
function T(e) {
    return new Promise((t) => {
        let n = (r) => {
            let {
                data: { url: i }
            } = r;
            null == I || I.removeEventListener('message', n), e === i && t();
        };
        null == I || I.addEventListener('message', n), null == I || I.postMessage({ url: e });
    });
}
function g(e) {
    let t = [],
        n = e.defaultReactionEmoji;
    if ((null == n ? void 0 : n.emojiId) != null) {
        var r, i;
        t.push(
            E.ZP.getEmojiURL({
                id: n.emojiId,
                animated: null !== (i = null === (r = d.ZP.getUsableCustomEmojiById(n.emojiId)) || void 0 === r ? void 0 : r.animated) && void 0 !== i && i,
                size: p.kV.reaction
            })
        );
    } else (null == n ? void 0 : n.emojiName) != null && t.push(f.ZP.getURL(n.emojiName));
    return (
        e.availableTags.forEach((e) => {
            null != e.emojiId
                ? t.push(
                      E.ZP.getEmojiURL({
                          id: e.emojiId,
                          animated: !1,
                          size: p.kV.reaction
                      })
                  )
                : null != e.emojiName && t.push(f.ZP.getURL(e.emojiName));
        }),
        t
    );
}
class S extends c.Z {
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, h.AB)(t)) return;
        let n = _.Z.getChannel(t);
        null != n &&
            n.isForumLikeChannel() &&
            g(n).forEach((e) => {
                null != e && 0 !== e.length && T(e);
            });
    }
    constructor(...e) {
        super(...e), m(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
t.Z = new S();
