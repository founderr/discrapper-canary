n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(519938),
    o = n(317381),
    l = n(988980),
    u = n(917107),
    c = n(866885),
    d = n(358221),
    f = n(241915),
    _ = n(928518),
    p = n(210887),
    h = n(740492),
    m = n(442917),
    g = n(592125),
    E = n(366050),
    v = n(944486),
    I = n(451478),
    b = n(823379),
    S = n(981631),
    T = n(918559),
    y = n(354459);
function A(e, t, n) {
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
let N = {
        [S.NYg.VIDEO]: m.Z,
        [S.NYg.EMBED_IFRAME]: c.Z
    },
    C = {
        minWidth: y.Rv[y.cL.VIDEO],
        maxWidth: y.$i[y.cL.VIDEO]
    };
class R extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: s, dockedRect: o, appContext: l, roundCorners: u } = this.props;
        return (0, r.jsx)(f.Z, {
            pictureInPictureComponents: N,
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
            roundCorners: u,
            resizeConfig: C
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleWindowMove', (e, t) => {
                s.Ao(e, t);
            }),
            A(this, 'handleWindowResize', (e) => {
                s.d7(e, y.cL.VIDEO);
            });
    }
}
t.Z = a.ZP.connectStores([_.Z, o.ZP, I.Z, p.Z, g.Z, v.Z, E.Z, d.Z, h.ZP], (e) => {
    var t, n, r, i;
    let a,
        { inPopoutWindow: s = !1 } = e,
        c = _.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
        f = o.ZP.getCurrentEmbeddedActivity(),
        m = null != f && !(0, u.Z)(f.channelId, g.Z, v.Z),
        A = o.ZP.getActivityPanelMode(),
        N = m && A === T.Ez.PANEL,
        C = null != f && (null === (t = d.Z.getSelectedParticipant(f.channelId)) || void 0 === t ? void 0 : t.type) === y.fO.ACTIVITY,
        R = I.Z.windowSize();
    if (s) {
        let e = _.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
        R =
            null == e
                ? R
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let O = s ? S.IlC.POPOUT : S.IlC.APP;
    a = s && m ? null : s || !c || m ? (null != f && N ? (null !== (n = E.Z.pipActivityWindow) && void 0 !== n ? n : E.Z.pipVideoWindow) : null !== (r = E.Z.pipVideoWindow) && void 0 !== r ? r : E.Z.pipActivityWindow) : null;
    let D = Array.from(E.Z.pipWindows.values()),
        L = E.Z.pipWidth(y.cL.VIDEO),
        x = D.find((e) => e.component === S.NYg.VIDEO),
        w = [x, D.find((e) => e.component === S.NYg.EMBED_IFRAME)].filter(b.lm),
        M = h.ZP.callChatSidebarWidth,
        P = v.Z.getVoiceChannelId(),
        k = v.Z.getChannelId() === P,
        U = null != P && d.Z.getChatOpen(P),
        B = N || C,
        G = B && null != f && (0, l.q)(f.applicationId),
        Z = !B && null != a && k;
    return {
        selectedPIPWindow: a,
        pipWindows: w,
        pipWidth: L,
        maxX: R.width - (Z && U ? M : 0),
        maxY: R.height,
        theme: p.Z.theme,
        dockedRect: E.Z.getDockedRect(null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : ''),
        appContext: O,
        roundCorners: !G
    };
})(R);
