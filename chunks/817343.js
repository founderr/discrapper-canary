"use strict";
E.r(t), E.d(t, {
  shouldNotRenderChangeDetail: function() {
    return c
  },
  AuditLogIcon: function() {
    return M
  },
  AuditLogExpandedChangeDetails: function() {
    return R
  }
}), E("424973");
var _ = E("37983"),
  s = E("884691"),
  a = E("414456"),
  T = E.n(a),
  n = E("917351"),
  A = E.n(n),
  u = E("866227"),
  I = E.n(u),
  i = E("77078"),
  l = E("430568"),
  L = E("90625"),
  o = E("42203"),
  r = E("697218"),
  d = E("987663"),
  N = E("404008"),
  S = E("449008"),
  g = E("159885"),
  D = E("49111"),
  G = E("782340"),
  O = E("15994");

function c(e, t) {
  let E = d.NotRenderedChanges[e.targetType];
  return null != E && !0 === E[t.key]
}
let U = {
  [D.AuditLogActionTypes.CREATE]: O.typeCreate,
  [D.AuditLogActionTypes.UPDATE]: O.typeUpdate,
  [D.AuditLogActionTypes.DELETE]: O.typeDelete
};

function C(e) {
  let {
    changeItem: t,
    subChanges: E,
    changeNumber: s,
    log: a,
    oldValue: T,
    newValue: n,
    change: A
  } = e, u = null;
  if ("string" == typeof t && (u = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[A.newValue];
      null == e && null != t[d.DEFAULT_FOR_STRINGS_KEY] ? t = t[d.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var I, o;
      u = t.format({
        user: a.user,
        target: a.target,
        oldValue: T,
        newValue: n,
        count: Array.isArray(n) ? n.length : null,
        subtarget: null !== (o = null !== (I = a.options.subtarget) && void 0 !== I ? I : A.subtarget) && void 0 !== o ? o : null,
        newColorHook: (e, t) => (0, _.jsx)("div", {
          className: O.colorHook,
          style: {
            backgroundColor: A.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, _.jsx)("div", {
          className: O.colorHook,
          style: {
            backgroundColor: A.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, _.jsx)(L.default, {
          tag: T,
          size: L.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, _.jsx)(L.default, {
          tag: n,
          size: L.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, _.jsx)(l.default, {
          emojiId: T
        }, t),
        newEmojiHook: (e, t) => (0, _.jsx)(l.default, {
          emojiId: n
        }, t)
      })
    } else u = t
  }
  return u ? (0, _.jsxs)("div", {
    className: O.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, _.jsxs)(i.Text, {
      className: O.prefix,
      variant: "code",
      color: function(e) {
        switch (e) {
          case D.AuditLogActionTypes.CREATE:
            return "text-positive";
          case D.AuditLogActionTypes.DELETE:
            return "status-danger";
          default:
            return "text-warning"
        }
      }(a.actionType),
      children: [s < 10 ? "0".concat(s) : s, (0, _.jsx)("span", {
        className: O.dash,
        children: "—"
      })]
    }), (0, _.jsxs)("div", {
      className: O.change,
      children: [(0, _.jsx)("div", {
        className: O.changeStr,
        children: u
      }), null != E ? (0, _.jsx)("div", {
        children: E
      }) : null]
    })]
  }, s) : (console.warn("No change string for", A), null)
}
class M extends s.PureComponent {
  render() {
    var e, t;
    let {
      actionType: E,
      targetType: s,
      action: a,
      themeOverride: n
    } = this.props, A = null != n ? O["themeOverride".concat((0, g.upperCaseFirstChar)(n))] : null;
    let u = T(O.icon, U[E], (e = s, (t = a) === D.AuditLogActions.MESSAGE_DELETE ? O.targetMessage : t === D.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === D.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === D.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === D.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? O.autoModerationBlockMessage : ({
      [D.AuditLogTargetTypes.ALL]: O.targetAll,
      [D.AuditLogTargetTypes.GUILD]: O.targetGuild,
      [D.AuditLogTargetTypes.CHANNEL]: O.targetChannel,
      [D.AuditLogTargetTypes.CHANNEL_OVERWRITE]: O.targetChannel,
      [D.AuditLogTargetTypes.USER]: O.targetMember,
      [D.AuditLogTargetTypes.ROLE]: O.targetRole,
      [D.AuditLogTargetTypes.ONBOARDING_PROMPT]: O.targetOnboarding,
      [D.AuditLogTargetTypes.GUILD_ONBOARDING]: O.targetOnboarding,
      [D.AuditLogTargetTypes.HOME_SETTINGS]: O.targetOnboarding,
      [D.AuditLogTargetTypes.INTEGRATION]: O.targetIntegration,
      [D.AuditLogTargetTypes.INVITE]: O.targetInvite,
      [D.AuditLogTargetTypes.WEBHOOK]: O.targetWebhook,
      [D.AuditLogTargetTypes.EMOJI]: O.targetEmoji,
      [D.AuditLogTargetTypes.STICKER]: O.targetSticker,
      [D.AuditLogTargetTypes.STAGE_INSTANCE]: O.targetStageInstance,
      [D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT]: O.targetGuildScheduledEvent,
      [D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION]: O.targetGuildScheduledEvent,
      [D.AuditLogTargetTypes.THREAD]: O.thread,
      [D.AuditLogTargetTypes.APPLICATION_COMMAND]: O.applicationCommand,
      [D.AuditLogTargetTypes.AUTO_MODERATION_RULE]: O.autoModerationRule,
      [D.AuditLogTargetTypes.GUILD_HOME]: O.targetGuildHome,
      [D.AuditLogTargetTypes.GUILD_SOUNDBOARD]: O.targetGuildSoundboard,
      [D.AuditLogTargetTypes.VOICE_CHANNEL_STATUS]: O.targetChannel
    })[e]), A);
    return (0, _.jsx)("div", {
      className: u
    })
  }
}

function R(e) {
  let {
    log: t,
    guild: E,
    onContentClick: a,
    className: n
  } = e, u = s.useCallback(e => {
    if (null == t.changes) return null;
    let s = 0,
      u = A.flatten(t.changes.map(a => {
        let {
          oldValue: T,
          newValue: n
        } = a, u = null;
        if (t.action === D.AuditLogActions.MEMBER_ROLE_UPDATE ? u = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, _.jsx)("div", {
              className: O.subListItem,
              children: e.name
            }, e.id)) : null
          }(a) : t.targetType === D.AuditLogTargetTypes.ROLE || t.action === D.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === D.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? u = function(e, t) {
            let {
              newValue: E
            } = e;
            return Array.isArray(E) ? E.map((e, E) => (0, _.jsx)("div", {
              className: O.subListItem,
              children: d.getStringForPermission(e, t)
            }, E)) : null
          }(a, t) : (t.action === D.AuditLogActions.CHANNEL_UPDATE || t.action === D.AuditLogActions.THREAD_UPDATE) && a.key === D.AuditLogChangeKeys.FLAGS && (u = function(e) {
            let {
              newValue: t,
              oldValue: E
            } = e, s = [];
            return (Array.isArray(E) && (s = s.concat(E.map(e => (0, _.jsx)("div", {
              className: O.subListItem,
              children: d.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (s = s.concat(t.map(e => (0, _.jsx)("div", {
              className: O.subListItem,
              children: d.getStringForAddedChannelFlag(e)
            }, e)))), s.length > 0) ? s : null
          }(a)), (t.action === D.AuditLogActions.CHANNEL_UPDATE || t.action === D.AuditLogActions.CHANNEL_CREATE) && a.key === D.AuditLogChangeKeys.TYPE && (null != T && (T = (0, N.channelTypeString)({
            type: T
          })), null != n && (n = (0, N.channelTypeString)({
            type: n
          }))), t.action === D.AuditLogActions.MEMBER_UPDATE && a.key === D.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (n = I(n)) || !n.isValid()) return null;
          n = n.calendar()
        }(t.action === D.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === D.AuditLogActions.ONBOARDING_PROMPT_CREATE) && a.key === D.AuditLogChangeKeys.OPTIONS && (u = function(e, t, E) {
          let {
            newValue: s,
            oldValue: a
          } = e, T = e => {
            var t;
            let _ = null == E ? void 0 : null === (t = E.getRole(e)) || void 0 === t ? void 0 : t.name;
            return null == _ ? null : "@".concat(_)
          }, n = e => {
            var t;
            let E = null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == E ? null : "#".concat(E)
          }, u = (e, E) => {
            let {
              title: s,
              id: a
            } = E, u = e.role_ids.map(T).filter(S.isNotNullish), I = e.channel_ids.map(n).filter(S.isNotNullish), l = E.role_ids.map(T).filter(S.isNotNullish), L = E.channel_ids.map(n).filter(S.isNotNullish), o = A.difference(l, u), r = A.difference(u, l), d = A.difference(L, I), N = A.difference(I, L), g = [];
            return (!A.isEqual(e.title, E.title) && g.push("title"), !A.isEqual(e.description, E.description) && g.push("description"), 0 === o.length && 0 === r.length && 0 === d.length && 0 === N.length && 0 === g.length) ? null : (0, _.jsxs)("li", {
              children: [(0, _.jsxs)("div", {
                className: O.onboardingChangeLogItemTitle,
                children: [(0, _.jsx)(M, {
                  actionType: D.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: s
                  })
                })]
              }), (0, _.jsxs)("div", {
                className: O.onboardingChangeLogItemChanges,
                children: [o.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: o.join(", ")
                  })
                }), r.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: r.join(", ")
                  })
                }), d.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: d.join(", ")
                  })
                }), N.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: N.join(", ")
                  })
                }), g.map((t, s) => (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: E[t]
                  })
                }, s))]
              })]
            }, a)
          }, I = A.keyBy(null != a ? a : [], "id"), l = A.keyBy(null != s ? s : [], "id"), L = A.difference(Object.keys(l), Object.keys(I)).map(e => l[e]), r = A.difference(Object.keys(I), Object.keys(l)).map(e => I[e]), d = A.intersection(Object.keys(l), Object.keys(I));
          return (0, _.jsxs)("ul", {
            className: O.onboardingChangeLogContainer,
            children: [L.map(e => {
              let {
                role_ids: E,
                channel_ids: s,
                title: a,
                id: A
              } = e, u = (null != E ? E : []).map(T).filter(S.isNotNullish), I = (null != s ? s : []).map(n).filter(S.isNotNullish);
              return (0, _.jsxs)("li", {
                children: [(0, _.jsxs)("div", {
                  className: O.onboardingChangeLogItemTitle,
                  children: [(0, _.jsx)(M, {
                    actionType: D.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: a
                    })
                  })]
                }), (0, _.jsxs)("div", {
                  className: O.onboardingChangeLogItemChanges,
                  children: [u.length > 0 && (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: u.join(", ")
                    })
                  }), I.length > 0 && (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: I.join(", ")
                    })
                  })]
                })]
              }, A)
            }), r.map(e => (0, _.jsx)("li", {
              children: (0, _.jsxs)("div", {
                className: O.onboardingChangeLogItemTitle,
                children: [(0, _.jsx)(M, {
                  actionType: D.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), d.map(e => u(I[e], l[e]))]
          }, "options")
        }(a, t, E)), (t.action === D.AuditLogActions.HOME_SETTINGS_CREATE || t.action === D.AuditLogActions.HOME_SETTINGS_UPDATE) && (u = function(e, t) {
          let {
            oldValue: E,
            newValue: s,
            key: a
          } = e, {
            targetType: T,
            action: n
          } = t;
          switch (a) {
            case D.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var E, s, a, T, n;
                let A = r.default.getUser(null == t ? void 0 : null === (E = t.author_ids) || void 0 === E ? void 0 : E[0]),
                  u = r.default.getUser(null === (s = e.author_ids) || void 0 === s ? void 0 : s[0]),
                  I = (null == A ? void 0 : A.id) !== (null == u ? void 0 : u.id) ? (0, _.jsx)("li", {
                    children: (0, _.jsx)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (a = null == A ? void 0 : A.username) && void 0 !== a ? a : G.default.Messages.NONE,
                          newUser: null !== (T = null == u ? void 0 : u.username) && void 0 !== T ? T : G.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  l = (null == t ? void 0 : t.message) !== e.message ? (0, _.jsx)("li", {
                    children: (0, _.jsx)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (n = null == t ? void 0 : t.message) && void 0 !== n ? n : G.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, _.jsxs)("ul", {
                  children: [I, l]
                })
              })(s, E);
            case D.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  s = t.map(e => e.channel_id),
                  a = A.difference(s, E),
                  u = A.difference(E, s),
                  I = t.filter(e => a.includes(e.channel_id)),
                  l = e.filter(e => u.includes(e.channel_id));
                return (0, _.jsxs)("ul", {
                  children: [I.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(M, {
                        actionType: D.AuditLogActionTypes.CREATE,
                        targetType: T,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), l.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(M, {
                        actionType: D.AuditLogActionTypes.DELETE,
                        targetType: T,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], s);
            case D.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  s = t.map(e => e.channel_id),
                  a = A.difference(s, E),
                  u = A.difference(E, s),
                  I = t.filter(e => a.includes(e.channel_id)),
                  l = e.filter(e => u.includes(e.channel_id));
                return (0, _.jsxs)("ul", {
                  children: [I.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(M, {
                        actionType: D.AuditLogActionTypes.CREATE,
                        targetType: T,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), l.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(M, {
                        actionType: D.AuditLogActionTypes.DELETE,
                        targetType: T,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], s);
            default:
              return null
          }
        }(a, t));
        let l = e[a.key];
        return c(t, a) ? null : ("function" == typeof l && (l = l(a)), Array.isArray(l)) ? l.map(e => (s++, C({
          changeItem: e,
          subChanges: u,
          changeNumber: s,
          log: t,
          oldValue: T,
          newValue: n,
          change: a
        }))) : (s++, C({
          changeItem: l,
          subChanges: u,
          changeNumber: s,
          log: t,
          oldValue: T,
          newValue: n,
          change: a
        }))
      })).filter(S.isNotNullish);
    return (0, _.jsx)(i.Clickable, {
      onClick: a,
      className: T(O.changeDetails, n),
      children: u
    })
  }, [t, E, a, n]), l = s.useMemo(() => {
    switch (t.targetType) {
      case D.AuditLogTargetTypes.GUILD:
        return u(d.GuildChangeStrings());
      case D.AuditLogTargetTypes.CHANNEL:
      case D.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return u(d.ChannelChangeStrings());
      case D.AuditLogTargetTypes.USER:
        return u(d.UserChangeStrings());
      case D.AuditLogTargetTypes.ROLE:
        return u(d.RoleChangeStrings());
      case D.AuditLogTargetTypes.ONBOARDING_PROMPT:
        return u(d.OnboardingPromptChangeStrings());
      case D.AuditLogTargetTypes.GUILD_ONBOARDING:
        return u(d.OnboardingChangeStrings());
      case D.AuditLogTargetTypes.HOME_SETTINGS:
        return u(d.HomeSettingsChangeStrings());
      case D.AuditLogTargetTypes.INVITE:
        return u(d.InviteChangeStrings());
      case D.AuditLogTargetTypes.WEBHOOK:
        return u(d.WebhookChangeStrings());
      case D.AuditLogTargetTypes.EMOJI:
        return u(d.EmojiChangeStrings());
      case D.AuditLogTargetTypes.STICKER:
        return u(d.StickerChangeStrings());
      case D.AuditLogTargetTypes.INTEGRATION:
        return u(d.IntegrationChangeStrings());
      case D.AuditLogTargetTypes.STAGE_INSTANCE:
        return u(d.StageInstanceChangeStrings());
      case D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return u(d.GuildScheduledEventChangeStrings());
      case D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return u(d.GuildScheduledEventExceptionChangeStrings());
      case D.AuditLogTargetTypes.THREAD:
        return u(d.ThreadChangeStrings());
      case D.AuditLogTargetTypes.APPLICATION_COMMAND:
        return u(d.CommandPermissionChangeStrings(t.changes));
      case D.AuditLogTargetTypes.AUTO_MODERATION_RULE:
        return u(d.AutoModerationRuleChangeStrings());
      case D.AuditLogTargetTypes.GUILD_SOUNDBOARD:
        return u(d.GuildSoundboardChangeStrings());
      case D.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
        return u(d.VoiceChannelStatusStrings())
    }
  }, [t.targetType, t.changes, u]);
  return (0, _.jsx)(_.Fragment, {
    children: l
  })
}