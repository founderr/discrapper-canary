n.d(t, {
    k: function () {
        return S;
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
    _ = n(742989),
    E = n(675478),
    I = n(581883),
    m = n(585483),
    T = n(153209),
    h = n(956961),
    N = n(903672),
    C = n(946443),
    f = n(264233),
    p = n(981631),
    g = n(689938);
function S(e) {
    let { onOpen: t, onClose: n, children: S, badgeState: A, popoutPosition: R, popoutAlign: O } = e,
        { analyticsLocations: x } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [M, v] = s.useState(!1),
        [L, Z] = (function () {
            let e = (0, r.e7)([I.Z], () => {
                var e, t;
                return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
            });
            return [
                e,
                s.useCallback((e) => {
                    E.hW.updateAsync(
                        'inbox',
                        (t) => {
                            if (t.currentTab === e) return !1;
                            t.currentTab = e;
                        },
                        E.fy.FREQUENT_USER_ACTION
                    );
                }, [])
            ];
        })(),
        { showTutorial: P, setSeenTutorial: D } = (function (e) {
            let t = (0, r.e7)([I.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = I.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = s.useCallback(() => {
                    E.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        E.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === l.X.UNREADS,
                setSeenTutorial: n
            };
        })(L),
        b = s.useCallback(() => {
            v(!1), M && (null == n || n());
        }, [n, M]),
        j = s.useCallback(() => {
            v(!M), M ? null == n || n() : null == t || t();
        }, [n, t, M]),
        U = s.useCallback(() => {
            j(), Z(l.X.UNREADS);
        }, [Z, j]);
    s.useEffect(() => (m.S.subscribe(p.CkL.TOGGLE_INBOX_UNREADS_TAB, U), () => void m.S.unsubscribe(p.CkL.TOGGLE_INBOX_UNREADS_TAB, U)), [U]);
    let { showReminders: y } = _.Z.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }),
        { enabled: B } = d.Z.useExperiment({ location: 'RecentsPopout' });
    s.useEffect(() => {
        ((!y && L === l.X.TODOS) || L === l.X.BOOKMARKS) && Z(l.X.MENTIONS);
    });
    let k = s.useCallback(
        (e) => {
            !e.shiftKey && b();
        },
        [b]
    );
    return (0, i.jsx)(u.Gt, {
        value: x,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: R,
            align: O,
            autoInvert: !1,
            shouldShow: M,
            onRequestClose: b,
            renderPopout: function () {
                return (0, i.jsx)(o.Dialog, {
                    'aria-label': g.Z.Messages.INBOX,
                    children:
                        L === l.X.FOR_YOU
                            ? (0, i.jsx)(T.Z, {
                                  setTab: Z,
                                  badgeState: A,
                                  closePopout: b
                              })
                            : L === l.X.MENTIONS
                              ? (0, i.jsx)(N.Z, {
                                    setTab: Z,
                                    onJump: k,
                                    badgeState: A,
                                    closePopout: b
                                })
                              : B && L === l.X.GAME_INVITES
                                ? (0, i.jsx)(f.Z, {
                                      setTab: Z,
                                      badgeState: A,
                                      closePopout: b
                                  })
                                : y && L === l.X.TODOS
                                  ? (0, i.jsx)(h.Z, {
                                        setTab: Z,
                                        onJump: k,
                                        closePopout: b
                                    })
                                  : (0, i.jsx)(a.SV, {
                                        fallback: (0, i.jsx)(C.h, {
                                            setTab: Z,
                                            closePopout: b,
                                            badgeState: A
                                        }),
                                        children: (0, i.jsx)(C.Z, {
                                            setTab: Z,
                                            onJump: k,
                                            showTutorial: P,
                                            setSeenTutorial: D,
                                            closePopout: b,
                                            badgeState: A
                                        })
                                    })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return S(j, n, e);
            }
        })
    });
}
