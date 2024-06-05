"use strict";
s.r(t), s.d(t, {
  useFamilyCenterActions: function() {
    return o
  }
}), s("47120");
var a = s("470079"),
  n = s("881052"),
  l = s("280570"),
  i = s("914788"),
  r = s("292352");

function o(e) {
  let {
    onError: t,
    onSuccess: s
  } = null != e ? e : {}, [o, u] = a.useState(!1), [d, c] = a.useState(!1), [E, _] = a.useState(!1), [f, h] = a.useState(!1), [T, m] = a.useState(!1), [C, g] = a.useState(!1), [A, p] = a.useState(!1), [N, I] = a.useState(!1), S = o || d || E || f || C || N, R = a.useCallback(async e => {
    if (!S) {
      u(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [S, t, s]), v = a.useCallback(async e => {
    if (!S) {
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
  }, [S, t, s]), x = a.useCallback(async e => {
    if (!S) {
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
  }, [S, t, s]), M = a.useCallback(async e => {
    if (!S) {
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
  }, [S, t, s]), L = a.useCallback(async () => {
    if (!T) {
      m(!0);
      try {
        await (0, l.getLinkCodeForCurrentUser)(), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [T, t, s]), O = a.useCallback(async e => {
    if (!A) {
      p(!0);
      try {
        await l.default.fetchTeenActivity(e), null == s || s()
      } catch (s) {
        let e = new n.APIError(s);
        null == t || t(e)
      } finally {
        p(!1)
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
    acceptLinkRequest: R,
    declineLinkRequest: v,
    disconnectLinkRequest: x,
    cancelLinkRequest: M,
    selectTeenUser: O,
    getLinkCode: L,
    requestLink: y,
    loadMore: a.useCallback(async e => {
      let s = i.default.getActionsForDisplayType(e),
        a = s[s.length - 1],
        r = i.default.getStartId(),
        o = i.default.getSelectedTeenId();
      if (!N && null != r && null != o) {
        I(!0);
        try {
          await l.default.fetchMoreTeenActivity(o, e, r, a.event_id)
        } catch (s) {
          let e = new n.APIError(s);
          null == t || t(e)
        } finally {
          I(!1)
        }
      }
    }, [N, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: f,
    isGetLinkCodeLoading: T,
    isSelectTeenUserLoading: A,
    isRequestingLink: C,
    isMoreLoading: N
  }
}