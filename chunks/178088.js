n.d(t, {
  k: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(349445),
  l = n(442837),
  r = n(524437),
  o = n(481060),
  c = n(100527),
  d = n(906732),
  u = n(602478),
  _ = n(360629),
  E = n(742989),
  m = n(675478),
  I = n(581883),
  T = n(585483),
  h = n(153209),
  N = n(881591),
  f = n(903672),
  p = n(946443),
  C = n(264233),
  g = n(981631),
  S = n(689938);

function A(e) {
  let {
    onOpen: t,
    onClose: n,
    children: A,
    badgeState: R,
    popoutPosition: O,
    popoutAlign: x
  } = e, {
    analyticsLocations: M
  } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER), [v, L] = a.useState(!1), [Z, P] = function() {
    let e = (0, l.e7)([I.Z], () => {
      var e, t;
      return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.X.UNREADS
    });
    return [e, a.useCallback(e => {
      m.hW.updateAsync("inbox", t => {
        if (t.currentTab === e) return !1;
        t.currentTab = e
      }, m.fy.FREQUENT_USER_ACTION)
    }, [])]
  }(), {
    showTutorial: b,
    setSeenTutorial: D
  } = function(e) {
    let t = (0, l.e7)([I.Z], () => {
        var e, t;
        return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = a.useCallback(() => {
        m.hW.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, m.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === r.X.UNREADS,
      setSeenTutorial: n
    }
  }(Z), j = a.useCallback(() => {
    L(!1), v && (null == n || n())
  }, [n, v]), U = a.useCallback(() => {
    L(!v), v ? null == n || n() : null == t || t()
  }, [n, t, v]), y = a.useCallback(() => {
    U(), P(r.X.UNREADS)
  }, [P, U]);
  a.useEffect(() => (T.S.subscribe(g.CkL.TOGGLE_INBOX_UNREADS_TAB, y), () => void T.S.unsubscribe(g.CkL.TOGGLE_INBOX_UNREADS_TAB, y)), [y]);
  let {
    showReminders: B
  } = E.Z.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), k = (0, _.sv)(), {
    enabled: G
  } = u.Z.useExperiment({
    location: "RecentsPopout"
  });
  a.useEffect(() => {
    !B && Z === r.X.TODOS && P(r.X.MENTIONS)
  });
  let F = a.useCallback(e => {
    !e.shiftKey && j()
  }, [j]);
  return (0, i.jsx)(d.Gt, {
    value: M,
    children: (0, i.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: O,
      align: x,
      autoInvert: !1,
      shouldShow: v,
      onRequestClose: j,
      renderPopout: function() {
        return (0, i.jsx)(o.Dialog, {
          "aria-label": S.Z.Messages.INBOX,
          children: Z === r.X.FOR_YOU && k ? (0, i.jsx)(h.Z, {
            setTab: P,
            badgeState: R,
            closePopout: j
          }) : Z === r.X.MENTIONS ? (0, i.jsx)(f.Z, {
            setTab: P,
            onJump: F,
            badgeState: R,
            closePopout: j
          }) : G && Z === r.X.GAME_INVITES ? (0, i.jsx)(C.Z, {
            setTab: P,
            badgeState: R,
            closePopout: j
          }) : B && Z === r.X.TODOS ? (0, i.jsx)(N.Z, {
            setTab: P,
            onJump: F,
            closePopout: j
          }) : (0, i.jsx)(s.SV, {
            fallback: (0, i.jsx)(p.h, {
              setTab: P,
              closePopout: j,
              badgeState: R
            }),
            children: (0, i.jsx)(p.Z, {
              setTab: P,
              onJump: F,
              showTutorial: b,
              setSeenTutorial: D,
              closePopout: j,
              badgeState: R
            })
          })
        })
      },
      ignoreModalClicks: !0,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return A(U, n, e)
      }
    })
  })
}