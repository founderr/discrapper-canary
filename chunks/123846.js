t.d(l, {
  Z: function() {
    return p
  }
}), t(47120);
var n = t(735250),
  s = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(954955),
  r = t.n(i),
  C = t(498607),
  c = t.n(C),
  d = t(399606),
  u = t(481060),
  E = t(430824),
  m = t(246946),
  _ = t(669405),
  M = t(553826),
  h = t(893966),
  x = t(527379),
  T = t(327999),
  L = t(734557),
  H = t(981631),
  g = t(689938),
  A = t(289265),
  I = t(639897);
let N = [T.gq.DISCOVERY, T.gq.VANITY_URL, T.gq.BOT, T.gq.HUB, T.gq.MANUAL_MEMBER_VERIFICATION];

function R(e) {
  let {
    type: l,
    text: t,
    size: s,
    vanityUrl: a,
    isFocused: i
  } = e, r = null != s ? s : 16, C = function(e, l) {
    switch (e) {
      case T.gq.BOT:
        return (0, n.jsx)(u.RobotIcon, {
          size: "custom",
          color: "currentColor",
          className: A.icon,
          height: l,
          width: l
        });
      case T.gq.INTEGRATION:
        return (0, n.jsx)(u.WebhookIcon, {
          size: "custom",
          color: "currentColor",
          className: A.icon,
          height: l,
          width: l
        });
      case T.gq.DISCOVERY:
        return (0, n.jsx)(u.CompassIcon, {
          size: "custom",
          color: "currentColor",
          className: A.icon,
          height: l,
          width: l
        });
      case T.gq.HUB:
        return (0, n.jsx)(u.HubIcon, {
          size: "custom",
          color: "currentColor",
          className: A.icon,
          height: l,
          width: l
        });
      case T.gq.INVITE:
      case T.gq.VANITY_URL:
        return (0, n.jsx)(u.LinkIcon, {
          size: "custom",
          color: "currentColor",
          className: A.icon,
          height: l,
          width: l
        });
      case T.gq.MANUAL_MEMBER_VERIFICATION:
        return (0, n.jsx)(_.Z, {
          className: A.icon,
          height: l,
          width: l
        });
      default:
        return null
    }
  }(l, r), c = (0, T.bE)(l, a);
  return (0, n.jsxs)("div", {
    className: o()(A.labelWithIconContainer),
    "aria-label": c,
    children: [null != C ? C : null, (0, n.jsx)(u.Text, {
      variant: 12 === r ? "text-xs/medium" : "text-sm/medium",
      className: o()(A.labelText, {
        [A.focused]: i
      }),
      children: t
    })]
  })
}

function p(e) {
  let {
    guildId: l,
    onClose: t
  } = e, a = (0, d.e7)([h.Z], () => h.Z.getSearchStateByGuildId(l), [l], c()), {
    inviteCodes: i
  } = (0, L.s)(l), C = (0, d.e7)([E.Z], () => E.Z.getGuild(l)), _ = null == C ? void 0 : C.vanityURLCode, [p, S] = s.useState(!1), {
    selectedSourceInviteCode: Z,
    selectedJoinSourceType: j
  } = a, v = null != j && j !== T.gq.UNSPECIFIED, f = (0, d.e7)([m.Z], () => m.Z.hideInstantInvites, []);
  f && (i = []);
  let D = s.useCallback(e => {
      let t = e.trim();
      (0, x.Dr)(l, {
        ...a,
        selectedSourceInviteCode: "" !== t ? t : void 0,
        selectedJoinSourceType: void 0
      })
    }, [l, a]),
    b = s.useCallback(e => {
      e === j ? (0, x.Dr)(l, {
        selectedSourceInviteCode: void 0,
        selectedJoinSourceType: void 0
      }) : (0, x.Dr)(l, {
        selectedSourceInviteCode: null,
        selectedJoinSourceType: e
      }), S(!1)
    }, [l, j]),
    O = s.useCallback(r()(D, 300), [D]),
    V = s.useCallback(e => {
      O(e)
    }, [O]);
  return (0, n.jsx)(u.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      t()
    },
    "aria-label": g.Z.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: H.dG4,
    children: p ? (0, n.jsxs)(u.MenuGroup, {
      children: [(0, n.jsx)(u.MenuItem, {
        id: "back",
        action: () => S(!1),
        render: e => (0, n.jsxs)("span", {
          ...e,
          className: A.customLabelContainer,
          children: [(0, n.jsx)(u.ChevronSmallLeftIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: A.__invalid_caret
          }), (0, n.jsx)(u.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: g.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), N.map(e => (0, n.jsx)(u.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: l => (0, n.jsx)(R, {
          ...l,
          type: e,
          vanityUrl: _,
          text: (0, T.bE)(e, _, f)
        }),
        checked: j === e,
        disabled: !1,
        action: () => b(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, n.jsxs)(u.MenuGroup, {
      children: [(0, n.jsx)(u.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, l) => (0, n.jsx)(u.MenuSearchControl, {
          ...e,
          query: null != Z ? Z : "",
          onChange: V,
          ref: l,
          placeholder: g.Z.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, n.jsx)(u.MenuSeparator, {}), (0, n.jsx)(u.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: g.Z.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == Z && null == j,
        disabled: !1,
        action: () => b(null),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), i.map(e => (0, n.jsx)(u.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: l => (0, n.jsx)(R, {
          ...l,
          type: T.gq.INVITE,
          vanityUrl: _,
          text: e
        }),
        checked: Z === e,
        disabled: !1,
        action: () => D(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e))), (0, n.jsx)(u.MenuSeparator, {}), (0, n.jsx)(u.MenuItem, {
        id: "other-join-methods",
        action: () => S(!0),
        render: e => (0, n.jsxs)("div", {
          className: o()(A.containerWithRightCaret, A.customLabelContainer),
          children: [(0, n.jsxs)("div", {
            className: o()(I.label),
            children: [(0, n.jsx)(u.Text, {
              variant: "text-sm/medium",
              className: o()(A.__invalid_selectedRadio, A.labelText, {
                [A.focused]: e.isFocused
              }),
              children: g.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), v ? (0, n.jsx)("div", {
              className: A.selectedOption,
              children: (0, n.jsx)(R, {
                ...e,
                size: 12,
                text: (0, T.bE)(j, _, f),
                type: j,
                vanityUrl: _
              })
            }) : null]
          }), v ? (0, n.jsx)(M.Z, {
            background: A.__invalid_radio,
            foreground: A.radioSelection,
            width: 16,
            height: 16
          }) : (0, n.jsx)(u.ChevronSmallRightIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: A.__invalid_caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}