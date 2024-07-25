n.d(t, {
  P: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(524437),
  l = n(481060),
  o = n(675478),
  c = n(581883),
  u = n(689938),
  d = n(73131);

function _(e) {
  let {
onOpen: t,
onClose: n,
children: _,
popoutPosition: E,
popoutAlign: I
  } = e, [m, T] = a.useState(!1);
  (0, s.e7)([c.Z], () => {
var e, t;
return null !== (t = null === (e = c.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.Pr.ALL;
  }), a.useCallback(e => {
o.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, o.fy.FREQUENT_USER_ACTION);
  }, []);
  let h = a.useCallback(() => {
  T(!1), m && (null == n || n());
}, [
  n,
  m
]),
N = a.useCallback(() => {
  T(!m), m ? null == n || n() : null == t || t();
}, [
  n,
  t,
  m
]);
  return a.useCallback(e => {
!e.shiftKey && h();
  }, [h]), (0, i.jsx)(l.Popout, {
animation: l.Popout.Animation.NONE,
position: E,
align: I,
autoInvert: !1,
shouldShow: m,
onRequestClose: h,
renderPopout: function() {
  return (0, i.jsx)(l.Dialog, {
    'aria-label': u.Z.Messages.FOR_LATER,
    children: (0, i.jsx)('div', {
      className: d.container,
      children: 'Saved For Later'
    })
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return _(N, n, e);
}
  });
}