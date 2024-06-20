n.d(t, {
  k: function() {
    return f
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(349445),
  a = n(442837),
  r = n(524437),
  o = n(481060),
  c = n(100527),
  u = n(906732),
  d = n(602478),
  E = n(641051),
  _ = n(360629),
  I = n(675478),
  T = n(581883),
  N = n(585483),
  m = n(153209),
  h = n(881591),
  C = n(903672),
  S = n(946443),
  A = n(264233),
  p = n(981631),
  g = n(689938);

function f(e) {
  let {
    onOpen: t,
    onClose: n,
    children: f,
    badgeState: O,
    popoutPosition: R,
    popoutAlign: M
  } = e, {
    analyticsLocations: x
  } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER), [v, L] = i.useState(!1), [Z, P] = function() {
    let e = (0, a.e7)([T.Z], () => {
      var e, t;
      return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.X.UNREADS
    });
    return [e, i.useCallback(e => {
      I.hW.updateAsync("inbox", t => {
        if (t.currentTab === e) return !1;
        t.currentTab = e
      }, I.fy.FREQUENT_USER_ACTION)
    }, [])]
  }(), {
    showTutorial: D,
    setSeenTutorial: j
  } = function(e) {
    let t = (0, a.e7)([T.Z], () => {
        var e, t;
        return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = i.useCallback(() => {
        I.hW.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, I.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === r.X.UNREADS,
      setSeenTutorial: n
    }
  }(Z), U = i.useCallback(() => {
    L(!1), v && (null == n || n())
  }, [n, v]), y = i.useCallback(() => {
    L(!v), v ? null == n || n() : null == t || t()
  }, [n, t, v]), b = i.useCallback(() => {
    y(), P(r.X.UNREADS)
  }, [P, y]);
  i.useEffect(() => (N.S.subscribe(p.CkL.TOGGLE_INBOX_UNREADS_TAB, b), () => void N.S.unsubscribe(p.CkL.TOGGLE_INBOX_UNREADS_TAB, b)), [b]);
  let {
    showReminders: B
  } = E.Z.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), k = (0, _.sv)(), {
    enabled: G
  } = d.Z.useExperiment({
    location: "RecentsPopout"
  });
  i.useEffect(() => {
    !B && Z === r.X.TODOS && P(r.X.MENTIONS)
  });
  let F = i.useCallback(e => {
    !e.shiftKey && U()
  }, [U]);
  return (0, s.jsx)(u.Gt, {
    value: x,
    children: (0, s.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: R,
      align: M,
      autoInvert: !1,
      shouldShow: v,
      onRequestClose: U,
      renderPopout: function() {
        return (0, s.jsx)(o.Dialog, {
          "aria-label": g.Z.Messages.INBOX,
          children: Z === r.X.FOR_YOU && k ? (0, s.jsx)(m.Z, {
            setTab: P,
            badgeState: O,
            closePopout: U
          }) : Z === r.X.MENTIONS ? (0, s.jsx)(C.Z, {
            setTab: P,
            onJump: F,
            badgeState: O,
            closePopout: U
          }) : G && Z === r.X.GAME_INVITES ? (0, s.jsx)(A.Z, {
            setTab: P,
            badgeState: O,
            closePopout: U
          }) : B && Z === r.X.TODOS ? (0, s.jsx)(h.Z, {
            setTab: P,
            onJump: F,
            closePopout: U
          }) : (0, s.jsx)(l.SV, {
            fallback: (0, s.jsx)(S.h, {
              setTab: P,
              closePopout: U,
              badgeState: O
            }),
            children: (0, s.jsx)(S.Z, {
              setTab: P,
              onJump: F,
              showTutorial: D,
              setSeenTutorial: j,
              closePopout: U,
              badgeState: O
            })
          })
        })
      },
      ignoreModalClicks: !0,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return f(y, n, e)
      }
    })
  })
}