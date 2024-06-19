n.d(t, {
  W: function() {
    return r
  },
  Z: function() {
    return I
  }
}), n(773603);
var r, s, i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  c = n(442837),
  u = n(481060),
  d = n(893776),
  h = n(239091),
  p = n(598077),
  C = n(314897),
  f = n(246946),
  m = n(594174),
  x = n(626135),
  N = n(51144),
  g = n(480387),
  v = n(726745),
  y = n(251423),
  j = n(981631),
  A = n(689938),
  E = n(941439);

function T(e) {
  let {
    actionText: t,
    user: n,
    onAction: r
  } = e, {
    currentUser: s,
    hidePrivateData: o,
    isAuthenticated: a
  } = (0, c.cj)([m.default, f.Z, C.default], () => ({
    currentUser: m.default.getCurrentUser(),
    hidePrivateData: f.Z.hidePersonalInformation,
    isAuthenticated: C.default.isAuthenticated()
  })), y = new p.Z(n), T = a && (null == s ? void 0 : s.id) === y.id, I = n.tokenStatus === v.q.INVALID, _ = o || y.isPomelo() ? null : "#".concat(y.discriminator), w = null;
  return T ? w = (0, i.jsx)(u.Text, {
    variant: "text-sm/semibold",
    className: E.hintText,
    color: "text-positive",
    children: A.Z.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
  }) : I && (w = (0, i.jsx)(u.Text, {
    variant: "text-sm/semibold",
    className: E.hintText,
    color: "text-danger",
    children: A.Z.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
  })), (0, i.jsx)("div", {
    className: E.accountCard,
    children: (0, i.jsxs)("div", {
      className: E.userDetails,
      children: [(0, i.jsx)(u.Avatar, {
        src: y.getAvatarURL(void 0, 40),
        size: u.AvatarSizes.SIZE_40,
        "aria-label": n.username
      }), (0, i.jsxs)("div", {
        className: l()(E.usernameSection, {
          [E.hasActionMaxWidth]: !T
        }),
        children: [(0, i.jsxs)("div", {
          className: E.username,
          children: [(0, i.jsx)(u.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: E.textOverflow,
            children: N.ZP.getUserTag(y, {
              mode: "username",
              identifiable: o ? "never" : "always"
            })
          }), (0, i.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: _
          })]
        }), w]
      }), (0, i.jsxs)("div", {
        className: E.userActions,
        children: [!T && (0, i.jsx)(u.Button, {
          onClick: function() {
            if (I) {
              r(0, n.id);
              return
            }
            x.default.track(j.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: j.jXE.MANAGE_ACCOUNTS_MODAL
              }
            }), g.yD(n.id), r(1, n.id)
          },
          color: u.Button.Colors.PRIMARY,
          children: I ? A.Z.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
        }), (0, i.jsx)(u.Button, {
          className: E.userActionMenu,
          onClick: function(e) {
            (0, h.vq)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, i.jsx)(u.Menu, {
                "aria-label": A.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                navId: "manage-multi-account",
                onClose: h.Zy,
                onSelect: t,
                children: (0, i.jsx)(u.MenuItem, {
                  id: "remove-account",
                  label: A.Z.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                  action: () => {
                    ! function() {
                      d.Z.logout(null, n.id).finally(() => {
                        g.Zd(n.id)
                      });
                      let e = {};
                      null != s ? e.section = j.jXE.MANAGE_ACCOUNTS_MODAL : e.page = j.Usc.LOGIN, x.default.track(j.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                        location: e
                      }), r(2, n.id)
                    }(), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          size: u.Button.Sizes.ICON,
          look: u.Button.Looks.BLANK,
          color: u.Button.Colors.WHITE,
          "aria-label": A.Z.Messages.MORE_OPTIONS,
          children: (0, i.jsx)(u.MoreHorizontalIcon, {
            size: "md",
            color: "currentColor",
            className: E.overflowMenuIcon
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
    isLoading: r,
    multiAccountUsers: s
  } = (0, y.L)();
  return (0, i.jsx)("div", {
    className: E.list,
    children: r ? (0, i.jsx)(u.Spinner, {}) : s.map((e, r) => (0, i.jsxs)(o.Fragment, {
      children: [(0, i.jsx)(T, {
        user: e,
        actionText: t,
        onAction: n
      }, e.id), s.length - 1 !== r && (0, i.jsx)("div", {
        role: "separator",
        className: E.separator
      })]
    }, e.id))
  })
}(s = r || (r = {}))[s.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", s[s.SWITCHED = 1] = "SWITCHED", s[s.REMOVED = 2] = "REMOVED"