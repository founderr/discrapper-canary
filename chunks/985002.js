"use strict";
a.r(t), a.d(t, {
  useFamilyCenterActions: function() {
    return o
  }
}), a("47120");
var n = a("470079"),
  s = a("881052"),
  l = a("280570"),
  i = a("914788"),
  r = a("292352");

function o(e) {
  let {
    onError: t,
    onSuccess: a
  } = null != e ? e : {}, [o, u] = n.useState(!1), [d, c] = n.useState(!1), [f, E] = n.useState(!1), [h, _] = n.useState(!1), [C, m] = n.useState(!1), [S, p] = n.useState(!1), [I, T] = n.useState(!1), [g, A] = n.useState(!1), N = o || d || f || h || S || g, v = n.useCallback(async e => {
    if (!N) {
      u(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [N, t, a]), L = n.useCallback(async e => {
    if (!N) {
      c(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [N, t, a]), R = n.useCallback(async e => {
    if (!N) {
      E(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        E(!1)
      }
    }
  }, [N, t, a]), O = n.useCallback(async e => {
    if (!N) {
      _(!0);
      try {
        await (0, l.removeLinkForUserId)(e.id), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [N, t, a]), M = n.useCallback(async () => {
    if (!C) {
      m(!0);
      try {
        await (0, l.getLinkCodeForCurrentUser)(), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [C, t, a]), P = n.useCallback(async e => {
    if (!I) {
      T(!0);
      try {
        await l.default.fetchTeenActivity(e), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        T(!1)
      }
    }
  }, [I, t, a]), x = n.useCallback(async (e, n) => {
    if (!S) {
      p(!0);
      try {
        await l.default.requestLink(e, n), null == a || a()
      } catch (a) {
        let e = new s.APIError(a);
        null == t || t(e)
      } finally {
        p(!1)
      }
    }
  }, [S, t, a]);
  return {
    acceptLinkRequest: v,
    declineLinkRequest: L,
    disconnectLinkRequest: R,
    cancelLinkRequest: O,
    selectTeenUser: P,
    getLinkCode: M,
    requestLink: x,
    loadMore: n.useCallback(async e => {
      let a = i.default.getActionsForDisplayType(e),
        n = a[a.length - 1],
        r = i.default.getStartId(),
        o = i.default.getSelectedTeenId();
      if (!g && null != r && null != o) {
        A(!0);
        try {
          await l.default.fetchMoreTeenActivity(o, e, r, n.event_id)
        } catch (a) {
          let e = new s.APIError(a);
          null == t || t(e)
        } finally {
          A(!1)
        }
      }
    }, [g, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: f,
    isCancelLoading: h,
    isGetLinkCodeLoading: C,
    isSelectTeenUserLoading: I,
    isRequestingLink: S,
    isMoreLoading: g
  }
}