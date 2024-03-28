"use strict";
s.r(t), s.d(t, {
  AuditLogExpandedChangeDetails: function() {
    return f
  },
  AuditLogIcon: function() {
    return R
  },
  shouldNotRenderChangeDetail: function() {
    return U
  }
}), s("653041");
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("392711"),
  A = s.n(T),
  u = s("913527"),
  i = s.n(u),
  l = s("481060"),
  I = s("596454"),
  L = s("479099"),
  o = s("592125"),
  r = s("430824"),
  d = s("594174"),
  N = s("274730"),
  S = s("934415"),
  g = s("823379"),
  D = s("624138"),
  G = s("981631"),
  O = s("689938"),
  c = s("445385");

function U(e, t) {
  let s = N.NotRenderedChanges[e.targetType];
  return null != s && !0 === s[t.key]
}
let C = {
  [G.AuditLogActionTypes.CREATE]: c.typeCreate,
  [G.AuditLogActionTypes.UPDATE]: c.typeUpdate,
  [G.AuditLogActionTypes.DELETE]: c.typeDelete
};

function M(e) {
  let {
    changeItem: t,
    subChanges: s,
    changeNumber: _,
    log: a,
    oldValue: n,
    newValue: T,
    change: A
  } = e, u = null;
  if ("string" == typeof t && (u = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[A.newValue];
      null == e && null != t[N.DEFAULT_FOR_STRINGS_KEY] ? t = t[N.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var i, o;
      u = t.format({
        user: a.user,
        target: a.target,
        oldValue: n,
        newValue: T,
        count: Array.isArray(T) ? T.length : null,
        subtarget: null !== (o = null !== (i = a.options.subtarget) && void 0 !== i ? i : A.subtarget) && void 0 !== o ? o : null,
        newColorHook: (e, t) => (0, E.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: A.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, E.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: A.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, E.jsx)(L.default, {
          tag: n,
          size: L.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, E.jsx)(L.default, {
          tag: T,
          size: L.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, E.jsx)(I.default, {
          emojiId: n
        }, t),
        newEmojiHook: (e, t) => (0, E.jsx)(I.default, {
          emojiId: T
        }, t)
      })
    } else u = t
  }
  return null == u ? (console.warn("No change string for", A), null) : "" === u ? null : (0, E.jsxs)("div", {
    className: c.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, E.jsxs)(l.Text, {
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
      }(a.actionType),
      children: [_ < 10 ? "0".concat(_) : _, (0, E.jsx)("span", {
        className: c.dash,
        children: "—"
      })]
    }), (0, E.jsxs)("div", {
      className: c.change,
      children: [(0, E.jsx)("div", {
        className: c.changeStr,
        children: u
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
    } = this.props, A = null != T ? c["themeOverride".concat((0, D.upperCaseFirstChar)(T))] : null;
    let u = n()(c.icon, C[s], (e = _, (t = a) === G.AuditLogActions.MESSAGE_DELETE ? c.targetMessage : t === G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === G.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? c.autoModerationBlockMessage : ({
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
    })[e]), A);
    return (0, E.jsx)("div", {
      className: u
    })
  }
}

function f(e) {
  let {
    log: t,
    guild: s,
    onContentClick: a,
    className: T
  } = e, u = _.useCallback(e => {
    if (null == t.changes) return null;
    let _ = 0,
      u = A().flatten(t.changes.map(a => {
        let {
          oldValue: n,
          newValue: T
        } = a, u = null;
        if (t.action === G.AuditLogActions.MEMBER_ROLE_UPDATE ? u = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, E.jsx)("div", {
              className: c.subListItem,
              children: e.name
            }, e.id)) : null
          }(a) : t.targetType === G.AuditLogTargetTypes.ROLE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? u = function(e, t) {
            let {
              newValue: s
            } = e;
            return Array.isArray(s) ? s.map((e, s) => (0, E.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForPermission(e, t)
            }, s)) : null
          }(a, t) : (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.THREAD_UPDATE) && a.key === G.AuditLogChangeKeys.FLAGS && (u = function(e) {
            let {
              newValue: t,
              oldValue: s
            } = e, _ = [];
            return (Array.isArray(s) && (_ = _.concat(s.map(e => (0, E.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (_ = _.concat(t.map(e => (0, E.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForAddedChannelFlag(e)
            }, e)))), _.length > 0) ? _ : null
          }(a)), (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.CHANNEL_CREATE) && a.key === G.AuditLogChangeKeys.TYPE && (null != n && (n = (0, S.channelTypeString)({
            type: n
          })), null != T && (T = (0, S.channelTypeString)({
            type: T
          }))), t.action === G.AuditLogActions.MEMBER_UPDATE && a.key === G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (T = i()(T)) || !T.isValid()) return null;
          T = T.calendar()
        }(t.action === G.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === G.AuditLogActions.ONBOARDING_PROMPT_CREATE) && a.key === G.AuditLogChangeKeys.OPTIONS && (u = function(e, t, s) {
          let {
            newValue: _,
            oldValue: a
          } = e, n = e => {
            var t;
            let E = null != s ? null === (t = r.default.getRole(s.id, e)) || void 0 === t ? void 0 : t.name : void 0;
            return null == E ? null : "@".concat(E)
          }, T = e => {
            var t;
            let s = null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == s ? null : "#".concat(s)
          }, u = (e, s) => {
            let {
              title: _,
              id: a
            } = s, u = e.role_ids.map(n).filter(g.isNotNullish), i = e.channel_ids.map(T).filter(g.isNotNullish), I = s.role_ids.map(n).filter(g.isNotNullish), L = s.channel_ids.map(T).filter(g.isNotNullish), o = A().difference(I, u), r = A().difference(u, I), d = A().difference(L, i), N = A().difference(i, L), S = [];
            return (!A().isEqual(e.title, s.title) && S.push("title"), !A().isEqual(e.description, s.description) && S.push("description"), 0 === o.length && 0 === r.length && 0 === d.length && 0 === N.length && 0 === S.length) ? null : (0, E.jsxs)("li", {
              children: [(0, E.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, E.jsx)(R, {
                  actionType: G.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: _
                  })
                })]
              }), (0, E.jsxs)("div", {
                className: c.onboardingChangeLogItemChanges,
                children: [o.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: o.join(", ")
                  })
                }), r.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: r.join(", ")
                  })
                }), d.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: d.join(", ")
                  })
                }), N.length > 0 && (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: N.join(", ")
                  })
                }), S.map((t, _) => (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: s[t]
                  })
                }, _))]
              })]
            }, a)
          }, i = A().keyBy(null != a ? a : [], "id"), I = A().keyBy(null != _ ? _ : [], "id"), L = A().difference(Object.keys(I), Object.keys(i)).map(e => I[e]), d = A().difference(Object.keys(i), Object.keys(I)).map(e => i[e]), N = A().intersection(Object.keys(I), Object.keys(i));
          return (0, E.jsxs)("ul", {
            className: c.onboardingChangeLogContainer,
            children: [L.map(e => {
              let {
                role_ids: s,
                channel_ids: _,
                title: a,
                id: A
              } = e, u = (null != s ? s : []).map(n).filter(g.isNotNullish), i = (null != _ ? _ : []).map(T).filter(g.isNotNullish);
              return (0, E.jsxs)("li", {
                children: [(0, E.jsxs)("div", {
                  className: c.onboardingChangeLogItemTitle,
                  children: [(0, E.jsx)(R, {
                    actionType: G.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, E.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: a
                    })
                  })]
                }), (0, E.jsxs)("div", {
                  className: c.onboardingChangeLogItemChanges,
                  children: [u.length > 0 && (0, E.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: u.join(", ")
                    })
                  }), i.length > 0 && (0, E.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: i.join(", ")
                    })
                  })]
                })]
              }, A)
            }), d.map(e => (0, E.jsx)("li", {
              children: (0, E.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, E.jsx)(R, {
                  actionType: G.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, E.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), N.map(e => u(i[e], I[e]))]
          }, "options")
        }(a, t, s)), (t.action === G.AuditLogActions.HOME_SETTINGS_CREATE || t.action === G.AuditLogActions.HOME_SETTINGS_UPDATE) && (u = function(e, t) {
          let {
            oldValue: s,
            newValue: _,
            key: a
          } = e, {
            targetType: n,
            action: T
          } = t;
          switch (a) {
            case G.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var s, _, a, n, T;
                let A = d.default.getUser(null == t ? void 0 : null === (s = t.author_ids) || void 0 === s ? void 0 : s[0]),
                  u = d.default.getUser(null === (_ = e.author_ids) || void 0 === _ ? void 0 : _[0]),
                  i = (null == A ? void 0 : A.id) !== (null == u ? void 0 : u.id) ? (0, E.jsx)("li", {
                    children: (0, E.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (a = null == A ? void 0 : A.username) && void 0 !== a ? a : O.default.Messages.NONE,
                          newUser: null !== (n = null == u ? void 0 : u.username) && void 0 !== n ? n : O.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  I = (null == t ? void 0 : t.message) !== e.message ? (0, E.jsx)("li", {
                    children: (0, E.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (T = null == t ? void 0 : t.message) && void 0 !== T ? T : O.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, E.jsxs)("ul", {
                  children: [i, I]
                })
              })(_, s);
            case G.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let s = e.map(e => e.channel_id),
                  _ = t.map(e => e.channel_id),
                  a = A().difference(_, s),
                  u = A().difference(s, _),
                  i = t.filter(e => a.includes(e.channel_id)),
                  I = e.filter(e => u.includes(e.channel_id));
                return (0, E.jsxs)("ul", {
                  children: [i.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), I.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != s ? s : [], _);
            case G.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let s = e.map(e => e.channel_id),
                  _ = t.map(e => e.channel_id),
                  a = A().difference(_, s),
                  u = A().difference(s, _),
                  i = t.filter(e => a.includes(e.channel_id)),
                  I = e.filter(e => u.includes(e.channel_id));
                return (0, E.jsxs)("ul", {
                  children: [i.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), I.map(e => (0, E.jsx)("li", {
                    children: (0, E.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, E.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: n,
                        action: T
                      }), (0, E.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
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
        return U(t, a) ? null : ("function" == typeof I && (I = I(a)), Array.isArray(I)) ? I.map(e => (_++, M({
          changeItem: e,
          subChanges: u,
          changeNumber: _,
          log: t,
          oldValue: n,
          newValue: T,
          change: a
        }))) : (_++, M({
          changeItem: I,
          subChanges: u,
          changeNumber: _,
          log: t,
          oldValue: n,
          newValue: T,
          change: a
        }))
      })).filter(g.isNotNullish);
    return (0, E.jsx)(l.Clickable, {
      onClick: a,
      className: n()(c.changeDetails, T),
      children: u
    })
  }, [t, s, a, T]), I = _.useMemo(() => {
    switch (t.targetType) {
      case G.AuditLogTargetTypes.GUILD:
        return u(N.GuildChangeStrings());
      case G.AuditLogTargetTypes.CHANNEL:
      case G.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return u(N.ChannelChangeStrings());
      case G.AuditLogTargetTypes.USER:
        return u(N.UserChangeStrings());
      case G.AuditLogTargetTypes.ROLE:
        return u(N.RoleChangeStrings());
      case G.AuditLogTargetTypes.ONBOARDING_PROMPT:
        return u(N.OnboardingPromptChangeStrings());
      case G.AuditLogTargetTypes.GUILD_ONBOARDING:
        return u(N.OnboardingChangeStrings());
      case G.AuditLogTargetTypes.HOME_SETTINGS:
        return u(N.HomeSettingsChangeStrings());
      case G.AuditLogTargetTypes.INVITE:
        return u(N.InviteChangeStrings());
      case G.AuditLogTargetTypes.WEBHOOK:
        return u(N.WebhookChangeStrings());
      case G.AuditLogTargetTypes.EMOJI:
        return u(N.EmojiChangeStrings());
      case G.AuditLogTargetTypes.STICKER:
        return u(N.StickerChangeStrings());
      case G.AuditLogTargetTypes.INTEGRATION:
        return u(N.IntegrationChangeStrings());
      case G.AuditLogTargetTypes.STAGE_INSTANCE:
        return u(N.StageInstanceChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return u(N.GuildScheduledEventChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return u(N.GuildScheduledEventExceptionChangeStrings());
      case G.AuditLogTargetTypes.THREAD:
        return u(N.ThreadChangeStrings());
      case G.AuditLogTargetTypes.APPLICATION_COMMAND:
        return u(N.CommandPermissionChangeStrings(t.changes));
      case G.AuditLogTargetTypes.AUTO_MODERATION_RULE:
        return u(N.AutoModerationRuleChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SOUNDBOARD:
        return u(N.GuildSoundboardChangeStrings());
      case G.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
        return u(N.VoiceChannelStatusStrings())
    }
  }, [t.targetType, t.changes, u]);
  return (0, E.jsx)(E.Fragment, {
    children: I
  })
}