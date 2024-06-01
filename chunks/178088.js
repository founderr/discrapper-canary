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
  S = n("153209"),
  g = n("881591"),
  N = n("903672"),
  _ = n("946443"),
  I = n("264233"),
  T = n("981631"),
  C = n("689938");

function A(e) {
  let {
    onOpen: t,
    onClose: n,
    children: A,
    badgeState: v,
    popoutPosition: x,
    popoutAlign: R
  } = e, {
    analyticsLocations: M
  } = (0, d.default)(u.default.NOTIFICATION_CENTER), [b, O] = l.useState(!1), [y, L] = function() {
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
    setSeenTutorial: D
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
  }(y), F = l.useCallback(() => {
    O(!1), b && (null == n || n())
  }, [n, b]), P = l.useCallback(() => {
    O(!b), b ? null == n || n() : null == t || t()
  }, [n, t, b]), k = l.useCallback(() => {
    P(), L(r.InboxTab.UNREADS)
  }, [L, P]);
  l.useEffect(() => (p.ComponentDispatch.subscribe(T.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, k), () => void p.ComponentDispatch.unsubscribe(T.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, k)), [k]);
  let {
    showReminders: U
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
    !U && y === r.InboxTab.TODOS && L(r.InboxTab.MENTIONS)
  });
  let B = l.useCallback(e => {
    !e.shiftKey && F()
  }, [F]);
  return (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: M,
    children: (0, a.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: x,
      align: R,
      autoInvert: !1,
      shouldShow: b,
      onRequestClose: F,
      renderPopout: function() {
        return (0, a.jsx)(o.Dialog, {
          "aria-label": C.default.Messages.INBOX,
          children: y === r.InboxTab.FOR_YOU && w ? (0, a.jsx)(S.default, {
            setTab: L,
            badgeState: v,
            closePopout: F
          }) : y === r.InboxTab.MENTIONS ? (0, a.jsx)(N.default, {
            setTab: L,
            onJump: B,
            badgeState: v,
            closePopout: F
          }) : G && y === r.InboxTab.GAME_INVITES ? (0, a.jsx)(I.default, {
            setTab: L,
            badgeState: v,
            closePopout: F
          }) : U && y === r.InboxTab.TODOS ? (0, a.jsx)(g.default, {
            setTab: L,
            onJump: B,
            closePopout: F
          }) : (0, a.jsx)(s.ErrorBoundary, {
            fallback: (0, a.jsx)(_.UnreadsCrashed, {
              setTab: L,
              closePopout: F,
              badgeState: v
            }),
            children: (0, a.jsx)(_.default, {
              setTab: L,
              onJump: B,
              showTutorial: j,
              setSeenTutorial: D,
              closePopout: F,
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
        return A(P, n, e)
      }
    })
  })
}