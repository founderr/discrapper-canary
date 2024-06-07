"use strict";
s.r(t), s.d(t, {
  AuditLogExpandedChangeDetails: function() {
    return f
  },
  AuditLogIcon: function() {
    return R
  },
  shouldNotRenderChangeDetail: function() {
    return C
  }
}), s("653041");
var E = s("735250"),
  _ = s("470079"),
  a = s("120356"),
  n = s.n(a),
  T = s("392711"),
  i = s.n(T),
  A = s("913527"),
  u = s.n(A),
  l = s("481060"),
  I = s("596454"),
  r = s("479099"),
  o = s("592125"),
  L = s("430824"),
  d = s("594174"),
  N = s("274730"),
  S = s("934415"),
  g = s("823379"),
  D = s("624138"),
  c = s("981631"),
  G = s("689938"),
  O = s("466568");

function C(e, t) {
  let s = N.NotRenderedChanges[e.targetType];
  return null != s && !0 === s[t.key]
}
let U = {
  [c.AuditLogActionTypes.CREATE]: O.typeCreate,
  [c.AuditLogActionTypes.UPDATE]: O.typeUpdate,
  [c.AuditLogActionTypes.DELETE]: O.typeDelete
};

function M(e) {
  let {
    changeItem: t,
    subChanges: s,
    changeNumber: _,
    log: a,
    oldValue: n,
    newValue: T,
    change: i
  } = e, A = null;
  if ("string" == typeof t && (A = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[i.newValue];
      null == e && null != t[N.DEFAULT_FOR_STRINGS_KEY] ? t = t[N.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var u, o;
      A = t.format({
        user: a.user,
        target: a.target,
        oldValue: n,
        newValue: T,
        count: Array.isArray(T) ? T.length : null,
        subtarget: null !== (o = null !== (u = a.options.subtarget) && void 0 !== u ? u : i.subtarget) && void 0 !== o ? o : null,
        newColorHook: (e, t) => (0, E.jsx)("div", {
          className: O.colorHook,
          style: {
            backgroundColor: i.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, E.jsx)("div", {
          className: O.colorHook,
          style: {
            backgroundColor: i.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, E.jsx)(r.default, {
          tag: n,
          size: r.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, E.jsx)(r.default, {
          tag: T,
          size: r.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, E.jsx)(I.default, {
          emojiId: n
        }, t),
        newEmojiHook: (e, t) => (0, E.jsx)(I.default, {
          emojiId: T
        }, t)
      })
    } else A = t
  }
  return null == A ? (console.warn("No change string for", i), null) : "" === A ? null : (0, E.jsxs)("div", {
    className: O.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, E.jsxs)(l.Text, {
      className: O.prefix,
      variant: "code",
      color: function(e) {
        switch (e) {
          case c.AuditLogActionTypes.CREATE:
            return "text-positive";
          case c.AuditLogActionTypes.DELETE:
            return "status-danger";
          default:
            return "text-warning"
        }
      }(a.actionType),
      children: [_ < 10 ? "0".concat(_) : _, (0, E.jsx)("span", {
        className: O.dash,
        children: "—"
      })]
    }), (0, E.jsxs)("div", {
      className: O.change,
      children: [(0, E.jsx)("div", {
        className: O.changeStr,
        children: A
      }), null != s ? (0, E.jsx)("div", {
        children: s
      }) : null]
    })]
  }, _)
}
class R extends _.PureComponent {
  render() {
    var e, t;
    let {
      actionType: s,
      targetType: _,
      action: a,
      themeOverride: T
    } = this.props, i = null != T ? O["themeOverride".concat((0, D.upperCaseFirstChar)(T))] : null;
    let A = n()(O.icon, U[s], (e = _, (t = a) === c.AuditLogActions.MESSAGE_DELETE ? O.targetMessage : t === c.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === c.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === c.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === c.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? O.autoModerationBlockMessage : ({
      [c.AuditLogTargetTypes.ALL]: O.targetAll,
      [c.AuditLogTargetTypes.GUILD]: O.targetGuild,
      [c.AuditLogTargetTypes.CHANNEL]: O.targetChannel,
      [c.AuditLogTargetTypes.CHANNEL_OVERWRITE]: O.targetChannel,
      [c.AuditLogTargetTypes.USER]: O.targetMember,
      [c.AuditLogTargetTypes.ROLE]: O.targetRole,
      [c.AuditLogTargetTypes.ONBOARDING_PROMPT]: O.targetOnboarding,
      [c.AuditLogTargetTypes.GUILD_ONBOARDING]: O.targetOnboarding,
      [c.AuditLogTargetTypes.HOME_SETTINGS]: O.targetOnboarding,
      [c.AuditLogTargetTypes.INTEGRATION]: O.targetIntegration,
      [c.AuditLogTargetTypes.INVITE]: O.targetInvite,
      [c.AuditLogTargetTypes.WEBHOOK]: O.targetWebhook,
      [c.AuditLogTargetTypes.EMOJI]: O.targetEmoji,
      [c.AuditLogTargetTypes.STICKER]: O.targetSticker,
      [c.AuditLogTargetTypes.STAGE_INSTANCE]: O.targetStageInstance,
      [c.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT]: O.targetGuildScheduledEvent,
      [c.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION]: O.targetGuildScheduledEvent,
      [c.AuditLogTargetTypes.THREAD]: O.thread,
      [c.AuditLogTargetTypes.APPLICATION_COMMAND]: O.applicationCommand,
      [c.AuditLogTargetTypes.AUTO_MODERATION_RULE]: O.autoModerationRule,
      [c.AuditLogTargetTypes.GUILD_HOME]: O.targetGuildHome,
      [c.AuditLogTargetTypes.GUILD_SOUNDBOARD]: O.targetGuildSoundboard,
      [c.AuditLogTargetTypes.VOICE_CHANNEL_STATUS]: O.targetChannel
    })[e]), i);
    return (0, E.jsx)("div", {
      className: A
    })
  }
}

function f(e) {
  let {
    log: t,
    guild: s,
    onContentClick: a,
    className: T
  } = e, A = _.useCallback(e => {
    if (null == t.changes) return null;
    let _ = 0,
      A = i().flatten(t.changes.map(a => {
        let {
          oldValue: n,
          newValue: T
        } = a, A = null;
        if (t.action === c.AuditLogActions.MEMBER_ROLE_UPDATE ? A = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, E.jsx)("div", {
              className: O.subListItem,
              children: e.name
            }, e.id)) : null
          }(a) : t.targetType === c.AuditLogTargetTypes.ROLE || t.action === c.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === c.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? A = function(e, t) {
            let {
              newValue: s
            } = e;
            return Array.isArray(s) ? s.map((e, s) => (0, E.jsx)("div", {
              className: O.subListItem,
              children: N.getStringForPermission(e, t)
            }, s)) : null
          }(a, t) : (t.action === c.AuditLogActions.CHANNEL_UPDATE || t.action === c.AuditLogActions.THREAD_UPDATE) && a.key === c.AuditLogChangeKeys.FLAGS && (A = function(e) {
            let {
              newValue: t,
              oldValue: s
            } = e, _ = [];
            return (Array.isArray(s) && (_ = _.concat(s.map(e => (0, E.jsx)("div", {
              className: O.subListItem,
              children: N.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (_ = _.concat(t.map(e => (0, E.jsx)("div", {
              className: O.subListItem,
              children: N.getStringForAddedChannelFlag(e)
            }, e)))), _.length > 0) ? _ : null
          }(a)), (t.action === c.AuditLogActions.CHANNEL_UPDATE || t.action === c.AuditLogActions.CHANNEL_CREATE) && a.key === c.AuditLogChangeKeys.TYPE && (null != n && (n = (0, S.channelTypeString)({
            type: n
          })), null != T && (T = (0, S.channelTypeString)({
            type: T
          }))), t.action === c.AuditLogActions.MEMBER_UPDATE && a.key === c.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (T = u()(T)) || !T.isValid()) return null;
          T = T.calendar()
        }(t.action === c.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === c.AuditLogActions.ONBOARDING_PROMPT_CREATE) && a.key === c.AuditLogChangeKeys.OPTIONS && (A = function(e, t, s) {
          let {
            newValue: _,
            oldValue: a
          } = e, n = e => {
            var t;
            let E = null != s ? null === (t = L.default.getRole(s.id, e)) || void 0 === t ? void 0 : t.name : void 0;
            return null == E ? null : "@".concat(E)
          }, T = e => {
            var t;
            let s = null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == s ? null : "#".concat(s)
          }, A = (e, s) => {
            let {
              title: _,
              id: a
            } = s, A = e.role_ids.map(n).filter(g.isNotNullish), u = e.channel_ids.map(T).filter(g.isNotNullish), I = s.role_ids.map(n).filter(g.isNotNullish), r = s.channel_ids.map(T).filter(g.isNotNullish), o = i().difference(I, A), L = i().difference(A, I), d = i().difference(r, u), N = i().difference(u, r), S = [];
            return (!i().isEqual(e.title, s.title) && S.push("title"), !i().isEqual(e.description, s.description) && S.push("description"), 0 === o.length && 0 === L.length && 0 === d.length && 0 === N.length && 0 === S.length) ? null : (0, E.jsxs)("li", {
              children: [(0, E.jsxs)("div", {
                className: O.onboardingChangeLogItemTitle,
                children: [(0, E.jsx)(R, {
                  actionType: c.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: _
                  })
                })]
              }), (0, E.jsxs)("div", {
                className: O.onboardingChangeLogItemChanges,
                children: [o.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: o.join(", ")
                  })
                }), L.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: L.join(", ")
                  })
                }), d.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: d.join(", ")
                  })
                }), N.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: N.join(", ")
                  })
                }), S.map((t, _) => (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: s[t]
                  })
                }, _))]
              })]
            }, a)
          }, u = i().keyBy(null != a ? a : [], "id"), I = i().keyBy(null != _ ? _ : [], "id"), r = i().difference(Object.keys(I), Object.keys(u)).map(e => I[e]), d = i().difference(Object.keys(u), Object.keys(I)).map(e => u[e]), N = i().intersection(Object.keys(I), Object.keys(u));
          return (0, E.jsxs)("ul", {
            className: O.onboardingChangeLogContainer,
            children: [r.map(e => {
              let {
                role_ids: s,
                channel_ids: _,
                title: a,
                id: i
              } = e, A = (null != s ? s : []).map(n).filter(g.isNotNullish), u = (null != _ ? _ : []).map(T).filter(g.isNotNullish);
              return (0, E.jsxs)("li", {
                children: [(0, E.jsxs)("div", {
                  className: O.onboardingChangeLogItemTitle,
                  children: [(0, E.jsx)(R, {
                    actionType: c.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, E.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: a
                    })
                  })]
                }), (0, E.jsxs)("div", {
                  className: O.onboardingChangeLogItemChanges,
                  children: [A.length > 0 && (0, E.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: A.join(", ")
                    })
                  }), u.length > 0 && (0, E.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: u.join(", ")
                    })
                  })]
                })]
              }, i)
            }), d.map(e => (0, E.jsx)("li", {
              children: (0, E.jsxs)("div", {
                className: O.onboardingChangeLogItemTitle,
                children: [(0, E.jsx)(R, {
                  actionType: c.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), N.map(e => A(u[e], I[e]))]
          }, "options")
        }(a, t, s)), (t.action === c.AuditLogActions.HOME_SETTINGS_CREATE || t.action === c.AuditLogActions.HOME_SETTINGS_UPDATE) && (A = function(e, t) {
          let {
            oldValue: s,
            newValue: _,
            key: a
          } = e, {
            targetType: n,
            action: T
          } = t;
          switch (a) {
            case c.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var s, _, a, n, T;
                let i = d.default.getUser(null == t ? void 0 : null === (s = t.author_ids) || void 0 === s ? void 0 : s[0]),
                  A = d.default.getUser(null === (_ = e.author_ids) || void 0 === _ ? void 0 : _[0]),
                  u = (null == i ? void 0 : i.id) !== (null == A ? void 0 : A.id) ? (0, E.jsx)("li", {
                    children: (0, E.jsx)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (a = null == i ? void 0 : i.username) && void 0 !== a ? a : G.default.Messages.NONE,
                          newUser: null !== (n = null == A ? void 0 : A.username) && void 0 !== n ? n : G.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  I = (null == t ? void 0 : t.message) !== e.message ? (0, E.jsx)("li", {
                    children: (0, E.jsx)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (T = null == t ? void 0 : t.message) && void 0 !== T ? T : G.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, E.jsxs)("ul", {
                  children: [u, I]
                })
              })(_, s);
            case c.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let s = e.map(e => e.channel_id),
                  _ = t.map(e => e.channel_id),
                  a = i().difference(_, s),
                  A = i().difference(s, _),
                  u = t.filter(e => a.includes(e.channel_id)),
                  I = e.filter(e => A.includes(e.channel_id));
                return (0, E.jsxs)("ul", {
                  children: [u.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: c.AuditLogActionTypes.CREATE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), I.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: c.AuditLogActionTypes.DELETE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != s ? s : [], _);
            case c.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let s = e.map(e => e.channel_id),
                  _ = t.map(e => e.channel_id),
                  a = i().difference(_, s),
                  A = i().difference(s, _),
                  u = t.filter(e => a.includes(e.channel_id)),
                  I = e.filter(e => A.includes(e.channel_id));
                return (0, E.jsxs)("ul", {
                  children: [u.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: c.AuditLogActionTypes.CREATE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), I.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: O.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: c.AuditLogActionTypes.DELETE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: G.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != s ? s : [], _);
            default:
              return null
          }
        }(a, t));
        let I = e[a.key];
        return C(t, a) ? null : ("function" == typeof I && (I = I(a)), Array.isArray(I)) ? I.map(e => (_++, M({
          changeItem: e,
          subChanges: A,
          changeNumber: _,
          log: t,
          oldValue: n,
          newValue: T,
          change: a
        }))) : (_++, M({
          changeItem: I,
          subChanges: A,
          changeNumber: _,
          log: t,
          oldValue: n,
          newValue: T,
          change: a
        }))
      })).filter(g.isNotNullish);
    return (0, E.jsx)(l.Clickable, {
      onClick: a,
      className: n()(O.changeDetails, T),
      children: A
    })
  }, [t, s, a, T]), I = _.useMemo(() => {
    switch (t.targetType) {
      case c.AuditLogTargetTypes.GUILD:
        return A(N.GuildChangeStrings());
      case c.AuditLogTargetTypes.CHANNEL:
      case c.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return A(N.ChannelChangeStrings());
      case c.AuditLogTargetTypes.USER:
        return A(N.UserChangeStrings());
      case c.AuditLogTargetTypes.ROLE:
        return A(N.RoleChangeStrings());
      case c.AuditLogTargetTypes.ONBOARDING_PROMPT:
        return A(N.OnboardingPromptChangeStrings());
      case c.AuditLogTargetTypes.GUILD_ONBOARDING:
        return A(N.OnboardingChangeStrings());
      case c.AuditLogTargetTypes.HOME_SETTINGS:
        return A(N.HomeSettingsChangeStrings());
      case c.AuditLogTargetTypes.INVITE:
        return A(N.InviteChangeStrings());
      case c.AuditLogTargetTypes.WEBHOOK:
        return A(N.WebhookChangeStrings());
      case c.AuditLogTargetTypes.EMOJI:
        return A(N.EmojiChangeStrings());
      case c.AuditLogTargetTypes.STICKER:
        return A(N.StickerChangeStrings());
      case c.AuditLogTargetTypes.INTEGRATION:
        return A(N.IntegrationChangeStrings());
      case c.AuditLogTargetTypes.STAGE_INSTANCE:
        return A(N.StageInstanceChangeStrings());
      case c.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return A(N.GuildScheduledEventChangeStrings());
      case c.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return A(N.GuildScheduledEventExceptionChangeStrings());
      case c.AuditLogTargetTypes.THREAD:
        return A(N.ThreadChangeStrings());
      case c.AuditLogTargetTypes.APPLICATION_COMMAND:
        return A(N.CommandPermissionChangeStrings(t.changes));
      case c.AuditLogTargetTypes.AUTO_MODERATION_RULE:
        return A(N.AutoModerationRuleChangeStrings());
      case c.AuditLogTargetTypes.GUILD_SOUNDBOARD:
        return A(N.GuildSoundboardChangeStrings());
      case c.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
        return A(N.VoiceChannelStatusStrings())
    }
  }, [t.targetType, t.changes, A]);
  return (0, E.jsx)(E.Fragment, {
    children: I
  })
}