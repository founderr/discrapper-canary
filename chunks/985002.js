n.d(t, {
  G: function() {
    return o
  }
}), n(47120);
var s = n(470079),
  a = n(881052),
  i = n(280570),
  r = n(914788),
  l = n(292352);

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, c] = s.useState(!1), [d, _] = s.useState(!1), [E, u] = s.useState(!1), [T, I] = s.useState(!1), [R, C] = s.useState(!1), [g, p] = s.useState(!1), [A, N] = s.useState(!1), [m, S] = s.useState(!1), f = o || d || E || T || g || m, M = s.useCallback(async e => {
    if (!f) {
      c(!0);
      try {
        await (0, i.Yw)(e.id, l.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [f, t, n]), h = s.useCallback(async e => {
    if (!f) {
      _(!0);
      try {
        await (0, i.Yw)(e.id, l.ne.DECLINED), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [f, t, n]), b = s.useCallback(async e => {
    if (!f) {
      u(!0);
      try {
        await (0, i.Yw)(e.id, l.ne.INACTIVE), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [f, t, n]), x = s.useCallback(async e => {
    if (!f) {
      I(!0);
      try {
        await (0, i.fc)(e.id), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        I(!1)
      }
    }
  }, [f, t, n]), O = s.useCallback(async () => {
    if (!R) {
      C(!0);
      try {
        await (0, i.qd)(), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        C(!1)
      }
    }
  }, [R, t, n]), P = s.useCallback(async e => {
    if (!A) {
      N(!0);
      try {
        await i.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        N(!1)
      }
    }
  }, [A, t, n]), L = s.useCallback(async (e, s) => {
    if (!g) {
      p(!0);
      try {
        await i.ZP.requestLink(e, s), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        p(!1)
      }
    }
  }, [g, t, n]);
  return {
    acceptLinkRequest: M,
    declineLinkRequest: h,
    disconnectLinkRequest: b,
    cancelLinkRequest: x,
    selectTeenUser: P,
    getLinkCode: O,
    requestLink: L,
    loadMore: s.useCallback(async e => {
      let n = r.Z.getActionsForDisplayType(e),
        s = n[n.length - 1],
        l = r.Z.getStartId(),
        o = r.Z.getSelectedTeenId();
      if (!m && null != l && null != o) {
        S(!0);
        try {
          await i.ZP.fetchMoreTeenActivity(o, e, l, s.event_id)
        } catch (n) {
          let e = new a.Hx(n);
          null == t || t(e)
        } finally {
          S(!1)
        }
      }
    }, [m, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: T,
    isGetLinkCodeLoading: R,
    isSelectTeenUserLoading: A,
    isRequestingLink: g,
    isMoreLoading: m
  }
}