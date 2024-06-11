"use strict";
E.r(t), E.d(t, {
  AuditLogExpandedChangeDetails: function() {
    return f
  },
  AuditLogIcon: function() {
    return R
  },
  shouldNotRenderChangeDetail: function() {
    return U
  }
}), E("653041");
var _ = E("735250"),
  s = E("470079"),
  T = E("120356"),
  a = E.n(T),
  A = E("392711"),
  n = E.n(A),
  I = E("913527"),
  u = E.n(I),
  i = E("481060"),
  L = E("596454"),
  l = E("479099"),
  o = E("592125"),
  r = E("430824"),
  d = E("594174"),
  N = E("274730"),
  S = E("934415"),
  g = E("823379"),
  D = E("624138"),
  G = E("981631"),
  O = E("689938"),
  c = E("466568");

function U(e, t) {
  let E = N.NotRenderedChanges[e.targetType];
  return null != E && !0 === E[t.key]
}
let C = {
  [G.AuditLogActionTypes.CREATE]: c.typeCreate,
  [G.AuditLogActionTypes.UPDATE]: c.typeUpdate,
  [G.AuditLogActionTypes.DELETE]: c.typeDelete
};

function M(e) {
  let {
    changeItem: t,
    subChanges: E,
    changeNumber: s,
    log: T,
    oldValue: a,
    newValue: A,
    change: n
  } = e, I = null;
  if ("string" == typeof t && (I = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[n.newValue];
      null == e && null != t[N.DEFAULT_FOR_STRINGS_KEY] ? t = t[N.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var u, o;
      I = t.format({
        user: T.user,
        target: T.target,
        oldValue: a,
        newValue: A,
        count: Array.isArray(A) ? A.length : null,
        subtarget: null !== (o = null !== (u = T.options.subtarget) && void 0 !== u ? u : n.subtarget) && void 0 !== o ? o : null,
        newColorHook: (e, t) => (0, _.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: n.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, _.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: n.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, _.jsx)(l.default, {
          tag: a,
          size: l.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, _.jsx)(l.default, {
          tag: A,
          size: l.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, _.jsx)(L.default, {
          emojiId: a
        }, t),
        newEmojiHook: (e, t) => (0, _.jsx)(L.default, {
          emojiId: A
        }, t)
      })
    } else I = t
  }
  return null == I ? (console.warn("No change string for", n), null) : "" === I ? null : (0, _.jsxs)("div", {
    className: c.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, _.jsxs)(i.Text, {
      className: c.prefix,
      variant: "code",
      color: function(e) {
        switch (e) {
          case G.AuditLogActionTypes.CREATE:
            return "text-positive";
          case G.AuditLogActionTypes.DELETE:
            return "status-danger";
          default:
            return "text-warning"
        }
      }(T.actionType),
      children: [s < 10 ? "0".concat(s) : s, (0, _.jsx)("span", {
        className: c.dash,
        children: "—"
      })]
    }), (0, _.jsxs)("div", {
      className: c.change,
      children: [(0, _.jsx)("div", {
        className: c.changeStr,
        children: I
      }), null != E ? (0, _.jsx)("div", {
        children: E
      }) : null]
    })]
  }, s)
}
class R extends s.PureComponent {
  render() {
    var e, t;
    let {
      actionType: E,
      targetType: s,
      action: T,
      themeOverride: A
    } = this.props, n = null != A ? c["themeOverride".concat((0, D.upperCaseFirstChar)(A))] : null;
    let I = a()(c.icon, C[E], (e = s, (t = T) === G.AuditLogActions.MESSAGE_DELETE ? c.targetMessage : t === G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === G.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? c.autoModerationBlockMessage : ({
      [G.AuditLogTargetTypes.ALL]: c.targetAll,
      [G.AuditLogTargetTypes.GUILD]: c.targetGuild,
      [G.AuditLogTargetTypes.CHANNEL]: c.targetChannel,
      [G.AuditLogTargetTypes.CHANNEL_OVERWRITE]: c.targetChannel,
      [G.AuditLogTargetTypes.USER]: c.targetMember,
      [G.AuditLogTargetTypes.ROLE]: c.targetRole,
      [G.AuditLogTargetTypes.ONBOARDING_PROMPT]: c.targetOnboarding,
      [G.AuditLogTargetTypes.GUILD_ONBOARDING]: c.targetOnboarding,
      [G.AuditLogTargetTypes.HOME_SETTINGS]: c.targetOnboarding,
      [G.AuditLogTargetTypes.INTEGRATION]: c.targetIntegration,
      [G.AuditLogTargetTypes.INVITE]: c.targetInvite,
      [G.AuditLogTargetTypes.WEBHOOK]: c.targetWebhook,
      [G.AuditLogTargetTypes.EMOJI]: c.targetEmoji,
      [G.AuditLogTargetTypes.STICKER]: c.targetSticker,
      [G.AuditLogTargetTypes.STAGE_INSTANCE]: c.targetStageInstance,
      [G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT]: c.targetGuildScheduledEvent,
      [G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION]: c.targetGuildScheduledEvent,
      [G.AuditLogTargetTypes.THREAD]: c.thread,
      [G.AuditLogTargetTypes.APPLICATION_COMMAND]: c.applicationCommand,
      [G.AuditLogTargetTypes.AUTO_MODERATION_RULE]: c.autoModerationRule,
      [G.AuditLogTargetTypes.GUILD_HOME]: c.targetGuildHome,
      [G.AuditLogTargetTypes.GUILD_SOUNDBOARD]: c.targetGuildSoundboard,
      [G.AuditLogTargetTypes.VOICE_CHANNEL_STATUS]: c.targetChannel
    })[e]), n);
    return (0, _.jsx)("div", {
      className: I
    })
  }
}

function f(e) {
  let {
    log: t,
    guild: E,
    onContentClick: T,
    className: A
  } = e, I = s.useCallback(e => {
    if (null == t.changes) return null;
    let s = 0,
      I = n().flatten(t.changes.map(T => {
        let {
          oldValue: a,
          newValue: A
        } = T, I = null;
        if (t.action === G.AuditLogActions.MEMBER_ROLE_UPDATE ? I = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, _.jsx)("div", {
              className: c.subListItem,
              children: e.name
            }, e.id)) : null
          }(T) : t.targetType === G.AuditLogTargetTypes.ROLE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? I = function(e, t) {
            let {
              newValue: E
            } = e;
            return Array.isArray(E) ? E.map((e, E) => (0, _.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForPermission(e, t)
            }, E)) : null
          }(T, t) : (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.THREAD_UPDATE) && T.key === G.AuditLogChangeKeys.FLAGS && (I = function(e) {
            let {
              newValue: t,
              oldValue: E
            } = e, s = [];
            return (Array.isArray(E) && (s = s.concat(E.map(e => (0, _.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (s = s.concat(t.map(e => (0, _.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForAddedChannelFlag(e)
            }, e)))), s.length > 0) ? s : null
          }(T)), (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.CHANNEL_CREATE) && T.key === G.AuditLogChangeKeys.TYPE && (null != a && (a = (0, S.channelTypeString)({
            type: a
          })), null != A && (A = (0, S.channelTypeString)({
            type: A
          }))), t.action === G.AuditLogActions.MEMBER_UPDATE && T.key === G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (A = u()(A)) || !A.isValid()) return null;
          A = A.calendar()
        }(t.action === G.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === G.AuditLogActions.ONBOARDING_PROMPT_CREATE) && T.key === G.AuditLogChangeKeys.OPTIONS && (I = function(e, t, E) {
          let {
            newValue: s,
            oldValue: T
          } = e, a = e => {
            var t;
            let _ = null != E ? null === (t = r.default.getRole(E.id, e)) || void 0 === t ? void 0 : t.name : void 0;
            return null == _ ? null : "@".concat(_)
          }, A = e => {
            var t;
            let E = null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == E ? null : "#".concat(E)
          }, I = (e, E) => {
            let {
              title: s,
              id: T
            } = E, I = e.role_ids.map(a).filter(g.isNotNullish), u = e.channel_ids.map(A).filter(g.isNotNullish), L = E.role_ids.map(a).filter(g.isNotNullish), l = E.channel_ids.map(A).filter(g.isNotNullish), o = n().difference(L, I), r = n().difference(I, L), d = n().difference(l, u), N = n().difference(u, l), S = [];
            return (!n().isEqual(e.title, E.title) && S.push("title"), !n().isEqual(e.description, E.description) && S.push("description"), 0 === o.length && 0 === r.length && 0 === d.length && 0 === N.length && 0 === S.length) ? null : (0, _.jsxs)("li", {
              children: [(0, _.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, _.jsx)(R, {
                  actionType: G.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: s
                  })
                })]
              }), (0, _.jsxs)("div", {
                className: c.onboardingChangeLogItemChanges,
                children: [o.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: o.join(", ")
                  })
                }), r.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: r.join(", ")
                  })
                }), d.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: d.join(", ")
                  })
                }), N.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: N.join(", ")
                  })
                }), S.map((t, s) => (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: E[t]
                  })
                }, s))]
              })]
            }, T)
          }, u = n().keyBy(null != T ? T : [], "id"), L = n().keyBy(null != s ? s : [], "id"), l = n().difference(Object.keys(L), Object.keys(u)).map(e => L[e]), d = n().difference(Object.keys(u), Object.keys(L)).map(e => u[e]), N = n().intersection(Object.keys(L), Object.keys(u));
          return (0, _.jsxs)("ul", {
            className: c.onboardingChangeLogContainer,
            children: [l.map(e => {
              let {
                role_ids: E,
                channel_ids: s,
                title: T,
                id: n
              } = e, I = (null != E ? E : []).map(a).filter(g.isNotNullish), u = (null != s ? s : []).map(A).filter(g.isNotNullish);
              return (0, _.jsxs)("li", {
                children: [(0, _.jsxs)("div", {
                  className: c.onboardingChangeLogItemTitle,
                  children: [(0, _.jsx)(R, {
                    actionType: G.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: T
                    })
                  })]
                }), (0, _.jsxs)("div", {
                  className: c.onboardingChangeLogItemChanges,
                  children: [I.length > 0 && (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: I.join(", ")
                    })
                  }), u.length > 0 && (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: u.join(", ")
                    })
                  })]
                })]
              }, n)
            }), d.map(e => (0, _.jsx)("li", {
              children: (0, _.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, _.jsx)(R, {
                  actionType: G.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), N.map(e => I(u[e], L[e]))]
          }, "options")
        }(T, t, E)), (t.action === G.AuditLogActions.HOME_SETTINGS_CREATE || t.action === G.AuditLogActions.HOME_SETTINGS_UPDATE) && (I = function(e, t) {
          let {
            oldValue: E,
            newValue: s,
            key: T
          } = e, {
            targetType: a,
            action: A
          } = t;
          switch (T) {
            case G.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var E, s, T, a, A;
                let n = d.default.getUser(null == t ? void 0 : null === (E = t.author_ids) || void 0 === E ? void 0 : E[0]),
                  I = d.default.getUser(null === (s = e.author_ids) || void 0 === s ? void 0 : s[0]),
                  u = (null == n ? void 0 : n.id) !== (null == I ? void 0 : I.id) ? (0, _.jsx)("li", {
                    children: (0, _.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (T = null == n ? void 0 : n.username) && void 0 !== T ? T : O.default.Messages.NONE,
                          newUser: null !== (a = null == I ? void 0 : I.username) && void 0 !== a ? a : O.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  L = (null == t ? void 0 : t.message) !== e.message ? (0, _.jsx)("li", {
                    children: (0, _.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (A = null == t ? void 0 : t.message) && void 0 !== A ? A : O.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, _.jsxs)("ul", {
                  children: [u, L]
                })
              })(s, E);
            case G.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  s = t.map(e => e.channel_id),
                  T = n().difference(s, E),
                  I = n().difference(E, s),
                  u = t.filter(e => T.includes(e.channel_id)),
                  L = e.filter(e => I.includes(e.channel_id));
                return (0, _.jsxs)("ul", {
                  children: [u.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: a,
                        action: A
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), L.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: a,
                        action: A
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], s);
            case G.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  s = t.map(e => e.channel_id),
                  T = n().difference(s, E),
                  I = n().difference(E, s),
                  u = t.filter(e => T.includes(e.channel_id)),
                  L = e.filter(e => I.includes(e.channel_id));
                return (0, _.jsxs)("ul", {
                  children: [u.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: a,
                        action: A
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), L.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: a,
                        action: A
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
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
        }(T, t));
        let L = e[T.key];
        return U(t, T) ? null : ("function" == typeof L && (L = L(T)), Array.isArray(L)) ? L.map(e => (s++, M({
          changeItem: e,
          subChanges: I,
          changeNumber: s,
          log: t,
          oldValue: a,
          newValue: A,
          change: T
        }))) : (s++, M({
          changeItem: L,
          subChanges: I,
          changeNumber: s,
          log: t,
          oldValue: a,
          newValue: A,
          change: T
        }))
      })).filter(g.isNotNullish);
    return (0, _.jsx)(i.Clickable, {
      onClick: T,
      className: a()(c.changeDetails, A),
      children: I
    })
  }, [t, E, T, A]), L = s.useMemo(() => {
    switch (t.targetType) {
      case G.AuditLogTargetTypes.GUILD:
        return I(N.GuildChangeStrings());
      case G.AuditLogTargetTypes.CHANNEL:
      case G.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return I(N.ChannelChangeStrings());
      case G.AuditLogTargetTypes.USER:
        return I(N.UserChangeStrings());
      case G.AuditLogTargetTypes.ROLE:
        return I(N.RoleChangeStrings());
      case G.AuditLogTargetTypes.ONBOARDING_PROMPT:
        return I(N.OnboardingPromptChangeStrings());
      case G.AuditLogTargetTypes.GUILD_ONBOARDING:
        return I(N.OnboardingChangeStrings());
      case G.AuditLogTargetTypes.HOME_SETTINGS:
        return I(N.HomeSettingsChangeStrings());
      case G.AuditLogTargetTypes.INVITE:
        return I(N.InviteChangeStrings());
      case G.AuditLogTargetTypes.WEBHOOK:
        return I(N.WebhookChangeStrings());
      case G.AuditLogTargetTypes.EMOJI:
        return I(N.EmojiChangeStrings());
      case G.AuditLogTargetTypes.STICKER:
        return I(N.StickerChangeStrings());
      case G.AuditLogTargetTypes.INTEGRATION:
        return I(N.IntegrationChangeStrings());
      case G.AuditLogTargetTypes.STAGE_INSTANCE:
        return I(N.StageInstanceChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return I(N.GuildScheduledEventChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return I(N.GuildScheduledEventExceptionChangeStrings());
      case G.AuditLogTargetTypes.THREAD:
        return I(N.ThreadChangeStrings());
      case G.AuditLogTargetTypes.APPLICATION_COMMAND:
        return I(N.CommandPermissionChangeStrings(t.changes));
      case G.AuditLogTargetTypes.AUTO_MODERATION_RULE:
        return I(N.AutoModerationRuleChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SOUNDBOARD:
        return I(N.GuildSoundboardChangeStrings());
      case G.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
        return I(N.VoiceChannelStatusStrings())
    }
  }, [t.targetType, t.changes, I]);
  return (0, _.jsx)(_.Fragment, {
    children: L
  })
}