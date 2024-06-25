t(47120), t(724458);
var l = t(735250),
  n = t(470079),
  i = t(120356),
  a = t.n(i),
  r = t(442837),
  o = t(481060),
  d = t(668781),
  c = t(493683),
  u = t(787014),
  h = t(741361),
  m = t(911969),
  g = t(134433),
  E = t(156699),
  T = t(693196),
  N = t(434404),
  S = t(200498),
  p = t(146085),
  x = t(192079),
  M = t(277053),
  C = t(271383),
  _ = t(430824),
  R = t(496675),
  I = t(594174),
  Z = t(467679),
  f = t(285952),
  O = t(474333),
  v = t(903386),
  A = t(700785),
  j = t(605436),
  L = t(27544),
  b = t(415236),
  D = t(182905),
  y = t(71080),
  P = t(981631),
  F = t(231338),
  w = t(689938),
  B = t(193920);

function U(e) {
  let {
    channel: s,
    roles: t,
    members: n,
    disabledReason: i,
    getRemoveTooltipHint: r
  } = e;
  return (0, l.jsx)(o.List, {
    className: B.roleMemberList,
    sections: [t.length, n.length],
    renderRow: function(e) {
      let u, E, T, {
          section: N,
          row: p
        } = e,
        x = !1;
      switch (N) {
        case y.m$.ROLES:
          var M;
          T = (E = t[p]).rowType === y.aC.ROLE && (null === (M = E.tags) || void 0 === M ? void 0 : M.guild_connections) === null ? (0, l.jsx)(g.Z, {
            className: B.shield,
            color: E.colorString,
            size: 20
          }) : (0, l.jsx)(o.ShieldUserIcon, {
            size: "custom",
            className: B.shield,
            color: E.colorString,
            height: 20
          }), u = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: B.rowHeight,
              children: T
            }), (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: B.rowLabel,
              color: E.disabled ? "text-muted" : "text-normal",
              children: E.name
            })]
          }), x = E.disabled;
          break;
        case y.m$.MEMBERS:
          E = n[p], u = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Avatar, {
              src: E.avatarURL,
              size: o.AvatarSizes.SIZE_24,
              "aria-hidden": !0
            }), (0, l.jsx)(o.Text, {
              className: B.rowLabel,
              variant: "text-sm/normal",
              children: E.name
            }), E.bot && (0, l.jsx)(Z.Z, {
              verified: E.verifiedBot,
              className: B.rowBotTag
            }), null != E.nickname && (0, l.jsx)(o.Text, {
              color: "text-muted",
              className: B.rowLabelSubText,
              variant: "text-sm/normal",
              children: E.username
            })]
          }), x = E.disabled;
          break;
        default:
          E = null
      }
      if (null == E) return null;
      let C = !x && null == i && null != E.id;
      return (0, l.jsxs)(f.Z, {
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        className: B.memberRow,
        children: [(0, l.jsx)(f.Z, {
          justify: f.Z.Justify.START,
          align: f.Z.Align.CENTER,
          className: B.__invalid_memberRowBody,
          children: u
        }), (0, l.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: j.zB(E.rowType)
        }), E.rowType !== y.aC.EMPTY_STATE && (0, l.jsx)(o.TooltipContainer, {
          className: B.removeIconContainer,
          text: null != i ? i : r(E.rowType, E.disabled),
          children: (0, l.jsx)(o.Clickable, {
            onClick: () => {
              var e, t, l;
              return C && null != E && (e = E.id, t = E.name, l = E.rowType, void d.Z.show({
                title: w.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                body: w.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                  name: t
                }),
                cancelText: w.Z.Messages.CANCEL,
                onConfirm: () => (function(e, t) {
                  if (s.isGuildStageVoice()) {
                    let l = (0, S._L)(e, t === y.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, s);
                    (0, S.Os)(l) ? c.Z.clearPermissionOverwrite(s.id, l.id): (0, h.hw)(s.id, [l])
                  } else c.Z.clearPermissionOverwrite(s.id, e)
                })(e, l)
              }))
            },
            "aria-disabled": !C,
            "aria-label": w.Z.Messages.REMOVE,
            children: (0, l.jsx)(o.CircleXIcon, {
              size: "md",
              color: "currentColor",
              className: a()(B.removeIcon, {
                [B.disabledRemoveIcon]: x || i
              })
            })
          })
        })]
      }, E.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: s
      } = e;
      switch (s) {
        case y.m$.ROLES:
          return (0, l.jsx)(k, {
            title: w.Z.Messages.ROLES
          }, "roles-title");
        case y.m$.MEMBERS:
          return (0, l.jsx)(k, {
            title: w.Z.Messages.MEMBERS
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function H(e) {
  let {
    guild: s,
    channel: n,
    permissionUpdates: i
  } = e, d = (0, r.e7)([_.Z], () => _.Z.getRoles(s.id)), c = j.RZ(s, d, n, p.yP, i), u = (0, r.e7)([C.ZP], () => j.cR(C.ZP.getMemberIds(s.id), n, s, p.yP, i)), h = (0, S.nG)(n.id);

  function m() {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("82961")]).then(t.bind(t, 388131));
      return s => (0, l.jsx)(e, {
        ...s,
        channelId: n.id
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: a()(B.settingCard, B.active),
    children: [(0, l.jsx)(b.Z, {
      label: w.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
      description: w.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
      icon: (0, l.jsx)(o.StageIcon, {
        size: "custom",
        color: "currentColor",
        className: B.cardIcon,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, l.jsxs)("div", {
      className: B.cardFolder,
      children: [(0, l.jsxs)(f.Z, {
        justify: f.Z.Justify.BETWEEN,
        align: f.Z.Align.CENTER,
        className: B.folderHeader,
        children: [(0, l.jsx)(o.FormTitle, {
          tag: "h5",
          className: B.folderTitle,
          children: w.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
        }), (0, l.jsx)(o.Tooltip, {
          text: w.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
          shouldShow: !h,
          children: e => (0, l.jsx)(o.Button, {
            ...e,
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: m,
            disabled: !h,
            children: w.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })
        })]
      }), (0, l.jsx)(U, {
        channel: n,
        roles: c,
        members: u,
        disabledReason: h ? null : w.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
        getRemoveTooltipHint: x.kk
      })]
    })]
  })
}

function G(e) {
  let {
    guild: s,
    channel: n,
    isPrivateGuildChannel: i,
    roles: d,
    members: c
  } = e, u = (0, r.e7)([R.Z], () => R.Z.can(F.Pl.ADMINISTRATOR, s)), h = A.Uu(F.Pl.VIEW_CHANNEL, s), m = A.Uu(F.Pl.ADMINISTRATOR, s);
  async function g() {
    let e = n.accessPermissions,
      a = I.default.getCurrentUser();
    if (!i && null != await (0, T.T)(s.id, n.id)) {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(t.bind(t, 878678));
        return t => (0, l.jsx)(e, {
          ...t,
          confirmButtonColor: o.ButtonColors.BRAND,
          header: w.Z.Messages.CANNOT_PRIVATIZE_CHANNEL,
          confirmText: w.Z.Messages.OKAY,
          children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            children: w.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING_PRIVATE.format({
              onClick: () => {
                N.Z.open(s.id, P.pNK.ONBOARDING), t.onClose()
              }
            })
          })
        })
      });
      return
    }
    j.$e(n, e, i), !i && null != a && !u && j.Yh(n, e)
  }
  let E = {
    title: w.Z.Messages.PRIVATE_CHANNEL,
    subtitle: w.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
    formLabel: w.Z.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
  };
  return n.isCategory() ? (E.title = w.Z.Messages.PRIVATE_CATEGORY, E.subtitle = w.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, E.formLabel = w.Z.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : n.type === P.d4z.GUILD_VOICE && (E.subtitle = w.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, l.jsxs)("div", {
    className: a()(B.settingCard, {
      [B.active]: i
    }),
    children: [(0, l.jsx)(b.Z, {
      description: E.subtitle,
      icon: (0, l.jsx)(o.LockIcon, {
        size: "custom",
        color: "currentColor",
        className: B.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: E.title,
      onChange: g,
      value: i
    }), (0, l.jsxs)("div", {
      className: B.cardFolder,
      children: [m && (0, l.jsx)("div", {
        className: B.adminWarning,
        children: (0, l.jsx)(O.Z, {
          messageType: O.Q.WARNING,
          children: w.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
        })
      }), !h && !m && !i && (0, l.jsx)("div", {
        className: B.adminWarning,
        children: (0, l.jsx)(O.Z, {
          messageType: O.Q.WARNING,
          children: w.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
        })
      }), i && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(f.Z, {
          justify: f.Z.Justify.BETWEEN,
          align: f.Z.Align.CENTER,
          className: B.folderHeader,
          children: [(0, l.jsx)(o.FormTitle, {
            tag: "h5",
            className: B.folderTitle,
            children: E.formLabel
          }), (0, l.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: function() {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(t.bind(t, 185413));
                return s => (0, l.jsx)(e, {
                  ...s,
                  channelId: n.id,
                  inSettings: !0
                })
              })
            },
            children: w.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })]
        }), (0, l.jsx)(U, {
          channel: n,
          roles: d,
          members: c,
          getRemoveTooltipHint: j.yv
        })]
      })]
    })]
  })
}

