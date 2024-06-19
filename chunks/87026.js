t.r(s), t(653041), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  n = t.n(i),
  o = t(149765),
  r = t(442837),
  c = t(692547),
  d = t(780384),
  E = t(481060),
  _ = t(785697),
  N = t(933557),
  I = t(434404),
  M = t(764260),
  T = t(999382),
  L = t(416162),
  x = t(422559),
  m = t(210887),
  u = t(984933),
  O = t(430824),
  C = t(699516),
  h = t(594174),
  A = t(153124),
  S = t(626135),
  p = t(63063),
  g = t(700785),
  v = t(245315),
  f = t(135899),
  j = t(981631),
  D = t(689938),
  b = t(613991),
  R = t(289575),
  U = t(371411),
  B = t(112847),
  P = t(516954),
  Z = t(674889),
  F = t(162752),
  Y = t(438825);
let y = e => {
    let {
      guild: s,
      onAcceptVerificationLevel: t,
      onAcceptContentFilter: a,
      disableContentFilter: i,
      disableVerificationLevel: n,
      headerId: o,
      theme: c
    } = e, _ = (0, r.e7)([O.Z], () => O.Z.getGuild(s.id), [s.id]), N = null != _ && _.verificationLevel > j.sFg.NONE, I = (null == _ ? void 0 : _.explicitContentFilter) === j.lxg.ALL_MEMBERS, M = (0, d.wj)(c) ? Z : F;
    return (0, l.jsxs)("div", {
      className: b.container,
      children: [(0, l.jsxs)("div", {
        className: b.content,
        children: [(0, l.jsx)("img", {
          alt: "",
          src: M,
          width: 80
        }), (0, l.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: b.header,
          id: o,
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
        }), (0, l.jsx)(E.Text, {
          color: "none",
          variant: "text-md/normal",
          className: b.headerCaption,
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
        })]
      }), (0, l.jsxs)("div", {
        className: b.form,
        children: [(0, l.jsx)(E.FormTitle, {
          children: D.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
        }), (0, l.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: N ? D.Z.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : D.Z.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
        }), (0, l.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.ROW,
          disabled: n,
          value: s.verificationLevel > j.sFg.NONE,
          onChange: t,
          children: (0, l.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: D.Z.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
          })
        })]
      }), (0, l.jsxs)("div", {
        className: b.form,
        children: [(0, l.jsx)(E.FormTitle, {
          children: D.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
        }), (0, l.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: I ? D.Z.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : D.Z.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
        }), (0, l.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.ROW,
          disabled: i,
          value: s.explicitContentFilter === j.lxg.ALL_MEMBERS,
          onChange: a,
          children: (0, l.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: D.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH
          })
        })]
      })]
    })
  },
  G = e => {
    let {
      selectableChannels: s,
      onRuleChannelChange: t,
      ruleChannel: i,
      onPublicUpdatesChannelChange: n,
      publicUpdatesChannel: o,
      headerId: r,
      theme: c,
      guildId: _
    } = e;
    a.useEffect(() => {
      (0, v.BF)({
        fromStep: f.IO.SAFETY_CHECK,
        toStep: f.IO.BASICS,
        guildId: _
      })
    }, [_]);
    let N = (0, d.wj)(c) ? R : U;
    return (0, l.jsxs)("div", {
      className: b.container,
      children: [(0, l.jsxs)("div", {
        className: b.content,
        children: [(0, l.jsx)("img", {
          alt: "",
          src: N,
          width: 80
        }), (0, l.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: b.header,
          id: r,
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
        }), (0, l.jsx)(E.Text, {
          color: "none",
          variant: "text-md/normal",
          className: b.headerCaption,
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
        })]
      }), (0, l.jsxs)("div", {
        className: b.form,
        children: [(0, l.jsx)(E.FormTitle, {
          children: D.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
        }), (0, l.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: D.Z.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
        }), (0, l.jsx)(E.SearchableSelect, {
          options: s,
          onChange: t,
          value: i,
          maxVisibleItems: 4
        })]
      }), (0, l.jsxs)("div", {
        className: b.form,
        children: [(0, l.jsx)(E.FormTitle, {
          children: D.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
        }), (0, l.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: D.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
        }), (0, l.jsx)(E.SearchableSelect, {
          options: s,
          onChange: n,
          value: o,
          popoutPosition: "top",
          maxVisibleItems: 4
        })]
      })]
    })
  },
  k = e => {
    let {
      guild: s,
      policyAccepted: t,
      everyoneRolePermissionsAccepted: i,
      onAcceptPolicy: o,
      onAcceptDefaultNotifications: r,
      onAcceptEveryoneRolePermissions: c,
      disableDefaultNotifications: _,
      disableEveryoneRolePermissions: N,
      headerId: I,
      theme: M
    } = e, T = (0, d.wj)(M) ? B : P;
    return a.useEffect(() => {
      (0, v.BF)({
        fromStep: f.IO.BASICS,
        toStep: f.IO.FINISH,
        guildId: s.id
      })
    }, [s.id]), (0, l.jsxs)("div", {
      className: b.container,
      children: [(0, l.jsxs)("div", {
        className: b.content,
        children: [(0, l.jsx)("img", {
          alt: "",
          src: T,
          width: 80
        }), (0, l.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: b.header,
          id: I,
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
        }), (0, l.jsx)(E.Text, {
          color: "none",
          variant: "text-md/normal",
          className: b.headerCaption,
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
        })]
      }), (0, l.jsx)("div", {
        className: b.form,
        children: (0, l.jsx)(E.Tooltip, {
          text: _ ? D.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
          "aria-label": !!_ && D.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
          children: e => (0, l.jsx)("div", {
            ...e,
            children: (0, l.jsx)(E.Checkbox, {
              type: E.Checkbox.Types.ROW,
              disabled: _,
              value: s.defaultMessageNotifications === j.bL.ONLY_MENTIONS,
              onChange: r,
              className: n()({
                [b.disabled]: _
              }),
              children: (0, l.jsx)(E.Text, {
                variant: "text-sm/normal",
                children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                  infoHook: () => (0, l.jsx)(E.Tooltip, {
                    text: D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                    "aria-label": D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                    children: e => (0, l.jsx)(E.CircleInformationIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: b.icon,
                      ...e
                    })
                  })
                })
              })
            })
          })
        })
      }), (0, l.jsx)(E.Tooltip, {
        text: N ? D.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
        "aria-label": !!N && D.Z.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
        children: e => (0, l.jsx)("div", {
          ...e,
          className: b.checkboxOption,
          children: (0, l.jsx)(E.Checkbox, {
            type: E.Checkbox.Types.ROW,
            disabled: N,
            value: i,
            onChange: c,
            className: n()({
              [b.disabled]: N
            }),
            children: (0, l.jsx)(E.Text, {
              variant: "text-sm/normal",
              children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                infoHook: () => (0, l.jsx)(E.Tooltip, {
                  text: D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                  "aria-label": D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                  children: e => (0, l.jsx)(E.CircleInformationIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: b.icon,
                    ...e
                  })
                })
              })
            })
          })
        })
      }), (0, l.jsxs)("div", {
        className: b.form,
        children: [(0, l.jsx)(E.FormTitle, {
          children: D.Z.Messages.PUBLIC_GUILD_POLICY_TITLE
        }), (0, l.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: b.description,
          children: D.Z.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
            communityGuidelines: p.Z.getArticleURL(j.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: p.Z.getArticleURL(j.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          })
        }), (0, l.jsx)(E.Checkbox, {
          type: E.Checkbox.Types.ROW,
          value: t,
          onChange: o,
          children: (0, l.jsx)(E.Text, {
            variant: "text-sm/normal",
            children: D.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT
          })
        })]
      })]
    })
  };

