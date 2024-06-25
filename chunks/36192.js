t.d(s, {
  Z: function() {
    return R
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(544891),
  c = t(704215),
  E = t(481060),
  d = t(230711),
  _ = t(497321),
  T = t(43015),
  S = t(136097),
  u = t(605236),
  I = t(246946),
  N = t(594174),
  A = t(460562),
  C = t(823379),
  O = t(981631),
  m = t(921944),
  h = t(689938),
  g = t(522636);

function R() {
  let e;
  let {
    currentSession: s,
    otherSessions: t
  } = (0, S.h)(), a = (0, r.e7)([I.Z], () => I.Z.hidePersonalInformation), l = (0, r.e7)([N.default], () => N.default.getCurrentUser()), [d, A] = i.useState(!1);
  i.useEffect(() => {
    (0, u.EW)(c.z.AUTH_SESSIONS_NEW, {
      dismissAction: m.L.AUTO
    }), (0, T.fw)();
    let e = setTimeout(() => A(!0), 500);
    return () => {
      clearTimeout(e), (0, T.$Z)()
    }
  }, []);
  let C = () => {
      o.tn.post({
        url: O.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG
      })
    },
    [R, D] = i.useState(new Set);
  return a ? (0, n.jsx)(_.Z, {}) : (e = null == s && 0 === t.length ? d ? (0, n.jsx)("div", {
    className: g.loading,
    children: (0, n.jsx)(E.Spinner, {})
  }) : null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: g.sessions,
      children: [(0, n.jsx)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        title: h.Z.Messages.AUTH_SESSIONS_CURRENT,
        titleClassName: g.groupTitle,
        children: null != s ? (0, n.jsx)(M, {
          session: s,
          current: !0
        }) : null
      }), !(t.length > 0) && (null == l ? void 0 : l.mfaEnabled) ? null : (0, n.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        title: h.Z.Messages.AUTH_SESSIONS_OTHERS,
        titleClassName: g.groupTitle,
        className: g.otherSessions,
        children: [t.map(e => (0, n.jsx)(M, {
          session: e,
          useChecks: R.size > 0,
          checked: R.has(e.id_hash),
          setChecked: s => {
            let t = new Set(R);
            s ? t.add(e.id_hash) : t.delete(e.id_hash), D(t)
          }
        }, e.id_hash)), (null == l ? void 0 : l.mfaEnabled) ? null : (0, n.jsx)(x, {})]
      })]
    }), t.length > 0 ? (0, n.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H5,
      title: R.size > 0 ? h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_TITLE : h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_TITLE,
      children: [(0, n.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        children: h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_DESCRIPTION
      }), (0, n.jsx)(E.Button, {
        look: E.Button.Looks.OUTLINED,
        color: E.Button.Colors.RED,
        size: E.Button.Sizes.SMALL,
        className: g.logOutAllButton,
        onClick: () => {
          R.size > 0 ? (0, T.L$)(Array.from(R)) : (0, T.L$)(t.map(e => e.id_hash))
        },
        children: R.size > 0 ? h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_ACTION.format({
          count: R.size
        }) : h.Z.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_ACTION
      })]
    }) : null]
  }), (0, n.jsxs)(E.FormSection, {
    tag: E.FormTitleTags.H1,
    title: h.Z.Messages.AUTH_SESSIONS,
    children: [(0, n.jsx)(E.FormText, {
      type: E.FormTextTypes.DESCRIPTION,
      className: g.description,
      children: h.Z.Messages.AUTH_SESSIONS_DESCRIPTION
    }), (null == l ? void 0 : l.isStaff()) ? (0, n.jsxs)("div", {
      className: g.tools,
      children: [(0, n.jsx)(E.Text, {
        className: g.toolsTitle,
        variant: "text-md/bold",
        children: "DEV TOOLS"
      }), (0, n.jsx)(E.Text, {
        className: g.toolsTitle,
        variant: "text-sm/normal",
        color: "text-danger",
        children: "These tools are only shown to staff users."
      }), (0, n.jsx)(E.Tooltip, {
        text: "Triggers mobile and email suspicious session notifications for the current user",
        children: e => {
          let {
            onMouseEnter: s,
            onMouseLeave: t
          } = e;
          return (0, n.jsx)(E.Button, {
            size: E.Button.Sizes.SMALL,
            color: E.Button.Colors.PRIMARY,
            onClick: C,
            onMouseEnter: s,
            onMouseLeave: t,
            children: "Trigger Suspicious Sessions Notification"
          })
        }
      })]
    }) : null, e]
  }))
}

