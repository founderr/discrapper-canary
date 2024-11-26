n.d(t, {
    $z: function () {
        return S;
    },
    BH: function () {
        return T;
    },
    BO: function () {
        return A;
    },
    D7: function () {
        return R;
    },
    Dd: function () {
        return b;
    },
    Ft: function () {
        return N;
    },
    X0: function () {
        return D;
    },
    XA: function () {
        return L;
    },
    Z8: function () {
        return v;
    },
    bD: function () {
        return y;
    },
    nG: function () {
        return I;
    },
    qJ: function () {
        return w;
    },
    t0: function () {
        return P;
    },
    tI: function () {
        return O;
    },
    vC: function () {
        return x;
    }
}),
    n(47120),
    n(653041),
    n(390547),
    n(724458);
var r = n(654861),
    i = n.n(r),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(149765),
    c = n(911969),
    d = n(367907),
    f = n(399860);
n(131704);
var _ = n(703558),
    p = n(895924),
    h = n(531010),
    m = n(689079),
    g = n(981631),
    E = n(231338);
function v(e) {
    var t, n, r;
    let i,
        { rootCommand: a, command: s, applicationId: o, subCommandPath: l, useKeyedPermissions: d } = e;
    null != a.permissions &&
        a.permissions.length > 0 &&
        (d
            ? (i = (0, f.tk)(a.permissions))
            : ((i = {}),
              a.permissions.forEach((e) => {
                  i[e.id] = e;
              })));
    let _ = (null != l ? l : []).map((e) => e.name),
        h = (null != l ? l : []).map((e) => e.displayName);
    return {
        version: a.version,
        guildId: a.guild_id,
        id: [a.id, ..._].join(m.oQ),
        untranslatedName: [a.name, ..._].join(' '),
        serverLocalizedName: s.name_localized,
        applicationId: o,
        type: null !== (t = a.type) && void 0 !== t ? t : c.yU.CHAT,
        inputType: p.iw.BOT,
        untranslatedDescription: s.description,
        options: (function e(t) {
            return null == t
                ? void 0
                : t.map((t) => {
                      var n, r;
                      let i = {
                          ...t,
                          choices: (function (e) {
                              return null == e
                                  ? void 0
                                  : e.map((e) => {
                                        var t;
                                        return {
                                            ...e,
                                            displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                                        };
                                    });
                          })(t.choices),
                          options: e(t.options),
                          serverLocalizedName: t.name_localized,
                          displayName: null !== (n = t.name_localized) && void 0 !== n ? n : t.name,
                          displayDescription: null !== (r = t.description_localized) && void 0 !== r ? r : t.description
                      };
                      if (t.type === c.jw.CHANNEL && 'channel_types' in t)
                          return {
                              ...i,
                              channelTypes: t.channel_types
                          };
                      if ((t.type === c.jw.NUMBER || t.type === c.jw.INTEGER) && ('min_value' in t || 'max_value' in t))
                          return {
                              ...i,
                              minValue: t.min_value,
                              maxValue: t.max_value
                          };
                      if (t.type === c.jw.STRING && ('min_length' in t || 'max_length' in t))
                          return {
                              ...i,
                              minLength: t.min_length,
                              maxLength: t.max_length
                          };
                      return i;
                  });
        })(s.options),
        rootCommand: a,
        subCommandPath: l,
        defaultMemberPermissions: null == a.default_member_permissions ? void 0 : u.vB(a.default_member_permissions),
        dmPermission: a.dm_permission,
        permissions: i,
        displayName: [null !== (n = a.name_localized) && void 0 !== n ? n : a.name, ...h].join(' '),
        displayDescription: null !== (r = s.description_localized) && void 0 !== r ? r : s.description,
        nsfw: a.nsfw,
        contexts: a.contexts,
        integration_types: a.integration_types,
        global_popularity_rank: a.global_popularity_rank,
        handler: a.handler
    };
}
function I(e, t) {
    return l().flatMap(
        e,
        (e) => (
            s()(null != e.id, 'Missing command id'),
            (function e(t) {
                var n, r;
                let { rootCommand: i, command: a, applicationId: s, subCommandPath: o, useKeyedPermissions: l } = t;
                if (a.hasOwnProperty('id')) {
                    if (null == a.options || 0 === a.options.length)
                        return [
                            v({
                                rootCommand: i,
                                command: a,
                                applicationId: s,
                                subCommandPath: o,
                                useKeyedPermissions: l
                            })
                        ];
                } else if (a.type !== c.jw.SUB_COMMAND && a.type !== c.jw.SUB_COMMAND_GROUP && (null == a.options || 0 === a.options.length))
                    return [
                        v({
                            rootCommand: i,
                            command: a,
                            applicationId: s,
                            subCommandPath: o,
                            useKeyedPermissions: l
                        })
                    ];
                let u = [];
                if (null == a.options) return u;
                let d = a.options.filter((e) => e.type === c.jw.SUB_COMMAND_GROUP);
                for (let t = 0; t < d.length; t++)
                    u.push(
                        ...e({
                            rootCommand: i,
                            command: d[t],
                            applicationId: s,
                            subCommandPath: (null != o ? o : []).concat([
                                {
                                    name: d[t].name,
                                    type: c.jw.SUB_COMMAND_GROUP,
                                    displayName: null !== (n = d[t].name_localized) && void 0 !== n ? n : d[t].name
                                }
                            ]),
                            useKeyedPermissions: l
                        })
                    );
                let f = a.options.filter((e) => e.type === c.jw.SUB_COMMAND);
                for (let e = 0; e < f.length; e++)
                    u.push(
                        v({
                            rootCommand: i,
                            command: f[e],
                            applicationId: s,
                            subCommandPath: (null != o ? o : []).concat([
                                {
                                    name: f[e].name,
                                    type: c.jw.SUB_COMMAND,
                                    displayName: null !== (r = f[e].name_localized) && void 0 !== r ? r : f[e].name
                                }
                            ]),
                            useKeyedPermissions: l
                        })
                    );
                return (
                    0 === d.length &&
                        0 === f.length &&
                        u.push(
                            v({
                                rootCommand: i,
                                command: a,
                                applicationId: s,
                                subCommandPath: o,
                                useKeyedPermissions: l
                            })
                        ),
                    u
                );
            })({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t
            })
        )
    );
}
function T(e) {
    return g.Xyh.test(e.trim());
}
function b(e, t, n, r) {
    let i = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}
