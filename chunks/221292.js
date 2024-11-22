n.d(t, {
    NE: function () {
        return y;
    },
    QN: function () {
        return b;
    },
    Qf: function () {
        return A;
    },
    TY: function () {
        return N;
    },
    pQ: function () {
        return T;
    },
    z7: function () {
        return S;
    }
}),
    n(653041),
    n(47120);
var r = n(367907),
    i = n(814443),
    a = n(199902),
    s = n(271383),
    o = n(158776),
    l = n(699516),
    u = n(594174),
    c = n(626135),
    d = n(768581),
    f = n(621853),
    _ = n(687158),
    p = n(228168),
    h = n(981631),
    m = n(231338);
let g = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            a = null != n ? n : i,
            s = [];
        if (((null == r ? void 0 : r.nick) && s.push(p.cm.NICKNAME), (null == a ? void 0 : a.pronouns) && s.push(p.cm.PRONOUNS), null == t ? void 0 : t.avatar)) {
            let e = (0, d.xR)(null == t ? void 0 : t.avatar);
            s.push(e ? p.cm.ANIMATED_AVATAR : p.cm.AVATAR);
        }
        if (null == a ? void 0 : a.banner) {
            let e = (0, d.xR)(null == a ? void 0 : a.banner);
            s.push(e ? p.cm.ANIMATED_BANNER : p.cm.BANNER);
        }
        return (null == a ? void 0 : a.bio) && s.push(p.cm.BIO), (null == a ? void 0 : a.themeColors) != null && void 0 !== a.themeColors.find((e) => null !== e) && s.push(p.cm.THEME), (null == t ? void 0 : t.avatarDecoration) != null && s.push(p.cm.AVATAR_DECORATION), (null == a ? void 0 : a.profileEffectId) != null && s.push(p.cm.PROFILE_EFFECT), s;
    },
    E = (e) => {
        let t = o.Z.getStatus(e),
            n = o.Z.isMobileOnline(e);
        return t === m.Sk.ONLINE && n ? ''.concat(t, '-mobile') : t === m.Sk.ONLINE ? ''.concat(t, '-desktop') : t;
    },
    v = (e) => (null == e ? e : 'VOICE' === e ? 'VOICE' : Object.keys(h.IIU)[Object.values(h.IIU).indexOf(e)]),
    I = (e) => {
        var t, n;
        let { layout: r, userId: i, guildId: a, sessionId: l, sourceSessionId: c, showGuildProfile: d = !0 } = e,
            f = u.default.getUser(i);
        if (null == f) return {};
        let p = (0, _.Of)(null == f ? void 0 : f.id, d ? a : void 0),
            h = d && null != a ? s.ZP.getMember(a, null == f ? void 0 : f.id) : null;
        return {
            profile_layout: r,
            profile_session_id: l,
            source_profile_session_id: c,
            profile_properties: g({
                user: f,
                userProfile: null == p ? void 0 : p._userProfile
            }),
            guild_profile_properties: g({
                guildMember: h,
                guildMemberProfile: null == p ? void 0 : p._guildMemberProfile
            }),
            profile_activity_types: o.Z.getActivities(f.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                null == p
                    ? void 0
                    : null === (t = p.getBadges()) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
            avatar_decoration_sku_id: null === (n = f.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
            profile_effect_sku_id: null == p ? void 0 : p.profileEffectId,
            user_status: E(f.id),
            is_guild_profile: (null == p ? void 0 : p.guildId) != null,
            is_bot_profile: f.bot
        };
    },
    b = (e) => {
        var t, n;
        let { userId: r } = e;
        return null == r
            ? {}
            : {
                  related_user_id: r,
                  relationship_type: l.Z.getRelationshipType(r),
                  related_since: l.Z.getSince(r),
                  num_mutual_friends: f.Z.getMutualFriendsCount(r),
                  num_mutual_guilds: null === (t = f.Z.getMutualGuilds(r)) || void 0 === t ? void 0 : t.length,
                  affinity: null === (n = i.Z.getUserAffinity(r)) || void 0 === n ? void 0 : n.affinity
              };
    },
    T = (e) => {
        let { guildId: t, channelId: n, messageId: i, roleId: a, analyticsLocations: s, action: o, section: l } = e;
        c.default.track(h.rMx.USER_PROFILE_ACTION, {
            ...(0, r.hH)(t),
            ...(0, r.JS)(n),
            ...I(e),
            ...b(e),
            location_stack: s,
            profile_action: o,
            profile_section: l,
            source_message_id: i,
            source_role_id: a
        });
    },
    S = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, action: a, display: s, activity: o, stream: l, entry: u, outbox: d } = e;
        c.default.track(h.rMx.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, r.hH)(t),
            ...(0, r.JS)(n),
            ...I(e),
            ...b(e),
            location_stack: i,
            activity_action: a,
            activity_display: s,
            activity_type: v(null != l ? h.IIU.STREAMING : null == o ? void 0 : o.type),
            activity_name: null == o ? void 0 : o.name,
            activity_platform: null == o ? void 0 : o.platform,
            activity_session_id: null == o ? void 0 : o.session_id,
            activity_application_id: null == o ? void 0 : o.application_id,
            item_id: null == u ? void 0 : u.id,
            author_id: null == u ? void 0 : u.author_id,
            item_ids:
                null == d
                    ? void 0
                    : d.entries.map((e) => {
                          let { id: t } = e;
                          return t;
                      }),
            author_ids:
                null == d
                    ? void 0
                    : d.entries.map((e) => {
                          let { author_id: t } = e;
                          return t;
                      })
        });
    },
    y = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        c.default.track(h.rMx.USER_PROFILE_BADGE_PRESSED, {
            ...(0, r.hH)(t),
            ...(0, r.JS)(n),
            ...I(e),
            ...b(e),
            location_stack: i,
            badge: a
        });
    },
    A = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
        c.default.track(h.rMx.USER_PROFILE_BADGE_HOVERED, {
            ...(0, r.hH)(t),
            ...(0, r.JS)(n),
            ...I(e),
            ...b(e),
            location_stack: i,
            badge: a
        });
    },
    N = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: s } = e,
            u = null == i ? void 0 : i.userId,
            d =
                null != u
                    ? o.Z.findActivity(u, (e) => {
                          let { type: t } = e;
                          return null != a.Z.getAnyStreamForUser(u) ? t === h.IIU.PLAYING : t !== h.IIU.CUSTOM_STATUS;
                      })
                    : null;
        c.default.track(h.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: s,
            has_images: !!(null !== (r = null == d ? void 0 : null === (t = d.assets) || void 0 === t ? void 0 : t.large_image) && void 0 !== r ? r : null == d ? void 0 : null === (n = d.assets) || void 0 === n ? void 0 : n.small_image),
            is_friend: l.Z.isFriend(u),
            viewed_profile_user_id: u,
            profile_has_nitro_customization: null == i ? void 0 : i.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == i ? void 0 : i.hasThemeColors(),
            profile_has_theme_animation: (null == i ? void 0 : i.popoutAnimationParticleType) != null
        });
    };
