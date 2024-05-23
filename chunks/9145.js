"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
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

function H(e) {
  var t, n, s;
  let {
    maxHeight: H,
    connectedChannelId: B,
    renderExternalHeader: G
  } = e, V = (0, L.default)(), W = (0, r.useStateFromStoresArray)([R.default], () => null != B ? R.default.getEmbeddedActivitiesForChannel(B) : [], [B]), Y = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(B)), z = (0, y.useEmbeddedApps)(W), K = (0, y.useEmbeddedAppsWithPresence)(z), Z = l.useCallback(() => {
    (0, M.updateActivityPanelMode)(D.ActivityPanelModes.PIP)
  }, []), q = l.useRef(null), X = (0, r.useStateFromStores)([R.default], () => R.default.getFocusedLayout()), Q = X !== D.FocusedActivityLayouts.NO_CHAT, [J, $] = l.useState(null !== (s = p.default.activityPanelHeight) && void 0 !== s ? s : H), ee = l.useCallback(e => {
    d.default.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), et = l.useRef(null), [en, ea] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == et.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      ea({
        width: null !== (n = null === (e = et.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
        height: null !== (a = null === (t = et.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
      })
    });
    return e.observe(et.current), () => e.disconnect()
  }, []);
  let el = en.width / Math.max(en.height, 1) < D.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
    es = 0,
    ei = 0,
    er = (0, m.default)("activity_panel_iframe_fills_container");
  if (!er) {
    let e = en.width,
      t = en.height;
    el ? ((t = en.width / D.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > en.height && (e = (t = en.height) * D.LANDSCAPE_ACTIVITY_ASPECT_RATIO), ei = (en.height - t) / 2) : ((e = Math.min(en.height * D.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > en.width && (t = (e = en.width) / D.LANDSCAPE_ACTIVITY_ASPECT_RATIO), es = (en.width - e) / 2)
  }
  let eo = K.get(null === (n = z[0]) || void 0 === n ? void 0 : null === (t = n.application) || void 0 === t ? void 0 : t.id),
    eu = (0, r.useStateFromStores)([_.default], () => _.default.getChannelId()),
    ed = (0, r.useStateFromStores)([S.default], () => {
      var e;
      return null == Y ? [] : Array.from(null !== (e = null == eo ? void 0 : eo.embeddedActivity.userIds) && void 0 !== e ? e : []).map(e => S.default.getMember(Y.guild_id, e))
    }, [eo, Y]),
    ec = l.useMemo(() => {
      let e = new Map;
      return ed.forEach(t => {
        null != t && void 0 !== t && e.set(t.userId, t)
      }), e
    }, [ed]),
    ef = function(e, t, n) {
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
    }(Q, J, H);
  if (null == V) return null;
  let eh = [];
  null != eo && (eh = Array.from(eo.embeddedActivity.userIds).map(e => T.default.getUser(e)).filter(e => null != e && void 0 !== e));
  let em = (e, t) => {
    var n;
    if (null == e || void 0 === e || void 0 === t) return null;
    let l = ec.get(e.id),
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
    className: i()(F.wrapper, k[X], (0, v.getThemeClass)(b.ThemeTypes.DARK)),
    ref: q,
    style: ef,
    children: [null == G ? void 0 : G(), (0, a.jsxs)("div", {
      className: F.activityPanelContainer,
      children: [Q ? null : (0, a.jsx)("div", {
        className: F.header,
        children: (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: F.headerTitle,
          children: null == V ? void 0 : V.name
        })
      }), (0, a.jsx)("div", {
        className: i()(F.activityContainer, {
          [F.activityContainerNoMargin]: er
        }),
        style: {
          paddingLeft: es,
          paddingRight: es,
          paddingTop: ei,
          paddingBottom: ei
        },
        ref: et,
        children: (0, a.jsx)(O.default, {
          className: F.iframe,
          embedId: (0, j.default)(B, V.id)
        })
      }), null != eu ? (0, a.jsxs)("div", {
        className: F.footer,
        children: [(0, a.jsx)(A.default, {
          renderIcon: !1,
          users: eh,
          size: w,
          max: 6,
          className: F.userAvatars,
          renderUser: e => em(e, Y)
        }), (0, a.jsxs)("div", {
          className: F.footerButtons,
          children: [(0, a.jsx)(P.default, {
            channelId: eu,
            className: F.circularButton
          }), (0, a.jsx)("div", {
            className: F.leaveButtonContainer,
            children: (0, a.jsx)(C.default, {
              applicationId: V.id,
              channelId: B,
              centerButton: !0,
              color: "red",
              className: F.leaveActivityButton
            })
          }), (0, a.jsx)(E.CenterControlButton, {
            label: U.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: Z,
            iconComponent: I.default,
            themeable: !0,
            className: F.circularButton
          })]
        }), (0, a.jsx)("div", {
          className: F.flex
        })]
      }) : null]
    }), Q ? (0, a.jsx)(h.default, {
      minHeight: 480,
      maxHeight: H,
      resizableNode: q,
      onResize: e => {
        N.ComponentDispatch.dispatch(b.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), $(e)
      },
      onResizeEnd: e => {
        N.ComponentDispatch.dispatch(b.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), ee(e)
      }
    }) : null]
  })
}