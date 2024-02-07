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
  y = n("254490"),
  I = n("449008"),
  T = n("980134"),
  M = n("507217"),
  O = n("246598"),
  N = n("118200"),
  x = n("240249"),
  S = n("524768"),
  L = n("389153"),
  b = n("317041"),
  U = n("49111"),
  P = n("894488"),
  R = n("782340");
let D = (e, t) => {
    var n;
    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
  },
  w = function(e, t, n) {
    var l, i;
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
      a = e.name === (null === (l = n.autocomplete) || void 0 === l ? void 0 : l.name);
    if (a) return n.autocomplete.query;
    if ("" === t) return null;
    let r = O.default.getAutocompleteLastChoices(n.channel.id, e.name);
    return null != r ? null !== (i = D(r, t)) && void 0 !== i ? i : o(t) : o(t)
  },
  k = e => {
    let t = e.toLowerCase() === b.TRUE_OPTION_NAME.toLowerCase(),
      n = e.toLowerCase() === b.FALSE_OPTION_NAME.toLowerCase();
    return t || n ? t : null
  };
async function F(e) {
  var t, n, l, a, u, c, m, f, h, g, v, E, y, I, T;
  let {
    command: O,
    optionValues: x,
    context: b,
    commandTargetId: P,
    maxSizeCallback: R,
    commandOrigin: F = S.CommandOrigin.CHAT
  } = e;
  null == b.autocomplete && o.default.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: b,
    command: O
  }), await _.default.unarchiveThreadIfNecessary(b.channel.id);
  let z = [],
    G = [],
    H = (0, L.getCommandAttachmentDraftType)(F);
  if (null != O.options)
    for (let e of O.options) {
      if (e.type === s.ApplicationCommandOptionType.SUB_COMMAND || e.type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in x)) continue;
      let t = (null === (l = b.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
        n = null;
      if (e.type === s.ApplicationCommandOptionType.STRING) {
        let l = null !== (u = null === (a = N.getOptionalString(x, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== u ? u : "";
        n = null != e.choices ? D(e.choices, l) : e.autocomplete ? w(e, l, b) : l, i(null != b.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && z.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) {
        if (null != b.autocomplete) continue;
        let l = A.default.getUpload(b.channel.id, e.name, H);
        if (null == l) continue;
        let i = A.default.getUploads(b.channel.id, H).findIndex(e => l.id === e.id);
        G.push(l), n = i, z.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      let o = N.filterEmpty(x[e.name]);
      if (i(null != b.autocomplete || 1 === o.length, 'Option "'.concat(e.name, '" expects a single option type')), null == o[0] && !t) continue;
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
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (m = b.guild) || void 0 === m ? void 0 : m.id, b.channel.id);
              i((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
            }
          }
          break;
        case s.ApplicationCommandOptionType.ROLE:
          if ("roleMention" === r.type) n = r.roleId;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (f = b.guild) || void 0 === f ? void 0 : f.id, b.channel.id, {
                allowUsers: !1
              });
              i((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
            }
          } else "textMention" === r.type && "@everyone" === r.text && (n = null === (h = b.guild) || void 0 === h ? void 0 : h.id);
          break;
        case s.ApplicationCommandOptionType.USER:
          if ("userMention" === r.type) n = r.userId;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (g = b.guild) || void 0 === g ? void 0 : g.id, b.channel.id, {
                allowRoles: !1
              });
              i((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
            }
          }
          break;
        case s.ApplicationCommandOptionType.MENTIONABLE:
          if ("userMention" === r.type) n = r.userId;
          else if ("roleMention" === r.type) n = r.roleId;
          else if ("textMention" === r.type && "@everyone" === r.text) n = null === (v = b.guild) || void 0 === v ? void 0 : v.id;
          else if ("text" === r.type) {
            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
            else {
              let e = (0, p.resolveApplicationCommandOption)(r.text, null === (E = b.guild) || void 0 === E ? void 0 : E.id, b.channel.id);
              (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (y = b.guild) || void 0 === y ? void 0 : y.id : i(!1, "Failed to resolve ".concat(r.text))
            }
          }
          break;
        case s.ApplicationCommandOptionType.BOOLEAN:
          "text" === r.type && (n = k(r.text.trim()));
          break;
        case s.ApplicationCommandOptionType.INTEGER:
          if ("text" === r.type) {
            let t = r.text.trim();
            n = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? w(e, t, b, Number) : Number(N.normalizeNumericString(C.default.locale, t))
          }
          break;
        case s.ApplicationCommandOptionType.NUMBER:
          if ("text" === r.type) {
            let t = r.text.trim();
            n = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? w(e, t, b, Number) : Number(N.normalizeNumericString(C.default.locale, t))
          }
          break;
        default:
          i(!1, "Unsupported option type: ".concat(e.type));
          continue
      }
      i(null != b.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && z.push({
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
  if (null != O.execute) return d.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
    command_id: O.id,
    application_id: O.applicationId,
    command_type: O.type,
    location: F === S.CommandOrigin.APPLICATION_LAUNCHER ? S.ApplicationCommandTriggerLocations.APP_LAUNCHER : S.ApplicationCommandTriggerLocations.SLASH_UI
  }), O.execute(z, b);
  if (O.inputType === S.ApplicationCommandInputType.BUILT_IN || O.inputType === S.ApplicationCommandInputType.BUILT_IN_TEXT || O.inputType === S.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
  let V = {
    version: O.version,
    id: null !== (I = null === (t = O.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== I ? I : O.id,
    guild_id: O.guildId,
    name: null !== (T = null === (n = O.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== T ? T : O.name,
    type: O.type,
    options: z,
    application_command: O.rootCommand
  };
  null != P && (V.target_id = P), null != b.autocomplete ? (0, M.performAutocomplete)(O, b, V) : (r.default.clearAll(b.channel.id, H), B({
    applicationId: O.applicationId,
    data: V,
    context: b,
    attachments: G,
    maxSizeCallback: R,
    onMessageSuccess: () => {
      j(x)
    },
    commandDisplayName: O.displayName,
    analytics_location: F === S.CommandOrigin.APPLICATION_LAUNCHER ? S.ApplicationCommandTriggerLocations.APP_LAUNCHER : S.ApplicationCommandTriggerLocations.SLASH_UI
  }))
}
let j = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
      name: e.name.replaceAll(":", "")
    } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(I.isNotNullish));
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
      let l = x.getCachedApplicationSection(e.channel, n, t);
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
    }(l, t, n.type), A = n.type === s.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND, y = (0, g.default)({
      channelId: h,
      content: "",
      tts: !1,
      type: A,
      messageReference: void 0,
      allowedMentions: void 0,
      author: null != C ? C : void 0
    });
    y.application = null != v ? v : void 0, y.interaction = {
      id: n.id,
      name: n.name,
      name_localized: c,
      type: s.InteractionTypes.APPLICATION_COMMAND,
      user: (0, g.userRecordToServer)(E.default.getCurrentUser())
    }, y.interaction_data = n;
    let I = {
        applicationId: t,
        channelId: h,
        guildId: _,
        data: n,
        nonce: y.id,
        attachments: i,
        maxSizeCallback: r,
        analytics_location: d
      },
      T = (e, t) => {
        null == t && null != e && a.default.sendClydeError(h, e), o.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: y.id,
          channelId: h,
          reason: t
        })
      };
    a.default.receiveMessage(h, y, !0, {
      applicationId: t
    }), f.addQueued(I.nonce, {
      messageId: y.id,
      onCreate: e => {
        null != y.interaction && (y.interaction.id = e)
      },
      onFailure: (e, t) => T(e, t),
      data: {
        interactionType: s.InteractionTypes.APPLICATION_COMMAND,
        channelId: h
      }
    }), null != i ? V(i, I.nonce, _, r).then(e => {
      e && G(I, u)
    }) : G(I, u)
  };

function G(e, t) {
  u.default.enqueue({
    type: u.MessageDataType.COMMAND,
    message: e
  }, n => {
    var l;
    (0, h.handleInteractionResponse)(e.nonce, e.channelId, null !== (l = e.guildId) && void 0 !== l ? l : null, n), n.ok && null != t && t()
  })
}
async function H(e, t) {
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
  let i = (0, y.maxFileSize)(n),
    o = e => {
      null == l || l(i, e), f.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, R.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
        maxSize: (0, y.sizeString)(i)
      }))
    },
    {
      totalSize: a,
      largestUploadedFileSize: r
    } = await H(e, !1);
  if (r > Math.max(i, P.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > T.MAX_TOTAL_ATTACHMENT_SIZE) return o(r), !1;
  try {
    await (0, c.stageAttachmentFiles)(e)
  } catch {
    f.setFailed(t, void 0, R.default.Messages.UPLOADING_FILES_FAILED.format({
      count: e.length
    }))
  }({
    totalSize: a,
    largestUploadedFileSize: r
  } = await H(e, !0));
  let s = e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE);
  return !s && !(a > T.MAX_TOTAL_ATTACHMENT_SIZE) || (o(r), !1)
}