n.d(t, {
  k: function() {
return M;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(349445),
  r = n(442837),
  l = n(524437),
  o = n(481060),
  c = n(100527),
  u = n(906732),
  d = n(602478),
  _ = n(121254),
  E = n(742989),
  I = n(675478),
  m = n(581883),
  T = n(585483),
  h = n(153209),
  N = n(180173),
  f = n(956961),
  C = n(903672),
  p = n(946443),
  g = n(264233),
  S = n(981631),
  A = n(689938);

function M(e) {
  let {
onOpen: t,
onClose: n,
children: M,
badgeState: R,
popoutPosition: O,
popoutAlign: x
  } = e, {
analyticsLocations: v
  } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER), [Z, L] = a.useState(!1), [P, D] = function() {
let e = (0, r.e7)([m.Z], () => {
  var e, t;
  return null !== (t = null === (e = m.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
});
return [
  e,
  a.useCallback(e => {
    I.hW.updateAsync('inbox', t => {
      if (t.currentTab === e)
        return !1;
      t.currentTab = e;
    }, I.fy.FREQUENT_USER_ACTION);
  }, [])
];
  }(), {
showTutorial: b,
setSeenTutorial: j
  } = function(e) {
let t = (0, r.e7)([m.Z], () => {
    var e, t;
    return null !== (t = null === (e = m.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
  }),
  n = a.useCallback(() => {
    I.hW.updateAsync('inbox', e => {
      e.viewedTutorial = !0;
    }, I.fy.INFREQUENT_USER_ACTION);
  }, []);
return {
  showTutorial: !t && e === l.X.UNREADS,
  setSeenTutorial: n
};
  }(P), U = a.useCallback(() => {
L(!1), Z && (null == n || n());
  }, [
n,
Z
  ]), y = a.useCallback(() => {
L(!Z), Z ? null == n || n() : null == t || t();
  }, [
n,
t,
Z
  ]), B = a.useCallback(() => {
y(), D(l.X.UNREADS);
  }, [
D,
y
  ]);
  a.useEffect(() => (T.S.subscribe(S.CkL.TOGGLE_INBOX_UNREADS_TAB, B), () => void T.S.unsubscribe(S.CkL.TOGGLE_INBOX_UNREADS_TAB, B)), [B]);
  let {
showReminders: k
  } = E.Z.useExperiment({
location: 'RecentsPopout'
  }, {
autoTrackExposure: !1
  }), {
enabled: G
  } = _.Z.useExperiment({
location: 'RecentsPopout'
  }, {
autoTrackExposure: !1
  }), {
enabled: F
  } = d.Z.useExperiment({
location: 'RecentsPopout'
  });
  a.useEffect(() => {
(!k && P === l.X.TODOS || !G && P === l.X.BOOKMARKS) && D(l.X.MENTIONS);
  });
  let w = a.useCallback(e => {
!e.shiftKey && U();
  }, [U]);
  return (0, i.jsx)(u.Gt, {
value: v,
children: (0, i.jsx)(o.Popout, {
  animation: o.Popout.Animation.NONE,
  position: O,
  align: x,
  autoInvert: !1,
  shouldShow: Z,
  onRequestClose: U,
  renderPopout: function() {
    return (0, i.jsx)(o.Dialog, {
      'aria-label': A.Z.Messages.INBOX,
      children: P === l.X.FOR_YOU ? (0, i.jsx)(h.Z, {
        setTab: D,
        badgeState: R,
        closePopout: U
      }) : P === l.X.MENTIONS ? (0, i.jsx)(C.Z, {
        setTab: D,
        onJump: w,
        badgeState: R,
        closePopout: U
      }) : F && P === l.X.GAME_INVITES ? (0, i.jsx)(g.Z, {
        setTab: D,
        badgeState: R,
        closePopout: U
      }) : G && P === l.X.BOOKMARKS ? (0, i.jsx)(N.Z, {
        setTab: D,
        onJump: w,
        closePopout: U
      }) : k && P === l.X.TODOS ? (0, i.jsx)(f.Z, {
        setTab: D,
        onJump: w,
        closePopout: U
      }) : (0, i.jsx)(s.SV, {
        fallback: (0, i.jsx)(p.h, {
          setTab: D,
          closePopout: U,
          badgeState: R
        }),
        children: (0, i.jsx)(p.Z, {
          setTab: D,
          onJump: w,
          showTutorial: b,
          setSeenTutorial: j,
          closePopout: U,
          badgeState: R
        })
      })
    });
  },
  ignoreModalClicks: !0,
  children: (e, t) => {
    let {
      isShown: n
    } = t;
    return M(y, n, e);
  }
})
  });
}