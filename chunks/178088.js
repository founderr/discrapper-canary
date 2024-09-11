n.d(t, {
    k: function () {
        return x;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(349445),
    r = n(442837),
    l = n(524437),
    o = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(602478),
    _ = n(2818),
    E = n(768943),
    I = n(742989),
    m = n(675478),
    T = n(581883),
    N = n(585483),
    h = n(70956),
    C = n(400445),
    f = n(153209),
    p = n(956961),
    g = n(903672),
    S = n(946443),
    A = n(264233),
    R = n(981631),
    O = n(689938);
function x(e) {
    let { onOpen: t, onClose: n, children: x, badgeState: M, popoutPosition: v, popoutAlign: L } = e,
        { analyticsLocations: Z } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [P, D] = s.useState(!1),
        [b, j] = (function () {
            let e = (0, r.e7)([T.Z], () => {
                var e, t;
                return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
            });
            return [
                e,
                s.useCallback((e) => {
                    m.hW.updateAsync(
                        'inbox',
                        (t) => {
                            if (t.currentTab === e) return !1;
                            t.currentTab = e;
                        },
                        m.fy.FREQUENT_USER_ACTION
                    );
                }, [])
            ];
        })(),
        { showTutorial: U, setSeenTutorial: y } = (function (e) {
            let t = (0, r.e7)([T.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = s.useCallback(() => {
                    m.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        m.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === l.X.UNREADS,
                setSeenTutorial: n
            };
        })(b),
        B = s.useCallback(() => {
            D(!1), P && (null == n || n());
        }, [n, P]),
        k = s.useCallback(() => {
            D(!P), P ? null == n || n() : null == t || t();
        }, [n, t, P]),
        F = s.useCallback(() => {
            k(), j(l.X.UNREADS);
        }, [j, k]);
    s.useEffect(() => (N.S.subscribe(R.CkL.TOGGLE_INBOX_UNREADS_TAB, F), () => void N.S.unsubscribe(R.CkL.TOGGLE_INBOX_UNREADS_TAB, F)), [F]);
    let [G, w] = s.useState(new Date());
    s.useEffect(() => {
        let e = setInterval(() => w(new Date()), h.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let { showReminders: V } = I.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: H, inInbox: Y } = _.Z.useExperiment({ location: 'RecentsPopout' }),
        W = (0, r.e7)([E.Z], () => E.Z.hasOverdueReminder(G), [G]) && H && Y,
        { enabled: K } = d.Z.useExperiment({ location: 'RecentsPopout' });
    s.useEffect(() => {
        (((!V || (H && Y)) && b === l.X.TODOS) || (b === l.X.BOOKMARKS && !(H || Y))) && j(l.X.MENTIONS);
    });
    let z = s.useCallback(
        (e) => {
            !e.shiftKey && B();
        },
        [B]
    );
    return (0, i.jsx)(u.Gt, {
        value: Z,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: v,
            align: L,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: B,
            renderPopout: function () {
                return (0, i.jsx)(o.Dialog, {
                    'aria-label': O.Z.Messages.INBOX,
                    children:
                        b === l.X.FOR_YOU
                            ? (0, i.jsx)(f.Z, {
                                  setTab: j,
                                  badgeState: M,
                                  closePopout: B
                              })
                            : b === l.X.MENTIONS
                              ? (0, i.jsx)(g.Z, {
                                    setTab: j,
                                    onJump: z,
                                    badgeState: M,
                                    closePopout: B
                                })
                              : K && b === l.X.GAME_INVITES
                                ? (0, i.jsx)(A.Z, {
                                      setTab: j,
                                      badgeState: M,
                                      closePopout: B
                                  })
                                : V && b === l.X.TODOS
                                  ? (0, i.jsx)(p.Z, {
                                        setTab: j,
                                        onJump: z,
                                        closePopout: B
                                    })
                                  : H && Y && b === l.X.BOOKMARKS
                                    ? (0, i.jsx)(C.Z, {
                                          setTab: j,
                                          closePopout: B,
                                          throttledNow: G
                                      })
                                    : (0, i.jsx)(a.SV, {
                                          fallback: (0, i.jsx)(S.h, {
                                              setTab: j,
                                              closePopout: B,
                                              badgeState: M
                                          }),
                                          children: (0, i.jsx)(S.Z, {
                                              setTab: j,
                                              onJump: z,
                                              showTutorial: U,
                                              setSeenTutorial: y,
                                              closePopout: B,
                                              badgeState: M
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return x(k, n, e, W);
            }
        })
    });
}
