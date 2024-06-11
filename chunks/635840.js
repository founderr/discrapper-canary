"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  i = s("470079"),
  l = s("481060"),
  n = s("153867"),
  C = s("626135"),
  _ = s("981631"),
  I = s("689938"),
  N = s("25651");
let o = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER
}];

function A(e) {
  let {
    application: t,
    subscriptionId: s,
    onClose: A
  } = e, [d, r] = i.useState(!1), [c, S] = i.useState(null), [E, O] = i.useState(""), u = i.useCallback(() => {
    null != c && (C.default.track(_.AnalyticEvents.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: c,
      application_id: t.id,
      reason: E,
      subscription_id: s
    }), A())
  }, [t.id, s, c, A, E]);
  return i.useEffect(() => {
    n.default.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: d
    })
  }, [d]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.ModalHeader, {
      className: N.headerContainer,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: N.titleContainer,
        children: [(0, a.jsx)(l.Text, {
          className: N.headerTitle,
          variant: "text-lg/semibold",
          children: I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE
        }), (0, a.jsx)(l.ModalCloseButton, {
          className: N.modalCloseButton,
          onClick: A
        })]
      }), (0, a.jsx)(l.Spacer, {
        size: 8
      }), (0, a.jsx)(l.Text, {
        className: N.headerSubtitle,
        variant: "text-md/medium",
        children: I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE
      })]
    }), (0, a.jsxs)(l.ModalContent, {
      children: [(0, a.jsx)("div", {
        className: N.answerChoicesContainer,
        children: (0, a.jsx)(l.RadioGroup, {
          value: c,
          options: o.map(e => {
            let {
              nameGetter: t,
              value: s
            } = e;
            return {
              name: t(),
              value: s
            }
          }),
          onChange: e => S(e.value),
          withTransparentBackground: !0
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === c && (0, a.jsx)(l.TextInput, {
        autoFocus: !0,
        className: N.otherField,
        placeholder: I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
        value: E,
        onChange: O
      })]
    }), (0, a.jsxs)(l.ModalFooter, {
      className: N.footer,
      children: [(0, a.jsx)(l.Button, {
        onClick: u,
        color: l.Button.Colors.BRAND,
        disabled: null == c,
        children: I.default.Messages.SUBMIT
      }), (0, a.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        value: d,
        onChange: (e, t) => r(t),
        size: 20,
        className: N.__invalid_checkbox,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: I.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN
        })
      })]
    })]
  })
}