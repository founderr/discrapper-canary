"use strict";
n.r(t), n.d(t, {
  MultiAccountActionType: function() {
    return s
  },
  default: function() {
    return I
  }
}), n("773603");
var s, r, a = n("735250"),
  o = n("470079"),
  i = n("120356"),
  l = n.n(i),
  u = n("442837"),
  c = n("481060"),
  d = n("893776"),
  h = n("239091"),
  f = n("598077"),
  p = n("314897"),
  C = n("246946"),
  m = n("594174"),
  x = n("808268"),
  N = n("626135"),
  g = n("51144"),
  v = n("480387"),
  y = n("726745"),
  A = n("251423"),
  j = n("981631"),
  E = n("689938"),
  S = n("574959");

function T(e) {
  let {
    actionText: t,
    user: n,
    onAction: s
  } = e, {
    currentUser: r,
    hidePrivateData: o,
    isAuthenticated: i
  } = (0, u.useStateFromStoresObject)([m.default, C.default, p.default], () => ({
    currentUser: m.default.getCurrentUser(),
    hidePrivateData: C.default.hidePersonalInformation,
    isAuthenticated: p.default.isAuthenticated()
  })), A = new f.default(n), T = i && (null == r ? void 0 : r.id) === A.id, I = n.tokenStatus === y.MultiAccountTokenStatus.INVALID, w = o || A.isPomelo() ? null : "#".concat(A.discriminator), O = null;
  return T ? O = (0, a.jsx)(c.Text, {
    variant: "text-sm/semibold",
    className: S.hintText,
    color: "text-positive",
    children: E.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
  }) : I && (O = (0, a.jsx)(c.Text, {
    variant: "text-sm/semibold",
    className: S.hintText,
    color: "text-danger",
    children: E.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
  })), (0, a.jsx)("div", {
    className: S.accountCard,
    children: (0, a.jsxs)("div", {
      className: S.userDetails,
      children: [(0, a.jsx)(c.Avatar, {
        src: A.getAvatarURL(void 0, 40),
        size: c.AvatarSizes.SIZE_40,
        "aria-label": n.username
      }), (0, a.jsxs)("div", {
        className: l()(S.usernameSection, {
          [S.hasActionMaxWidth]: !T
        }),
        children: [(0, a.jsxs)("div", {
          className: S.username,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: S.textOverflow,
            children: g.default.getUserTag(A, {
              mode: "username",
              identifiable: o ? "never" : "always"
            })
          }), (0, a.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: w
          })]
        }), O]
      }), (0, a.jsxs)("div", {
        className: S.userActions,
        children: [!T && (0, a.jsx)(c.Button, {
          onClick: function() {
            if (I) {
              s(0, n.id);
              return
            }
            N.default.track(j.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: j.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
              }
            }), v.switchAccount(n.id), s(1, n.id)
          },
          color: c.Button.Colors.PRIMARY,
          children: I ? E.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
        }), (0, a.jsx)(c.Button, {
          className: S.userActionMenu,
          onClick: function(e) {
            (0, h.openContextMenu)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, a.jsx)(c.Menu, {
                "aria-label": E.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                navId: "manage-multi-account",
                onClose: h.closeContextMenu,
                onSelect: t,
                children: (0, a.jsx)(c.MenuItem, {
                  id: "remove-account",
                  label: E.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                  action: () => {
                    ! function() {
                      d.default.logout(null, n.id).finally(() => {
                        v.removeAccount(n.id)
                      });
                      let e = {};
                      null != r ? e.section = j.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = j.PageAnalyticsLocations.LOGIN, N.default.track(j.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                        location: e
                      }), s(2, n.id)
                    }(), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          size: c.Button.Sizes.ICON,
          look: c.Button.Looks.BLANK,
          color: c.Button.Colors.WHITE,
          "aria-label": E.default.Messages.MORE_OPTIONS,
          children: (0, a.jsx)(x.default, {
            className: S.overflowMenuIcon
          })
        })]
      })]
    })
  })
}

function I(e) {
  let {
    actionText: t,
    onAction: n
  } = e, {
    isLoading: s,
    multiAccountUsers: r
  } = (0, A.useMultiAccountUsers)();
  return (0, a.jsx)("div", {
    className: S.list,
    children: s ? (0, a.jsx)(c.Spinner, {}) : r.map((e, s) => (0, a.jsxs)(o.Fragment, {
      children: [(0, a.jsx)(T, {
        user: e,
        actionText: t,
        onAction: n
      }, e.id), r.length - 1 !== s && (0, a.jsx)("div", {
        role: "separator",
        className: S.separator
      })]
    }, e.id))
  })
}(r = s || (s = {}))[r.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", r[r.SWITCHED = 1] = "SWITCHED", r[r.REMOVED = 2] = "REMOVED"