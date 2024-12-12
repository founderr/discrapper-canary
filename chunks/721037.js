var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(519938),
    u = r(317381),
    c = r(988980),
    d = r(917107),
    f = r(866885),
    _ = r(358221),
    h = r(241915),
    p = r(928518),
    m = r(210887),
    g = r(740492),
    E = r(442917),
    v = r(592125),
    I = r(366050),
    T = r(944486),
    b = r(451478),
    y = r(823379),
    S = r(981631),
    A = r(918559),
    N = r(354459);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let R = {
        [S.NYg.VIDEO]: E.Z,
        [S.NYg.EMBED_IFRAME]: f.Z
    },
    O = {
        minWidth: N.Rv[N.cL.VIDEO],
        maxWidth: N.$i[N.cL.VIDEO]
    };
class D extends s.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: n, pipWidth: r, maxX: i, maxY: s, theme: o, dockedRect: l, appContext: u, roundCorners: c } = this.props;
        return (0, a.jsx)(h.Z, {
            pictureInPictureComponents: R,
            selectedPIPWindow: e,
            pipWindows: n,
            pipWidth: r,
            maxX: i,
            maxY: s,
            dockedRect: l,
            theme: o,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: u,
            roundCorners: c,
            resizeConfig: O
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'handleWindowMove', (e, n) => {
                l.Ao(e, n);
            }),
            C(this, 'handleWindowResize', (e) => {
                l.d7(e, N.cL.VIDEO);
            });
    }
}
n.Z = o.ZP.connectStores([p.Z, u.ZP, b.Z, m.Z, v.Z, T.Z, I.Z, _.Z, g.ZP], (e) => {
    var n, r, i, a;
    let s,
        { inPopoutWindow: o = !1 } = e,
        l = p.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
        f = u.ZP.getCurrentEmbeddedActivity(),
        h = null != f && !(0, d.Z)(f.channelId, v.Z, T.Z),
        E = u.ZP.getActivityPanelMode(),
        C = h && E === A.Ez.PANEL,
        R = null != f && (null === (n = _.Z.getSelectedParticipant(f.channelId)) || void 0 === n ? void 0 : n.type) === N.fO.ACTIVITY,
        O = b.Z.windowSize();
    if (o) {
        let e = p.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
        O =
            null == e
                ? O
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let D = o ? S.IlC.POPOUT : S.IlC.APP;
    s = o && h ? null : o || !l || h ? (null != f && C ? (null !== (r = I.Z.pipActivityWindow) && void 0 !== r ? r : I.Z.pipVideoWindow) : null !== (i = I.Z.pipVideoWindow) && void 0 !== i ? i : I.Z.pipActivityWindow) : null;
    let L = Array.from(I.Z.pipWindows.values()),
        x = I.Z.pipWidth(N.cL.VIDEO),
        w = L.find((e) => e.component === S.NYg.VIDEO),
        P = [w, L.find((e) => e.component === S.NYg.EMBED_IFRAME)].filter(y.lm),
        M = g.ZP.callChatSidebarWidth,
        k = T.Z.getVoiceChannelId(),
        U = T.Z.getChannelId() === k,
        B = null != k && _.Z.getChatOpen(k),
        G = C || R,
        Z = G && null != f && (0, c.q)(f.applicationId),
        F = !G && null != s && U && B;
    return {
        selectedPIPWindow: s,
        pipWindows: P,
        pipWidth: x,
        maxX: O.width - (F ? M : 0),
        maxY: O.height,
        theme: m.Z.theme,
        dockedRect: I.Z.getDockedRect(null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : ''),
        appContext: D,
        roundCorners: !Z
    };
})(D);
