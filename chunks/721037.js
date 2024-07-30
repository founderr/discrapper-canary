n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(519938),
  o = n(317381),
  l = n(988980),
  u = n(917107),
  c = n(866885),
  d = n(358221),
  _ = n(241915),
  E = n(928518),
  f = n(210887),
  h = n(442917),
  p = n(592125),
  m = n(366050),
  I = n(944486),
  T = n(451478),
  g = n(823379),
  S = n(981631),
  A = n(918559),
  N = n(354459);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let O = {
  [S.NYg.VIDEO]: h.Z,
  [S.NYg.EMBED_IFRAME]: c.Z
};
class R extends i.PureComponent {
  render() {
let {
  selectedPIPWindow: e,
  pipWindows: t,
  pipWidth: n,
  maxX: i,
  maxY: a,
  theme: s,
  dockedRect: o,
  appContext: l,
  roundCorners: u
} = this.props;
return (0, r.jsx)(_.Z, {
  pictureInPictureComponents: O,
  selectedPIPWindow: e,
  pipWindows: t,
  pipWidth: n,
  maxX: i,
  maxY: a,
  dockedRect: o,
  theme: s,
  onWindowMove: this.handleWindowMove,
  onWindowResize: this.handleWindowResize,
  appContext: l,
  roundCorners: u
});
  }
  constructor(...e) {
super(...e), v(this, 'handleWindowMove', (e, t) => {
  s.Ao(e, t);
}), v(this, 'handleWindowResize', (e, t) => {
  s.d7(t);
});
  }
}
t.Z = a.ZP.connectStores([
  E.Z,
  o.ZP,
  T.Z,
  f.Z,
  p.Z,
  I.Z,
  m.Z,
  d.Z
], e => {
  var t, n, r, i;
  let a;
  let s, {
  showInPopoutWindow: c = !1,
  disallowTextActivity: _ = !1
} = e,
h = E.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
v = o.ZP.getCurrentEmbeddedActivity(),
O = null != v && !(0, u.Z)(v.channelId, p.Z, I.Z),
R = o.ZP.getActivityPanelMode(),
C = null != v && O && R === A.Ez.PANEL,
y = null != v && (null === (t = d.Z.getSelectedParticipant(v.channelId)) || void 0 === t ? void 0 : t.type) === N.fO.ACTIVITY,
D = T.Z.windowSize();
  if (h && (_ && C || !C)) {
let e = E.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
D = null == e ? D : {
  width: e.innerWidth,
  height: e.innerHeight
};
  }!_ && C ? a = S.IlC.APP : c && (a = S.IlC.POPOUT), s = _ && O ? null : O || !h || c ? null != v && R === A.Ez.PANEL && O ? null !== (n = m.Z.pipActivityWindow) && void 0 !== n ? n : m.Z.pipVideoWindow : null !== (r = m.Z.pipVideoWindow) && void 0 !== r ? r : m.Z.pipActivityWindow : null;
  let L = Array.from(m.Z.pipWindows.values()),
b = m.Z.pipWidth,
M = L.find(e => e.component === S.NYg.VIDEO),
P = [
  M,
  L.find(e => e.component === S.NYg.EMBED_IFRAME)
].filter(g.lm),
U = (C || y) && null != v && (0, l.q)(v.applicationId);
  return {
selectedPIPWindow: s,
pipWindows: P,
pipWidth: b,
maxX: D.width,
maxY: D.height,
theme: f.Z.theme,
dockedRect: m.Z.getDockedRect(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : ''),
appContext: a,
roundCorners: !U
  };
})(R);