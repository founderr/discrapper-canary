n.d(t, {
  G: function() {
    return c
  }
}), n(47120);
var s = n(470079),
  a = n(881052),
  i = n(280570),
  l = n(914788),
  r = n(292352);

function c(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [c, o] = s.useState(!1), [d, u] = s.useState(!1), [E, _] = s.useState(!1), [h, T] = s.useState(!1), [I, C] = s.useState(!1), [N, g] = s.useState(!1), [A, m] = s.useState(!1), [f, p] = s.useState(!1), R = c || d || E || h || N || f, M = s.useCallback(async e => {
    if (!R) {
      o(!0);
      try {
        await (0, i.Yw)(e.id, r.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        o(!1)
      }
    }
  }, [R, t, n]), O = s.useCallback(async e => {
    if (!R) {
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
  }, [R, t, n]), S = s.useCallback(async e => {
    if (!R) {
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
  }, [R, t, n]), L = s.useCallback(async e => {
    if (!R) {
      T(!0);
      try {
        await (0, i.fc)(e.id), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        T(!1)
      }
    }
  }, [R, t, n]), v = s.useCallback(async () => {
    if (!I) {
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
  }, [I, t, n]), Z = s.useCallback(async e => {
    if (!A) {
      m(!0);
      try {
        await i.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [A, t, n]), x = s.useCallback(async (e, s) => {
    if (!N) {
      g(!0);
      try {
        await i.ZP.requestLink(e, s), null == n || n()
      } catch (n) {
        let e = new a.Hx(n);
        null == t || t(e)
      } finally {
        g(!1)
      }
    }
  }, [N, t, n]);
  return {
    acceptLinkRequest: M,
    declineLinkRequest: O,
    disconnectLinkRequest: S,
    cancelLinkRequest: L,
    selectTeenUser: Z,
    getLinkCode: v,
    requestLink: x,
    loadMore: s.useCallback(async e => {
      let n = l.Z.getActionsForDisplayType(e),
        s = n[n.length - 1],
        r = l.Z.getStartId(),
        c = l.Z.getSelectedTeenId();
      if (!f && null != r && null != c) {
        p(!0);
        try {
          await i.ZP.fetchMoreTeenActivity(c, e, r, s.event_id)
        } catch (n) {
          let e = new a.Hx(n);
          null == t || t(e)
        } finally {
          p(!1)
        }
      }
    }, [f, t]),
    isAcceptLoading: c,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: h,
    isGetLinkCodeLoading: I,
    isSelectTeenUserLoading: A,
    isRequestingLink: N,
    isMoreLoading: f
  }
}