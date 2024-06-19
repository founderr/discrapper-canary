s.r(a), s(47120);
var n, t, l = s(735250),
  o = s(470079),
  i = s(442837),
  R = s(481060),
  E = s(496675),
  r = s(153124),
  A = s(5192),
  _ = s(693546),
  u = s(863249),
  M = s(246364),
  d = s(981631),
  P = s(689938),
  C = s(647559);
(t = n || (n = {})).SPAM = "spam", t.ABUSIVE = "abusive", t.HARM = "harm", t.PII = "pii", t.OTHER = "other";
a.default = function(e) {
  let {
    guild: a,
    guildJoinRequest: n,
    user: t,
    transitionState: N,
    onClose: O
  } = e, c = (0, r.Dt)(), [I, h] = o.useState(null), [T, L] = o.useState(""), p = (0, i.e7)([E.Z], () => E.Z.canManageUser(d.Plq.BAN_MEMBERS, t, a)), [m, g] = o.useState(!1), x = o.useCallback(() => {
    var e;
    u.Z.reportApplication({
      guild: a,
      guildJoinRequest: n,
      guildJoinRequestUser: t,
      reason: I,
      reasonOther: T,
      responses: JSON.stringify(null === (e = n.formResponses) || void 0 === e ? void 0 : e.map(e => e.response))
    }), p && m && (_.Z.updateGuildJoinRequest(a.id, t.id, M.wB.REJECTED, ""), null == O || O(), (0, R.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("43350")]).then(s.bind(s, 98746));
      return s => (0, l.jsx)(e, {
        ...s,
        guildId: a.id,
        user: t
      })
    }))
  }, [a, n, t, I, T, p, m, O]), B = o.useCallback(e => {
    h(e.value)
  }, [h]), v = o.useMemo(() => [{
    value: "spam",
    name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_SPAM
  }, {
    value: "abusive",
    name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_ABUSIVE
  }, {
    value: "harm",
    name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_HARM
  }, {
    value: "pii",
    name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_PII
  }, {
    value: "other",
    name: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER
  }], []), S = A.ZP.getName(null, null, t);
  return (0, l.jsxs)(R.ModalRoot, {
    transitionState: N,
    "aria-labelledby": c,
    children: [(0, l.jsx)(R.ModalHeader, {
      children: (0, l.jsx)(R.Heading, {
        id: c,
        variant: "heading-md/semibold",
        children: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_MODAL_HEADER
      })
    }), (0, l.jsxs)(R.ModalContent, {
      className: C.content,
      children: [(0, l.jsx)(R.Text, {
        variant: "text-md/normal",
        children: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_DESCRIPTION.format({
          username: S
        })
      }), (0, l.jsx)(R.RadioGroup, {
        options: v,
        value: I,
        onChange: B
      }), "other" === I && (0, l.jsx)(R.TextArea, {
        value: T,
        onChange: L,
        placeholder: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_REASON_OTHER_PLACEHOLDER,
        maxLength: 200
      }), p && (0, l.jsx)(R.Checkbox, {
        type: R.Checkbox.Types.INVERTED,
        value: m,
        onChange: (e, a) => g(a),
        children: (0, l.jsx)(R.Text, {
          variant: "text-md/normal",
          children: P.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_BAN.format({
            username: S
          })
        })
      })]
    }), (0, l.jsxs)(R.ModalFooter, {
      children: [(0, l.jsx)(R.Button, {
        onClick: x,
        children: P.Z.Messages.REPORT
      }), (0, l.jsx)(R.Button, {
        look: R.ButtonLooks.LINK,
        color: R.ButtonColors.PRIMARY,
        onClick: O,
        children: P.Z.Messages.CANCEL
      })]
    })]
  })
}