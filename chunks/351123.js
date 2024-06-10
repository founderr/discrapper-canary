"use strict";
l.r(t), l("47120"), l("724458");
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  i = l.n(n),
  r = l("442837"),
  o = l("481060"),
  d = l("668781"),
  u = l("493683"),
  c = l("787014"),
  h = l("741361"),
  m = l("911969"),
  f = l("134433"),
  E = l("156699"),
  g = l("693196"),
  S = l("434404"),
  T = l("200498"),
  N = l("146085"),
  p = l("192079"),
  C = l("277053"),
  x = l("271383"),
  _ = l("430824"),
  M = l("496675"),
  R = l("594174"),
  I = l("467679"),
  A = l("285952"),
  O = l("474333"),
  v = l("696202"),
  L = l("630641"),
  j = l("241820"),
  y = l("170039"),
  b = l("417622"),
  D = l("903386"),
  F = l("700785"),
  P = l("605436"),
  w = l("27544"),
  U = l("415236"),
  B = l("182905"),
  H = l("71080"),
  G = l("981631"),
  k = l("231338"),
  V = l("689938"),
  W = l("974665");

function Y(e) {
  let {
    channel: t,
    roles: l,
    members: a,
    disabledReason: n,
    getRemoveTooltipHint: r
  } = e;
  return (0, s.jsx)(o.List, {
    className: W.roleMemberList,
    sections: [l.length, a.length],
    renderRow: function(e) {
      let c, E, g, {
          section: S,
          row: N
        } = e,
        p = !1;
      switch (S) {
        case H.AudienceSelectorSections.ROLES:
          var C;
          g = (E = l[N]).rowType === H.RowType.ROLE && (null === (C = E.tags) || void 0 === C ? void 0 : C.guild_connections) === null ? (0, s.jsx)(f.default, {
            className: W.shield,
            color: E.colorString,
            size: 20
          }) : (0, s.jsx)(j.default, {
            className: W.shield,
            color: E.colorString,
            height: 20
          }), c = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("div", {
              className: W.rowHeight,
              children: g
            }), (0, s.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: W.rowLabel,
              color: E.disabled ? "text-muted" : "text-normal",
              children: E.name
            })]
          }), p = E.disabled;
          break;
        case H.AudienceSelectorSections.MEMBERS:
          E = a[N], c = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Avatar, {
              src: E.avatarURL,
              size: o.AvatarSizes.SIZE_24,
              "aria-hidden": !0
            }), (0, s.jsx)(o.Text, {
              className: W.rowLabel,
              variant: "text-sm/normal",
              children: E.name
            }), E.bot && (0, s.jsx)(I.default, {
              verified: E.verifiedBot,
              className: W.rowBotTag
            }), null != E.nickname && (0, s.jsx)(o.Text, {
              color: "text-muted",
              className: W.rowLabelSubText,
              variant: "text-sm/normal",
              children: E.username
            })]
          }), p = E.disabled;
          break;
        default:
          E = null
      }
      if (null == E) return null;
      let x = !p && null == n && null != E.id;
      return (0, s.jsxs)(A.default, {
        justify: A.default.Justify.BETWEEN,
        align: A.default.Align.CENTER,
        className: W.memberRow,
        children: [(0, s.jsx)(A.default, {
          justify: A.default.Justify.START,
          align: A.default.Align.CENTER,
          className: W.__invalid_memberRowBody,
          children: c
        }), (0, s.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: P.getRowTypeLabel(E.rowType)
        }), E.rowType !== H.RowType.EMPTY_STATE && (0, s.jsx)(o.TooltipContainer, {
          className: W.removeIconContainer,
          text: null != n ? n : r(E.rowType, E.disabled),
          children: (0, s.jsx)(o.Clickable, {
            onClick: () => {
              var e, l, s;
              return x && null != E && (e = E.id, l = E.name, s = E.rowType, void d.default.show({
                title: V.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                body: V.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                  name: l
                }),
                cancelText: V.default.Messages.CANCEL,
                onConfirm: () => (function(e, l) {
                  if (t.isGuildStageVoice()) {
                    let s = (0, T.removeModeratorOverwrite)(e, l === H.RowType.ROLE ? m.PermissionOverwriteType.ROLE : m.PermissionOverwriteType.MEMBER, t);
                    (0, T.isEmptyOverwrite)(s) ? u.default.clearPermissionOverwrite(t.id, s.id): (0, h.savePermissionUpdates)(t.id, [s])
                  } else u.default.clearPermissionOverwrite(t.id, e)
                })(e, s)
              }))
            },
            "aria-disabled": !x,
            "aria-label": V.default.Messages.REMOVE,
            children: (0, s.jsx)(v.default, {
              className: i()(W.removeIcon, {
                [W.disabledRemoveIcon]: p || n
              })
            })
          })
        })]
      }, E.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: t
      } = e;
      switch (t) {
        case H.AudienceSelectorSections.ROLES:
          return (0, s.jsx)(Z, {
            title: V.default.Messages.ROLES
          }, "roles-title");
        case H.AudienceSelectorSections.MEMBERS:
          return (0, s.jsx)(Z, {
            title: V.default.Messages.MEMBERS
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function z(e) {
  let {
    guild: t,
    channel: a,
    permissionUpdates: n
  } = e, d = (0, r.useStateFromStores)([_.default], () => _.default.getRoles(t.id)), u = P.getExistingRolesRowWithPermissionDisabled(t, d, a, N.MODERATE_STAGE_CHANNEL_PERMISSIONS, n), c = (0, r.useStateFromStores)([x.default], () => P.getExistingMembersRows(x.default.getMemberIds(t.id), a, t, N.MODERATE_STAGE_CHANNEL_PERMISSIONS, n)), h = (0, T.useCanUpdateStageChannelModerators)(a.id);

  function m() {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("82961")]).then(l.bind(l, "388131"));
      return t => (0, s.jsx)(e, {
        ...t,
        channelId: a.id
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: i()(W.settingCard, W.active),
    children: [(0, s.jsx)(U.default, {
      label: V.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
      description: V.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
      icon: (0, s.jsx)(y.default, {
        className: W.cardIcon,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, s.jsxs)("div", {
      className: W.cardFolder,
      children: [(0, s.jsxs)(A.default, {
        justify: A.default.Justify.BETWEEN,
        align: A.default.Align.CENTER,
        className: W.folderHeader,
        children: [(0, s.jsx)(o.FormTitle, {
          tag: "h5",
          className: W.folderTitle,
          children: V.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
        }), (0, s.jsx)(o.Tooltip, {
          text: V.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
          shouldShow: !h,
          children: e => (0, s.jsx)(o.Button, {
            ...e,
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: m,
            disabled: !h,
            children: V.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })
        })]
      }), (0, s.jsx)(Y, {
        channel: a,
        roles: u,
        members: c,
        disabledReason: h ? null : V.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
        getRemoveTooltipHint: p.getRemoveModeratorTooltipHint
      })]
    })]
  })
}

function K(e) {
  let {
    guild: t,
    channel: a,
    isPrivateGuildChannel: n,
    roles: d,
    members: u
  } = e, c = (0, r.useStateFromStores)([M.default], () => M.default.can(k.Permissions.ADMINISTRATOR, t)), h = F.canEveryoneRole(k.Permissions.VIEW_CHANNEL, t), m = F.canEveryoneRole(k.Permissions.ADMINISTRATOR, t);
  async function f() {
    let e = a.accessPermissions,
      i = R.default.getCurrentUser();
    if (!n && null != await (0, g.getBlockForChannelAlteration)(t.id, a.id)) {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(l.bind(l, "878678"));
        return l => (0, s.jsx)(e, {
          ...l,
          confirmButtonColor: o.ButtonColors.BRAND,
          header: V.default.Messages.CANNOT_PRIVATIZE_CHANNEL,
          confirmText: V.default.Messages.OKAY,
          children: (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING_PRIVATE.format({
              onClick: () => {
                S.default.open(t.id, G.GuildSettingsSections.ONBOARDING), l.onClose()
              }
            })
          })
        })
      });
      return
    }
    P.toggleChannelEveryonePermission(a, e, n), !n && null != i && !c && P.grantUserChannelAccess(a, e)
  }
  let E = {
    title: V.default.Messages.PRIVATE_CHANNEL,
    subtitle: V.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
    formLabel: V.default.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
  };
  return a.isCategory() ? (E.title = V.default.Messages.PRIVATE_CATEGORY, E.subtitle = V.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, E.formLabel = V.default.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : a.type === G.ChannelTypes.GUILD_VOICE && (E.subtitle = V.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, s.jsxs)("div", {
    className: i()(W.settingCard, {
      [W.active]: n
    }),
    children: [(0, s.jsx)(U.default, {
      description: E.subtitle,
      icon: (0, s.jsx)(L.default, {
        className: W.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: E.title,
      onChange: f,
      value: n
    }), (0, s.jsxs)("div", {
      className: W.cardFolder,
      children: [m && (0, s.jsx)("div", {
        className: W.adminWarning,
        children: (0, s.jsx)(O.default, {
          messageType: O.HelpMessageTypes.WARNING,
          children: V.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
        })
      }), !h && !m && !n && (0, s.jsx)("div", {
        className: W.adminWarning,
        children: (0, s.jsx)(O.default, {
          messageType: O.HelpMessageTypes.WARNING,
          children: V.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
        })
      }), n && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsxs)(A.default, {
          justify: A.default.Justify.BETWEEN,
          align: A.default.Align.CENTER,
          className: W.folderHeader,
          children: [(0, s.jsx)(o.FormTitle, {
            tag: "h5",
            className: W.folderTitle,
            children: E.formLabel
          }), (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: function() {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(l.bind(l, "185413"));
                return t => (0, s.jsx)(e, {
                  ...t,
                  channelId: a.id,
                  inSettings: !0
                })
              })
            },
            children: V.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })]
        }), (0, s.jsx)(Y, {
          channel: a,
          roles: d,
          members: u,
          getRemoveTooltipHint: P.getRemoveTooltipHint
        })]
      })]
    })]
  })
}

