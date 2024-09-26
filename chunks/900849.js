n.d(t, {
    Az: function () {
        return g;
    },
    Eg: function () {
        return L;
    },
    IZ: function () {
        return A;
    },
    Lq: function () {
        return m;
    },
    P1: function () {
        return r;
    },
    PP: function () {
        return I;
    },
    Ub: function () {
        return p;
    },
    Zt: function () {
        return T;
    },
    c6: function () {
        return C;
    },
    j$: function () {
        return N;
    },
    m9: function () {
        return O;
    },
    mT: function () {
        return y;
    },
    rC: function () {
        return R;
    },
    sq: function () {
        return h;
    },
    tI: function () {
        return v;
    }
});
var r,
    i = n(47120);
var a = n(664751),
    o = n(544891),
    s = n(749210),
    l = n(41776),
    u = n(703656),
    c = n(769654),
    d = n(650774),
    _ = n(430824),
    E = n(626135),
    f = n(981631);
!(function (e) {
    (e.SEARCH = 'Search'), (e.RECOMMENDED = 'Recommended'), (e.POPULAR = 'Popular'), (e.RECOMMENDED_E3 = 'Recommended - E3'), (e.HEADER = 'Header'), (e.GLOBAL_DISCOVERY = 'Global Discovery'), (e.FORWARD_BREADCRUMB = 'Forward Breadcrumb');
})(r || (r = {}));
let h = '>200';
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: r, onSuccess: i, joinSource: a, loadId: o, setsHistorySnapshot: d = !0, shouldNavigate: E = !0 } = n,
        f = (0, u.s1)();
    d && l.Z.setHistorySnapshot({ ...f });
    let h = _.Z.getGuild(e),
        p = { state: { analyticsSource: t } };
    null != h && null != h.joinedAt
        ? E && (0, c.X)(e, p)
        : (await s.Z.joinGuild(e, {
              lurker: !0,
              source: a,
              loadId: o,
              lurkLocation: null == t ? void 0 : t.page
          }),
          E &&
              (await s.Z.transitionToGuildSync(
                  e,
                  {
                      ...p,
                      welcomeModalChannelId: r,
                      search: f.location.search
                  },
                  r
              ))),
        null == i || i();
}
async function m(e) {
    let t,
        { loadId: n, guildId: i, index: a, analyticsContext: o, categoryId: s } = e;
    'string' == typeof o && o in r && (t = o);
    let l = {
        page: f.ZY5.GUILD_DISCOVERY,
        object: f.qAy.CARD,
        section: t
    };
    await p(i, l, { loadId: n }),
        S({
            loadId: n,
            guildId: i,
            index: a,
            analyticsContext: o,
            categoryId: s
        });
}
function I(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count,
        stickers: e.stickers,
        stickerCount: e.sticker_count,
        keywords: e.keywords
    };
}
function T(e) {
    let { loadId: t, gamesYouPlayGuilds: n, allGuilds: r, categoryId: i, recommendationsSource: a = null } = e,
        o = n.length,
        s = r.length;
    E.default.track(f.rMx.GUILD_DISCOVERY_VIEWED, {
        load_id: t,
        num_guilds: o + s,
        num_guilds_recommended: o,
        num_guilds_popular: s,
        recommended_guild_ids: n.map((e) => e.id),
        category_id: i,
        recommendations_source: a
    });
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    E.default.track(f.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function S(e) {
    let { loadId: t, guildId: n, index: r, analyticsContext: i, categoryId: a } = e,
        o = {
            page: f.ZY5.GUILD_DISCOVERY,
            section: i
        };
    'string' != typeof i && null != i.location && (o = i.location),
        E.default.track(f.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            location: o,
            guild_id: n,
            load_id: t,
            card_index: r,
            location_object: f.qAy.CARD,
            category_id: a
        });
}
function A(e) {
    E.default.track(f.rMx.SEARCH_CLOSED, { load_id: e });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    E.default.track(f.rMx.SEARCH_STARTED, {
        search_type: f.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function N(e, t, n, r) {
    E.default.track(f.rMx.SEARCH_STARTED, {
        search_type: f.aib.GUILD_DISCOVERY_TAG,
        load_id: e,
        location: {
            page: f.ZY5.GUILD_DISCOVERY,
            section: n
        },
        category_id: t,
        guild_id: r
    });
}
function O(e) {
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    E.default.track(f.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i
    });
}
function R(e) {
    let { categoryId: t } = e;
    E.default.track(f.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function C(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: a, categoryId: o, isTagSearch: s } = e;
    E.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
        search_type: s ? f.aib.GUILD_DISCOVERY_TAG : f.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: a.location,
        category_id: o
    });
}
function y(e) {
    let t = l.Z.getLoadId(e);
    E.default.track(f.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: d.Z.getMemberCount(e)
    });
}
async function L(e) {
    try {
        var t, n;
        let r = await o.tn.get({
                url: f.ANM.GUILD_DISCOVERY,
                query: a.stringify({ guild_ids: e }),
                oldFormErrors: !0
            }),
            i = null === (n = r.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
        if (null == i) return i;
        return I(i);
    } catch (e) {
        return null;
    }
}
