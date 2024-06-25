s.d(t, {
  G: function() {
    return o
  }
}), s(47120);
var n = s(470079),
  a = s(881052),
  i = s(280570),
  r = s(914788),
  l = s(292352);

function o(e) {
  let {
    onError: t,
    onSuccess: s
  } = null != e ? e : {}, [o, c] = n.useState(!1), [E, _] = n.useState(!1), [u, d] = n.useState(!1), [T, I] = n.useState(!1), [R, A] = n.useState(!1), [N, C] = n.useState(!1), [g, m] = n.useState(!1), [M, S] = n.useState(!1), p = o || E || u || T || N || M, h = n.useCallback(async e => {
    if (!p) {
      c(!0);
      try {
        await (0, i.Yw)(e.id, l.ne.ACTIVE), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [p, t, s]), f = n.useCallback(async e => {
    if (!p) {
      _(!0);
      try {
        await (0, i.Yw)(e.id, l.ne.DECLINED), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [p, t, s]), O = n.useCallback(async e => {
    if (!p) {
      d(!0);
      try {
        await (0, i.Yw)(e.id, l.ne.INACTIVE), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        d(!1)
      }
    }
  }, [p, t, s]), x = n.useCallback(async e => {
    if (!p) {
      I(!0);
      try {
        await (0, i.fc)(e.id), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        I(!1)
      }
    }
  }, [p, t, s]), L = n.useCallback(async () => {
    if (!R) {
      A(!0);
      try {
        await (0, i.qd)(), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        A(!1)
      }
    }
  }, [R, t, s]), P = n.useCallback(async e => {
    if (!g) {
      m(!0);
      try {
        await i.ZP.fetchTeenActivity(e), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [g, t, s]), v = n.useCallback(async (e, n) => {
    if (!N) {
      C(!0);
      try {
        await i.ZP.requestLink(e, n), null == s || s()
      } catch (s) {
        let e = new a.Hx(s);
        null == t || t(e)
      } finally {
        C(!1)
      }
    }
  }, [N, t, s]);
  return {
    acceptLinkRequest: h,
    declineLinkRequest: f,
    disconnectLinkRequest: O,
    cancelLinkRequest: x,
    selectTeenUser: P,
    getLinkCode: L,
    requestLink: v,
    loadMore: n.useCallback(async e => {
      let s = r.Z.getActionsForDisplayType(e),
        n = s[s.length - 1],
        l = r.Z.getStartId(),
        o = r.Z.getSelectedTeenId();
      if (!M && null != l && null != o) {
        S(!0);
        try {
          await i.ZP.fetchMoreTeenActivity(o, e, l, n.event_id)
        } catch (s) {
          let e = new a.Hx(s);
          null == t || t(e)
        } finally {
          S(!1)
        }
      }
    }, [M, t]),
    isAcceptLoading: o,
    isDeclineLoading: E,
    isDisconnectLoading: u,
    isCancelLoading: T,
    isGetLinkCodeLoading: R,
    isSelectTeenUserLoading: g,
    isRequestingLink: N,
    isMoreLoading: M
  }
}