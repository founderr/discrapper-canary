"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("544891"),
  d = s("524437"),
  u = s("481060"),
  c = s("230711"),
  S = s("497321"),
  E = s("43015"),
  T = s("136097"),
  _ = s("605236"),
  f = s("246946"),
  m = s("594174"),
  g = s("460562"),
  I = s("465670"),
  N = s("736921"),
  h = s("169278"),
  C = s("823379"),
  A = s("981631"),
  p = s("921944"),
  O = s("689938"),
  R = s("663563");

function x() {
  let e;
  let {
    currentSession: t,
    otherSessions: s
  } = (0, T.useAuthSessions)(), l = (0, r.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), i = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), [c, g] = n.useState(!1);
  n.useEffect(() => {
    (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.AUTH_SESSIONS_NEW, {
      dismissAction: p.ContentDismissActionType.AUTO
    }), (0, E.fetchAuthSessions)();
    let e = setTimeout(() => g(!0), 500);
    return () => {
      clearTimeout(e), (0, E.clearAuthSessions)()
    }
  }, []);
  let I = () => {
      o.HTTP.post({
        url: A.Endpoints.AUTH_SESSION_NOTIFICATIONS_DEBUG
      })
    },
    [N, h] = n.useState(new Set);
  return l ? (0, a.jsx)(S.default, {}) : (e = null == t && 0 === s.length ? c ? (0, a.jsx)("div", {
    className: R.loading,
    children: (0, a.jsx)(u.Spinner, {})
  }) : null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: R.sessions,
      children: [(0, a.jsx)(u.FormSection, {
        tag: u.FormTitleTags.H5,
        title: O.default.Messages.AUTH_SESSIONS_CURRENT,
        titleClassName: R.groupTitle,
        children: null != t ? (0, a.jsx)(M, {
          session: t,
          current: !0
        }) : null
      }), !(s.length > 0) && (null == i ? void 0 : i.mfaEnabled) ? null : (0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H5,
        title: O.default.Messages.AUTH_SESSIONS_OTHERS,
        titleClassName: R.groupTitle,
        className: R.otherSessions,
        children: [s.map(e => (0, a.jsx)(M, {
          session: e,
          useChecks: N.size > 0,
          checked: N.has(e.id_hash),
          setChecked: t => {
            let s = new Set(N);
            t ? s.add(e.id_hash) : s.delete(e.id_hash), h(s)
          }
        }, e.id_hash)), (null == i ? void 0 : i.mfaEnabled) ? null : (0, a.jsx)(v, {})]
      })]
    }), s.length > 0 ? (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H5,
      title: N.size > 0 ? O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_TITLE : O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_TITLE,
      children: [(0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        children: O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_DESCRIPTION
      }), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.OUTLINED,
        color: u.Button.Colors.RED,
        size: u.Button.Sizes.SMALL,
        className: R.logOutAllButton,
        onClick: () => {
          N.size > 0 ? (0, E.logOutSessions)(Array.from(N)) : (0, E.logOutSessions)(s.map(e => e.id_hash))
        },
        children: N.size > 0 ? O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_ACTION.format({
          count: N.size
        }) : O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_ACTION
      })]
    }) : null]
  }), (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: O.default.Messages.AUTH_SESSIONS,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: R.description,
      children: O.default.Messages.AUTH_SESSIONS_DESCRIPTION
    }), (null == i ? void 0 : i.isStaff()) ? (0, a.jsxs)("div", {
      className: R.tools,
      children: [(0, a.jsx)(u.Text, {
        className: R.toolsTitle,
        variant: "text-md/bold",
        children: "DEV TOOLS"
      }), (0, a.jsx)(u.Text, {
        className: R.toolsTitle,
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
            onClick: I,
            onMouseEnter: t,
            onMouseLeave: s,
            children: "Trigger Suspicious Sessions Notification"
          })
        }
      })]
    }) : null, e]
  }))
}

function M(e) {
  var t, s, n, l, r;
  let {
    session: o,
    current: d,
    setChecked: c,
    checked: S,
    useChecks: _
  } = e, f = null !== (r = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== r ? r : null === (s = o.client_info) || void 0 === s ? void 0 : s.ip, m = null === (n = o.client_info) || void 0 === n ? void 0 : n.platform, {
    text: g,
    icon: A
  } = function(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
      case null:
      case void 0:
      case "":
        return {
          text: O.default.Messages.AUTH_SESSIONS_OS_UNKNOWN, icon: h.default
        };
      case "ios":
      case "android":
        return {
          text: e, icon: N.default
        };
      default:
        return {
          text: e, icon: h.default
        }
    }
  }(null === (l = o.client_info) || void 0 === l ? void 0 : l.os), p = d ? null : (0, T.formatDate)(o.approx_last_used_time), x = [g, m].filter(C.isNotNullish), M = [f, p].filter(C.isNotNullish), v = (0, u.useRedesignIconContext)().enabled ? 24 : 32;
  return (0, a.jsxs)("div", {
    className: i()(R.session, d ? R.currentSession : null),
    children: [(0, a.jsx)("div", {
      className: R.sessionIcon,
      children: (0, a.jsx)(A, {
        width: v,
        height: v
      })
    }), (0, a.jsxs)("div", {
      className: R.sessionInfo,
      children: [(0, a.jsxs)(u.Text, {
        variant: "eyebrow",
        className: R.sessionInfoRow,
        children: [(0, a.jsx)("span", {
          children: x[0]
        }), x.length > 1 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("span", {
            children: "\xb7"
          }), (0, a.jsx)("span", {
            children: x[1]
          })]
        })]
      }), (0, a.jsxs)(u.Text, {
        variant: "text-sm/medium",
        className: R.sessionInfoRow,
        children: [(0, a.jsx)("span", {
          children: M[0]
        }), M.length > 1 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("span", {
            children: "\xb7"
          }), (0, a.jsx)("span", {
            children: M[1]
          })]
        })]
      })]
    }), d ? null : _ ? (0, a.jsx)("div", {
      className: R.sessionCheckbox,
      children: (0, a.jsx)(u.Checkbox, {
        onChange: (e, t) => {
          null == c || c(t)
        },
        value: S
      })
    }) : (0, a.jsx)(u.Clickable, {
      className: R.sessionMoreButton,
      onClick: e => {
        e.shiftKey ? null == c || c(!0) : (0, E.logOutSessions)(o.id_hash)
      },
      "aria-label": O.default.Messages.AUTH_SESSIONS_SESSION_LOG_OUT,
      children: (0, a.jsx)(I.default, {})
    })]
  }, o.id_hash)
}

function v() {
  return (0, a.jsxs)("div", {
    className: i()(R.session, R.legacySession),
    children: [(0, a.jsx)("div", {
      className: R.sessionIcon,
      children: (0, a.jsx)(g.default, {
        width: "32",
        height: "32"
      })
    }), (0, a.jsxs)("div", {
      className: R.sessionInfo,
      children: [(0, a.jsx)(u.Text, {
        variant: "eyebrow",
        className: R.sessionInfoRow,
        color: "text-muted",
        children: (0, a.jsx)("span", {
          children: O.default.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY
        })
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: R.sessionInfoRow,
        color: "text-muted",
        children: (0, a.jsx)("span", {
          children: O.default.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY_LOG_OUT.format({
            onClick: () => c.default.setSection(A.UserSettingsSections.ACCOUNT)
          })
        })
      })]
    })]
  })
}