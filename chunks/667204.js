n.d(t, {
    Z: function () {
        return z;
    },
    d: function () {
        return Q;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(390547);
var o = n(627494);
var s = n(757143);
var l = n(512722),
    u = n.n(l),
    c = n(570140),
    d = n(904245),
    _ = n(166459),
    E = n(232567),
    f = n(911969),
    h = n(673750),
    p = n(687294),
    m = n(367907),
    I = n(465343),
    T = n(339085),
    g = n(906411),
    S = n(633302),
    A = n(603721),
    v = n(188597),
    N = n(3148),
    O = n(48854),
    R = n(346479),
    C = n(706454),
    y = n(430824),
    b = n(117530),
    L = n(594174),
    D = n(403182),
    M = n(823379),
    P = n(861990),
    U = n(555573),
    w = n(174212),
    x = n(456007),
    G = n(10718),
    k = n(998698),
    B = n(895924),
    F = n(581364),
    Z = n(689079),
    V = n(981631),
    H = n(959517),
    Y = n(689938);
let j = (e, t) => {
        var n;
        return null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    },
    W = function (e, t, n) {
        var r, i;
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (e) => e;
        if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name)) return n.autocomplete.query;
        if ('' === t) return null;
        let o = w.Z.getAutocompleteLastChoices(n.channel.id, e.name);
        return null != o ? (null !== (i = j(o, t)) && void 0 !== i ? i : a(t)) : a(t);
    },
    K = (e) => {
        let t = e.toLowerCase() === Z.WO.toLowerCase(),
            n = e.toLowerCase() === Z.Lu.toLowerCase();
        return t || n ? t : null;
    };
async function z(e) {
    var t, n, r, i, a, o, s, l, d, E, h, p, T, g, S, A, v;
    let { command: N, optionValues: O, context: y, commandTargetId: L, maxSizeCallback: D, commandOrigin: M = B.bB.CHAT, sectionName: P, interactionLifecycleOptionsFactory: w = J, source: G } = e,
        Z = null !== (r = k.Z.getSource(y.channel.id)) && void 0 !== r ? r : G,
        H = null !== (i = k.Z.getCommandOrigin(y.channel.id)) && void 0 !== i ? i : M;
    null == y.autocomplete &&
        c.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: y,
            command: N,
            commandOrigin: H
        }),
        await R.Z.unarchiveThreadIfNecessary(y.channel.id);
    let Y = [],
        z = [],
        Q = (0, F.D7)(H);
    if (null != N.options)
        for (let e of N.options) {
            if (e.type === f.jw.SUB_COMMAND || e.type === f.jw.SUB_COMMAND_GROUP || !(e.name in O)) continue;
            let t = (null === (a = y.autocomplete) || void 0 === a ? void 0 : a.name) === e.name || void 0,
                n = null;
            if (e.type === f.jw.STRING) {
                let r = null !== (s = null === (o = x.li(O, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== s ? s : '';
                (n = null != e.choices ? j(e.choices, r) : e.autocomplete ? W(e, r, y) : r),
                    u()(null != y.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')),
                    null != n &&
                        Y.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        });
                continue;
            }
            if (e.type === f.jw.ATTACHMENT) {
                if (null != y.autocomplete) continue;
                let n = b.Z.getUpload(y.channel.id, e.name, Q);
                if (null == n) continue;
                let r = z.length;
                z.push(n),
                    Y.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: t
                    });
                continue;
            }
            let r = x.OU(O[e.name]);
            if ((u()(null != y.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !t)) continue;
            let i =
                null !== (l = r[0]) && void 0 !== l
                    ? l
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case f.jw.CHANNEL:
                    if ('channelMention' === i.type) n = i.channelId;
                    else if ('text' === i.type) {
                        if ((0, F.BH)(i.text)) n = i.text.trim();
                        else {
                            let e = (0, I.K)(i.text, null === (d = y.guild) || void 0 === d ? void 0 : d.id, y.channel.id);
                            u()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(i.text)), (n = e.channelId);
                        }
                    }
                    break;
                case f.jw.ROLE:
                    if ('roleMention' === i.type) n = i.roleId;
                    else if ('text' === i.type) {
                        if ((0, F.BH)(i.text)) n = i.text.trim();
                        else {
                            let e = (0, I.K)(i.text, null === (E = y.guild) || void 0 === E ? void 0 : E.id, y.channel.id, { allowUsers: !1 });
                            u()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(i.text)), (n = e.roleId);
                        }
                    } else 'textMention' === i.type && '@everyone' === i.text && (n = null === (h = y.guild) || void 0 === h ? void 0 : h.id);
                    break;
                case f.jw.USER:
                    if ('userMention' === i.type) n = i.userId;
                    else if ('text' === i.type) {
                        if ((0, F.BH)(i.text)) n = i.text.trim();
                        else {
                            let e = (0, I.K)(i.text, null === (p = y.guild) || void 0 === p ? void 0 : p.id, y.channel.id, { allowRoles: !1 });
                            u()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(i.text)), (n = e.userId);
                        }
                    }
                    break;
                case f.jw.MENTIONABLE:
                    if ('userMention' === i.type) n = i.userId;
                    else if ('roleMention' === i.type) n = i.roleId;
                    else if ('textMention' === i.type && '@everyone' === i.text) n = null === (T = y.guild) || void 0 === T ? void 0 : T.id;
                    else if ('text' === i.type) {
                        if ((0, F.BH)(i.text)) n = i.text.trim();
                        else {
                            let e = (0, I.K)(i.text, null === (g = y.guild) || void 0 === g ? void 0 : g.id, y.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (S = y.guild) || void 0 === S ? void 0 : S.id) : u()(!1, 'Failed to resolve '.concat(i.text));
                        }
                    }
                    break;
                case f.jw.BOOLEAN:
                    'text' === i.type && (n = K(i.text.trim()));
                    break;
                case f.jw.INTEGER:
                    if ('text' === i.type) {
                        let t = i.text.trim();
                        n = null != e.choices ? Number(j(e.choices, t)) : e.autocomplete ? W(e, t, y, Number) : Number(x.AS(C.default.locale, t));
                    }
                    break;
                case f.jw.NUMBER:
                    if ('text' === i.type) {
                        let t = i.text.trim();
                        n = null != e.choices ? Number(j(e.choices, t)) : e.autocomplete ? W(e, t, y, Number) : Number(x.AS(C.default.locale, t));
                    }
                    break;
                default:
                    u()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            u()(null != y.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')),
                null != n &&
                    Y.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
        }
    if (null != N.subCommandPath)
        for (let e = N.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = N.subCommandPath[e];
            Y = [
                {
                    type: n,
                    name: t,
                    options: Y
                }
            ];
        }
    if (null != N.execute)
        return (
            m.ZP.trackWithMetadata(V.rMx.APPLICATION_COMMAND_USED, {
                command_id: N.id,
                application_id: N.applicationId,
                command_type: N.type,
                location: ee(H),
                source: Z
            }),
            N.execute(Y, y)
        );
    if (N.inputType === B.iw.BUILT_IN || N.inputType === B.iw.BUILT_IN_TEXT || N.inputType === B.iw.BUILT_IN_INTEGRATION) return;
    let $ = {
            version: N.version,
            id: null !== (A = null === (t = N.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== A ? A : N.id,
            guild_id: N.guildId,
            name: null !== (v = null === (n = N.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== v ? v : N.untranslatedName,
            type: N.type,
            options: Y,
            application_command: N.rootCommand
        },
        et = () => {
            q(O);
        };
    null != L && ($.target_id = L),
        null != y.autocomplete
            ? (0, U.GV)(N, y, $)
            : (_.Z.clearAll(y.channel.id, Q),
              X({
                  applicationId: N.applicationId,
                  data: $,
                  context: y,
                  attachments: z,
                  maxSizeCallback: D,
                  onMessageSuccess: et,
                  analytics_location: ee(H),
                  sectionName: P,
                  source: Z,
                  interactionLifecycleOptions: await w(N, y, $)
              }));
}
let q = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new S.dy({
                              type: g.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? T.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(M.lm)
        );
        t.length > 0 &&
            c.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    Q = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? y.Z.getGuild(t.guild_id) : null
            };
            X({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await J(n.command, r, e.interactionData)
            });
        }
    },
    X = (e) => {
        var t;
        let { applicationId: n, data: r, context: i, attachments: a, maxSizeCallback: o, onMessageSuccess: s, analytics_location: l, sectionName: u, source: c, interactionLifecycleOptions: d } = e,
            { channel: _, guild: E } = i,
            h = _.id,
            p = null == E ? void 0 : E.id,
            m = {
                applicationId: n,
                channelId: h,
                guildId: p,
                data: r,
                nonce: null !== (t = d.nonce) && void 0 !== t ? t : (0, O.r)(),
                attachments: a,
                maxSizeCallback: o,
                analytics_location: l,
                sectionName: u,
                source: c
            };
        A.kz(m.nonce, {
            messageId: d.messageId,
            onCreate: d.onCreate,
            onSuccess: d.onSuccess,
            onFailure: d.onFailure,
            data: {
                interactionType: f.B8.APPLICATION_COMMAND,
                channelId: h
            }
        }),
            null != a
                ? en(a, m.nonce, p, o).then((e) => {
                      if (!!e) $(m, s);
                  })
                : $(m, s);
    };
function $(e, t) {
    h.ZP.enqueue(
        {
            type: h.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, v.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
        }
    );
}
async function J(e, t, n) {
    var r;
    let i = G.Nk(t.channel, n.type, e.applicationId);
    if (null == i) return {};
    let a = null === (r = i.application) || void 0 === r ? void 0 : r.bot;
    if (null == a && null != i.botId)
        try {
            await E.PR(i.botId);
        } catch {}
    let o = {
        ...(0, N.ZP)({
            channelId: t.channel.id,
            content: '',
            type: n.type === f.yU.CHAT ? V.uaV.CHAT_INPUT_COMMAND : V.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != a
                    ? a
                    : {
                          id: i.id,
                          username: i.name,
                          discriminator: V.fo$,
                          avatar: null,
                          bot: !0
                      }
        }),
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: f.B8.APPLICATION_COMMAND,
            user: (0, N.pe)(L.default.getCurrentUser())
        },
        interaction_data: n
    };
    return (
        d.Z.receiveMessage(t.channel.id, o, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return o.id;
            },
            get nonce() {
                return o.id;
            },
            onCreate: (e) => {
                null != o.interaction && (o.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (n, r, i, a) => {
                null == r && null != n && d.Z.sendClydeError(t.channel.id, n);
                let s = r;
                null == s && null != a && (s = (0, v.A0)(a, e.applicationId)),
                    c.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: o.id,
                        channelId: t.channel.id,
                        reason: s
                    });
            }
        }
    );
}
function ee(e) {
    switch (e) {
        case B.bB.APPLICATION_LAUNCHER:
            return B.Vh.APP_LAUNCHER;
        case B.bB.IMAGE_RECS_MENU:
            return B.Vh.IMAGE_RECS_MENU;
        case B.bB.IMAGE_RECS_SUBMENU:
            return B.Vh.IMAGE_RECS_SUBMENU;
        case B.bB.ACTIVITY_INSTANCE_EMBED:
            return B.Vh.ACTIVITY_INSTANCE_EMBED;
        case B.bB.ACTIVITY_BOOKMARK_EMBED:
            return B.Vh.ACTIVITY_BOOKMARK_EMBED;
        case B.bB.MINI_SHELF:
            return B.Vh.ACTIVITIES_MINI_SHELF;
        case B.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return B.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        default:
            return B.Vh.SLASH_UI;
    }
}
async function et(e, t) {
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
async function en(e, t, n, r) {
    let i = e,
        a = (0, D.dg)(n),
        o = (e) => {
            null == r || r(a, e), A.yr(t, V.evJ.ENTITY_TOO_LARGE, Y.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, D.Ng)(a) }));
        },
        { totalSize: s, largestUploadedFileSize: l } = await et(i, !1);
    if (l > Math.max(a, H.Y1) || s > P.zz) return o(l), !1;
    try {
        await (0, p.$)(i);
    } catch {
        A.yr(t, void 0, Y.Z.Messages.UPLOADING_FILES_FAILED.format({ count: i.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: l } = await et(i, !0)), (!i.some((e) => e.error === V.evJ.ENTITY_TOO_LARGE) && !(s > P.zz)) || (o(l), !1);
}
