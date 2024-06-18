"use strict";
n.d(t, {
  Z: function() {
    return R
  },
  _: function() {
    return j
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(512722),
  r = n.n(a),
  i = n(920906),
  o = n(442837),
  c = n(481060),
  d = n(53281),
  u = n(607070),
  m = n(541716),
  h = n(859235),
  g = n(898463),
  x = n(592125),
  _ = n(703558),
  E = n(117530),
  f = n(585483),
  C = n(127654),
  T = n(228392),
  N = n(981631),
  I = n(344479);
let S = {
    scale: .95,
    opacity: 0
  },
  p = {
    scale: 1,
    opacity: 1
  },
  v = {
    scale: 1,
    opacity: 1
  },
  M = {
    tension: 2400,
    friction: 52
  };

function j(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: a,
    onMouseEnter: i
  } = e, u = l.useRef(null), m = (0, o.e7)([x.Z], () => x.Z.getChannel(t), [t]);
  return r()(null != m, "Forum Channel is null"), (0, s.jsxs)(c.Clickable, {
    className: I.uploadInput,
    onMouseEnter: i,
    onClick: () => {
      (0, T.N3)({
        isMobile: !1
      }), null == n || n()
    },
    onKeyPress: e => {
      if ("Enter" === e.key) {
        var t;
        null === (t = u.current) || void 0 === t || t.activateUploadDialogue(), (0, T.N3)({
          isMobile: !1
        })
      }
    },
    children: [(0, s.jsx)(d.Z, {
      className: I.fileInput,
      ref: u,
      onChange: e => {
        null == a || a(), (0, C.d)(e.currentTarget.files, m, _.d.FirstThreadMessage, {
          requireConfirm: !0
        }), f.S.dispatch(N.CkL.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: -1,
      "aria-hidden": !0
    }), (0, s.jsx)(c.ImagePlusIcon, {
      size: "custom",
      color: "currentColor",
      width: 28,
      height: 28,
      className: I.uploadIcon
    })]
  })
}

function A(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [a, r] = l.useState(!1), {
    reducedMotion: d
  } = l.useContext(c.AccessibilityPreferencesContext), x = (0, i.useSpring)({
    from: d.enabled ? p : S,
    to: v,
    config: M
  }), _ = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), f = (0, o.e7)([E.Z], () => E.Z.getUploads(t, m.I.CREATE_FORUM_POST.drafts.type));
  return (0, s.jsx)(i.animated.div, {
    className: I.popoutContainer,
    onMouseLeave: () => {
      !a && n()
    },
    style: x,
    children: (0, s.jsxs)(c.ScrollerThin, {
      orientation: "horizontal",
      className: I.popout,
      paddingFix: !1,
      fade: !0,
      children: [(0, s.jsx)(j, {
        channelId: t,
        onClick: () => {
          r(!0)
        },
        onClose: () => {
          r(!1), n()
        }
      }), (0, s.jsx)("div", {
        className: I.uploads,
        children: f.map(e => (0, s.jsx)(g.Z, {
          channelId: t,
          draftType: m.I.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: _,
          hideFileName: !0,
          size: h.q.SMALL
        }, e.id))
      })]
    })
  })
}

function R(e) {
  let {
    channelId: t
  } = e, [n, a] = l.useState(!1), r = (0, o.e7)([E.Z], () => E.Z.getUploads(t, m.I.CREATE_FORUM_POST.drafts.type)), i = r.length, c = i > 0;
  l.useEffect(() => {
    n && !c && a(!1)
  }, [n, c]);
  let d = () => {
    c && a(!0)
  };
  return (0, s.jsxs)("div", {
    className: I.container,
    children: [c ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.r, {
        upload: r[0],
        size: h.q.SMALL,
        onMouseEnter: d
      }), !n && (0, s.jsx)("div", {
        className: I.badge,
        children: i
      })]
    }) : (0, s.jsx)(j, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, s.jsx)(A, {
      channelId: t,
      closePopout: () => {
        a(!1)
      }
    })]
  })
}