"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("544891"),
  d = s("704215"),
  u = s("481060"),
  c = s("230711"),
  S = s("497321"),
  E = s("43015"),
  T = s("136097"),
  _ = s("605236"),
  I = s("246946"),
  N = s("594174"),
  g = s("460562"),
  f = s("465670"),
  m = s("736921"),
  A = s("169278"),
  C = s("823379"),
  O = s("981631"),
  h = s("921944"),
  R = s("689938"),
  p = s("663563");

function M() {
  let e;
  let {
    currentSession: t,
    otherSessions: s
  } = (0, T.useAuthSessions)(), i = (0, r.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), l = (0, r.useStateFromStores)([N.default], () => N.default.getCurrentUser()), [c, g] = n.useState(!1);
  n.useEffect(() => {
    (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.AUTH_SESSIONS_NEW, {
      dismissAction: h.ContentDismissActionType.AUTO
    }), (0, E.fetchAuthSessions)();
    let e = setTimeout(() => g(!0), 500);
    return () => {
      clearTimeout(e), (0, E.clearAuthSessions)()
    }
  }, []);
  let f = () => {
      o.HTTP.post({
        url: O.Endpoints.AUTH_SESSION_NOTIFICATIONS_DEBUG
      })
    },
    [m, A] = n.useState(new Set);
  return i ? (0, a.jsx)(S.default, {}) : (e = null == t && 0 === s.length ? c ? (0, a.jsx)("div", {
    className: p.loading,
    children: (0, a.jsx)(u.Spinner, {})
  }) : null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: p.sessions,
      children: [(0, a.jsx)(u.FormSection, {
        tag: u.FormTitleTags.H5,
        title: R.default.Messages.AUTH_SESSIONS_CURRENT,
        titleClassName: p.groupTitle,
        children: null != t ? (0, a.jsx)(D, {
          session: t,
          current: !0
        }) : null
      }), !(s.length > 0) && (null == l ? void 0 : l.mfaEnabled) ? null : (0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H5,
        title: R.default.Messages.AUTH_SESSIONS_OTHERS,
        titleClassName: p.groupTitle,
        className: p.otherSessions,
        children: [s.map(e => (0, a.jsx)(D, {
          session: e,
          useChecks: m.size > 0,
          checked: m.has(e.id_hash),
          setChecked: t => {
            let s = new Set(m);
            t ? s.add(e.id_hash) : s.delete(e.id_hash), A(s)
          }
        }, e.id_hash)), (null == l ? void 0 : l.mfaEnabled) ? null : (0, a.jsx)(x, {})]
      })]
    }), s.length > 0 ? (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H5,
      title: m.size > 0 ? R.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_TITLE : R.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_TITLE,
      children: [(0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        children: R.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_DESCRIPTION
      }), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.RED,
        size: u.Button.Sizes.SMALL,
        className: p.logOutAllButton,
        onClick: () => {
          m.size > 0 ? (0, E.logOutSessions)(Array.from(m)) : (0, E.logOutSessions)(s.map(e => e.id_hash))
        },
        children: m.size > 0 ? R.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_ACTION.format({
          count: m.size
        }) : R.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_ACTION
      })]
    }) : null]
  }), (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: R.default.Messages.AUTH_SESSIONS,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: p.description,
      children: R.default.Messages.AUTH_SESSIONS_DESCRIPTION
    }), (null == l ? void 0 : l.isStaff()) ? (0, a.jsxs)("div", {
      className: p.tools,
      children: [(0, a.jsx)(u.Text, {
        className: p.toolsTitle,
        variant: "text-md/bold",
        children: "DEV TOOLS"
      }), (0, a.jsx)(u.Text, {
        className: p.toolsTitle,
        variant: "text-sm/normal",
        color: "text-danger",
        children: "These tools are only shown to staff users."
      }), (0, a.jsx)(u.Tooltip, {
        text: "Triggers mobile and email suspicious session notifications for the current user",
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, a.jsx)(u.Button, {
            size: u.Button.Sizes.SMALL,
            color: u.Button.Colors.PRIMARY,
            onClick: f,
            onMouseEnter: t,
            onMouseLeave: s,
            children: "Trigger Suspicious Sessions Notification"
          })
        }
      })]
    }) : null, e]
  }))
}

