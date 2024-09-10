E.d(_, {
    mp: function () {
        return g;
    },
    tP: function () {
        return f;
    },
    xO: function () {
        return c;
    }
}),
    E(653041);
var s = E(735250),
    T = E(470079),
    I = E(120356),
    n = E.n(I),
    t = E(392711),
    A = E.n(t),
    r = E(913527),
    a = E.n(r),
    N = E(481060),
    S = E(596454),
    l = E(479099),
    D = E(592125),
    L = E(430824),
    U = E(594174),
    O = E(274730),
    G = E(934415),
    o = E(823379),
    i = E(624138),
    M = E(981631),
    R = E(689938),
    u = E(451316);
function c(e, _) {
    let E = O.vc[e.targetType];
    return null != E && !0 === E[_.key];
}
let C = {
    [M.vB8.CREATE]: u.typeCreate,
    [M.vB8.UPDATE]: u.typeUpdate,
    [M.vB8.DELETE]: u.typeDelete
};
function d(e) {
    let { changeItem: _, subChanges: E, changeNumber: T, log: I, oldValue: n, newValue: t, change: A } = e,
        r = null;
    if (('string' == typeof _ && (r = _), null != _ && 'object' == typeof _)) {
        if (null == _.format) {
            let e = _[A.newValue];
            null == e && null != _[O.Et] ? (_ = _[O.Et]) : null != e && (_ = e);
        }
        if (null != _ && null != _.format) {
            var a, D;
            r = _.format({
                user: I.user,
                target: I.target,
                oldValue: n,
                newValue: t,
                count: Array.isArray(t) ? t.length : null,
                subtarget: null !== (D = null !== (a = I.options.subtarget) && void 0 !== a ? a : A.subtarget) && void 0 !== D ? D : null,
                newColorHook: (e, _) =>
                    (0, s.jsx)(
                        'div',
                        {
                            className: u.colorHook,
                            style: { backgroundColor: A.newValue }
                        },
                        _
                    ),
                oldColorHook: (e, _) =>
                    (0, s.jsx)(
                        'div',
                        {
                            className: u.colorHook,
                            style: { backgroundColor: A.oldValue }
                        },
                        _
                    ),
                oldTagHook: (e, _) =>
                    (0, s.jsx)(
                        l.Z,
                        {
                            tag: n,
                            size: l.Z.Sizes.SMALL
                        },
                        _
                    ),
                newTagHook: (e, _) =>
                    (0, s.jsx)(
                        l.Z,
                        {
                            tag: t,
                            size: l.Z.Sizes.SMALL
                        },
                        _
                    ),
                oldEmojiHook: (e, _) => (0, s.jsx)(S.Z, { emojiId: n }, _),
                newEmojiHook: (e, _) => (0, s.jsx)(S.Z, { emojiId: t }, _)
            });
        } else r = _;
    }
    return null == r
        ? (console.warn('No change string for', A), null)
        : '' === r
          ? null
          : (0, s.jsxs)(
                'div',
                {
                    className: u.detail,
                    style: {
                        position: 'relative',
                        top: 1
                    },
                    children: [
                        (0, s.jsxs)(N.Text, {
                            className: u.prefix,
                            variant: 'code',
                            color: (function (e) {
                                switch (e) {
                                    case M.vB8.CREATE:
                                        return 'text-positive';
                                    case M.vB8.DELETE:
                                        return 'status-danger';
                                    default:
                                        return 'text-warning';
                                }
                            })(I.actionType),
                            children: [
                                T < 10 ? '0'.concat(T) : T,
                                (0, s.jsx)('span', {
                                    className: u.dash,
                                    children: '\u2014'
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: u.change,
                            children: [
                                (0, s.jsx)('div', {
                                    className: u.changeStr,
                                    children: r
                                }),
                                null != E ? (0, s.jsx)('div', { children: E }) : null
                            ]
                        })
                    ]
                },
                T
            );
}
class g extends T.PureComponent {
    render() {
        var e, _;
        let { actionType: E, targetType: T, action: I, themeOverride: t } = this.props,
            A = null != t ? u['themeOverride'.concat((0, i.De)(t))] : null;
        let r = n()(
            u.icon,
            C[E],
            ((e = T),
            (_ = I) === M.rsA.MESSAGE_DELETE
                ? u.targetMessage
                : _ === M.rsA.AUTO_MODERATION_BLOCK_MESSAGE || _ === M.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || _ === M.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || _ === M.rsA.AUTO_MODERATION_QUARANTINE_USER
                  ? u.autoModerationBlockMessage
                  : {
                        [M.KFR.ALL]: u.targetAll,
                        [M.KFR.GUILD]: u.targetGuild,
                        [M.KFR.CHANNEL]: u.targetChannel,
                        [M.KFR.CHANNEL_OVERWRITE]: u.targetChannel,
                        [M.KFR.USER]: u.targetMember,
                        [M.KFR.ROLE]: u.targetRole,
                        [M.KFR.ONBOARDING_PROMPT]: u.targetOnboarding,
                        [M.KFR.GUILD_ONBOARDING]: u.targetOnboarding,
                        [M.KFR.HOME_SETTINGS]: u.targetOnboarding,
                        [M.KFR.INTEGRATION]: u.targetIntegration,
                        [M.KFR.INVITE]: u.targetInvite,
                        [M.KFR.WEBHOOK]: u.targetWebhook,
                        [M.KFR.EMOJI]: u.targetEmoji,
                        [M.KFR.STICKER]: u.targetSticker,
                        [M.KFR.STAGE_INSTANCE]: u.targetStageInstance,
                        [M.KFR.GUILD_SCHEDULED_EVENT]: u.targetGuildScheduledEvent,
                        [M.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: u.targetGuildScheduledEvent,
                        [M.KFR.THREAD]: u.thread,
                        [M.KFR.APPLICATION_COMMAND]: u.applicationCommand,
                        [M.KFR.AUTO_MODERATION_RULE]: u.autoModerationRule,
                        [M.KFR.GUILD_HOME]: u.targetGuildHome,
                        [M.KFR.GUILD_SOUNDBOARD]: u.targetGuildSoundboard,
                        [M.KFR.VOICE_CHANNEL_STATUS]: u.targetChannel
                    }[e]),
            A
        );
        return (0, s.jsx)('div', { className: r });
    }
}
function f(e) {
    let { log: _, guild: E, onContentClick: I, className: t } = e,
        r = T.useCallback(
            (e) => {
                if (null == _.changes) return null;
                let T = 0,
                    r = A()
                        .flatten(
                            _.changes.map((I) => {
                                let { oldValue: n, newValue: t } = I,
                                    r = null;
                                if (
                                    (_.action === M.rsA.MEMBER_ROLE_UPDATE
                                        ? (r = (function (e) {
                                              let { newValue: _ } = e;
                                              return Array.isArray(_)
                                                  ? _.map((e) =>
                                                        (0, s.jsx)(
                                                            'div',
                                                            {
                                                                className: u.subListItem,
                                                                children: e.name
                                                            },
                                                            e.id
                                                        )
                                                    )
                                                  : null;
                                          })(I))
                                        : _.targetType === M.KFR.ROLE || _.action === M.rsA.CHANNEL_OVERWRITE_CREATE || _.action === M.rsA.CHANNEL_OVERWRITE_UPDATE
                                          ? (r = (function (e, _) {
                                                let { newValue: E } = e;
                                                return Array.isArray(E)
                                                    ? E.map((e, E) =>
                                                          (0, s.jsx)(
                                                              'div',
                                                              {
                                                                  className: u.subListItem,
                                                                  children: O.hQ(e, _)
                                                              },
                                                              E
                                                          )
                                                      )
                                                    : null;
                                            })(I, _))
                                          : (_.action === M.rsA.CHANNEL_UPDATE || _.action === M.rsA.THREAD_UPDATE) &&
                                            I.key === M.zUn.FLAGS &&
                                            (r = (function (e) {
                                                let { newValue: _, oldValue: E } = e,
                                                    T = [];
                                                return (Array.isArray(E) &&
                                                    (T = T.concat(
                                                        E.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: u.subListItem,
                                                                    children: O.cT(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                Array.isArray(_) &&
                                                    (T = T.concat(
                                                        _.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: u.subListItem,
                                                                    children: O.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                T.length > 0)
                                                    ? T
                                                    : null;
                                            })(I)),
                                    (_.action === M.rsA.CHANNEL_UPDATE || _.action === M.rsA.CHANNEL_CREATE) && I.key === M.zUn.TYPE && (null != n && (n = (0, G.a5)({ type: n })), null != t && (t = (0, G.a5)({ type: t }))),
                                    _.action === M.rsA.MEMBER_UPDATE && I.key === M.zUn.COMMUNICATION_DISABLED_UNTIL)
                                ) {
                                    if (null == (t = a()(t)) || !t.isValid()) return null;
                                    t = t.calendar();
                                }
                                (_.action === M.rsA.ONBOARDING_PROMPT_UPDATE || _.action === M.rsA.ONBOARDING_PROMPT_CREATE) &&
                                    I.key === M.zUn.OPTIONS &&
                                    (r = (function (e, _, E) {
                                        let { newValue: T, oldValue: I } = e,
                                            n = (e) => {
                                                var _;
                                                let s = null != E ? (null === (_ = L.Z.getRole(E.id, e)) || void 0 === _ ? void 0 : _.name) : void 0;
                                                return null == s ? null : '@'.concat(s);
                                            },
                                            t = (e) => {
                                                var _;
                                                let E = null === (_ = D.Z.getChannel(e)) || void 0 === _ ? void 0 : _.name;
                                                return null == E ? null : '#'.concat(E);
                                            },
                                            r = (e, E) => {
                                                let { title: T, id: I } = E,
                                                    r = e.role_ids.map(n).filter(o.lm),
                                                    a = e.channel_ids.map(t).filter(o.lm),
                                                    S = E.role_ids.map(n).filter(o.lm),
                                                    l = E.channel_ids.map(t).filter(o.lm),
                                                    D = A().difference(S, r),
                                                    L = A().difference(r, S),
                                                    U = A().difference(l, a),
                                                    O = A().difference(a, l),
                                                    G = [];
                                                return (!A().isEqual(e.title, E.title) && G.push('title'), !A().isEqual(e.description, E.description) && G.push('description'), 0 === D.length && 0 === L.length && 0 === U.length && 0 === O.length && 0 === G.length)
                                                    ? null
                                                    : (0, s.jsxs)(
                                                          'li',
                                                          {
                                                              children: [
                                                                  (0, s.jsxs)('div', {
                                                                      className: u.onboardingChangeLogItemTitle,
                                                                      children: [
                                                                          (0, s.jsx)(g, {
                                                                              actionType: M.vB8.UPDATE,
                                                                              targetType: _.targetType,
                                                                              action: _.action
                                                                          }),
                                                                          (0, s.jsx)(N.Text, {
                                                                              variant: 'text-md/normal',
                                                                              children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({ title: T })
                                                                          })
                                                                      ]
                                                                  }),
                                                                  (0, s.jsxs)('div', {
                                                                      className: u.onboardingChangeLogItemChanges,
                                                                      children: [
                                                                          D.length > 0 &&
                                                                              (0, s.jsx)(N.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({ roles: D.join(', ') })
                                                                              }),
                                                                          L.length > 0 &&
                                                                              (0, s.jsx)(N.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({ roles: L.join(', ') })
                                                                              }),
                                                                          U.length > 0 &&
                                                                              (0, s.jsx)(N.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({ channels: U.join(', ') })
                                                                              }),
                                                                          O.length > 0 &&
                                                                              (0, s.jsx)(N.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({ channels: O.join(', ') })
                                                                              }),
                                                                          G.map((_, T) =>
                                                                              (0, s.jsx)(
                                                                                  N.Text,
                                                                                  {
                                                                                      variant: 'text-md/normal',
                                                                                      children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                                                                                          key: _,
                                                                                          oldValue: e[_],
                                                                                          newValue: E[_]
                                                                                      })
                                                                                  },
                                                                                  T
                                                                              )
                                                                          )
                                                                      ]
                                                                  })
                                                              ]
                                                          },
                                                          I
                                                      );
                                            },
                                            a = A().keyBy(null != I ? I : [], 'id'),
                                            S = A().keyBy(null != T ? T : [], 'id'),
                                            l = A()
                                                .difference(Object.keys(S), Object.keys(a))
                                                .map((e) => S[e]),
                                            U = A()
                                                .difference(Object.keys(a), Object.keys(S))
                                                .map((e) => a[e]),
                                            O = A().intersection(Object.keys(S), Object.keys(a));
                                        return (0, s.jsxs)(
                                            'ul',
                                            {
                                                className: u.onboardingChangeLogContainer,
                                                children: [
                                                    l.map((e) => {
                                                        let { role_ids: E, channel_ids: T, title: I, id: A } = e,
                                                            r = (null != E ? E : []).map(n).filter(o.lm),
                                                            a = (null != T ? T : []).map(t).filter(o.lm);
                                                        return (0, s.jsxs)(
                                                            'li',
                                                            {
                                                                children: [
                                                                    (0, s.jsxs)('div', {
                                                                        className: u.onboardingChangeLogItemTitle,
                                                                        children: [
                                                                            (0, s.jsx)(g, {
                                                                                actionType: M.vB8.CREATE,
                                                                                targetType: _.targetType,
                                                                                action: _.action
                                                                            }),
                                                                            (0, s.jsx)(N.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({ title: I })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, s.jsxs)('div', {
                                                                        className: u.onboardingChangeLogItemChanges,
                                                                        children: [
                                                                            r.length > 0 &&
                                                                                (0, s.jsx)(N.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({ roles: r.join(', ') })
                                                                                }),
                                                                            a.length > 0 &&
                                                                                (0, s.jsx)(N.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({ channels: a.join(', ') })
                                                                                })
                                                                        ]
                                                                    })
                                                                ]
                                                            },
                                                            A
                                                        );
                                                    }),
                                                    U.map((e) =>
                                                        (0, s.jsx)(
                                                            'li',
                                                            {
                                                                children: (0, s.jsxs)('div', {
                                                                    className: u.onboardingChangeLogItemTitle,
                                                                    children: [
                                                                        (0, s.jsx)(g, {
                                                                            actionType: M.vB8.DELETE,
                                                                            targetType: _.targetType,
                                                                            action: _.action
                                                                        }),
                                                                        (0, s.jsx)(N.Text, {
                                                                            variant: 'text-md/normal',
                                                                            children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({ title: e.title })
                                                                        })
                                                                    ]
                                                                })
                                                            },
                                                            e.id
                                                        )
                                                    ),
                                                    O.map((e) => r(a[e], S[e]))
                                                ]
                                            },
                                            'options'
                                        );
                                    })(I, _, E)),
                                    (_.action === M.rsA.HOME_SETTINGS_CREATE || _.action === M.rsA.HOME_SETTINGS_UPDATE) &&
                                        (r = (function (e, _) {
                                            let { oldValue: E, newValue: T, key: I } = e,
                                                { targetType: n, action: t } = _;
                                            switch (I) {
                                                case M.zUn.WELCOME_MESSAGE:
                                                    return ((e, _) => {
                                                        var E, T, I, n, t;
                                                        let A = U.default.getUser(null == _ ? void 0 : null === (E = _.author_ids) || void 0 === E ? void 0 : E[0]),
                                                            r = U.default.getUser(null === (T = e.author_ids) || void 0 === T ? void 0 : T[0]),
                                                            a =
                                                                (null == A ? void 0 : A.id) !== (null == r ? void 0 : r.id)
                                                                    ? (0, s.jsx)('li', {
                                                                          children: (0, s.jsx)('div', {
                                                                              className: u.onboardingChangeLogItemTitle,
                                                                              children: (0, s.jsx)(N.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                                                                                      oldUser: null !== (I = null == A ? void 0 : A.username) && void 0 !== I ? I : R.Z.Messages.NONE,
                                                                                      newUser: null !== (n = null == r ? void 0 : r.username) && void 0 !== n ? n : R.Z.Messages.NONE
                                                                                  })
                                                                              })
                                                                          })
                                                                      })
                                                                    : null,
                                                            S =
                                                                (null == _ ? void 0 : _.message) !== e.message
                                                                    ? (0, s.jsx)('li', {
                                                                          children: (0, s.jsx)('div', {
                                                                              className: u.onboardingChangeLogItemTitle,
                                                                              children: (0, s.jsx)(N.Text, {
                                                                                  variant: 'text-md/normal',
                                                                                  children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                                                                                      oldMessage: null !== (t = null == _ ? void 0 : _.message) && void 0 !== t ? t : R.Z.Messages.NONE,
                                                                                      newMessage: e.message
                                                                                  })
                                                                              })
                                                                          })
                                                                      })
                                                                    : null;
                                                        return (0, s.jsxs)('ul', {
                                                            children: [a, S]
                                                        });
                                                    })(T, E);
                                                case M.zUn.NEW_MEMBER_ACTIONS:
                                                    return ((e, _) => {
                                                        let E = e.map((e) => e.channel_id),
                                                            T = _.map((e) => e.channel_id),
                                                            I = A().difference(T, E),
                                                            r = A().difference(E, T),
                                                            a = _.filter((e) => I.includes(e.channel_id)),
                                                            S = e.filter((e) => r.includes(e.channel_id));
                                                        return (0, s.jsxs)('ul', {
                                                            children: [
                                                                a.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: u.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(g, {
                                                                                        actionType: M.vB8.CREATE,
                                                                                        targetType: n,
                                                                                        action: t
                                                                                    }),
                                                                                    (0, s.jsx)(N.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({ name: e.title })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        },
                                                                        e.channel_id
                                                                    )
                                                                ),
                                                                S.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: u.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(g, {
                                                                                        actionType: M.vB8.DELETE,
                                                                                        targetType: n,
                                                                                        action: t
                                                                                    }),
                                                                                    (0, s.jsx)(N.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({ name: e.title })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        },
                                                                        e.channel_id
                                                                    )
                                                                )
                                                            ]
                                                        });
                                                    })(null != E ? E : [], T);
                                                case M.zUn.RESOURCE_CHANNELS:
                                                    return ((e, _) => {
                                                        let E = e.map((e) => e.channel_id),
                                                            T = _.map((e) => e.channel_id),
                                                            I = A().difference(T, E),
                                                            r = A().difference(E, T),
                                                            a = _.filter((e) => I.includes(e.channel_id)),
                                                            S = e.filter((e) => r.includes(e.channel_id));
                                                        return (0, s.jsxs)('ul', {
                                                            children: [
                                                                a.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: u.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(g, {
                                                                                        actionType: M.vB8.CREATE,
                                                                                        targetType: n,
                                                                                        action: t
                                                                                    }),
                                                                                    (0, s.jsx)(N.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({ name: e.title })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        },
                                                                        e.channel_id
                                                                    )
                                                                ),
                                                                S.map((e) =>
                                                                    (0, s.jsx)(
                                                                        'li',
                                                                        {
                                                                            children: (0, s.jsxs)('div', {
                                                                                className: u.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(g, {
                                                                                        actionType: M.vB8.DELETE,
                                                                                        targetType: n,
                                                                                        action: t
                                                                                    }),
                                                                                    (0, s.jsx)(N.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: R.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({ name: e.title })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        },
                                                                        e.channel_id
                                                                    )
                                                                )
                                                            ]
                                                        });
                                                    })(null != E ? E : [], T);
                                                default:
                                                    return null;
                                            }
                                        })(I, _));
                                let S = e[I.key];
                                return c(_, I)
                                    ? null
                                    : ('function' == typeof S && (S = S(I)), Array.isArray(S))
                                      ? S.map(
                                            (e) => (
                                                T++,
                                                d({
                                                    changeItem: e,
                                                    subChanges: r,
                                                    changeNumber: T,
                                                    log: _,
                                                    oldValue: n,
                                                    newValue: t,
                                                    change: I
                                                })
                                            )
                                        )
                                      : (T++,
                                        d({
                                            changeItem: S,
                                            subChanges: r,
                                            changeNumber: T,
                                            log: _,
                                            oldValue: n,
                                            newValue: t,
                                            change: I
                                        }));
                            })
                        )
                        .filter(o.lm);
                return (0, s.jsx)(N.Clickable, {
                    onClick: I,
                    className: n()(u.changeDetails, t),
                    children: r
                });
            },
            [_, E, I, t]
        ),
        S = T.useMemo(() => {
            switch (_.targetType) {
                case M.KFR.GUILD:
                    return r(O.pY());
                case M.KFR.CHANNEL:
                case M.KFR.CHANNEL_OVERWRITE:
                    return r(O.ML());
                case M.KFR.USER:
                    return r(O.lU());
                case M.KFR.ROLE:
                    return r(O.HE());
                case M.KFR.ONBOARDING_PROMPT:
                    return r(O.oD());
                case M.KFR.GUILD_ONBOARDING:
                    return r(O.EN());
                case M.KFR.HOME_SETTINGS:
                    return r(O.hx());
                case M.KFR.INVITE:
                    return r(O.HN());
                case M.KFR.WEBHOOK:
                    return r(O.lR());
                case M.KFR.EMOJI:
                    return r(O.N$());
                case M.KFR.STICKER:
                    return r(O.Bq());
                case M.KFR.INTEGRATION:
                    return r(O.K());
                case M.KFR.STAGE_INSTANCE:
                    return r(O.C2());
                case M.KFR.GUILD_SCHEDULED_EVENT:
                    return r(O.uB());
                case M.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return r(O.pi());
                case M.KFR.THREAD:
                    return r(O.pA());
                case M.KFR.APPLICATION_COMMAND:
                    return r(O.vm(_.changes));
                case M.KFR.AUTO_MODERATION_RULE:
                    return r(O.rK());
                case M.KFR.GUILD_SOUNDBOARD:
                    return r(O.C0());
                case M.KFR.VOICE_CHANNEL_STATUS:
                    return r(O.F1());
            }
        }, [_.targetType, _.changes, r]);
    return (0, s.jsx)(s.Fragment, { children: S });
}
