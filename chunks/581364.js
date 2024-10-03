n.d(t, {
    $z: function () {
        return b;
    },
    BH: function () {
        return y;
    },
    BO: function () {
        return M;
    },
    D7: function () {
        return w;
    },
    Dd: function () {
        return L;
    },
    Ft: function () {
        return P;
    },
    X0: function () {
        return G;
    },
    XA: function () {
        return k;
    },
    Z8: function () {
        return v;
    },
    bD: function () {
        return D;
    },
    nG: function () {
        return C;
    },
    qJ: function () {
        return F;
    },
    t0: function () {
        return Z;
    },
    tI: function () {
        return x;
    },
    vC: function () {
        return B;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(390547);
var o = n(724458);
var s = n(654861),
    l = n.n(s),
    u = n(512722),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(149765),
    f = n(911969),
    h = n(367907),
    p = n(399860);
n(131704);
var m = n(703558),
    I = n(895924),
    T = n(531010),
    g = n(689079),
    S = n(981631),
    A = n(231338);
function v(e) {
    var t, n, r;
    let i,
        { rootCommand: a, command: o, applicationId: s, subCommandPath: l, useKeyedPermissions: u } = e;
    null != a.permissions &&
        a.permissions.length > 0 &&
        (u
            ? (i = (0, p.tk)(a.permissions))
            : ((i = {}),
              a.permissions.forEach((e) => {
                  i[e.id] = e;
              })));
    let c = (null != l ? l : []).map((e) => e.name),
        d = (null != l ? l : []).map((e) => e.displayName);
    return {
        version: a.version,
        guildId: a.guild_id,
        id: [a.id, ...c].join(g.oQ),
        untranslatedName: [a.name, ...c].join(' '),
        serverLocalizedName: o.name_localized,
        applicationId: s,
        type: null !== (t = a.type) && void 0 !== t ? t : f.yU.CHAT,
        inputType: I.iw.BOT,
        untranslatedDescription: o.description,
        options: N(o.options),
        rootCommand: a,
        subCommandPath: l,
        defaultMemberPermissions: null == a.default_member_permissions ? void 0 : E.vB(a.default_member_permissions),
        dmPermission: a.dm_permission,
        permissions: i,
        displayName: [null !== (n = a.name_localized) && void 0 !== n ? n : a.name, ...d].join(' '),
        displayDescription: null !== (r = o.description_localized) && void 0 !== r ? r : o.description,
        nsfw: a.nsfw,
        contexts: a.contexts,
        integration_types: a.integration_types,
        global_popularity_rank: a.global_popularity_rank,
        handler: a.handler
    };
}
function N(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t, n;
              let r = {
                  ...e,
                  choices: O(e.choices),
                  options: N(e.options),
                  serverLocalizedName: e.name_localized,
                  displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name,
                  displayDescription: null !== (n = e.description_localized) && void 0 !== n ? n : e.description
              };
              if (e.type === f.jw.CHANNEL && 'channel_types' in e)
                  return {
                      ...r,
                      channelTypes: e.channel_types
                  };
              if ((e.type === f.jw.NUMBER || e.type === f.jw.INTEGER) && ('min_value' in e || 'max_value' in e))
                  return {
                      ...r,
                      minValue: e.min_value,
                      maxValue: e.max_value
                  };
              if (e.type === f.jw.STRING && ('min_length' in e || 'max_length' in e))
                  return {
                      ...r,
                      minLength: e.min_length,
                      maxLength: e.max_length
                  };
              return r;
          });
}
function O(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t;
              return {
                  ...e,
                  displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
              };
          });
}
function R(e) {
    var t, n;
    let { rootCommand: r, command: i, applicationId: a, subCommandPath: o, useKeyedPermissions: s } = e;
    if (i.hasOwnProperty('id')) {
        if (null == i.options || 0 === i.options.length)
            return [
                v({
                    rootCommand: r,
                    command: i,
                    applicationId: a,
                    subCommandPath: o,
                    useKeyedPermissions: s
                })
            ];
    } else if (i.type !== f.jw.SUB_COMMAND && i.type !== f.jw.SUB_COMMAND_GROUP && (null == i.options || 0 === i.options.length))
        return [
            v({
                rootCommand: r,
                command: i,
                applicationId: a,
                subCommandPath: o,
                useKeyedPermissions: s
            })
        ];
    let l = [];
    if (null == i.options) return l;
    let u = i.options.filter((e) => e.type === f.jw.SUB_COMMAND_GROUP);
    for (let e = 0; e < u.length; e++)
        l.push(
            ...R({
                rootCommand: r,
                command: u[e],
                applicationId: a,
                subCommandPath: (null != o ? o : []).concat([
                    {
                        name: u[e].name,
                        type: f.jw.SUB_COMMAND_GROUP,
                        displayName: null !== (t = u[e].name_localized) && void 0 !== t ? t : u[e].name
                    }
                ]),
                useKeyedPermissions: s
            })
        );
    let c = i.options.filter((e) => e.type === f.jw.SUB_COMMAND);
    for (let e = 0; e < c.length; e++)
        l.push(
            v({
                rootCommand: r,
                command: c[e],
                applicationId: a,
                subCommandPath: (null != o ? o : []).concat([
                    {
                        name: c[e].name,
                        type: f.jw.SUB_COMMAND,
                        displayName: null !== (n = c[e].name_localized) && void 0 !== n ? n : c[e].name
                    }
                ]),
                useKeyedPermissions: s
            })
        );
    return (
        0 === u.length &&
            0 === c.length &&
            l.push(
                v({
                    rootCommand: r,
                    command: i,
                    applicationId: a,
                    subCommandPath: o,
                    useKeyedPermissions: s
                })
            ),
        l
    );
}
function C(e, t) {
    return _().flatMap(
        e,
        (e) => (
            c()(null != e.id, 'Missing command id'),
            R({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t
            })
        )
    );
}
function y(e) {
    return S.Xyh.test(e.trim());
}
function L(e, t, n, r) {
    let i = [];
    return (
        _()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}
function b(e) {
    let t = e.type === f.jw.STRING,
        n = e.type === f.jw.CHANNEL,
        r = e.type === f.jw.USER || e.type === f.jw.MENTIONABLE,
        i = e.type === f.jw.ROLE || e.type === f.jw.MENTIONABLE;
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
function D(e) {
    return l()(e).subtract(1).toString();
}
let M = E.vB(0);
function P(e) {
    let { PermissionStore: t, guild: n, selfMember: r, applicationLevelPermissions: i, commandLevelPermissions: a, defaultMemberPermissions: o } = e;
    if (n.ownerId === r.userId || t.can(A.Pl.ADMINISTRATOR, n)) return !0;
    let s = n.id;
    if (null != a) {
        let e = U(r, s, a);
        if ('boolean' == typeof e) return e;
    }
    let l = U(r, s, i);
    return ('boolean' != typeof l || !!l) && (null == o || (!E.fS(o, M) && t.can(o, n)));
}
function U(e, t, n) {
    let r = n[(0, p.rE)(e.userId, I.Kw.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, p.rE)(t, I.Kw.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let a = n[(0, p.rE)(t, I.Kw.ROLE)];
    return null != a ? a.permission : null;
}
function w(e) {
    switch (e) {
        case I.bB.CHAT:
        case I.bB.APPLICATION_LAUNCHER:
        case I.bB.APP_LAUNCHER_APPLICATION_VIEW:
        case I.bB.CONTEXT_MENU:
        case I.bB.VOICE_UI:
        case I.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case I.bB.MINI_SHELF:
        case I.bB.USER_PROFILE:
        case I.bB.NOW_PLAYING:
        case I.bB.ACTIVITY_DETAILS:
        case I.bB.ACTIVITIES_HOME:
        case I.bB.ACTIVITY_INSTANCE_EMBED:
        case I.bB.ACTIVITY_BOOKMARK_EMBED:
        case I.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case I.bB.IMAGE_RECS_MENU:
        case I.bB.IMAGE_RECS_SUBMENU:
            return m.d.SlashCommand;
    }
}
function x(e) {
    return null == e ? void 0 : e.id === g.bi.BUILT_IN ? I.ub.BUILT_IN : e.id === g.bi.FRECENCY ? I.ub.FRECENCY : I.ub.APP;
}
function G(e, t) {
    var n, r;
    return {
        type: I.Qi.APPLICATION,
        id: e.id,
        name: null !== (r = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== r ? r : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != t && t
    };
}
function k(e) {
    let t = e.id,
        n = e.options,
        r = null == n ? void 0 : n.find((e) => e.type === f.jw.SUB_COMMAND_GROUP);
    null != r && ((t += ''.concat(g.oQ).concat(r.name)), (n = r.options));
    let i = null == n ? void 0 : n.find((e) => e.type === f.jw.SUB_COMMAND);
    return (
        null != i && ((t += ''.concat(g.oQ).concat(i.name)), (n = i.options)),
        {
            commandKey: t,
            interactionOptions: n
        }
    );
}
function B(e, t, n) {
    return (
        null == e ||
        T.Z.getCurrentConfig(
            {
                guildId: e,
                ...t
            },
            n
        ).userAppsTreatment === T.e.ALLOWED
    );
}
function F(e) {
    var t, n;
    let { command: r, location: i, triggerSection: a, queryLength: o, sectionName: s, query: l, searchResultsPosition: u, source: c } = e;
    (0, h.yw)(S.rMx.APPLICATION_COMMAND_SELECTED, {
        command_id: null !== (n = null === (t = r.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : r.id,
        application_id: r.applicationId,
        location: i,
        section: a,
        query_length: o,
        command_text_length: r.displayName.length,
        section_name: s,
        query: l,
        search_results_position: u,
        source: c
    });
}
function Z(e) {
    let t = e.interactionMetadata;
    return null == t ? null : 'triggering_interaction_metadata' in t ? t.triggering_interaction_metadata : t;
}
