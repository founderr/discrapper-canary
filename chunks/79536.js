"use strict";
t.r(s), t.d(s, {
  default: function() {
    return Q
  }
}), t("424973"), t("222007");
var a = t("37983"),
  l = t("884691"),
  i = t("414456"),
  n = t.n(i),
  r = t("316693"),
  o = t("446674"),
  d = t("669491"),
  c = t("819855"),
  E = t("77078"),
  u = t("402309"),
  _ = t("679653"),
  N = t("592407"),
  M = t("766419"),
  I = t("900938"),
  T = t("610903"),
  m = t("978970"),
  L = t("161778"),
  x = t("923959"),
  f = t("305961"),
  O = t("27618"),
  C = t("697218"),
  S = t("476765"),
  A = t("578706"),
  p = t("68238"),
  h = t("599110"),
  v = t("701909"),
  g = t("991170"),
  D = t("730541"),
  R = t("69741"),
  U = t("49111"),
  j = t("782340"),
  b = t("234327"),
  P = t("741161"),
  B = t("687444"),
  F = t("492094"),
  Y = t("300933"),
  y = t("499474"),
  G = t("576285"),
  k = t("175717");
let H = e => {
    let {
      guild: s,
      onAcceptVerificationLevel: t,
      onAcceptContentFilter: l,
      disableContentFilter: i,
      disableVerificationLevel: n,
      headerId: r,
      theme: d
    } = e, u = (0, o.useStateFromStores)([f.default], () => f.default.getGuild(s.id), [s.id]), _ = null != u && u.verificationLevel > U.VerificationLevels.NONE, N = (null == u ? void 0 : u.explicitContentFilter) === U.GuildExplicitContentFilterTypes.ALL_MEMBERS, M = (0, c.isThemeDark)(d) ? y : G;
    return (0, a.jsxs)("div", {
      className: b.container,
      children: [(0, a.jsxs)("div", {
        className: b.content,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: M,
          width: 80
        }), (0, a.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: b.header,
          id: r,
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
        }), (0, a.jsx)(E.Text, {
          color: "none",
          variant: "text-md/normal",
          className: b.headerCaption,
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
        })]
      }), (0, a.jsxs)("div", {
        className: b.form,
        children: [(0, a.jsx)(E.FormTitle, {
          children: j.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: _ ? j.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : j.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
        }), (0, a.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.ROW,
          disabled: n,
          value: s.verificationLevel > U.VerificationLevels.NONE,
          onChange: t,
          children: (0, a.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: j.default.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
          })
        })]
      }), (0, a.jsxs)("div", {
        className: b.form,
        children: [(0, a.jsx)(E.FormTitle, {
          children: j.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: N ? j.default.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : j.default.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
        }), (0, a.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.ROW,
          disabled: i,
          value: s.explicitContentFilter === U.GuildExplicitContentFilterTypes.ALL_MEMBERS,
          onChange: l,
          children: (0, a.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: j.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH
          })
        })]
      })]
    })
  },
  w = e => {
    let {
      selectableChannels: s,
      onRuleChannelChange: t,
      ruleChannel: i,
      onPublicUpdatesChannelChange: n,
      publicUpdatesChannel: r,
      headerId: o,
      theme: d,
      guildId: u
    } = e;
    l.useEffect(() => {
      (0, D.trackEnableCommunityFlow)({
        fromStep: R.EnableCommunityModalSteps.SAFETY_CHECK,
        toStep: R.EnableCommunityModalSteps.BASICS,
        guildId: u
      })
    }, [u]);
    let _ = (0, c.isThemeDark)(d) ? P : B;
    return (0, a.jsxs)("div", {
      className: b.container,
      children: [(0, a.jsxs)("div", {
        className: b.content,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: _,
          width: 80
        }), (0, a.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: b.header,
          id: o,
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
        }), (0, a.jsx)(E.Text, {
          color: "none",
          variant: "text-md/normal",
          className: b.headerCaption,
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
        })]
      }), (0, a.jsxs)("div", {
        className: b.form,
        children: [(0, a.jsx)(E.FormTitle, {
          children: j.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: j.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
        }), (0, a.jsx)(E.SearchableSelect, {
          options: s,
          onChange: t,
          value: i,
          maxVisibleItems: 4
        })]
      }), (0, a.jsxs)("div", {
        className: b.form,
        children: [(0, a.jsx)(E.FormTitle, {
          children: j.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: j.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
        }), (0, a.jsx)(E.SearchableSelect, {
          options: s,
          onChange: n,
          value: r,
          popoutPosition: "top",
          maxVisibleItems: 4
        })]
      })]
    })
  },
  V = e => {
    let {
      guild: s,
      policyAccepted: t,
      everyoneRolePermissionsAccepted: i,
      onAcceptPolicy: r,
      onAcceptDefaultNotifications: o,
      onAcceptEveryoneRolePermissions: d,
      disableDefaultNotifications: u,
      disableEveryoneRolePermissions: _,
      headerId: N,
      theme: M
    } = e, I = (0, c.isThemeDark)(M) ? F : Y;
    return l.useEffect(() => {
      (0, D.trackEnableCommunityFlow)({
        fromStep: R.EnableCommunityModalSteps.BASICS,
        toStep: R.EnableCommunityModalSteps.FINISH,
        guildId: s.id
      })
    }, [s.id]), (0, a.jsxs)("div", {
      className: b.container,
      children: [(0, a.jsxs)("div", {
        className: b.content,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: I,
          width: 80
        }), (0, a.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: b.header,
          id: N,
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
        }), (0, a.jsx)(E.Text, {
          color: "none",
          variant: "text-md/normal",
          className: b.headerCaption,
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
        })]
      }), (0, a.jsx)("div", {
        className: b.form,
        children: (0, a.jsx)(E.Tooltip, {
          text: u ? j.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
          "aria-label": !!u && j.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
          children: e => (0, a.jsx)("div", {
            ...e,
            children: (0, a.jsx)(E.Checkbox, {
              type: E.Checkbox.Types.ROW,
              disabled: u,
              value: s.defaultMessageNotifications === U.UserNotificationSettings.ONLY_MENTIONS,
              onChange: o,
              className: n({
                [b.disabled]: u
              }),
              children: (0, a.jsx)(E.Text, {
                variant: "text-sm/normal",
                children: j.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                  infoHook: () => (0, a.jsx)(E.Tooltip, {
                    text: j.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                    "aria-label": j.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                    children: e => (0, a.jsx)(p.default, {
                      className: b.icon,
                      ...e
                    })
                  })
                })
              })
            })
          })
        })
      }), (0, a.jsx)(E.Tooltip, {
        text: _ ? j.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
        "aria-label": !!_ && j.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
        children: e => (0, a.jsx)("div", {
          ...e,
          className: b.checkboxOption,
          children: (0, a.jsx)(E.Checkbox, {
            type: E.Checkbox.Types.ROW,
            disabled: _,
            value: i,
            onChange: d,
            className: n({
              [b.disabled]: _
            }),
            children: (0, a.jsx)(E.Text, {
              variant: "text-sm/normal",
              children: j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                infoHook: () => (0, a.jsx)(E.Tooltip, {
                  text: j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                  "aria-label": j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                  children: e => (0, a.jsx)(p.default, {
                    className: b.icon,
                    ...e
                  })
                })
              })
            })
          })
        })
      }), (0, a.jsxs)("div", {
        className: b.form,
        children: [(0, a.jsx)(E.FormTitle, {
          children: j.default.Messages.PUBLIC_GUILD_POLICY_TITLE
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: j.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
            communityGuidelines: v.default.getArticleURL(U.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: v.default.getArticleURL(U.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          })
        }), (0, a.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.ROW,
          value: t,
          onChange: r,
          children: (0, a.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: j.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
          })
        })]
      })]
    })
  };

