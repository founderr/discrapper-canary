n.d(t, {
  k: function() {
    return S
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
  _ = n(742989),
  E = n(675478),
  I = n(581883),
  m = n(585483),
  T = n(153209),
  h = n(881591),
  N = n(903672),
  f = n(946443),
  p = n(264233),
  C = n(981631),
  g = n(689938);

function S(e) {
  let {
    onOpen: t,
    onClose: n,
    children: S,
    badgeState: A,
    popoutPosition: R,
    popoutAlign: O
  } = e, {
    analyticsLocations: x
  } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER), [M, v] = a.useState(!1), [L, Z] = function() {
    let e = (0, l.e7)([I.Z], () => {
      var e, t;
      return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.X.UNREADS
    });
    return [e, a.useCallback(e => {
      E.hW.updateAsync("inbox", t => {
        if (t.currentTab === e) return !1;
        t.currentTab = e
      }, E.fy.FREQUENT_USER_ACTION)
    }, [])]
  }(), {
    showTutorial: P,
    setSeenTutorial: b
  } = function(e) {
    let t = (0, l.e7)([I.Z], () => {
        var e, t;
        return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = a.useCallback(() => {
        E.hW.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, E.fy.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === r.X.UNREADS,
      setSeenTutorial: n
    }
  }(L), D = a.useCallback(() => {
    v(!1), M && (null == n || n())
  }, [n, M]), j = a.useCallback(() => {
    v(!M), M ? null == n || n() : null == t || t()
  }, [n, t, M]), U = a.useCallback(() => {
    j(), Z(r.X.UNREADS)
  }, [Z, j]);
  a.useEffect(() => (m.S.subscribe(C.CkL.TOGGLE_INBOX_UNREADS_TAB, U), () => void m.S.unsubscribe(C.CkL.TOGGLE_INBOX_UNREADS_TAB, U)), [U]);
  let {
    showReminders: y
  } = _.Z.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: B
  } = u.Z.useExperiment({
    location: "RecentsPopout"
  });
  a.useEffect(() => {
    !y && L === r.X.TODOS && Z(r.X.MENTIONS)
  });
  let k = a.useCallback(e => {
    !e.shiftKey && D()
  }, [D]);
  return (0, i.jsx)(d.Gt, {
    value: x,
    children: (0, i.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: R,
      align: O,
      autoInvert: !1,
      shouldShow: M,
      onRequestClose: D,
      renderPopout: function() {
        return (0, i.jsx)(o.Dialog, {
          "aria-label": g.Z.Messages.INBOX,
          children: L === r.X.FOR_YOU ? (0, i.jsx)(T.Z, {
            setTab: Z,
            badgeState: A,
            closePopout: D
          }) : L === r.X.MENTIONS ? (0, i.jsx)(N.Z, {
            setTab: Z,
            onJump: k,
            badgeState: A,
            closePopout: D
          }) : B && L === r.X.GAME_INVITES ? (0, i.jsx)(p.Z, {
            setTab: Z,
            badgeState: A,
            closePopout: D
          }) : y && L === r.X.TODOS ? (0, i.jsx)(h.Z, {
            setTab: Z,
            onJump: k,
            closePopout: D
          }) : (0, i.jsx)(s.SV, {
            fallback: (0, i.jsx)(f.h, {
              setTab: Z,
              closePopout: D,
              badgeState: A
            }),
            children: (0, i.jsx)(f.Z, {
              setTab: Z,
              onJump: k,
              showTutorial: P,
              setSeenTutorial: b,
              closePopout: D,
              badgeState: A
            })
          })
        })
      },
      ignoreModalClicks: !0,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return S(j, n, e)
      }
    })
  })
}