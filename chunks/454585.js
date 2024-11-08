n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(25209),
    s = n(691424),
    o = n(428595),
    l = n(364458);
let u = null;
function c(e, t) {
    let n = {};
    return null != e.mention && null != u && (n = { mention: u }), (0, l.Z)([e, ...t, n]);
}
u = n(878611).Z;
let d = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0
    },
    f = c(o.Z.RULES, [(0, s.Z)({ enableBuildOverrides: !0 })]),
    _ = i().omit(c(o.Z.RULES, [(0, s.Z)(d)]), 'paragraph', 'newline'),
    h = c(o.Z.CHANNEL_TOPIC_RULES, [
        (0, s.Z)({
            ...d,
            emojiTooltipPosition: 'bottom'
        }),
        { codeBlock: { react: o.Z.RULES.text.react } }
    ]),
    p = c(o.Z.VOICE_CHANNEL_STATUS_RULES, [
        (0, s.Z)({
            ...d,
            enableEmojiClick: !1
        })
    ]),
    m = c(o.Z.EMBED_TITLE_RULES, [(0, s.Z)(d)]),
    g = c(o.Z.INLINE_REPLY_RULES, [(0, s.Z)(d)]),
    E = c(o.Z.GUILD_VERIFICATION_FORM_RULES, [(0, s.Z)(d)]),
    v = c(o.Z.GUILD_EVENT_RULES, [(0, s.Z)(d)]),
    I = c(o.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.Z)(d)]),
    S = i().omit(c(o.Z.RULES, [(0, s.Z)(d)]), 'paragraph', 'newline', 'strong', 'codeBlock', 'inlineCode', 'u', 'link', 'url', 'autolink', 'list', 'heading', 'subtext'),
    b = { text: o.Z.RULES.text };
t.Z = {
    combineAndInjectMentionRule: c,
    createReactRules: s.Z,
    defaultReactRuleOptions: d,
    defaultRules: f,
    guildEventRules: v,
    notifCenterV2MessagePreviewRules: S,
    lockscreenWidgetMessageRules: b,
    astParserFor: a._p,
    reactParserFor: a.w4,
    parse: a.w4(f),
    parseTopic: a.w4(h),
    parseVoiceChannelStatus: a.w4(p),
    parseEmbedTitle: a.w4(m),
    parseInlineReply: a.w4(g),
    parseGuildVerificationFormRule: a.w4(E),
    parseGuildEventDescription: a.w4(v),
    parseAutoModerationSystemMessage: a.w4(I),
    parseForumPostGuidelines: a.w4(_),
    parseToAST: a._p(f),
    parseTopicToAST: a._p(h),
    parseEmbedTitleToAST: a._p(m),
    parseInlineReplyToAST: a._p(g),
    parseAutoModerationSystemMessageToAST: a._p(I)
};
