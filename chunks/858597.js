var T = s(735250),
  o = s(470079),
  n = s(120356),
  a = s.n(n),
  l = s(442837),
  i = s(692547),
  _ = s(481060),
  r = s(194359),
  S = s(782568),
  E = s(726521),
  c = s(485664),
  O = s(699516),
  u = s(863653),
  d = s(941362),
  A = s(367408),
  I = s(423932),
  L = s(473092),
  C = s(611446),
  N = s(993750),
  R = s(134612),
  x = s(689938),
  F = s(942625);

function M(e) {
  let {
children: t
  } = e;
  return (0, T.jsx)('div', {
className: F.actionGroup,
children: t
  });
}

function h(e) {
  let {
title: t,
subTitle: s,
buttonText: o,
buttonColor: n,
onPress: a
  } = e;
  return (0, T.jsxs)('div', {
className: F.actionRow,
children: [
  (0, T.jsxs)('div', {
    className: F.actionButtonDetails,
    children: [
      (0, T.jsx)(_.Text, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: t
      }),
      (0, T.jsx)(_.Text, {
        variant: 'text-xs/medium',
        color: 'header-secondary',
        children: s
      })
    ]
  }),
  (0, T.jsx)(_.Button, {
    size: _.Button.Sizes.SMALL,
    color: n,
    onClick: a,
    children: o
  })
]
  });
}

function b(e) {
  let {
title: t,
onPress: s
  } = e;
  return (0, T.jsxs)(_.Clickable, {
className: a()(F.actionRow, F.clickableActionRow),
onClick: s,
children: [
  (0, T.jsx)(_.Text, {
    variant: 'text-md/semibold',
    color: 'header-primary',
    children: t
  }),
  (0, T.jsx)(_.ChevronSmallRightIcon, {
    size: 'md',
    color: i.Z.colors.INTERACTIVE_NORMAL
  })
]
  });
}
t.Z = function(e) {
  let {
otherUserId: t,
channelId: n,
warningId: a,
warningType: i,
transitionToSlide: F
  } = e, B = (0, c.o)(), Y = (0, u.zF)('web_safety-tools-action-slide'), p = (0, d.q)(n), Z = null != (0, A.M)(n), f = (0, l.e7)([O.Z], () => O.Z.isBlocked(t)), g = o.useCallback(e => {
(0, L.qc)({
  channelId: n,
  warningId: a,
  senderId: t,
  warningType: i,
  cta: e,
  isNudgeWarning: Z
});
  }, [
n,
a,
t,
i,
Z
  ]), m = o.useCallback(() => {
(0, _.closeModal)(R.X_), g(L.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
  }, [g]), P = o.useCallback(() => {
r.Z.unblockUser(t, {
  location: R.DL
}), g(L.NM.USER_SAFETY_TOOLS_UNBLOCK);
  }, [
t,
g
  ]), U = o.useCallback(() => {
(0, _.closeModal)(R.X_), g(L.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
  }, [g]), j = o.useMemo(() => {
let e = {
    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
    buttonColor: _.ButtonColors.PRIMARY,
    onPress: () => {
      (0, S.Z)(R.EI), g(L.NM.USER_SAFETY_TOOLS_CTL);
    }
  },
  o = {
    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
    buttonColor: _.ButtonColors.PRIMARY,
    onPress: () => {
      (0, S.Z)(R.n4), g(L.NM.USER_SAFETY_TOOLS_NO_FILTR);
    }
  },
  a = {
    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_TITLE,
    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_SUBTITLE,
    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_THROUGHLINE_BUTTON,
    buttonColor: _.ButtonColors.PRIMARY,
    onPress: () => {
      (0, S.Z)(R.$l), g(L.NM.USER_SAFETY_TOOLS_THROUGHLINE);
    }
  };
return [{
    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
    buttonText: f ? x.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
    buttonColor: _.ButtonColors.BRAND,
    onPress: () => {
      f ? P() : (0, _.openModalLazy)(async () => {
        let {
          default: e
        } = await s.e('41128').then(s.bind(s, 699783));
        return s => {
          let {
            transitionState: o,
            onClose: a
          } = s;
          return (0, T.jsx)(e, {
            transitionState: o,
            onBlock: m,
            onBlockAndReport: U,
            onCancel: () => {
              null == a || a(), g(L.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
            },
            onClose: a,
            userId: t,
            channelId: n
          });
        };
      });
    }
  },
  {
    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
    buttonColor: _.ButtonColors.PRIMARY,
    onPress: () => {
      (0, _.closeModal)(R.X_), (0, E.wk)(p), g(L.NM.USER_SAFETY_TOOLS_REPORT);
    }
  },
  B ? e : Y ? a : o,
  {
    title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
    subTitle: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
    buttonText: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
    buttonColor: _.ButtonColors.PRIMARY,
    onPress: () => {
      (0, I.Z)(_.closeAllModals), g(L.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    }
  }
];
  }, [
f,
B,
Y,
g,
P,
m,
U,
t,
n,
p
  ]), H = o.useMemo(() => [{
  title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
  onPress: () => {
    F(C.SafetyToolsSlides.SAFETY_TIPS), g(L.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
  }
},
{
  title: x.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
  onPress: () => {
    F(C.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), g(L.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
  }
}
  ], [
F,
g
  ]);
  return (0, T.jsxs)(N.Z, {
children: [
  (0, T.jsx)(M, {
    children: j.map(e => {
      let {
        title: t,
        subTitle: s,
        buttonText: o,
        buttonColor: n,
        onPress: a
      } = e;
      return (0, T.jsx)(h, {
        title: t,
        subTitle: s,
        buttonText: o,
        buttonColor: n,
        onPress: a
      }, t);
    })
  }),
  (0, T.jsx)(M, {
    children: H.map(e => {
      let {
        title: t,
        onPress: s
      } = e;
      return (0, T.jsx)(b, {
        title: t,
        onPress: s
      }, t);
    })
  })
]
  });
};