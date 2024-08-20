n.d(t, {
    Z: function () {
        return Z;
    },
    d: function () {
        return j;
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
    E = n(812206),
    f = n(465343),
    h = n(339085),
    p = n(906411),
    m = n(633302),
    I = n(603721),
    T = n(188597),
    g = n(3148),
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
    P = n(998698),
    U = n(895924),
    w = n(581364),
    x = n(689079),
    G = n(981631),
    k = n(959517),
    B = n(689938);
let F = (e, t) => {
        var n;
        return null == e ? void 0 : null === (n = e.find((e) => e.displayName === t)) || void 0 === n ? void 0 : n.value;
    },
    V = function (e, t, n) {
        var r, i;
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (e) => e;
        if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name)) return n.autocomplete.query;
        if ('' === t) return null;
        let s = b.Z.getAutocompleteLastChoices(n.channel.id, e.name);
        return null != s ? (null !== (i = F(s, t)) && void 0 !== i ? i : a(t)) : a(t);
    },
    H = (e) => {
        let t = e.toLowerCase() === x.WO.toLowerCase(),
            n = e.toLowerCase() === x.Lu.toLowerCase();
        return t || n ? t : null;
    };
async function Z(e) {
    var t, n, r, s, l, c, d, E, h, p, m, I, T, g, N, O;
    let { command: R, optionValues: C, context: y, commandTargetId: D, maxSizeCallback: b, commandOrigin: x = U.bB.CHAT, sectionName: k } = e,
        B = null !== (r = P.Z.getCommandOrigin(y.channel.id)) && void 0 !== r ? r : x;
    null == y.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: y,
            command: R,
            commandOrigin: B
        }),
        await S.Z.unarchiveThreadIfNecessary(y.channel.id);
    let Z = [],
        j = [],
        K = (0, w.D7)(B);
    if (null != R.options)
        for (let e of R.options) {
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in C)) continue;
            let t = (null === (s = y.autocomplete) || void 0 === s ? void 0 : s.name) === e.name || void 0,
                n = null;
            if (e.type === u.jw.STRING) {
                let r = null !== (c = null === (l = M.li(C, e.name)) || void 0 === l ? void 0 : l.trim()) && void 0 !== c ? c : '';
                (n = null != e.choices ? F(e.choices, r) : e.autocomplete ? V(e, r, y) : r),
                    i()(null != y.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')),
                    null != n &&
                        Z.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: t
                        });
                continue;
            }
            if (e.type === u.jw.ATTACHMENT) {
                if (null != y.autocomplete) continue;
                let n = v.Z.getUpload(y.channel.id, e.name, K);
                if (null == n) continue;
                let r = j.length;
                j.push(n),
                    Z.push({
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
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, f.K)(a.text, null === (E = y.guild) || void 0 === E ? void 0 : E.id, y.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (n = e.channelId);
                        }
                    }
                    break;
                case u.jw.ROLE:
                    if ('roleMention' === a.type) n = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, f.K)(a.text, null === (h = y.guild) || void 0 === h ? void 0 : h.id, y.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (n = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (n = null === (p = y.guild) || void 0 === p ? void 0 : p.id);
                    break;
                case u.jw.USER:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, f.K)(a.text, null === (m = y.guild) || void 0 === m ? void 0 : m.id, y.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (n = e.userId);
                        }
                    }
                    break;
                case u.jw.MENTIONABLE:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('roleMention' === a.type) n = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) n = null === (I = y.guild) || void 0 === I ? void 0 : I.id;
                    else if ('text' === a.type) {
                        if ((0, w.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, f.K)(a.text, null === (T = y.guild) || void 0 === T ? void 0 : T.id, y.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (g = y.guild) || void 0 === g ? void 0 : g.id) : i()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case u.jw.BOOLEAN:
                    'text' === a.type && (n = H(a.text.trim()));
                    break;
                case u.jw.INTEGER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(F(e.choices, t)) : e.autocomplete ? V(e, t, y, Number) : Number(M.AS(A.default.locale, t));
                    }
                    break;
                case u.jw.NUMBER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(F(e.choices, t)) : e.autocomplete ? V(e, t, y, Number) : Number(M.AS(A.default.locale, t));
                    }
                    break;
                default:
                    i()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            i()(null != y.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')),
                null != n &&
                    Z.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
        }
    if (null != R.subCommandPath)
        for (let e = R.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = R.subCommandPath[e];
            Z = [
                {
                    type: n,
                    name: t,
                    options: Z
                }
            ];
        }
    if (null != R.execute)
        return (
            _.ZP.trackWithMetadata(G.rMx.APPLICATION_COMMAND_USED, {
                command_id: R.id,
                application_id: R.applicationId,
                command_type: R.type,
                location: z(B)
            }),
            R.execute(Z, y)
        );
    if (R.inputType === U.iw.BUILT_IN || R.inputType === U.iw.BUILT_IN_TEXT || R.inputType === U.iw.BUILT_IN_INTEGRATION) return;
    let q = {
        version: R.version,
        id: null !== (N = null === (t = R.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== N ? N : R.id,
        guild_id: R.guildId,
        name: null !== (O = null === (n = R.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== O ? O : R.name,
        type: R.type,
        options: Z,
        application_command: R.rootCommand
    };
    null != D && (q.target_id = D),
        null != y.autocomplete
            ? (0, L.GV)(R, y, q)
            : (o.Z.clearAll(y.channel.id, K),
              await W({
                  applicationId: R.applicationId,
                  data: q,
                  context: y,
                  attachments: j,
                  maxSizeCallback: b,
                  onMessageSuccess: () => {
                      Y(C);
                  },
                  commandDisplayName: R.displayName,
                  analytics_location: z(B),
                  sectionName: k
              }));
}
let Y = (e) => {
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
    j = (e, t, n) => {
        if (e.isCommandType()) {
            let r = t.guild_id;
            null != e.interactionData &&
                W({
                    applicationId: n,
                    data: e.interactionData,
                    context: {
                        channel: t,
                        guild: null != r ? N.Z.getGuild(r) : null
                    }
                });
        }
    },
    W = async (e) => {
        let { applicationId: t, data: n, context: r, attachments: i, maxSizeCallback: o, onMessageSuccess: c, commandDisplayName: d, analytics_location: _, sectionName: f } = e,
            { channel: h, guild: p } = r,
            m = h.id,
            T = null == p ? void 0 : p.id,
            S = E.Z.getApplication(t);
        if (null == S) return;
        let A = (function (e) {
                var t, n;
                let { ...r } = e;
                return {
                    is_monetized: e.isMonetized,
                    ...r,
                    guild: null !== (t = e.guild) && void 0 !== t ? t : void 0,
                    slug: null !== (n = e.slug) && void 0 !== n ? n : void 0
                };
            })(S),
            N = null == A ? void 0 : A.bot;
        if (null == N)
            try {
                await l.PR(A.id);
            } catch {}
        let v = {
            ...(0, g.ZP)({
                channelId: m,
                content: '',
                type: n.type === u.yU.CHAT ? G.uaV.CHAT_INPUT_COMMAND : G.uaV.CONTEXT_MENU_COMMAND,
                author:
                    null != N
                        ? N
                        : {
                              id: A.id,
                              username: A.name,
                              discriminator: G.fo$,
                              avatar: null,
                              bot: !0
                          }
            }),
            application: A,
            interaction: {
                id: n.id,
                name: n.name,
                name_localized: d,
                type: u.B8.APPLICATION_COMMAND,
                user: (0, g.pe)(O.default.getCurrentUser())
            },
            interaction_data: n
        };
        s.Z.receiveMessage(m, v, !0, { applicationId: t });
        let R = (e, t) => {
                null == t && null != e && s.Z.sendClydeError(m, e),
                    a.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: v.id,
                        channelId: m,
                        reason: t
                    });
            },
            C = {
                applicationId: t,
                channelId: m,
                guildId: T,
                data: n,
                nonce: v.id,
                attachments: i,
                maxSizeCallback: o,
                analytics_location: _,
                sectionName: f
            };
        I.kz(C.nonce, {
            messageId: v.id,
            onCreate: (e) => {
                null != v.interaction && (v.interaction.id = e);
            },
            onFailure: (e, t) => R(e, t),
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                channelId: m
            }
        }),
            null != i
                ? Q(i, C.nonce, T, o).then((e) => {
                      if (!!e) K(C, c);
                  })
                : K(C, c);
    };
function K(e, t) {
    c.ZP.enqueue(
        {
            type: c.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, T.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
        }
    );
}
function z(e) {
    switch (e) {
        case U.bB.APPLICATION_LAUNCHER:
            return U.Vh.APP_LAUNCHER;
        case U.bB.IMAGE_RECS_MENU:
            return U.Vh.IMAGE_RECS_MENU;
        default:
            return U.Vh.SLASH_UI;
    }
}
async function q(e, t) {
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
async function Q(e, t, n, r) {
    let i = (0, R.dg)(n),
        a = (e) => {
            null == r || r(i, e), I.yr(t, G.evJ.ENTITY_TOO_LARGE, B.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, R.Ng)(i) }));
        },
        { totalSize: s, largestUploadedFileSize: o } = await q(e, !1),
        l = (0, y.Xv)() ? D.Ld : D.zz;
    if (o > Math.max(i, k.Y1) || s > l) return a(o), !1;
    try {
        await (0, d.$)(e);
    } catch {
        I.yr(t, void 0, B.Z.Messages.UPLOADING_FILES_FAILED.format({ count: e.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: o } = await q(e, !0)), (!e.some((e) => e.error === G.evJ.ENTITY_TOO_LARGE) && !(s > l)) || (a(o), !1);
}
