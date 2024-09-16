E.d(_, {
    mp: function () {
        return C;
    },
    tP: function () {
        return f;
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
    o = E(481060),
    A = E(596454),
    i = E(479099),
    N = E(592125),
    D = E(430824),
    L = E(594174),
    S = E(934415),
    u = E(823379),
    c = E(624138),
    O = E(909746),
    U = E(981631),
    d = E(689938),
    G = E(451316);
function M(e, _) {
    let E = O.vc[e.targetType];
    return null != E && !0 === E[_.key];
}
let R = {
    [U.vB8.CREATE]: G.typeCreate,
    [U.vB8.UPDATE]: G.typeUpdate,
    [U.vB8.DELETE]: G.typeDelete
};
function g(e) {
    let { changeItem: _, subChanges: E, changeNumber: n, log: t, oldValue: r, newValue: T, change: a } = e,
        I = null;
    if (('string' == typeof _ && (I = _), null != _ && 'object' == typeof _)) {
        if (null == _.format) {
            let e = _[a.newValue];
            null == e && null != _[O.Et] ? (_ = _[O.Et]) : null != e && (_ = e);
        }
        if (null != _ && null != _.format) {
            var l, N;
            I = _.format({
                user: t.user,
                target: t.target,
                oldValue: r,
                newValue: T,
                count: Array.isArray(T) ? T.length : null,
                subtarget: null !== (N = null !== (l = t.options.subtarget) && void 0 !== l ? l : a.subtarget) && void 0 !== N ? N : null,
                newColorHook: (e, _) =>
                    (0, s.jsx)(
                        'div',
                        {
                            className: G.colorHook,
                            style: { backgroundColor: a.newValue }
                        },
                        _
                    ),
                oldColorHook: (e, _) =>
                    (0, s.jsx)(
                        'div',
                        {
                            className: G.colorHook,
                            style: { backgroundColor: a.oldValue }
                        },
                        _
                    ),
                oldTagHook: (e, _) =>
                    (0, s.jsx)(
                        i.Z,
                        {
                            tag: r,
                            size: i.Z.Sizes.SMALL
                        },
                        _
                    ),
                newTagHook: (e, _) =>
                    (0, s.jsx)(
                        i.Z,
                        {
                            tag: T,
                            size: i.Z.Sizes.SMALL
                        },
                        _
                    ),
                oldEmojiHook: (e, _) => (0, s.jsx)(A.Z, { emojiId: r }, _),
                newEmojiHook: (e, _) => (0, s.jsx)(A.Z, { emojiId: T }, _)
            });
        } else I = _;
    }
    return null == I
        ? (console.warn('No change string for', a), null)
        : '' === I
          ? null
          : (0, s.jsxs)(
                'div',
                {
                    className: G.detail,
                    style: {
                        position: 'relative',
                        top: 1
                    },
                    children: [
                        (0, s.jsxs)(o.Text, {
                            className: G.prefix,
                            variant: 'code',
                            color: (function (e) {
                                switch (e) {
                                    case U.vB8.CREATE:
                                        return 'text-positive';
                                    case U.vB8.DELETE:
                                        return 'status-danger';
                                    default:
                                        return 'text-warning';
                                }
                            })(t.actionType),
                            children: [
                                n < 10 ? '0'.concat(n) : n,
                                (0, s.jsx)('span', {
                                    className: G.dash,
                                    children: '\u2014'
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: G.change,
                            children: [
                                (0, s.jsx)('div', {
                                    className: G.changeStr,
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
class C extends n.PureComponent {
    render() {
        var e, _;
        let { actionType: E, targetType: n, action: t, themeOverride: T } = this.props,
            a = null != T ? G['themeOverride'.concat((0, c.De)(T))] : null;
        let I = r()(
            G.icon,
            R[E],
            ((e = n),
            (_ = t) === U.rsA.MESSAGE_DELETE
                ? G.targetMessage
                : _ === U.rsA.AUTO_MODERATION_BLOCK_MESSAGE || _ === U.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || _ === U.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || _ === U.rsA.AUTO_MODERATION_QUARANTINE_USER
                  ? G.autoModerationBlockMessage
                  : {
                        [U.KFR.ALL]: G.targetAll,
                        [U.KFR.GUILD]: G.targetGuild,
                        [U.KFR.CHANNEL]: G.targetChannel,
                        [U.KFR.CHANNEL_OVERWRITE]: G.targetChannel,
                        [U.KFR.USER]: G.targetMember,
                        [U.KFR.ROLE]: G.targetRole,
                        [U.KFR.ONBOARDING_PROMPT]: G.targetOnboarding,
                        [U.KFR.GUILD_ONBOARDING]: G.targetOnboarding,
                        [U.KFR.HOME_SETTINGS]: G.targetOnboarding,
                        [U.KFR.INTEGRATION]: G.targetIntegration,
                        [U.KFR.INVITE]: G.targetInvite,
                        [U.KFR.WEBHOOK]: G.targetWebhook,
                        [U.KFR.EMOJI]: G.targetEmoji,
                        [U.KFR.STICKER]: G.targetSticker,
                        [U.KFR.STAGE_INSTANCE]: G.targetStageInstance,
                        [U.KFR.GUILD_SCHEDULED_EVENT]: G.targetGuildScheduledEvent,
                        [U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: G.targetGuildScheduledEvent,
                        [U.KFR.THREAD]: G.thread,
                        [U.KFR.APPLICATION_COMMAND]: G.applicationCommand,
                        [U.KFR.AUTO_MODERATION_RULE]: G.autoModerationRule,
                        [U.KFR.GUILD_HOME]: G.targetGuildHome,
                        [U.KFR.GUILD_SOUNDBOARD]: G.targetGuildSoundboard,
                        [U.KFR.VOICE_CHANNEL_STATUS]: G.targetChannel
                    }[e]),
            a
        );
        return (0, s.jsx)('div', { className: I });
    }
}
function f(e) {
    let { log: _, guild: E, onContentClick: t, className: T } = e,
        I = n.useCallback(
            (e) => {
                if (null == _.changes) return null;
                let n = 0,
                    I = a()
                        .flatten(
                            _.changes.map((t) => {
                                let { oldValue: r, newValue: T } = t,
                                    I = null;
                                if (
                                    (_.action === U.rsA.MEMBER_ROLE_UPDATE
                                        ? (I = (function (e) {
                                              let { newValue: _ } = e;
                                              return Array.isArray(_)
                                                  ? _.map((e) =>
                                                        (0, s.jsx)(
                                                            'div',
                                                            {
                                                                className: G.subListItem,
                                                                children: e.name
                                                            },
                                                            e.id
                                                        )
                                                    )
                                                  : null;
                                          })(t))
                                        : _.targetType === U.KFR.ROLE || _.action === U.rsA.CHANNEL_OVERWRITE_CREATE || _.action === U.rsA.CHANNEL_OVERWRITE_UPDATE
                                          ? (I = (function (e, _) {
                                                let { newValue: E } = e;
                                                return Array.isArray(E)
                                                    ? E.map((e, E) =>
                                                          (0, s.jsx)(
                                                              'div',
                                                              {
                                                                  className: G.subListItem,
                                                                  children: O.hQ(e, _)
                                                              },
                                                              E
                                                          )
                                                      )
                                                    : null;
                                            })(t, _))
                                          : (_.action === U.rsA.CHANNEL_UPDATE || _.action === U.rsA.THREAD_UPDATE) &&
                                            t.key === U.zUn.FLAGS &&
                                            (I = (function (e) {
                                                let { newValue: _, oldValue: E } = e,
                                                    n = [];
                                                return (Array.isArray(E) &&
                                                    (n = n.concat(
                                                        E.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: G.subListItem,
                                                                    children: O.cT(e)
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
                                                                    className: G.subListItem,
                                                                    children: O.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                n.length > 0)
                                                    ? n
                                                    : null;
                                            })(t)),
                                    (_.action === U.rsA.CHANNEL_UPDATE || _.action === U.rsA.CHANNEL_CREATE) && t.key === U.zUn.TYPE && (null != r && (r = (0, S.a5)({ type: r })), null != T && (T = (0, S.a5)({ type: T }))),
                                    _.action === U.rsA.MEMBER_UPDATE && t.key === U.zUn.COMMUNICATION_DISABLED_UNTIL)
                                ) {
                                    if (null == (T = l()(T)) || !T.isValid()) return null;
                                    T = T.calendar();
                                }
                                (_.action === U.rsA.ONBOARDING_PROMPT_UPDATE || _.action === U.rsA.ONBOARDING_PROMPT_CREATE) &&
                                    t.key === U.zUn.OPTIONS &&
                                    (I = (function (e, _, E) {
                                        let { newValue: n, oldValue: t } = e,
                                            r = (e) => {
                                                var _;
                                                let s = null != E ? (null === (_ = D.Z.getRole(E.id, e)) || void 0 === _ ? void 0 : _.name) : void 0;
                                                return null == s ? null : '@'.concat(s);
                                            },
                                            T = (e) => {
                                                var _;
                                                let E = null === (_ = N.Z.getChannel(e)) || void 0 === _ ? void 0 : _.name;
                                                return null == E ? null : '#'.concat(E);
                                            },
                                            I = (e, E) => {
                                                let { title: n, id: t } = E,
                                                    I = e.role_ids.map(r).filter(u.lm),
                                                    l = e.channel_ids.map(T).filter(u.lm),
                                                    A = E.role_ids.map(r).filter(u.lm),
                                                    i = E.channel_ids.map(T).filter(u.lm),
                                                    N = a().difference(A, I),
                                                    D = a().difference(I, A),
                                                    L = a().difference(i, l),
                                                    S = a().difference(l, i),
                                                    c = [];
                                                return (!a().isEqual(e.title, E.title) && c.push('title'), !a().isEqual(e.description, E.description) && c.push('description'), 0 === N.length && 0 === D.length && 0 === L.length && 0 === S.length && 0 === c.length)
                                                    ? null
                                                    : (0, s.jsxs)(
                                                          'li',
                                                          {
                                                              children: [
                                                                  (0, s.jsxs)('div', {
                                                                      className: G.onboardingChangeLogItemTitle,
                                                                      children: [
                                                                          (0, s.jsx)(C, {
                                                                              actionType: U.vB8.UPDATE,
                                                                              targetType: _.targetType,
                                                                              action: _.action
                                                                          }),
                                                                          (0, s.jsx)(o.Text, {
                                                                              variant: 'text-md/normal',
                                                                              children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({ title: n })
                                                                          })
                                                                      ]
                                                                  }),
                                                                  (0, s.jsxs)('div', {
                                                                      className: G.onboardingChangeLogItemChanges,
                                                                      children: [
                                                                          N.length > 0 &&
                                                                              (0, s.jsx)(o.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({ roles: N.join(', ') })
                                                                              }),
                                                                          D.length > 0 &&
                                                                              (0, s.jsx)(o.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({ roles: D.join(', ') })
                                                                              }),
                                                                          L.length > 0 &&
                                                                              (0, s.jsx)(o.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({ channels: L.join(', ') })
                                                                              }),
                                                                          S.length > 0 &&
                                                                              (0, s.jsx)(o.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({ channels: S.join(', ') })
                                                                              }),
                                                                          c.map((_, n) =>
                                                                              (0, s.jsx)(
                                                                                  o.Text,
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
                                            A = a().keyBy(null != n ? n : [], 'id'),
                                            i = a()
                                                .difference(Object.keys(A), Object.keys(l))
                                                .map((e) => A[e]),
                                            L = a()
                                                .difference(Object.keys(l), Object.keys(A))
                                                .map((e) => l[e]),
                                            S = a().intersection(Object.keys(A), Object.keys(l));
                                        return (0, s.jsxs)(
                                            'ul',
                                            {
                                                className: G.onboardingChangeLogContainer,
                                                children: [
                                                    i.map((e) => {
                                                        let { role_ids: E, channel_ids: n, title: t, id: a } = e,
                                                            I = (null != E ? E : []).map(r).filter(u.lm),
                                                            l = (null != n ? n : []).map(T).filter(u.lm);
                                                        return (0, s.jsxs)(
                                                            'li',
                                                            {
                                                                children: [
                                                                    (0, s.jsxs)('div', {
                                                                        className: G.onboardingChangeLogItemTitle,
                                                                        children: [
                                                                            (0, s.jsx)(C, {
                                                                                actionType: U.vB8.CREATE,
                                                                                targetType: _.targetType,
                                                                                action: _.action
                                                                            }),
                                                                            (0, s.jsx)(o.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({ title: t })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, s.jsxs)('div', {
                                                                        className: G.onboardingChangeLogItemChanges,
                                                                        children: [
                                                                            I.length > 0 &&
                                                                                (0, s.jsx)(o.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({ roles: I.join(', ') })
                                                                                }),
                                                                            l.length > 0 &&
                                                                                (0, s.jsx)(o.Text, {
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
                                                    L.map((e) =>
                                                        (0, s.jsx)(
                                                            'li',
                                                            {
                                                                children: (0, s.jsxs)('div', {
                                                                    className: G.onboardingChangeLogItemTitle,
                                                                    children: [
                                                                        (0, s.jsx)(C, {
                                                                            actionType: U.vB8.DELETE,
                                                                            targetType: _.targetType,
                                                                            action: _.action
                                                                        }),
                                                                        (0, s.jsx)(o.Text, {
                                                                            variant: 'text-md/normal',
                                                                            children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({ title: e.title })
                                                                        })
                                                                    ]
                                                                })
                                                            },
                                                            e.id
                                                        )
                                                    ),
                                                    S.map((e) => I(l[e], A[e]))
                                                ]
                                            },
                                            'options'
                                        );
                                    })(t, _, E)),
                                    (_.action === U.rsA.HOME_SETTINGS_CREATE || _.action === U.rsA.HOME_SETTINGS_UPDATE) &&
                                        (I = (function (e, _) {
                                            let { oldValue: E, newValue: n, key: t } = e,
                                                { targetType: r, action: T } = _;
                                            switch (t) {
                                                case U.zUn.WELCOME_MESSAGE:
                                                    return ((e, _) => {
                                                        var E, n, t, r, T;
                                                        let a = L.default.getUser(null == _ ? void 0 : null === (E = _.author_ids) || void 0 === E ? void 0 : E[0]),
                                                            I = L.default.getUser(null === (n = e.author_ids) || void 0 === n ? void 0 : n[0]),
                                                            l =
                                                                (null == a ? void 0 : a.id) !== (null == I ? void 0 : I.id)
                                                                    ? (0, s.jsx)('li', {
                                                                          children: (0, s.jsx)('div', {
                                                                              className: G.onboardingChangeLogItemTitle,
                                                                              children: (0, s.jsx)(o.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                                                                                      oldUser: null !== (t = null == a ? void 0 : a.username) && void 0 !== t ? t : d.Z.Messages.NONE,
                                                                                      newUser: null !== (r = null == I ? void 0 : I.username) && void 0 !== r ? r : d.Z.Messages.NONE
                                                                                  })
                                                                              })
                                                                          })
                                                                      })
                                                                    : null,
                                                            A =
                                                                (null == _ ? void 0 : _.message) !== e.message
                                                                    ? (0, s.jsx)('li', {
                                                                          children: (0, s.jsx)('div', {
                                                                              className: G.onboardingChangeLogItemTitle,
                                                                              children: (0, s.jsx)(o.Text, {
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
                                                            children: [l, A]
                                                        });
                                                    })(n, E);
                                                case U.zUn.NEW_MEMBER_ACTIONS:
                                                    return ((e, _) => {
                                                        let E = e.map((e) => e.channel_id),
                                                            n = _.map((e) => e.channel_id),
                                                            t = a().difference(n, E),
                                                            I = a().difference(E, n),
                                                            l = _.filter((e) => t.includes(e.channel_id)),
                                                            A = e.filter((e) => I.includes(e.channel_id));
                                                        return (0, s.jsxs)('ul', {
                                                            children: [
                                                                l.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: G.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(C, {
                                                                                        actionType: U.vB8.CREATE,
                                                                                        targetType: r,
                                                                                        action: T
                                                                                    }),
                                                                                    (0, s.jsx)(o.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({ name: e.title })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        },
                                                                        e.channel_id
                                                                    )
                                                                ),
                                                                A.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: G.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(C, {
                                                                                        actionType: U.vB8.DELETE,
                                                                                        targetType: r,
                                                                                        action: T
                                                                                    }),
                                                                                    (0, s.jsx)(o.Text, {
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
                                                case U.zUn.RESOURCE_CHANNELS:
                                                    return ((e, _) => {
                                                        let E = e.map((e) => e.channel_id),
                                                            n = _.map((e) => e.channel_id),
                                                            t = a().difference(n, E),
                                                            I = a().difference(E, n),
                                                            l = _.filter((e) => t.includes(e.channel_id)),
                                                            A = e.filter((e) => I.includes(e.channel_id));
                                                        return (0, s.jsxs)('ul', {
                                                            children: [
                                                                l.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: G.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(C, {
                                                                                        actionType: U.vB8.CREATE,
                                                                                        targetType: r,
                                                                                        action: T
                                                                                    }),
                                                                                    (0, s.jsx)(o.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: d.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({ name: e.title })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        },
                                                                        e.channel_id
                                                                    )
                                                                ),
                                                                A.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: G.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(C, {
                                                                                        actionType: U.vB8.DELETE,
                                                                                        targetType: r,
                                                                                        action: T
                                                                                    }),
                                                                                    (0, s.jsx)(o.Text, {
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
                                        })(t, _));
                                let A = e[t.key];
                                return M(_, t)
                                    ? null
                                    : ('function' == typeof A && (A = A(t)), Array.isArray(A))
                                      ? A.map(
                                            (e) => (
                                                n++,
                                                g({
                                                    changeItem: e,
                                                    subChanges: I,
                                                    changeNumber: n,
                                                    log: _,
                                                    oldValue: r,
                                                    newValue: T,
                                                    change: t
                                                })
                                            )
                                        )
                                      : (n++,
                                        g({
                                            changeItem: A,
                                            subChanges: I,
                                            changeNumber: n,
                                            log: _,
                                            oldValue: r,
                                            newValue: T,
                                            change: t
                                        }));
                            })
                        )
                        .filter(u.lm);
                return (0, s.jsx)(o.Clickable, {
                    onClick: t,
                    className: r()(G.changeDetails, T),
                    children: I
                });
            },
            [_, E, t, T]
        ),
        A = n.useMemo(() => {
            switch (_.targetType) {
                case U.KFR.GUILD:
                    return I(O.pY());
                case U.KFR.CHANNEL:
                case U.KFR.CHANNEL_OVERWRITE:
                    return I(O.ML());
                case U.KFR.USER:
                    return I(O.lU());
                case U.KFR.ROLE:
                    return I(O.HE());
                case U.KFR.ONBOARDING_PROMPT:
                    return I(O.oD());
                case U.KFR.GUILD_ONBOARDING:
                    return I(O.EN());
                case U.KFR.HOME_SETTINGS:
                    return I(O.hx());
                case U.KFR.INVITE:
                    return I(O.HN());
                case U.KFR.WEBHOOK:
                    return I(O.lR());
                case U.KFR.EMOJI:
                    return I(O.N$());
                case U.KFR.STICKER:
                    return I(O.Bq());
                case U.KFR.INTEGRATION:
                    return I(O.K());
                case U.KFR.STAGE_INSTANCE:
                    return I(O.C2());
                case U.KFR.GUILD_SCHEDULED_EVENT:
                    return I(O.uB());
                case U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return I(O.pi());
                case U.KFR.THREAD:
                    return I(O.pA());
                case U.KFR.APPLICATION_COMMAND:
                    return I(O.vm(_.changes));
                case U.KFR.AUTO_MODERATION_RULE:
                    return I(O.rK());
                case U.KFR.GUILD_SOUNDBOARD:
                    return I(O.C0());
                case U.KFR.VOICE_CHANNEL_STATUS:
                    return I(O.F1());
            }
        }, [_.targetType, _.changes, I]);
    return (0, s.jsx)(s.Fragment, { children: A });
}
