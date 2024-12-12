var i = r(47120);
var a = r(757143);
var s = r(336317),
    o = r(768581),
    l = r(302221),
    u = r(956664),
    c = r(753090);
let d = new Set(['\u2122', '\u2122️', '\xA9', '\xA9️', '\xAE', '\xAE️']);
function f(e) {
    if (d.has(e)) return '';
    try {
        let n = 0 > e.indexOf('‍') ? e.replace('️', '') : e;
        return r(723080)('./'.concat(s.Z.convert.toCodePoint(n), '.svg'));
    } catch (n) {
        return console.warn(n, 'no emoji for', e), '';
    }
}
function _(e) {
    return e;
}
function h(e) {
    let { palette: n, shouldProcessMobileColors: r = !1 } = e;
    return n;
}
async function p(e) {
    let n;
    let { id: r, name: i } = e;
    n =
        null != r
            ? o.ZP.getEmojiURL({
                  id: r,
                  size: 32,
                  animated: !1
              })
            : f(i);
    let a = await (0, u.OF)(n);
    return null == a
        ? void 0
        : a.map((e) => {
              let [n, r, i] = e;
              return (0, l.vq)(n, r, i);
          });
}
function m(e) {
    let { channelId: n, messageId: r, emoji: i } = e;
}
n.Z = {
    getURL: c.Z.makeMemoizer(f),
    filterUnsupportedEmojis: _,
    applyPlatformToThemedEmojiColorPalette: h,
    getEmojiColors: p,
    triggerFullscreenAnimation: m
};