function W(e) {
  let {
    guild: s
  } = e, t = s.getRole(s.getEveryoneRoleId());
  if (null == t) return null;
  let {
    name: l,
    color: i
  } = t;
  return (0, a.jsx)("div", {
    className: b.role,
    children: (0, a.jsxs)("span", {
      className: b.roleRow,
      children: [(0, a.jsx)(E.RoleDot, {
        className: b.roleDot,
        color: i.toString(),
        background: !1,
        tooltip: !1
      }), (0, a.jsx)(E.Text, {
        className: b.roleName,
        variant: "text-sm/medium",
        color: "interactive-active",
        children: l
      })]
    })
  })
}

function X(e) {
  let {
    enabledPermissions: s,
    onGetPermisisonName: t
  } = e;
  return (0, a.jsxs)("div", {
    className: b.tableContainer,
    children: [(0, a.jsx)(E.Text, {
      className: b.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: j.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
    }), (0, a.jsx)("div", {
      className: b.permissionsTable,
      children: s.map((e, s) => (0, a.jsxs)("div", {
        className: b.permissionRow,
        children: [(0, a.jsx)("div", {
          className: b.bulletWarning
        }), (0, a.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: t(e)
        })]
      }, s))
    })]
  })
}

function K(e) {
  let {
    disabledPermissions: s,
    onGetPermisisonName: t
  } = e, l = j.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
  return s.length === R.MODERATOR_PERMISSIONS.length && (l = j.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED), (0, a.jsxs)("div", {
    className: b.tableContainer,
    children: [(0, a.jsx)(E.Text, {
      className: b.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: l
    }), (0, a.jsx)("div", {
      className: b.permissionsTable,
      children: s.map((e, s) => (0, a.jsxs)("div", {
        className: b.permissionRow,
        children: [(0, a.jsx)("div", {
          className: b.bullet
        }), (0, a.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: t(e)
        })]
      }, s))
    })]
  })
}

