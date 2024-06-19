e.d(_, {
  mp: function() {
    return d
  },
  tP: function() {
    return Z
  },
  xO: function() {
    return C
  }
}), e(653041);
var T = e(735250),
  s = e(470079),
  I = e(120356),
  A = e.n(I),
  n = e(392711),
  N = e.n(n),
  t = e(913527),
  r = e.n(t),
  a = e(481060),
  L = e(596454),
  D = e(479099),
  S = e(592125),
  U = e(430824),
  l = e(594174),
  O = e(274730),
  G = e(934415),
  M = e(823379),
  R = e(624138),
  u = e(981631),
  i = e(689938),
  o = e(364467);

function C(E, _) {
  let e = O.vc[E.targetType];
  return null != e && !0 === e[_.key]
}
let c = {
  [u.vB8.CREATE]: o.typeCreate,
  [u.vB8.UPDATE]: o.typeUpdate,
  [u.vB8.DELETE]: o.typeDelete
};

function g(E) {
  let {
    changeItem: _,
    subChanges: e,
    changeNumber: s,
    log: I,
    oldValue: A,
    newValue: n,
    change: N
  } = E, t = null;
  if ("string" == typeof _ && (t = _), null != _ && "object" == typeof _) {
    if (null == _.format) {
      let E = _[N.newValue];
      null == E && null != _[O.Et] ? _ = _[O.Et] : null != E && (_ = E)
    }
    if (null != _ && null != _.format) {
      var r, S;
      t = _.format({
        user: I.user,
        target: I.target,
        oldValue: A,
        newValue: n,
        count: Array.isArray(n) ? n.length : null,
        subtarget: null !== (S = null !== (r = I.options.subtarget) && void 0 !== r ? r : N.subtarget) && void 0 !== S ? S : null,
        newColorHook: (E, _) => (0, T.jsx)("div", {
          className: o.colorHook,
          style: {
            backgroundColor: N.newValue
          }
        }, _),
        oldColorHook: (E, _) => (0, T.jsx)("div", {
          className: o.colorHook,
          style: {
            backgroundColor: N.oldValue
          }
        }, _),
        oldTagHook: (E, _) => (0, T.jsx)(D.Z, {
          tag: A,
          size: D.Z.Sizes.SMALL
        }, _),
        newTagHook: (E, _) => (0, T.jsx)(D.Z, {
          tag: n,
          size: D.Z.Sizes.SMALL
        }, _),
        oldEmojiHook: (E, _) => (0, T.jsx)(L.Z, {
          emojiId: A
        }, _),
        newEmojiHook: (E, _) => (0, T.jsx)(L.Z, {
          emojiId: n
        }, _)
      })
    } else t = _
  }
  return null == t ? (console.warn("No change string for", N), null) : "" === t ? null : (0, T.jsxs)("div", {
    className: o.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, T.jsxs)(a.Text, {
      className: o.prefix,
      variant: "code",
      color: function(E) {
        switch (E) {
          case u.vB8.CREATE:
            return "text-positive";
          case u.vB8.DELETE:
            return "status-danger";
          default:
            return "text-warning"
        }
      }(I.actionType),
      children: [s < 10 ? "0".concat(s) : s, (0, T.jsx)("span", {
        className: o.dash,
        children: "—"
      })]
    }), (0, T.jsxs)("div", {
      className: o.change,
      children: [(0, T.jsx)("div", {
        className: o.changeStr,
        children: t
      }), null != e ? (0, T.jsx)("div", {
        children: e
      }) : null]
    })]
  }, s)
}
class d extends s.PureComponent {
  render() {
    var E, _;
    let {
      actionType: e,
      targetType: s,
      action: I,
      themeOverride: n
    } = this.props, N = null != n ? o["themeOverride".concat((0, R.De)(n))] : null;
    let t = A()(o.icon, c[e], (E = s, (_ = I) === u.rsA.MESSAGE_DELETE ? o.targetMessage : _ === u.rsA.AUTO_MODERATION_BLOCK_MESSAGE || _ === u.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || _ === u.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || _ === u.rsA.AUTO_MODERATION_QUARANTINE_USER ? o.autoModerationBlockMessage : ({
      [u.KFR.ALL]: o.targetAll,
      [u.KFR.GUILD]: o.targetGuild,
      [u.KFR.CHANNEL]: o.targetChannel,
      [u.KFR.CHANNEL_OVERWRITE]: o.targetChannel,
      [u.KFR.USER]: o.targetMember,
      [u.KFR.ROLE]: o.targetRole,
      [u.KFR.ONBOARDING_PROMPT]: o.targetOnboarding,
      [u.KFR.GUILD_ONBOARDING]: o.targetOnboarding,
      [u.KFR.HOME_SETTINGS]: o.targetOnboarding,
      [u.KFR.INTEGRATION]: o.targetIntegration,
      [u.KFR.INVITE]: o.targetInvite,
      [u.KFR.WEBHOOK]: o.targetWebhook,
      [u.KFR.EMOJI]: o.targetEmoji,
      [u.KFR.STICKER]: o.targetSticker,
      [u.KFR.STAGE_INSTANCE]: o.targetStageInstance,
      [u.KFR.GUILD_SCHEDULED_EVENT]: o.targetGuildScheduledEvent,
      [u.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: o.targetGuildScheduledEvent,
      [u.KFR.THREAD]: o.thread,
      [u.KFR.APPLICATION_COMMAND]: o.applicationCommand,
      [u.KFR.AUTO_MODERATION_RULE]: o.autoModerationRule,
      [u.KFR.GUILD_HOME]: o.targetGuildHome,
      [u.KFR.GUILD_SOUNDBOARD]: o.targetGuildSoundboard,
      [u.KFR.VOICE_CHANNEL_STATUS]: o.targetChannel
    })[E]), N);
    return (0, T.jsx)("div", {
      className: t
    })
  }
}

function Z(E) {
  let {
    log: _,
    guild: e,
    onContentClick: I,
    className: n
  } = E, t = s.useCallback(E => {
    if (null == _.changes) return null;
    let s = 0,
      t = N().flatten(_.changes.map(I => {
        let {
          oldValue: A,
          newValue: n
        } = I, t = null;
        if (_.action === u.rsA.MEMBER_ROLE_UPDATE ? t = function(E) {
            let {
              newValue: _
            } = E;
            return Array.isArray(_) ? _.map(E => (0, T.jsx)("div", {
              className: o.subListItem,
              children: E.name
            }, E.id)) : null
          }(I) : _.targetType === u.KFR.ROLE || _.action === u.rsA.CHANNEL_OVERWRITE_CREATE || _.action === u.rsA.CHANNEL_OVERWRITE_UPDATE ? t = function(E, _) {
            let {
              newValue: e
            } = E;
            return Array.isArray(e) ? e.map((E, e) => (0, T.jsx)("div", {
              className: o.subListItem,
              children: O.hQ(E, _)
            }, e)) : null
          }(I, _) : (_.action === u.rsA.CHANNEL_UPDATE || _.action === u.rsA.THREAD_UPDATE) && I.key === u.zUn.FLAGS && (t = function(E) {
            let {
              newValue: _,
              oldValue: e
            } = E, s = [];
            return (Array.isArray(e) && (s = s.concat(e.map(E => (0, T.jsx)("div", {
              className: o.subListItem,
              children: O.cT(E)
            }, E)))), Array.isArray(_) && (s = s.concat(_.map(E => (0, T.jsx)("div", {
              className: o.subListItem,
              children: O.em(E)
            }, E)))), s.length > 0) ? s : null
          }(I)), (_.action === u.rsA.CHANNEL_UPDATE || _.action === u.rsA.CHANNEL_CREATE) && I.key === u.zUn.TYPE && (null != A && (A = (0, G.a5)({
            type: A
          })), null != n && (n = (0, G.a5)({
            type: n
          }))), _.action === u.rsA.MEMBER_UPDATE && I.key === u.zUn.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (n = r()(n)) || !n.isValid()) return null;
          n = n.calendar()
        }(_.action === u.rsA.ONBOARDING_PROMPT_UPDATE || _.action === u.rsA.ONBOARDING_PROMPT_CREATE) && I.key === u.zUn.OPTIONS && (t = function(E, _, e) {
          let {
            newValue: s,
            oldValue: I
          } = E, A = E => {
            var _;
            let T = null != e ? null === (_ = U.Z.getRole(e.id, E)) || void 0 === _ ? void 0 : _.name : void 0;
            return null == T ? null : "@".concat(T)
          }, n = E => {
            var _;
            let e = null === (_ = S.Z.getChannel(E)) || void 0 === _ ? void 0 : _.name;
            return null == e ? null : "#".concat(e)
          }, t = (E, e) => {
            let {
              title: s,
              id: I
            } = e, t = E.role_ids.map(A).filter(M.lm), r = E.channel_ids.map(n).filter(M.lm), L = e.role_ids.map(A).filter(M.lm), D = e.channel_ids.map(n).filter(M.lm), S = N().difference(L, t), U = N().difference(t, L), l = N().difference(D, r), O = N().difference(r, D), G = [];
            return (!N().isEqual(E.title, e.title) && G.push("title"), !N().isEqual(E.description, e.description) && G.push("description"), 0 === S.length && 0 === U.length && 0 === l.length && 0 === O.length && 0 === G.length) ? null : (0, T.jsxs)("li", {
              children: [(0, T.jsxs)("div", {
                className: o.onboardingChangeLogItemTitle,
                children: [(0, T.jsx)(d, {
                  actionType: u.vB8.UPDATE,
                  targetType: _.targetType,
                  action: _.action
                }), (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: s
                  })
                })]
              }), (0, T.jsxs)("div", {
                className: o.onboardingChangeLogItemChanges,
                children: [S.length > 0 && (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: S.join(", ")
                  })
                }), U.length > 0 && (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: U.join(", ")
                  })
                }), l.length > 0 && (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: l.join(", ")
                  })
                }), O.length > 0 && (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: O.join(", ")
                  })
                }), G.map((_, s) => (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: _,
                    oldValue: E[_],
                    newValue: e[_]
                  })
                }, s))]
              })]
            }, I)
          }, r = N().keyBy(null != I ? I : [], "id"), L = N().keyBy(null != s ? s : [], "id"), D = N().difference(Object.keys(L), Object.keys(r)).map(E => L[E]), l = N().difference(Object.keys(r), Object.keys(L)).map(E => r[E]), O = N().intersection(Object.keys(L), Object.keys(r));
          return (0, T.jsxs)("ul", {
            className: o.onboardingChangeLogContainer,
            children: [D.map(E => {
              let {
                role_ids: e,
                channel_ids: s,
                title: I,
                id: N
              } = E, t = (null != e ? e : []).map(A).filter(M.lm), r = (null != s ? s : []).map(n).filter(M.lm);
              return (0, T.jsxs)("li", {
                children: [(0, T.jsxs)("div", {
                  className: o.onboardingChangeLogItemTitle,
                  children: [(0, T.jsx)(d, {
                    actionType: u.vB8.CREATE,
                    targetType: _.targetType,
                    action: _.action
                  }), (0, T.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: I
                    })
                  })]
                }), (0, T.jsxs)("div", {
                  className: o.onboardingChangeLogItemChanges,
                  children: [t.length > 0 && (0, T.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: t.join(", ")
                    })
                  }), r.length > 0 && (0, T.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: r.join(", ")
                    })
                  })]
                })]
              }, N)
            }), l.map(E => (0, T.jsx)("li", {
              children: (0, T.jsxs)("div", {
                className: o.onboardingChangeLogItemTitle,
                children: [(0, T.jsx)(d, {
                  actionType: u.vB8.DELETE,
                  targetType: _.targetType,
                  action: _.action
                }), (0, T.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: E.title
                  })
                })]
              })
            }, E.id)), O.map(E => t(r[E], L[E]))]
          }, "options")
        }(I, _, e)), (_.action === u.rsA.HOME_SETTINGS_CREATE || _.action === u.rsA.HOME_SETTINGS_UPDATE) && (t = function(E, _) {
          let {
            oldValue: e,
            newValue: s,
            key: I
          } = E, {
            targetType: A,
            action: n
          } = _;
          switch (I) {
            case u.zUn.WELCOME_MESSAGE:
              return ((E, _) => {
                var e, s, I, A, n;
                let N = l.default.getUser(null == _ ? void 0 : null === (e = _.author_ids) || void 0 === e ? void 0 : e[0]),
                  t = l.default.getUser(null === (s = E.author_ids) || void 0 === s ? void 0 : s[0]),
                  r = (null == N ? void 0 : N.id) !== (null == t ? void 0 : t.id) ? (0, T.jsx)("li", {
                    children: (0, T.jsx)("div", {
                      className: o.onboardingChangeLogItemTitle,
                      children: (0, T.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (I = null == N ? void 0 : N.username) && void 0 !== I ? I : i.Z.Messages.NONE,
                          newUser: null !== (A = null == t ? void 0 : t.username) && void 0 !== A ? A : i.Z.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  L = (null == _ ? void 0 : _.message) !== E.message ? (0, T.jsx)("li", {
                    children: (0, T.jsx)("div", {
                      className: o.onboardingChangeLogItemTitle,
                      children: (0, T.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (n = null == _ ? void 0 : _.message) && void 0 !== n ? n : i.Z.Messages.NONE,
                          newMessage: E.message
                        })
                      })
                    })
                  }) : null;
                return (0, T.jsxs)("ul", {
                  children: [r, L]
                })
              })(s, e);
            case u.zUn.NEW_MEMBER_ACTIONS:
              return ((E, _) => {
                let e = E.map(E => E.channel_id),
                  s = _.map(E => E.channel_id),
                  I = N().difference(s, e),
                  t = N().difference(e, s),
                  r = _.filter(E => I.includes(E.channel_id)),
                  L = E.filter(E => t.includes(E.channel_id));
                return (0, T.jsxs)("ul", {
                  children: [r.map(E => (0, T.jsx)("li", {
                    children: (0, T.jsxs)("div", {
                      className: o.onboardingChangeLogItemTitle,
                      children: [(0, T.jsx)(d, {
                        actionType: u.vB8.CREATE,
                        targetType: A,
                        action: n
                      }), (0, T.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: E.title
                        })
                      })]
                    })
                  }, E.channel_id)), L.map(E => (0, T.jsx)("li", {
                    children: (0, T.jsxs)("div", {
                      className: o.onboardingChangeLogItemTitle,
                      children: [(0, T.jsx)(d, {
                        actionType: u.vB8.DELETE,
                        targetType: A,
                        action: n
                      }), (0, T.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: E.title
                        })
                      })]
                    })
                  }, E.channel_id))]
                })
              })(null != e ? e : [], s);
            case u.zUn.RESOURCE_CHANNELS:
              return ((E, _) => {
                let e = E.map(E => E.channel_id),
                  s = _.map(E => E.channel_id),
                  I = N().difference(s, e),
                  t = N().difference(e, s),
                  r = _.filter(E => I.includes(E.channel_id)),
                  L = E.filter(E => t.includes(E.channel_id));
                return (0, T.jsxs)("ul", {
                  children: [r.map(E => (0, T.jsx)("li", {
                    children: (0, T.jsxs)("div", {
                      className: o.onboardingChangeLogItemTitle,
                      children: [(0, T.jsx)(d, {
                        actionType: u.vB8.CREATE,
                        targetType: A,
                        action: n
                      }), (0, T.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: E.title
                        })
                      })]
                    })
                  }, E.channel_id)), L.map(E => (0, T.jsx)("li", {
                    children: (0, T.jsxs)("div", {
                      className: o.onboardingChangeLogItemTitle,
                      children: [(0, T.jsx)(d, {
                        actionType: u.vB8.DELETE,
                        targetType: A,
                        action: n
                      }), (0, T.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: i.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: E.title
                        })
                      })]
                    })
                  }, E.channel_id))]
                })
              })(null != e ? e : [], s);
            default:
              return null
          }
        }(I, _));
        let L = E[I.key];
        return C(_, I) ? null : ("function" == typeof L && (L = L(I)), Array.isArray(L)) ? L.map(E => (s++, g({
          changeItem: E,
          subChanges: t,
          changeNumber: s,
          log: _,
          oldValue: A,
          newValue: n,
          change: I
        }))) : (s++, g({
          changeItem: L,
          subChanges: t,
          changeNumber: s,
          log: _,
          oldValue: A,
          newValue: n,
          change: I
        }))
      })).filter(M.lm);
    return (0, T.jsx)(a.Clickable, {
      onClick: I,
      className: A()(o.changeDetails, n),
      children: t
    })
  }, [_, e, I, n]), L = s.useMemo(() => {
    switch (_.targetType) {
      case u.KFR.GUILD:
        return t(O.pY());
      case u.KFR.CHANNEL:
      case u.KFR.CHANNEL_OVERWRITE:
        return t(O.ML());
      case u.KFR.USER:
        return t(O.lU());
      case u.KFR.ROLE:
        return t(O.HE());
      case u.KFR.ONBOARDING_PROMPT:
        return t(O.oD());
      case u.KFR.GUILD_ONBOARDING:
        return t(O.EN());
      case u.KFR.HOME_SETTINGS:
        return t(O.hx());
      case u.KFR.INVITE:
        return t(O.HN());
      case u.KFR.WEBHOOK:
        return t(O.lR());
      case u.KFR.EMOJI:
        return t(O.N$());
      case u.KFR.STICKER:
        return t(O.Bq());
      case u.KFR.INTEGRATION:
        return t(O.K());
      case u.KFR.STAGE_INSTANCE:
        return t(O.C2());
      case u.KFR.GUILD_SCHEDULED_EVENT:
        return t(O.uB());
      case u.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return t(O.pi());
      case u.KFR.THREAD:
        return t(O.pA());
      case u.KFR.APPLICATION_COMMAND:
        return t(O.vm(_.changes));
      case u.KFR.AUTO_MODERATION_RULE:
        return t(O.rK());
      case u.KFR.GUILD_SOUNDBOARD:
        return t(O.C0());
      case u.KFR.VOICE_CHANNEL_STATUS:
        return t(O.F1())
    }
  }, [_.targetType, _.changes, t]);
  return (0, T.jsx)(T.Fragment, {
    children: L
  })
}