n.d(t, {
    NE: function () {
        return R;
    },
    QN: function () {
        return v;
    },
    Qf: function () {
        return C;
    },
    TY: function () {
        return y;
    },
    pQ: function () {
        return N;
    },
    z7: function () {
        return O;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(367907),
    o = n(814443),
    s = n(199902),
    l = n(271383),
    u = n(158776),
    c = n(699516),
    d = n(594174),
    _ = n(626135),
    E = n(768581),
    f = n(621853),
    h = n(687158),
    p = n(228168),
    m = n(981631),
    I = n(231338);
let T = (e) => {
        let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
            a = null != n ? n : i,
            o = [];
        if (((null == r ? void 0 : r.nick) && o.push(p.cm.NICKNAME), (null == a ? void 0 : a.pronouns) && o.push(p.cm.PRONOUNS), null == t ? void 0 : t.avatar)) {
            let e = (0, E.xR)(null == t ? void 0 : t.avatar);
            o.push(e ? p.cm.ANIMATED_AVATAR : p.cm.AVATAR);
        }
        if (null == a ? void 0 : a.banner) {
            let e = (0, E.xR)(null == a ? void 0 : a.banner);
            o.push(e ? p.cm.ANIMATED_BANNER : p.cm.BANNER);
        }
        return (null == a ? void 0 : a.bio) && o.push(p.cm.BIO), (null == a ? void 0 : a.themeColors) != null && void 0 !== a.themeColors.find((e) => null !== e) && o.push(p.cm.THEME), (null == t ? void 0 : t.avatarDecoration) != null && o.push(p.cm.AVATAR_DECORATION), (null == a ? void 0 : a.profileEffectId) != null && o.push(p.cm.PROFILE_EFFECT), o;
    },
    g = (e) => {
        let t = u.Z.getStatus(e),
            n = u.Z.isMobileOnline(e);
        return t === I.Sk.ONLINE && n ? ''.concat(t, '-mobile') : t === I.Sk.ONLINE ? ''.concat(t, '-desktop') : t;
    },
    S = (e) => (null == e ? e : 'VOICE' === e ? 'VOICE' : Object.keys(m.IIU)[Object.values(m.IIU).indexOf(e)]),
    A = (e) => {
        var t, n;
        let { layout: r, userId: i, guildId: a, sessionId: o, sourceSessionId: s, showGuildProfile: c = !0 } = e,
            _ = d.default.getUser(i);
        if (null == _) return {};
        let E = (0, h.Of)(null == _ ? void 0 : _.id, c ? a : void 0),
            f = c && null != a ? l.ZP.getMember(a, null == _ ? void 0 : _.id) : null;
        return {
            profile_layout: r,
            profile_session_id: o,
            source_profile_session_id: s,
            profile_properties: T({
                user: _,
                userProfile: null == E ? void 0 : E._userProfile
            }),
            guild_profile_properties: T({
                guildMember: f,
                guildMemberProfile: null == E ? void 0 : E._guildMemberProfile
            }),
            profile_activity_types: u.Z.getActivities(_.id)
                .map((e) => {
                    let { type: t } = e;
                    return t;
                })
                .filter((e) => void 0 !== e),
            profile_badges:
                null == E
                    ? void 0
                    : null === (t = E.getBadges()) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
            avatar_decoration_sku_id: null === (n = _.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
            profile_effect_sku_id: null == E ? void 0 : E.profileEffectId,
            user_status: g(_.id),
            is_guild_profile: (null == E ? void 0 : E.guildId) != null,
            is_bot_profile: _.bot
        };
    },
    v = (e) => {
        var t, n;
        let { userId: r } = e;
        return null == r
            ? {}
            : {
                  related_user_id: r,
                  relationship_type: c.Z.getRelationshipType(r),
                  related_since: c.Z.getSince(r),
                  num_mutual_friends: f.Z.getMutualFriendsCount(r),
                  num_mutual_guilds: null === (t = f.Z.getMutualGuilds(r)) || void 0 === t ? void 0 : t.length,
                  affinity: null === (n = o.Z.getUserAffinity(r)) || void 0 === n ? void 0 : n.affinity
              };
    },
    N = (e) => {
        let { guildId: t, channelId: n, messageId: r, roleId: i, analyticsLocations: o, action: s, section: l } = e;
        _.default.track(m.rMx.USER_PROFILE_ACTION, {
            ...(0, a.hH)(t),
            ...(0, a.JS)(n),
            ...A(e),
            ...v(e),
            location_stack: o,
            profile_action: s,
            profile_section: l,
            source_message_id: r,
            source_role_id: i
        });
    },
    O = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, action: i, display: o, activity: s, stream: l, entry: u, outbox: c } = e;
        _.default.track(m.rMx.USER_PROFILE_ACTIVITY_ACTION, {
            ...(0, a.hH)(t),
            ...(0, a.JS)(n),
            ...A(e),
            ...v(e),
            location_stack: r,
            activity_action: i,
            activity_display: o,
            activity_type: S(null != l ? m.IIU.STREAMING : null == s ? void 0 : s.type),
            activity_name: null == s ? void 0 : s.name,
            activity_platform: null == s ? void 0 : s.platform,
            activity_session_id: null == s ? void 0 : s.session_id,
            activity_application_id: null == s ? void 0 : s.application_id,
            item_id: null == u ? void 0 : u.id,
            author_id: null == u ? void 0 : u.author_id,
            item_ids:
                null == c
                    ? void 0
                    : c.entries.map((e) => {
                          let { id: t } = e;
                          return t;
                      }),
            author_ids:
                null == c
                    ? void 0
                    : c.entries.map((e) => {
                          let { author_id: t } = e;
                          return t;
                      })
        });
    },
    R = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, badge: i } = e;
        _.default.track(m.rMx.USER_PROFILE_BADGE_PRESSED, {
            ...(0, a.hH)(t),
            ...(0, a.JS)(n),
            ...A(e),
            ...v(e),
            location_stack: r,
            badge: i
        });
    },
    C = (e) => {
        let { guildId: t, channelId: n, analyticsLocations: r, badge: i } = e;
        _.default.track(m.rMx.USER_PROFILE_BADGE_HOVERED, {
            ...(0, a.hH)(t),
            ...(0, a.JS)(n),
            ...A(e),
            ...v(e),
            location_stack: r,
            badge: i
        });
    },
    y = (e) => {
        var t, n, r;
        let { displayProfile: i, isProfileOpen: a } = e,
            o = null == i ? void 0 : i.userId,
            l =
                null != o
                    ? u.Z.findActivity(o, (e) => {
                          let { type: t } = e;
                          return null != s.Z.getAnyStreamForUser(o) ? t === m.IIU.PLAYING : t !== m.IIU.CUSTOM_STATUS;
                      })
                    : null;
        _.default.track(m.rMx.DM_PROFILE_TOGGLED, {
            is_profile_open: a,
            has_images: !!(null !== (r = null == l ? void 0 : null === (t = l.assets) || void 0 === t ? void 0 : t.large_image) && void 0 !== r ? r : null == l ? void 0 : null === (n = l.assets) || void 0 === n ? void 0 : n.small_image),
            is_friend: c.Z.isFriend(o),
            viewed_profile_user_id: o,
            profile_has_nitro_customization: null == i ? void 0 : i.hasPremiumCustomization(),
            profile_has_theme_color_customized: null == i ? void 0 : i.hasThemeColors(),
            profile_has_theme_animation: (null == i ? void 0 : i.popoutAnimationParticleType) != null
        });
    };
