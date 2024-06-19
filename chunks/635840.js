t.d(s, {
  Z: function() {
    return o
  }
}), t(47120);
var a = t(735250),
  C = t(470079),
  _ = t(481060),
  n = t(153867),
  i = t(626135),
  I = t(981631),
  l = t(689938),
  N = t(551304);
let A = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER
}];

function o(e) {
  let {
    application: s,
    subscriptionId: t,
    onClose: o
  } = e, [r, O] = C.useState(!1), [S, E] = C.useState(null), [T, c] = C.useState(""), d = C.useCallback(() => {
    null != S && (i.default.track(I.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: S,
      application_id: s.id,
      reason: T,
      subscription_id: t
    }), o())
  }, [s.id, t, S, o, T]);
  return C.useEffect(() => {
    n.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: r
    })
  }, [r]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(_.ModalHeader, {
      className: N.headerContainer,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: N.titleContainer,
        children: [(0, a.jsx)(_.Text, {
          className: N.headerTitle,
          variant: "text-lg/semibold",
          children: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE
        }), (0, a.jsx)(_.ModalCloseButton, {
          className: N.modalCloseButton,
          onClick: o
        })]
      }), (0, a.jsx)(_.Spacer, {
        size: 8
      }), (0, a.jsx)(_.Text, {
        className: N.headerSubtitle,
        variant: "text-md/medium",
        children: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE
      })]
    }), (0, a.jsxs)(_.ModalContent, {
      children: [(0, a.jsx)("div", {
        className: N.answerChoicesContainer,
        children: (0, a.jsx)(_.RadioGroup, {
          value: S,
          options: A.map(e => {
            let {
              nameGetter: s,
              value: t
            } = e;
            return {
              name: s(),
              value: t
            }
          }),
          onChange: e => E(e.value),
          withTransparentBackground: !0
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === S && (0, a.jsx)(_.TextInput, {
        autoFocus: !0,
        className: N.otherField,
        placeholder: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
        value: T,
        onChange: c
      })]
    }), (0, a.jsxs)(_.ModalFooter, {
      className: N.footer,
      children: [(0, a.jsx)(_.Button, {
        onClick: d,
        color: _.Button.Colors.BRAND,
        disabled: null == S,
        children: l.Z.Messages.SUBMIT
      }), (0, a.jsx)(_.Checkbox, {
        type: _.Checkbox.Types.INVERTED,
        value: r,
        onChange: (e, s) => O(s),
        size: 20,
        className: N.__invalid_checkbox,
        children: (0, a.jsx)(_.Text, {
          variant: "text-sm/medium",
          children: l.Z.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN
        })
      })]
    })]
  })
}