var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(25209),
    s = n(691424),
    l = n(428595),
    u = n(364458);
let c = null;
function d(e, t) {
    let n = {};
    return null != e.mention && null != c && (n = { mention: c }), (0, u.Z)([e, ...t, n]);
}
c = n(878611).Z;
let _ = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0
    },
    E = d(l.Z.RULES, [(0, s.Z)({ enableBuildOverrides: !0 })]),
    f = a().omit(d(l.Z.RULES, [(0, s.Z)(_)]), 'paragraph', 'newline'),
    h = d(l.Z.CHANNEL_TOPIC_RULES, [
        (0, s.Z)({
            ..._,
            emojiTooltipPosition: 'bottom'
        }),
        { codeBlock: { react: l.Z.RULES.text.react } }
    ]),
    p = d(l.Z.VOICE_CHANNEL_STATUS_RULES, [
        (0, s.Z)({
            ..._,
            enableEmojiClick: !1
        })
    ]),
    m = d(l.Z.EMBED_TITLE_RULES, [(0, s.Z)(_)]),
    I = d(l.Z.INLINE_REPLY_RULES, [(0, s.Z)(_)]),
    T = d(l.Z.GUILD_VERIFICATION_FORM_RULES, [(0, s.Z)(_)]),
    g = d(l.Z.GUILD_EVENT_RULES, [(0, s.Z)(_)]),
    S = d(l.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.Z)(_)]),
    A = a().omit(d(l.Z.RULES, [(0, s.Z)(_)]), 'paragraph', 'newline', 'strong', 'codeBlock', 'inlineCode', 'u', 'link', 'url', 'autolink', 'list', 'heading', 'subtext'),
    v = { text: l.Z.RULES.text };
t.Z = {
    combineAndInjectMentionRule: d,
    createReactRules: s.Z,
    defaultReactRuleOptions: _,
    defaultRules: E,
    guildEventRules: g,
    notifCenterV2MessagePreviewRules: A,
    lockscreenWidgetMessageRules: v,
    astParserFor: o._p,
    reactParserFor: o.w4,
    parse: o.w4(E),
    parseTopic: o.w4(h),
    parseVoiceChannelStatus: o.w4(p),
    parseEmbedTitle: o.w4(m),
    parseInlineReply: o.w4(I),
    parseGuildVerificationFormRule: o.w4(T),
    parseGuildEventDescription: o.w4(g),
    parseAutoModerationSystemMessage: o.w4(S),
    parseForumPostGuidelines: o.w4(f),
    parseToAST: o._p(E),
    parseTopicToAST: o._p(h),
    parseEmbedTitleToAST: o._p(m),
    parseInlineReplyToAST: o._p(I),
    parseAutoModerationSystemMessageToAST: o._p(S)
};
