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
  } = null != e ? e : {}, [o, u] = a.useState(!1), [d, c] = a.useState(!1), [E, _] = a.useState(!1), [f, h] = a.useState(!1), [C, m] = a.useState(!1), [T, g] = a.useState(!1), [A, p] = a.useState(!1), [N, S] = a.useState(!1), I = o || d || E || f || T || N, x = a.useCallback(async e => {
    if (!I) {
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
  }, [I, t, s]), v = a.useCallback(async e => {
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
  }, [I, t, s]), R = a.useCallback(async e => {
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
  }, [I, t, s]), O = a.useCallback(async e => {
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
  }, [I, t, s]), M = a.useCallback(async () => {
    if (!C) {
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
  }, [C, t, s]), L = a.useCallback(async e => {
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
    if (!T) {
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
  }, [T, t, s]);
  return {
    acceptLinkRequest: x,
    declineLinkRequest: v,
    disconnectLinkRequest: R,
    cancelLinkRequest: O,
    selectTeenUser: L,
    getLinkCode: M,
    requestLink: y,
    loadMore: a.useCallback(async e => {
      let s = i.default.getActionsForDisplayType(e),
        a = s[s.length - 1],
        r = i.default.getStartId(),
        o = i.default.getSelectedTeenId();
      if (!N && null != r && null != o) {
        S(!0);
        try {
          await l.default.fetchMoreTeenActivity(o, e, r, a.event_id)
        } catch (s) {
          let e = new n.APIError(s);
          null == t || t(e)
        } finally {
          S(!1)
        }
      }
    }, [N, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: f,
    isGetLinkCodeLoading: C,
    isSelectTeenUserLoading: A,
    isRequestingLink: T,
    isMoreLoading: N
  }
}