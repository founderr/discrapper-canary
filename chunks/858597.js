var T = t(735250),
  n = t(470079),
  l = t(120356),
  o = t.n(l),
  a = t(442837),
  _ = t(692547),
  S = t(481060),
  r = t(194359),
  i = t(782568),
  E = t(726521),
  O = t(485664),
  c = t(699516),
  A = t(941362),
  d = t(367408),
  u = t(423932),
  I = t(473092),
  L = t(611446),
  C = t(993750),
  N = t(134612),
  R = t(689938),
  x = t(618306);

function M(e) {
  let {
    children: s
  } = e;
  return (0, T.jsx)("div", {
    className: x.actionGroup,
    children: s
  })
}

function F(e) {
  let {
    title: s,
    subTitle: t,
    buttonText: n,
    buttonColor: l,
    onPress: o
  } = e;
  return (0, T.jsxs)("div", {
    className: x.actionRow,
    children: [(0, T.jsxs)("div", {
      className: x.actionButtonDetails,
      children: [(0, T.jsx)(S.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: s
      }), (0, T.jsx)(S.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: t
      })]
    }), (0, T.jsx)(S.Button, {
      size: S.Button.Sizes.SMALL,
      color: l,
      onClick: o,
      children: n
    })]
  })
}

function h(e) {
  let {
    title: s,
    onPress: t
  } = e;
  return (0, T.jsxs)(S.Clickable, {
    className: o()(x.actionRow, x.clickableActionRow),
    onClick: t,
    children: [(0, T.jsx)(S.Text, {
      variant: "text-md/semibold",
      color: "header-primary",
      children: s
    }), (0, T.jsx)(S.ChevronSmallRightIcon, {
      size: "md",
      color: _.Z.colors.INTERACTIVE_NORMAL
    })]
  })
}
s.Z = function(e) {
  let {
    otherUserId: s,
    channelId: l,
    warningId: o,
    warningType: _,
    transitionToSlide: x
  } = e, Y = (0, O.o)(), B = (0, A.q)(l), Z = null != (0, d.M)(l), j = (0, a.e7)([c.Z], () => c.Z.isBlocked(s)), m = n.useCallback(e => {
    (0, I.qc)({
      channelId: l,
      warningId: o,
      senderId: s,
      warningType: _,
      cta: e,
      isNudgeWarning: Z
    })
  }, [l, o, s, _, Z]), b = n.useCallback(() => {
    (0, S.closeModal)(N.X_), m(I.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM)
  }, [m]), P = n.useCallback(() => {
    r.Z.unblockUser(s, {
      location: N.DL
    }), m(I.NM.USER_SAFETY_TOOLS_UNBLOCK)
  }, [s, m]), g = n.useCallback(() => {
    (0, S.closeModal)(N.X_), m(I.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM)
  }, [m]), U = n.useMemo(() => {
    let e = {
        title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
        subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
        buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
        buttonColor: S.ButtonColors.PRIMARY,
        onPress: () => {
          (0, i.Z)(N.EI), m(I.NM.USER_SAFETY_TOOLS_CTL)
        }
      },
      n = {
        title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
        subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
        buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
        buttonColor: S.ButtonColors.PRIMARY,
        onPress: () => {
          (0, i.Z)(N.n4), m(I.NM.USER_SAFETY_TOOLS_NO_FILTR)
        }
      };
    return [{
      title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
      buttonText: j ? R.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
      buttonColor: S.ButtonColors.BRAND,
      onPress: () => {
        j ? P() : (0, S.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("41128")]).then(t.bind(t, 699783));
          return t => {
            let {
              transitionState: n,
              onClose: o
            } = t;
            return (0, T.jsx)(e, {
              transitionState: n,
              onBlock: b,
              onBlockAndReport: g,
              onCancel: () => {
                null == o || o(), m(I.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL)
              },
              onClose: o,
              userId: s,
              channelId: l
            })
          }
        })
      }
    }, {
      title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
      buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
      buttonColor: S.ButtonColors.PRIMARY,
      onPress: () => {
        (0, S.closeModal)(N.X_), (0, E.wk)(B), m(I.NM.USER_SAFETY_TOOLS_REPORT)
      }
    }, Y ? e : n, {
      title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
      subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
      buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
      buttonColor: S.ButtonColors.PRIMARY,
      onPress: () => {
        (0, u.Z)(S.closeAllModals), m(I.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS)
      }
    }]
  }, [j, Y, m, P, b, g, s, l, B]), f = n.useMemo(() => [{
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
    onPress: () => {
      x(L.SafetyToolsSlides.SAFETY_TIPS), m(I.NM.USER_SAFETY_TOOLS_SAFETY_TIPS)
    }
  }, {
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
    onPress: () => {
      x(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), m(I.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS)
    }
  }], [x, m]);
  return (0, T.jsxs)(C.Z, {
    children: [(0, T.jsx)(M, {
      children: U.map(e => {
        let {
          title: s,
          subTitle: t,
          buttonText: n,
          buttonColor: l,
          onPress: o
        } = e;
        return (0, T.jsx)(F, {
          title: s,
          subTitle: t,
          buttonText: n,
          buttonColor: l,
          onPress: o
        }, s)
      })
    }), (0, T.jsx)(M, {
      children: f.map(e => {
        let {
          title: s,
          onPress: t
        } = e;
        return (0, T.jsx)(h, {
          title: s,
          onPress: t
        }, s)
      })
    })]
  })
}