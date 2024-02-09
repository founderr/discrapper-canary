"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  },
  retryCommandMessage: function() {
    return z
  }
}), n("424973"), n("222007"), n("881410"), n("686130"), n("781738");
var l = n("627445"),
  i = n.n(l),
  o = n("913144"),
  a = n("819689"),
  r = n("81594"),
  s = n("798609"),
  u = n("979911"),
  c = n("981112"),
  d = n("716241"),
  p = n("118851"),
  m = n("385976"),
  f = n("274800"),
  h = n("752598"),
  g = n("815297"),
  _ = n("263024"),
  C = n("915639"),
  v = n("305961"),
  A = n("585722"),
  E = n("697218"),
  I = n("254490"),
  T = n("449008"),
  y = n("980134"),
  M = n("507217"),
  O = n("246598"),
  N = n("118200"),
  S = n("240249"),
  x = n("524768"),
  L = n("389153"),
  U = n("317041"),
  b = n("49111"),
  P = n("894488"),
  R = n("782340");
let w = (e, t) => {
    var n;
    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
  },
  D = function(e, t, n) {
    var l, i;
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
      a = e.name === (null === (l = n.autocomplete) || void 0 === l ? void 0 : l.name);
    if (a) return n.autocomplete.query;
    if ("" === t) return null;
    let r = O.default.getAutocompleteLastChoices(n.channel.id, e.name);
    return null != r ? null !== (i = w(r, t)) && void 0 !== i ? i : o(t) : o(t)
  },
  k = e => {
    let t = e.toLowerCase() === U.TRUE_OPTION_NAME.toLowerCase(),
      n = e.toLowerCase() === U.FALSE_OPTION_NAME.toLowerCase();
    return t || n ? t : null
  };
