n.d(t, {
    k: function () {
        return O;
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
    h = n(585483),
    N = n(70956),
    f = n(400445),
    C = n(153209),
    p = n(956961),
    g = n(903672),
    A = n(946443),
    S = n(264233),
    x = n(981631),
    R = n(689938);
function O(e) {
    let { onOpen: t, onClose: n, children: O, badgeState: M, popoutPosition: v, popoutAlign: L } = e,
        { analyticsLocations: Z } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [P, b] = s.useState(!1),
        [D, j] = (function () {
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
        })(D),
        B = s.useCallback(() => {
            b(!1), P && (null == n || n());
        }, [n, P]),
        k = s.useCallback(() => {
            b(!P), P ? null == n || n() : null == t || t();
        }, [n, t, P]);
    s.useEffect(() => (h.S.subscribe(x.CkL.TOGGLE_INBOX, k), () => void h.S.unsubscribe(x.CkL.TOGGLE_INBOX, k)), [k]);
    let [F, G] = s.useState(new Date());
    s.useEffect(() => {
        let e = setInterval(() => G(new Date()), N.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let { showReminders: w } = I.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: V, inInbox: H } = _.Z.useExperiment({ location: 'RecentsPopout' }),
        Y = (0, r.e7)([E.Z], () => E.Z.hasOverdueReminder(F), [F]) && V && H,
        { enabled: W } = d.Z.useExperiment({ location: 'RecentsPopout' });
    s.useEffect(() => {
        (((!w || (V && H)) && D === l.X.TODOS) || (D === l.X.BOOKMARKS && !(V || H))) && j(l.X.MENTIONS);
    });
    let K = s.useCallback(
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
                    'aria-label': R.Z.Messages.INBOX,
                    children:
                        D === l.X.FOR_YOU
                            ? (0, i.jsx)(C.Z, {
                                  setTab: j,
                                  badgeState: M,
                                  closePopout: B
                              })
                            : D === l.X.MENTIONS
                              ? (0, i.jsx)(g.Z, {
                                    setTab: j,
                                    onJump: K,
                                    badgeState: M,
                                    closePopout: B
                                })
                              : W && D === l.X.GAME_INVITES
                                ? (0, i.jsx)(S.Z, {
                                      setTab: j,
                                      badgeState: M,
                                      closePopout: B
                                  })
                                : w && D === l.X.TODOS
                                  ? (0, i.jsx)(p.Z, {
                                        setTab: j,
                                        onJump: K,
                                        closePopout: B
                                    })
                                  : V && H && D === l.X.BOOKMARKS
                                    ? (0, i.jsx)(f.Z, {
                                          setTab: j,
                                          closePopout: B,
                                          throttledNow: F
                                      })
                                    : (0, i.jsx)(a.SV, {
                                          fallback: (0, i.jsx)(A.h, {
                                              setTab: j,
                                              closePopout: B,
                                              badgeState: M
                                          }),
                                          children: (0, i.jsx)(A.Z, {
                                              setTab: j,
                                              onJump: K,
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
                return O(k, n, e, Y);
            }
        })
    });
}
