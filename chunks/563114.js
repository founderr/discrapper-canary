var r = n(47120);
var i = n(757143);
var a = n(946188),
    o = n(768581),
    s = n(302221),
    l = n(956664),
    u = n(753090);
let c = new Set(['\u2122', '\u2122️', '\xA9', '\xA9️', '\xAE', '\xAE️']);
function d(e) {
    if (c.has(e)) return '';
    try {
        let t = 0 > e.indexOf('‍') ? e.replace('️', '') : e;
        return n(916529)('./'.concat(a.Z.convert.toCodePoint(t), '.svg'));
    } catch (t) {
        return console.warn(t, 'no emoji for', e), '';
    }
}
function _(e) {
    return e;
}
function E(e) {
    let { palette: t, shouldProcessMobileColors: n = !1 } = e;
    return t;
}
async function f(e) {
    let t;
    let { id: n, name: r } = e;
    t =
        null != n
            ? o.ZP.getEmojiURL({
                  id: n,
                  size: 32,
                  animated: !1
              })
            : d(r);
    let i = await (0, l.OF)(t);
    return null == i
        ? void 0
        : i.map((e) => {
              let [t, n, r] = e;
              return (0, s.vq)(t, n, r);
          });
}
function h(e) {
    let { channelId: t, messageId: n, emoji: r } = e;
}
t.Z = {
    getURL: u.Z.makeMemoizer(d),
    filterUnsupportedEmojis: _,
    applyPlatformToThemedEmojiColorPalette: E,
    getEmojiColors: f,
    triggerFullscreenAnimation: h
};
