n.d(t, {
    k: function () {
        return b;
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
    T = n(400445),
    g = n(153209),
    S = n(956961),
    A = n(903672),
    v = n(946443),
    N = n(264233),
    O = n(981631),
    R = n(689938);
function C() {
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
function y(e) {
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
function b(e) {
    let { onOpen: t, onClose: n, children: r, badgeState: p, popoutPosition: m, popoutAlign: b } = e,
        { analyticsLocations: L } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER),
        [D, M] = a.useState(!1),
        [P, U] = C(),
        { showTutorial: w, setSeenTutorial: x } = y(P),
        G = a.useCallback(() => {
            M(!1), D && (null == n || n());
        }, [n, D]),
        k = a.useCallback(() => {
            M(!D), D ? null == n || n() : null == t || t();
        }, [n, t, D]);
    a.useEffect(() => (I.S.subscribe(O.CkL.TOGGLE_INBOX, k), () => void I.S.unsubscribe(O.CkL.TOGGLE_INBOX, k)), [k]);
    let { showReminders: B } = h.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: F, inInbox: Z } = E.Z.useExperiment({ location: 'RecentsPopout' }),
        V = (0, s.e7)([f.Z], () => f.Z.hasOverdueReminder(), []) && F && Z,
        { enabled: H } = _.Z.useExperiment({ location: 'RecentsPopout' });
    a.useEffect(() => {
        (((!B || (F && Z)) && P === l.X.TODOS) || (P === l.X.BOOKMARKS && !(F || Z))) && U(l.X.MENTIONS);
    });
    let Y = a.useCallback(
        (e) => {
            !e.shiftKey && G();
        },
        [G]
    );
    function j() {
        return (0, i.jsx)(u.Dialog, {
            'aria-label': R.Z.Messages.INBOX,
            children:
                P === l.X.FOR_YOU
                    ? (0, i.jsx)(g.Z, {
                          setTab: U,
                          badgeState: p,
                          closePopout: G
                      })
                    : P === l.X.MENTIONS
                      ? (0, i.jsx)(A.Z, {
                            setTab: U,
                            onJump: Y,
                            badgeState: p,
                            closePopout: G
                        })
                      : H && P === l.X.GAME_INVITES
                        ? (0, i.jsx)(N.Z, {
                              setTab: U,
                              badgeState: p,
                              closePopout: G
                          })
                        : B && P === l.X.TODOS
                          ? (0, i.jsx)(S.Z, {
                                setTab: U,
                                onJump: Y,
                                closePopout: G
                            })
                          : F && Z && P === l.X.BOOKMARKS
                            ? (0, i.jsx)(T.Z, {
                                  setTab: U,
                                  closePopout: G
                              })
                            : (0, i.jsx)(o.SV, {
                                  fallback: (0, i.jsx)(v.h, {
                                      setTab: U,
                                      closePopout: G,
                                      badgeState: p
                                  }),
                                  children: (0, i.jsx)(v.Z, {
                                      setTab: U,
                                      onJump: Y,
                                      showTutorial: w,
                                      setSeenTutorial: x,
                                      closePopout: G,
                                      badgeState: p
                                  })
                              })
        });
    }
    return (0, i.jsx)(d.Gt, {
        value: L,
        children: (0, i.jsx)(u.Popout, {
            animation: u.Popout.Animation.NONE,
            position: m,
            align: b,
            autoInvert: !1,
            shouldShow: D,
            onRequestClose: G,
            renderPopout: j,
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return r(k, n, e, V);
            }
        })
    });
}
