t.r(s), t.d(s, {
  ANSWERS_DISPLAY_DATA: function() {
return d;
  },
  AnswerKey: function() {
return a;
  },
  default: function() {
return S;
  }
}), t(47120), t(390547);
var a, n, _ = t(735250),
  o = t(470079),
  C = t(120356),
  E = t.n(C),
  r = t(481060),
  l = t(471731),
  c = t(626135),
  i = t(981631),
  N = t(689938),
  I = t(992378);
(n = a || (a = {})).WHEN_FRIENDS_PLAY = 'WHEN_FRIENDS_PLAY', n.ACHIEVEMENTS = 'ACHIEVEMENTS', n.NEWS = 'NEWS', n.NONE_OF_BENEFITS = 'NONE_OF_BENEFITS', n.NONE_OF_GAME_TYPES = 'NONE_OF_GAME_TYPES', n.GAMES_I_PLAY_NOW = 'GAMES_I_PLAY_NOW', n.GAMES_I_WANT_TO_PLAY = 'GAMES_I_WANT_TO_PLAY', n.GAMES_FRIENDS_PLAY = 'GAMES_FRIENDS_PLAY', n.FOLLOW_DEV = 'FOLLOW_DEV', n.GENRES = 'GENRES';
let M = {
getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_BENEFITS,
answers: {
  WHEN_FRIENDS_PLAY: !1,
  ACHIEVEMENTS: !1,
  NEWS: !1,
  NONE_OF_BENEFITS: !1
}
  },
  A = {
getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_GAME_TYPES,
answers: {
  GAMES_I_PLAY_NOW: !1,
  GAMES_I_WANT_TO_PLAY: !1,
  GAMES_FRIENDS_PLAY: !1,
  FOLLOW_DEV: !1,
  GENRES: !1,
  NONE_OF_GAME_TYPES: !1
}
  },
  d = {
WHEN_FRIENDS_PLAY: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_WHEN_FRIENDS_PLAY,
  Icon: r.GameControllerIcon
},
ACHIEVEMENTS: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_ACHIEVEMENTS,
  Icon: r.ChatIcon
},
NEWS: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_NEWS,
  Icon: r.AnnouncementsIcon
},
NONE_OF_BENEFITS: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_NONE,
  Icon: r.DenyIcon
},
NONE_OF_GAME_TYPES: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_NONE,
  Icon: r.DenyIcon
},
GAMES_I_PLAY_NOW: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_I_PLAY_NOW,
  Icon: r.GameControllerIcon
},
GAMES_I_WANT_TO_PLAY: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_I_WANT_TO_PLAY,
  Icon: r.CalendarIcon
},
GAMES_FRIENDS_PLAY: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_FRIENDS_PLAY,
  Icon: r.FriendsIcon
},
FOLLOW_DEV: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_FOLLOW_DEV,
  Icon: r.AnnouncementsIcon
},
GENRES: {
  getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GENRES,
  Icon: r.ModerationIcon
}
  };

function S(e) {
  let {
transitionState: s,
applicationId: t,
viewId: a,
background: n,
onClose: C
  } = e, S = (0, r.useToken)(r.tokens.colors.BORDER_STRONG).hex(), [O, h] = o.useState(!1), [T, L] = o.useState([
M,
A
  ]), [x, g] = o.useState(0), u = x === T.length - 1, R = Object.values(T[x].answers).filter(e => e).length > 0, m = Object.entries(T[x].answers).map(e => {
let [s, t] = e;
return {
  key: s,
  isChecked: t,
  text: d[s].getTitle(),
  Icon: d[s].Icon
};
  });

  function F() {
c.default.track(i.rMx.GAME_PROFILE_FOLLOW_SURVEY, {
  application_id: t,
  question_no: x,
  notify_on_launch: O,
  affirmative_answers: T.flatMap(e => Object.entries(e.answers).filter(e => {
    let [s, t] = e;
    return t;
  }).map(e => {
    let [s] = e;
    return s;
  })),
  view_id: a
});
  }
  return (0, _.jsxs)(r.ModalRoot, {
transitionState: s,
className: I.modalRoot,
size: r.ModalSize.LARGE,
children: [
  (0, _.jsx)('img', {
    src: n,
    className: I.backgroundImage,
    alt: ''
  }),
  (0, _.jsxs)(r.Scroller, {
    className: I.modalContent,
    children: [
      (0, _.jsx)(r.ModalCloseButton, {
        onClick: C,
        className: I.closeIcon
      }),
      (0, _.jsxs)('div', {
        className: I.intro,
        children: [
          (0, _.jsx)(l.Z, {
            width: 84,
            height: 16
          }),
          0 === x && (0, _.jsx)(r.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: N.Z.Messages.GAME_PROFILE_SURVEY_INTRO
          })
        ]
      }),
      (0, _.jsxs)('div', {
        className: I.bottomHalf,
        children: [
          (0, _.jsx)(r.Text, {
            variant: 'eyebrow',
            color: 'header-muted',
            children: N.Z.Messages.GAME_PROFILE_SURVEY_PROGRESS.format({
              step: x + 1,
              total: T.length
            })
          }),
          (0, _.jsx)(r.Heading, {
            className: I.question,
            variant: 'heading-lg/medium',
            color: 'header-primary',
            children: T[x].getTitle()
          }),
          (0, _.jsx)('div', {
            className: E()(I.answers, {
              [I.gridFour]: m.length % 4 == 0
            }),
            children: m.map(e => {
              let {
                key: s,
                text: t,
                isChecked: a,
                Icon: n
              } = e;
              return (0, _.jsxs)(r.Checkbox, {
                className: E()(I.answerLabel, {
                  [I.checked]: a
                }),
                reverse: !0,
                type: r.Checkbox.Types.INVERTED,
                shape: r.Checkbox.Shapes.SMALL_BOX,
                checkboxColor: S,
                value: a,
                onChange: (e, t) => function(e, s, t) {
                  let a = [...T];
                  a[e] = {
                    ...a[e],
                    answers: {
                      ...a[e].answers,
                      [s]: t
                    }
                  }, L(a);
                }(x, s, t),
                children: [
                  (0, _.jsx)(n, {
                    color: r.tokens.colors.INTERACTIVE_ACTIVE,
                    className: I.answerIcon
                  }),
                  (0, _.jsx)(r.Heading, {
                    variant: 'heading-md/medium',
                    className: I.answerText,
                    children: t
                  })
                ]
              }, s);
            })
          }),
          (0, _.jsxs)('div', {
            className: I.footer,
            children: [
              (0, _.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: I.selectAll,
                children: N.Z.Messages.GAME_PROFILE_SURVEY_SELECT_ALL
              }),
              !u && R && (0, _.jsx)(r.Button, {
                onClick: function() {
                  F(), g(1);
                },
                children: N.Z.Messages.NEXT
              }),
              u && (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(r.Checkbox, {
                    className: I.notify,
                    type: r.Checkbox.Types.INVERTED,
                    shape: r.Checkbox.Shapes.ROUND,
                    checkboxColor: 'var(--border-strong)',
                    value: O,
                    onChange: (e, s) => h(s),
                    children: (0, _.jsx)(r.Text, {
                      variant: 'text-xs/normal',
                      color: 'text-primary',
                      children: N.Z.Messages.GAME_PROFILE_SURVEY_NOTIFY_ME
                    })
                  }),
                  (0, _.jsx)(r.Button, {
                    onClick: function() {
                      F(), C();
                    },
                    disabled: !R,
                    children: N.Z.Messages.SUBMIT
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  })
]
  });
}