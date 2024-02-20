"use strict";
t.r(r), t.d(r, {
  default: function() {
    return c
  },
  renderAutomodMessageMarkup: function() {
    return d
  }
}), t("222007"), t("781738"), t("355025");
var a = t("312016"),
  n = t("367376"),
  i = t("240873"),
  l = t("49111");
let o = new Set([l.MessageEmbedTypes.IMAGE, l.MessageEmbedTypes.GIFV]),
  s = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function c(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = r.formatInline ? n.default.parseInlineReply : n.default.parse;
  return function(e, r, t) {
    var n, l;
    let {
      toAST: c = !1,
      hideSimpleEmbedContent: d = !0,
      formatInline: p = !1,
      postProcessor: m
    } = t, g = !1;
    let f = e(r.content, !0, (n = r, l = t, {
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
    }), (e, t) => (!Array.isArray(e) && (e = [e]), d && (e = function(e, r) {
      if (1 !== e.length || 1 !== r.length) return e;
      let t = e[0],
        a = r[0];
      return ("link" === t.type || "attachmentLink" === t.type) && o.has(a.type) && (0, i.isEmbedInline)(a) ? [] : e
    }(e, r.embeds)), !p && (e = function(e, r) {
      return r ? u(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = u(e[0].content)), e)
    }(e, t)), g = function(e, r) {
      return r ? h(e) : "paragraph" === e[0].type && e[0].content instanceof Array && h(e[0].content)
    }(e = function(e) {
      let r = e.some(e => "link" !== e.type || !1);
      return e.filter(e => {
        let t = "link" === e.type,
          n = (0, a.parseQuestsEmbedCode)(e.target);
        return !(t && null != n && !r)
      })
    }(e), t), p && (e = function e(r) {
      return r.forEach(r => {
        s.has(r.type) && null != r.content && (Array.isArray(r.content) ? e(r.content) : r.content = r.content.replace(/\n/g, " "))
      }), r
    }(e)), null != m && (e = m(e, t)), e));
    return {
      hasSpoilerEmbeds: g,
      content: f
    }
  }(t, e, r)
}

function d(e, r, t) {
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
    highlightWord: r,
    disableAnimatedEmoji: !1,
    channelId: t,
    muted: !1
  }, e => (!Array.isArray(e) && (e = [e]), e))
}

function u(e) {
  let r = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
  if (r) return e;
  let t = 0;
  return (e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
  }), t > 30) ? e : (e.forEach(e => {
    e.jumboable = !0
  }), e)
}

function h(e) {
  return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
}