"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  },
  renderAutomodMessageMarkup: function() {
    return d
  }
}), r("222007"), r("781738"), r("355025");
var a = r("312016"),
  n = r("367376"),
  i = r("240873"),
  l = r("49111");
let o = new Set([l.MessageEmbedTypes.IMAGE, l.MessageEmbedTypes.GIFV]),
  s = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.formatInline ? n.default.parseInlineReply : n.default.parse;
  return function(e, t, r) {
    var n, l;
    let {
      toAST: c = !1,
      hideSimpleEmbedContent: d = !0,
      formatInline: p = !1,
      postProcessor: m
    } = r, g = !1;
    let f = e(t.content, !0, (n = t, l = r, {
      allowLinks: null != n.webhookId || !!l.allowLinks,
      allowEmojiLinks: null != n.webhookId,
      channelId: n.channel_id,
      messageId: n.id,
      mentionChannels: n.mentionChannels,
      isInteracting: !!l.isInteracting,
      formatInline: !!l.formatInline,
      noStyleAndInteraction: !!l.noStyleAndInteraction,
      allowHeading: !!l.allowHeading,
      allowList: !!l.allowList,
      previewLinkTarget: !!l.previewLinkTarget,
      disableAnimatedEmoji: !!l.disableAnimatedEmoji,
      disableAutoBlockNewlines: !0,
      muted: !1
    }), (e, r) => (!Array.isArray(e) && (e = [e]), d && (e = function(e, t) {
      if (1 !== e.length || 1 !== t.length) return e;
      let r = e[0],
        a = t[0];
      return ("link" === r.type || "attachmentLink" === r.type) && o.has(a.type) && (0, i.isEmbedInline)(a) ? [] : e
    }(e, t.embeds)), !p && (e = function(e, t) {
      return t ? u(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = u(e[0].content)), e)
    }(e, r)), g = function(e, t) {
      return t ? h(e) : "paragraph" === e[0].type && e[0].content instanceof Array && h(e[0].content)
    }(e = function(e) {
      let t = e.some(e => "link" !== e.type || !1);
      return e.filter(e => {
        let r = "link" === e.type,
          n = (0, a.parseQuestsEmbedCode)(e.target);
        return !(r && null != n && !t)
      })
    }(e), r), p && (e = function e(t) {
      return t.forEach(t => {
        s.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
      }), t
    }(e)), null != m && (e = m(e, r)), e));
    return {
      hasSpoilerEmbeds: g,
      content: f
    }
  }(r, e, t)
}

function d(e, t, r) {
  var a;
  return a = n.default.parseAutoModerationSystemMessage, a(e, !0, {
    allowLinks: !1,
    allowEmojiLinks: !1,
    mentionChannels: [],
    isInteracting: !1,
    formatInline: !1,
    noStyleAndInteraction: !1,
    allowHeading: !1,
    allowList: !1,
    disableAutoBlockNewlines: !0,
    highlightWord: t,
    disableAnimatedEmoji: !1,
    channelId: r,
    muted: !1
  }, e => (!Array.isArray(e) && (e = [e]), e))
}

function u(e) {
  let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
  if (t) return e;
  let r = 0;
  return (e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (r += 1), r > 30) return !1
  }), r > 30) ? e : (e.forEach(e => {
    e.jumboable = !0
  }), e)
}

function h(e) {
  return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
}