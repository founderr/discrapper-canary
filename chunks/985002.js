"use strict";
s.r(t), s.d(t, {
  useFamilyCenterActions: function() {
    return o
  }
}), s("47120");
var n = s("470079"),
  a = s("881052"),
  l = s("280570"),
  i = s("914788"),
  r = s("292352");

function o(e) {
  let {
    onError: t,
    onSuccess: s
  } = null != e ? e : {}, [o, u] = n.useState(!1), [d, c] = n.useState(!1), [E, f] = n.useState(!1), [_, h] = n.useState(!1), [C, m] = n.useState(!1), [T, g] = n.useState(!1), [A, p] = n.useState(!1), [N, S] = n.useState(!1), I = o || d || E || _ || T || N, x = n.useCallback(async e => {
    if (!I) {
      u(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [I, t, s]), R = n.useCallback(async e => {
    if (!I) {
      c(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [I, t, s]), v = n.useCallback(async e => {
    if (!I) {
      f(!0);
      try {
        await (0, l.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        f(!1)
      }
    }
  }, [I, t, s]), M = n.useCallback(async e => {
    if (!I) {
      h(!0);
      try {
        await (0, l.removeLinkForUserId)(e.id), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        h(!1)
      }
    }
  }, [I, t, s]), O = n.useCallback(async () => {
    if (!C) {
      m(!0);
      try {
        await (0, l.getLinkCodeForCurrentUser)(), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        m(!1)
      }
    }
  }, [C, t, s]), L = n.useCallback(async e => {
    if (!A) {
      p(!0);
      try {
        await l.default.fetchTeenActivity(e), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        p(!1)
      }
    }
  }, [A, t, s]), y = n.useCallback(async (e, n) => {
    if (!T) {
      g(!0);
      try {
        await l.default.requestLink(e, n), null == s || s()
      } catch (s) {
        let e = new a.APIError(s);
        null == t || t(e)
      } finally {
        g(!1)
      }
    }
  }, [T, t, s]);
  return {
    acceptLinkRequest: x,
    declineLinkRequest: R,
    disconnectLinkRequest: v,
    cancelLinkRequest: M,
    selectTeenUser: L,
    getLinkCode: O,
    requestLink: y,
    loadMore: n.useCallback(async e => {
      let s = i.default.getActionsForDisplayType(e),
        n = s[s.length - 1],
        r = i.default.getStartId(),
        o = i.default.getSelectedTeenId();
      if (!N && null != r && null != o) {
        S(!0);
        try {
          await l.default.fetchMoreTeenActivity(o, e, r, n.event_id)
        } catch (s) {
          let e = new a.APIError(s);
          null == t || t(e)
        } finally {
          S(!1)
        }
      }
    }, [N, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: E,
    isCancelLoading: _,
    isGetLinkCodeLoading: C,
    isSelectTeenUserLoading: A,
    isRequestingLink: T,
    isMoreLoading: N
  }
}