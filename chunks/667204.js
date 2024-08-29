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
    O = n(117530),
    R = n(594174),
    v = n(403182),
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
    var t, n, r, s, l, c, d, f, h, p, I, m, T, g, N, R, v;
    let { command: C, optionValues: y, context: D, commandTargetId: b, maxSizeCallback: P, commandOrigin: G = w.bB.CHAT, sectionName: B, interactionLifecycleOptionsFactory: F = q, source: Y } = e,
        W = null !== (r = U.Z.getSource(D.channel.id)) && void 0 !== r ? r : Y,
        z = null !== (s = U.Z.getCommandOrigin(D.channel.id)) && void 0 !== s ? s : G;
    null == D.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: D,
            command: C,
            commandOrigin: z
        }),
        await S.Z.unarchiveThreadIfNecessary(D.channel.id);
    let X = [],
        $ = [],
        J = (0, x.D7)(z);
    if (null != C.options)
        for (let e of C.options) {
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in y)) continue;
            let t = (null === (l = D.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
                n = null;
            if (e.type === u.jw.STRING) {
                let r = null !== (d = null === (c = M.li(y, e.name)) || void 0 === c ? void 0 : c.trim()) && void 0 !== d ? d : '';
                (n = null != e.choices ? V(e.choices, r) : e.autocomplete ? H(e, r, D) : r),
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
                let n = O.Z.getUpload(D.channel.id, e.name, J);
                if (null == n) continue;
                let r = $.length;
                $.push(n),
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: t
                    });
                continue;
            }
            let r = M.OU(y[e.name]);
            if ((i()(null != D.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !t)) continue;
            let a =
                null !== (f = r[0]) && void 0 !== f
                    ? f
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
                            let e = (0, E.K)(a.text, null === (h = D.guild) || void 0 === h ? void 0 : h.id, D.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (n = e.channelId);
                        }
                    }
                    break;
                case u.jw.ROLE:
                    if ('roleMention' === a.type) n = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (p = D.guild) || void 0 === p ? void 0 : p.id, D.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (n = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (n = null === (I = D.guild) || void 0 === I ? void 0 : I.id);
                    break;
                case u.jw.USER:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (n = e.userId);
                        }
                    }
                    break;
                case u.jw.MENTIONABLE:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('roleMention' === a.type) n = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) n = null === (T = D.guild) || void 0 === T ? void 0 : T.id;
                    else if ('text' === a.type) {
                        if ((0, x.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, E.K)(a.text, null === (g = D.guild) || void 0 === g ? void 0 : g.id, D.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (N = D.guild) || void 0 === N ? void 0 : N.id) : i()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case u.jw.BOOLEAN:
                    'text' === a.type && (n = Z(a.text.trim()));
                    break;
                case u.jw.INTEGER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(V(e.choices, t)) : e.autocomplete ? H(e, t, D, Number) : Number(M.AS(A.default.locale, t));
                    }
                    break;
                case u.jw.NUMBER:
                    if ('text' === a.type) {
                        let t = a.text.trim();
                        n = null != e.choices ? Number(V(e.choices, t)) : e.autocomplete ? H(e, t, D, Number) : Number(M.AS(A.default.locale, t));
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
            _.ZP.trackWithMetadata(k.rMx.APPLICATION_COMMAND_USED, {
                command_id: C.id,
                application_id: C.applicationId,
                command_type: C.type,
                location: Q(z),
                source: W
            }),
            C.execute(X, D)
        );
    if (C.inputType === w.iw.BUILT_IN || C.inputType === w.iw.BUILT_IN_TEXT || C.inputType === w.iw.BUILT_IN_INTEGRATION) return;
    let ee = {
        version: C.version,
        id: null !== (R = null === (t = C.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== R ? R : C.id,
        guild_id: C.guildId,
        name: null !== (v = null === (n = C.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== v ? v : C.name,
        type: C.type,
        options: X,
        application_command: C.rootCommand
    };
    null != b && (ee.target_id = b),
        null != D.autocomplete
            ? (0, L.GV)(C, D, ee)
            : (o.Z.clearAll(D.channel.id, J),
              K({
                  applicationId: C.applicationId,
                  data: ee,
                  context: D,
                  attachments: $,
                  maxSizeCallback: P,
                  onMessageSuccess: () => {
                      j(y);
                  },
                  analytics_location: Q(z),
                  sectionName: B,
                  source: W,
                  interactionLifecycleOptions: await F(C, D, ee)
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
        let { applicationId: n, data: r, context: i, attachments: a, maxSizeCallback: s, onMessageSuccess: o, analytics_location: l, sectionName: c, source: d, interactionLifecycleOptions: _ } = e,
            { channel: E, guild: f } = i,
            h = E.id,
            p = null == f ? void 0 : f.id,
            m = {
                applicationId: n,
                channelId: h,
                guildId: p,
                data: r,
                nonce: null !== (t = _.messageId) && void 0 !== t ? t : (0, g.r)(),
                attachments: a,
                maxSizeCallback: s,
                analytics_location: l,
                sectionName: c,
                source: d
            };
        I.kz(m.nonce, {
            messageId: _.messageId,
            onCreate: _.onCreate,
            onSuccess: _.onSuccess,
            onFailure: _.onFailure,
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                channelId: h
            }
        }),
            null != a
                ? $(a, m.nonce, p, s).then((e) => {
                      if (!!e) z(m, o);
                  })
                : z(m, o);
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
            user: (0, T.pe)(R.default.getCurrentUser())
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
        case w.bB.IMAGE_RECS_SUBMENU:
            return w.Vh.IMAGE_RECS_SUBMENU;
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
    let i = (0, v.dg)(n),
        a = (e) => {
            null == r || r(i, e), I.yr(t, k.evJ.ENTITY_TOO_LARGE, F.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, v.Ng)(i) }));
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
