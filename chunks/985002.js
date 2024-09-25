n.d(t, {
    G: function () {
        return l;
    }
}),
    n(47120);
var s = n(470079),
    a = n(881052),
    r = n(280570),
    i = n(914788),
    o = n(292352);
function l(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [l, c] = s.useState(!1),
        [d, _] = s.useState(!1),
        [u, E] = s.useState(!1),
        [T, I] = s.useState(!1),
        [R, m] = s.useState(!1),
        [g, N] = s.useState(!1),
        [C, p] = s.useState(!1),
        [f, A] = s.useState(!1),
        S = l || d || u || T || g || f,
        h = s.useCallback(
            async (e) => {
                if (!S) {
                    c(!0);
                    try {
                        await (0, r.Yw)(e.id, o.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [S, t, n]
        ),
        M = s.useCallback(
            async (e) => {
                if (!S) {
                    _(!0);
                    try {
                        await (0, r.Yw)(e.id, o.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [S, t, n]
        ),
        x = s.useCallback(
            async (e) => {
                if (!S) {
                    E(!0);
                    try {
                        await (0, r.Yw)(e.id, o.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [S, t, n]
        ),
        b = s.useCallback(
            async (e) => {
                if (!S) {
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
            [S, t, n]
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
        P = s.useCallback(
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
        v = s.useCallback(
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
        acceptLinkRequest: h,
        declineLinkRequest: M,
        disconnectLinkRequest: x,
        cancelLinkRequest: b,
        selectTeenUser: P,
        getLinkCode: O,
        requestLink: v,
        loadMore: s.useCallback(
            async (e) => {
                let n = i.Z.getActionsForDisplayType(e),
                    s = n[n.length - 1],
                    o = i.Z.getStartId(),
                    l = i.Z.getSelectedTeenId();
                if (!f && null != o && null != l) {
                    A(!0);
                    try {
                        await r.ZP.fetchMoreTeenActivity(l, e, o, s.event_id);
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        A(!1);
                    }
                }
            },
            [f, t]
        ),
        isAcceptLoading: l,
        isDeclineLoading: d,
        isDisconnectLoading: u,
        isCancelLoading: T,
        isGetLinkCodeLoading: R,
        isSelectTeenUserLoading: C,
        isRequestingLink: g,
        isMoreLoading: f
    };
}
