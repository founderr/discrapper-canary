"use strict";
s.r(a), s("47120");
var t, l, n = s("735250"),
  o = s("470079"),
  u = s("442837"),
  d = s("481060"),
  i = s("496675"),
  r = s("153124"),
  R = s("5192"),
  E = s("693546"),
  A = s("863249"),
  _ = s("246364"),
  M = s("981631"),
  P = s("689938"),
  C = s("394300");
(l = t || (t = {})).SPAM = "spam", l.ABUSIVE = "abusive", l.HARM = "harm", l.PII = "pii", l.OTHER = "other";
a.default = function(e) {
  let {
    guild: a,
    guildJoinRequest: t,
    user: l,
    transitionState: N,
    onClose: O
  } = e, c = (0, r.useUID)(), [I, h] = o.useState(null), [T, p] = o.useState(""), m = (0, u.useStateFromStores)([i.default], () => i.default.canManageUser(M.Permissions.BAN_MEMBERS, l, a)), [L, f] = o.useState(!1), g = o.useCallback(() => {
    var e;
    A.default.reportApplication({
      guild: a,
      guildJoinRequest: t,
      guildJoinRequestUser: l,
      reason: I,
      reasonOther: T,
      responses: JSON.stringify(null === (e = t.formResponses) || void 0 === e ? void 0 : e.map(e => e.response))
    }), m && L && (E.default.updateGuildJoinRequest(a.id, l.id, _.GuildJoinRequestApplicationStatuses.REJECTED, ""), null == O || O(), (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("43350")]).then(s.bind(s, "98746"));
      return s => (0, n.jsx)(e, {
        ...s,
        guildId: a.id,
        user: l
      })
    }))
  }, [a, t, l, I, T, m, L, O]), x = o.useCallback(e => {
    h(e.value)
  }, [h]), S = o.useMemo(() => [{
    value: "spam",
    name: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_SPAM
  }, {
    value: "abusive",
    name: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_ABUSIVE
  }, {
    value: "harm",
    name: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_HARM
  }, {
    value: "pii",
    name: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_PII
  }, {
    value: "other",
    name: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER
  }], []), v = R.default.getName(null, null, l);
  return (0, n.jsxs)(d.ModalRoot, {
    transitionState: N,
    "aria-labelledby": c,
    children: [(0, n.jsx)(d.ModalHeader, {
      children: (0, n.jsx)(d.Heading, {
        id: c,
        variant: "heading-md/semibold",
        children: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_MODAL_HEADER
      })
    }), (0, n.jsxs)(d.ModalContent, {
      className: C.content,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        children: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_DESCRIPTION.format({
          username: v
        })
      }), (0, n.jsx)(d.RadioGroup, {
        options: S,
        value: I,
        onChange: x
      }), "other" === I && (0, n.jsx)(d.TextArea, {
        value: T,
        onChange: p,
        placeholder: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER_PLACEHOLDER,
        maxLength: 200
      }), m && (0, n.jsx)(d.Checkbox, {
        type: d.Checkbox.Types.INVERTED,
        value: L,
        onChange: (e, a) => f(a),
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          children: P.default.Messages.CLAN_MEMBER_APPLICATION_REPORT_BAN.format({
            username: v
          })
        })
      })]
    }), (0, n.jsxs)(d.ModalFooter, {
      children: [(0, n.jsx)(d.Button, {
        onClick: g,
        children: P.default.Messages.REPORT
      }), (0, n.jsx)(d.Button, {
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: O,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}