function k(e) {
  let {
    title: s
  } = e;
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(o.FormDivider, {
      className: B.divider
    }), (0, l.jsx)(o.FormTitle, {
      className: a()(B.folderTitle, B.sectionTitle),
      tag: "h5",
      children: s
    })]
  })
}
s.Z = r.ZP.connectStores([M.Z, R.Z, C.ZP, _.Z], () => {
  let e;
  let s = M.Z.channel,
    t = M.Z.category,
    l = [],
    n = [],
    i = {},
    a = !1;
  if (null != s) {
    e = _.Z.getGuild(s.getGuildId());
    let t = C.ZP.getMemberIds(null == e ? void 0 : e.id);
    if (null != e) {
      let r = _.Z.getRoles(e.id);
      i = M.Z.editedPermissionIds.reduce((e, s) => {
        let t = M.Z.getPermissionOverwrite(s);
        return null != t && (e[s] = t), e
      }, {}), l = j.kA(e, r, s, s.accessPermissions, i), n = j.cR(t, s, e, s.accessPermissions, i), a = j.Yk(s, i)
    }
  }
  return {
    canSyncChannel: null != t && R.Z.can(F.Pl.MANAGE_ROLES, t),
    category: t,
    channel: s,
    filteredMembers: n,
    filteredRoles: l,
    guild: e,
    isPrivateGuildChannel: a,
    locked: M.Z.locked,
    permissionUpdates: i
  }
})(function(e) {
  let {
    canSyncChannel: s,
    category: i,
    channel: a,
    filteredMembers: r,
    filteredRoles: d,
    guild: c,
    isPrivateGuildChannel: h,
    locked: m,
    permissionUpdates: g
  } = e, [T, N] = n.useState(!A.Uu(F.Pl.SEND_MESSAGES, a));
  if (null == a || null == c) return null;

  function S() {
    j.$e(a, F.Pl.SEND_MESSAGES, T), N(!T)
  }

  function p() {
    if (null != i)(0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(t.bind(t, 170509));
      return s => (0, l.jsx)(e, {
        ...s,
        channel: a,
        category: i,
        onConfirm: async () => {
          let {
            guild_id: e
          } = i, s = {
            ...i.permissionOverwrites
          };
          null != e && null == s[e] && (s[e] = A.we(e)), await (0, E.u)(a, s[e].deny, s[e].allow) && (0, u.wk)(a.id, {
            permissionOverwrites: Object.values(s)
          })
        }
      })
    })
  }
  let x = {
    title: w.Z.Messages.CHANNEL_PERMISSIONS,
    subtitle: w.Z.Messages.CHANNEL_PERMISSIONS_SUBTITLE
  };
  return a.isCategory() && (x.title = w.Z.Messages.CATEGORY_SETTINGS, x.subtitle = w.Z.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.FormTitle, {
      tag: "h1",
      children: x.title
    }), (0, l.jsx)(o.FormText, {
      children: x.subtitle
    }), null != i && s ? m ? (0, l.jsx)(D.Z, {
      canSync: !1,
      icon: o.RefreshIcon,
      noticeText: w.Z.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
        categoryName: i.name
      })
    }) : (0, l.jsx)(D.Z, {
      buttonText: w.Z.Messages.SYNC_NOW,
      canSync: !0,
      icon: (0, o.makeIconCompat)(v.Z),
      noticeText: w.Z.Messages.PERMISSIONS_UNSYNCED.format({
        categoryName: i.name
      }),
      onClick: p
    }) : null, a.isGuildStageVoice() ? (0, l.jsx)(H, {
      guild: c,
      channel: a,
      permissionUpdates: g
    }) : null, (0, l.jsx)(G, {
      channel: a,
      guild: c,
      isPrivateGuildChannel: h,
      roles: d,
      members: r
    }), !1, (0, l.jsx)(L.Z, {})]
  })
})