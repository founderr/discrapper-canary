"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("954955"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("265875"),
  E = n("569984"),
  h = n("918701"),
  _ = n("800599"),
  C = n("594174"),
  m = n("801077"),
  S = n("626135"),
  p = n("70956"),
  I = n("225559"),
  g = n("910436"),
  T = n("203028"),
  A = n("358924"),
  N = n("292140"),
  v = n("525296"),
  R = n("981631"),
  O = n("674563"),
  L = n("689938"),
  M = n("676563");
let P = 15 * p.default.Millis.MINUTE,
  x = (0, v.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: i
    } = e, r = (0, a.jsx)(T.default, {
      party: t,
      onUserContextMenu: n
    }), u = (0, a.jsx)(g.default, {
      party: t,
      onChannelContextMenu: l,
      quest: i
    }), {
      partiedMembers: c,
      applicationStreams: f,
      currentActivities: E,
      voiceChannels: h
    } = t, _ = c.length, C = f.length, m = E.length, p = h.length > 0, I = s.useCallback(() => {
      let e = E.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === O.ApplicationTypes.GAME
      }).map(e => e.game.name);
      S.default.track(R.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: C,
        num_activities: m,
        in_voice_channel: p,
        games_detected: e
      })
    }, [_, C, m, p, E]), v = o()(I, P);
    return null != r || null != u ? (0, a.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, a.jsx)(N.default, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(A.default, {
          ...e,
          onMouseEnter: v,
          "aria-haspopup": "menu",
          className: M.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [r, u]
          })
        })
      }
    }) : null
  }),
  y = i().throttle(() => f.fetchUserAffinities(!1), 3e5);

function D() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: i
  } = (0, u.useStateFromStoresObject)([m.default, _.default, C.default], () => ({
    nowPlayingCards: m.default.nowPlayingCards,
    loaded: m.default.loaded,
    needsRefresh: _.default.needsRefresh(),
    fetching: _.default.getFetching(),
    currentUser: C.default.getCurrentUser()
  })), r = (0, u.useStateFromStores)([E.default], () => E.default.quests);
  s.useEffect(() => (c.default.wait(() => I.mount()), () => c.default.wait(() => I.unmount())), [null == i ? void 0 : i.id]), s.useEffect(() => {
    n && !l && y()
  }, [n, l]);
  let o = s.useMemo(() => {
      let t = new Map,
        n = new Set;
      for (let a of e) a.party.currentActivities.forEach(e => {
        let {
          game: s
        } = e;
        if (null != s) {
          let e = (0, h.getQuestByApplicationId)(r, s.id);
          null != e && !n.has(e.id) && (t.set(a.party.id, e), n.add(e.id))
        }
      });
      return t
    }, [e, r]),
    f = null;
  return t ? (f = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, a.jsx)(x, {
      party: t,
      quest: o.get(t.id)
    }, t.id)
  }) : (0, a.jsxs)("div", {
    className: M.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: M.emptyHeader,
      children: L.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: M.emptyText,
      variant: "text-sm/normal",
      children: L.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: f
  })) : (0, a.jsx)("div", {
    className: M.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}