n.d(t, {
    ZP: function () {
        return g;
    },
    k$: function () {
        return v;
    },
    n0: function () {
        return T;
    },
    p6: function () {
        return p;
    },
    rs: function () {
        return h;
    }
});
var r = n(47120);
var i = n(757143);
var a = n(865427),
    o = n(830121),
    s = n(202131),
    l = n(454585);
n(665430);
var u = n(55406),
    c = n(408433),
    d = n(981631);
let _ = 30,
    E = new Set([d.hBH.IMAGE, d.hBH.GIFV]),
    f = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function h(e, t) {
    let n = p({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t
        }),
        r = null != e.webhookId;
    return {
        ...n,
        allowLinks: r || n.allowLinks,
        allowEmojiLinks: r,
        mentionChannels: e.mentionChannels
    };
}
function p(e) {
    let { channelId: t, messageId: n, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
        formatInline: !!r.formatInline,
        noStyleAndInteraction: !!r.noStyleAndInteraction,
        allowHeading: !!r.allowHeading,
        allowList: !!r.allowList,
        previewLinkTarget: !!r.previewLinkTarget,
        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
        isInteracting: !!r.isInteracting,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: r.viewingChannelId,
        forceWhite: !!r.forceWhite
    };
}
function m(e, t, n) {
    var r;
    let { toAST: i = !1, hideSimpleEmbedContent: a = !0, formatInline: o = !1, postProcessor: l, shouldFilterKeywords: u, contentMessage: c } = n,
        d = !1,
        _ = (null != c ? c : t).content,
        E = e(
            u
                ? (0, s.N)(_, {
                      escapeReplacement: !0,
                      messageId: t.id,
                      channelId: t.channel_id,
                      authorId: null === (r = t.author) || void 0 === r ? void 0 : r.id
                  })
                : _,
            !0,
            h(t, n),
            (e, n) => (!Array.isArray(e) && (e = [e]), a && (e = y(e, (null != c ? c : t).embeds)), !o && (e = N(e, n)), (d = R((e = I(e)), n)), o && (e = b(e)), null != l && (e = l(e, n)), e)
        );
    return {
        hasSpoilerEmbeds: d,
        content: E
    };
}
function I(e) {
    let t = e.some((e) => 'link' !== e.type || !1);
    return e.filter((e) => {
        let n = 'link' === e.type,
            r = null != (0, o.el)(e.target);
        return !(n && r && !t);
    });
}
function T(e, t, n) {
    return {
        hasSpoilerEmbeds: !1,
        content: l.Z.reactParserFor(u.Z.getDefaultRules(t))(e.content, !1, null != n ? { changeLog: n } : {})
    };
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return m(t.formatInline ? l.Z.parseInlineReply : l.Z.parse, e, t);
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { content: r, guildId: i, channelId: a, messageId: o } = t,
        s = {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            isInteracting: !1,
            formatInline: !0,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            disableAutoBlockNewlines: !0,
            previewLinkTarget: !1,
            disableAnimatedEmoji: !0,
            guildId: i,
            channelId: a,
            muted: !1,
            disablePressableChannelMention: !0
        };
    return e(
        (null == n ? void 0 : n.shouldFilterKeywords)
            ? getKeywordSubstitutedContent(r, {
                  escapeReplacement: !0,
                  channelId: a,
                  messageId: o
              })
            : r,
        !0,
        s,
        (e) => (!Array.isArray(e) && (e = [e]), e)
    );
}
function A(e, t, n, r) {
    return e(
        t,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            isInteracting: !1,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            disableAutoBlockNewlines: !0,
            highlightWord: n,
            disableAnimatedEmoji: !1,
            channelId: r,
            muted: !1
        },
        (e) => (!Array.isArray(e) && (e = [e]), e)
    );
}
function v(e, t, n) {
    return A(l.Z.parseAutoModerationSystemMessage, e, t, n);
}
function N(e, t) {
    return t ? O(e) : ('paragraph' === e[0].type && e[0].content instanceof Array && (e[0].content = O(e[0].content)), e);
}
function O(e) {
    if (e.some((e) => 'emoji' !== e.type && 'customEmoji' !== e.type && 'soundboard' !== e.type && ('string' != typeof e.content || '' !== e.content.trim()) && !0)) return e;
    let t = 0;
    return (e.forEach((e) => {
        if ((('emoji' === e.type || 'customEmoji' === e.type || 'soundboard' === e.type) && (t += 1), t > _)) return !1;
    }),
    t > _)
        ? e
        : (e.forEach((e) => {
              e.jumboable = !0;
          }),
          e);
}
function R(e, t) {
    return t ? C(e) : 'paragraph' === e[0].type && e[0].content instanceof Array && C(e[0].content);
}
function C(e) {
    return e.some((e) => 'spoiler' === e.type && Array.isArray(e.content) && e.content.some((e) => 'link' === e.type || 'attachmentLink' === e.type));
}
function y(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        r = t[0];
    return ('link' === n.type || 'attachmentLink' === n.type) && E.has(r.type) && (0, c.dY)(r) ? [] : e;
}
function b(e) {
    return (
        e.forEach((e) => {
            f.has(e.type) && null != e.content && (Array.isArray(e.content) ? b(e.content) : (e.content = e.content.replace(/\n/g, ' ')));
        }),
        e
    );
}
