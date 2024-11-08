n.d(t, {
    BC: function () {
        return h;
    },
    LR: function () {
        return _;
    },
    ku: function () {
        return f;
    }
}),
    n(789020);
var r = n(830121),
    i = n(754688),
    a = n(430824),
    s = n(768581),
    o = n(5192),
    l = n(154135),
    u = n(981631),
    c = n(959517),
    d = n(388032);
function f(e) {
    var t, n, r, i, a;
    let { mediaPostEmbedData: u, guild: f, parentChannel: _, postThread: h, user: p, selectedGuildId: m, canAccess: g = !1 } = e;
    if (null == u) return null;
    let E = (0, l.EY)(u.thumbnail),
        v = !g && u.has_media_attachment,
        I = g ? d.intl.string(d.t.UsZEBA) : d.intl.string(d.t.ReFzYW),
        S = null != p ? o.ZP.getName(u.guild_id, u.channel_id, p) : void 0,
        b = null == p ? void 0 : p.getAvatarURL(null == f ? void 0 : f.id, 40);
    (null == b || m !== u.guild_id) &&
        (b = s.ZP.getGuildIconURL({
            id: u.guild_id,
            icon: u.guild_icon,
            size: 40,
            canAnimate: !1
        }));
    let T =
            (function (e) {
                if (null == e) return !1;
                let { height: t, width: n } = e;
                return null != t && null != n && t >= n;
            })(u.thumbnail) && !v,
        y = (null === (t = u.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = u.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(c._j));
    return {
        title: null !== (i = u.title) && void 0 !== i ? i : '',
        subtitle: u.description,
        ctaText: I,
        coverImage: E,
        coverImageOverlayText: v ? d.intl.string(d.t.YonliY) : void 0,
        parentChannelId: u.parent_channel_id,
        threadId: u.channel_id,
        postThread: h,
        messageId: u.message_id,
        canAccess: g,
        guildId: u.guild_id,
        guildName: null !== (a = null == f ? void 0 : f.name) && void 0 !== a ? a : u.guild_name,
        authorId: null == u ? void 0 : u.author_id,
        authorName: S,
        channelName: null == _ ? void 0 : _.name,
        avatarUrl: b,
        shouldShowBlurredThumbnailImage: v,
        shouldContainMediaWithBackground: T,
        shouldSpoiler: y,
        obscureAwaitingScan: !1,
        flags: u.flags,
        contentScanVersion: u.content_scan_version
    };
}
function _(e) {
    if (null == e) return;
    let t = (0, r.FO)(e);
    if (null == t) return;
    let n = (0, r.Sq)(t);
    if (null != n) return (0, i.Qj)(n);
}
function h(e, t) {
    let n = a.Z.getGuild(e);
    if (null == n || null == t) return !1;
    let r = n.hasFeature(u.oNc.CREATOR_MONETIZABLE) || n.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
