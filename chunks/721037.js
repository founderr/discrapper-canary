var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(519938),
    l = n(317381),
    u = n(988980),
    c = n(917107),
    d = n(866885),
    _ = n(358221),
    E = n(241915),
    f = n(928518),
    h = n(210887),
    p = n(740492),
    m = n(442917),
    I = n(592125),
    T = n(366050),
    g = n(944486),
    S = n(451478),
    A = n(823379),
    v = n(981631),
    N = n(918559),
    O = n(354459);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = {
    [v.NYg.VIDEO]: m.Z,
    [v.NYg.EMBED_IFRAME]: d.Z
};
class y extends a.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipType: n, pipWidth: r, maxX: a, maxY: o, theme: s, dockedRect: l, appContext: u, roundCorners: c } = this.props;
        return (0, i.jsx)(E.Z, {
            pictureInPictureComponents: C,
            selectedPIPWindow: e,
            pipWindows: t,
            pipType: n,
            pipWidth: r,
            maxX: a,
            maxY: o,
            dockedRect: l,
            theme: s,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: u,
            roundCorners: c
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleWindowMove', (e, t) => {
                s.Ao(e, t);
            }),
            R(this, 'handleWindowResize', (e) => {
                s.d7(e, this.props.pipType);
            });
    }
}
t.Z = o.ZP.connectStores([f.Z, l.ZP, S.Z, h.Z, I.Z, g.Z, T.Z, _.Z, p.ZP], (e) => {
    var t, n, r, i;
    let a,
        { inPopoutWindow: o = !1 } = e,
        s = f.Z.getWindowOpen(v.KJ3.CHANNEL_CALL_POPOUT),
        d = l.ZP.getCurrentEmbeddedActivity(),
        E = null != d && !(0, c.Z)(d.channelId, I.Z, g.Z),
        m = l.ZP.getActivityPanelMode(),
        R = E && m === N.Ez.PANEL,
        C = null != d && (null === (t = _.Z.getSelectedParticipant(d.channelId)) || void 0 === t ? void 0 : t.type) === O.fO.ACTIVITY,
        y = S.Z.windowSize();
    if (o) {
        let e = f.Z.getWindow(v.KJ3.CHANNEL_CALL_POPOUT);
        y =
            null == e
                ? y
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let b = o ? v.IlC.POPOUT : v.IlC.APP;
    a = o && E ? null : o || !s || E ? (null != d && R ? (null !== (n = T.Z.pipActivityWindow) && void 0 !== n ? n : T.Z.pipVideoWindow) : null !== (r = T.Z.pipVideoWindow) && void 0 !== r ? r : T.Z.pipActivityWindow) : null;
    let L = O.cL.VIDEO,
        D = Array.from(T.Z.pipWindows.values()),
        M = T.Z.pipWidth(L),
        P = D.find((e) => e.component === v.NYg.VIDEO),
        U = [P, D.find((e) => e.component === v.NYg.EMBED_IFRAME)].filter(A.lm),
        w = p.ZP.callChatSidebarWidth,
        x = g.Z.getVoiceChannelId(),
        G = g.Z.getChannelId() === x,
        k = null != x && _.Z.getChatOpen(x),
        B = R || C,
        F = B && null != d && (0, u.q)(d.applicationId),
        Z = !B && null != a && G && k;
    return {
        selectedPIPWindow: a,
        pipWindows: U,
        pipWidth: M,
        pipType: L,
        maxX: y.width - (Z ? w : 0),
        maxY: y.height,
        theme: h.Z.theme,
        dockedRect: T.Z.getDockedRect(null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : ''),
        appContext: b,
        roundCorners: !F
    };
})(y);
