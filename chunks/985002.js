n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120);
var s = n(470079),
    a = n(881052),
    r = n(280570),
    i = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = s.useState(!1),
        [d, _] = s.useState(!1),
        [u, E] = s.useState(!1),
        [T, I] = s.useState(!1),
        [R, m] = s.useState(!1),
        [g, N] = s.useState(!1),
        [C, p] = s.useState(!1),
        [A, f] = s.useState(!1),
        h = o || d || u || T || g || A,
        S = s.useCallback(
            async (e) => {
                if (!h) {
                    c(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [h, t, n]
        ),
        M = s.useCallback(
            async (e) => {
                if (!h) {
                    _(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [h, t, n]
        ),
        x = s.useCallback(
            async (e) => {
                if (!h) {
                    E(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [h, t, n]
        ),
        b = s.useCallback(
            async (e) => {
                if (!h) {
                    I(!0);
                    try {
                        await (0, r.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [h, t, n]
        ),
        O = s.useCallback(async () => {
            if (!R) {
                m(!0);
                try {
                    await (0, r.qd)(), null == n || n();
                } catch (n) {
                    let e = new a.Hx(n);
                    null == t || t(e);
                } finally {
                    m(!1);
                }
            }
        }, [R, t, n]),
        v = s.useCallback(
            async (e) => {
                if (!C) {
                    p(!0);
                    try {
                        await r.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [C, t, n]
        ),
        P = s.useCallback(
            async (e, s) => {
                if (!g) {
                    N(!0);
                    try {
                        await r.ZP.requestLink(e, s), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        N(!1);
                    }
                }
            },
            [g, t, n]
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: M,
        disconnectLinkRequest: x,
        cancelLinkRequest: b,
        selectTeenUser: v,
        getLinkCode: O,
        requestLink: P,
        loadMore: s.useCallback(
            async (e) => {
                let n = i.Z.getActionsForDisplayType(e),
                    s = n[n.length - 1],
                    l = i.Z.getStartId(),
                    o = i.Z.getSelectedTeenId();
                if (!A && null != l && null != o) {
                    f(!0);
                    try {
                        await r.ZP.fetchMoreTeenActivity(o, e, l, s.event_id);
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        f(!1);
                    }
                }
            },
            [A, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: u,
        isCancelLoading: T,
        isGetLinkCodeLoading: R,
        isSelectTeenUserLoading: C,
        isRequestingLink: g,
        isMoreLoading: A
    };
}
