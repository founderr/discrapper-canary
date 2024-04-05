"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("278074"),
  o = n("263568"),
  u = n("481060"),
  d = n("377171"),
  c = n("507893"),
  E = n("63063"),
  f = n("203143"),
  _ = n("365206"),
  T = n("294608"),
  I = n("65145"),
  m = n("920557"),
  N = n("981631"),
  p = n("689938"),
  S = n("749422");

function C(e) {
  let {
    media: t
  } = e;
  return (0, s.jsx)(u.Heading, {
    variant: "text-md/medium",
    className: S.question,
    scaleFontToUserSetting: !0,
    children: t.text
  })
}

function A(e) {
  let {
    className: t
  } = e;
  return (0, s.jsx)(u.Tooltip, {
    text: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      scaleFontToUserSetting: !0,
      children: p.default.Messages.POLLS_EXPERIMENT_INFO_TEXT
    }),
    "aria-label": p.default.Messages.POLLS_EXPERIMENT_INFO_TEXT,
    children: e => (0, s.jsx)(u.Clickable, {
      ...e,
      className: t,
      tag: "a",
      role: "link",
      href: E.default.getArticleURL(N.HelpdeskArticles.POLLS_FAQ),
      target: "_blank",
      children: (0, s.jsx)(c.default, {
        width: 24,
        height: 24,
        color: d.default.TEXT_MUTED,
        "aria-hidden": !0
      })
    })
  })
}

function h(e) {
  let {
    children: t,
    onClick: n,
    variant: a = "text-sm/medium",
    color: l = "interactive-active",
    className: r,
    buttonRef: o
  } = e;
  return (0, s.jsx)(u.Button, {
    onClick: n,
    className: i()(S.__invalid_textButton, r),
    look: u.Button.Looks.BLANK,
    size: u.Button.Sizes.NONE,
    buttonRef: o,
    children: (0, s.jsx)(u.Text, {
      variant: a,
      color: l,
      scaleFontToUserSetting: !0,
      children: t
    })
  })
}

function g(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: a,
    isInteractive: l,
    className: r
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(S.detailsText, r),
    children: [l ? (0, s.jsx)(h, {
      onClick: a,
      variant: "text-sm/normal",
      color: "none",
      className: i()(S.detailsTextButton, S.interactive),
      children: t
    }) : (0, s.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: t
    }), null != n && (0, s.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: !0,
      children: n
    })]
  })
}

function M(e) {
  let {
    action: t,
    channelId: n,
    messageId: l,
    isInteractive: r,
    className: o
  } = e, {
    actionButtonRef: d,
    manageFocusOnAction: c
  } = (0, I.usePollFocusManager)(), E = a.useCallback(async () => {
    (null == t ? void 0 : t.type) != null && (await f.default.handlePollActionTapped({
      channelId: n,
      messageId: l,
      type: t.type
    }), c(t.type))
  }, [null == t ? void 0 : t.type, n, l, c]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, s.jsx)(u.Button, {
    buttonRef: d,
    onClick: E,
    disabled: !t.enabled,
    color: "secondaryButton" === t.presentation ? u.Button.Colors.CUSTOM : u.Button.Colors.BRAND,
    size: u.Button.Sizes.SMALL,
    className: i()(o, S.buttonPresentation, "secondaryButton" === t.presentation && S.secondaryButtonPresentation),
    children: (0, s.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "none",
      scaleFontToUserSetting: !0,
      children: t.label
    })
  }, t.presentation) : "textButton" === t.presentation ? (0, s.jsx)(h, {
    buttonRef: d,
    onClick: E,
    className: o,
    children: t.label
  }) : (0, s.jsx)(g, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: E,
    isInteractive: r,
    className: o
  })
}

function O(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e, l = (0, T.useStyleClass)(n.containerStyle), d = function(e, t) {
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
    return (0, r.match)(t.layoutType).with(o.PollLayoutTypes.DEFAULT, () => (0, s.jsx)(m.TextAndImageAnswers, {
      ...n
    })).with(o.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(_.default, {
      ...n
    })).otherwise(() => null)
  }(0, n);
  return null == d ? null : (0, s.jsx)("div", {
    className: i()(S.container, l, a),
    children: (0, s.jsxs)(u.HeadingLevel, {
      children: [(0, s.jsxs)("div", {
        className: S.header,
        children: [n.isInteractive && (0, s.jsx)(A, {
          className: S.infoButton
        }), (0, s.jsx)(C, {
          media: n.question
        }), null != n.promptLabel && (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: S.prompt,
          scaleFontToUserSetting: !0,
          children: n.promptLabel
        })]
      }), d, (0, s.jsxs)("div", {
        className: S.bottomBar,
        children: [(0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: S.secondaryAction,
          isInteractive: n.isInteractive
        }), (0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: S.tertiaryAction
        }), (0, s.jsx)(M, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function R(e) {
  let {
    message: t,
    poll: n,
    className: a
  } = e;
  return (0, s.jsx)(T.PollContextProvider, {
    message: t,
    poll: n,
    children: (0, s.jsx)(I.PollFocusManager, {
      children: (0, s.jsx)(O, {
        message: t,
        poll: n,
        className: a
      })
    })
  })
}