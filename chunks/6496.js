r.d(n, {
    RR: function () {
        return N;
    },
    WW: function () {
        return S;
    },
    bE: function () {
        return R;
    },
    n4: function () {
        return M;
    },
    q8: function () {
        return C;
    },
    t$: function () {
        return A;
    },
    xl: function () {
        return P;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(724458);
var o = r(683860),
    l = r(344185),
    u = r(569471),
    c = r(260483),
    d = r(144140),
    f = r(592125),
    _ = r(703558),
    h = r(496675),
    p = r(117530),
    m = r(709054),
    g = r(660189),
    E = r(559241),
    v = r(474387),
    I = r(702225),
    T = r(981631),
    b = r(176505),
    y = r(124368);
function S(e) {
    return I.Z.getForumChannelSessionId(e);
}
function A(e) {
    switch (e) {
        case o.z.CREATION_DATE:
            return y.SX.CREATION_DATE;
        case o.z.LATEST_ACTIVITY:
            return y.SX.LATEST_ACTIVITY;
        default:
            throw Error('Unexpected sort order '.concat(e));
    }
}
function N(e) {
    return p.Z.getUploads(e, _.d.FirstThreadMessage).length;
}
function C(e) {
    var n, r;
    let i = f.Z.getChannel(e);
    if (null == i) return [];
    let a = f.Z.getChannel(i.parent_id),
        s = null == a ? void 0 : a.availableTags;
    if (null == a || null == s) return [];
    let o = null !== (r = null === (n = _.Z.getThreadSettings(e)) || void 0 === n ? void 0 : n.appliedTags) && void 0 !== r ? r : new Set(),
        l = new Set(s.map((e) => e.id));
    return Array.from(o).filter((e) => l.has(e));
}
function R(e, n) {
    return Object.keys(l.Z.getThreadsForParent(e, n)).length;
}
function O(e) {
    let { loaded: n, firstMessage: r } = g.Z.getMessage(e);
    return n ? r : null;
}
function D(e) {
    let n = O(e);
    return null == n ? 0 : n.reactions.length;
}
function L(e) {
    let n = O(e);
    return null == n ? 0 : n.reactions.reduce((e, n) => e + n.count, 0);
}
function x(e) {
    var n, r;
    let i = f.Z.getChannel(e);
    if (null == i) return [];
    let a = f.Z.getChannel(i.parent_id),
        s = null == a ? void 0 : a.availableTags;
    if (null == a || null == s) return [];
    let o = new Set(s.map((e) => e.id));
    return null !== (r = null === (n = i.appliedTags) || void 0 === n ? void 0 : n.filter((e) => o.has(e))) && void 0 !== r ? r : [];
}
function w(e) {
    let n = O(e);
    return null == n
        ? []
        : n.attachments.map((e) => {
              var n;
              return null !== (n = e.content_type) && void 0 !== n ? n : 'unknown';
          });
}
function P(e) {
    var n, r, i, a;
    let { channelId: s, sessionId: o } = e,
        l = f.Z.getChannel(s);
    return null != l && l.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != l.topic && l.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: null === (n = l.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiId,
              forum_channel_default_emoji_reaction_name: null === (r = l.defaultReactionEmoji) || void 0 === r ? void 0 : r.emojiName,
              forum_channel_available_tag_ids: null !== (a = null === (i = l.availableTags) || void 0 === i ? void 0 : i.map((e) => e.id)) && void 0 !== a ? a : [],
              forum_channel_tag_required: l.hasFlag(b.zZ.REQUIRE_TAG),
              forum_channel_can_create_post: h.Z.can(T.Plq.SEND_MESSAGES, l),
              forum_channel_filter_tag_ids: E.Z.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: E.Z.getSortOrderAnalytics(l.id),
              forum_channel_session_id: null != o ? o : S(l.id),
              forum_channel_layout: E.Z.getLayoutAnalytics(l.id),
              forum_channel_default_sort_order: l.defaultSortOrder,
              forum_channel_default_layout: l.defaultForumLayout
          }
        : null;
}
function M(e) {
    var n, r, i, a, s, o, l;
    let { channelId: _, sessionId: h } = e,
        p = f.Z.getChannel(_);
    if (null == p || !p.isForumPost()) return null;
    let g = f.Z.getChannel(p.parent_id);
    return null != g && g.isForumLikeChannel()
        ? {
              ...P({
                  channelId: g.id,
                  sessionId: h
              }),
              thread_approximate_member_count: c.Z.getMemberCount(_),
              thread_approximate_message_count: d.Z.getCount(_),
              thread_archived: (null === (n = p.threadMetadata) || void 0 === n ? void 0 : n.archived) === !0,
              thread_locked: null !== (o = null === (r = p.threadMetadata) || void 0 === r ? void 0 : r.locked) && void 0 !== o && o,
              thread_auto_archive_duration_minutes: null !== (l = null === (i = p.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== l ? l : 0,
              thread_approximate_creation_date: m.default.extractTimestamp(_),
              forum_post_id: p.id,
              forum_post_first_message_id: m.default.castChannelIdAsMessageId(p.id),
              forum_post_num_reactions: L(p.id),
              forum_post_num_unique_reactions: D(p.id),
              forum_post_applied_tag_ids: x(p.id),
              forum_post_is_pinned: p.hasFlag(b.zZ.PINNED),
              forum_post_is_new: null === (a = v.Z.getReadStateSnapshotAnalytics(p.id)) || void 0 === a ? void 0 : a.isNew,
              forum_post_is_unread: null === (s = v.Z.getReadStateSnapshotAnalytics(p.id)) || void 0 === s ? void 0 : s.hasUnreads,
              forum_post_is_following: u.Z.hasJoined(p.id),
              forum_post_attachment_mimetypes: w(p.id)
          }
        : null;
}
