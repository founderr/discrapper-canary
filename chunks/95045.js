"use strict";
t.r(r), t.d(r, {
  default: function() {
    return s
  },
  renderAutomodMessageMarkup: function() {
    return c
  }
}), t("222007"), t("781738"), t("355025");
var a = t("367376"),
  n = t("240873"),
  i = t("49111");
let l = new Set([i.MessageEmbedTypes.IMAGE, i.MessageEmbedTypes.GIFV]),
  o = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

function s(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = r.formatInline ? a.default.parseInlineReply : a.default.parse;
  return function(e, r, t) {
    var a, i;
    let {
      toAST: s = !1,
      hideSimpleEmbedContent: c = !0,
      formatInline: h = !1,
      postProcessor: p
    } = t, m = !1;
    let g = e(r.content, !0, (a = r, i = t, {
      allowLinks: null != a.webhookId || !!i.allowLinks,
      allowEmojiLinks: null != a.webhookId,
      channelId: a.channel_id,
      messageId: a.id,
      mentionChannels: a.mentionChannels,
      isInteracting: !!i.isInteracting,
      formatInline: !!i.formatInline,
      noStyleAndInteraction: !!i.noStyleAndInteraction,
      allowHeading: !!i.allowHeading,
      allowList: !!i.allowList,
      previewLinkTarget: !!i.previewLinkTarget,
      disableAnimatedEmoji: !!i.disableAnimatedEmoji,
      disableAutoBlockNewlines: !0,
      muted: !1
    }), (e, t) => (!Array.isArray(e) && (e = [e]), c && (e = function(e, r) {
      if (1 !== e.length || 1 !== r.length) return e;
      let t = e[0],
        a = r[0];
      return ("link" === t.type || "attachmentLink" === t.type) && l.has(a.type) && (0, n.isEmbedInline)(a) ? [] : e
    }(e, r.embeds)), !h && (e = function(e, r) {
      return r ? d(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content)), e)
    }(e, t)), m = function(e, r) {
      return r ? u(e) : "paragraph" === e[0].type && e[0].content instanceof Array && u(e[0].content)
    }(e, t), h && (e = function e(r) {
      return r.forEach(r => {
        o.has(r.type) && null != r.content && (Array.isArray(r.content) ? e(r.content) : r.content = r.content.replace(/\n/g, " "))
      }), r
    }(e)), null != p && (e = p(e, t)), e));
    return {
      hasSpoilerEmbeds: m,
      content: g
    }
  }(t, e, r)
}

function c(e, r, t) {
  var n;
  return n = a.default.parseAutoModerationSystemMessage, n(e, !0, {
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

function d(e) {
  let r = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
  if (r) return e;
  let t = 0;
  return (e.forEach(e => {
    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
  }), t > 30) ? e : (e.forEach(e => {
    e.jumboable = !0
  }), e)
}

function u(e) {
  return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
}