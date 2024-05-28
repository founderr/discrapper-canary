"use strict";
s.r(t), s.d(t, {
  useFamilyCenterActions: function() {
    return u
  }
}), s("47120");
var a = s("470079"),
  n = s("881052"),
  l = s("280570"),
  i = s("914788"),
  r = s("292352");

function u(e) {
  let {
    onError: t,
    onSuccess: s
  } = null != e ? e : {}, [u, o] = a.useState(!1), [d, c] = a.useState(!1), [E, _] = a.useState(!1), [f, h] = a.useState(!1), [m, T] = a.useState(!1), [C, g] = a.useState(!1), [A, N] = a.useState(!1), [p, S] = a.useState(!1), I = u || d || E || f || C || p, v = a.useCallback(async e => {
    if (!I) {
      o(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        o(!1)
      }
    }
  }, [I, t, s]), R = a.useCallback(async e => {
    if (!I) {
      c(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [I, t, s]), x = a.useCallback(async e => {
    if (!I) {
      _(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        _(!1)
      }
    }
  }, [I, t, s]), M = a.useCallback(async e => {
    if (!I) {
      h(!0);
      try {
        await (0, l.removeLinkForUserId)(e.id), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        h(!1)
      }
    }
  }, [I, t, s]), O = a.useCallback(async () => {
    if (!m) {
      T(!0);
      try {
        await (0, l.getLinkCodeForCurrentUser)(), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        T(!1)
      }
    }
  }, [m, t, s]), L = a.useCallback(async e => {
    if (!A) {
      N(!0);
      try {
        await l.default.fetchTeenActivity(e), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        N(!1)
      }
    }
  }, [A, t, s]), y = a.useCallback(async (e, a) => {
    if (!C) {
      g(!0);
      try {
        await l.default.requestLink(e, a), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        g(!1)
      }
    }
  }, [C, t, s]);
  return {
    acceptLinkRequest: v,
    declineLinkRequest: R,
    disconnectLinkRequest: x,
    cancelLinkRequest: M,
    selectTeenUser: L,
    getLinkCode: O,
    requestLink: y,
    loadMore: a.useCallback(async e => {
      let s = i.default.getActionsForDisplayType(e),
        a = s[s.length - 1],
        r = i.default.getStartId(),
        u = i.default.getSelectedTeenId();
      if (!p && null != r && null != u) {
        S(!0);
        try {
          await l.default.fetchMoreTeenActivity(u, e, r, a.event_id)
        } catch (s) {
          let e = new n.APIError(s);
          null == t || t(e)
        } finally {
          S(!1)
        }
      }
    }, [p, t]),
    isAcceptLoading: u,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: f,
    isGetLinkCodeLoading: m,
    isSelectTeenUserLoading: A,
    isRequestingLink: C,
    isMoreLoading: p
  }
}