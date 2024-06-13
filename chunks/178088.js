"use strict";
n.r(t), n.d(t, {
  RecentsPopout: function() {
    return g
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("349445"),
  i = n("442837"),
  r = n("524437"),
  o = n("481060"),
  u = n("100527"),
  d = n("906732"),
  c = n("602478"),
  f = n("641051"),
  E = n("360629"),
  _ = n("675478"),
  T = n("581883"),
  m = n("585483"),
  I = n("153209"),
  N = n("881591"),
  p = n("903672"),
  h = n("946443"),
  S = n("264233"),
  C = n("981631"),
  A = n("689938");

function g(e) {
  let {
    onOpen: t,
    onClose: n,
    children: g,
    badgeState: M,
    popoutPosition: R,
    popoutAlign: O
  } = e, {
    analyticsLocations: v
  } = (0, d.default)(u.default.NOTIFICATION_CENTER), [x, L] = a.useState(!1), [P, D] = function() {
    let e = (0, i.useStateFromStores)([T.default], () => {
      var e, t;
      return null !== (t = null === (e = T.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
    });
    return [e, a.useCallback(e => {
      _.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
        if (t.currentTab === e) return !1;
        t.currentTab = e
      }, _.UserSettingsDelay.FREQUENT_USER_ACTION)
    }, [])]
  }(), {
    showTutorial: y,
    setSeenTutorial: U
  } = function(e) {
    let t = (0, i.useStateFromStores)([T.default], () => {
        var e, t;
        return null !== (t = null === (e = T.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = a.useCallback(() => {
        _.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, _.UserSettingsDelay.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === r.InboxTab.UNREADS,
      setSeenTutorial: n
    }
  }(P), j = a.useCallback(() => {
    L(!1), x && (null == n || n())
  }, [n, x]), b = a.useCallback(() => {
    L(!x), x ? null == n || n() : null == t || t()
  }, [n, t, x]), G = a.useCallback(() => {
    b(), D(r.InboxTab.UNREADS)
  }, [D, b]);
  a.useEffect(() => (m.ComponentDispatch.subscribe(C.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, G), () => void m.ComponentDispatch.unsubscribe(C.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, G)), [G]);
  let {
    showReminders: F
  } = f.default.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), B = (0, E.useInDesktopNotificationCenterExperiment)(), {
    enabled: k
  } = c.default.useExperiment({
    location: "RecentsPopout"
  });
  a.useEffect(() => {
    !F && P === r.InboxTab.TODOS && D(r.InboxTab.MENTIONS)
  });
  let w = a.useCallback(e => {
    !e.shiftKey && j()
  }, [j]);
  return (0, s.jsx)(d.AnalyticsLocationProvider, {
    value: v,
    children: (0, s.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: R,
      align: O,
      autoInvert: !1,
      shouldShow: x,
      onRequestClose: j,
      renderPopout: function() {
        return (0, s.jsx)(o.Dialog, {
          "aria-label": A.default.Messages.INBOX,
          children: P === r.InboxTab.FOR_YOU && B ? (0, s.jsx)(I.default, {
            setTab: D,
            badgeState: M,
            closePopout: j
          }) : P === r.InboxTab.MENTIONS ? (0, s.jsx)(p.default, {
            setTab: D,
            onJump: w,
            badgeState: M,
            closePopout: j
          }) : k && P === r.InboxTab.GAME_INVITES ? (0, s.jsx)(S.default, {
            setTab: D,
            badgeState: M,
            closePopout: j
          }) : F && P === r.InboxTab.TODOS ? (0, s.jsx)(N.default, {
            setTab: D,
            onJump: w,
            closePopout: j
          }) : (0, s.jsx)(l.ErrorBoundary, {
            fallback: (0, s.jsx)(h.UnreadsCrashed, {
              setTab: D,
              closePopout: j,
              badgeState: M
            }),
            children: (0, s.jsx)(h.default, {
              setTab: D,
              onJump: w,
              showTutorial: y,
              setSeenTutorial: U,
              closePopout: j,
              badgeState: M
            })
          })
        })
      },
      ignoreModalClicks: !0,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return g(b, n, e)
      }
    })
  })
}