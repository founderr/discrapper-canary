n.d(t, {
    RR: function () {
        return O;
    },
    WW: function () {
        return v;
    },
    bE: function () {
        return C;
    },
    n4: function () {
        return U;
    },
    q8: function () {
        return R;
    },
    t$: function () {
        return N;
    },
    xl: function () {
        return P;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(724458);
var o = n(683860),
    s = n(344185),
    l = n(569471),
    u = n(260483),
    c = n(144140),
    d = n(592125),
    _ = n(703558),
    E = n(496675),
    f = n(117530),
    h = n(709054),
    p = n(660189),
    m = n(559241),
    I = n(474387),
    T = n(702225),
    g = n(981631),
    S = n(176505),
    A = n(124368);
function v(e) {
    return T.Z.getForumChannelSessionId(e);
}
function N(e) {
    switch (e) {
        case o.z.CREATION_DATE:
            return A.SX.CREATION_DATE;
        case o.z.LATEST_ACTIVITY:
            return A.SX.LATEST_ACTIVITY;
        default:
            throw Error('Unexpected sort order '.concat(e));
    }
}
function O(e) {
    return f.Z.getUploads(e, _.d.FirstThreadMessage).length;
}
function R(e) {
    var t, n;
    let r = d.Z.getChannel(e);
    if (null == r) return [];
    let i = d.Z.getChannel(r.parent_id),
        a = null == i ? void 0 : i.availableTags;
    if (null == i || null == a) return [];
    let o = null !== (n = null === (t = _.Z.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set(),
        s = new Set(a.map((e) => e.id));
    return Array.from(o).filter((e) => s.has(e));
}
function C(e, t) {
    return Object.keys(s.Z.getThreadsForParent(e, t)).length;
}
function y(e) {
    let { loaded: t, firstMessage: n } = p.Z.getMessage(e);
    return t ? n : null;
}
function L(e) {
    let t = y(e);
    return null == t ? 0 : t.reactions.length;
}
function b(e) {
    let t = y(e);
    return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0);
}
function D(e) {
    var t, n;
    let r = d.Z.getChannel(e);
    if (null == r) return [];
    let i = d.Z.getChannel(r.parent_id),
        a = null == i ? void 0 : i.availableTags;
    if (null == i || null == a) return [];
    let o = new Set(a.map((e) => e.id));
    return null !== (n = null === (t = r.appliedTags) || void 0 === t ? void 0 : t.filter((e) => o.has(e))) && void 0 !== n ? n : [];
}
function M(e) {
    let t = y(e);
    return null == t
        ? []
        : t.attachments.map((e) => {
              var t;
              return null !== (t = e.content_type) && void 0 !== t ? t : 'unknown';
          });
}
function P(e) {
    var t, n, r, i;
    let { channelId: a, sessionId: o } = e,
        s = d.Z.getChannel(a);
    return null != s && s.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != s.topic && s.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: null === (t = s.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
              forum_channel_default_emoji_reaction_name: null === (n = s.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
              forum_channel_available_tag_ids: null !== (i = null === (r = s.availableTags) || void 0 === r ? void 0 : r.map((e) => e.id)) && void 0 !== i ? i : [],
              forum_channel_tag_required: s.hasFlag(S.zZ.REQUIRE_TAG),
              forum_channel_can_create_post: E.Z.can(g.Plq.SEND_MESSAGES, s),
              forum_channel_filter_tag_ids: m.Z.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: m.Z.getSortOrderAnalytics(s.id),
              forum_channel_session_id: null != o ? o : v(s.id),
              forum_channel_layout: m.Z.getLayoutAnalytics(s.id),
              forum_channel_default_sort_order: s.defaultSortOrder,
              forum_channel_default_layout: s.defaultForumLayout
          }
        : null;
}
function U(e) {
    var t, n, r, i, a, o, s;
    let { channelId: _, sessionId: E } = e,
        f = d.Z.getChannel(_);
    if (null == f || !f.isForumPost()) return null;
    let p = d.Z.getChannel(f.parent_id);
    return null != p && p.isForumLikeChannel()
        ? {
              ...P({
                  channelId: p.id,
                  sessionId: E
              }),
              thread_approximate_member_count: u.Z.getMemberCount(_),
              thread_approximate_message_count: c.Z.getCount(_),
              thread_archived: (null === (t = f.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
              thread_locked: null !== (o = null === (n = f.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== o && o,
              thread_auto_archive_duration_minutes: null !== (s = null === (r = f.threadMetadata) || void 0 === r ? void 0 : r.autoArchiveDuration) && void 0 !== s ? s : 0,
              thread_approximate_creation_date: h.default.extractTimestamp(_),
              forum_post_id: f.id,
              forum_post_first_message_id: h.default.castChannelIdAsMessageId(f.id),
              forum_post_num_reactions: b(f.id),
              forum_post_num_unique_reactions: L(f.id),
              forum_post_applied_tag_ids: D(f.id),
              forum_post_is_pinned: f.hasFlag(S.zZ.PINNED),
              forum_post_is_new: null === (i = I.Z.getReadStateSnapshotAnalytics(f.id)) || void 0 === i ? void 0 : i.isNew,
              forum_post_is_unread: null === (a = I.Z.getReadStateSnapshotAnalytics(f.id)) || void 0 === a ? void 0 : a.hasUnreads,
              forum_post_is_following: l.Z.hasJoined(f.id),
              forum_post_attachment_mimetypes: M(f.id)
          }
        : null;
}