function D(e) {
  var t, s, n, i, r;
  let {
    session: o,
    current: d,
    setChecked: c,
    checked: S,
    useChecks: _
  } = e, I = null !== (r = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== r ? r : null === (s = o.client_info) || void 0 === s ? void 0 : s.ip, N = null === (n = o.client_info) || void 0 === n ? void 0 : n.platform, {
    text: g,
    icon: O
  } = function(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
      case null:
      case void 0:
      case "":
        return {
          text: R.default.Messages.AUTH_SESSIONS_OS_UNKNOWN, icon: A.default
        };
      case "ios":
      case "android":
        return {
          text: e, icon: m.default
        };
      default:
        return {
          text: e, icon: A.default
        }
    }
  }(null === (i = o.client_info) || void 0 === i ? void 0 : i.os), h = d ? null : (0, T.formatDate)(o.approx_last_used_time), M = [g, N].filter(C.isNotNullish), D = [I, h].filter(C.isNotNullish), x = (0, u.useRedesignIconContext)().enabled ? 24 : 32;
  return (0, a.jsxs)("div", {
    className: l()(p.session, d ? p.currentSession : null),
    children: [(0, a.jsx)("div", {
      className: p.sessionIcon,
      children: (0, a.jsx)(O, {
        width: x,
        height: x
      })
    }), (0, a.jsxs)("div", {
      className: p.sessionInfo,
      children: [(0, a.jsxs)(u.Text, {
        variant: "eyebrow",
        className: p.sessionInfoRow,
        children: [(0, a.jsx)("span", {
          children: M[0]
        }), M.length > 1 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("span", {
            children: "\xb7"
          }), (0, a.jsx)("span", {
            children: M[1]
          })]
        })]
      }), (0, a.jsxs)(u.Text, {
        variant: "text-sm/medium",
        className: p.sessionInfoRow,
        children: [(0, a.jsx)("span", {
          children: D[0]
        }), D.length > 1 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("span", {
            children: "\xb7"
          }), (0, a.jsx)("span", {
            children: D[1]
          })]
        })]
      })]
    }), d ? null : _ ? (0, a.jsx)("div", {
      className: p.sessionCheckbox,
      children: (0, a.jsx)(u.Checkbox, {
        onChange: (e, t) => {
          null == c || c(t)
        },
        value: S
      })
    }) : (0, a.jsx)(u.Clickable, {
      className: p.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == c || c(!0) : (0, E.logOutSessions)(o.id_hash)
      },
      "aria-label": R.default.Messages.AUTH_SESSIONS_SESSION_LOG_OUT,
      children: (0, a.jsx)(f.default, {})
    })]
  }, o.id_hash)
}

function x() {
  return (0, a.jsxs)("div", {
    className: l()(p.session, p.legacySession),
    children: [(0, a.jsx)("div", {
      className: p.sessionIcon,
      children: (0, a.jsx)(g.default, {
        width: "32",
        height: "32"
      })
    }), (0, a.jsxs)("div", {
      className: p.sessionInfo,
      children: [(0, a.jsx)(u.Text, {
        variant: "eyebrow",
        className: p.sessionInfoRow,
        color: "text-muted",
        children: (0, a.jsx)("span", {
          children: R.default.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY
        })
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: p.sessionInfoRow,
        color: "text-muted",
        children: (0, a.jsx)("span", {
          children: R.default.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY_LOG_OUT.format({
            onClick: () => c.default.setSection(O.UserSettingsSections.ACCOUNT)
          })
        })
      })]
    })]
  })
}