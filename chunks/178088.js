"use strict";
n.r(t), n.d(t, {
  RecentsPopout: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("349445"),
  i = n("442837"),
  r = n("524437"),
  o = n("481060"),
  u = n("100527"),
  d = n("906732"),
  c = n("602478"),
  f = n("641051"),
  h = n("360629"),
  E = n("675478"),
  m = n("581883"),
  p = n("585483"),
  g = n("153209"),
  S = n("881591"),
  N = n("903672"),
  _ = n("946443"),
  T = n("264233"),
  I = n("981631"),
  C = n("689938");

function A(e) {
  let {
    onOpen: t,
    onClose: n,
    children: A,
    badgeState: v,
    popoutPosition: M,
    popoutAlign: R
  } = e, {
    analyticsLocations: x
  } = (0, d.default)(u.default.NOTIFICATION_CENTER), [L, O] = l.useState(!1), [b, y] = function() {
    let e = (0, i.useStateFromStores)([m.default], () => {
      var e, t;
      return null !== (t = null === (e = m.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
    });
    return [e, l.useCallback(e => {
      E.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
        if (t.currentTab === e) return !1;
        t.currentTab = e
      }, E.UserSettingsDelay.FREQUENT_USER_ACTION)
    }, [])]
  }(), {
    showTutorial: j,
    setSeenTutorial: F
  } = function(e) {
    let t = (0, i.useStateFromStores)([m.default], () => {
        var e, t;
        return null !== (t = null === (e = m.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = l.useCallback(() => {
        E.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === r.InboxTab.UNREADS,
      setSeenTutorial: n
    }
  }(b), D = l.useCallback(() => {
    O(!1), L && (null == n || n())
  }, [n, L]), U = l.useCallback(() => {
    O(!L), L ? null == n || n() : null == t || t()
  }, [n, t, L]), P = l.useCallback(() => {
    U(), y(r.InboxTab.UNREADS)
  }, [y, U]);
  l.useEffect(() => (p.ComponentDispatch.subscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, P), () => void p.ComponentDispatch.unsubscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, P)), [P]);
  let {
    showReminders: k
  } = f.default.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), w = (0, h.useInDesktopNotificationCenterExperiment)(), {
    enabled: G
  } = c.default.useExperiment({
    location: "RecentsPopout"
  });
  l.useEffect(() => {
    !k && b === r.InboxTab.TODOS && y(r.InboxTab.MENTIONS)
  });
  let B = l.useCallback(e => {
    !e.shiftKey && D()
  }, [D]);
  return (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: x,
    children: (0, a.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: M,
      align: R,
      autoInvert: !1,
      shouldShow: L,
      onRequestClose: D,
      renderPopout: function() {
        return (0, a.jsx)(o.Dialog, {
          "aria-label": C.default.Messages.INBOX,
          children: b === r.InboxTab.FOR_YOU && w ? (0, a.jsx)(g.default, {
            setTab: y,
            badgeState: v,
            closePopout: D
          }) : b === r.InboxTab.MENTIONS ? (0, a.jsx)(N.default, {
            setTab: y,
            onJump: B,
            badgeState: v,
            closePopout: D
          }) : G && b === r.InboxTab.GAME_INVITES ? (0, a.jsx)(T.default, {
            setTab: y,
            badgeState: v,
            closePopout: D
          }) : k && b === r.InboxTab.TODOS ? (0, a.jsx)(S.default, {
            setTab: y,
            onJump: B,
            closePopout: D
          }) : (0, a.jsx)(s.ErrorBoundary, {
            fallback: (0, a.jsx)(_.UnreadsCrashed, {
              setTab: y,
              closePopout: D,
              badgeState: v
            }),
            children: (0, a.jsx)(_.default, {
              setTab: y,
              onJump: B,
              showTutorial: j,
              setSeenTutorial: F,
              closePopout: D,
              badgeState: v
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