function w(e) {
  let {
    guild: s
  } = e, t = (0, r.e7)([O.Z], () => O.Z.getRole(s.id, s.getEveryoneRoleId()));
  if (null == t) return null;
  let {
    name: a,
    color: i
  } = t;
  return (0, l.jsx)("div", {
    className: b.__invalid_role,
    children: (0, l.jsxs)("span", {
      className: b.roleRow,
      children: [(0, l.jsx)(E.RoleDot, {
        className: b.roleDot,
        color: i.toString(),
        background: !1,
        tooltip: !1
      }), (0, l.jsx)(E.Text, {
        className: b.roleName,
        variant: "text-sm/medium",
        color: "interactive-active",
        children: a
      })]
    })
  })
}

function H(e) {
  let {
    enabledPermissions: s,
    onGetPermisisonName: t
  } = e;
  return (0, l.jsxs)("div", {
    className: b.tableContainer,
    children: [(0, l.jsx)(E.Text, {
      className: b.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: D.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
    }), (0, l.jsx)("div", {
      className: b.permissionsTable,
      children: s.map((e, s) => (0, l.jsxs)("div", {
        className: b.permissionRow,
        children: [(0, l.jsx)("div", {
          className: b.bulletWarning
        }), (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: t(e)
        })]
      }, s))
    })]
  })
}