async function F(e) {
  var t, n, l, a, u, c, m, f, h, g, v, E, I, T, y;
  let {
    command: O,
    optionValues: S,
    context: U,
    commandTargetId: P,
    maxSizeCallback: R,
    commandOrigin: F = x.CommandOrigin.CHAT
  } = e;
  null == U.autocomplete && o.default.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: U,
    command: O
  }), await _.default.unarchiveThreadIfNecessary(U.channel.id);
  let z = [],
    H = [],
    G = (0, L.getCommandAttachmentDraftType)(F);
  if (null != O.options)
    for (let e of O.options) {
      if (e.type === s.ApplicationCommandOptionType.SUB_COMMAND || e.type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in S)) continue;
      let t = (null === (l = U.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
        n = null;
      if (e.type === s.ApplicationCommandOptionType.STRING) {
        let l = null !== (u = null === (a = N.getOptionalString(S, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== u ? u : "";
        n = null != e.choices ? w(e.choices, l) : e.autocomplete ? D(e, l, U) : l, i(null != U.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && z.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) {
        if (null != U.autocomplete) continue;
        let l = A.default.getUpload(U.channel.id, e.name, G);
        if (null == l) continue;
        let i = A.default.getUploads(U.channel.id, G).findIndex(e => l.id === e.id);
        H.push(l), n = i, z.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      let o = N.filterEmpty(S[e.name]);
      if (i(null != U.autocomplete || 1 === o.length, 'Option "'.concat(e.name, '" expects a single option type')), null == o[0] && !t) continue;
      let r = null !== (c = o[0]) && void 0 !== c ? c : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case s.ApplicationCommandOptionType.CHANNEL:
          if ("channelMention" === r.type) n = r.channelId;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (m = U.guild) || void 0 === m ? void 0 : m.id, U.channel.id);
              i((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
            }
          }
          break;
        case s.ApplicationCommandOptionType.ROLE:
          if ("roleMention" === r.type) n = r.roleId;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (f = U.guild) || void 0 === f ? void 0 : f.id, U.channel.id, {
                allowUsers: !1
              });
              i((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
            }
          } else "textMention" === r.type && "@everyone" === r.text && (n = null === (h = U.guild) || void 0 === h ? void 0 : h.id);
          break;
        case s.ApplicationCommandOptionType.USER:
          if ("userMention" === r.type) n = r.userId;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (g = U.guild) || void 0 === g ? void 0 : g.id, U.channel.id, {
                allowRoles: !1
              });
              i((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
            }
          }
          break;
        case s.ApplicationCommandOptionType.MENTIONABLE:
          if ("userMention" === r.type) n = r.userId;
          else if ("roleMention" === r.type) n = r.roleId;
          else if ("textMention" === r.type && "@everyone" === r.text) n = null === (v = U.guild) || void 0 === v ? void 0 : v.id;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (E = U.guild) || void 0 === E ? void 0 : E.id, U.channel.id);
              (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (I = U.guild) || void 0 === I ? void 0 : I.id : i(!1, "Failed to resolve ".concat(r.text))
            }
          }
          break;
        case s.ApplicationCommandOptionType.BOOLEAN:
          "text" === r.type && (n = k(r.text.trim()));
          break;
        case s.ApplicationCommandOptionType.INTEGER:
          if ("text" === r.type) {
            let t = r.text.trim();
            n = null != e.choices ? Number(w(e.choices, t)) : e.autocomplete ? D(e, t, U, Number) : Number(N.normalizeNumericString(C.default.locale, t))
          }
          break;
        case s.ApplicationCommandOptionType.NUMBER:
          if ("text" === r.type) {
            let t = r.text.trim();
            n = null != e.choices ? Number(w(e.choices, t)) : e.autocomplete ? D(e, t, U, Number) : Number(N.normalizeNumericString(C.default.locale, t))
          }
          break;
        default:
          i(!1, "Unsupported option type: ".concat(e.type));
          continue
      }
      i(null != U.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && z.push({
        type: e.type,
        name: e.name,
        value: n,
        focused: t
      })
    }
  if (null != O.subCommandPath)
    for (let e = O.subCommandPath.length - 1; e >= 0; e -= 1) {
      let {
        name: t,
        type: n
      } = O.subCommandPath[e];
      z = [{
        type: n,
        name: t,
        options: z
      }]
    }
  if (null != O.execute) return d.default.trackWithMetadata(b.AnalyticEvents.APPLICATION_COMMAND_USED, {
    command_id: O.id,
    application_id: O.applicationId,
    command_type: O.type,
    location: F === x.CommandOrigin.APPLICATION_LAUNCHER ? x.ApplicationCommandTriggerLocations.APP_LAUNCHER : x.ApplicationCommandTriggerLocations.SLASH_UI
  }), O.execute(z, U);
  if (O.inputType === x.ApplicationCommandInputType.BUILT_IN || O.inputType === x.ApplicationCommandInputType.BUILT_IN_TEXT || O.inputType === x.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
  let V = {
    version: O.version,
    id: null !== (T = null === (t = O.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== T ? T : O.id,
    guild_id: O.guildId,
    name: null !== (y = null === (n = O.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== y ? y : O.name,
    type: O.type,
    options: z,
    application_command: O.rootCommand
  };
  null != P && (V.target_id = P), null != U.autocomplete ? (0, M.performAutocomplete)(O, U, V) : (r.default.clearAll(U.channel.id, G), B({
    applicationId: O.applicationId,
    data: V,
    context: U,
    attachments: H,
    maxSizeCallback: R,
    onMessageSuccess: () => {
      j(S)
    },
    commandDisplayName: O.displayName,
    analytics_location: F === x.CommandOrigin.APPLICATION_LAUNCHER ? x.ApplicationCommandTriggerLocations.APP_LAUNCHER : x.ApplicationCommandTriggerLocations.SLASH_UI
  }))
}
let j = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
      name: e.name.replaceAll(":", "")
    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(T.isNotNullish));
    t.length > 0 && o.default.dispatch({
      type: "EMOJI_TRACK_USAGE",
      emojiUsed: t
    })
  },
  z = (e, t, n) => {
    if (e.isCommandType()) {
      let l = t.guild_id;
      null != e.interactionData && B({
        applicationId: n,
        data: e.interactionData,
        context: {
          channel: t,
          guild: null != l ? v.default.getGuild(l) : null
        }
      })
    }
  },
  B = e => {
    let {
      applicationId: t,
      data: n,
      context: l,
      attachments: i,
      maxSizeCallback: r,
      onMessageSuccess: u,
      commandDisplayName: c,
      analytics_location: d
    } = e, {
      channel: p,
      guild: m
    } = l, h = p.id, _ = null == m ? void 0 : m.id, [C, v] = function(e, t, n) {
      let l = S.getCachedApplicationSection(e.channel, n, t);
      if (null != l) {
        var i, a, r;
        let e = null !== (a = null === (i = l.application) || void 0 === i ? void 0 : i.bot) && void 0 !== a ? a : {
          id: l.id,
          username: l.name,
          discriminator: "0000",
          avatar: null,
          bot: !0
        };
        return o.default.dispatch({
          type: "STORE_APPLICATION_INTERACTION_FAKE_USER",
          user: e
        }), [e, null !== (r = l.application) && void 0 !== r ? r : null]
      }
      return [null, null]
    }(l, t, n.type), A = n.type === s.ApplicationCommandType.CHAT ? b.MessageTypes.CHAT_INPUT_COMMAND : b.MessageTypes.CONTEXT_MENU_COMMAND, I = (0, g.default)({
      channelId: h,
      content: "",
      tts: !1,
      type: A,
      messageReference: void 0,
      allowedMentions: void 0,
      author: null != C ? C : void 0
    });
    I.application = null != v ? v : void 0, I.interaction = {
      id: n.id,
      name: n.name,
      name_localized: c,
      type: s.InteractionTypes.APPLICATION_COMMAND,
      user: (0, g.userRecordToServer)(E.default.getCurrentUser())
    }, I.interaction_data = n;
    let T = {
        applicationId: t,
        channelId: h,
        guildId: _,
        data: n,
        nonce: I.id,
        attachments: i,
        maxSizeCallback: r,
        analytics_location: d
      },
      y = (e, t) => {
        null == t && null != e && a.default.sendClydeError(h, e), o.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: I.id,
          channelId: h,
          reason: t
        })
      };
    a.default.receiveMessage(h, I, !0, {
      applicationId: t
    }), f.addQueued(T.nonce, {
      messageId: I.id,
      onCreate: e => {
        null != I.interaction && (I.interaction.id = e)
      },
      onFailure: (e, t) => y(e, t),
      data: {
        interactionType: s.InteractionTypes.APPLICATION_COMMAND,
        channelId: h
      }
    }), null != i ? V(i, T.nonce, _, r).then(e => {
      e && H(T, u)
    }) : H(T, u)
  };

function H(e, t) {
  u.default.enqueue({
    type: u.MessageDataType.COMMAND,
    message: e
  }, n => {
    var l;
    (0, h.handleInteractionResponse)(e.nonce, e.channelId, null !== (l = e.guildId) && void 0 !== l ? l : null, n), n.ok && null != t && t()
  })
}
async function G(e, t) {
  let n = 0,
    l = 0;
  for (let o of e) {
    var i;
    let e = t ? null !== (i = o.currentSize) && void 0 !== i ? i : 0 : await o.getSize();
    e > l && (l = e), n += e
  }
  return {
    totalSize: n,
    largestUploadedFileSize: l
  }
}
async function V(e, t, n, l) {
  let i = (0, I.maxFileSize)(n),
    o = e => {
      null == l || l(i, e), f.setFailed(t, b.AbortCodes.ENTITY_TOO_LARGE, R.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
        maxSize: (0, I.sizeString)(i)
      }))
    },
    {
      totalSize: a,
      largestUploadedFileSize: r
    } = await G(e, !1);
  if (r > Math.max(i, P.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > y.MAX_TOTAL_ATTACHMENT_SIZE) return o(r), !1;
  try {
    await (0, c.stageAttachmentFiles)(e)
  } catch {
    f.setFailed(t, void 0, R.default.Messages.UPLOADING_FILES_FAILED.format({
      count: e.length
    }))
  }({
    totalSize: a,
    largestUploadedFileSize: r
  } = await G(e, !0));
  let s = e.some(e => e.error === b.AbortCodes.ENTITY_TOO_LARGE);
  return !s && !(a > y.MAX_TOTAL_ATTACHMENT_SIZE) || (o(r), !1)
}