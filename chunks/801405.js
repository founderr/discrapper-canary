n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(570140),
    a = n(475179),
    o = n(367907),
    c = n(358221),
    u = n(788983),
    d = n(268353),
    h = n(944486),
    m = n(626135),
    p = n(585483),
    f = n(358085),
    g = n(228488),
    C = n(981631),
    x = n(336496);
let v = () => {
    s.Z.wait(() => u.xv(C.KJ3.CHANNEL_CALL_POPOUT));
};
function _(e) {
    let { channel: t, appContext: n, popoutOpen: s, popoutWindow: u, currentWindow: _ } = e,
        I = n === C.IlC.POPOUT,
        E = l.useRef(null),
        { currentLayout: b, mode: S } = (0, r.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    i = n === C.IlC.POPOUT;
                i && (e = C.WtW.VIDEO);
                let l = e === C.WtW.VIDEO ? c.Z.getLayout(t.id, n) : C.AEg.MINIMUM;
                return (
                    i && l !== C.AEg.FULL_SCREEN && (l = C.AEg.NO_CHAT),
                    {
                        currentLayout: l,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        Z = (0, r.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        E.current = S;
    });
    let T = l.useRef(b),
        { currentDocument: N, rootNode: j } = l.useMemo(() => {
            let e = null != u && I ? u.document : document,
                t = _.document.getElementById('app-mount');
            return {
                currentWindow: _,
                currentDocument: e,
                rootNode: t
            };
        }, [u, I, _]),
        A = s && !I,
        y = S === C.WtW.VIDEO && Z && !A,
        P = l.useCallback(
            (e, i) => {
                i !== e && (a.Z.updateLayout(t.id, i, n), i === C.AEg.FULL_SCREEN && t.isPrivate() && p.S.dispatch(C.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        M = l.useCallback(
            (e) => {
                if (null != j)
                    e === C.AEg.FULL_SCREEN &&
                        (P(e, T.current),
                        (0, g.Pr)((e) => {
                            T.current = e;
                        }, N));
            },
            [N, P, j]
        ),
        R = l.useCallback(
            (e) => () => {
                null != j && (e !== C.AEg.FULL_SCREEN ? ((T.current = e), P(e, C.AEg.FULL_SCREEN), (0, g.Dj)(j)) : M(e));
            },
            [P, M, j]
        );
    return (l.useEffect(() => {
        let e = () => {
            null != j && !(0, g.rB)(j, N) && b === C.AEg.FULL_SCREEN && R(b)();
        };
        return (
            N.addEventListener(g.NO, e),
            () => {
                N.removeEventListener(g.NO, e);
            }
        );
    }, [N, b, R, j]),
    l.useEffect(
        () => (
            m.default.track(C.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: I ? 'popout' : b,
                ...(0, o.AB)(t.id)
            }),
            () => {
                !(I && (0, f.isMac)()) && M(b);
            }
        ),
        [b, I]
    ),
    l.useEffect(() => {
        null != j && E.current === C.WtW.VIDEO && S === C.WtW.VOICE && (0, g.Pr)(j, N);
    }, [N, S, E, j]),
    l.useEffect(() => {
        !Z && I && v();
    }, [Z, I]),
    y)
        ? (0, i.jsx)(d.Z, {
              themeable: !1,
              node: j,
              guestWindow: u,
              className: x.rightTrayIcon,
              onClick: R(b)
          })
        : null;
}
