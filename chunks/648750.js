"use strict";
n.r(t), n.d(t, {
  useFamilyCenterActions: function() {
    return o
  }
}), n("222007");
var a = n("884691"),
  s = n("448993"),
  i = n("544556"),
  l = n("822825"),
  r = n("922832");

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, u] = a.useState(!1), [d, c] = a.useState(!1), [f, E] = a.useState(!1), [h, _] = a.useState(!1), [C, I] = a.useState(!1), [S, m] = a.useState(!1), [p, T] = a.useState(!1), [g, A] = a.useState(!1), N = o || d || f || h || S || g, R = a.useCallback(async e => {
    if (!N) {
      u(!0);
      try {
        await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [N, t, n]), O = a.useCallback(async e => {
    if (!N) {
      c(!0);
      try {
        await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [N, t, n]), v = a.useCallback(async e => {
    if (!N) {
      E(!0);
      try {
        await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        E(!1)
      }
    }
  }, [N, t, n]), L = a.useCallback(async e => {
    if (!N) {
      _(!0);
      try {
        await (0, i.removeLinkForUserId)(e.id), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [N, t, n]), M = a.useCallback(async () => {
    if (!C) {
      I(!0);
      try {
        await (0, i.getLinkCodeForCurrentUser)(), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        I(!1)
      }
    }
  }, [C, t, n]), P = a.useCallback(async e => {
    if (!p) {
      T(!0);
      try {
        await i.default.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        T(!1)
      }
    }
  }, [p, t, n]), D = a.useCallback(async (e, a) => {
    if (!S) {
      m(!0);
      try {
        await i.default.requestLink(e, a), null == n || n()
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [S, t, n]), y = a.useCallback(async e => {
    let n = l.default.getActionsForDisplayType(e),
      a = n[n.length - 1],
      r = l.default.getStartId(),
      o = l.default.getSelectedTeenId();
    if (!g && null != r && null != o) {
      A(!0);
      try {
        await i.default.fetchMoreTeenActivity(o, e, r, a.event_id)
      } catch (n) {
        let e = new s.APIError(n);
        null == t || t(e)
      } finally {
        A(!1)
      }
    }
  }, [g, t]);
  return {
    acceptLinkRequest: R,
    declineLinkRequest: O,
    disconnectLinkRequest: v,
    cancelLinkRequest: L,
    selectTeenUser: P,
    getLinkCode: M,
    requestLink: D,
    loadMore: y,
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: f,
    isCancelLoading: h,
    isGetLinkCodeLoading: C,
    isSelectTeenUserLoading: p,
    isRequestingLink: S,
    isMoreLoading: g
  }
}