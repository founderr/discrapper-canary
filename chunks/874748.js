r.d(n, {
    BC: function () {
        return E;
    },
    LR: function () {
        return m;
    },
    ku: function () {
        return p;
    }
});
var i = r(789020);
var a = r(830121),
    s = r(754688),
    o = r(430824),
    l = r(768581),
    u = r(5192),
    c = r(154135),
    d = r(981631),
    f = r(959517),
    _ = r(388032);
let h = 40;
function p(e) {
    var n, r, i, a, s;
    let { mediaPostEmbedData: o, guild: d, parentChannel: p, postThread: m, user: E, selectedGuildId: v, canAccess: I = !1 } = e;
    if (null == o) return null;
    let T = (0, c.EY)(o.thumbnail),
        b = !I && o.has_media_attachment,
        y = I ? _.intl.string(_.t.UsZEBA) : _.intl.string(_.t.ReFzYW),
        S = null != E ? u.ZP.getName(o.guild_id, o.channel_id, E) : void 0,
        A = null == E ? void 0 : E.getAvatarURL(null == d ? void 0 : d.id, h);
    (null == A || v !== o.guild_id) &&
        (A = l.ZP.getGuildIconURL({
            id: o.guild_id,
            icon: o.guild_icon,
            size: h,
            canAnimate: !1
        }));
    let N = g(o.thumbnail) && !b,
        C = (null === (n = o.thumbnail) || void 0 === n ? void 0 : n.filename) != null && (null === (i = o.thumbnail) || void 0 === i ? void 0 : null === (r = i.filename) || void 0 === r ? void 0 : r.startsWith(f._j));
    return {
        title: null !== (a = o.title) && void 0 !== a ? a : '',
        subtitle: o.description,
        ctaText: y,
        coverImage: T,
        coverImageOverlayText: b ? _.intl.string(_.t.YonliY) : void 0,
        parentChannelId: o.parent_channel_id,
        threadId: o.channel_id,
        postThread: m,
        messageId: o.message_id,
        canAccess: I,
        guildId: o.guild_id,
        guildName: null !== (s = null == d ? void 0 : d.name) && void 0 !== s ? s : o.guild_name,
        authorId: null == o ? void 0 : o.author_id,
        authorName: S,
        channelName: null == p ? void 0 : p.name,
        avatarUrl: A,
        shouldShowBlurredThumbnailImage: b,
        shouldContainMediaWithBackground: N,
        shouldSpoiler: C,
        obscureAwaitingScan: !1,
        flags: o.flags,
        contentScanVersion: o.content_scan_version
    };
}
function m(e) {
    if (null == e) return;
    let n = (0, a.FO)(e);
    if (null == n) return;
    let r = (0, a.Sq)(n);
    if (null != r) return (0, s.Qj)(r);
}
function g(e) {
    if (null == e) return !1;
    let { height: n, width: r } = e;
    return null != n && null != r && n >= r;
}
function E(e, n) {
    let r = o.Z.getGuild(e);
    if (null == r || null == n) return !1;
    let i = r.hasFeature(d.oNc.CREATOR_MONETIZABLE) || r.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === n.isMediaChannel() && i;
}
