n.d(t, {
    BC: function () {
        return m;
    },
    LR: function () {
        return h;
    },
    ku: function () {
        return f;
    }
});
var r = n(789020);
var i = n(830121),
    a = n(754688),
    o = n(430824),
    s = n(768581),
    l = n(5192),
    u = n(154135),
    c = n(981631),
    d = n(959517),
    _ = n(689938);
let E = 40;
function f(e) {
    var t, n, r, i, a;
    let { mediaPostEmbedData: o, guild: c, parentChannel: f, postThread: h, user: m, selectedGuildId: I, canAccess: T = !1 } = e;
    if (null == o) return null;
    let g = (0, u.EY)(o.thumbnail),
        S = !T && o.has_media_attachment,
        A = T ? _.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : _.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
        v = null != m ? l.ZP.getName(o.guild_id, o.channel_id, m) : void 0,
        N = null == m ? void 0 : m.getAvatarURL(null == c ? void 0 : c.id, E);
    (null == N || I !== o.guild_id) &&
        (N = s.ZP.getGuildIconURL({
            id: o.guild_id,
            icon: o.guild_icon,
            size: E,
            canAnimate: !1
        }));
    let O = p(o.thumbnail) && !S,
        R = (null === (t = o.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = o.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(d._j));
    return {
        title: null !== (i = o.title) && void 0 !== i ? i : '',
        subtitle: o.description,
        ctaText: A,
        coverImage: g,
        coverImageOverlayText: S ? _.Z.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
        parentChannelId: o.parent_channel_id,
        threadId: o.channel_id,
        postThread: h,
        messageId: o.message_id,
        canAccess: T,
        guildId: o.guild_id,
        guildName: null !== (a = null == c ? void 0 : c.name) && void 0 !== a ? a : o.guild_name,
        authorId: null == o ? void 0 : o.author_id,
        authorName: v,
        channelName: null == f ? void 0 : f.name,
        avatarUrl: N,
        shouldShowBlurredThumbnailImage: S,
        shouldContainMediaWithBackground: O,
        shouldSpoiler: R,
        obscureAwaitingScan: !1,
        flags: o.flags,
        contentScanVersion: o.content_scan_version
    };
}
function h(e) {
    if (null == e) return;
    let t = (0, i.FO)(e);
    if (null == t) return;
    let n = (0, i.Sq)(t);
    if (null != n) return (0, a.Qj)(n);
}
function p(e) {
    if (null == e) return !1;
    let { height: t, width: n } = e;
    return null != t && null != n && t >= n;
}
function m(e, t) {
    let n = o.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = n.hasFeature(c.oNc.CREATOR_MONETIZABLE) || n.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
