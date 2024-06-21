n.d(t, {
  Z: function() {
    return w
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(993365),
  c = n(481060),
  u = n(153867),
  d = n(110924),
  h = n(607070),
  m = n(900211),
  p = n(580747),
  E = n(740492),
  g = n(871499),
  f = n(402113),
  C = n(592125),
  _ = n(271383),
  I = n(944486),
  x = n(594174),
  T = n(602623),
  N = n(585483),
  Z = n(792125),
  S = n(51144),
  v = n(566620),
  A = n(317381),
  M = n(619915),
  R = n(952561),
  j = n(563218),
  L = n(719296),
  O = n(651612),
  P = n(918559),
  b = n(981631),
  y = n(689938),
  D = n(2314);
let U = T.u.SIZE_32,
  k = {
    [P.MI.NO_CHAT]: D.noChat,
    [P.MI.RESIZABLE]: D.resizable
  };

function w(e) {
  var t, n;
  let {
    maxHeight: s,
    connectedChannelId: w,
    renderExternalHeader: H
  } = e, B = (0, R.Z)(), G = (0, r.Wu)([A.ZP], () => null != w ? A.ZP.getEmbeddedActivitiesForChannel(w) : [], [w]), V = (0, r.e7)([C.Z], () => C.Z.getChannel(w)), F = (0, M.gb)(G), z = (0, M.uF)(F), W = i.useCallback(() => {
    (0, v.tg)(P.Ez.PIP)
  }, []), Y = i.useRef(null), K = (0, r.e7)([A.ZP], () => A.ZP.getFocusedLayout()), q = K !== P.MI.NO_CHAT, [X, Q] = i.useState(null !== (t = E.ZP.activityPanelHeight) && void 0 !== t ? t : s), J = i.useCallback(e => {
    u.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), $ = i.useRef(null), [ee, et] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == $.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, l;
      et({
        width: null !== (n = null === (e = $.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
        height: null !== (l = null === (t = $.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== l ? l : 0
      })
    });
    return e.observe($.current), () => e.disconnect()
  }, []);
  let en = ee.width / Math.max(ee.height, 1) < P.I0,
    el = 0,
    ei = 0,
    es = (0, p.Z)("activity_panel_iframe_fills_container");
  if (!es) {
    let e = ee.width,
      t = ee.height;
    en ? ((t = ee.width / P.I0) > ee.height && (e = (t = ee.height) * P.I0), ei = (ee.height - t) / 2) : ((e = Math.min(ee.height * P.I0)) > ee.width && (t = (e = ee.width) / P.I0), el = (ee.width - e) / 2)
  }
  let ea = z.get(null !== (n = null == B ? void 0 : B.id) && void 0 !== n ? n : ""),
    er = (0, r.e7)([I.Z], () => I.Z.getChannelId()),
    eo = (0, r.Wu)([_.ZP], () => {
      var e;
      return null == V ? [] : Array.from(null !== (e = null == ea ? void 0 : ea.embeddedActivity.userIds) && void 0 !== e ? e : []).map(e => _.ZP.getMember(V.guild_id, e))
    }, [ea, V]),
    ec = i.useMemo(() => {
      let e = new Map;
      return eo.forEach(t => {
        null != t && void 0 !== t && e.set(t.userId, t)
      }), e
    }, [eo]),
    eu = function(e, t, n) {
      let l = (0, d.Z)(e),
        s = e !== l,
        [a, r] = i.useState(!1);
      i.useEffect(() => {
        r(!0);
        let e = setTimeout(() => r(!1), 50);
        return () => clearTimeout(e)
      }, [e]);
      let o = !h.Z.useReducedMotion && (s || a);
      return i.useMemo(() => {
        let l = o ? {
          transitionProperty: "height, max-height",
          transitionDuration: "".concat(50, "ms"),
          transitionTimingFunction: "ease-in-out"
        } : void 0;
        return e && null != t ? {
          ...l,
          minHeight: 200,
          maxHeight: n,
          height: t
        } : l
      }, [o, e, n, t])
    }(q, X, s);
  if (null == B) return null;
  let ed = [];
  null != ea && (ed = Array.from(ea.embeddedActivity.userIds).map(e => x.default.getUser(e)).filter(e => null != e && void 0 !== e));
  let eh = (e, t) => {
    var n;
    if (null == e || void 0 === e || void 0 === t) return null;
    let i = ec.get(e.id),
      s = null !== (n = null == i ? void 0 : i.nick) && void 0 !== n ? n : S.ZP.getName(e);
    return (0, l.jsx)(c.TooltipContainer, {
      text: s,
      position: "bottom",
      children: (0, l.jsx)("img", {
        src: e.getAvatarURL(t.guild_id, U),
        alt: s,
        className: D.avatar
      }, e.id)
    }, e.id)
  };
  return (0, l.jsxs)("div", {
    className: a()(D.wrapper, k[K], (0, Z.Q)(b.BRd.DARK)),
    ref: Y,
    style: eu,
    children: [null == H ? void 0 : H(), (0, l.jsxs)("div", {
      className: D.activityPanelContainer,
      children: [q ? null : (0, l.jsx)("div", {
        className: D.header,
        children: (0, l.jsx)(o.x, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: D.headerTitle,
          children: null == B ? void 0 : B.name
        })
      }), (0, l.jsx)("div", {
        className: a()(D.activityContainer, {
          [D.activityContainerNoMargin]: es
        }),
        style: {
          paddingLeft: el,
          paddingRight: el,
          paddingTop: ei,
          paddingBottom: ei
        },
        ref: $,
        children: (0, l.jsx)(j.Z, {
          className: D.iframe,
          embedId: (0, L.Z)(w, B.id)
        })
      }), null != er ? (0, l.jsxs)("div", {
        className: D.footer,
        children: [(0, l.jsx)(T.Z, {
          renderIcon: !1,
          users: ed,
          size: U,
          max: 6,
          className: D.userAvatars,
          renderUser: e => eh(e, V)
        }), (0, l.jsxs)("div", {
          className: D.footerButtons,
          children: [(0, l.jsx)(O.Z, {
            channelId: er,
            className: D.circularButton
          }), (0, l.jsx)("div", {
            className: D.leaveButtonContainer,
            children: (0, l.jsx)(f.Z, {
              applicationId: B.id,
              channelId: w,
              centerButton: !0,
              color: "red",
              className: D.leaveActivityButton
            })
          }), (0, l.jsx)(g.d, {
            label: y.Z.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
            onClick: W,
            iconComponent: c.MinimizeIcon,
            themeable: !0,
            className: D.circularButton
          })]
        }), (0, l.jsx)("div", {
          className: D.flex
        })]
      }) : null]
    }), q ? (0, l.jsx)(m.Z, {
      minHeight: 480,
      maxHeight: s,
      resizableNode: Y,
      onResize: e => {
        N.S.dispatch(b.CkL.MANUAL_IFRAME_RESIZING, {
          resizing: !0
        }), Q(e)
      },
      onResizeEnd: e => {
        N.S.dispatch(b.CkL.MANUAL_IFRAME_RESIZING, {
          resizing: !1
        }), J(e)
      }
    }) : null]
  })
}