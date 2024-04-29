"use strict";
n.r(t), n.d(t, {
  hide: function() {
    return G
  },
  search: function() {
    return m
  },
  selectResult: function() {
    return M
  },
  show: function() {
    return b
  },
  switchToResult: function() {
    return P
  }
}), n("757143"), n("47120");
var i = n("570140"),
  o = n("493683"),
  l = n("475179"),
  a = n("925549"),
  u = n("287734"),
  s = n("212819"),
  d = n("336197"),
  r = n("359110"),
  E = n("769654"),
  c = n("131704"),
  _ = n("592125"),
  A = n("283595"),
  C = n("944486"),
  T = n("914010"),
  S = n("626135"),
  I = n("777754"),
  f = n("823385"),
  O = n("981631"),
  p = n("176505");
let N = () => Promise.resolve();
N = n("346329").playApplication;
let R = Object.freeze({
    [s.AutocompleterQuerySymbols.USER]: s.AutocompleterResultTypes.USER,
    [s.AutocompleterQuerySymbols.TEXT_CHANNEL]: s.AutocompleterResultTypes.TEXT_CHANNEL,
    [s.AutocompleterQuerySymbols.VOICE_CHANNEL]: s.AutocompleterResultTypes.VOICE_CHANNEL,
    [s.AutocompleterQuerySymbols.GUILD]: s.AutocompleterResultTypes.GUILD,
    [s.AutocompleterQuerySymbols.APPLICATION]: s.AutocompleterResultTypes.APPLICATION
  }),
  L = new RegExp("^".concat(s.AutocompleterQuerySymbols.USER, "|").concat(s.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(s.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(s.AutocompleterQuerySymbols.GUILD, "|\\").concat(s.AutocompleterQuerySymbols.APPLICATION));

function D(e) {
  var t, n;
  let i;
  let [o, l] = (i = null !== (n = R[(t = e).charAt(0)]) && void 0 !== n ? n : null, [t.replace(L, ""), i]);
  return {
    query: o,
    queryMode: l
  }
}

function h(e, t) {
  let {
    results: n,
    queryMode: i,
    query: o,
    maxQueryLength: l
  } = f.default.getProps(), a = T.default.getGuildId(), u = C.default.getChannelId(a), d = n[(0, s.findNextSelectedResult)(s.FindResultDirections.DOWN, -1, n)], r = I.default.isEmail(o), E = I.default.isPhoneNumber(o), A = I.default.isUserTagLike(o), O = null != u && (0, p.isStaticChannelRoute)(u), N = {
    current_channel_id: O ? void 0 : u,
    current_channel_static_route: O ? u : void 0,
    current_guild_id: a,
    query_mode: null != i ? i : "GENERAL",
    query_length: o.length,
    max_query_length: l,
    is_email_like: r,
    is_phone_like: E,
    is_username_like: A,
    query: r || E || A ? null : o,
    top_result_type: null != d ? d.type : null,
    top_result_score: null != d ? d.score : null,
    num_results_total: f.default.getResultTotals(),
    num_results_users: f.default.getResultTotals(s.AutocompleterResultTypes.USER),
    num_results_text_channels: f.default.getResultTotals(s.AutocompleterResultTypes.TEXT_CHANNEL),
    num_results_voice_channels: f.default.getResultTotals(s.AutocompleterResultTypes.VOICE_CHANNEL),
    num_results_guilds: f.default.getResultTotals(s.AutocompleterResultTypes.GUILD),
    num_results_group_dms: f.default.getResultTotals(s.AutocompleterResultTypes.GROUP_DM)
  };
  if (null != u) {
    let e = _.default.getChannel(u);
    N.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: i,
      record: o
    } = t;
    switch (N.selected_type = e, N.selected_score = i, N.selected_index = n.indexOf(t), e) {
      case s.AutocompleterResultTypes.GUILD:
        N.selected_guild_id = o.id;
        break;
      case s.AutocompleterResultTypes.TEXT_CHANNEL:
      case s.AutocompleterResultTypes.VOICE_CHANNEL:
        o instanceof c.ChannelRecordBase && (N.selected_guild_id = null != o.guild_id ? o.guild_id : null), N.selected_channel_id = o.id;
        break;
      case s.AutocompleterResultTypes.GROUP_DM:
        N.selected_channel_id = o.id;
        break;
      case s.AutocompleterResultTypes.USER:
        N.selected_user_id = o.id
    }
  }
  S.default.track(e, N)
}

function g() {
  i.default.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function b() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (f.default.isOpen()) return;
    let n = T.default.getGuildId(),
      i = C.default.getChannelId(n);
    if (null != i) {
      let e = _.default.getChannel(i);
      t = null != e ? e.type : null
    }
    S.default.track(O.AnalyticEvents.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: i,
      current_channel_type: t
    })
  }(e), i.default.dispatch({
    type: "QUICKSWITCHER_SHOW",
    ...D(t)
  })
}

function G() {
  h(O.AnalyticEvents.QUICKSWITCHER_CLOSED), g()
}

function m(e) {
  i.default.dispatch({
    type: "QUICKSWITCHER_SEARCH",
    ...D(e)
  })
}

function M(e) {
  i.default.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function P(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  g(), h(O.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: c,
    record: C
  } = e, T = {
    page: O.AnalyticsPages.QUICK_SWITCHER
  };
  switch (c) {
    case s.AutocompleterResultTypes.GUILD:
      (0, E.transitionToGuild)(C.id, {
        navigationReplace: !0
      });
      break;
    case s.AutocompleterResultTypes.TEXT_CHANNEL:
      null != (t = _.default.getChannel(C.id)) && (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: T
        },
        navigationReplace: !0
      });
      break;
    case s.AutocompleterResultTypes.VOICE_CHANNEL:
      null != (t = _.default.getChannel(C.id)) && (n ? l.default.updateChatOpen(C.id, !0) : u.default.selectVoiceChannel(C.id), (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: T
        },
        navigationReplace: !0
      }));
      break;
    case s.AutocompleterResultTypes.USER:
      o.default.openPrivateChannel([C.id], !1, !1, "Quickswitcher"), a.default.channelListScrollTo(O.ME, _.default.getDMFromUserId(C.id));
      break;
    case s.AutocompleterResultTypes.GROUP_DM:
      (0, r.transitionToChannel)(C.id, {
        navigationReplace: !0
      }), a.default.channelListScrollTo(O.ME, C.id);
      break;
    case s.AutocompleterResultTypes.APPLICATION:
      let S = A.default.getActiveLibraryApplication(C.id);
      N(C.id, S, {
        analyticsParams: {
          source: O.AnalyticsLocations.QUICK_SWITCHER,
          location: O.AnalyticsLocations.QUICK_SWITCHER
        }
      });
      break;
    case s.AutocompleterResultTypes.LINK:
      (0, d.default)(C.path, {
        navigationReplace: !0
      })
  }
  i.default.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}