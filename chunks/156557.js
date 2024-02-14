"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("686130"), s("781738");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("866227"),
  o = s.n(r),
  d = s("974667"),
  u = s("77078"),
  c = s("679653"),
  E = s("506885"),
  _ = s("981601"),
  I = s("242020"),
  T = s("27618"),
  f = s("697218"),
  S = s("461380"),
  m = s("258078"),
  N = s("404008"),
  g = s("158998"),
  h = s("309021"),
  C = s("49111"),
  R = s("319849");

function x(e, t) {
  let s = h.NotRenderedChanges[e.targetType];
  return null != s && !0 === s[t.key]
}
class L extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      onContextMenu: s,
      guildId: l
    } = this.props;
    return (0, a.jsx)(u.Popout, {
      preload: () => (0, E.default)(e.id, e.getAvatarURL(l, 80), {
        guildId: l
      }),
      renderPopout: t => (0, a.jsx)(_.default, {
        ...t,
        userId: e.id,
        guildId: l
      }),
      children: l => (0, a.jsx)(u.Clickable, {
        ...l,
        onClick: e => {
          e.stopPropagation(), l.onClick(e)
        },
        onContextMenu: s,
        className: R.userHook,
        children: (0, a.jsxs)("div", {
          className: R.username,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: g.default.getUserTag(e, {
              mode: "username",
              identifiable: t ? "never" : "always"
            })
          }), !t && !e.isPomelo() && (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            children: ["#", e.discriminator]
          })]
        })
      })
    })
  }
}
class O extends l.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: t
    } = e;
    return (e.actionType !== C.AuditLogActionTypes.DELETE || e.action === C.AuditLogActions.MEMBER_BAN_ADD || e.action === C.AuditLogActions.MEMBER_KICK || e.action === C.AuditLogActions.MEMBER_PRUNE) && null != t && t.some(t => !x(e, t))
  }
  getActionTypeColor(e) {
    switch (e) {
      case C.AuditLogActionTypes.CREATE:
        return m.default.Colors.STATUS_GREEN;
      case C.AuditLogActionTypes.DELETE:
        return m.default.Colors.STATUS_RED;
      default:
        return m.default.Colors.STATUS_YELLOW
    }
  }
  getRowAccentColor() {
    let {
      log: e
    } = this.props;
    if (e.action === C.AuditLogActions.MEMBER_BAN_ADD) return R.accentRed
  }
  renderTitle() {
    let {
      log: e,
      guildId: t,
      onUserContextMenu: s,
      onTargetContextMenu: l,
      onChannelContextMenu: n
    } = this.props, {
      user: i,
      target: r,
      options: o
    } = e, d = h.getChangeTitle(e), E = h.getStringForBanReason(e);
    return null != d ? (0, a.jsx)(u.Text, {
      className: R.overflowEllipsis,
      variant: "text-sm/normal",
      children: d.format({
        user: i,
        target: r,
        reason: E,
        userHook: (l, n) => (0, a.jsx)(L, {
          guildId: t,
          user: e.user,
          onContextMenu: s,
          hideDiscriminator: !0
        }, n),
        targetHook: (s, n) => e.targetType === C.AuditLogTargetTypes.USER ? (0, a.jsx)(L, {
          guildId: t,
          user: e.target,
          onContextMenu: l,
          hideDiscriminator: !1
        }, n) : (0, a.jsx)("span", {
          onContextMenu: l,
          children: s
        }, n),
        count: o.count,
        channel: o.channel ? "string" == typeof o.channel ? o.channel : (0, c.computeChannelName)(o.channel, f.default, T.default, !0) : null,
        channelHook: (e, t) => (0, a.jsx)("span", {
          onContextMenu: n,
          children: e
        }, t)
      })
    }) : null
  }
  renderRoleUpdate(e) {
    let {
      newValue: t
    } = e;
    return Array.isArray(t) ? t.map(e => (0, a.jsxs)("div", {
      className: R.subListItem,
      children: [(0, a.jsx)(u.Text, {
        className: R.bullet,
        color: "text-muted",
        variant: "text-sm/normal",
        children: "•"
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: e.name
      })]
    }, e.id)) : null
  }
  renderPermissionUpdate(e) {
    let {
      newValue: t
    } = e;
    return Array.isArray(t) ? t.map(e => {
      if (null != h.getStringForPermission(e, this.props.log)) return (0, a.jsxs)("div", {
        className: R.subListItem,
        children: [(0, a.jsx)(u.Text, {
          className: R.bullet,
          color: "text-muted",
          variant: "text-sm/normal",
          children: "•"
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: h.getStringForPermission(e, this.props.log)
        })]
      }, e)
    }) : null
  }
  renderChangeDetails(e) {
    let {
      log: t,
      onContentClick: s
    } = this.props;
    if (null == t.changes) return null;
    let l = 0,
      n = t.changes.map((s, n) => {
        let {
          oldValue: i,
          newValue: r
        } = s, d = null;
        if (t.action === C.AuditLogActions.MEMBER_ROLE_UPDATE ? d = this.renderRoleUpdate(s) : (t.targetType === C.AuditLogTargetTypes.ROLE || t.action === C.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === C.AuditLogActions.CHANNEL_OVERWRITE_UPDATE) && (d = this.renderPermissionUpdate(s)), (t.action === C.AuditLogActions.CHANNEL_UPDATE || t.action === C.AuditLogActions.CHANNEL_CREATE) && s.key === C.AuditLogChangeKeys.TYPE && (null != i && (i = (0, N.channelTypeString)({
            type: i
          })), null != r && (r = (0, N.channelTypeString)({
            type: r
          }))), t.action === C.AuditLogActions.MEMBER_UPDATE && s.key === C.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (r = o(r)) || !r.isValid()) return null;
          r = r.calendar()
        }
        let c = e[s.key];
        if (x(t, s)) return null;
        if ("function" == typeof c && (c = c(s)), null != c && "object" == typeof c) {
          if (null == c.format) {
            let e = c[s.newValue];
            null == e && null != c[h.DEFAULT_FOR_STRINGS_KEY] ? c = c[h.DEFAULT_FOR_STRINGS_KEY] : null != e && (c = e)
          }
          if (null != c && null != c.format) {
            var E, _;
            c = c.format({
              user: t.user,
              target: t.target,
              oldValue: i,
              newValue: r,
              count: Array.isArray(r) ? r.length : null,
              subtarget: null !== (_ = null !== (E = t.options.subtarget) && void 0 !== E ? E : s.subtarget) && void 0 !== _ ? _ : null,
              newColorHook: (e, t) => (0, a.jsx)("div", {
                className: R.colorHook,
                style: {
                  backgroundColor: s.newValue
                }
              }, t),
              oldColorHook: (e, t) => (0, a.jsx)("div", {
                className: R.colorHook,
                style: {
                  backgroundColor: s.oldValue
                }
              }, t)
            })
          }
        }
        return c ? (l++, (0, a.jsxs)("div", {
          className: R.detail,
          children: [(0, a.jsxs)("div", {
            className: R.prefix,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: l < 10 ? "0".concat(l) : l
            }), (0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              className: R.dash,
              children: "—"
            })]
          }), (0, a.jsxs)("div", {
            className: R.change,
            children: [null != d ? (0, a.jsx)(u.Text, {
              className: R.changeStr,
              variant: "text-xs/normal",
              children: c.concat(":")
            }) : (0, a.jsx)(u.Text, {
              className: R.changeStr,
              variant: "text-xs/normal",
              children: c
            }), null != d ? (0, a.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: d
            }) : null]
          })]
        }, n)) : (console.warn("No change string for", s), null)
      });
    return (0, a.jsx)(u.Clickable, {
      onClick: s,
      className: R.changeDetails,
      children: n
    })
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: t
    } = this.props;
    if (e) switch (t.targetType) {
      case C.AuditLogTargetTypes.GUILD:
        return this.renderChangeDetails(h.GuildChangeStrings());
      case C.AuditLogTargetTypes.CHANNEL:
      case C.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return this.renderChangeDetails(h.ChannelChangeStrings());
      case C.AuditLogTargetTypes.USER:
        return this.renderChangeDetails(h.UserChangeStrings());
      case C.AuditLogTargetTypes.ROLE:
        return this.renderChangeDetails(h.RoleChangeStrings());
      case C.AuditLogTargetTypes.INVITE:
        return this.renderChangeDetails(h.InviteChangeStrings());
      case C.AuditLogTargetTypes.WEBHOOK:
        return this.renderChangeDetails(h.WebhookChangeStrings());
      case C.AuditLogTargetTypes.EMOJI:
        return this.renderChangeDetails(h.EmojiChangeStrings());
      case C.AuditLogTargetTypes.STICKER:
        return this.renderChangeDetails(h.StickerChangeStrings());
      case C.AuditLogTargetTypes.INTEGRATION:
        return this.renderChangeDetails(h.IntegrationChangeStrings());
      case C.AuditLogTargetTypes.STAGE_INSTANCE:
        return this.renderChangeDetails(h.StageInstanceChangeStrings());
      case C.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return this.renderChangeDetails(h.GuildScheduledEventChangeStrings());
      case C.AuditLogTargetTypes.THREAD:
        return this.renderChangeDetails(h.ThreadChangeStrings());
      case C.AuditLogTargetTypes.APPLICATION_COMMAND:
        return this.renderChangeDetails(h.CommandPermissionChangeStrings(t.changes))
    }
    return null
  }
  formatActionTagName(e) {
    return e.replaceAll("_", " ").toLocaleLowerCase()
  }
  renderActionTag() {
    let {
      log: e
    } = this.props, t = (0, I.getTargetType)(e.action);
    if (null != t) return (0, a.jsx)("div", {
      className: R.tag,
      children: (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: R.tagString,
        children: this.formatActionTagName(t)
      })
    })
  }
  render() {
    let e;
    let {
      log: t,
      className: s,
      expanded: l,
      onHeaderClick: n,
      guildId: r
    } = this.props, o = t.user;
    if (null == o) return null;
    let c = this.hasChangesToRender(),
      I = R.headerDefault;
    l ? I = R.headerExpanded : c && (I = R.headerClickable);
    let T = t.timestampStart.calendar(),
      f = t.timestampEnd.calendar();
    e = T === f ? (0, a.jsx)(u.Text, {
      className: R.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(T)
    }) : (0, a.jsx)(u.Text, {
      className: R.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(T, "—").concat(f)
    });
    let m = c ? n : C.NOOP;
    return (0, a.jsx)(d.ListNavigatorItem, {
      id: t.id,
      children: n => (0, a.jsxs)("div", {
        className: i(this.getRowAccentColor(), R.auditLog, s),
        children: [(0, a.jsxs)(u.Clickable, {
          className: I,
          "aria-expanded": l,
          onClick: m,
          ...n,
          children: [(0, a.jsx)(u.Popout, {
            preload: () => (0, E.default)(t.userId, o.getAvatarURL(r, 80), {
              guildId: r
            }),
            renderPopout: e => (0, a.jsx)(_.default, {
              ...e,
              userId: t.userId,
              guildId: r
            }),
            children: e => (0, a.jsx)(u.Avatar, {
              ...e,
              onClick: t => {
                t.stopPropagation(), e.onClick(t)
              },
              src: o.getAvatarURL(r, 40),
              "aria-hidden": !0,
              size: u.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: R.timeWrap,
            children: [(0, a.jsx)("div", {
              className: R.title,
              children: this.renderTitle()
            }), (0, a.jsxs)("div", {
              className: R.meta,
              children: [this.renderActionTag(), e]
            })]
          }), c ? (0, a.jsx)(S.default, {
            className: R.expand,
            foreground: R.expandForeground,
            expanded: l,
            "aria-hidden": !0
          }) : null]
        }), this.renderChangeSummary()]
      })
    })
  }
}
var p = O