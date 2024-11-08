n.d(t, {
    Z: function () {
        return j;
    },
    d: function () {
        return Y;
    }
}),
    n(653041),
    n(47120),
    n(390547),
    n(627494),
    n(757143);
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    s = n(904245),
    o = n(166459),
    l = n(232567),
    u = n(911969),
    c = n(673750),
    d = n(687294),
    f = n(367907),
    _ = n(465343),
    h = n(339085),
    p = n(906411),
    m = n(633302),
    g = n(603721),
    E = n(188597),
    v = n(3148),
    I = n(48854),
    S = n(346479),
    b = n(706454),
    T = n(430824),
    y = n(117530),
    A = n(594174),
    N = n(403182),
    C = n(823379),
    R = n(861990),
    O = n(555573),
    D = n(174212),
    L = n(456007),
    x = n(10718),
    w = n(998698),
    M = n(895924),
    P = n(581364),
    k = n(689079),
    U = n(981631),
    G = n(959517),
    B = n(388032);
let Z = (e, t) => {
        var n;
        return null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    },
    F = function (e, t, n) {
        var r, i;
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (e) => e;
        if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name)) return n.autocomplete.query;
        if ('' === t) return null;
        let s = D.Z.getAutocompleteLastChoices(n.channel.id, e.name);
        return null != s ? (null !== (i = Z(s, t)) && void 0 !== i ? i : a(t)) : a(t);
    },
    V = (e) => {
        let t = e.toLowerCase() === k.WO.toLowerCase(),
            n = e.toLowerCase() === k.Lu.toLowerCase();
        return t || n ? t : null;
    };
async function j(e) {
    var t, n, r, s, l, c, d, h, p, m, g, E, v, I, T, A, N;
    let { command: C, optionValues: R, context: D, commandTargetId: x, maxSizeCallback: k, commandOrigin: G = M.bB.CHAT, sectionName: B, interactionLifecycleOptionsFactory: j = z, source: Y } = e,
        K = null !== (r = w.Z.getSource(D.channel.id)) && void 0 !== r ? r : Y,
        Q = null !== (s = w.Z.getCommandOrigin(D.channel.id)) && void 0 !== s ? s : G;
    null == D.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: D,
            command: C,
            commandOrigin: Q
        }),
        await S.Z.unarchiveThreadIfNecessary(D.channel.id);
    let X = [],
        J = [],
        $ = (0, P.D7)(Q);
    if (null != C.options)
        for (let e of C.options) {
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in R)) continue;
            let t = (null === (l = D.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
                n = null;
            if (e.type === u.jw.STRING) {
                let r = null !== (d = null === (c = L.li(R, e.name)) || void 0 === c ? void 0 : c.trim()) && void 0 !== d ? d : '';
                (n = null != e.choices ? Z(e.choices, r) : e.autocomplete ? F(e, r, D) : r),
                    i()(null != D.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')),
                    null != n &&
                        X.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        });
                continue;
            }
            if (e.type === u.jw.ATTACHMENT) {
                if (null != D.autocomplete) continue;
                let n = y.Z.getUpload(D.channel.id, e.name, $);
                if (null == n) continue;
                let r = J.length;
                J.push(n),
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: t
                    });
                continue;
            }
            let r = L.OU(R[e.name]);
            if ((i()(null != D.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !t)) continue;
            let a =
                null !== (h = r[0]) && void 0 !== h
                    ? h
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case u.jw.CHANNEL:
                    if ('channelMention' === a.type) n = a.channelId;
                    else if ('text' === a.type) {
                        if ((0, P.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (p = D.guild) || void 0 === p ? void 0 : p.id, D.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (n = e.channelId);
                        }
                    }
                    break;
                case u.jw.ROLE:
                    if ('roleMention' === a.type) n = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, P.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (n = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (n = null === (g = D.guild) || void 0 === g ? void 0 : g.id);
                    break;
                case u.jw.USER:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('text' === a.type) {
                        if ((0, P.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (E = D.guild) || void 0 === E ? void 0 : E.id, D.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (n = e.userId);
                        }
                    }
                    break;
                case u.jw.MENTIONABLE:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('roleMention' === a.type) n = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) n = null === (v = D.guild) || void 0 === v ? void 0 : v.id;
                    else if ('text' === a.type) {
                        if ((0, P.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (I = D.guild) || void 0 === I ? void 0 : I.id, D.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (T = D.guild) || void 0 === T ? void 0 : T.id) : i()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case u.jw.BOOLEAN:
                    'text' === a.type && (n = V(a.text.trim()));
                    break;
                case u.jw.INTEGER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(Z(e.choices, t)) : e.autocomplete ? F(e, t, D, Number) : Number(L.AS(b.default.locale, t));
                    }
                    break;
                case u.jw.NUMBER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(Z(e.choices, t)) : e.autocomplete ? F(e, t, D, Number) : Number(L.AS(b.default.locale, t));
                    }
                    break;
                default:
                    i()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            i()(null != D.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')),
                null != n &&
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
        }
    if (null != C.subCommandPath)
        for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = C.subCommandPath[e];
            X = [
                {
                    type: n,
                    name: t,
                    options: X
                }
            ];
        }
    if (null != C.execute)
        return (
            f.ZP.trackWithMetadata(U.rMx.APPLICATION_COMMAND_USED, {
                command_id: C.id,
                application_id: C.applicationId,
                command_type: C.type,
                location: q(Q),
                source: K
            }),
            C.execute(X, D)
        );
    if (C.inputType === M.iw.BUILT_IN || C.inputType === M.iw.BUILT_IN_TEXT || C.inputType === M.iw.BUILT_IN_INTEGRATION) return;
    let ee = {
        version: C.version,
        id: null !== (A = null === (t = C.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== A ? A : C.id,
        guild_id: C.guildId,
        name: null !== (N = null === (n = C.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== N ? N : C.untranslatedName,
        type: C.type,
        options: X,
        application_command: C.rootCommand
    };
    null != x && (ee.target_id = x),
        null != D.autocomplete
            ? (0, O.GV)(C, D, ee)
            : (o.Z.clearAll(D.channel.id, $),
              W({
                  applicationId: C.applicationId,
                  data: ee,
                  context: D,
                  attachments: J,
                  maxSizeCallback: k,
                  onMessageSuccess: () => {
                      H(R);
                  },
                  analytics_location: q(Q),
                  sectionName: B,
                  source: K,
                  interactionLifecycleOptions: await j(C, D, ee)
              }));
}
let H = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new m.dy({
                              type: p.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? h.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(C.lm)
        );
        t.length > 0 &&
            a.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    Y = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? T.Z.getGuild(t.guild_id) : null
            };
            W({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await z(n.command, r, e.interactionData)
            });
        }
    },
    W = (e) => {
        var t;
        let { applicationId: n, data: r, context: i, attachments: a, maxSizeCallback: s, onMessageSuccess: o, analytics_location: l, sectionName: c, source: d, interactionLifecycleOptions: f } = e,
            { channel: _, guild: h } = i,
            p = _.id,
            m = null == h ? void 0 : h.id,
            E = {
                applicationId: n,
                channelId: p,
                guildId: m,
                data: r,
                nonce: null !== (t = f.nonce) && void 0 !== t ? t : (0, I.r)(),
                attachments: a,
                maxSizeCallback: s,
                analytics_location: l,
                sectionName: c,
                source: d
            };
        g.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                channelId: p
            }
        }),
            null != a
                ? X(a, E.nonce, m, s).then((e) => {
                      if (!!e) K(E, o);
                  })
                : K(E, o);
    };
