"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("120356"),
  o = l.n(n),
  i = l("954955"),
  r = l.n(i),
  d = l("498607"),
  u = l.n(d),
  C = l("399606"),
  c = l("481060"),
  m = l("430824"),
  E = l("246946"),
  f = l("669405"),
  M = l("104259"),
  _ = l("206017"),
  h = l("292937"),
  T = l("757698"),
  S = l("553826"),
  x = l("692437"),
  A = l("912527"),
  p = l("202597"),
  L = l("893966"),
  N = l("527379"),
  g = l("327999"),
  H = l("734557"),
  I = l("981631"),
  R = l("689938"),
  v = l("576260"),
  j = l("768160");
let D = [g.JoinSourceType.DISCOVERY, g.JoinSourceType.VANITY_URL, g.JoinSourceType.BOT, g.JoinSourceType.HUB, g.JoinSourceType.MANUAL_MEMBER_VERIFICATION];

function b(e) {
  let {
    type: t,
    text: l,
    size: s,
    vanityUrl: n,
    isFocused: i
  } = e, r = null != s ? s : 16, d = function(e, t) {
    switch (e) {
      case g.JoinSourceType.BOT:
        return (0, a.jsx)(A.default, {
          className: v.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(p.default, {
          className: v.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(M.default, {
          className: v.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.HUB:
        return (0, a.jsx)(_.default, {
          className: v.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.INVITE:
      case g.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(T.default, {
          className: v.icon,
          height: t,
          width: t
        });
      case g.JoinSourceType.MANUAL_MEMBER_VERIFICATION:
        return (0, a.jsx)(f.default, {
          className: v.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, r), u = (0, g.getJoinSourceTypeLabel)(t, n);
  return (0, a.jsxs)("div", {
    className: o()(v.labelWithIconContainer),
    "aria-label": u,
    children: [null != d ? d : null, (0, a.jsx)(c.Text, {
      variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
      className: o()(v.labelText, {
        [v.focused]: i
      }),
      children: l
    })]
  })
}

function O(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, C.useStateFromStores)([L.default], () => L.default.getSearchStateByGuildId(t), [t], u()), {
    inviteCodes: i
  } = (0, H.useGuildInvites)(t), d = (0, C.useStateFromStores)([m.default], () => m.default.getGuild(t)), f = null == d ? void 0 : d.vanityURLCode, [M, _] = s.useState(!1), {
    selectedSourceInviteCode: T,
    selectedJoinSourceType: A
  } = n, p = null != A && A !== g.JoinSourceType.UNSPECIFIED, O = (0, C.useStateFromStores)([E.default], () => E.default.hideInstantInvites, []);
  O && (i = []);
  let B = s.useCallback(e => {
      let l = e.trim();
      (0, N.updateSearchState)(t, {
        ...n,
        selectedSourceInviteCode: "" !== l ? l : void 0,
        selectedJoinSourceType: void 0
      })
    }, [t, n]),
    V = s.useCallback(e => {
      e === A ? (0, N.updateSearchState)(t, {
        selectedSourceInviteCode: void 0,
        selectedJoinSourceType: void 0
      }) : (0, N.updateSearchState)(t, {
        selectedSourceInviteCode: null,
        selectedJoinSourceType: e
      }), _(!1)
    }, [t, A]),
    F = s.useCallback(r()(B, 300), [B]),
    y = s.useCallback(e => {
      F(e)
    }, [F]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": R.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: I.NOOP,
    children: M ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => _(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: v.customLabelContainer,
          children: [(0, a.jsx)(h.default, {
            width: 16,
            height: 16,
            className: v.__invalid_caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: R.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), D.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(b, {
          ...t,
          type: e,
          vanityUrl: f,
          text: (0, g.getJoinSourceTypeLabel)(e, f, O)
        }),
        checked: A === e,
        disabled: !1,
        action: () => V(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != T ? T : "",
          onChange: y,
          ref: t,
          placeholder: R.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: R.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == T && null == A,
        disabled: !1,
        action: () => V(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), i.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(b, {
          ...t,
          type: g.JoinSourceType.INVITE,
          vanityUrl: f,
          text: e
        }),
        checked: T === e,
        disabled: !1,
        action: () => B(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => _(!0),
        render: e => (0, a.jsxs)("div", {
          className: o()(v.containerWithRightCaret, v.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: o()(j.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: o()(v.__invalid_selectedRadio, v.labelText, {
                [v.focused]: e.isFocused
              }),
              children: R.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), p ? (0, a.jsx)("div", {
              className: v.selectedOption,
              children: (0, a.jsx)(b, {
                ...e,
                size: 12,
                text: (0, g.getJoinSourceTypeLabel)(A, f, O),
                type: A,
                vanityUrl: f
              })
            }) : null]
          }), p ? (0, a.jsx)(S.default, {
            background: v.__invalid_radio,
            foreground: v.radioSelection,
            width: 16,
            height: 16
          }) : (0, a.jsx)(x.default, {
            width: 16,
            height: 16,
            className: v.__invalid_caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}