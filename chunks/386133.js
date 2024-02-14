"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("483366"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("777273"),
  E = n("843823"),
  h = n("697218"),
  _ = n("392453"),
  C = n("599110"),
  I = n("718517"),
  S = n("744923"),
  p = n("333705"),
  m = n("749554"),
  T = n("62659"),
  g = n("36512"),
  A = n("638441"),
  N = n("49111"),
  R = n("988268"),
  v = n("782340"),
  O = n("852865");
let L = 15 * I.default.Millis.MINUTE,
  M = (0, A.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      registerQuestEntrypoint: i,
      unregisterQuestEntrypoint: r,
      shouldRenderQuestEntrypoint: u
    } = e, c = (0, a.jsx)(m.default, {
      party: t,
      onUserContextMenu: n
    }), f = (0, a.jsx)(p.default, {
      party: t,
      onChannelContextMenu: l,
      registerQuestEntrypoint: i,
      unregisterQuestEntrypoint: r,
      shouldRenderQuestEntrypoint: u
    }), {
      partiedMembers: E,
      applicationStreams: h,
      currentActivities: _,
      voiceChannels: I
    } = t, S = E.length, A = h.length, v = _.length, M = I.length > 0, P = s.useCallback(() => {
      let e = _.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === R.ApplicationTypes.GAME
      }).map(e => e.game.name);
      C.default.track(N.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: S,
        num_streams: A,
        num_activities: v,
        in_voice_channel: M,
        games_detected: e
      })
    }, [S, A, v, M, _]), D = o(P, L);
    return null != c || null != f ? (0, a.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, a.jsx)(g.default, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(T.default, {
          ...e,
          onMouseEnter: D,
          "aria-haspopup": "menu",
          className: O.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [c, f]
          })
        })
      }
    }) : null
  }),
  P = i.throttle(() => f.fetchUserAffinities(!1), 3e5);

function D() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: i
  } = (0, u.useStateFromStoresObject)([_.default, E.default, h.default], () => ({
    nowPlayingCards: _.default.nowPlayingCards,
    loaded: _.default.loaded,
    needsRefresh: E.default.needsRefresh(),
    fetching: E.default.getFetching(),
    currentUser: h.default.getCurrentUser()
  })), r = s.useRef(new Map), o = s.useCallback((e, t) => {
    let n = r.current.get(e);
    return null == n || n === t
  }, []), f = s.useCallback((e, t) => {
    r.current.set(e, t)
  }, []), C = s.useCallback(e => {
    r.current.delete(e)
  }, []);
  s.useEffect(() => (c.default.wait(() => S.mount()), () => c.default.wait(() => S.unmount())), [null == i ? void 0 : i.id]), s.useEffect(() => {
    n && !l && P()
  }, [n, l]);
  let I = null;
  return t ? (I = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, a.jsx)(M, {
      party: t,
      shouldRenderQuestEntrypoint: o,
      registerQuestEntrypoint: f,
      unregisterQuestEntrypoint: C
    }, t.id)
  }) : (0, a.jsxs)("div", {
    className: O.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: O.emptyHeader,
      children: v.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: O.emptyText,
      variant: "text-sm/normal",
      children: v.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: I
  })) : (0, a.jsx)("div", {
    className: O.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}