function K(e, t) {
    c.ZP.enqueue(
        {
            type: c.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, E.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
        }
    );
}
async function z(e, t, n) {
    var r;
    let i = x.Nk(t.channel, n.type, e.applicationId);
    if (null == i) return {};
    let o = null === (r = i.application) || void 0 === r ? void 0 : r.bot;
    if (null == o && null != i.botId)
        try {
            await l.PR(i.botId);
        } catch {}
    let c = {
        ...(0, v.ZP)({
            channelId: t.channel.id,
            content: '',
            type: n.type === u.yU.CHAT ? U.uaV.CHAT_INPUT_COMMAND : U.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != o
                    ? o
                    : {
                          id: i.id,
                          username: i.name,
                          discriminator: U.fo$,
                          avatar: null,
                          bot: !0
                      }
        }),
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: u.B8.APPLICATION_COMMAND,
            user: (0, v.pe)(A.default.getCurrentUser())
        },
        interaction_data: n
    };
    return (
        s.Z.receiveMessage(t.channel.id, c, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return c.id;
            },
            get nonce() {
                return c.id;
            },
            onCreate: (e) => {
                null != c.interaction && (c.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (n, r, i, o) => {
                null == r && null != n && s.Z.sendClydeError(t.channel.id, n);
                let l = r;
                null == l && null != o && (l = (0, E.A0)(o, e.applicationId)),
                    a.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: c.id,
                        channelId: t.channel.id,
                        reason: l
                    });
            }
        }
    );
}
function q(e) {
    switch (e) {
        case M.bB.APPLICATION_LAUNCHER:
            return M.Vh.APP_LAUNCHER;
        case M.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return M.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case M.bB.IMAGE_RECS_MENU:
            return M.Vh.IMAGE_RECS_MENU;
        case M.bB.IMAGE_RECS_SUBMENU:
            return M.Vh.IMAGE_RECS_SUBMENU;
        case M.bB.ACTIVITY_INSTANCE_EMBED:
            return M.Vh.ACTIVITY_INSTANCE_EMBED;
        case M.bB.ACTIVITY_BOOKMARK_EMBED:
            return M.Vh.ACTIVITY_BOOKMARK_EMBED;
        case M.bB.MINI_SHELF:
            return M.Vh.ACTIVITIES_MINI_SHELF;
        case M.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return M.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case M.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return M.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return M.Vh.SLASH_UI;
    }
}
async function Q(e, t) {
    let n = 0,
        r = 0;
    for (let a of e) {
        var i;
        let e = t ? (null !== (i = a.currentSize) && void 0 !== i ? i : 0) : await a.getSize();
        e > r && (r = e), (n += e);
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    };
}
async function X(e, t, n, r) {
    let i = (0, N.dg)(n),
        a = (e) => {
            null == r || r(i, e), g.yr(t, U.evJ.ENTITY_TOO_LARGE, B.intl.formatToPlainString(B.t.fxEKdX, { maxSize: (0, N.Ng)(i) }));
        },
        { totalSize: s, largestUploadedFileSize: o } = await Q(e, !1);
    if (o > Math.max(i, G.Y1) || s > R.zz) return a(o), !1;
    try {
        await (0, d.$)(e);
    } catch {
        g.yr(t, void 0, B.intl.formatToPlainString(B.t['9h1/1t'], { count: e.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: o } = await Q(e, !0)), (!e.some((e) => e.error === U.evJ.ENTITY_TOO_LARGE) && !(s > R.zz)) || (a(o), !1);
}
