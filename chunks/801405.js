"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("570140"),
  r = n("475179"),
  o = n("367907"),
  u = n("358221"),
  d = n("788983"),
  c = n("268353"),
  f = n("944486"),
  h = n("626135"),
  m = n("585483"),
  p = n("358085"),
  E = n("228488"),
  g = n("981631"),
  C = n("807136");
let S = () => {
  i.default.wait(() => d.close(g.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
};

function _(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: i,
    popoutWindow: d,
    currentWindow: _
  } = e, T = n === g.AppContext.POPOUT, I = l.useRef(null), {
    currentLayout: A,
    mode: v
  } = (0, s.useStateFromStoresObject)([u.default], () => {
    let e = u.default.getMode(t.id),
      a = n === g.AppContext.POPOUT;
    a && (e = g.ChannelModes.VIDEO);
    let l = e === g.ChannelModes.VIDEO ? u.default.getLayout(t.id, n) : g.ChannelLayouts.MINIMUM;
    return a && l !== g.ChannelLayouts.FULL_SCREEN && (l = g.ChannelLayouts.NO_CHAT), {
      currentLayout: l,
      mode: e
    }
  }, [t, n]), x = (0, s.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === t.id, [t.id]);
  l.useEffect(() => {
    I.current = v
  });
  let N = l.useRef(A),
    {
      currentDocument: M,
      rootNode: y
    } = l.useMemo(() => {
      let e = null != d && T ? d.document : document,
        t = _.document.getElementById("app-mount");
      return {
        currentWindow: _,
        currentDocument: e,
        rootNode: t
      }
    }, [d, T, _]),
    R = i && !T,
    L = v === g.ChannelModes.VIDEO && x && !R,
    O = l.useCallback((e, a) => {
      a !== e && (r.default.updateLayout(t.id, a, n), a === g.ChannelLayouts.FULL_SCREEN && t.isPrivate() && m.ComponentDispatch.dispatch(g.ComponentActions.TEXTAREA_BLUR))
    }, [n, t]),
    j = l.useCallback(e => {
      if (null != y) e === g.ChannelLayouts.FULL_SCREEN && (O(e, N.current), (0, E.exitFullScreen)(e => {
        N.current = e
      }, M))
    }, [M, O, y]),
    P = l.useCallback(e => () => {
      null != y && (e !== g.ChannelLayouts.FULL_SCREEN ? (N.current = e, O(e, g.ChannelLayouts.FULL_SCREEN), (0, E.requestFullScreen)(y)) : j(e))
    }, [O, j, y]);
  return (l.useEffect(() => {
    let e = () => {
      null != y && !(0, E.isFullScreen)(y, M) && A === g.ChannelLayouts.FULL_SCREEN && P(A)()
    };
    return M.addEventListener(E.FULLSCREEN_CHANGE_EVENT, e), () => {
      M.removeEventListener(E.FULLSCREEN_CHANGE_EVENT, e)
    }
  }, [M, A, P, y]), l.useEffect(() => (h.default.track(g.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
    video_layout: T ? "popout" : A,
    ...(0, o.collectVoiceAnalyticsMetadata)(t.id)
  }), () => {
    !(T && (0, p.isMac)()) && j(A)
  }), [A, T]), l.useEffect(() => {
    null != y && I.current === g.ChannelModes.VIDEO && v === g.ChannelModes.VOICE && (0, E.exitFullScreen)(y, M)
  }, [M, v, I, y]), l.useEffect(() => {
    !x && T && S()
  }, [x, T]), L) ? (0, a.jsx)(c.default, {
    themeable: !1,
    node: y,
    guestWindow: d,
    className: C.rightTrayIcon,
    onClick: P(A)
  }) : null
}