function V(e) {
  let {
    disabledPermissions: s,
    onGetPermisisonName: t
  } = e, a = D.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
  return s.length === f.$X.length && (a = D.Z.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED), (0, l.jsxs)("div", {
    className: b.tableContainer,
    children: [(0, l.jsx)(E.Text, {
      className: b.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: a
    }), (0, l.jsx)("div", {
      className: b.permissionsTable,
      children: s.map((e, s) => (0, l.jsxs)("div", {
        className: b.permissionRow,
        children: [(0, l.jsx)("div", {
          className: b.bullet
        }), (0, l.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: t(e)
        })]
      }, s))
    })]
  })
}

function z(e) {
  let {
    permissions: s
  } = e, t = e => {
    switch (e.toString()) {
      case j.Plq.MENTION_EVERYONE.toString():
        return D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
      case j.Plq.CREATE_GUILD_EXPRESSIONS.toString():
        return D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
      case j.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
        return D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
      default:
        return (0, x.wt)(e)
    }
  }, {
    enabledPermissions: a,
    disabledPermissions: i
  } = s;
  return (0, l.jsxs)("div", {
    className: b.table,
    children: [0 !== a.length ? (0, l.jsx)(H, {
      enabledPermissions: a,
      onGetPermisisonName: t
    }) : null, (0, l.jsx)(V, {
      disabledPermissions: i,
      onGetPermisisonName: t
    })]
  })
}
let W = e => {
  let {
    guild: s,
    policyAccepted: t,
    onAcceptPolicy: i,
    headerId: n,
    theme: o
  } = e, r = (0, d.wj)(o) ? B : P;
  a.useEffect(() => {
    (0, v.BF)({
      fromStep: f.IO.BASICS,
      toStep: f.IO.FINISH,
      guildId: s.id
    })
  }, [s.id]);
  let _ = a.useMemo(() => {
    let e = [],
      t = [];
    return f.$X.map(l => {
      g.oz(l, s) ? e.push(l) : t.push(l)
    }), {
      enabledPermissions: e,
      disabledPermissions: t
    }
  }, [s]);
  return (0, l.jsxs)("div", {
    className: b.container,
    children: [(0, l.jsxs)("div", {
      className: b.content,
      children: [(0, l.jsx)("img", {
        alt: "",
        src: r,
        width: 80
      }), (0, l.jsx)(E.Heading, {
        variant: "heading-xl/semibold",
        className: b.updatedHeader,
        id: n,
        children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
      })]
    }), (0, l.jsxs)("div", {
      className: b.updatedForm,
      children: [(0, l.jsx)(E.FormTitle, {
        className: b.formTitle,
        children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
      }), (0, l.jsxs)("div", {
        className: b.checklistRow,
        children: [(0, l.jsx)(E.CircleCheckIcon, {
          size: "md",
          className: b.checklistIcon,
          color: c.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
        }), (0, l.jsx)(E.Text, {
          variant: "text-md/normal",
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
            infoHook: () => (0, l.jsx)(E.Tooltip, {
              text: D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              "aria-label": D.Z.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              children: e => (0, l.jsx)(E.CircleInformationIcon, {
                size: "xs",
                color: "currentColor",
                className: b.icon,
                ...e
              })
            })
          })
        })]
      }), (0, l.jsxs)("div", {
        className: b.checklistRow,
        children: [(0, l.jsx)(E.CircleCheckIcon, {
          size: "md",
          className: b.checklistIcon,
          color: c.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
        }), (0, l.jsx)(E.Text, {
          variant: "text-md/normal",
          children: D.Z.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
        }), (0, l.jsx)(w, {
          guild: s
        })]
      }), (0, l.jsx)(z, {
        permissions: _
      })]
    }), (0, l.jsxs)("div", {
      className: b.updatedForm,
      children: [(0, l.jsx)(E.FormTitle, {
        className: b.formTitle,
        children: D.Z.Messages.PUBLIC_GUILD_POLICY_TITLE
      }), (0, l.jsx)(E.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: b.description,
        children: D.Z.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
          communityGuidelines: p.Z.getArticleURL(j.BhN.PUBLIC_GUILD_GUILDLINES),
          typesOfGuilds: p.Z.getArticleURL(j.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, l.jsx)(E.Checkbox, {
        type: E.Checkbox.Types.ROW,
        value: t,
        onChange: i,
        children: (0, l.jsx)(E.Text, {
          className: b.acceptText,
          variant: "text-md/medium",
          color: "header-primary",
          children: D.Z.Messages.PUBLIC_GUILD_POLICY_ACCEPT
        })
      })]
    })]
  })
};
s.default = e => {
  var s;
  let {
    transitionState: t,
    onClose: i
  } = e;
  a.useEffect(() => {
    S.default.track(j.rMx.OPEN_MODAL, {
      type: f.tA
    })
  }, []);
  let {
    guild: n
  } = (0, r.cj)([T.Z], () => T.Z.getProps()), c = (0, r.e7)([m.Z], () => m.Z.theme), [d, E] = a.useState(!1), [x, p] = a.useState(!f.$X.some(e => g.oz(e, n))), [v, R] = a.useState(f.b4), [U, B] = a.useState(f.b4), [P] = a.useState(null == n ? void 0 : n.defaultMessageNotifications), [Z] = a.useState(null == n ? void 0 : n.verificationLevel), [F] = a.useState(null == n ? void 0 : n.explicitContentFilter), [w] = a.useState(x), H = (0, r.e7)([O.Z], () => null != n ? O.Z.getRole(n.id, n.getEveryoneRoleId()) : void 0), V = (0, r.e7)([u.ZP], () => null != n ? u.ZP.getChannels(n.id) : null), z = (0, A.Dt)(), {
    enabled: X
  } = (0, _.D2)(null !== (s = null == n ? void 0 : n.id) && void 0 !== s ? s : j.lds);
  if (null == n) return null;
  let q = [{
    value: f.b4,
    label: D.Z.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
  }];
  V[u.sH].forEach(e => {
    let {
      channel: s
    } = e;
    s.type === j.d4z.GUILD_TEXT && q.push({
      value: s.id,
      label: (0, N.F6)(s, h.default, C.Z, !0)
    })
  });
  let Q = Z !== j.sFg.NONE,
    K = F === j.lxg.ALL_MEMBERS,
    $ = P === j.bL.ONLY_MENTIONS,
    J = async () => {
      if (null == H || !d) return;
      let e = new Set(n.features);
      e.add(j.oNc.COMMUNITY);
      let s = x ? o.Od(H.permissions, f.mu) : H.permissions,
        t = {
          ...H,
          permissions: s
        };
      s !== H.permissions && await (0, M.Gf)(n.id, [t]), I.Z.updateGuild({
        features: e,
        rulesChannelId: v,
        publicUpdatesChannelId: U
      }), await I.Z.saveGuild(n.id, {
        features: e,
        rulesChannelId: v,
        verificationLevel: n.verificationLevel,
        explicitContentFilter: n.explicitContentFilter,
        publicUpdatesChannelId: U,
        defaultMessageNotifications: n.defaultMessageNotifications
      }), setTimeout(() => {
        i()
      }, 0)
    }, ee = (0, l.jsx)(y, {
      guild: n,
      disableVerificationLevel: Q,
      disableContentFilter: K,
      onAcceptVerificationLevel: (e, s) => {
        if (!s) {
          I.Z.updateGuild({
            verificationLevel: Z
          });
          return
        }
        s && I.Z.updateGuild({
          verificationLevel: j.sFg.LOW
        })
      },
      onAcceptContentFilter: (e, s) => {
        if (!s) {
          I.Z.updateGuild({
            explicitContentFilter: F
          });
          return
        }
        I.Z.updateGuild({
          explicitContentFilter: j.lxg.ALL_MEMBERS
        })
      },
      headerId: z,
      theme: c
    }), es = (0, l.jsx)(G, {
      selectableChannels: q,
      onRuleChannelChange: e => {
        R(e)
      },
      onPublicUpdatesChannelChange: e => {
        B(e)
      },
      ruleChannel: v,
      publicUpdatesChannel: U,
      headerId: z,
      theme: c,
      guildId: n.id
    }), et = X ? (0, l.jsx)(W, {
      guild: n,
      policyAccepted: d,
      onAcceptPolicy: (e, s) => {
        if (s) {
          E(!0), !$ && I.Z.updateGuild({
            defaultMessageNotifications: j.bL.ONLY_MENTIONS
          }), !x && null != H && p(!0);
          return
        }
        E(!1), $ && I.Z.updateGuild({
          defaultMessageNotifications: P
        }), x && null != H && p(!1)
      },
      headerId: z,
      theme: c
    }) : (0, l.jsx)(k, {
      guild: n,
      disableDefaultNotifications: $,
      disableEveryoneRolePermissions: w,
      policyAccepted: d,
      everyoneRolePermissionsAccepted: x,
      onAcceptPolicy: (e, s) => {
        if (s) {
          E(!0);
          return
        }
        E(!1)
      },
      onAcceptDefaultNotifications: (e, s) => {
        if (!s) {
          I.Z.updateGuild({
            defaultMessageNotifications: P
          });
          return
        }
        I.Z.updateGuild({
          defaultMessageNotifications: j.bL.ONLY_MENTIONS
        })
      },
      onAcceptEveryoneRolePermissions: (e, s) => {
        null != H && (s ? p(!0) : p(!1))
      },
      headerId: z,
      theme: c
    }), el = (0, l.jsx)("img", {
      alt: "",
      src: Y,
      className: b.footerImage,
      width: 240
    }), ea = [{
      modalContent: ee,
      disableNextStep: n.explicitContentFilter !== j.lxg.ALL_MEMBERS || n.verificationLevel === j.sFg.NONE,
      overviewTitle: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
    }, {
      modalContent: es,
      disableNextStep: null == v || null == U,
      overviewTitle: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
    }, {
      modalContent: et,
      disableNextStep: !d,
      overviewTitle: D.Z.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
    }];
  return (0, l.jsx)(L.Z, {
    stepData: ea,
    title: D.Z.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
    transitionState: t,
    onClose: () => {
      i(), S.default.track(j.rMx.MODAL_DISMISSED, {
        type: f.tA
      })
    },
    completeButtonText: D.Z.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
    onComplete: J,
    overviewFooter: el,
    sequencerClassName: b.container,
    autoCloseOnComplete: !1
  })
}