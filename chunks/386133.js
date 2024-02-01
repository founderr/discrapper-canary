"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("483366"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("777273"),
  E = n("843823"),
  _ = n("697218"),
  h = n("392453"),
  C = n("599110"),
  I = n("718517"),
  T = n("744923"),
  S = n("333705"),
  m = n("749554"),
  p = n("62659"),
  A = n("36512"),
  g = n("638441"),
  N = n("49111"),
  R = n("988268"),
  O = n("782340"),
  L = n("561368");
let v = 15 * I.default.Millis.MINUTE,
  M = (0, g.default)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: i,
      registerQuestEntrypoint: l,
      unregisterQuestEntrypoint: r,
      shouldRenderQuestEntrypoint: u
    } = e, c = (0, a.jsx)(m.default, {
      party: t,
      onUserContextMenu: n
    }), f = (0, a.jsx)(S.default, {
      party: t,
      onChannelContextMenu: i,
      registerQuestEntrypoint: l,
      unregisterQuestEntrypoint: r,
      shouldRenderQuestEntrypoint: u
    }), {
      partiedMembers: E,
      applicationStreams: _,
      currentActivities: h,
      voiceChannels: I
    } = t, T = E.length, g = _.length, O = h.length, M = I.length > 0, P = s.useCallback(() => {
      let e = h.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === R.ApplicationTypes.GAME
      }).map(e => e.game.name);
      C.default.track(N.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        num_users: T,
        num_streams: g,
        num_activities: O,
        in_voice_channel: M,
        games_detected: e
      })
    }, [T, g, O, M, h]), D = o(P, v);
    return null != c || null != f ? (0, a.jsx)(d.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, a.jsx)(A.default, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(p.default, {
          ...e,
          onMouseEnter: D,
          "aria-haspopup": "menu",
          className: L.itemCard,
          active: n,
          children: (0, a.jsxs)("div", {
            children: [c, f]
          })
        })
      }
    }) : null
  }),
  P = l.throttle(() => f.fetchUserAffinities(!1), 3e5);

function D() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: i,
    currentUser: l
  } = (0, u.useStateFromStoresObject)([h.default, E.default, _.default], () => ({
    nowPlayingCards: h.default.nowPlayingCards,
    loaded: h.default.loaded,
    needsRefresh: E.default.needsRefresh(),
    fetching: E.default.getFetching(),
    currentUser: _.default.getCurrentUser()
  })), r = s.useRef(new Map), o = s.useCallback((e, t) => {
    let n = r.current.get(e);
    return null == n || n === t
  }, []), f = s.useCallback((e, t) => {
    r.current.set(e, t)
  }, []), C = s.useCallback(e => {
    r.current.delete(e)
  }, []);
  s.useEffect(() => (c.default.wait(() => T.mount()), () => c.default.wait(() => T.unmount())), [null == l ? void 0 : l.id]), s.useEffect(() => {
    n && !i && P()
  }, [n, i]);
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
    className: L.emptyCard,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: L.emptyHeader,
      children: O.default.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "none",
      className: L.emptyText,
      variant: "text-sm/normal",
      children: O.default.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, a.jsx)(a.Fragment, {
    children: I
  })) : (0, a.jsx)("div", {
    className: L.emptyCard,
    children: (0, a.jsx)(d.Spinner, {})
  })
}