n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(570140),
    r = n(475179),
    o = n(367907),
    c = n(358221),
    u = n(788983),
    d = n(268353),
    h = n(944486),
    p = n(626135),
    m = n(585483),
    _ = n(358085),
    f = n(228488),
    E = n(981631),
    g = n(336496);
let C = () => {
    l.Z.wait(() => u.xv(E.KJ3.CHANNEL_CALL_POPOUT));
};
function I(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: u, currentWindow: I } = e,
        T = n === E.IlC.POPOUT,
        x = s.useRef(null),
        { currentLayout: S, mode: v } = (0, a.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    i = n === E.IlC.POPOUT;
                i && (e = E.WtW.VIDEO);
                let s = e === E.WtW.VIDEO ? c.Z.getLayout(t.id, n) : E.AEg.MINIMUM;
                return (
                    i && s !== E.AEg.FULL_SCREEN && (s = E.AEg.NO_CHAT),
                    {
                        currentLayout: s,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        N = (0, a.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
    s.useEffect(() => {
        x.current = v;
    });
    let A = s.useRef(S),
        { currentDocument: Z, rootNode: M } = s.useMemo(() => {
            let e = null != u && T ? u.document : document,
                t = I.document.getElementById('app-mount');
            return {
                currentWindow: I,
                currentDocument: e,
                rootNode: t
            };
        }, [u, T, I]),
        b = l && !T,
        R = v === E.WtW.VIDEO && N && !b,
        L = s.useCallback(
            (e, i) => {
                i !== e && (r.Z.updateLayout(t.id, i, n), i === E.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(E.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        P = s.useCallback(
            (e) => {
                if (null != M)
                    e === E.AEg.FULL_SCREEN &&
                        (L(e, A.current),
                        (0, f.Pr)((e) => {
                            A.current = e;
                        }, Z));
            },
            [Z, L, M]
        ),
        j = s.useCallback(
            (e) => () => {
                null != M && (e !== E.AEg.FULL_SCREEN ? ((A.current = e), L(e, E.AEg.FULL_SCREEN), (0, f.Dj)(M)) : P(e));
            },
            [L, P, M]
        );
    return (s.useEffect(() => {
        let e = () => {
            null != M && !(0, f.rB)(M, Z) && S === E.AEg.FULL_SCREEN && j(S)();
        };
        return (
            Z.addEventListener(f.NO, e),
            () => {
                Z.removeEventListener(f.NO, e);
            }
        );
    }, [Z, S, j, M]),
    s.useEffect(
        () => (
            p.default.track(E.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: T ? 'popout' : S,
                ...(0, o.AB)(t.id)
            }),
            () => {
                !(T && (0, _.isMac)()) && P(S);
            }
        ),
        [S, T]
    ),
    s.useEffect(() => {
        null != M && x.current === E.WtW.VIDEO && v === E.WtW.VOICE && (0, f.Pr)(M, Z);
    }, [Z, v, x, M]),
    s.useEffect(() => {
        !N && T && C();
    }, [N, T]),
    R)
        ? (0, i.jsx)(d.Z, {
              themeable: !1,
              node: M,
              guestWindow: u,
              className: g.rightTrayIcon,
              onClick: j(S)
          })
        : null;
}
