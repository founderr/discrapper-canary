"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("993365"),
  u = n("481060"),
  d = n("153867"),
  c = n("110924"),
  f = n("607070"),
  h = n("900211"),
  m = n("580747"),
  p = n("740492"),
  E = n("871499"),
  C = n("402113"),
  g = n("592125"),
  S = n("271383"),
  _ = n("944486"),
  T = n("594174"),
  I = n("110456"),
  A = n("602623"),
  N = n("585483"),
  v = n("792125"),
  x = n("51144"),
  M = n("566620"),
  R = n("317381"),
  y = n("619915"),
  L = n("952561"),
  O = n("563218"),
  j = n("719296"),
  P = n("651612"),
  D = n("918559"),
  b = n("981631"),
  U = n("689938"),
  F = n("258004");
let w = A.Sizes.SIZE_32,
  k = {
    [D.FocusedActivityLayouts.NO_CHAT]: F.noChat,
    [D.FocusedActivityLayouts.RESIZABLE]: F.resizable
  };

function B(e) {
  var t, n;
  let {
    maxHeight: s,
    connectedChannelId: B,
    renderExternalHeader: H
  } = e, G = (0, L.default)(), V = (0, r.useStateFromStoresArray)([R.default], () => null != B ? R.default.getEmbeddedActivitiesForChannel(B) : [], [B]), W = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(B)), Y = (0, y.useEmbeddedApps)(V), z = (0, y.useEmbeddedAppsWithPresence)(Y), K = l.useCallback(() => {
    (0, M.updateActivityPanelMode)(D.ActivityPanelModes.PIP)
  }, []), Z = l.useRef(null), q = (0, r.useStateFromStores)([R.default], () => R.default.getFocusedLayout()), X = q !== D.FocusedActivityLayouts.NO_CHAT, [Q, J] = l.useState(null !== (t = p.default.activityPanelHeight) && void 0 !== t ? t : s), $ = l.useCallback(e => {
    d.default.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), ee = l.useRef(null), [et, en] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == ee.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      en({
        width: null !== (n = null === (e = ee.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
        height: null !== (a = null === (t = ee.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
      })
    });
    return e.observe(ee.current), () => e.disconnect()
  }, []);
  let ea = et.width / Math.max(et.height, 1) < D.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
    el = 0,
    es = 0,
    ei = (0, m.default)("activity_panel_iframe_fills_container");
  if (!ei) {
    let e = et.width,
      t = et.height;
    ea ? ((t = et.width / D.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > et.height && (e = (t = et.height) * D.LANDSCAPE_ACTIVITY_ASPECT_RATIO), es = (et.height - t) / 2) : ((e = Math.min(et.height * D.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > et.width && (t = (e = et.width) / D.LANDSCAPE_ACTIVITY_ASPECT_RATIO), el = (et.width - e) / 2)
  }
  let er = z.get(null !== (n = null == G ? void 0 : G.id) && void 0 !== n ? n : ""),
    eo = (0, r.useStateFromStores)([_.default], () => _.default.getChannelId()),
    eu = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null == W ? [] : Array.from(null !== (e = null == er ? void 0 : er.embeddedActivity.userIds) && void 0 !== e ? e : []).map(e => S.default.getMember(W.guild_id, e))
    }, [er, W]),
    ed = l.useMemo(() => {
      let e = new Map;
      return eu.forEach(t => {
        null != t && void 0 !== t && e.set(t.userId, t)
      }), e
    }, [eu]),
    ec = function(e, t, n) {
      let a = (0, c.default)(e),
        s = e !== a,
        [i, r] = l.useState(!1);
      l.useEffect(() => {
        r(!0);
        let e = setTimeout(() => r(!1), 50);
        return () => clearTimeout(e)
      }, [e]);
      let o = !f.default.useReducedMotion && (s || i);
      return l.useMemo(() => {
        let a = o ? {
          transitionProperty: "height, max-height",
          transitionDuration: "".concat(50, "ms"),
          transitionTimingFunction: "ease-in-out"
        } : void 0;
        return e && null != t ? {
          ...a,
          minHeight: 200,
          maxHeight: n,
          height: t
        } : a
      }, [o, e, n, t])
    }(X, Q, s);
  if (null == G) return null;
  let ef = [];
  null != er && (ef = Array.from(er.embeddedActivity.userIds).map(e => T.default.getUser(e)).filter(e => null != e && void 0 !== e));
  let eh = (e, t) => {
    var n;
    if (null == e || void 0 === e || void 0 === t) return null;
    let l = ed.get(e.id),
      s = null !== (n = null == l ? void 0 : l.nick) && void 0 !== n ? n : x.default.getName(e);
    return (0, a.jsx)(u.TooltipContainer, {
      text: s,
      position: "bottom",
      children: (0, a.jsx)("img", {
        src: e.getAvatarURL(t.guild_id, w),
        alt: s,
        className: F.avatar
      }, e.id)
    }, e.id)
  };
  return (0, a.jsxs)("div", {
    className: i()(F.wrapper, k[q], (0, v.getThemeClass)(b.ThemeTypes.DARK)),
    ref: Z,
    style: ec,
    children: [null == H ? void 0 : H(), (0, a.jsxs)("div", {
      className: F.activityPanelContainer,
      children: [X ? null : (0, a.jsx)("div", {
        className: F.header,
        children: (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: F.headerTitle,
          children: null == G ? void 0 : G.name
        })
      }), (0, a.jsx)("div", {
        className: i()(F.activityContainer, {
          [F.activityContainerNoMargin]: ei
        }),
        style: {
          paddingLeft: el,
          paddingRight: el,
          paddingTop: es,
          paddingBottom: es
        },
        ref: ee,
        children: (0, a.jsx)(O.default, {
          className: F.iframe,
          embedId: (0, j.default)(B, G.id)
        })
      }), null != eo ? (0, a.jsxs)("div", {
        className: F.footer,
        children: [(0, a.jsx)(A.default, {
          renderIcon: !1,
          users: ef,
          size: w,
          max: 6,
          className: F.userAvatars,
          renderUser: e => eh(e, W)
        }), (0, a.jsxs)("div", {
          className: F.footerButtons,
          children: [(0, a.jsx)(P.default, {
            channelId: eo,
            className: F.circularButton
          }), (0, a.jsx)("div", {
            className: F.leaveButtonContainer,
            children: (0, a.jsx)(C.default, {
              applicationId: G.id,
              channelId: B,
              centerButton: !0,
              color: "red",
              className: F.leaveActivityButton
            })
          }), (0, a.jsx)(E.CenterControlButton, {
            label: U.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: K,
            iconComponent: I.default,
            themeable: !0,
            className: F.circularButton
          })]
        }), (0, a.jsx)("div", {
          className: F.flex
        })]
      }) : null]
    }), X ? (0, a.jsx)(h.default, {
      minHeight: 480,
      maxHeight: s,
      resizableNode: Z,
      onResize: e => {
        N.ComponentDispatch.dispatch(b.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), J(e)
      },
      onResizeEnd: e => {
        N.ComponentDispatch.dispatch(b.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), $(e)
      }
    }) : null]
  })
}