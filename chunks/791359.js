n.d(t, {
  Z: function() {
    return D
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(570140),
  E = n(569984),
  h = n(918701),
  _ = n(93127),
  I = n(814443),
  m = n(594174),
  T = n(801077),
  g = n(626135),
  p = n(70956),
  N = n(225559),
  S = n(910436),
  C = n(203028),
  A = n(358924),
  f = n(292140),
  Z = n(525296),
  L = n(981631),
  O = n(674563),
  v = n(689938),
  R = n(519851);
let P = 15 * p.Z.Millis.MINUTE,
  x = (0, Z.Z)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: a
    } = e, r = (0, s.jsx)(C.Z, {
      party: t,
      onUserContextMenu: n
    }), c = (0, s.jsx)(S.Z, {
      party: t,
      onChannelContextMenu: l,
      quest: a
    }), {
      partiedMembers: d,
      applicationStreams: E,
      currentActivities: h,
      voiceChannels: _
    } = t, I = d.length, m = E.length, T = h.length, p = _.length > 0, N = i.useCallback(() => {
      let e = h.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === O.wW.GAME
      }).map(e => e.game.name);
      g.default.track(L.rMx.NOW_PLAYING_CARD_HOVERED, {
        num_users: I,
        num_streams: m,
        num_activities: T,
        in_voice_channel: p,
        games_detected: e
      })
    }, [I, m, T, p, h]), Z = o()(N, P);
    return null != r || null != c ? (0, s.jsx)(u.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, s.jsx)(f.Z, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, s.jsx)(A.Z, {
          ...e,
          onMouseEnter: Z,
          "aria-haspopup": "menu",
          className: R.itemCard,
          active: n,
          children: (0, s.jsxs)("div", {
            children: [r, c]
          })
        })
      }
    }) : null
  }),
  M = a().throttle(() => _.W(!1), 3e5);

function D() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: a
  } = (0, c.cj)([T.Z, I.Z, m.default], () => ({
    nowPlayingCards: T.Z.nowPlayingCards,
    loaded: T.Z.loaded,
    needsRefresh: I.Z.needsRefresh(),
    fetching: I.Z.getFetching(),
    currentUser: m.default.getCurrentUser()
  })), r = (0, c.e7)([E.Z], () => E.Z.quests);
  i.useEffect(() => (d.Z.wait(() => N.L()), () => d.Z.wait(() => N.v())), [null == a ? void 0 : a.id]), i.useEffect(() => {
    n && !l && M()
  }, [n, l]);
  let o = i.useMemo(() => {
      let t = new Map,
        n = new Set;
      for (let s of e) s.party.currentActivities.forEach(e => {
        let {
          game: i
        } = e;
        if (null != i) {
          let e = (0, h.lQ)(r, i.id);
          null != e && !n.has(e.id) && (t.set(s.party.id, e), n.add(e.id))
        }
      });
      return t
    }, [e, r]),
    _ = null;
  return t ? (_ = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, s.jsx)(x, {
      party: t,
      quest: o.get(t.id)
    }, t.id)
  }) : (0, s.jsxs)("div", {
    className: R.emptyCard,
    children: [(0, s.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: R.emptyHeader,
      children: v.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, s.jsx)(u.Text, {
      color: "none",
      className: R.emptyText,
      variant: "text-sm/normal",
      children: v.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, s.jsx)(s.Fragment, {
    children: _
  })) : (0, s.jsx)("div", {
    className: R.emptyCard,
    children: (0, s.jsx)(u.Spinner, {})
  })
}