"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("913144"),
  r = n("255397"),
  o = n("716241"),
  u = n("191145"),
  d = n("383294"),
  c = n("95032"),
  f = n("18494"),
  h = n("599110"),
  m = n("659500"),
  p = n("773336"),
  E = n("563680"),
  S = n("49111"),
  g = n("716208");
let C = () => {
  i.default.wait(() => d.close(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
};

function _(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: i,
    popoutWindow: d,
    currentWindow: _
  } = e, I = n === S.AppContext.POPOUT, T = a.useRef(null), {
    currentLayout: v,
    mode: x
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    let e = u.default.getMode(t.id),
      l = n === S.AppContext.POPOUT;
    l && (e = S.ChannelModes.VIDEO);
    let a = e === S.ChannelModes.VIDEO ? u.default.getLayout(t.id, n) : S.ChannelLayouts.MINIMUM;
    return l && a !== S.ChannelLayouts.FULL_SCREEN && (a = S.ChannelLayouts.NO_CHAT), {
      currentLayout: a,
      mode: e
    }
  }, [t, n]), N = (0, s.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === t.id, [t.id]);
  a.useEffect(() => {
    T.current = x
  });
  let A = a.useRef(v),
    {
      currentDocument: M,
      rootNode: R
    } = a.useMemo(() => {
      let e = null != d && I ? d.document : document,
        t = _.document.getElementById("app-mount");
      return {
        currentWindow: _,
        currentDocument: e,
        rootNode: t
      }
    }, [d, I, _]),
    j = i && !I,
    L = x === S.ChannelModes.VIDEO && N && !j,
    y = a.useCallback((e, l) => {
      l !== e && (r.default.updateLayout(t.id, l, n), l === S.ChannelLayouts.FULL_SCREEN && t.isPrivate() && m.ComponentDispatch.dispatch(S.ComponentActions.TEXTAREA_BLUR))
    }, [n, t]),
    O = a.useCallback(e => {
      if (null != R) e === S.ChannelLayouts.FULL_SCREEN && (y(e, A.current), (0, E.exitFullScreen)(e => {
        A.current = e
      }, M))
    }, [M, y, R]),
    P = a.useCallback(e => () => {
      null != R && (e !== S.ChannelLayouts.FULL_SCREEN ? (A.current = e, y(e, S.ChannelLayouts.FULL_SCREEN), (0, E.requestFullScreen)(R)) : O(e))
    }, [y, O, R]);
  return (a.useEffect(() => {
    let e = () => {
      null != R && !(0, E.isFullScreen)(R, M) && v === S.ChannelLayouts.FULL_SCREEN && P(v)()
    };
    return M.addEventListener(E.FULLSCREEN_CHANGE_EVENT, e), () => {
      M.removeEventListener(E.FULLSCREEN_CHANGE_EVENT, e)
    }
  }, [M, v, P, R]), a.useEffect(() => (h.default.track(S.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
    video_layout: I ? "popout" : v,
    ...(0, o.collectVoiceAnalyticsMetadata)(t.id)
  }), () => {
    !(I && (0, p.isMac)()) && O(v)
  }), [v, I]), a.useEffect(() => {
    null != R && T.current === S.ChannelModes.VIDEO && x === S.ChannelModes.VOICE && (0, E.exitFullScreen)(R, M)
  }, [M, x, T, R]), a.useEffect(() => {
    !N && I && C()
  }, [N, I]), L) ? (0, l.jsx)(c.default, {
    themeable: !1,
    node: R,
    guestWindow: d,
    className: g.rightTrayIcon,
    onClick: P(v)
  }) : null
}