"use strict";
n.d(t, {
  Kh: function() {
    return G
  },
  Tm: function() {
    return P
  }
}), n(47120), n(411104);
var i = n(512722),
  r = n.n(i),
  s = n(913527),
  o = n.n(s),
  a = n(106351),
  l = n(969812),
  u = n(493683),
  _ = n(749210),
  c = n(904245),
  d = n(911969),
  E = n(386696),
  I = n(957730),
  T = n(968437),
  h = n(928477),
  S = n(665906),
  f = n(695346),
  N = n(592125),
  A = n(496675),
  m = n(594174),
  O = n(70956),
  R = n(51144),
  p = n(895924),
  g = n(689079),
  C = n(981631),
  v = n(590433),
  L = n(689938);
let D = n(227419).Z,
  M = (e, t) => {
    var n;
    return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
  },
  P = {
    [g.bi.BUILT_IN]: {
      id: g.bi.BUILT_IN,
      type: p.Qi.BUILT_IN,
      get name() {
        return L.Z.Messages.COMMAND_SECTION_BUILT_IN_NAME
      }
    },
    [g.bi.FRECENCY]: {
      id: g.bi.FRECENCY,
      type: p.Qi.BUILT_IN,
      get name() {
        return L.Z.Messages.FREQUENTLY_USED
      }
    }
  },
  y = [...D, {
    id: "-1",
    name: "shrug",
    displayName: "shrug",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN_TEXT,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_SHRUG_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_SHRUG_DESCRIPTION
    },
    options: [{
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
      }
    }],
    execute: e => {
      var t;
      let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
      }
    }
  }, {
    id: "-2",
    name: "tableflip",
    displayName: "tableflip",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN_TEXT,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION
    },
    options: [{
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
      }
    }],
    execute: e => {
      var t;
      let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
      }
    }
  }, {
    id: "-3",
    name: "unflip",
    displayName: "unflip",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN_TEXT,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
    },
    options: [{
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
      }
    }],
    execute: e => {
      var t;
      let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
      }
    }
  }, {
    id: "-4",
    name: "tts",
    displayName: "tts",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN_TEXT,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_TTS_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_TTS_DESCRIPTION
    },
    options: [{
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
      },
      required: !0
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return !t.isPrivate() && f.OW.getSetting() && A.Z.can(C.Plq.SEND_TTS_MESSAGES, t)
    },
    execute: e => {
      var t;
      return {
        content: null !== (t = M(e, "message")) && void 0 !== t ? t : "",
        tts: !0
      }
    }
  }, {
    id: "-5",
    name: "me",
    displayName: "me",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN_TEXT,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_ME_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_ME_DESCRIPTION
    },
    options: [{
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
      },
      required: !0
    }],
    execute: e => {
      var t;
      let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
      return {
        content: "_".concat(n, "_")
      }
    }
  }, {
    id: "-6",
    name: "spoiler",
    displayName: "spoiler",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN_TEXT,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_SPOILER_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_SPOILER_DESCRIPTION
    },
    options: [{
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
      },
      required: !0
    }],
    execute: e => {
      var t;
      let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
      return {
        content: (0, C.XmY)(n).trim()
      }
    }
  }, {
    id: "-7",
    name: "nick",
    displayName: "nick",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_NICK_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_NICK_DESCRIPTION
    },
    options: [{
      name: "new_nick",
      displayName: "new_nick",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
      }
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return !t.isPrivate() && (A.Z.can(C.Plq.CHANGE_NICKNAME, t) || A.Z.can(C.Plq.MANAGE_NICKNAMES, t))
    },
    execute: (e, t) => {
      var n;
      let {
        guild: i,
        channel: r
      } = t;
      if (null == i) return;
      let s = null !== (n = M(e, "new_nick")) && void 0 !== n ? n : "";
      l.Z.changeNickname(i.id, r.id, C.ME, s || "")
    }
  }, {
    id: "-10",
    name: "thread",
    displayName: "thread",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_THREAD_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_THREAD_DESCRIPTION
    },
    options: [{
      name: "name",
      displayName: "name",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION
      },
      required: !0
    }, {
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
      },
      required: !0
    }],
    predicate: e => {
      let {
        channel: t
      } = e;
      return (0, S.ki)(t)
    },
    execute: async (e, t) => {
      var n, i;
      let {
        channel: r
      } = t, s = null !== (n = M(e, "name")) && void 0 !== n ? n : "", o = null !== (i = M(e, "message")) && void 0 !== i ? i : "", l = await (0, h.gK)(r, s, a.d.PUBLIC_THREAD, (0, T.WD)(r, null), "Slash Command");
      c.Z.sendMessage(l.id, I.ZP.parse(l, o))
    }
  }, {
    id: "-11",
    name: "kick",
    displayName: "kick",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_KICK_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_KICK_DESCRIPTION
    },
    options: [{
      name: "user",
      displayName: "user",
      type: d.jw.USER,
      get description() {
        return L.Z.Messages.COMMAND_KICK_USER_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_KICK_USER_DESCRIPTION
      },
      required: !0
    }, {
      name: "reason",
      displayName: "reason",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION
      },
      required: !1
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return A.Z.can(C.Plq.KICK_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: i,
        channel: r
      } = t;
      if (null == i) return;
      let s = null !== (n = M(e, "user")) && void 0 !== n ? n : "";
      if (!A.Z.canManageUser(C.Plq.KICK_MEMBERS, s, i)) {
        c.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_KICK_UNABLE);
        return
      }(async () => {
        var t;
        let n = m.default.getUser(s);
        if (null == n) throw Error();
        await _.Z.kickUser(i.id, s, null !== (t = M(e, "reason")) && void 0 !== t ? t : ""), c.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_KICK_CONFIRMATION.format({
          user: R.ZP.getUserTag(n)
        }))
      })().catch(() => {
        c.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_KICK_ERROR)
      })
    }
  }, {
    id: "-12",
    name: "ban",
    displayName: "ban",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_BAN_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_BAN_DESCRIPTION
    },
    options: [{
      name: "user",
      displayName: "user",
      type: d.jw.USER,
      get description() {
        return L.Z.Messages.COMMAND_BAN_USER_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_BAN_USER_DESCRIPTION
      },
      required: !0
    }, {
      name: "delete_messages",
      displayName: "delete_messages",
      type: d.jw.INTEGER,
      get description() {
        return L.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
      },
      required: !0,
      get choices() {
        return [{
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
          value: 0
        }, {
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
          value: O.Z.Seconds.HOUR
        }, {
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
          value: 6 * O.Z.Seconds.HOUR
        }, {
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
          value: 12 * O.Z.Seconds.HOUR
        }, {
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
          value: O.Z.Seconds.DAY
        }, {
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
          value: 3 * O.Z.Seconds.DAY
        }, {
          name: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
          displayName: L.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
          value: 7 * O.Z.Seconds.DAY
        }]
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION
      },
      required: !1
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return A.Z.can(C.Plq.BAN_MEMBERS, t)
    },
    execute: (e, t) => {
      var n;
      let {
        guild: i,
        channel: r
      } = t;
      if (null == i) return;
      let s = null !== (n = M(e, "user")) && void 0 !== n ? n : "";
      if (!A.Z.canManageUser(C.Plq.BAN_MEMBERS, s, i)) {
        c.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_BAN_UNABLE);
        return
      }(async () => {
        var t, n;
        if ("" === s) throw Error();
        let o = null !== (t = M(e, "delete_messages")) && void 0 !== t ? t : 0,
          a = null !== (n = M(e, "reason")) && void 0 !== n ? n : "",
          l = m.default.getUser(s);
        await _.Z.banUser(i.id, s, o, a), c.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_BAN_CONFIRMATION.format({
          user: null != l ? R.ZP.getUserTag(l) : s
        }))
      })().catch(() => {
        c.Z.sendBotMessage(r.id, L.Z.Messages.COMMAND_BAN_ERROR)
      })
    }
  }, {
    id: "-13",
    name: "timeout",
    displayName: "timeout",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION
    },
    options: [{
      name: "user",
      displayName: "user",
      type: d.jw.USER,
      get description() {
        return L.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
      },
      required: !0
    }, {
      name: "duration",
      displayName: "duration",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
      },
      required: !0,
      get choices() {
        return (0, v.tr)().map(e => ({
          ...e,
          name: e.label,
          displayName: e.label
        }))
      }
    }, {
      name: "reason",
      displayName: "reason",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
      },
      required: !1
    }],
    predicate: e => {
      let {
        guild: t
      } = e;
      return A.Z.can(C.Plq.MODERATE_MEMBERS, t)
    },
    execute: (e, t) => {
      let {
        guild: n,
        channel: i
      } = t;
      if (null == n) return;
      let r = M(e, "user");
      if (!(0, E.F)(n.id, r)) {
        c.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_TIMEOUT_UNABLE);
        return
      }(async () => {
        var t, s;
        let a = null !== (t = M(e, "duration")) && void 0 !== t ? t : "",
          l = null !== (s = M(e, "reason")) && void 0 !== s ? s : "",
          u = m.default.getUser(r);
        if (null == u) throw Error();
        await _.Z.setCommunicationDisabledUntil({
          guildId: n.id,
          userId: r,
          communicationDisabledUntilTimestamp: o()().add(a, "s").toISOString(),
          duration: a,
          reason: l
        }), c.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
          user: R.ZP.getUserTag(u),
          duration: a
        }))
      })().catch(() => {
        c.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_TIMEOUT_ERROR)
      })
    }
  }, {
    id: "-14",
    name: "msg",
    displayName: "msg",
    type: d.yU.CHAT,
    inputType: p.iw.BUILT_IN,
    applicationId: g.bi.BUILT_IN,
    get description() {
      return L.Z.Messages.COMMAND_MSG_DESCRIPTION
    },
    get displayDescription() {
      return L.Z.Messages.COMMAND_MSG_DESCRIPTION
    },
    options: [{
      name: "user",
      displayName: "user",
      type: d.jw.USER,
      get description() {
        return L.Z.Messages.COMMAND_MSG_USER_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_MSG_USER_DESCRIPTION
      },
      required: !0
    }, {
      name: "message",
      displayName: "message",
      type: d.jw.STRING,
      get description() {
        return L.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
      },
      get displayDescription() {
        return L.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
      },
      required: !0,
      get maxLength() {
        var U;
        return (null === (U = m.default.getCurrentUser()) || void 0 === U ? void 0 : U.premiumType) ? C.en1 : C.J6R
      }
    }],
    execute: (e, t) => {
      var n;
      let {
        channel: i
      } = t, s = M(e, "user"), o = null !== (n = M(e, "message")) && void 0 !== n ? n : "";
      (async () => {
        await u.Z.openPrivateChannel(s).then(e => {
          let t = N.Z.getChannel(e);
          r()(null != t, "Newly created PrivateChannel is null"), c.Z.sendMessage(t.id, I.ZP.parse(t, o))
        })
      })().catch(() => {
        c.Z.sendBotMessage(i.id, L.Z.Messages.COMMAND_MSG_ERROR)
      })
    }
  }],
  b = y.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
  G = (e, t, n) => {
    let i = t ? y : b;
    return i = i.filter(t => t.type === e && (!n || t.inputType === p.iw.BUILT_IN_TEXT || t.inputType === p.iw.BUILT_IN_INTEGRATION))
  }