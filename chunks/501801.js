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
var s = E("735250"),
  _ = E("470079"),
  a = E("120356"),
  T = E.n(a),
  n = E("392711"),
  A = E.n(n),
  I = E("913527"),
  u = E.n(I),
  i = E("481060"),
  l = E("596454"),
  L = E("479099"),
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
    changeNumber: _,
    log: a,
    oldValue: T,
    newValue: n,
    change: A
  } = e, I = null;
  if ("string" == typeof t && (I = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[A.newValue];
      null == e && null != t[N.DEFAULT_FOR_STRINGS_KEY] ? t = t[N.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var u, o;
      I = t.format({
        user: a.user,
        target: a.target,
        oldValue: T,
        newValue: n,
        count: Array.isArray(n) ? n.length : null,
        subtarget: null !== (o = null !== (u = a.options.subtarget) && void 0 !== u ? u : A.subtarget) && void 0 !== o ? o : null,
        newColorHook: (e, t) => (0, s.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: A.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, s.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: A.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, s.jsx)(L.default, {
          tag: T,
          size: L.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, s.jsx)(L.default, {
          tag: n,
          size: L.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, s.jsx)(l.default, {
          emojiId: T
        }, t),
        newEmojiHook: (e, t) => (0, s.jsx)(l.default, {
          emojiId: n
        }, t)
      })
    } else I = t
  }
  return null == I ? (console.warn("No change string for", A), null) : "" === I ? null : (0, s.jsxs)("div", {
    className: c.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, s.jsxs)(i.Text, {
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
      children: [_ < 10 ? "0".concat(_) : _, (0, s.jsx)("span", {
        className: c.dash,
        children: "—"
      })]
    }), (0, s.jsxs)("div", {
      className: c.change,
      children: [(0, s.jsx)("div", {
        className: c.changeStr,
        children: I
      }), null != E ? (0, s.jsx)("div", {
        children: E
      }) : null]
    })]
  }, _)
}
class R extends _.PureComponent {
  render() {
    var e, t;
    let {
      actionType: E,
      targetType: _,
      action: a,
      themeOverride: n
    } = this.props, A = null != n ? c["themeOverride".concat((0, D.upperCaseFirstChar)(n))] : null;
    let I = T()(c.icon, C[E], (e = _, (t = a) === G.AuditLogActions.MESSAGE_DELETE ? c.targetMessage : t === G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === G.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? c.autoModerationBlockMessage : ({
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
    return (0, s.jsx)("div", {
      className: I
    })
  }
}

function f(e) {
  let {
    log: t,
    guild: E,
    onContentClick: a,
    className: n
  } = e, I = _.useCallback(e => {
    if (null == t.changes) return null;
    let _ = 0,
      I = A().flatten(t.changes.map(a => {
        let {
          oldValue: T,
          newValue: n
        } = a, I = null;
        if (t.action === G.AuditLogActions.MEMBER_ROLE_UPDATE ? I = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, s.jsx)("div", {
              className: c.subListItem,
              children: e.name
            }, e.id)) : null
          }(a) : t.targetType === G.AuditLogTargetTypes.ROLE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? I = function(e, t) {
            let {
              newValue: E
            } = e;
            return Array.isArray(E) ? E.map((e, E) => (0, s.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForPermission(e, t)
            }, E)) : null
          }(a, t) : (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.THREAD_UPDATE) && a.key === G.AuditLogChangeKeys.FLAGS && (I = function(e) {
            let {
              newValue: t,
              oldValue: E
            } = e, _ = [];
            return (Array.isArray(E) && (_ = _.concat(E.map(e => (0, s.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (_ = _.concat(t.map(e => (0, s.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForAddedChannelFlag(e)
            }, e)))), _.length > 0) ? _ : null
          }(a)), (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.CHANNEL_CREATE) && a.key === G.AuditLogChangeKeys.TYPE && (null != T && (T = (0, S.channelTypeString)({
            type: T
          })), null != n && (n = (0, S.channelTypeString)({
            type: n
          }))), t.action === G.AuditLogActions.MEMBER_UPDATE && a.key === G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (n = u()(n)) || !n.isValid()) return null;
          n = n.calendar()
        }(t.action === G.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === G.AuditLogActions.ONBOARDING_PROMPT_CREATE) && a.key === G.AuditLogChangeKeys.OPTIONS && (I = function(e, t, E) {
          let {
            newValue: _,
            oldValue: a
          } = e, T = e => {
            var t;
            let s = null != E ? null === (t = r.default.getRole(E.id, e)) || void 0 === t ? void 0 : t.name : void 0;
            return null == s ? null : "@".concat(s)
          }, n = e => {
            var t;
            let E = null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == E ? null : "#".concat(E)
          }, I = (e, E) => {
            let {
              title: _,
              id: a
            } = E, I = e.role_ids.map(T).filter(g.isNotNullish), u = e.channel_ids.map(n).filter(g.isNotNullish), l = E.role_ids.map(T).filter(g.isNotNullish), L = E.channel_ids.map(n).filter(g.isNotNullish), o = A().difference(l, I), r = A().difference(I, l), d = A().difference(L, u), N = A().difference(u, L), S = [];
            return (!A().isEqual(e.title, E.title) && S.push("title"), !A().isEqual(e.description, E.description) && S.push("description"), 0 === o.length && 0 === r.length && 0 === d.length && 0 === N.length && 0 === S.length) ? null : (0, s.jsxs)("li", {
              children: [(0, s.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, s.jsx)(R, {
                  actionType: G.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: _
                  })
                })]
              }), (0, s.jsxs)("div", {
                className: c.onboardingChangeLogItemChanges,
                children: [o.length > 0 && (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: o.join(", ")
                  })
                }), r.length > 0 && (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: r.join(", ")
                  })
                }), d.length > 0 && (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: d.join(", ")
                  })
                }), N.length > 0 && (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: N.join(", ")
                  })
                }), S.map((t, _) => (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: E[t]
                  })
                }, _))]
              })]
            }, a)
          }, u = A().keyBy(null != a ? a : [], "id"), l = A().keyBy(null != _ ? _ : [], "id"), L = A().difference(Object.keys(l), Object.keys(u)).map(e => l[e]), d = A().difference(Object.keys(u), Object.keys(l)).map(e => u[e]), N = A().intersection(Object.keys(l), Object.keys(u));
          return (0, s.jsxs)("ul", {
            className: c.onboardingChangeLogContainer,
            children: [L.map(e => {
              let {
                role_ids: E,
                channel_ids: _,
                title: a,
                id: A
              } = e, I = (null != E ? E : []).map(T).filter(g.isNotNullish), u = (null != _ ? _ : []).map(n).filter(g.isNotNullish);
              return (0, s.jsxs)("li", {
                children: [(0, s.jsxs)("div", {
                  className: c.onboardingChangeLogItemTitle,
                  children: [(0, s.jsx)(R, {
                    actionType: G.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, s.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: a
                    })
                  })]
                }), (0, s.jsxs)("div", {
                  className: c.onboardingChangeLogItemChanges,
                  children: [I.length > 0 && (0, s.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: I.join(", ")
                    })
                  }), u.length > 0 && (0, s.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: u.join(", ")
                    })
                  })]
                })]
              }, A)
            }), d.map(e => (0, s.jsx)("li", {
              children: (0, s.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, s.jsx)(R, {
                  actionType: G.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), N.map(e => I(u[e], l[e]))]
          }, "options")
        }(a, t, E)), (t.action === G.AuditLogActions.HOME_SETTINGS_CREATE || t.action === G.AuditLogActions.HOME_SETTINGS_UPDATE) && (I = function(e, t) {
          let {
            oldValue: E,
            newValue: _,
            key: a
          } = e, {
            targetType: T,
            action: n
          } = t;
          switch (a) {
            case G.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var E, _, a, T, n;
                let A = d.default.getUser(null == t ? void 0 : null === (E = t.author_ids) || void 0 === E ? void 0 : E[0]),
                  I = d.default.getUser(null === (_ = e.author_ids) || void 0 === _ ? void 0 : _[0]),
                  u = (null == A ? void 0 : A.id) !== (null == I ? void 0 : I.id) ? (0, s.jsx)("li", {
                    children: (0, s.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (a = null == A ? void 0 : A.username) && void 0 !== a ? a : O.default.Messages.NONE,
                          newUser: null !== (T = null == I ? void 0 : I.username) && void 0 !== T ? T : O.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  l = (null == t ? void 0 : t.message) !== e.message ? (0, s.jsx)("li", {
                    children: (0, s.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (n = null == t ? void 0 : t.message) && void 0 !== n ? n : O.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, s.jsxs)("ul", {
                  children: [u, l]
                })
              })(_, E);
            case G.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  _ = t.map(e => e.channel_id),
                  a = A().difference(_, E),
                  I = A().difference(E, _),
                  u = t.filter(e => a.includes(e.channel_id)),
                  l = e.filter(e => I.includes(e.channel_id));
                return (0, s.jsxs)("ul", {
                  children: [u.map(e => (0, s.jsx)("li", {
                    children: (0, s.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, s.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: T,
                        action: n
                      }), (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), l.map(e => (0, s.jsx)("li", {
                    children: (0, s.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, s.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: T,
                        action: n
                      }), (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], _);
            case G.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  _ = t.map(e => e.channel_id),
                  a = A().difference(_, E),
                  I = A().difference(E, _),
                  u = t.filter(e => a.includes(e.channel_id)),
                  l = e.filter(e => I.includes(e.channel_id));
                return (0, s.jsxs)("ul", {
                  children: [u.map(e => (0, s.jsx)("li", {
                    children: (0, s.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, s.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: T,
                        action: n
                      }), (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), l.map(e => (0, s.jsx)("li", {
                    children: (0, s.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, s.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: T,
                        action: n
                      }), (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], _);
            default:
              return null
          }
        }(a, t));
        let l = e[a.key];
        return U(t, a) ? null : ("function" == typeof l && (l = l(a)), Array.isArray(l)) ? l.map(e => (_++, M({
          changeItem: e,
          subChanges: I,
          changeNumber: _,
          log: t,
          oldValue: T,
          newValue: n,
          change: a
        }))) : (_++, M({
          changeItem: l,
          subChanges: I,
          changeNumber: _,
          log: t,
          oldValue: T,
          newValue: n,
          change: a
        }))
      })).filter(g.isNotNullish);
    return (0, s.jsx)(i.Clickable, {
      onClick: a,
      className: T()(c.changeDetails, n),
      children: I
    })
  }, [t, E, a, n]), l = _.useMemo(() => {
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
  return (0, s.jsx)(s.Fragment, {
    children: l
  })
}