function Z(e) {
  let {
    title: t
  } = e;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(o.FormDivider, {
      className: W.divider
    }), (0, s.jsx)(o.FormTitle, {
      className: i()(W.folderTitle, W.sectionTitle),
      tag: "h5",
      children: t
    })]
  })
}
t.default = r.default.connectStores([C.default, M.default, x.default, _.default], () => {
  let e;
  let t = C.default.channel,
    l = C.default.category,
    s = [],
    a = [],
    n = {},
    i = !1;
  if (null != t) {
    e = _.default.getGuild(t.getGuildId());
    let l = x.default.getMemberIds(null == e ? void 0 : e.id);
    if (null != e) {
      let r = _.default.getRoles(e.id);
      n = C.default.editedPermissionIds.reduce((e, t) => {
        let l = C.default.getPermissionOverwrite(t);
        return null != l && (e[t] = l), e
      }, {}), s = P.getExistingRolesRows(e, r, t, t.accessPermissions, n), a = P.getExistingMembersRows(l, t, e, t.accessPermissions, n), i = P.isPrivateGuildChannel(t, n)
    }
  }
  return {
    canSyncChannel: null != l && M.default.can(k.Permissions.MANAGE_ROLES, l),
    category: l,
    channel: t,
    filteredMembers: a,
    filteredRoles: s,
    guild: e,
    isPrivateGuildChannel: i,
    locked: C.default.locked,
    permissionUpdates: n
  }
})(function(e) {
  let {
    canSyncChannel: t,
    category: n,
    channel: i,
    filteredMembers: r,
    filteredRoles: d,
    guild: u,
    isPrivateGuildChannel: h,
    locked: m,
    permissionUpdates: f
  } = e, [g, S] = a.useState(!F.canEveryoneRole(k.Permissions.SEND_MESSAGES, i));
  if (null == i || null == u) return null;

  function T() {
    P.toggleChannelEveryonePermission(i, k.Permissions.SEND_MESSAGES, g), S(!g)
  }

  function N() {
    null != n && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(l.bind(l, "170509"));
      return t => (0, s.jsx)(e, {
        ...t,
        channel: i,
        category: n,
        onConfirm: async () => {
          let {
            guild_id: e
          } = n, t = {
            ...n.permissionOverwrites
          };
          null != e && null == t[e] && (t[e] = F.makeEveryoneOverwrite(e)), await (0, E.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(i, t[e].deny, t[e].allow) && (0, c.saveChannel)(i.id, {
            permissionOverwrites: Object.values(t)
          })
        }
      })
    })
  }
  let p = {
    title: V.default.Messages.CHANNEL_PERMISSIONS,
    subtitle: V.default.Messages.CHANNEL_PERMISSIONS_SUBTITLE
  };
  return i.isCategory() && (p.title = V.default.Messages.CATEGORY_SETTINGS, p.subtitle = V.default.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.FormTitle, {
      tag: "h1",
      children: p.title
    }), (0, s.jsx)(o.FormText, {
      children: p.subtitle
    }), null != n && t ? m ? (0, s.jsx)(B.default, {
      canSync: !1,
      icon: b.default,
      noticeText: V.default.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
        categoryName: n.name
      })
    }) : (0, s.jsx)(B.default, {
      buttonText: V.default.Messages.SYNC_NOW,
      canSync: !0,
      icon: D.default,
      noticeText: V.default.Messages.PERMISSIONS_UNSYNCED.format({
        categoryName: n.name
      }),
      onClick: N
    }) : null, i.isGuildStageVoice() ? (0, s.jsx)(z, {
      guild: u,
      channel: i,
      permissionUpdates: f
    }) : null, (0, s.jsx)(K, {
      channel: i,
      guild: u,
      isPrivateGuildChannel: h,
      roles: d,
      members: r
    }), !1, (0, s.jsx)(w.default, {})]
  })
})