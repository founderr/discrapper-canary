r.d(n, {
    B: function () {
        return O;
    },
    B5: function () {
        return N;
    },
    Do: function () {
        return R;
    },
    GX: function () {
        return w;
    },
    HR: function () {
        return G;
    },
    Hr: function () {
        return A;
    },
    Je: function () {
        return y;
    },
    Js: function () {
        return m;
    },
    KR: function () {
        return C;
    },
    MO: function () {
        return M;
    },
    N3: function () {
        return P;
    },
    Oq: function () {
        return b;
    },
    P_: function () {
        return v;
    },
    Vn: function () {
        return T;
    },
    ab: function () {
        return S;
    },
    e5: function () {
        return D;
    },
    e7: function () {
        return E;
    },
    lN: function () {
        return U;
    },
    nE: function () {
        return k;
    },
    nH: function () {
        return I;
    },
    qs: function () {
        return p;
    },
    qz: function () {
        return B;
    },
    ws: function () {
        return L;
    },
    xI: function () {
        return x;
    },
    zI: function () {
        return g;
    }
});
var i = r(367907),
    a = r(731429),
    s = r(188471),
    o = r(592125),
    l = r(703558),
    u = r(626135),
    c = r(358085),
    d = r(660189),
    f = r(208970),
    _ = r(6496),
    h = r(981631);
function p(e) {
    let { guildId: n, channelId: r, sessionId: a, postIds: s, additionalTimes: o } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, _.xl)({
            channelId: r,
            sessionId: a
        }),
        guild_id: n,
        channel_id: r,
        post_ids: s,
        additional_seen_time_millis: o
    });
}
function m(e) {
    let { guildId: n, channelId: r, numSearchResults: a } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_SEARCHED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r,
        num_search_results: a
    });
}
function g(e) {
    let { guildId: n, channelId: r } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r
    });
}
function E(e) {
    let { guildId: n, channelId: r, tagId: a, filterTagIds: s, added: o, location: l } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r,
        tag_id: a,
        filter_tag_ids: s,
        added: o,
        location: l
    });
}
function v(e) {
    let { guildId: n, channelId: r } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r
    });
}
function I(e) {
    let { guildId: n, channelId: r } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r
    });
}
function T(e) {
    var n, r, a, s;
    let { guildId: u, channelId: c } = e,
        d = o.Z.getChannel(c);
    if (null == d) return;
    let f = l.Z.getThreadSettings(c),
        p = null === (n = d.template) || void 0 === n ? void 0 : n.trim(),
        m = l.Z.getDraft(c, l.d.FirstThreadMessage),
        g = null == m || 0 === m.length || (null == m ? void 0 : m.trim()) === p,
        E = (null == f ? void 0 : f.appliedTags) == null || (null == f ? void 0 : null === (r = f.appliedTags) || void 0 === r ? void 0 : r.size) === 0,
        v = (null == f ? void 0 : f.name) == null || (null == f ? void 0 : null === (s = f.name) || void 0 === s ? void 0 : null === (a = s.trim()) || void 0 === a ? void 0 : a.length) === 0;
    if (!g || !E || !v)
        i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, _.xl)({ channelId: c }),
            guild_id: u,
            channel_id: c,
            applied_tag_ids: (0, _.q8)(c),
            num_attachments: (0, _.RR)(c)
        });
}
function b(e) {
    let { guildId: n, channelId: r } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r
    });
}
function y(e) {
    let { guildId: n, channelId: r, postId: a } = e;
    function s() {
        i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_POST_CREATED, {
            ...(0, _.n4)({ channelId: a }),
            guild_id: n,
            channel_id: r
        });
    }
    d.Z.isLoading(a) ? d.Z.addConditionalChangeListener(() => !!d.Z.isLoading(a) || (s(), !1)) : s();
}
function S(e) {
    let { guildId: n, channelId: r } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_SCROLLED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r
    });
}
function A(e) {
    let { guildId: n, channelId: r, numArchivedThreads: a, hasMoreThreads: s, filterTagIds: l, sortOrder: c } = e;
    u.default.track(h.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.hH)(n),
        ...(0, i.v_)(o.Z.getChannel(r)),
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r,
        num_archived_threads: a,
        num_active_threads: (0, _.bE)(n, r),
        has_more_threads: s,
        filter_tag_ids: l,
        sort_order: c
    });
}
function N(e) {
    let { guildId: n, channelId: r, postId: a, location: s } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, _.n4)({ channelId: a }),
        guild_id: n,
        channel_id: r,
        is_search_result: null != f.Z.getSearchResults(r),
        location: s
    });
}
function C(e) {
    let { guildId: n, channelId: r, sortOrder: a } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r,
        sort_type: (0, _.t$)(a),
        sort_order: a,
        forum_channel_sort_order: a
    });
}
function R(e) {
    let { guildId: n, channelId: r, forumLayout: a } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, _.xl)({ channelId: r }),
        guild_id: n,
        channel_id: r,
        forum_channel_layout: a
    });
}
function O(e) {
    let { postId: n, location: r } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_POST_LINK_COPIED, {
        forum_post_id: n,
        location: r
    });
}
function D(e) {
    let { onboardingCTA: n } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: n });
}
function L(e) {
    let { forumDemoId: n } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: n });
}
function x(e) {
    let { added: n } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: n });
}
function w(e) {
    let { readGuideCta: n } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: n });
}
function P(e) {
    let { isMobile: n } = e;
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: n });
}
function M() {
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function k() {
    i.ZP.trackWithMetadata(h.rMx.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function U(e) {
    i.ZP.trackWithMetadata(h.rMx.CHANNEL_OPENED, {
        ...(0, i.hH)(e.guild_id),
        ...(0, i.v_)(e),
        ...(0, a.K)(e, !0),
        ...(0, i.$H)(e.id),
        channel_view: 'Split View',
        platform: (0, c.getPlatform)()
    }),
        (0, s.a)(h.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e.id });
}
function B() {
    i.ZP.trackWithMetadata(h.rMx.OPEN_MODAL, {
        type: 'Forum Channel Upsell Modal',
        location: { section: h.jXE.CHANNEL_WELCOME_CTA }
    });
}
function G(e) {
    let { guildId: n, channelId: r } = e;
    i.ZP.trackWithMetadata(h.rMx.THREAD_CREATION_STARTED, {
        ...(0, a.K)(o.Z.getChannel(r)),
        channel_id: r,
        guild_id: n
    });
}
