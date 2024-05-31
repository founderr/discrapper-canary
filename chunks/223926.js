"use strict";
s.r(a), s("47120");
var l, t, n = s("735250"),
  o = s("470079"),
  u = s("481060"),
  R = s("153124"),
  A = s("5192"),
  d = s("863249"),
  i = s("689938"),
  E = s("394300");
(t = l || (l = {})).SPAM = "spam", t.ABUSIVE = "abusive", t.HARM = "harm", t.PII = "pii", t.OTHER = "other";
a.default = function(e) {
  let {
    guild: a,
    guildJoinRequest: s,
    user: l,
    transitionState: t,
    onClose: _
  } = e, r = (0, R.useUID)(), [M, P] = o.useState(null), [C, O] = o.useState(""), N = o.useCallback(() => {
    var e;
    d.default.reportApplication({
      guild: a,
      guildJoinRequest: s,
      guildJoinRequestUser: l,
      reason: M,
      reasonOther: C,
      responses: JSON.stringify(null === (e = s.formResponses) || void 0 === e ? void 0 : e.map(e => e.response))
    })
  }, [a, s, l, M, C]), I = o.useCallback(e => {
    P(e.value)
  }, [P]), c = o.useMemo(() => [{
    value: "spam",
    name: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_SPAM
  }, {
    value: "abusive",
    name: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_ABUSIVE
  }, {
    value: "harm",
    name: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_HARM
  }, {
    value: "pii",
    name: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_PII
  }, {
    value: "other",
    name: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER
  }], []), h = A.default.getName(null, null, l);
  return (0, n.jsxs)(u.ModalRoot, {
    transitionState: t,
    "aria-labelledby": r,
    children: [(0, n.jsx)(u.ModalHeader, {
      children: (0, n.jsx)(u.Heading, {
        id: r,
        variant: "heading-md/semibold",
        children: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_MODAL_HEADER
      })
    }), (0, n.jsxs)(u.ModalContent, {
      className: E.content,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_DESCRIPTION.format({
          username: h
        })
      }), (0, n.jsx)(u.RadioGroup, {
        options: c,
        value: M,
        onChange: I
      }), "other" === M && (0, n.jsx)(u.TextArea, {
        value: C,
        onChange: O,
        placeholder: i.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER_PLACEHOLDER,
        maxLength: 200
      })]
    }), (0, n.jsxs)(u.ModalFooter, {
      children: [(0, n.jsx)(u.Button, {
        onClick: N,
        children: i.default.Messages.REPORT
      }), (0, n.jsx)(u.Button, {
        look: u.ButtonLooks.LINK,
        color: u.ButtonColors.PRIMARY,
        onClick: _,
        children: i.default.Messages.CANCEL
      })]
    })]
  })
}