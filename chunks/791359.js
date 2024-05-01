"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("954955"),
  o = a.n(r),
  u = a("442837"),
  d = a("481060"),
  c = a("570140"),
  f = a("265875"),
  E = a("569984"),
  h = a("918701"),
  _ = a("800599"),
  C = a("594174"),
  m = a("801077"),
  S = a("626135"),
  p = a("70956"),
  I = a("225559"),
  g = a("910436"),
  T = a("203028"),
  A = a("358924"),
  N = a("292140"),
  v = a("525296"),
  R = a("981631"),
  L = a("674563"),
  O = a("689938"),
  M = a("884724");
let P = 15 * p.default.Millis.MINUTE,
  x = (0, v.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: a,
      onChannelContextMenu: l,
      quest: i
    } = e, r = (0, n.jsx)(T.default, {
      party: t,
      onUserContextMenu: a
    }), u = (0, n.jsx)(g.default, {
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
        var t, a;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (a = e.game) || void 0 === a ? void 0 : a.type) === L.ApplicationTypes.GAME
      }).map(e => e.game.name);
      S.default.track(R.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: C,
        num_activities: m,
        in_voice_channel: p,
        games_detected: e
      })
    }, [_, C, m, p, E]), v = o()(I, P);
    return null != r || null != u ? (0, n.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, n.jsx)(N.default, {
          party: t,
          close: a
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: a
        } = t;
        return (0, n.jsx)(A.default, {
          ...e,
          onMouseEnter: v,
          "aria-haspopup": "menu",
          className: M.itemCard,
          active: a,
          children: (0, n.jsxs)("div", {
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
    needsRefresh: a,
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
    a && !l && y()
  }, [a, l]);
  let o = s.useMemo(() => {
      let t = new Map,
        a = new Set;
      for (let n of e) n.party.currentActivities.forEach(e => {
        let {
          game: s
        } = e;
        if (null != s) {
          let e = (0, h.getQuestByApplicationId)(r, s.id);
          null != e && !a.has(e.id) && (t.set(n.party.id, e), a.add(e.id))
        }
      });
      return t
    }, [e, r]),
    f = null;
  return t ? (f = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, n.jsx)(x, {
      party: t,
      quest: o.get(t.id)
    }, t.id)
  }) : (0, n.jsxs)("div", {
    className: M.emptyCard,
    children: [(0, n.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: M.emptyHeader,
      children: O.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, n.jsx)(d.Text, {
      color: "none",
      className: M.emptyText,
      variant: "text-sm/normal",
      children: O.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, n.jsx)(n.Fragment, {
    children: f
  })) : (0, n.jsx)("div", {
    className: M.emptyCard,
    children: (0, n.jsx)(d.Spinner, {})
  })
}