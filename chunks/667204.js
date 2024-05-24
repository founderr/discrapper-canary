"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  },
  retryCommandMessage: function() {
    return Y
  }
}), n("653041"), n("47120"), n("390547"), n("627494"), n("757143");
var i = n("512722"),
  r = n.n(i),
  s = n("570140"),
  a = n("904245"),
  o = n("166459"),
  l = n("232567"),
  u = n("911969"),
  d = n("673750"),
  _ = n("687294"),
  c = n("367907"),
  E = n("465343"),
  I = n("339085"),
  T = n("906411"),
  f = n("633302"),
  S = n("603721"),
  h = n("188597"),
  A = n("3148"),
  m = n("346479"),
  N = n("706454"),
  p = n("430824"),
  O = n("117530"),
  C = n("594174"),
  R = n("403182"),
  g = n("823379"),
  L = n("861990"),
  v = n("555573"),
  D = n("174212"),
  M = n("456007"),
  y = n("10718"),
  P = n("895924"),
  U = n("581364"),
  b = n("689079"),
  G = n("981631"),
  w = n("959517"),
  k = n("689938");
let B = (e, t) => {
    var n;
    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
  },
  V = function(e, t, n) {
    var i, r;
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e;
    if (e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name)) return n.autocomplete.query;
    if ("" === t) return null;
    let a = D.default.getAutocompleteLastChoices(n.channel.id, e.name);
    return null != a ? null !== (r = B(a, t)) && void 0 !== r ? r : s(t) : s(t)
  },
  x = e => {
    let t = e.toLowerCase() === b.TRUE_OPTION_NAME.toLowerCase(),
      n = e.toLowerCase() === b.FALSE_OPTION_NAME.toLowerCase();
    return t || n ? t : null
  };
