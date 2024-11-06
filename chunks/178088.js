n.d(t, {
    k: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(274312),
    a = n(442837),
    o = n(524437),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(602478),
    m = n(2818),
    h = n(768943),
    f = n(742989),
    p = n(675478),
    g = n(581883),
    _ = n(585483),
    C = n(400445),
    E = n(153209),
    I = n(956961),
    x = n(903672),
    v = n(946443),
    N = n(264233),
    T = n(981631),
    S = n(388032);
function b(e) {
    let { onOpen: t, onClose: n, children: b, badgeState: A, popoutPosition: j, popoutAlign: Z } = e,
        { analyticsLocations: R } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [P, y] = r.useState(!1),
        [L, O] = (function () {
            let e = (0, a.e7)([g.Z], () => {
                var e, t;
                return null !== (t = null === (e = g.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : o.X.UNREADS;
            });
            return [
                e,
                r.useCallback((e) => {
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
        })(),
        { showTutorial: M, setSeenTutorial: k } = (function (e) {
            let t = (0, a.e7)([g.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = g.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = r.useCallback(() => {
                    p.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        p.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === o.X.UNREADS,
                setSeenTutorial: n
            };
        })(L),
        D = r.useCallback(() => {
            y(!1), P && (null == n || n());
        }, [n, P]),
        B = r.useCallback(() => {
            y(!P), P ? null == n || n() : null == t || t();
        }, [n, t, P]);
    r.useEffect(() => (_.S.subscribe(T.CkL.TOGGLE_INBOX, B), () => void _.S.unsubscribe(T.CkL.TOGGLE_INBOX, B)), [B]);
    let { showReminders: w } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: U, inInbox: F } = m.Z.useExperiment({ location: 'RecentsPopout' }),
        G = (0, a.e7)([h.Z], () => h.Z.hasOverdueReminder(), []) && U && F,
        { enabled: V } = d.Z.useExperiment({ location: 'RecentsPopout' });
    r.useEffect(() => {
        (((!w || (U && F)) && L === o.X.TODOS) || (L === o.X.BOOKMARKS && !(U || F))) && O(o.X.MENTIONS);
    });
    let H = r.useCallback(
        (e) => {
            !e.shiftKey && D();
        },
        [D]
    );
    return (0, i.jsx)(u.Gt, {
        value: R,
        children: (0, i.jsx)(s.Popout, {
            animation: s.Popout.Animation.NONE,
            position: j,
            align: Z,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: D,
            renderPopout: function () {
                return (0, i.jsx)(s.Dialog, {
                    'aria-label': S.intl.string(S.t.GSmTKC),
                    children:
                        L === o.X.FOR_YOU
                            ? (0, i.jsx)(E.Z, {
                                  setTab: O,
                                  badgeState: A,
                                  closePopout: D
                              })
                            : L === o.X.MENTIONS
                              ? (0, i.jsx)(x.Z, {
                                    setTab: O,
                                    onJump: H,
                                    badgeState: A,
                                    closePopout: D
                                })
                              : V && L === o.X.GAME_INVITES
                                ? (0, i.jsx)(N.Z, {
                                      setTab: O,
                                      badgeState: A,
                                      closePopout: D
                                  })
                                : w && L === o.X.TODOS
                                  ? (0, i.jsx)(I.Z, {
                                        setTab: O,
                                        onJump: H,
                                        closePopout: D
                                    })
                                  : U && F && L === o.X.BOOKMARKS
                                    ? (0, i.jsx)(C.Z, {
                                          setTab: O,
                                          badgeState: A,
                                          closePopout: D
                                      })
                                    : (0, i.jsx)(l.SV, {
                                          fallback: (0, i.jsx)(v.h, {
                                              setTab: O,
                                              closePopout: D,
                                              badgeState: A
                                          }),
                                          children: (0, i.jsx)(v.Z, {
                                              setTab: O,
                                              onJump: H,
                                              showTutorial: M,
                                              setSeenTutorial: k,
                                              closePopout: D,
                                              badgeState: A
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return b(B, n, e, G);
            }
        })
    });
}
