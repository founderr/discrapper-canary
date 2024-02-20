"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("424973");
var i = n("689988"),
  a = n("385976"),
  l = n("42203"),
  s = n("315102"),
  r = n("402671"),
  o = n("724210"),
  u = n("115279");
let d = new Worker(new URL(n.p + n.u("68638"), n.b));
class c extends i.default {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, o.isStaticChannelRoute)(t)) return;
    let n = l.default.getChannel(t);
    if (null != n && n.isForumLikeChannel()) {
      let e = function(e) {
        let t = [],
          n = e.defaultReactionEmoji;
        if ((null == n ? void 0 : n.emojiId) != null) {
          var i, l;
          t.push(s.default.getEmojiURL({
            id: n.emojiId,
            animated: null !== (l = null === (i = a.default.getUsableCustomEmojiById(n.emojiId)) || void 0 === i ? void 0 : i.animated) && void 0 !== l && l,
            size: u.EMOJI_SIZE_MAP.reaction
          }))
        } else(null == n ? void 0 : n.emojiName) != null && t.push(r.default.getURL(n.emojiName));
        return e.availableTags.forEach(e => {
          null != e.emojiId ? t.push(s.default.getEmojiURL({
            id: e.emojiId,
            animated: !1,
            size: u.EMOJI_SIZE_MAP.reaction
          })) : null != e.emojiName && t.push(r.default.getURL(e.emojiName))
        }), t
      }(n);
      e.forEach(e => {
        if (null != e && 0 !== e.length) {
          var t;
          t = e, new Promise(e => {
            let n = i => {
              let {
                data: {
                  url: a
                }
              } = i;
              null == d || d.removeEventListener("message", n), t === a && e()
            };
            null == d || d.addEventListener("message", n), null == d || d.postMessage({
              url: t
            })
          })
        }
      })
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }
  }
}
var f = new c