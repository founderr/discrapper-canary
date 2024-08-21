n.d(t, {
    Z: function () {
        return Y;
    },
    d: function () {
        return W;
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
    _ = n(367907),
    E = n(465343),
    f = n(339085),
    h = n(906411),
    p = n(633302),
    I = n(603721),
    m = n(188597),
    T = n(3148),
    g = n(48854),
    S = n(346479),
    A = n(706454),
    N = n(430824),
    v = n(117530),
    O = n(594174),
    R = n(403182),
    C = n(823379),
    y = n(380684),
    D = n(861990),
    L = n(555573),
    b = n(174212),
    M = n(456007),
    P = n(10718),
    U = n(998698),
    w = n(895924),
    x = n(581364),
    G = n(689079),
    k = n(981631),
    B = n(959517),
    F = n(689938);
let V = (e, t) => {
        var n;
        return null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    },
    H = function (e, t, n) {
        var r, i;
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (e) => e;
        if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name)) return n.autocomplete.query;
        if ('' === t) return null;
        let s = b.Z.getAutocompleteLastChoices(n.channel.id, e.name);
        return null != s ? (null !== (i = V(s, t)) && void 0 !== i ? i : a(t)) : a(t);
    },
    Z = (e) => {
        let t = e.toLowerCase() === G.WO.toLowerCase(),
            n = e.toLowerCase() === G.Lu.toLowerCase();
        return t || n ? t : null;
    };
async function Y(e) {
    var t, n, r, s, l, c, d, f, h, p, I, m, T, g, N, O;
    let { command: R, optionValues: C, context: y, commandTargetId: D, maxSizeCallback: b, commandOrigin: P = w.bB.CHAT, sectionName: G, interactionLifecycleOptionsFactory: B = q } = e,
        F = null !== (r = U.Z.getCommandOrigin(y.channel.id)) && void 0 !== r ? r : P;
    null == y.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: y,
            command: R,
            commandOrigin: F
        }),
        await S.Z.unarchiveThreadIfNecessary(y.channel.id);
    let Y = [],
        W = [],
        z = (0, x.D7)(F);
    if (null != R.options)
        for (let e of R.options) {
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in C)) continue;
            let t = (null === (s = y.autocomplete) || void 0 === s ? void 0 : s.name) === e.name || void 0,
                n = null;
            if (e.type === u.jw.STRING) {
                let r = null !== (c = null === (l = M.li(C, e.name)) || void 0 === l ? void 0 : l.trim()) && void 0 !== c ? c : '';
                (n = null != e.choices ? V(e.choices, r) : e.autocomplete ? H(e, r, y) : r),
                    i()(null != y.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')),
                    null != n &&
                        Y.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        });
                continue;
            }
            if (e.type === u.jw.ATTACHMENT) {
                if (null != y.autocomplete) continue;
                let n = v.Z.getUpload(y.channel.id, e.name, z);
                if (null == n) continue;
                let r = W.length;
                W.push(n),
                    Y.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: t
                    });
                continue;
            }
            let r = M.OU(C[e.name]);
            if ((i()(null != y.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !t)) continue;
            let a =
                null !== (d = r[0]) && void 0 !== d
                    ? d
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case u.jw.CHANNEL:
                    if ('channelMention' === a.type) n = a.channelId;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (f = y.guild) || void 0 === f ? void 0 : f.id, y.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (n = e.channelId);
                        }
                    }
                    break;
                case u.jw.ROLE:
                    if ('roleMention' === a.type) n = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (h = y.guild) || void 0 === h ? void 0 : h.id, y.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (n = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (n = null === (p = y.guild) || void 0 === p ? void 0 : p.id);
                    break;
                case u.jw.USER:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (I = y.guild) || void 0 === I ? void 0 : I.id, y.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (n = e.userId);
                        }
                    }
                    break;
                case u.jw.MENTIONABLE:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('roleMention' === a.type) n = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) n = null === (m = y.guild) || void 0 === m ? void 0 : m.id;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (T = y.guild) || void 0 === T ? void 0 : T.id, y.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (g = y.guild) || void 0 === g ? void 0 : g.id) : i()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case u.jw.BOOLEAN:
                    'text' === a.type && (n = Z(a.text.trim()));
                    break;
                case u.jw.INTEGER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(V(e.choices, t)) : e.autocomplete ? H(e, t, y, Number) : Number(M.AS(A.default.locale, t));
                    }
                    break;
                case u.jw.NUMBER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(V(e.choices, t)) : e.autocomplete ? H(e, t, y, Number) : Number(M.AS(A.default.locale, t));
                    }
                    break;
                default:
                    i()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            i()(null != y.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')),
                null != n &&
                    Y.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
        }
    if (null != R.subCommandPath)
        for (let e = R.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = R.subCommandPath[e];
            Y = [
                {
                    type: n,
                    name: t,
                    options: Y
                }
            ];
        }
    if (null != R.execute)
        return (
            _.ZP.trackWithMetadata(k.rMx.APPLICATION_COMMAND_USED, {
                command_id: R.id,
                application_id: R.applicationId,
                command_type: R.type,
                location: Q(F)
            }),
            R.execute(Y, y)
        );
    if (R.inputType === w.iw.BUILT_IN || R.inputType === w.iw.BUILT_IN_TEXT || R.inputType === w.iw.BUILT_IN_INTEGRATION) return;
    let X = {
        version: R.version,
        id: null !== (N = null === (t = R.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== N ? N : R.id,
        guild_id: R.guildId,
        name: null !== (O = null === (n = R.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== O ? O : R.name,
        type: R.type,
        options: Y,
        application_command: R.rootCommand
    };
    null != D && (X.target_id = D),
        null != y.autocomplete
            ? (0, L.GV)(R, y, X)
            : (o.Z.clearAll(y.channel.id, z),
              K({
                  applicationId: R.applicationId,
                  data: X,
                  context: y,
                  attachments: W,
                  maxSizeCallback: b,
                  onMessageSuccess: () => {
                      j(C);
                  },
                  analytics_location: Q(F),
                  sectionName: G,
                  interactionLifecycleOptions: await B(R, y, X)
              }));
}
let j = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new p.dy({
                              type: h.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? f.ZP.getCustomEmojiById(e.emojiId)
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
    W = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? N.Z.getGuild(t.guild_id) : null
            };
            K({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await q(n.command, r, e.interactionData)
            });
        }
    },
    K = (e) => {
        var t;
        let { applicationId: n, data: r, context: i, attachments: a, maxSizeCallback: s, onMessageSuccess: o, analytics_location: l, sectionName: c, interactionLifecycleOptions: d } = e,
            { channel: _, guild: E } = i,
            f = _.id,
            h = null == E ? void 0 : E.id,
            p = {
                applicationId: n,
                channelId: f,
                guildId: h,
                data: r,
                nonce: null !== (t = d.messageId) && void 0 !== t ? t : (0, g.r)(),
                attachments: a,
                maxSizeCallback: s,
                analytics_location: l,
                sectionName: c
            };
        I.kz(p.nonce, {
            messageId: d.messageId,
            onCreate: d.onCreate,
            onSuccess: d.onSuccess,
            onFailure: d.onFailure,
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                channelId: f
            }
        }),
            null != a
                ? $(a, p.nonce, h, s).then((e) => {
                      if (!!e) z(p, o);
                  })
                : z(p, o);
    };
function z(e, t) {
    c.ZP.enqueue(
        {
            type: c.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, m.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
        }
    );
}
async function q(e, t, n) {
    var r;
    let i = P.Nk(t.channel, n.type, e.applicationId);
    if (null == i) return {};
    let o = null === (r = i.application) || void 0 === r ? void 0 : r.bot;
    if (null == o && null != i.botId)
        try {
            await l.PR(i.botId);
        } catch {}
    let c = {
        ...(0, T.ZP)({
            channelId: t.channel.id,
            content: '',
            type: n.type === u.yU.CHAT ? k.uaV.CHAT_INPUT_COMMAND : k.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != o
                    ? o
                    : {
                          id: i.id,
                          username: i.name,
                          discriminator: k.fo$,
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
            user: (0, T.pe)(O.default.getCurrentUser())
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
            onCreate: (e) => {
                null != c.interaction && (c.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (e, n) => {
                null == n && null != e && s.Z.sendClydeError(t.channel.id, e),
                    a.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: c.id,
                        channelId: t.channel.id,
                        reason: n
                    });
            }
        }
    );
}
function Q(e) {
    switch (e) {
        case w.bB.APPLICATION_LAUNCHER:
            return w.Vh.APP_LAUNCHER;
        case w.bB.IMAGE_RECS_MENU:
            return w.Vh.IMAGE_RECS_MENU;
        default:
            return w.Vh.SLASH_UI;
    }
}
async function X(e, t) {
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
async function $(e, t, n, r) {
    let i = (0, R.dg)(n),
        a = (e) => {
            null == r || r(i, e), I.yr(t, k.evJ.ENTITY_TOO_LARGE, F.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, R.Ng)(i) }));
        },
        { totalSize: s, largestUploadedFileSize: o } = await X(e, !1),
        l = (0, y.Xv)() ? D.Ld : D.zz;
    if (o > Math.max(i, B.Y1) || s > l) return a(o), !1;
    try {
        await (0, d.$)(e);
    } catch {
        I.yr(t, void 0, F.Z.Messages.UPLOADING_FILES_FAILED.format({ count: e.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: o } = await X(e, !0)), (!e.some((e) => e.error === k.evJ.ENTITY_TOO_LARGE) && !(s > l)) || (a(o), !1);
}
