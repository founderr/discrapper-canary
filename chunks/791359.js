n.d(t, {
  Z: function() {
    return D
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(801077),
  p = n(626135),
  T = n(70956),
  N = n(225559),
  S = n(910436),
  C = n(203028),
  A = n(358924),
  f = n(292140),
  Z = n(525296),
  v = n(981631),
  L = n(674563),
  O = n(689938),
  R = n(519851);
let x = 15 * T.Z.Millis.MINUTE,
  M = (0, Z.Z)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: a
    } = e, r = (0, i.jsx)(C.Z, {
      party: t,
      onUserContextMenu: n
    }), c = (0, i.jsx)(S.Z, {
      party: t,
      onChannelContextMenu: l,
      quest: a
    }), {
      partiedMembers: d,
      applicationStreams: E,
      currentActivities: h,
      voiceChannels: _
    } = t, I = d.length, m = E.length, g = h.length, T = _.length > 0, N = s.useCallback(() => {
      let e = h.filter(e => {
        var t, n;
        return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === L.wW.GAME
      }).map(e => e.game.name);
      p.default.track(v.rMx.NOW_PLAYING_CARD_HOVERED, {
        num_users: I,
        num_streams: m,
        num_activities: g,
        in_voice_channel: T,
        games_detected: e
      })
    }, [I, m, g, T, h]), Z = o()(N, x);
    return null != r || null != c ? (0, i.jsx)(u.Popout, {
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, i.jsx)(f.Z, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, i.jsx)(A.Z, {
          ...e,
          onMouseEnter: Z,
          "aria-haspopup": "menu",
          className: R.itemCard,
          active: n,
          children: (0, i.jsxs)("div", {
            children: [r, c]
          })
        })
      }
    }) : null
  }),
  P = a().throttle(() => _.W(!1), 3e5);

function D() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: a
  } = (0, c.cj)([g.Z, I.Z, m.default], () => ({
    nowPlayingCards: g.Z.nowPlayingCards,
    loaded: g.Z.loaded,
    needsRefresh: I.Z.needsRefresh(),
    fetching: I.Z.getFetching(),
    currentUser: m.default.getCurrentUser()
  })), r = (0, c.e7)([E.Z], () => E.Z.quests);
  s.useEffect(() => (d.Z.wait(() => N.L()), () => d.Z.wait(() => N.v())), [null == a ? void 0 : a.id]), s.useEffect(() => {
    n && !l && P()
  }, [n, l]);
  let o = s.useMemo(() => {
      let t = new Map,
        n = new Set;
      for (let i of e) i.party.currentActivities.forEach(e => {
        let {
          game: s
        } = e;
        if (null != s) {
          let e = (0, h.lQ)(r, s.id);
          null != e && !n.has(e.id) && (t.set(i.party.id, e), n.add(e.id))
        }
      });
      return t
    }, [e, r]),
    _ = null;
  return t ? (_ = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, i.jsx)(M, {
      party: t,
      quest: o.get(t.id)
    }, t.id)
  }) : (0, i.jsxs)("div", {
    className: R.emptyCard,
    children: [(0, i.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: R.emptyHeader,
      children: O.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
    }), (0, i.jsx)(u.Text, {
      color: "none",
      className: R.emptyText,
      variant: "text-sm/normal",
      children: O.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
    })]
  }), (0, i.jsx)(i.Fragment, {
    children: _
  })) : (0, i.jsx)("div", {
    className: R.emptyCard,
    children: (0, i.jsx)(u.Spinner, {})
  })
}