e.d(_, {
  Fo: function() {
    return d
  },
  KY: function() {
    return Z
  },
  Uo: function() {
    return P
  },
  fU: function() {
    return H
  },
  qw: function() {
    return p
  },
  tn: function() {
    return f
  }
}), e(733860);
var T = e(470079),
  s = e(658722),
  I = e.n(s),
  A = e(913527),
  n = e.n(A),
  N = e(442837),
  t = e(704215),
  r = e(45114),
  a = e(740504),
  L = e(605236),
  D = e(931261),
  S = e(540126),
  U = e(671098),
  l = e(703656),
  O = e(592125),
  G = e(324067),
  M = e(306680),
  R = e(709054),
  u = e(981631),
  i = e(176505),
  o = e(443063),
  C = e(490897),
  c = e(689938);

function g(E, _) {
  E.index = _
}

function d(E, _, e, s) {
  s = s.toLowerCase();
  let A = (0, D.g)(E),
    n = T.useCallback((E, _) => !(A && E.channel.hasFlag(i.zZ.IS_GUILD_RESOURCE_CHANNEL)) && E.channel.type !== u.d4z.GUILD_DIRECTORY && (0 === _.length || I()(_, E.channel.name.toLowerCase()) || E.channel.topic.toLowerCase().includes(_)), [A]);
  return T.useMemo(() => {
    let E = {
      null: [],
      _categories: []
    };
    return e[u.d4z.GUILD_CATEGORY].forEach(e => {
      let {
        channel: T
      } = e;
      "null" === T.id && (E.null = _.null.filter(E => n(E, s))), E[T.id] = _[T.id].filter(E => n(E, s))
    }), E._categories = _._categories.filter(_ => "null" === _.channel.id || 0 === s.length || E[_.channel.id].length > 0), (0, a.Z)(E._categories, E).forEach(g), E
  }, [_, e, n, s])
}

function Z(E) {
  let _ = E.getSections();
  if (_[S.zm] > 0) switch (E.getCommunitySection().getRow(0)) {
    case o.f.GUILD_HOME:
      return i.oC.GUILD_HOME;
    case o.f.GUILD_ROLE_SUBSCRIPTIONS:
      return i.oC.ROLE_SUBSCRIPTIONS;
    case o.f.GUILD_MEMBER_APPLICATIONS:
      return i.oC.MEMBER_APPLICATIONS
  }
  for (let T = S.wd; T < E.voiceChannelsSectionNumber; T++)
    if (_[T] > 0) {
      var e;
      let _ = null === (e = E.getChannelFromSectionRow(T, 0)) || void 0 === e ? void 0 : e.channel;
      if (null != _) return _.id
    } return null
}

function P(E, _) {
  let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, U.n)(E, _), (0, r.y5)(_.map(E => ({
    channelId: E,
    readStateType: C.W.CHANNEL,
    messageId: M.ZP.lastMessageId(E)
  }))), null != e && (0, l.uL)(u.Z5c.CHANNEL(E, e))
}

function f(E, _, e, T) {
  let s = (0, L.wE)(t.z.CHANNEL_BROWSER_NUX),
    I = (0, N.cj)([O.Z], () => {
      let _ = {},
        e = O.Z.getMutableGuildChannelsForGuild(E);
      for (let E in e) {
        let {
          parent_id: s
        } = e[E];
        if (null != s) {
          var T;
          _[s] = (null !== (T = _[s]) && void 0 !== T ? T : 0) + 1
        }
      }
      return _
    }, [E]),
    A = _._categories.map(E => {
      let T = _[E.channel.id];
      return {
        rowCount: "null" !== E.channel.id && 0 === I[E.channel.id] ? 1 : T.length,
        rowHeight: 0 === T.length ? 0 : e
      }
    });
  return !s && null != T && A.unshift({
    rowCount: 1,
    rowHeight: T
  }), A
}

function H(E) {
  var _, e;
  let T = (0, N.e7)([G.Z], () => G.Z.getCategories(E)),
    s = T._categories.length,
    I = T._categories[T._categories.length - 1];
  if (null == I) return 0;
  let A = T[null !== (e = null === (_ = I.channel) || void 0 === _ ? void 0 : _.id) && void 0 !== e ? e : "null"];
  return null == A ? 0 : 0 === A.length ? I.index + 2 - s : A[A.length - 1].index + 2 - s
}

function p(E) {
  var _;
  return c.Z.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
    timeAgo: n()(R.default.extractTimestamp(null !== (_ = M.ZP.lastMessageId(E)) && void 0 !== _ ? _ : E)).fromNow()
  })
}