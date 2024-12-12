var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(25209),
    l = r(691424),
    u = r(428595),
    c = r(364458);
let d = null;
function f(e, n) {
    let r = {};
    return null != e.mention && null != d && (r = { mention: d }), (0, c.Z)([e, ...n, r]);
}
d = r(878611).Z;
let _ = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0
    },
    h = f(u.Z.RULES, [(0, l.Z)({ enableBuildOverrides: !0 })]),
    p = s().omit(f(u.Z.RULES, [(0, l.Z)(_)]), 'paragraph', 'newline'),
    m = f(u.Z.CHANNEL_TOPIC_RULES, [
        (0, l.Z)({
            ..._,
            emojiTooltipPosition: 'bottom'
        }),
        { codeBlock: { react: u.Z.RULES.text.react } }
    ]),
    g = f(u.Z.VOICE_CHANNEL_STATUS_RULES, [
        (0, l.Z)({
            ..._,
            enableEmojiClick: !1
        })
    ]),
    E = f(u.Z.EMBED_TITLE_RULES, [(0, l.Z)(_)]),
    v = f(u.Z.INLINE_REPLY_RULES, [(0, l.Z)(_)]),
    I = f(u.Z.GUILD_VERIFICATION_FORM_RULES, [(0, l.Z)(_)]),
    T = f(u.Z.GUILD_EVENT_RULES, [(0, l.Z)(_)]),
    b = f(u.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, l.Z)(_)]),
    y = s().omit(f(u.Z.RULES, [(0, l.Z)(_)]), 'paragraph', 'newline', 'strong', 'codeBlock', 'inlineCode', 'u', 'link', 'url', 'autolink', 'list', 'heading', 'subtext'),
    S = { text: u.Z.RULES.text };
n.Z = {
    combineAndInjectMentionRule: f,
    createReactRules: l.Z,
    defaultReactRuleOptions: _,
    defaultRules: h,
    guildEventRules: T,
    notifCenterV2MessagePreviewRules: y,
    lockscreenWidgetMessageRules: S,
    astParserFor: o._p,
    reactParserFor: o.w4,
    parse: o.w4(h),
    parseTopic: o.w4(m),
    parseVoiceChannelStatus: o.w4(g),
    parseEmbedTitle: o.w4(E),
    parseInlineReply: o.w4(v),
    parseGuildVerificationFormRule: o.w4(I),
    parseGuildEventDescription: o.w4(T),
    parseAutoModerationSystemMessage: o.w4(b),
    parseForumPostGuidelines: o.w4(p),
    parseToAST: o._p(h),
    parseTopicToAST: o._p(m),
    parseEmbedTitleToAST: o._p(E),
    parseInlineReplyToAST: o._p(v),
    parseAutoModerationSystemMessageToAST: o._p(b)
};