async function F(e) {
  var t, n, i, a, l, d, _, I, T, f, S, h, A, p, C;
  let {
    command: R,
    optionValues: g,
    context: L,
    commandTargetId: D,
    maxSizeCallback: y,
    commandOrigin: b = P.CommandOrigin.CHAT,
    sectionName: w
  } = e;
  null == L.autocomplete && s.default.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: L,
    command: R,
    commandOrigin: b
  }), await m.default.unarchiveThreadIfNecessary(L.channel.id);
  let k = [],
    F = [],
    Y = (0, U.getCommandAttachmentDraftType)(b);
  if (null != R.options)
    for (let e of R.options) {
      if (e.type === u.ApplicationCommandOptionType.SUB_COMMAND || e.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in g)) continue;
      let t = (null === (i = L.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
        n = null;
      if (e.type === u.ApplicationCommandOptionType.STRING) {
        let i = null !== (l = null === (a = M.getOptionalString(g, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== l ? l : "";
        n = null != e.choices ? B(e.choices, i) : e.autocomplete ? V(e, i, L) : i, r()(null != L.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && k.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) {
        if (null != L.autocomplete) continue;
        let n = O.default.getUpload(L.channel.id, e.name, Y);
        if (null == n) continue;
        let i = F.length;
        F.push(n), k.push({
          type: e.type,
          name: e.name,
          value: i,
          focused: t
        });
        continue
      }
      let s = M.filterEmpty(g[e.name]);
      if (r()(null != L.autocomplete || 1 === s.length, 'Option "'.concat(e.name, '" expects a single option type')), null == s[0] && !t) continue;
      let o = null !== (d = s[0]) && void 0 !== d ? d : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case u.ApplicationCommandOptionType.CHANNEL:
          if ("channelMention" === o.type) n = o.channelId;
          else if ("text" === o.type) {
            if ((0, U.isSnowflake)(o.text)) n = o.text.trim();
            else {
              let e = (0, E.resolveApplicationCommandOption)(o.text, null === (_ = L.guild) || void 0 === _ ? void 0 : _.id, L.channel.id);
              r()((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(o.text)), n = e.channelId
            }
          }
          break;
        case u.ApplicationCommandOptionType.ROLE:
          if ("roleMention" === o.type) n = o.roleId;
          else if ("text" === o.type) {
            if ((0, U.isSnowflake)(o.text)) n = o.text.trim();
            else {
              let e = (0, E.resolveApplicationCommandOption)(o.text, null === (I = L.guild) || void 0 === I ? void 0 : I.id, L.channel.id, {
                allowUsers: !1
              });
              r()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(o.text)), n = e.roleId
            }
          } else "textMention" === o.type && "@everyone" === o.text && (n = null === (T = L.guild) || void 0 === T ? void 0 : T.id);
          break;
        case u.ApplicationCommandOptionType.USER:
          if ("userMention" === o.type) n = o.userId;
          else if ("text" === o.type) {
            if ((0, U.isSnowflake)(o.text)) n = o.text.trim();
            else {
              let e = (0, E.resolveApplicationCommandOption)(o.text, null === (f = L.guild) || void 0 === f ? void 0 : f.id, L.channel.id, {
                allowRoles: !1
              });
              r()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(o.text)), n = e.userId
            }
          }
          break;
        case u.ApplicationCommandOptionType.MENTIONABLE:
          if ("userMention" === o.type) n = o.userId;
          else if ("roleMention" === o.type) n = o.roleId;
          else if ("textMention" === o.type && "@everyone" === o.text) n = null === (S = L.guild) || void 0 === S ? void 0 : S.id;
          else if ("text" === o.type) {
            if ((0, U.isSnowflake)(o.text)) n = o.text.trim();
            else {
              let e = (0, E.resolveApplicationCommandOption)(o.text, null === (h = L.guild) || void 0 === h ? void 0 : h.id, L.channel.id);
              (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (A = L.guild) || void 0 === A ? void 0 : A.id : r()(!1, "Failed to resolve ".concat(o.text))
            }
          }
          break;
        case u.ApplicationCommandOptionType.BOOLEAN:
          "text" === o.type && (n = x(o.text.trim()));
          break;
        case u.ApplicationCommandOptionType.INTEGER:
          if ("text" === o.type) {
            let t = o.text.trim();
            n = null != e.choices ? Number(B(e.choices, t)) : e.autocomplete ? V(e, t, L, Number) : Number(M.normalizeNumericString(N.default.locale, t))
          }
          break;
        case u.ApplicationCommandOptionType.NUMBER:
          if ("text" === o.type) {
            let t = o.text.trim();
            n = null != e.choices ? Number(B(e.choices, t)) : e.autocomplete ? V(e, t, L, Number) : Number(M.normalizeNumericString(N.default.locale, t))
          }
          break;
        default:
          r()(!1, "Unsupported option type: ".concat(e.type));
          continue
      }
      r()(null != L.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && k.push({
        type: e.type,
        name: e.name,
        value: n,
        focused: t
      })
    }
  if (null != R.subCommandPath)
    for (let e = R.subCommandPath.length - 1; e >= 0; e -= 1) {
      let {
        name: t,
        type: n
      } = R.subCommandPath[e];
      k = [{
        type: n,
        name: t,
        options: k
      }]
    }
  if (null != R.execute) return c.default.trackWithMetadata(G.AnalyticEvents.APPLICATION_COMMAND_USED, {
    command_id: R.id,
    application_id: R.applicationId,
    command_type: R.type,
    location: b === P.CommandOrigin.APPLICATION_LAUNCHER ? P.ApplicationCommandTriggerLocations.APP_LAUNCHER : P.ApplicationCommandTriggerLocations.SLASH_UI
  }), R.execute(k, L);
  if (R.inputType === P.ApplicationCommandInputType.BUILT_IN || R.inputType === P.ApplicationCommandInputType.BUILT_IN_TEXT || R.inputType === P.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
  let W = {
    version: R.version,
    id: null !== (p = null === (t = R.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== p ? p : R.id,
    guild_id: R.guildId,
    name: null !== (C = null === (n = R.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== C ? C : R.name,
    type: R.type,
    options: k,
    application_command: R.rootCommand
  };
  null != D && (W.target_id = D), null != L.autocomplete ? (0, v.performAutocomplete)(R, L, W) : (o.default.clearAll(L.channel.id, Y), await j({
    applicationId: R.applicationId,
    data: W,
    context: L,
    attachments: F,
    maxSizeCallback: y,
    onMessageSuccess: () => {
      H(g)
    },
    commandDisplayName: R.displayName,
    analytics_location: b === P.CommandOrigin.APPLICATION_LAUNCHER ? P.ApplicationCommandTriggerLocations.APP_LAUNCHER : P.ApplicationCommandTriggerLocations.SLASH_UI,
    sectionName: w
  }))
}
let H = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? new f.Emoji({
      type: T.EmojiTypes.UNICODE,
      names: [e.name.replaceAll(":", "")],
      surrogates: ""
    }) : "customEmoji" === e.type ? I.default.getCustomEmojiById(e.emojiId) : null).filter(g.isNotNullish));
    t.length > 0 && s.default.dispatch({
      type: "EMOJI_TRACK_USAGE",
      emojiUsed: t
    })
  },
  Y = (e, t, n) => {
    if (e.isCommandType()) {
      let i = t.guild_id;
      null != e.interactionData && j({
        applicationId: n,
        data: e.interactionData,
        context: {
          channel: t,
          guild: null != i ? p.default.getGuild(i) : null
        }
      })
    }
  },
  j = async e => {
    var t;
    let {
      applicationId: n,
      data: i,
      context: r,
      attachments: o,
      maxSizeCallback: d,
      onMessageSuccess: _,
      commandDisplayName: c,
      analytics_location: E,
      sectionName: I
    } = e, {
      channel: T,
      guild: f
    } = r, h = T.id, m = null == f ? void 0 : f.id, N = y.getCachedApplicationSection(r.channel, i.type, n);
    if (null == N) return;
    let p = null === (t = N.application) || void 0 === t ? void 0 : t.bot;
    if (null == p && null != N.botId) try {
      await l.getUser(N.botId)
    } catch {}
    let O = {
      ...(0, A.default)({
        channelId: h,
        content: "",
        type: i.type === u.ApplicationCommandType.CHAT ? G.MessageTypes.CHAT_INPUT_COMMAND : G.MessageTypes.CONTEXT_MENU_COMMAND,
        author: null != p ? p : {
          id: N.id,
          username: N.name,
          discriminator: G.NON_USER_BOT_DISCRIMINATOR,
          avatar: null,
          bot: !0
        }
      }),
      application: null == N ? void 0 : N.application,
      interaction: {
        id: i.id,
        name: i.name,
        name_localized: c,
        type: u.InteractionTypes.APPLICATION_COMMAND,
        user: (0, A.userRecordToServer)(C.default.getCurrentUser())
      },
      interaction_data: i
    };
    a.default.receiveMessage(h, O, !0, {
      applicationId: n
    });
    let R = (e, t) => {
        null == t && null != e && a.default.sendClydeError(h, e), s.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: O.id,
          channelId: h,
          reason: t
        })
      },
      g = {
        applicationId: n,
        channelId: h,
        guildId: m,
        data: i,
        nonce: O.id,
        attachments: o,
        maxSizeCallback: d,
        analytics_location: E,
        sectionName: I
      };
    S.addQueued(g.nonce, {
      messageId: O.id,
      onCreate: e => {
        null != O.interaction && (O.interaction.id = e)
      },
      onFailure: (e, t) => R(e, t),
      data: {
        interactionType: u.InteractionTypes.APPLICATION_COMMAND,
        channelId: h
      }
    }), null != o ? z(o, g.nonce, m, d).then(e => {
      e && W(g, _)
    }) : W(g, _)
  };

function W(e, t) {
  d.default.enqueue({
    type: d.MessageDataType.COMMAND,
    message: e
  }, n => {
    var i;
    (0, h.handleInteractionResponse)(e.nonce, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null, n), n.ok && null != t && t()
  })
}
async function K(e, t) {
  let n = 0,
    i = 0;
  for (let s of e) {
    var r;
    let e = t ? null !== (r = s.currentSize) && void 0 !== r ? r : 0 : await s.getSize();
    e > i && (i = e), n += e
  }
  return {
    totalSize: n,
    largestUploadedFileSize: i
  }
}
async function z(e, t, n, i) {
  let r = (0, R.maxFileSize)(n),
    s = e => {
      null == i || i(r, e), S.setFailed(t, G.AbortCodes.ENTITY_TOO_LARGE, k.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
        maxSize: (0, R.sizeString)(r)
      }))
    },
    {
      totalSize: a,
      largestUploadedFileSize: o
    } = await K(e, !1);
  if (o > Math.max(r, w.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > L.MAX_TOTAL_ATTACHMENT_SIZE) return s(o), !1;
  try {
    await (0, _.stageAttachmentFiles)(e)
  } catch {
    S.setFailed(t, void 0, k.default.Messages.UPLOADING_FILES_FAILED.format({
      count: e.length
    }))
  }
  return {
    totalSize: a,
    largestUploadedFileSize: o
  } = await K(e, !0), !e.some(e => e.error === G.AbortCodes.ENTITY_TOO_LARGE) && !(a > L.MAX_TOTAL_ATTACHMENT_SIZE) || (s(o), !1)
}