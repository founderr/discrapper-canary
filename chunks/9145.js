"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
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
  c = n("900211"),
  f = n("580747"),
  h = n("740492"),
  m = n("871499"),
  p = n("402113"),
  E = n("592125"),
  C = n("271383"),
  g = n("944486"),
  S = n("594174"),
  _ = n("110456"),
  T = n("602623"),
  I = n("585483"),
  A = n("792125"),
  N = n("51144"),
  v = n("566620"),
  x = n("317381"),
  M = n("619915"),
  R = n("952561"),
  L = n("563218"),
  y = n("719296"),
  O = n("651612"),
  j = n("918559"),
  P = n("981631"),
  D = n("689938"),
  b = n("258004");
let U = T.Sizes.SIZE_32,
  F = {
    [j.FocusedActivityLayouts.NO_CHAT]: b.noChat,
    [j.FocusedActivityLayouts.RESIZABLE]: b.resizable
  };

function w(e) {
  var t, n, s;
  let {
    maxHeight: w,
    connectedChannelId: k,
    renderExternalHeader: B
  } = e, H = (0, R.default)(), G = (0, r.useStateFromStoresArray)([x.default], () => null != k ? x.default.getEmbeddedActivitiesForChannel(k) : [], [k]), V = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(k)), W = (0, M.useEmbeddedApps)(G), Y = (0, M.useEmbeddedAppsWithPresence)(W), z = l.useCallback(() => {
    (0, v.updateActivityPanelMode)(j.ActivityPanelModes.PIP)
  }, []), K = l.useRef(null), Z = (0, r.useStateFromStores)([x.default], () => x.default.getFocusedLayout()), q = Z !== j.FocusedActivityLayouts.NO_CHAT, [X, Q] = l.useState(null !== (s = h.default.activityPanelHeight) && void 0 !== s ? s : w), J = l.useCallback(e => {
    d.default.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), $ = l.useRef(null), [ee, et] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == $.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, a;
      et({
        width: null !== (n = null === (e = $.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
        height: null !== (a = null === (t = $.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
      })
    });
    return e.observe($.current), () => e.disconnect()
  }, []);
  let en = ee.width / Math.max(ee.height, 1) < j.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
    ea = 0,
    el = 0,
    es = (0, f.default)("activity_panel_iframe_fills_container");
  if (!es) {
    let e = ee.width,
      t = ee.height;
    en ? ((t = ee.width / j.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > ee.height && (e = (t = ee.height) * j.LANDSCAPE_ACTIVITY_ASPECT_RATIO), el = (ee.height - t) / 2) : ((e = Math.min(ee.height * j.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > ee.width && (t = (e = ee.width) / j.LANDSCAPE_ACTIVITY_ASPECT_RATIO), ea = (ee.width - e) / 2)
  }
  let ei = Y.get(null === (n = W[0]) || void 0 === n ? void 0 : null === (t = n.application) || void 0 === t ? void 0 : t.id),
    er = (0, r.useStateFromStores)([g.default], () => g.default.getChannelId()),
    eo = (0, r.useStateFromStores)([C.default], () => {
      var e;
      return null == V ? [] : Array.from(null !== (e = null == ei ? void 0 : ei.embeddedActivity.userIds) && void 0 !== e ? e : []).map(e => C.default.getMember(V.guild_id, e))
    }, [ei, V]),
    eu = l.useMemo(() => {
      let e = new Map;
      return eo.forEach(t => {
        null != t && void 0 !== t && e.set(t.userId, t)
      }), e
    }, [eo]);
  if (null == H) return null;
  let ed = [];
  null != ei && (ed = Array.from(ei.embeddedActivity.userIds).map(e => S.default.getUser(e)).filter(e => null != e && void 0 !== e));
  let ec = (e, t) => {
    var n;
    if (null == e || void 0 === e || void 0 === t) return null;
    let l = eu.get(e.id),
      s = null !== (n = null == l ? void 0 : l.nick) && void 0 !== n ? n : N.default.getName(e);
    return (0, a.jsx)(u.TooltipContainer, {
      text: s,
      position: "bottom",
      children: (0, a.jsx)("img", {
        src: e.getAvatarURL(t.guild_id, U),
        alt: s,
        className: b.avatar
      }, e.id)
    }, e.id)
  };
  return (0, a.jsxs)("div", {
    className: i()(b.wrapper, F[Z], (0, A.getThemeClass)(P.ThemeTypes.DARK)),
    ref: K,
    style: q && null != X ? {
      minHeight: 200,
      maxHeight: w,
      height: X
    } : void 0,
    children: [null == B ? void 0 : B(), (0, a.jsxs)("div", {
      className: b.activityPanelContainer,
      children: [q ? null : (0, a.jsx)("div", {
        className: b.header,
        children: (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: b.headerTitle,
          children: null == H ? void 0 : H.name
        })
      }), (0, a.jsx)("div", {
        className: i()(b.activityContainer, {
          [b.activityContainerNoMargin]: es
        }),
        style: {
          paddingLeft: ea,
          paddingRight: ea,
          paddingTop: el,
          paddingBottom: el
        },
        ref: $,
        children: (0, a.jsx)(L.default, {
          className: b.iframe,
          embedId: (0, y.default)(k, H.id)
        })
      }), null != er ? (0, a.jsxs)("div", {
        className: b.footer,
        children: [(0, a.jsx)(T.default, {
          renderIcon: !1,
          users: ed,
          size: U,
          max: 6,
          className: b.userAvatars,
          renderUser: e => ec(e, V)
        }), (0, a.jsxs)("div", {
          className: b.footerButtons,
          children: [(0, a.jsx)(O.default, {
            channelId: er,
            className: b.circularButton
          }), (0, a.jsx)("div", {
            className: b.leaveButtonContainer,
            children: (0, a.jsx)(p.default, {
              applicationId: H.id,
              channelId: k,
              centerButton: !0,
              color: "red",
              className: b.leaveActivityButton
            })
          }), (0, a.jsx)(m.CenterControlButton, {
            label: D.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: z,
            iconComponent: _.default,
            themeable: !0,
            className: b.circularButton
          })]
        }), (0, a.jsx)("div", {
          className: b.flex
        })]
      }) : null]
    }), q ? (0, a.jsx)(c.default, {
      minHeight: 480,
      maxHeight: w,
      resizableNode: K,
      onResize: e => {
        I.ComponentDispatch.dispatch(P.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), Q(e)
      },
      onResizeEnd: e => {
        I.ComponentDispatch.dispatch(P.ComponentActions.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), J(e)
      }
    }) : null]
  })
}