function q(e) {
  let {
    permissions: s
  } = e, t = e => {
    switch (e.toString()) {
      case U.Permissions.MENTION_EVERYONE.toString():
        return j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
      case U.Permissions.CREATE_GUILD_EXPRESSIONS.toString():
        return j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
      case U.Permissions.MANAGE_GUILD_EXPRESSIONS.toString():
        return j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
      default:
        return (0, m.getPermissionName)(e)
    }
  }, {
    enabledPermissions: l,
    disabledPermissions: i
  } = s;
  return (0, a.jsxs)("div", {
    className: b.table,
    children: [0 !== l.length ? (0, a.jsx)(X, {
      enabledPermissions: l,
      onGetPermisisonName: t
    }) : null, (0, a.jsx)(K, {
      disabledPermissions: i,
      onGetPermisisonName: t
    })]
  })
}
let z = e => {
  let {
    guild: s,
    policyAccepted: t,
    onAcceptPolicy: i,
    headerId: n,
    theme: r
  } = e, o = (0, c.isThemeDark)(r) ? F : Y;
  l.useEffect(() => {
    (0, D.trackEnableCommunityFlow)({
      fromStep: R.EnableCommunityModalSteps.BASICS,
      toStep: R.EnableCommunityModalSteps.FINISH,
      guildId: s.id
    })
  }, [s.id]);
  let u = l.useMemo(() => {
    let e = [],
      t = [];
    return R.MODERATOR_PERMISSIONS.map(a => {
      let l = g.default.canEveryone(a, s);
      l ? e.push(a) : t.push(a)
    }), {
      enabledPermissions: e,
      disabledPermissions: t
    }
  }, [s]);
  return (0, a.jsxs)("div", {
    className: b.container,
    children: [(0, a.jsxs)("div", {
      className: b.content,
      children: [(0, a.jsx)("img", {
        alt: "",
        src: o,
        width: 80
      }), (0, a.jsx)(E.Heading, {
        variant: "heading-xl/semibold",
        className: b.updatedHeader,
        id: n,
        children: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
      })]
    }), (0, a.jsxs)("div", {
      className: b.updatedForm,
      children: [(0, a.jsx)(E.FormTitle, {
        className: b.formTitle,
        children: j.default.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
      }), (0, a.jsxs)("div", {
        className: b.checklistRow,
        children: [(0, a.jsx)(A.default, {
          className: b.checklistIcon,
          color: d.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
        }), (0, a.jsx)(E.Text, {
          variant: "text-md/normal",
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
            infoHook: () => (0, a.jsx)(E.Tooltip, {
              text: j.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              "aria-label": j.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              children: e => (0, a.jsx)(p.default, {
                className: b.icon,
                ...e
              })
            })
          })
        })]
      }), (0, a.jsxs)("div", {
        className: b.checklistRow,
        children: [(0, a.jsx)(A.default, {
          className: b.checklistIcon,
          color: d.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
        }), (0, a.jsx)(E.Text, {
          variant: "text-md/normal",
          children: j.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
        }), (0, a.jsx)(W, {
          guild: s
        })]
      }), (0, a.jsx)(q, {
        permissions: u
      })]
    }), (0, a.jsxs)("div", {
      className: b.updatedForm,
      children: [(0, a.jsx)(E.FormTitle, {
        className: b.formTitle,
        children: j.default.Messages.PUBLIC_GUILD_POLICY_TITLE
      }), (0, a.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: b.description,
        children: j.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
          communityGuidelines: v.default.getArticleURL(U.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
          typesOfGuilds: v.default.getArticleURL(U.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, a.jsx)(E.Checkbox, {
        type: E.Checkbox.Types.ROW,
        value: t,
        onChange: i,
        children: (0, a.jsx)(E.Text, {
          className: b.acceptText,
          variant: "text-md/medium",
          color: "header-primary",
          children: j.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
        })
      })]
    })]
  })
};
var Q = e => {
  var s;
  let {
    transitionState: t,
    onClose: i
  } = e;
  l.useEffect(() => {
    h.default.track(U.AnalyticEvents.OPEN_MODAL, {
      type: R.ENABLE_COMMUNITY_FLOW_MODAL_KEY
    })
  }, []);
  let {
    guild: n
  } = (0, o.useStateFromStoresObject)([I.default], () => I.default.getProps()), d = (0, o.useStateFromStores)([L.default], () => L.default.theme), [c, E] = l.useState(!1), [m, f] = l.useState(!R.MODERATOR_PERMISSIONS.some(e => g.default.canEveryone(e, n))), [A, p] = l.useState(R.CREATE_NEW_CHANNEL_VALUE), [v, D] = l.useState(R.CREATE_NEW_CHANNEL_VALUE), [P] = l.useState(null == n ? void 0 : n.defaultMessageNotifications), [B] = l.useState(null == n ? void 0 : n.verificationLevel), [F] = l.useState(null == n ? void 0 : n.explicitContentFilter), [Y] = l.useState(m), y = null == n ? void 0 : n.getRole(null == n ? void 0 : n.getEveryoneRoleId()), G = (0, o.useStateFromStores)([x.default], () => null != n ? x.default.getChannels(n.id) : null, [n]), W = (0, S.useUID)(), {
    enabled: X
  } = (0, u.useIsMassMentionsDefaultDisabledExperiment)(null !== (s = null == n ? void 0 : n.id) && void 0 !== s ? s : U.EMPTY_STRING_GUILD_ID);
  if (null == n) return null;
  let K = [{
    value: R.CREATE_NEW_CHANNEL_VALUE,
    label: j.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
  }];
  G[0, x.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
    let {
      channel: s
    } = e;
    s.type === U.ChannelTypes.GUILD_TEXT && K.push({
      value: s.id,
      label: (0, _.computeChannelName)(s, C.default, O.default, !0)
    })
  });
  let q = B !== U.VerificationLevels.NONE,
    Q = F === U.GuildExplicitContentFilterTypes.ALL_MEMBERS,
    J = P === U.UserNotificationSettings.ONLY_MENTIONS,
    Z = async () => {
      if (null == y || !c) return;
      let e = new Set(n.features);
      e.add(U.GuildFeatures.COMMUNITY);
      let s = m ? r.default.remove(y.permissions, R.MODERATOR_PERMISSIONS_FLAG) : y.permissions,
        t = {
          ...y,
          permissions: s
        };
      s !== y.permissions && await (0, M.saveRoleSettings)(n.id, [t]), N.default.updateGuild({
        features: e,
        rulesChannelId: A,
        publicUpdatesChannelId: v
      }), await N.default.saveGuild(n.id, {
        features: e,
        rulesChannelId: A,
        verificationLevel: n.verificationLevel,
        explicitContentFilter: n.explicitContentFilter,
        publicUpdatesChannelId: v,
        defaultMessageNotifications: n.defaultMessageNotifications
      }), setTimeout(() => {
        i()
      }, 0)
    }, $ = (0, a.jsx)(H, {
      guild: n,
      disableVerificationLevel: q,
      disableContentFilter: Q,
      onAcceptVerificationLevel: (e, s) => {
        if (!s) {
          N.default.updateGuild({
            verificationLevel: B
          });
          return
        }
        s && N.default.updateGuild({
          verificationLevel: U.VerificationLevels.LOW
        })
      },
      onAcceptContentFilter: (e, s) => {
        if (!s) {
          N.default.updateGuild({
            explicitContentFilter: F
          });
          return
        }
        N.default.updateGuild({
          explicitContentFilter: U.GuildExplicitContentFilterTypes.ALL_MEMBERS
        })
      },
      headerId: W,
      theme: d
    }), ee = (0, a.jsx)(w, {
      selectableChannels: K,
      onRuleChannelChange: e => {
        p(e)
      },
      onPublicUpdatesChannelChange: e => {
        D(e)
      },
      ruleChannel: A,
      publicUpdatesChannel: v,
      headerId: W,
      theme: d,
      guildId: n.id
    }), es = X ? (0, a.jsx)(z, {
      guild: n,
      policyAccepted: c,
      onAcceptPolicy: (e, s) => {
        if (s) {
          E(!0), !J && N.default.updateGuild({
            defaultMessageNotifications: U.UserNotificationSettings.ONLY_MENTIONS
          }), !m && null != y && f(!0);
          return
        }
        E(!1), J && N.default.updateGuild({
          defaultMessageNotifications: P
        }), m && null != y && f(!1)
      },
      headerId: W,
      theme: d
    }) : (0, a.jsx)(V, {
      guild: n,
      disableDefaultNotifications: J,
      disableEveryoneRolePermissions: Y,
      policyAccepted: c,
      everyoneRolePermissionsAccepted: m,
      onAcceptPolicy: (e, s) => {
        if (s) {
          E(!0);
          return
        }
        E(!1)
      },
      onAcceptDefaultNotifications: (e, s) => {
        if (!s) {
          N.default.updateGuild({
            defaultMessageNotifications: P
          });
          return
        }
        N.default.updateGuild({
          defaultMessageNotifications: U.UserNotificationSettings.ONLY_MENTIONS
        })
      },
      onAcceptEveryoneRolePermissions: (e, s) => {
        null != y && (s ? f(!0) : f(!1))
      },
      headerId: W,
      theme: d
    }), et = (0, a.jsx)("img", {
      alt: "",
      src: k,
      className: b.footerImage,
      width: 240
    }), ea = [{
      modalContent: $,
      disableNextStep: n.explicitContentFilter !== U.GuildExplicitContentFilterTypes.ALL_MEMBERS || n.verificationLevel === U.VerificationLevels.NONE,
      overviewTitle: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
    }, {
      modalContent: ee,
      disableNextStep: null == A || null == v,
      overviewTitle: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
    }, {
      modalContent: es,
      disableNextStep: !c,
      overviewTitle: j.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
    }];
  return (0, a.jsx)(T.default, {
    stepData: ea,
    title: j.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
    transitionState: t,
    onClose: () => {
      i(), h.default.track(U.AnalyticEvents.MODAL_DISMISSED, {
        type: R.ENABLE_COMMUNITY_FLOW_MODAL_KEY
      })
    },
    completeButtonText: j.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
    onComplete: Z,
    overviewFooter: et,
    sequencerClassName: b.container,
    autoCloseOnComplete: !1
  })
}