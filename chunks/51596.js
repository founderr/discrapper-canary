"use strict";
l.r(t), l.d(t, {
  hide: function() {
    return H
  },
  search: function() {
    return U
  },
  selectResult: function() {
    return b
  },
  show: function() {
    return N
  },
  switchToResult: function() {
    return K
  }
}), l("757143"), l("47120");
var s = l("570140"),
  n = l("493683"),
  u = l("475179"),
  a = l("925549"),
  o = l("287734"),
  c = l("212819"),
  i = l("336197"),
  r = l("359110"),
  d = l("920440"),
  _ = l("131704"),
  p = l("592125"),
  T = l("283595"),
  E = l("944486"),
  A = l("914010"),
  R = l("626135"),
  f = l("777754"),
  C = l("823385"),
  h = l("981631"),
  m = l("176505");
let S = () => Promise.resolve();
S = l("346329").playApplication;
let y = Object.freeze({
    [c.AutocompleterQuerySymbols.USER]: c.AutocompleterResultTypes.USER,
    [c.AutocompleterQuerySymbols.TEXT_CHANNEL]: c.AutocompleterResultTypes.TEXT_CHANNEL,
    [c.AutocompleterQuerySymbols.VOICE_CHANNEL]: c.AutocompleterResultTypes.VOICE_CHANNEL,
    [c.AutocompleterQuerySymbols.GUILD]: c.AutocompleterResultTypes.GUILD,
    [c.AutocompleterQuerySymbols.APPLICATION]: c.AutocompleterResultTypes.APPLICATION
  }),
  I = new RegExp("^".concat(c.AutocompleterQuerySymbols.USER, "|").concat(c.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(c.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(c.AutocompleterQuerySymbols.GUILD, "|\\").concat(c.AutocompleterQuerySymbols.APPLICATION));

function O(e) {
  var t, l;
  let s;
  let [n, u] = (s = null !== (l = y[(t = e).charAt(0)]) && void 0 !== l ? l : null, [t.replace(I, ""), s]);
  return {
    query: n,
    queryMode: u
  }
}

function L(e, t) {
  let {
    results: l,
    queryMode: s,
    query: n,
    maxQueryLength: u
  } = C.default.getProps(), a = A.default.getGuildId(), o = E.default.getChannelId(a), i = l[(0, c.findNextSelectedResult)(c.FindResultDirections.DOWN, -1, l)], r = f.default.isEmail(n), d = f.default.isPhoneNumber(n), T = f.default.isUserTagLike(n), h = null != o && (0, m.isStaticChannelRoute)(o), S = {
    current_channel_id: h ? void 0 : o,
    current_channel_static_route: h ? o : void 0,
    current_guild_id: a,
    query_mode: null != s ? s : "GENERAL",
    query_length: n.length,
    max_query_length: u,
    is_email_like: r,
    is_phone_like: d,
    is_username_like: T,
    query: r || d || T ? null : n,
    top_result_type: null != i ? i.type : null,
    top_result_score: null != i ? i.score : null,
    num_results_total: C.default.getResultTotals(),
    num_results_users: C.default.getResultTotals(c.AutocompleterResultTypes.USER),
    num_results_text_channels: C.default.getResultTotals(c.AutocompleterResultTypes.TEXT_CHANNEL),
    num_results_voice_channels: C.default.getResultTotals(c.AutocompleterResultTypes.VOICE_CHANNEL),
    num_results_guilds: C.default.getResultTotals(c.AutocompleterResultTypes.GUILD),
    num_results_group_dms: C.default.getResultTotals(c.AutocompleterResultTypes.GROUP_DM)
  };
  if (null != o) {
    let e = p.default.getChannel(o);
    S.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: s,
      record: n
    } = t;
    switch (S.selected_type = e, S.selected_score = s, S.selected_index = l.indexOf(t), e) {
      case c.AutocompleterResultTypes.GUILD:
        S.selected_guild_id = n.id;
        break;
      case c.AutocompleterResultTypes.TEXT_CHANNEL:
      case c.AutocompleterResultTypes.VOICE_CHANNEL:
        n instanceof _.ChannelRecordBase && (S.selected_guild_id = null != n.guild_id ? n.guild_id : null), S.selected_channel_id = n.id;
        break;
      case c.AutocompleterResultTypes.GROUP_DM:
        S.selected_channel_id = n.id;
        break;
      case c.AutocompleterResultTypes.USER:
        S.selected_user_id = n.id
    }
  }
  R.default.track(e, S)
}

function g() {
  s.default.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function N() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (C.default.isOpen()) return;
    let l = A.default.getGuildId(),
      s = E.default.getChannelId(l);
    if (null != s) {
      let e = p.default.getChannel(s);
      t = null != e ? e.type : null
    }
    R.default.track(h.AnalyticEvents.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: l,
      current_channel_id: s,
      current_channel_type: t
    })
  }(e), s.default.dispatch({
    type: "QUICKSWITCHER_SHOW",
    ...O(t)
  })
}

function H() {
  L(h.AnalyticEvents.QUICKSWITCHER_CLOSED), g()
}

function U(e) {
  s.default.dispatch({
    type: "QUICKSWITCHER_SEARCH",
    ...O(e)
  })
}

function b(e) {
  s.default.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function K(e) {
  let t, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  g(), L(h.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: _,
    record: E
  } = e, A = {
    page: h.AnalyticsPages.QUICK_SWITCHER
  };
  switch (_) {
    case c.AutocompleterResultTypes.GUILD:
      (0, d.transitionToGuild)(E.id, {
        navigationReplace: !0
      });
      break;
    case c.AutocompleterResultTypes.TEXT_CHANNEL:
      null != (t = p.default.getChannel(E.id)) && (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: A
        },
        navigationReplace: !0
      });
      break;
    case c.AutocompleterResultTypes.VOICE_CHANNEL:
      null != (t = p.default.getChannel(E.id)) && (l ? u.default.updateChatOpen(E.id, !0) : o.default.selectVoiceChannel(E.id), (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: A
        },
        navigationReplace: !0
      }));
      break;
    case c.AutocompleterResultTypes.USER:
      n.default.openPrivateChannel([E.id], !1, !1, "Quickswitcher"), a.default.channelListScrollTo(h.ME, p.default.getDMFromUserId(E.id));
      break;
    case c.AutocompleterResultTypes.GROUP_DM:
      (0, r.transitionToChannel)(E.id, {
        navigationReplace: !0
      }), a.default.channelListScrollTo(h.ME, E.id);
      break;
    case c.AutocompleterResultTypes.APPLICATION:
      let R = T.default.getActiveLibraryApplication(E.id);
      S(E.id, R, {
        analyticsParams: {
          source: h.AnalyticsLocations.QUICK_SWITCHER,
          location: h.AnalyticsLocations.QUICK_SWITCHER
        }
      });
      break;
    case c.AutocompleterResultTypes.LINK:
      (0, i.default)(E.path, {
        navigationReplace: !0
      })
  }
  s.default.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}