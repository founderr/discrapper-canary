"use strict";
s.r(t), s.d(t, {
  AuditLogExpandedChangeDetails: function() {
    return R
  },
  AuditLogIcon: function() {
    return U
  },
  shouldNotRenderChangeDetail: function() {
    return O
  }
}), s("653041");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("392711"),
  _ = s.n(l),
  r = s("913527"),
  u = s.n(r),
  o = s("481060"),
  T = s("596454"),
  d = s("479099"),
  A = s("592125"),
  I = s("430824"),
  L = s("594174"),
  c = s("274730"),
  N = s("934415"),
  S = s("823379"),
  g = s("624138"),
  D = s("981631"),
  C = s("689938"),
  f = s("313633");

function O(e, t) {
  let s = c.NotRenderedChanges[e.targetType];
  return null != s && !0 === s[t.key]
}
let G = {
  [D.AuditLogActionTypes.CREATE]: f.typeCreate,
  [D.AuditLogActionTypes.UPDATE]: f.typeUpdate,
  [D.AuditLogActionTypes.DELETE]: f.typeDelete
};

function M(e) {
  let {
    changeItem: t,
    subChanges: s,
    changeNumber: n,
    log: i,
    oldValue: E,
    newValue: l,
    change: _
  } = e, r = null;
  if ("string" == typeof t && (r = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[_.newValue];
      null == e && null != t[c.DEFAULT_FOR_STRINGS_KEY] ? t = t[c.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var u, A;
      r = t.format({
        user: i.user,
        target: i.target,
        oldValue: E,
        newValue: l,
        count: Array.isArray(l) ? l.length : null,
        subtarget: null !== (A = null !== (u = i.options.subtarget) && void 0 !== u ? u : _.subtarget) && void 0 !== A ? A : null,
        newColorHook: (e, t) => (0, a.jsx)("div", {
          className: f.colorHook,
          style: {
            backgroundColor: _.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, a.jsx)("div", {
          className: f.colorHook,
          style: {
            backgroundColor: _.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, a.jsx)(d.default, {
          tag: E,
          size: d.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, a.jsx)(d.default, {
          tag: l,
          size: d.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, a.jsx)(T.default, {
          emojiId: E
        }, t),
        newEmojiHook: (e, t) => (0, a.jsx)(T.default, {
          emojiId: l
        }, t)
      })
    } else r = t
  }
  return null == r ? (console.warn("No change string for", _), null) : "" === r ? null : (0, a.jsxs)("div", {
    className: f.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, a.jsxs)(o.Text, {
      className: f.prefix,
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
      }(i.actionType),
      children: [n < 10 ? "0".concat(n) : n, (0, a.jsx)("span", {
        className: f.dash,
        children: "—"
      })]
    }), (0, a.jsxs)("div", {
      className: f.change,
      children: [(0, a.jsx)("div", {
        className: f.changeStr,
        children: r
      }), null != s ? (0, a.jsx)("div", {
        children: s
      }) : null]
    })]
  }, n)
}
class U extends n.PureComponent {
  render() {
    var e, t;
    let {
      actionType: s,
      targetType: n,
      action: i,
      themeOverride: l
    } = this.props, _ = null != l ? f["themeOverride".concat((0, g.upperCaseFirstChar)(l))] : null;
    let r = E()(f.icon, G[s], (e = n, (t = i) === D.AuditLogActions.MESSAGE_DELETE ? f.targetMessage : t === D.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === D.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === D.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === D.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? f.autoModerationBlockMessage : ({
      [D.AuditLogTargetTypes.ALL]: f.targetAll,
      [D.AuditLogTargetTypes.GUILD]: f.targetGuild,
      [D.AuditLogTargetTypes.CHANNEL]: f.targetChannel,
      [D.AuditLogTargetTypes.CHANNEL_OVERWRITE]: f.targetChannel,
      [D.AuditLogTargetTypes.USER]: f.targetMember,
      [D.AuditLogTargetTypes.ROLE]: f.targetRole,
      [D.AuditLogTargetTypes.ONBOARDING_PROMPT]: f.targetOnboarding,
      [D.AuditLogTargetTypes.GUILD_ONBOARDING]: f.targetOnboarding,
      [D.AuditLogTargetTypes.HOME_SETTINGS]: f.targetOnboarding,
      [D.AuditLogTargetTypes.INTEGRATION]: f.targetIntegration,
      [D.AuditLogTargetTypes.INVITE]: f.targetInvite,
      [D.AuditLogTargetTypes.WEBHOOK]: f.targetWebhook,
      [D.AuditLogTargetTypes.EMOJI]: f.targetEmoji,
      [D.AuditLogTargetTypes.STICKER]: f.targetSticker,
      [D.AuditLogTargetTypes.STAGE_INSTANCE]: f.targetStageInstance,
      [D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT]: f.targetGuildScheduledEvent,
      [D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION]: f.targetGuildScheduledEvent,
      [D.AuditLogTargetTypes.THREAD]: f.thread,
      [D.AuditLogTargetTypes.APPLICATION_COMMAND]: f.applicationCommand,
      [D.AuditLogTargetTypes.AUTO_MODERATION_RULE]: f.autoModerationRule,
      [D.AuditLogTargetTypes.GUILD_HOME]: f.targetGuildHome,
      [D.AuditLogTargetTypes.GUILD_SOUNDBOARD]: f.targetGuildSoundboard,
      [D.AuditLogTargetTypes.VOICE_CHANNEL_STATUS]: f.targetChannel
    })[e]), _);
    return (0, a.jsx)("div", {
      className: r
    })
  }
}

function R(e) {
  let {
    log: t,
    guild: s,
    onContentClick: i,
    className: l
  } = e, r = n.useCallback(e => {
    if (null == t.changes) return null;
    let n = 0,
      r = _().flatten(t.changes.map(i => {
        let {
          oldValue: E,
          newValue: l
        } = i, r = null;
        if (t.action === D.AuditLogActions.MEMBER_ROLE_UPDATE ? r = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, a.jsx)("div", {
              className: f.subListItem,
              children: e.name
            }, e.id)) : null
          }(i) : t.targetType === D.AuditLogTargetTypes.ROLE || t.action === D.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === D.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? r = function(e, t) {
            let {
              newValue: s
            } = e;
            return Array.isArray(s) ? s.map((e, s) => (0, a.jsx)("div", {
              className: f.subListItem,
              children: c.getStringForPermission(e, t)
            }, s)) : null
          }(i, t) : (t.action === D.AuditLogActions.CHANNEL_UPDATE || t.action === D.AuditLogActions.THREAD_UPDATE) && i.key === D.AuditLogChangeKeys.FLAGS && (r = function(e) {
            let {
              newValue: t,
              oldValue: s
            } = e, n = [];
            return (Array.isArray(s) && (n = n.concat(s.map(e => (0, a.jsx)("div", {
              className: f.subListItem,
              children: c.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (n = n.concat(t.map(e => (0, a.jsx)("div", {
              className: f.subListItem,
              children: c.getStringForAddedChannelFlag(e)
            }, e)))), n.length > 0) ? n : null
          }(i)), (t.action === D.AuditLogActions.CHANNEL_UPDATE || t.action === D.AuditLogActions.CHANNEL_CREATE) && i.key === D.AuditLogChangeKeys.TYPE && (null != E && (E = (0, N.channelTypeString)({
            type: E
          })), null != l && (l = (0, N.channelTypeString)({
            type: l
          }))), t.action === D.AuditLogActions.MEMBER_UPDATE && i.key === D.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (l = u()(l)) || !l.isValid()) return null;
          l = l.calendar()
        }(t.action === D.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === D.AuditLogActions.ONBOARDING_PROMPT_CREATE) && i.key === D.AuditLogChangeKeys.OPTIONS && (r = function(e, t, s) {
          let {
            newValue: n,
            oldValue: i
          } = e, E = e => {
            var t;
            let a = null != s ? null === (t = I.default.getRole(s.id, e)) || void 0 === t ? void 0 : t.name : void 0;
            return null == a ? null : "@".concat(a)
          }, l = e => {
            var t;
            let s = null === (t = A.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == s ? null : "#".concat(s)
          }, r = (e, s) => {
            let {
              title: n,
              id: i
            } = s, r = e.role_ids.map(E).filter(S.isNotNullish), u = e.channel_ids.map(l).filter(S.isNotNullish), T = s.role_ids.map(E).filter(S.isNotNullish), d = s.channel_ids.map(l).filter(S.isNotNullish), A = _().difference(T, r), I = _().difference(r, T), L = _().difference(d, u), c = _().difference(u, d), N = [];
            return (!_().isEqual(e.title, s.title) && N.push("title"), !_().isEqual(e.description, s.description) && N.push("description"), 0 === A.length && 0 === I.length && 0 === L.length && 0 === c.length && 0 === N.length) ? null : (0, a.jsxs)("li", {
              children: [(0, a.jsxs)("div", {
                className: f.onboardingChangeLogItemTitle,
                children: [(0, a.jsx)(U, {
                  actionType: D.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: n
                  })
                })]
              }), (0, a.jsxs)("div", {
                className: f.onboardingChangeLogItemChanges,
                children: [A.length > 0 && (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: A.join(", ")
                  })
                }), I.length > 0 && (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: I.join(", ")
                  })
                }), L.length > 0 && (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: L.join(", ")
                  })
                }), c.length > 0 && (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: c.join(", ")
                  })
                }), N.map((t, n) => (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: s[t]
                  })
                }, n))]
              })]
            }, i)
          }, u = _().keyBy(null != i ? i : [], "id"), T = _().keyBy(null != n ? n : [], "id"), d = _().difference(Object.keys(T), Object.keys(u)).map(e => T[e]), L = _().difference(Object.keys(u), Object.keys(T)).map(e => u[e]), c = _().intersection(Object.keys(T), Object.keys(u));
          return (0, a.jsxs)("ul", {
            className: f.onboardingChangeLogContainer,
            children: [d.map(e => {
              let {
                role_ids: s,
                channel_ids: n,
                title: i,
                id: _
              } = e, r = (null != s ? s : []).map(E).filter(S.isNotNullish), u = (null != n ? n : []).map(l).filter(S.isNotNullish);
              return (0, a.jsxs)("li", {
                children: [(0, a.jsxs)("div", {
                  className: f.onboardingChangeLogItemTitle,
                  children: [(0, a.jsx)(U, {
                    actionType: D.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: i
                    })
                  })]
                }), (0, a.jsxs)("div", {
                  className: f.onboardingChangeLogItemChanges,
                  children: [r.length > 0 && (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: r.join(", ")
                    })
                  }), u.length > 0 && (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: u.join(", ")
                    })
                  })]
                })]
              }, _)
            }), L.map(e => (0, a.jsx)("li", {
              children: (0, a.jsxs)("div", {
                className: f.onboardingChangeLogItemTitle,
                children: [(0, a.jsx)(U, {
                  actionType: D.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), c.map(e => r(u[e], T[e]))]
          }, "options")
        }(i, t, s)), (t.action === D.AuditLogActions.HOME_SETTINGS_CREATE || t.action === D.AuditLogActions.HOME_SETTINGS_UPDATE) && (r = function(e, t) {
          let {
            oldValue: s,
            newValue: n,
            key: i
          } = e, {
            targetType: E,
            action: l
          } = t;
          switch (i) {
            case D.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var s, n, i, E, l;
                let _ = L.default.getUser(null == t ? void 0 : null === (s = t.author_ids) || void 0 === s ? void 0 : s[0]),
                  r = L.default.getUser(null === (n = e.author_ids) || void 0 === n ? void 0 : n[0]),
                  u = (null == _ ? void 0 : _.id) !== (null == r ? void 0 : r.id) ? (0, a.jsx)("li", {
                    children: (0, a.jsx)("div", {
                      className: f.onboardingChangeLogItemTitle,
                      children: (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (i = null == _ ? void 0 : _.username) && void 0 !== i ? i : C.default.Messages.NONE,
                          newUser: null !== (E = null == r ? void 0 : r.username) && void 0 !== E ? E : C.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  T = (null == t ? void 0 : t.message) !== e.message ? (0, a.jsx)("li", {
                    children: (0, a.jsx)("div", {
                      className: f.onboardingChangeLogItemTitle,
                      children: (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (l = null == t ? void 0 : t.message) && void 0 !== l ? l : C.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, a.jsxs)("ul", {
                  children: [u, T]
                })
              })(n, s);
            case D.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let s = e.map(e => e.channel_id),
                  n = t.map(e => e.channel_id),
                  i = _().difference(n, s),
                  r = _().difference(s, n),
                  u = t.filter(e => i.includes(e.channel_id)),
                  T = e.filter(e => r.includes(e.channel_id));
                return (0, a.jsxs)("ul", {
                  children: [u.map(e => (0, a.jsx)("li", {
                    children: (0, a.jsxs)("div", {
                      className: f.onboardingChangeLogItemTitle,
                      children: [(0, a.jsx)(U, {
                        actionType: D.AuditLogActionTypes.CREATE,
                        targetType: E,
                        action: l
                      }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), T.map(e => (0, a.jsx)("li", {
                    children: (0, a.jsxs)("div", {
                      className: f.onboardingChangeLogItemTitle,
                      children: [(0, a.jsx)(U, {
                        actionType: D.AuditLogActionTypes.DELETE,
                        targetType: E,
                        action: l
                      }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != s ? s : [], n);
            case D.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let s = e.map(e => e.channel_id),
                  n = t.map(e => e.channel_id),
                  i = _().difference(n, s),
                  r = _().difference(s, n),
                  u = t.filter(e => i.includes(e.channel_id)),
                  T = e.filter(e => r.includes(e.channel_id));
                return (0, a.jsxs)("ul", {
                  children: [u.map(e => (0, a.jsx)("li", {
                    children: (0, a.jsxs)("div", {
                      className: f.onboardingChangeLogItemTitle,
                      children: [(0, a.jsx)(U, {
                        actionType: D.AuditLogActionTypes.CREATE,
                        targetType: E,
                        action: l
                      }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), T.map(e => (0, a.jsx)("li", {
                    children: (0, a.jsxs)("div", {
                      className: f.onboardingChangeLogItemTitle,
                      children: [(0, a.jsx)(U, {
                        actionType: D.AuditLogActionTypes.DELETE,
                        targetType: E,
                        action: l
                      }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != s ? s : [], n);
            default:
              return null
          }
        }(i, t));
        let T = e[i.key];
        return O(t, i) ? null : ("function" == typeof T && (T = T(i)), Array.isArray(T)) ? T.map(e => (n++, M({
          changeItem: e,
          subChanges: r,
          changeNumber: n,
          log: t,
          oldValue: E,
          newValue: l,
          change: i
        }))) : (n++, M({
          changeItem: T,
          subChanges: r,
          changeNumber: n,
          log: t,
          oldValue: E,
          newValue: l,
          change: i
        }))
      })).filter(S.isNotNullish);
    return (0, a.jsx)(o.Clickable, {
      onClick: i,
      className: E()(f.changeDetails, l),
      children: r
    })
  }, [t, s, i, l]), T = n.useMemo(() => {
    switch (t.targetType) {
      case D.AuditLogTargetTypes.GUILD:
        return r(c.GuildChangeStrings());
      case D.AuditLogTargetTypes.CHANNEL:
      case D.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return r(c.ChannelChangeStrings());
      case D.AuditLogTargetTypes.USER:
        return r(c.UserChangeStrings());
      case D.AuditLogTargetTypes.ROLE:
        return r(c.RoleChangeStrings());
      case D.AuditLogTargetTypes.ONBOARDING_PROMPT:
        return r(c.OnboardingPromptChangeStrings());
      case D.AuditLogTargetTypes.GUILD_ONBOARDING:
        return r(c.OnboardingChangeStrings());
      case D.AuditLogTargetTypes.HOME_SETTINGS:
        return r(c.HomeSettingsChangeStrings());
      case D.AuditLogTargetTypes.INVITE:
        return r(c.InviteChangeStrings());
      case D.AuditLogTargetTypes.WEBHOOK:
        return r(c.WebhookChangeStrings());
      case D.AuditLogTargetTypes.EMOJI:
        return r(c.EmojiChangeStrings());
      case D.AuditLogTargetTypes.STICKER:
        return r(c.StickerChangeStrings());
      case D.AuditLogTargetTypes.INTEGRATION:
        return r(c.IntegrationChangeStrings());
      case D.AuditLogTargetTypes.STAGE_INSTANCE:
        return r(c.StageInstanceChangeStrings());
      case D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return r(c.GuildScheduledEventChangeStrings());
      case D.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return r(c.GuildScheduledEventExceptionChangeStrings());
      case D.AuditLogTargetTypes.THREAD:
        return r(c.ThreadChangeStrings());
      case D.AuditLogTargetTypes.APPLICATION_COMMAND:
        return r(c.CommandPermissionChangeStrings(t.changes));
      case D.AuditLogTargetTypes.AUTO_MODERATION_RULE:
        return r(c.AutoModerationRuleChangeStrings());
      case D.AuditLogTargetTypes.GUILD_SOUNDBOARD:
        return r(c.GuildSoundboardChangeStrings());
      case D.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
        return r(c.VoiceChannelStatusStrings())
    }
  }, [t.targetType, t.changes, r]);
  return (0, a.jsx)(a.Fragment, {
    children: T
  })
}