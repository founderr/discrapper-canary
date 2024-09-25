n.d(t, {
    k: function () {
        return L;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(349445),
    s = n(442837),
    l = n(524437),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(602478),
    E = n(2818),
    f = n(768943),
    h = n(742989),
    p = n(675478),
    m = n(581883),
    I = n(585483),
    T = n(70956),
    g = n(400445),
    S = n(153209),
    A = n(956961),
    v = n(903672),
    N = n(946443),
    O = n(264233),
    R = n(981631),
    C = n(689938);
function y() {
    let e = (0, s.e7)([m.Z], () => {
        var e, t;
        return null !== (t = null === (e = m.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
    });
    return [
        e,
        a.useCallback((e) => {
            p.hW.updateAsync(
                'inbox',
                (t) => {
                    if (t.currentTab === e) return !1;
                    t.currentTab = e;
                },
                p.fy.FREQUENT_USER_ACTION
            );
        }, [])
    ];
}
function b(e) {
    let t = (0, s.e7)([m.Z], () => {
            var e, t;
            return null !== (t = null === (e = m.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
        }),
        n = a.useCallback(() => {
            p.hW.updateAsync(
                'inbox',
                (e) => {
                    e.viewedTutorial = !0;
                },
                p.fy.INFREQUENT_USER_ACTION
            );
        }, []);
    return {
        showTutorial: !t && e === l.X.UNREADS,
        setSeenTutorial: n
    };
}
function L(e) {
    let { onOpen: t, onClose: n, children: r, badgeState: p, popoutPosition: m, popoutAlign: L } = e,
        { analyticsLocations: D } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER),
        [M, P] = a.useState(!1),
        [U, w] = y(),
        { showTutorial: x, setSeenTutorial: G } = b(U),
        k = a.useCallback(() => {
            P(!1), M && (null == n || n());
        }, [n, M]),
        B = a.useCallback(() => {
            P(!M), M ? null == n || n() : null == t || t();
        }, [n, t, M]);
    a.useEffect(() => (I.S.subscribe(R.CkL.TOGGLE_INBOX, B), () => void I.S.unsubscribe(R.CkL.TOGGLE_INBOX, B)), [B]);
    let [F, Z] = a.useState(new Date());
    a.useEffect(() => {
        let e = setInterval(() => Z(new Date()), T.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let { showReminders: V } = h.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: H, inInbox: Y } = E.Z.useExperiment({ location: 'RecentsPopout' }),
        j = (0, s.e7)([f.Z], () => f.Z.hasOverdueReminder(F), [F]) && H && Y,
        { enabled: W } = _.Z.useExperiment({ location: 'RecentsPopout' });
    a.useEffect(() => {
        (((!V || (H && Y)) && U === l.X.TODOS) || (U === l.X.BOOKMARKS && !(H || Y))) && w(l.X.MENTIONS);
    });
    let K = a.useCallback(
        (e) => {
            !e.shiftKey && k();
        },
        [k]
    );
    function z() {
        return (0, i.jsx)(u.Dialog, {
            'aria-label': C.Z.Messages.INBOX,
            children:
                U === l.X.FOR_YOU
                    ? (0, i.jsx)(S.Z, {
                          setTab: w,
                          badgeState: p,
                          closePopout: k
                      })
                    : U === l.X.MENTIONS
                      ? (0, i.jsx)(v.Z, {
                            setTab: w,
                            onJump: K,
                            badgeState: p,
                            closePopout: k
                        })
                      : W && U === l.X.GAME_INVITES
                        ? (0, i.jsx)(O.Z, {
                              setTab: w,
                              badgeState: p,
                              closePopout: k
                          })
                        : V && U === l.X.TODOS
                          ? (0, i.jsx)(A.Z, {
                                setTab: w,
                                onJump: K,
                                closePopout: k
                            })
                          : H && Y && U === l.X.BOOKMARKS
                            ? (0, i.jsx)(g.Z, {
                                  setTab: w,
                                  closePopout: k,
                                  throttledNow: F
                              })
                            : (0, i.jsx)(o.SV, {
                                  fallback: (0, i.jsx)(N.h, {
                                      setTab: w,
                                      closePopout: k,
                                      badgeState: p
                                  }),
                                  children: (0, i.jsx)(N.Z, {
                                      setTab: w,
                                      onJump: K,
                                      showTutorial: x,
                                      setSeenTutorial: G,
                                      closePopout: k,
                                      badgeState: p
                                  })
                              })
        });
    }
    return (0, i.jsx)(d.Gt, {
        value: D,
        children: (0, i.jsx)(u.Popout, {
            animation: u.Popout.Animation.NONE,
            position: m,
            align: L,
            autoInvert: !1,
            shouldShow: M,
            onRequestClose: k,
            renderPopout: z,
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return r(B, n, e, j);
            }
        })
    });
}
