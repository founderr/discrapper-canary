"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(519938),
  a = n(317381),
  l = n(917107),
  u = n(866885),
  _ = n(358221),
  c = n(928518),
  d = n(210887),
  E = n(442917),
  I = n(592125),
  T = n(366050),
  h = n(944486),
  f = n(451478),
  S = n(518774),
  A = n(823379),
  N = n(981631),
  m = n(918559),
  O = n(354459);
let p = {
  [N.NYg.VIDEO]: E.Z,
  [N.NYg.EMBED_IFRAME]: u.Z
};
class R extends r.PureComponent {
  render() {
    let {
      selectedPIPWindow: e,
      pipWindows: t,
      maxX: n,
      maxY: r,
      theme: s,
      dockedRect: o,
      appContext: a,
      roundCorners: l
    } = this.props;
    return (0, i.jsx)(S.Z, {
      pictureInPictureComponents: p,
      selectedPIPWindow: e,
      pipWindows: t,
      maxX: n,
      maxY: r,
      dockedRect: o,
      theme: s,
      onWindowMove: this.handleWindowMove,
      appContext: a,
      roundCorners: l
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "handleWindowMove", i = (e, t) => {
      o.Ao(e, t)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = s.ZP.connectStores([c.Z, a.ZP, f.Z, d.Z, I.Z, h.Z, T.Z, _.Z], e => {
  var t, n, i, r;
  let s;
  let o, {
      showInPopoutWindow: u = !1,
      disallowTextActivity: E = !1
    } = e,
    S = c.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
    p = a.ZP.getCurrentEmbeddedActivity(),
    R = null != p && !(0, l.Z)(p.channelId, I.Z, h.Z),
    g = a.ZP.getActivityPanelMode(),
    C = null != p && R && g === m.Ez.PANEL,
    v = null != p && (null === (t = _.Z.getSelectedParticipant(p.channelId)) || void 0 === t ? void 0 : t.type) === O.fO.ACTIVITY,
    L = f.Z.windowSize();
  if (S && (E && C || !C)) {
    let e = c.Z.getWindow(N.KJ3.CHANNEL_CALL_POPOUT);
    L = null == e ? L : {
      width: e.innerWidth,
      height: e.innerHeight
    }
  }!E && C ? s = N.IlC.APP : u && (s = N.IlC.POPOUT), o = E && R ? null : R || !S || u ? null != p && g === m.Ez.PANEL && R ? null !== (n = T.Z.pipActivityWindow) && void 0 !== n ? n : T.Z.pipVideoWindow : null !== (i = T.Z.pipVideoWindow) && void 0 !== i ? i : T.Z.pipActivityWindow : null;
  let D = Array.from(T.Z.pipWindows.values()),
    M = D.find(e => e.component === N.NYg.VIDEO);
  return {
    selectedPIPWindow: o,
    pipWindows: [M, D.find(e => e.component === N.NYg.EMBED_IFRAME)].filter(A.lm),
    maxX: L.width,
    maxY: L.height,
    theme: d.Z.theme,
    dockedRect: T.Z.getDockedRect(null !== (r = null == o ? void 0 : o.id) && void 0 !== r ? r : ""),
    appContext: s,
    roundCorners: !v
  }
})(R)