"use strict";
n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(25209),
  o = n(691424),
  a = n(428595),
  l = n(364458);
let u = null;

function _(e, t) {
  let n = {};
  return null != e.mention && null != u && (n = {
    mention: u
  }), (0, l.Z)([e, ...t, n])
}
u = n(878611).Z;
let c = {
    enableBuildOverrides: !1,
    enableEmojiClick: !0
  },
  d = _(a.Z.RULES, [(0, o.Z)({
    enableBuildOverrides: !0
  })]),
  E = r().omit(_(a.Z.RULES, [(0, o.Z)(c)]), "paragraph", "newline"),
  I = _(a.Z.CHANNEL_TOPIC_RULES, [(0, o.Z)({
    ...c,
    emojiTooltipPosition: "bottom"
  }), {
    codeBlock: {
      react: a.Z.RULES.text.react
    }
  }]),
  T = _(a.Z.VOICE_CHANNEL_STATUS_RULES, [(0, o.Z)({
    ...c,
    enableEmojiClick: !1
  })]),
  h = _(a.Z.EMBED_TITLE_RULES, [(0, o.Z)(c)]),
  f = _(a.Z.INLINE_REPLY_RULES, [(0, o.Z)(c)]),
  S = _(a.Z.GUILD_VERIFICATION_FORM_RULES, [(0, o.Z)(c)]),
  N = _(a.Z.GUILD_EVENT_RULES, [(0, o.Z)(c)]),
  A = _(a.Z.INLINE_REPLY_RULES, [(0, o.Z)({
    ...c,
    emoji: {
      height: 14,
      width: 14,
      lineHeight: 18
    }
  })]),
  m = _(a.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, o.Z)(c)]),
  O = r().omit(_(a.Z.RULES, [(0, o.Z)({
    ...c,
    emoji: {
      height: 14,
      width: 14
    }
  })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "subtext"),
  p = {
    text: a.Z.RULES.text
  };
t.Z = {
  combineAndInjectMentionRule: _,
  createReactRules: o.Z,
  defaultReactRuleOptions: c,
  defaultRules: d,
  guildEventRules: N,
  notifCenterV2MessagePreviewRules: O,
  lockscreenWidgetMessageRules: p,
  astParserFor: s._p,
  reactParserFor: s.w4,
  parse: s.w4(d),
  parseTopic: s.w4(I),
  parseVoiceChannelStatus: s.w4(T),
  parseEmbedTitle: s.w4(h),
  parseInlineReply: s.w4(f),
  parseGuildVerificationFormRule: s.w4(S),
  parseGuildEventDescription: s.w4(N),
  parseAutoModerationSystemMessage: s.w4(m),
  parseForumPostGuidelines: s.w4(E),
  parseForumPostMostRecentMessage: s.w4(A),
  parseNotifCenterMessagePreview: s.w4(O),
  parseToAST: s._p(d),
  parseTopicToAST: s._p(I),
  parseEmbedTitleToAST: s._p(h),
  parseInlineReplyToAST: s._p(f),
  parseAutoModerationSystemMessageToAST: s._p(m)
}