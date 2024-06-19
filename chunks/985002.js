n.d(t, {
  G: function() {
    return o
  }
}), n(47120);
var s = n(470079),
  a = n(881052),
  i = n(280570),
  l = n(914788),
  r = n(292352);

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, c] = s.useState(!1), [d, u] = s.useState(!1), [E, _] = s.useState(!1), [h, m] = s.useState(!1), [T, C] = s.useState(!1), [g, p] = s.useState(!1), [N, I] = s.useState(!1), [A, f] = s.useState(!1), x = o || d || E || h || g || A, S = s.useCallback(async e => {
    if (!x) {
      c(!0);
      try {
        await (0, i.Yw)(e.id, r.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [x, t, n]), v = s.useCallback(async e => {
    if (!x) {
      u(!0);
      try {
        await (0, i.Yw)(e.id, r.ne.DECLINED), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [x, t, n]), R = s.useCallback(async e => {
    if (!x) {
      _(!0);
      try {
        await (0, i.Yw)(e.id, r.ne.INACTIVE), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [x, t, n]), M = s.useCallback(async e => {
    if (!x) {
      m(!0);
      try {
        await (0, i.fc)(e.id), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [x, t, n]), O = s.useCallback(async () => {
    if (!T) {
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
  }, [T, t, n]), L = s.useCallback(async e => {
    if (!N) {
      I(!0);
      try {
        await i.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        I(!1)
      }
    }
  }, [N, t, n]), Z = s.useCallback(async (e, s) => {
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
    acceptLinkRequest: S,
    declineLinkRequest: v,
    disconnectLinkRequest: R,
    cancelLinkRequest: M,
    selectTeenUser: L,
    getLinkCode: O,
    requestLink: Z,
    loadMore: s.useCallback(async e => {
      let n = l.Z.getActionsForDisplayType(e),
        s = n[n.length - 1],
        r = l.Z.getStartId(),
        o = l.Z.getSelectedTeenId();
      if (!A && null != r && null != o) {
        f(!0);
        try {
          await i.ZP.fetchMoreTeenActivity(o, e, r, s.event_id)
        } catch (n) {
          let e = new a.Hx(n);
          null == t || t(e)
        } finally {
          f(!1)
        }
      }
    }, [A, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: h,
    isGetLinkCodeLoading: T,
    isSelectTeenUserLoading: N,
    isRequestingLink: g,
    isMoreLoading: A
  }
}