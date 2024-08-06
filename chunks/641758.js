t.r(s), t.d(s, {
  ANSWERS_DISPLAY_DATA: function() {
return A;
  },
  AnswerKey: function() {
return n;
  },
  DEFAULT_SURVEY: function() {
return M;
  },
  default: function() {
return d;
  }
}), t(47120), t(390547);
var n, a, _ = t(735250),
  o = t(470079),
  C = t(120356),
  E = t.n(C),
  r = t(481060),
  c = t(471731),
  l = t(626135),
  i = t(981631),
  N = t(689938),
  I = t(992378);
(a = n || (n = {})).WHEN_FRIENDS_PLAY = 'WHEN_FRIENDS_PLAY', a.ACHIEVEMENTS = 'ACHIEVEMENTS', a.NEWS = 'NEWS', a.NONE_OF_BENEFITS = 'NONE_OF_BENEFITS', a.NONE_OF_GAME_TYPES = 'NONE_OF_GAME_TYPES', a.GAMES_I_PLAY_NOW = 'GAMES_I_PLAY_NOW', a.GAMES_I_WANT_TO_PLAY = 'GAMES_I_WANT_TO_PLAY', a.GAMES_FRIENDS_PLAY = 'GAMES_FRIENDS_PLAY', a.FOLLOW_DEV = 'FOLLOW_DEV', a.GENRES = 'GENRES';
let A = {
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
  },
  M = [{
  getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_BENEFITS,
  answers: {
    WHEN_FRIENDS_PLAY: !1,
    ACHIEVEMENTS: !1,
    NEWS: !1,
    NONE_OF_BENEFITS: !1
  }
},
{
  getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_GAME_TYPES,
  answers: {
    GAMES_I_PLAY_NOW: !1,
    GAMES_I_WANT_TO_PLAY: !1,
    GAMES_FRIENDS_PLAY: !1,
    FOLLOW_DEV: !1,
    GENRES: !1,
    NONE_OF_GAME_TYPES: !1
  }
}
  ];

function d(e) {
  let {
transitionState: s,
applicationId: t,
viewId: n,
background: a,
onClose: C
  } = e, d = (0, r.useToken)(r.tokens.colors.BORDER_STRONG).hex(), [S, O] = o.useState(!1), [h, T] = o.useState(M), [L, u] = o.useState(0), x = L === h.length - 1, g = Object.values(h[L].answers).filter(e => e).length > 0, R = Object.entries(h[L].answers).map(e => {
let [s, t] = e;
return {
  key: s,
  isChecked: t,
  text: A[s].getTitle(),
  Icon: A[s].Icon
};
  });

  function F() {
l.default.track(i.rMx.GAME_PROFILE_FOLLOW_SURVEY, {
  application_id: t,
  question_no: L,
  notify_on_launch: S,
  affirmative_answers: h.flatMap(e => Object.entries(e.answers).filter(e => {
    let [s, t] = e;
    return t;
  }).map(e => {
    let [s] = e;
    return s;
  })),
  view_id: n
});
  }
  return (0, _.jsxs)(r.ModalRoot, {
transitionState: s,
className: I.modalRoot,
size: r.ModalSize.LARGE,
children: [
  (0, _.jsx)('img', {
    src: a,
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
          (0, _.jsx)(c.Z, {
            width: 84,
            height: 16
          }),
          0 === L && (0, _.jsx)(r.Text, {
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
              step: L + 1,
              total: h.length
            })
          }),
          (0, _.jsx)(r.Heading, {
            className: I.question,
            variant: 'heading-lg/medium',
            color: 'header-primary',
            children: h[L].getTitle()
          }),
          (0, _.jsx)('div', {
            className: E()(I.answers, {
              [I.gridFour]: R.length % 4 == 0
            }),
            children: R.map(e => {
              let {
                key: s,
                text: t,
                isChecked: n,
                Icon: a
              } = e;
              return (0, _.jsxs)(r.Checkbox, {
                className: E()(I.answerLabel, {
                  [I.checked]: n
                }),
                reverse: !0,
                type: r.Checkbox.Types.INVERTED,
                shape: r.Checkbox.Shapes.SMALL_BOX,
                checkboxColor: d,
                value: n,
                onChange: (e, t) => function(e, s, t) {
                  let n = [...h];
                  n[e].answers = {
                    ...n[e].answers,
                    [s]: t
                  }, T(n);
                }(L, s, t),
                children: [
                  (0, _.jsx)(a, {
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
              !x && g && (0, _.jsx)(r.Button, {
                onClick: function() {
                  F(), u(1);
                },
                children: N.Z.Messages.NEXT
              }),
              x && (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(r.Checkbox, {
                    className: I.notify,
                    type: r.Checkbox.Types.INVERTED,
                    shape: r.Checkbox.Shapes.ROUND,
                    checkboxColor: 'var(--border-strong)',
                    value: S,
                    onChange: (e, s) => O(s),
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
                    disabled: !g,
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