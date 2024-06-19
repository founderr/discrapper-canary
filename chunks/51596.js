n.d(t, {
  $Z: function() {
    return x
  },
  Cp: function() {
    return H
  },
  F_: function() {
    return L
  },
  Se: function() {
    return K
  },
  tF: function() {
    return m
  },
  yC: function() {
    return U
  }
}), n(757143), n(47120);
var l = n(570140),
  i = n(493683),
  a = n(475179),
  s = n(925549),
  c = n(287734),
  r = n(212819),
  o = n(336197),
  u = n(359110),
  _ = n(769654),
  d = n(131704),
  h = n(592125),
  E = n(283595),
  C = n(944486),
  T = n(914010),
  I = n(626135),
  R = n(777754),
  S = n(823385),
  p = n(981631),
  g = n(176505);
let A = () => Promise.resolve();
A = n(346329).playApplication;
let N = Object.freeze({
    [r.xQ.USER]: r.h8.USER,
    [r.xQ.TEXT_CHANNEL]: r.h8.TEXT_CHANNEL,
    [r.xQ.VOICE_CHANNEL]: r.h8.VOICE_CHANNEL,
    [r.xQ.GUILD]: r.h8.GUILD,
    [r.xQ.APPLICATION]: r.h8.APPLICATION
  }),
  O = new RegExp("^".concat(r.xQ.USER, "|").concat(r.xQ.TEXT_CHANNEL, "|").concat(r.xQ.VOICE_CHANNEL, "|\\").concat(r.xQ.GUILD, "|\\").concat(r.xQ.APPLICATION));

function L(e) {
  var t, n;
  let l;
  let [i, a] = (l = null !== (n = N[(t = e).charAt(0)]) && void 0 !== n ? n : null, [t.replace(O, ""), l]);
  return {
    query: i,
    queryMode: a
  }
}

function f(e, t) {
  let {
    results: n,
    queryMode: l,
    query: i,
    maxQueryLength: a
  } = S.Z.getProps(), s = T.Z.getGuildId(), c = C.Z.getChannelId(s), o = n[(0, r.gJ)(r.a8.DOWN, -1, n)], u = R.Z.isEmail(i), _ = R.Z.isPhoneNumber(i), E = R.Z.isUserTagLike(i), p = null != c && (0, g.AB)(c), A = {
    current_channel_id: p ? void 0 : c,
    current_channel_static_route: p ? c : void 0,
    current_guild_id: s,
    query_mode: null != l ? l : "GENERAL",
    query_length: i.length,
    max_query_length: a,
    is_email_like: u,
    is_phone_like: _,
    is_username_like: E,
    query: u || _ || E ? null : i,
    top_result_type: null != o ? o.type : null,
    top_result_score: null != o ? o.score : null,
    num_results_total: S.Z.getResultTotals(),
    num_results_users: S.Z.getResultTotals(r.h8.USER),
    num_results_text_channels: S.Z.getResultTotals(r.h8.TEXT_CHANNEL),
    num_results_voice_channels: S.Z.getResultTotals(r.h8.VOICE_CHANNEL),
    num_results_guilds: S.Z.getResultTotals(r.h8.GUILD),
    num_results_group_dms: S.Z.getResultTotals(r.h8.GROUP_DM)
  };
  if (null != c) {
    let e = h.Z.getChannel(c);
    A.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: l,
      record: i
    } = t;
    switch (A.selected_type = e, A.selected_score = l, A.selected_index = n.indexOf(t), e) {
      case r.h8.GUILD:
        A.selected_guild_id = i.id;
        break;
      case r.h8.TEXT_CHANNEL:
      case r.h8.VOICE_CHANNEL:
        i instanceof d.Sf && (A.selected_guild_id = null != i.guild_id ? i.guild_id : null), A.selected_channel_id = i.id;
        break;
      case r.h8.GROUP_DM:
        A.selected_channel_id = i.id;
        break;
      case r.h8.USER:
        A.selected_user_id = i.id
    }
  }
  I.default.track(e, A)
}

function Z() {
  l.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function x() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (S.Z.isOpen()) return;
    let n = T.Z.getGuildId(),
      l = C.Z.getChannelId(n);
    if (null != l) {
      let e = h.Z.getChannel(l);
      t = null != e ? e.type : null
    }
    I.default.track(p.rMx.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: t
    })
  }(e), l.Z.dispatch({
    type: "QUICKSWITCHER_SHOW",
    ...L(t)
  })
}

function H() {
  f(p.rMx.QUICKSWITCHER_CLOSED), Z()
}

function U(e) {
  l.Z.dispatch({
    type: "QUICKSWITCHER_SEARCH",
    ...L(e)
  })
}

function m(e) {
  l.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function K(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  Z(), f(p.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: d,
    record: C
  } = e, T = {
    page: p.ZY5.QUICK_SWITCHER
  };
  switch (d) {
    case r.h8.GUILD:
      (0, _.X)(C.id, {
        navigationReplace: !0
      });
      break;
    case r.h8.TEXT_CHANNEL:
      null != (t = h.Z.getChannel(C.id)) && (0, u.Kh)(t.id, {
        state: {
          analyticsSource: T
        },
        navigationReplace: !0
      });
      break;
    case r.h8.VOICE_CHANNEL:
      null != (t = h.Z.getChannel(C.id)) && (n ? a.Z.updateChatOpen(C.id, !0) : c.default.selectVoiceChannel(C.id), (0, u.Kh)(t.id, {
        state: {
          analyticsSource: T
        },
        navigationReplace: !0
      }));
      break;
    case r.h8.USER:
      i.Z.openPrivateChannel([C.id], !1, !1, "Quickswitcher"), s.Z.channelListScrollTo(p.ME, h.Z.getDMFromUserId(C.id));
      break;
    case r.h8.GROUP_DM:
      (0, u.Kh)(C.id, {
        navigationReplace: !0
      }), s.Z.channelListScrollTo(p.ME, C.id);
      break;
    case r.h8.APPLICATION:
      let I = E.Z.getActiveLibraryApplication(C.id);
      A(C.id, I, {
        analyticsParams: {
          source: p.Sbl.QUICK_SWITCHER,
          location: p.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case r.h8.LINK:
      (0, o.Z)(C.path, {
        navigationReplace: !0
      })
  }
  l.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}