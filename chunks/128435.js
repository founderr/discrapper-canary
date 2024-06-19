n.d(t, {
  Z: function() {
    return A
  }
}), n(627341);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(278074),
  o = n(263568),
  c = n(481060),
  u = n(203143),
  d = n(365206),
  E = n(294608),
  _ = n(65145),
  I = n(920557),
  T = n(355957);

function N(e) {
  let {
    media: t
  } = e;
  return (0, s.jsx)(c.Heading, {
    variant: "text-md/medium",
    className: T.question,
    scaleFontToUserSetting: !0,
    children: t.text
  })
}

function m(e) {
  let {
    children: t,
    onClick: n,
    variant: i = "text-sm/medium",
    color: l = "interactive-active",
    className: r,
    buttonRef: o
  } = e;
  return (0, s.jsx)(c.Button, {
    onClick: n,
    className: a()(T.__invalid_textButton, r),
    look: c.Button.Looks.BLANK,
    size: c.Button.Sizes.NONE,
    buttonRef: o,
    children: (0, s.jsx)(c.Text, {
      variant: i,
      color: l,
      scaleFontToUserSetting: !0,
      children: t
    })
  })
}

function h(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: i,
    isInteractive: l,
    className: r
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(T.detailsText, r),
    children: [l ? (0, s.jsx)(m, {
      onClick: i,
      variant: "text-sm/normal",
      color: "none",
      className: a()(T.detailsTextButton, T.interactive),
      children: t
    }) : (0, s.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: t
    }), null != n && (0, s.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: n
    })]
  })
}

function C(e) {
  let {
    action: t,
    channelId: n,
    messageId: l,
    isInteractive: r,
    className: o
  } = e, {
    actionButtonRef: d,
    manageFocusOnAction: E
  } = (0, _.dv)(), I = i.useCallback(async () => {
    if ((null == t ? void 0 : t.type) != null) await u.Z.handlePollActionTapped({
      channelId: n,
      messageId: l,
      type: t.type
    }), E(t.type)
  }, [null == t ? void 0 : t.type, n, l, E]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, s.jsx)(c.Button, {
    buttonRef: d,
    onClick: I,
    disabled: !t.enabled,
    color: "secondaryButton" === t.presentation ? c.Button.Colors.CUSTOM : c.Button.Colors.BRAND,
    size: c.Button.Sizes.SMALL,
    className: a()(o, T.buttonPresentation, "secondaryButton" === t.presentation && T.secondaryButtonPresentation),
    children: (0, s.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "none",
      scaleFontToUserSetting: !0,
      children: t.label
    })
  }, t.presentation) : "textButton" === t.presentation ? (0, s.jsx)(m, {
    buttonRef: d,
    onClick: I,
    className: o,
    children: t.label
  }) : (0, s.jsx)(h, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: I,
    isInteractive: r,
    className: o
  })
}

function S(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e, l = (0, E.$B)(n.containerStyle), u = function(e, t) {
    let n = {
      answers: t.answers,
      answersInteraction: t.answersInteraction,
      answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
      isExpired: t.isExpired,
      canTapAnswers: t.canTapAnswers,
      hasSelectedAnyAnswer: t.hasSelectedAnswer,
      myAvatarUrl: t.myAvatarUrl,
      canShowVoteCounts: t.canShowVoteCounts
    };
    return (0, r.EQ)(t.layoutType).with(o.C.DEFAULT, () => (0, s.jsx)(I.K, {
      ...n
    })).with(o.C.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(d.Z, {
      ...n
    })).otherwise(() => null)
  }(0, n);
  return null == u ? null : (0, s.jsx)("div", {
    className: a()(T.container, l, i),
    children: (0, s.jsxs)(c.HeadingLevel, {
      children: [(0, s.jsxs)("div", {
        className: T.header,
        children: [(0, s.jsx)(N, {
          media: n.question
        }), null != n.promptLabel && (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: T.prompt,
          scaleFontToUserSetting: !0,
          children: n.promptLabel
        })]
      }), u, (0, s.jsxs)("div", {
        className: T.bottomBar,
        children: [(0, s.jsx)(C, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: T.secondaryAction,
          isInteractive: n.isInteractive
        }), (0, s.jsx)(C, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: T.tertiaryAction
        }), (0, s.jsx)(C, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function A(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e;
  return (0, s.jsx)(E.XL, {
    message: t,
    poll: n,
    children: (0, s.jsx)(_.Pk, {
      children: (0, s.jsx)(S, {
        message: t,
        poll: n,
        className: i
      })
    })
  })
}