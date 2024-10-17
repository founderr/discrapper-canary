n.d(t, {
    k: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(349445),
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
    f = n(585483),
    h = n(400445),
    N = n(153209),
    p = n(956961),
    C = n(903672),
    g = n(946443),
    S = n(264233),
    A = n(981631),
    x = n(689938);
function R(e) {
    let { onOpen: t, onClose: n, children: R, badgeState: O, popoutPosition: v, popoutAlign: M } = e,
        { analyticsLocations: L } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [Z, b] = a.useState(!1),
        [P, D] = (function () {
            let e = (0, r.e7)([T.Z], () => {
                var e, t;
                return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
            });
            return [
                e,
                a.useCallback((e) => {
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
        { showTutorial: j, setSeenTutorial: U } = (function (e) {
            let t = (0, r.e7)([T.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = T.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = a.useCallback(() => {
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
        })(P),
        y = a.useCallback(() => {
            b(!1), Z && (null == n || n());
        }, [n, Z]),
        B = a.useCallback(() => {
            b(!Z), Z ? null == n || n() : null == t || t();
        }, [n, t, Z]);
    a.useEffect(() => (f.S.subscribe(A.CkL.TOGGLE_INBOX, B), () => void f.S.unsubscribe(A.CkL.TOGGLE_INBOX, B)), [B]);
    let { showReminders: k } = I.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: G, inInbox: F } = _.Z.useExperiment({ location: 'RecentsPopout' }),
        w = (0, r.e7)([E.Z], () => E.Z.hasOverdueReminder(), []) && G && F,
        { enabled: V } = d.Z.useExperiment({ location: 'RecentsPopout' });
    a.useEffect(() => {
        (((!k || (G && F)) && P === l.X.TODOS) || (P === l.X.BOOKMARKS && !(G || F))) && D(l.X.MENTIONS);
    });
    let H = a.useCallback(
        (e) => {
            !e.shiftKey && y();
        },
        [y]
    );
    return (0, i.jsx)(u.Gt, {
        value: L,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: v,
            align: M,
            autoInvert: !1,
            shouldShow: Z,
            onRequestClose: y,
            renderPopout: function () {
                return (0, i.jsx)(o.Dialog, {
                    'aria-label': x.Z.Messages.INBOX,
                    children:
                        P === l.X.FOR_YOU
                            ? (0, i.jsx)(N.Z, {
                                  setTab: D,
                                  badgeState: O,
                                  closePopout: y
                              })
                            : P === l.X.MENTIONS
                              ? (0, i.jsx)(C.Z, {
                                    setTab: D,
                                    onJump: H,
                                    badgeState: O,
                                    closePopout: y
                                })
                              : V && P === l.X.GAME_INVITES
                                ? (0, i.jsx)(S.Z, {
                                      setTab: D,
                                      badgeState: O,
                                      closePopout: y
                                  })
                                : k && P === l.X.TODOS
                                  ? (0, i.jsx)(p.Z, {
                                        setTab: D,
                                        onJump: H,
                                        closePopout: y
                                    })
                                  : G && F && P === l.X.BOOKMARKS
                                    ? (0, i.jsx)(h.Z, {
                                          setTab: D,
                                          badgeState: O,
                                          closePopout: y
                                      })
                                    : (0, i.jsx)(s.SV, {
                                          fallback: (0, i.jsx)(g.h, {
                                              setTab: D,
                                              closePopout: y,
                                              badgeState: O
                                          }),
                                          children: (0, i.jsx)(g.Z, {
                                              setTab: D,
                                              onJump: H,
                                              showTutorial: j,
                                              setSeenTutorial: U,
                                              closePopout: y,
                                              badgeState: O
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return R(B, n, e, w);
            }
        })
    });
}
