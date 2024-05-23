"use strict";
n.r(t), n.d(t, {
  RecentsPopout: function() {
    return A
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
  m = n("581883"),
  T = n("585483"),
  I = n("153209"),
  p = n("881591"),
  h = n("903672"),
  N = n("946443"),
  S = n("264233"),
  C = n("981631"),
  g = n("689938");

function A(e) {
  let {
    onOpen: t,
    onClose: n,
    children: A,
    badgeState: M,
    popoutPosition: R,
    popoutAlign: v
  } = e, {
    analyticsLocations: O
  } = (0, d.default)(u.default.NOTIFICATION_CENTER), [x, L] = a.useState(!1), [D, P] = function() {
    let e = (0, i.useStateFromStores)([m.default], () => {
      var e, t;
      return null !== (t = null === (e = m.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
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
    let t = (0, i.useStateFromStores)([m.default], () => {
        var e, t;
        return null !== (t = null === (e = m.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
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
  }(D), j = a.useCallback(() => {
    L(!1), x && (null == n || n())
  }, [n, x]), b = a.useCallback(() => {
    L(!x), x ? null == n || n() : null == t || t()
  }, [n, t, x]), B = a.useCallback(() => {
    b(), P(r.InboxTab.UNREADS)
  }, [P, b]);
  a.useEffect(() => (T.ComponentDispatch.subscribe(C.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, B), () => void T.ComponentDispatch.unsubscribe(C.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, B)), [B]);
  let {
    showReminders: F
  } = f.default.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), G = (0, E.useInDesktopNotificationCenterExperiment)(), {
    enabled: k
  } = c.default.useExperiment({
    location: "RecentsPopout"
  });
  a.useEffect(() => {
    !F && D === r.InboxTab.TODOS && P(r.InboxTab.MENTIONS)
  });
  let w = a.useCallback(e => {
    !e.shiftKey && j()
  }, [j]);
  return (0, s.jsx)(d.AnalyticsLocationProvider, {
    value: O,
    children: (0, s.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: R,
      align: v,
      autoInvert: !1,
      shouldShow: x,
      onRequestClose: j,
      renderPopout: function() {
        return (0, s.jsx)(o.Dialog, {
          "aria-label": g.default.Messages.INBOX,
          children: D === r.InboxTab.FOR_YOU && G ? (0, s.jsx)(I.default, {
            setTab: P,
            badgeState: M,
            closePopout: j
          }) : D === r.InboxTab.MENTIONS ? (0, s.jsx)(h.default, {
            setTab: P,
            onJump: w,
            badgeState: M,
            closePopout: j
          }) : k && D === r.InboxTab.GAME_INVITES ? (0, s.jsx)(S.default, {
            setTab: P,
            badgeState: M,
            closePopout: j
          }) : F && D === r.InboxTab.TODOS ? (0, s.jsx)(p.default, {
            setTab: P,
            onJump: w,
            closePopout: j
          }) : (0, s.jsx)(l.ErrorBoundary, {
            fallback: (0, s.jsx)(N.UnreadsCrashed, {
              setTab: P,
              closePopout: j,
              badgeState: M
            }),
            children: (0, s.jsx)(N.default, {
              setTab: P,
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
        return A(b, n, e)
      }
    })
  })
}