function M(e) {
  var s, t, i, a, r;
  let {
    session: o,
    current: c,
    setChecked: d,
    checked: _,
    useChecks: u
  } = e, I = null !== (r = null === (s = o.client_info) || void 0 === s ? void 0 : s.location) && void 0 !== r ? r : null === (t = o.client_info) || void 0 === t ? void 0 : t.ip, N = null === (i = o.client_info) || void 0 === i ? void 0 : i.platform, {
    text: A,
    icon: O
  } = function(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
      case null:
      case void 0:
      case "":
        return {
          text: h.Z.Messages.AUTH_SESSIONS_OS_UNKNOWN, icon: E.ScreenIcon
        };
      case "ios":
      case "android":
        return {
          text: e, icon: E.MobilePhoneIcon
        };
      default:
        return {
          text: e, icon: E.ScreenIcon
        }
    }
  }(null === (a = o.client_info) || void 0 === a ? void 0 : a.os), m = c ? null : (0, S.p)(o.approx_last_used_time), R = [A, N].filter(C.lm), M = [I, m].filter(C.lm);
  return (0, n.jsxs)("div", {
    className: l()(g.session, c ? g.currentSession : null),
    children: [(0, n.jsx)("div", {
      className: g.sessionIcon,
      children: (0, n.jsx)(O, {
        size: "md",
        color: "currentColor"
      })
    }), (0, n.jsxs)("div", {
      className: g.sessionInfo,
      children: [(0, n.jsxs)(E.Text, {
        variant: "eyebrow",
        className: g.sessionInfoRow,
        children: [(0, n.jsx)("span", {
          children: R[0]
        }), R.length > 1 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("span", {
            children: "\xb7"
          }), (0, n.jsx)("span", {
            children: R[1]
          })]
        })]
      }), (0, n.jsxs)(E.Text, {
        variant: "text-sm/medium",
        className: g.sessionInfoRow,
        children: [(0, n.jsx)("span", {
          children: M[0]
        }), M.length > 1 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("span", {
            children: "\xb7"
          }), (0, n.jsx)("span", {
            children: M[1]
          })]
        })]
      })]
    }), c ? null : u ? (0, n.jsx)("div", {
      className: g.sessionCheckbox,
      children: (0, n.jsx)(E.Checkbox, {
        onChange: (e, s) => {
          null == d || d(s)
        },
        value: _
      })
    }) : (0, n.jsx)(E.Clickable, {
      className: g.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == d || d(!0) : (0, T.L$)(o.id_hash)
      },
      "aria-label": h.Z.Messages.AUTH_SESSIONS_SESSION_LOG_OUT,
      children: (0, n.jsx)(E.CloseSmallIcon, {
        size: "md",
        color: "currentColor"
      })
    })]
  }, o.id_hash)
}

function x() {
  return (0, n.jsxs)("div", {
    className: l()(g.session, g.legacySession),
    children: [(0, n.jsx)("div", {
      className: g.sessionIcon,
      children: (0, n.jsx)(A.Z, {
        width: "32",
        height: "32"
      })
    }), (0, n.jsxs)("div", {
      className: g.sessionInfo,
      children: [(0, n.jsx)(E.Text, {
        variant: "eyebrow",
        className: g.sessionInfoRow,
        color: "text-muted",
        children: (0, n.jsx)("span", {
          children: h.Z.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY
        })
      }), (0, n.jsx)(E.Text, {
        variant: "text-sm/medium",
        className: g.sessionInfoRow,
        color: "text-muted",
        children: (0, n.jsx)("span", {
          children: h.Z.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY_LOG_OUT.format({
            onClick: () => d.Z.setSection(O.oAB.ACCOUNT)
          })
        })
      })]
    })]
  })
}