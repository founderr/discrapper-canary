E.d(_, {
    mp: function () {
        return p;
    },
    tP: function () {
        return h;
    },
    xO: function () {
        return M;
    }
}),
    E(653041);
var s = E(735250),
    n = E(470079),
    t = E(120356),
    r = E.n(t),
    T = E(392711),
    a = E.n(T),
    I = E(913527),
    l = E.n(I),
    A = E(481060),
    o = E(596454),
    i = E(835473),
    N = E(479099),
    D = E(592125),
    L = E(430824),
    S = E(594174),
    u = E(934415),
    O = E(823379),
    U = E(624138),
    c = E(909746),
    G = E(981631),
    d = E(689938),
    R = E(451316);
function M(e, _) {
    let E = c.vc[e.targetType];
    return null != E && !0 === E[_.key];
}
let g = {
    [G.vB8.CREATE]: R.typeCreate,
    [G.vB8.UPDATE]: R.typeUpdate,
    [G.vB8.DELETE]: R.typeDelete
};
function C(e) {
    let { applicationId: _ } = e,
        E = (0, i.q)(_);
    return null == E
        ? null
        : (0, s.jsx)(A.Text, {
              variant: 'text-md/normal',
              children: E.name
          });
}
function f(e) {
    let { changeItem: _, subChanges: E, changeNumber: n, log: t, oldValue: r, newValue: T, change: a } = e,
        I = null;
    if (('string' == typeof _ && (I = _), null != _ && 'string' != typeof _ && null != _.format)) {
        var l, i;
        I = _.format({
            user: t.user,
            target: t.target,
            oldValue: r,
            newValue: T,
            count: Array.isArray(T) ? T.length : null,
            subtarget: null !== (i = null !== (l = t.options.subtarget) && void 0 !== l ? l : a.subtarget) && void 0 !== i ? i : null,
            newColorHook: (e, _) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: R.colorHook,
                        style: { backgroundColor: a.newValue }
                    },
                    _
                ),
            oldColorHook: (e, _) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: R.colorHook,
                        style: { backgroundColor: a.oldValue }
                    },
                    _
                ),
            oldTagHook: (e, _) =>
                (0, s.jsx)(
                    N.Z,
                    {
                        tag: r,
                        size: N.Z.Sizes.SMALL
                    },
                    _
                ),
            newTagHook: (e, _) =>
                (0, s.jsx)(
                    N.Z,
                    {
                        tag: T,
                        size: N.Z.Sizes.SMALL
                    },
                    _
                ),
            oldEmojiHook: (e, _) => (0, s.jsx)(o.Z, { emojiId: r }, _),
            newEmojiHook: (e, _) => (0, s.jsx)(o.Z, { emojiId: T }, _),
            applicationHook: (e, _) => {
                var E;
                return (0, s.jsx)(C, { applicationId: null !== (E = null == r ? void 0 : r.application_id) && void 0 !== E ? E : null == T ? void 0 : T.application_id }, _);
            }
        });
    }
    return null == I
        ? (console.warn('No change string for', a), null)
        : '' === I
          ? null
          : (0, s.jsxs)(
                'div',
                {
                    className: R.detail,
                    style: {
                        position: 'relative',
                        top: 1
                    },
                    children: [
                        (0, s.jsxs)(A.Text, {
                            className: R.prefix,
                            variant: 'code',
                            color: (function (e) {
                                switch (e) {
                                    case G.vB8.CREATE:
                                        return 'text-positive';
                                    case G.vB8.DELETE:
                                        return 'status-danger';
                                    default:
                                        return 'text-warning';
                                }
                            })(t.actionType),
                            children: [
                                n < 10 ? '0'.concat(n) : n,
                                (0, s.jsx)('span', {
                                    className: R.dash,
                                    children: '\u2014'
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: R.change,
                            children: [
                                (0, s.jsx)('div', {
                                    className: R.changeStr,
                                    children: I
                                }),
                                null != E ? (0, s.jsx)('div', { children: E }) : null
                            ]
                        })
                    ]
                },
                n
            );
}
class p extends n.PureComponent {
    render() {
        var e, _;
        let { actionType: E, targetType: n, action: t, themeOverride: T } = this.props,
            a = null != T ? R['themeOverride'.concat((0, U.De)(T))] : null;
        let I = r()(
            R.icon,
            g[E],
            ((e = n),
            (_ = t) === G.rsA.MESSAGE_DELETE
                ? R.targetMessage
                : _ === G.rsA.AUTO_MODERATION_BLOCK_MESSAGE || _ === G.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || _ === G.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || _ === G.rsA.AUTO_MODERATION_QUARANTINE_USER
                  ? R.autoModerationBlockMessage
                  : {
                        [G.KFR.ALL]: R.targetAll,
                        [G.KFR.GUILD]: R.targetGuild,
                        [G.KFR.CHANNEL]: R.targetChannel,
                        [G.KFR.CHANNEL_OVERWRITE]: R.targetChannel,
                        [G.KFR.USER]: R.targetMember,
                        [G.KFR.ROLE]: R.targetRole,
                        [G.KFR.ONBOARDING_PROMPT]: R.targetOnboarding,
                        [G.KFR.GUILD_ONBOARDING]: R.targetOnboarding,
                        [G.KFR.HOME_SETTINGS]: R.targetOnboarding,
                        [G.KFR.INTEGRATION]: R.targetIntegration,
                        [G.KFR.INVITE]: R.targetInvite,
                        [G.KFR.WEBHOOK]: R.targetWebhook,
                        [G.KFR.EMOJI]: R.targetEmoji,
                        [G.KFR.STICKER]: R.targetSticker,
                        [G.KFR.STAGE_INSTANCE]: R.targetStageInstance,
                        [G.KFR.GUILD_SCHEDULED_EVENT]: R.targetGuildScheduledEvent,
                        [G.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: R.targetGuildScheduledEvent,
                        [G.KFR.THREAD]: R.thread,
                        [G.KFR.APPLICATION_COMMAND]: R.applicationCommand,
                        [G.KFR.AUTO_MODERATION_RULE]: R.autoModerationRule,
                        [G.KFR.GUILD_HOME]: R.targetGuildHome,
                        [G.KFR.GUILD_SOUNDBOARD]: R.targetGuildSoundboard,
                        [G.KFR.VOICE_CHANNEL_STATUS]: R.targetChannel
                    }[e]),
            a
        );
        return (0, s.jsx)('div', { className: I });
    }
}
function h(e) {
    let { log: _, guild: E, onContentClick: t, className: T } = e,
        I = n.useCallback(
            (e) => {
                if (null == _.changes) return null;
                let n = 0,
                    I = a()
                        .flatten(
                            _.changes.map((t) => {
                                if (M(_, t)) return null;
                                let { oldValue: r, newValue: T } = (() => {
                                        if ((_.action === G.rsA.CHANNEL_UPDATE || _.action === G.rsA.CHANNEL_CREATE) && t.key === G.zUn.TYPE) {
                                            var e, E;
                                            return {
                                                oldValue: null !== (e = t.oldValue) && void 0 !== e ? e : (0, u.a5)({ type: t.oldValue }),
                                                newValue: null !== (E = t.newValue) && void 0 !== E ? E : (0, u.a5)({ type: t.newValue })
                                            };
                                        }
                                        if (_.action === G.rsA.MEMBER_UPDATE && t.key === G.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = l()(t.newValue);
                                            return {
                                                oldValue: t.oldValue,
                                                newValue: e.isValid() ? e.calendar() : t.newValue
                                            };
                                        }
                                        return t;
                                    })(),
                                    I = (() => {
                                        if (_.action === G.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: _ } = e;
                                                return Array.isArray(_)
                                                    ? _.map((e) =>
                                                          (0, s.jsx)(
                                                              'div',
                                                              {
                                                                  className: R.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(t);
                                        if (_.targetType === G.KFR.ROLE || _.action === G.rsA.CHANNEL_OVERWRITE_CREATE || _.action === G.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, _) {
                                                let { newValue: E } = e;
                                                return Array.isArray(E)
                                                    ? E.map((e, E) =>
                                                          (0, s.jsx)(
                                                              'div',
                                                              {
                                                                  className: R.subListItem,
                                                                  children: c.hQ(e, _)
                                                              },
                                                              E
                                                          )
                                                      )
                                                    : null;
                                            })(t, _);
                                        if ((_.action === G.rsA.CHANNEL_UPDATE || _.action === G.rsA.THREAD_UPDATE) && t.key === G.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: _, oldValue: E } = e,
                                                    n = [];
                                                return (Array.isArray(E) &&
                                                    (n = n.concat(
                                                        E.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: R.subListItem,
                                                                    children: c.cT(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                Array.isArray(_) &&
                                                    (n = n.concat(
                                                        _.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: R.subListItem,
                                                                    children: c.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                n.length > 0)
                                                    ? n
                                                    : null;
                                            })(t);
                                        else if ((_.action === G.rsA.ONBOARDING_PROMPT_UPDATE || _.action === G.rsA.ONBOARDING_PROMPT_CREATE) && t.key === G.zUn.OPTIONS)
                                            return (function (e, _, E) {
                                                let { newValue: n, oldValue: t } = e,
                                                    r = (e) => {
                                                        var _;
                                                        let s = null != E ? (null === (_ = L.Z.getRole(E.id, e)) || void 0 === _ ? void 0 : _.name) : void 0;
                                                        return null == s ? null : '@'.concat(s);
                                                    },
                                                    T = (e) => {
                                                        var _;
                                                        let E = null === (_ = D.Z.getChannel(e)) || void 0 === _ ? void 0 : _.name;
                                                        return null == E ? null : '#'.concat(E);
                                                    },
                                                    I = (e, E) => {
                                                        let { title: n, id: t } = E,
                                                            I = e.role_ids.map(r).filter(O.lm),
                                                            l = e.channel_ids.map(T).filter(O.lm),
                                                            o = E.role_ids.map(r).filter(O.lm),
                                                            i = E.channel_ids.map(T).filter(O.lm),
                                                            N = a().difference(o, I),
                                                            D = a().difference(I, o),
                                                            L = a().difference(i, l),
                                                            S = a().difference(l, i),
                                                            u = [];
                                                        return (!a().isEqual(e.title, E.title) && u.push('title'), !a().isEqual(e.description, E.description) && u.push('description'), 0 === N.length && 0 === D.length && 0 === L.length && 0 === S.length && 0 === u.length)
                                                            ? null
                                                            : (0, s.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, s.jsxs)('div', {
                                                                              className: R.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, s.jsx)(p, {
                                                                                      actionType: G.vB8.UPDATE,
                                                                                      targetType: _.targetType,
                                                                                      action: _.action
                                                                                  }),
                                                                                  (0, s.jsx)(A.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({ title: n })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, s.jsxs)('div', {
                                                                              className: R.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  N.length > 0 &&
                                                                                      (0, s.jsx)(A.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({ roles: N.join(', ') })
                                                                                      }),
                                                                                  D.length > 0 &&
                                                                                      (0, s.jsx)(A.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({ roles: D.join(', ') })
                                                                                      }),
                                                                                  L.length > 0 &&
                                                                                      (0, s.jsx)(A.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({ channels: L.join(', ') })
                                                                                      }),
                                                                                  S.length > 0 &&
                                                                                      (0, s.jsx)(A.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({ channels: S.join(', ') })
                                                                                      }),
                                                                                  u.map((_, n) =>
                                                                                      (0, s.jsx)(
                                                                                          A.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                                                                                                  key: _,
                                                                                                  oldValue: e[_],
                                                                                                  newValue: E[_]
                                                                                              })
                                                                                          },
                                                                                          n
                                                                                      )
                                                                                  )
                                                                              ]
                                                                          })
                                                                      ]
                                                                  },
                                                                  t
                                                              );
                                                    },
                                                    l = a().keyBy(null != t ? t : [], 'id'),
                                                    o = a().keyBy(null != n ? n : [], 'id'),
                                                    i = a()
                                                        .difference(Object.keys(o), Object.keys(l))
                                                        .map((e) => o[e]),
                                                    N = a()
                                                        .difference(Object.keys(l), Object.keys(o))
                                                        .map((e) => l[e]),
                                                    S = a().intersection(Object.keys(o), Object.keys(l));
                                                return (0, s.jsxs)(
                                                    'ul',
                                                    {
                                                        className: R.onboardingChangeLogContainer,
                                                        children: [
                                                            i.map((e) => {
                                                                let { role_ids: E, channel_ids: n, title: t, id: a } = e,
                                                                    I = (null != E ? E : []).map(r).filter(O.lm),
                                                                    l = (null != n ? n : []).map(T).filter(O.lm);
                                                                return (0, s.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, s.jsxs)('div', {
                                                                                className: R.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(p, {
                                                                                        actionType: G.vB8.CREATE,
                                                                                        targetType: _.targetType,
                                                                                        action: _.action
                                                                                    }),
                                                                                    (0, s.jsx)(A.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({ title: t })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, s.jsxs)('div', {
                                                                                className: R.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    I.length > 0 &&
                                                                                        (0, s.jsx)(A.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({ roles: I.join(', ') })
                                                                                        }),
                                                                                    l.length > 0 &&
                                                                                        (0, s.jsx)(A.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({ channels: l.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    a
                                                                );
                                                            }),
                                                            N.map((e) =>
                                                                (0, s.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, s.jsxs)('div', {
                                                                            className: R.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, s.jsx)(p, {
                                                                                    actionType: G.vB8.DELETE,
                                                                                    targetType: _.targetType,
                                                                                    action: _.action
                                                                                }),
                                                                                (0, s.jsx)(A.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({ title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            S.map((e) => I(l[e], o[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(t, _, E);
                                        else if (_.action === G.rsA.HOME_SETTINGS_CREATE || _.action === G.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, _) {
                                                let { oldValue: E, newValue: n, key: t } = e,
                                                    { targetType: r, action: T } = _;
                                                switch (t) {
                                                    case G.zUn.WELCOME_MESSAGE:
                                                        return ((e, _) => {
                                                            var E, n, t, r, T;
                                                            let a = S.default.getUser(null == _ ? void 0 : null === (E = _.author_ids) || void 0 === E ? void 0 : E[0]),
                                                                I = S.default.getUser(null === (n = e.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                l =
                                                                    (null == a ? void 0 : a.id) !== (null == I ? void 0 : I.id)
                                                                        ? (0, s.jsx)('li', {
                                                                              children: (0, s.jsx)('div', {
                                                                                  className: R.onboardingChangeLogItemTitle,
                                                                                  children: (0, s.jsx)(A.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                                                                                          oldUser: null !== (t = null == a ? void 0 : a.username) && void 0 !== t ? t : d.Z.Messages.NONE,
                                                                                          newUser: null !== (r = null == I ? void 0 : I.username) && void 0 !== r ? r : d.Z.Messages.NONE
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                o =
                                                                    (null == _ ? void 0 : _.message) !== e.message
                                                                        ? (0, s.jsx)('li', {
                                                                              children: (0, s.jsx)('div', {
                                                                                  className: R.onboardingChangeLogItemTitle,
                                                                                  children: (0, s.jsx)(A.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                                                                                          oldMessage: null !== (T = null == _ ? void 0 : _.message) && void 0 !== T ? T : d.Z.Messages.NONE,
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, s.jsxs)('ul', {
                                                                children: [l, o]
                                                            });
                                                        })(n, E);
                                                    case G.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, _) => {
                                                            let E = e.map((e) => e.channel_id),
                                                                n = _.map((e) => e.channel_id),
                                                                t = a().difference(n, E),
                                                                I = a().difference(E, n),
                                                                l = _.filter((e) => t.includes(e.channel_id)),
                                                                o = e.filter((e) => I.includes(e.channel_id));
                                                            return (0, s.jsxs)('ul', {
                                                                children: [
                                                                    l.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: R.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: G.vB8.CREATE,
                                                                                            targetType: r,
                                                                                            action: T
                                                                                        }),
                                                                                        (0, s.jsx)(A.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    o.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: R.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: G.vB8.DELETE,
                                                                                            targetType: r,
                                                                                            action: T
                                                                                        }),
                                                                                        (0, s.jsx)(A.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != E ? E : [], n);
                                                    case G.zUn.RESOURCE_CHANNELS:
                                                        return ((e, _) => {
                                                            let E = e.map((e) => e.channel_id),
                                                                n = _.map((e) => e.channel_id),
                                                                t = a().difference(n, E),
                                                                I = a().difference(E, n),
                                                                l = _.filter((e) => t.includes(e.channel_id)),
                                                                o = e.filter((e) => I.includes(e.channel_id));
                                                            return (0, s.jsxs)('ul', {
                                                                children: [
                                                                    l.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: R.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: G.vB8.CREATE,
                                                                                            targetType: r,
                                                                                            action: T
                                                                                        }),
                                                                                        (0, s.jsx)(A.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    o.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: R.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: G.vB8.DELETE,
                                                                                            targetType: r,
                                                                                            action: T
                                                                                        }),
                                                                                        (0, s.jsx)(A.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != E ? E : [], n);
                                                    default:
                                                        return null;
                                                }
                                            })(t, _);
                                        return null;
                                    })(),
                                    o = e[t.key];
                                return ('function' == typeof o && (o = o(t)), Array.isArray(o))
                                    ? o.map((e) =>
                                          f({
                                              changeItem: e,
                                              subChanges: I,
                                              changeNumber: ++n,
                                              log: _,
                                              oldValue: r,
                                              newValue: T,
                                              change: t
                                          })
                                      )
                                    : f({
                                          changeItem: o,
                                          subChanges: I,
                                          changeNumber: ++n,
                                          log: _,
                                          oldValue: r,
                                          newValue: T,
                                          change: t
                                      });
                            })
                        )
                        .filter(O.lm);
                return (0, s.jsx)(A.Clickable, {
                    onClick: t,
                    className: r()(R.changeDetails, T),
                    children: I
                });
            },
            [_, E, t, T]
        ),
        o = n.useMemo(() => {
            switch (_.targetType) {
                case G.KFR.GUILD:
                    return I(c.pY());
                case G.KFR.CHANNEL:
                case G.KFR.CHANNEL_OVERWRITE:
                    return I(c.ML());
                case G.KFR.USER:
                    return I(c.lU());
                case G.KFR.ROLE:
                    return I(c.HE());
                case G.KFR.ONBOARDING_PROMPT:
                    return I(c.oD());
                case G.KFR.GUILD_ONBOARDING:
                    return I(c.EN());
                case G.KFR.HOME_SETTINGS:
                    return I(c.hx());
                case G.KFR.INVITE:
                    return I(c.HN());
                case G.KFR.WEBHOOK:
                    return I(c.lR());
                case G.KFR.EMOJI:
                    return I(c.N$());
                case G.KFR.STICKER:
                    return I(c.Bq());
                case G.KFR.INTEGRATION:
                    return I(c.K());
                case G.KFR.STAGE_INSTANCE:
                    return I(c.C2());
                case G.KFR.GUILD_SCHEDULED_EVENT:
                    return I(c.uB());
                case G.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return I(c.pi());
                case G.KFR.THREAD:
                    return I(c.pA());
                case G.KFR.APPLICATION_COMMAND:
                    return I(c.vm(_.changes));
                case G.KFR.AUTO_MODERATION_RULE:
                    return I(c.rK());
                case G.KFR.GUILD_SOUNDBOARD:
                    return I(c.C0());
                case G.KFR.VOICE_CHANNEL_STATUS:
                    return I(c.F1());
            }
        }, [_.targetType, _.changes, I]);
    return (0, s.jsx)(s.Fragment, { children: o });
}