function S(e) {
    let t = e.type === c.jw.STRING,
        n = e.type === c.jw.CHANNEL,
        r = e.type === c.jw.USER || e.type === c.jw.MENTIONABLE,
        i = e.type === c.jw.ROLE || e.type === c.jw.MENTIONABLE;
    return {
        canMentionEveryone: t || i,
        canMentionHere: t,
        canMentionChannels: t || n,
        canMentionUsers: t || r,
        canMentionRoles: t || i,
        canMentionAnyGuildUser: r,
        canMentionNonMentionableRoles: i
    };
}
function y(e) {
    return i()(e).subtract(1).toString();
}
let A = u.vB(0);
function N(e) {
    let { PermissionStore: t, guild: n, selfMember: r, applicationLevelPermissions: i, commandLevelPermissions: a, defaultMemberPermissions: s } = e;
    if (n.ownerId === r.userId || t.can(E.Pl.ADMINISTRATOR, n)) return !0;
    let o = n.id;
    if (null != a) {
        let e = C(r, o, a);
        if ('boolean' == typeof e) return e;
    }
    let l = C(r, o, i);
    return ('boolean' != typeof l || !!l) && (null == s || (!u.fS(s, A) && t.can(s, n)));
}
function C(e, t, n) {
    let r = n[(0, f.rE)(e.userId, p.Kw.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, f.rE)(t, p.Kw.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let a = n[(0, f.rE)(t, p.Kw.ROLE)];
    return null != a ? a.permission : null;
}
function R(e) {
    switch (e) {
        case p.bB.CHAT:
        case p.bB.APPLICATION_LAUNCHER:
        case p.bB.APP_LAUNCHER_APPLICATION_VIEW:
        case p.bB.CONTEXT_MENU:
        case p.bB.VOICE_UI:
        case p.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case p.bB.MINI_SHELF:
        case p.bB.USER_PROFILE:
        case p.bB.NOW_PLAYING:
        case p.bB.ACTIVITY_DETAILS:
        case p.bB.ACTIVITIES_HOME:
        case p.bB.ACTIVITY_INSTANCE_EMBED:
        case p.bB.ACTIVITY_BOOKMARK_EMBED:
        case p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case p.bB.IMAGE_RECS_MENU:
        case p.bB.IMAGE_RECS_SUBMENU:
            return _.d.SlashCommand;
    }
}
function O(e) {
    return null == e ? void 0 : e.id === m.bi.BUILT_IN ? p.ub.BUILT_IN : e.id === m.bi.FRECENCY ? p.ub.FRECENCY : p.ub.APP;
}
function D(e, t) {
    var n, r;
    return {
        type: p.Qi.APPLICATION,
        id: e.id,
        name: null !== (r = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== r ? r : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != t && t
    };
}
function L(e) {
    let t = e.id,
        n = e.options,
        r = null == n ? void 0 : n.find((e) => e.type === c.jw.SUB_COMMAND_GROUP);
    null != r && ((t += ''.concat(m.oQ).concat(r.name)), (n = r.options));
    let i = null == n ? void 0 : n.find((e) => e.type === c.jw.SUB_COMMAND);
    return (
        null != i && ((t += ''.concat(m.oQ).concat(i.name)), (n = i.options)),
        {
            commandKey: t,
            interactionOptions: n
        }
    );
}
function x(e, t, n) {
    return (
        null == e ||
        h.Z.getCurrentConfig(
            {
                guildId: e,
                ...t
            },
            n
        ).userAppsTreatment === h.e.ALLOWED
    );
}
function w(e) {
    var t, n;
    let { command: r, location: i, triggerSection: a, queryLength: s, sectionName: o, query: l, searchResultsPosition: u, source: c } = e;
    (0, d.yw)(g.rMx.APPLICATION_COMMAND_SELECTED, {
        command_id: null !== (n = null === (t = r.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : r.id,
        application_id: r.applicationId,
        location: i,
        section: a,
        query_length: s,
        command_text_length: r.displayName.length,
        section_name: o,
        query: l,
        search_results_position: u,
        source: c
    });
}
function P(e) {
    let t = e.interactionMetadata;
    return null == t ? null : 'triggering_interaction_metadata' in t ? t.triggering_interaction_metadata : t;
}
