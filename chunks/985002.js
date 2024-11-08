n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(881052),
    a = n(260722),
    s = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [g, m] = i.useState(!1),
        [f, _] = i.useState(!1),
        [p, h] = i.useState(!1),
        [E, b] = i.useState(!1),
        [x, C] = i.useState(!1),
        [T, v] = i.useState(!1),
        N = o || d || g || f || E || T,
        I = i.useCallback(
            async (e) => {
                if (!N) {
                    c(!0);
                    try {
                        await (0, a.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [N, t, n]
        ),
        S = i.useCallback(
            async (e) => {
                if (!N) {
                    u(!0);
                    try {
                        await (0, a.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [N, t, n]
        ),
        R = i.useCallback(
            async (e) => {
                if (!N) {
                    m(!0);
                    try {
                        await (0, a.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        m(!1);
                    }
                }
            },
            [N, t, n]
        ),
        A = i.useCallback(
            async (e) => {
                if (!N) {
                    _(!0);
                    try {
                        await (0, a.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [N, t, n]
        ),
        j = i.useCallback(async () => {
            if (!p) {
                h(!0);
                try {
                    await (0, a.qd)(), null == n || n();
                } catch (n) {
                    let e = new r.Hx(n);
                    null == t || t(e);
                } finally {
                    h(!1);
                }
            }
        }, [p, t, n]),
        P = i.useCallback(
            async (e) => {
                if (!x) {
                    C(!0);
                    try {
                        await a.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [x, t, n]
        ),
        Z = i.useCallback(
            async (e, i) => {
                if (!E) {
                    b(!0);
                    try {
                        await a.ZP.requestLink(e, i), null == n || n();
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [E, t, n]
        );
    return {
        acceptLinkRequest: I,
        declineLinkRequest: S,
        disconnectLinkRequest: R,
        cancelLinkRequest: A,
        selectTeenUser: P,
        getLinkCode: j,
        requestLink: Z,
        loadMore: i.useCallback(
            async (e) => {
                let n = s.Z.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    l = s.Z.getStartId(),
                    o = s.Z.getSelectedTeenId();
                if (!T && null != l && null != o) {
                    v(!0);
                    try {
                        await a.ZP.fetchMoreTeenActivity(o, e, l, i.event_id);
                    } catch (n) {
                        let e = new r.Hx(n);
                        null == t || t(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [T, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: g,
        isCancelLoading: f,
        isGetLinkCodeLoading: p,
        isSelectTeenUserLoading: x,
        isRequestingLink: E,
        isMoreLoading: T
    };
}
