n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  s = n(120356),
  o = n.n(s),
  r = n(481060),
  i = n(367907),
  _ = n(369994),
  d = n(177862),
  c = n(981631),
  u = n(689938),
  I = n(116998);

function A(e) {
  let {
    guildId: t,
    messageId: s,
    transitionState: A,
    onClose: R
  } = e, [E, D] = l.useState([]), [N, T] = l.useState(), O = l.useCallback(() => {
    let e = {
      raid_alert_type: d.wR.JOIN_RAID,
      raid_alert_id: s,
      false_alarm_type: E.map(e => e.toString()),
      false_alarm_other_reason: N,
      guild_id: t
    };
    (0, i.yw)(c.rMx.GUILD_RAID_FEEDBACK, e), (0, _.Fi)(t, s, (0, d.J$)(E)), R(), (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("37564")]).then(n.bind(n, 969214));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  }, [R, s, t, N, E]), L = [{
    text: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
    value: d.$l.LEGITIMATE_ACTIVITY
  }, {
    text: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
    value: d.$l.DM_SPAM
  }, {
    text: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
    value: d.$l.JOIN_RAID
  }, {
    text: u.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
    value: d.$l.OTHER
  }];

  function h(e) {
    E.includes(e) ? D(t => t.filter(t => t !== e)) : D(t => [...t, e])
  }
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: A,
    size: r.ModalSize.SMALL,
    children: [(0, a.jsx)(r.ModalHeader, {
      separator: !1,
      className: I.center,
      children: (0, a.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-xl/bold",
        children: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
      })
    }), (0, a.jsxs)(r.ModalContent, {
      className: I.center,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: I.textCenter,
        children: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: I.options,
        children: L.map(e => {
          let {
            text: t,
            value: n
          } = e;
          return (0, a.jsxs)("div", {
            className: o()(I.optionContainer, {
              [I.optionContainerOther]: n === d.$l.OTHER
            }),
            children: [(0, a.jsxs)(r.Clickable, {
              className: I.optionText,
              onClick: () => h(n),
              children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(r.Checkbox, {
                  type: r.Checkbox.Types.INVERTED,
                  size: 20,
                  value: E.includes(n),
                  onChange: () => h(n)
                })
              }), (0, a.jsx)(r.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: t
              })]
            }), n === d.$l.OTHER && E.includes(d.$l.OTHER) && (0, a.jsx)("div", {
              className: I.textboxContainer,
              children: (0, a.jsx)(r.TextArea, {
                className: I.falseAlarmReasonText,
                placeholder: u.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => T(e),
                value: N,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, n)
        })
      })]
    }), (0, a.jsxs)(r.ModalFooter, {
      className: I.__invalid_modalFooter,
      children: [(0, a.jsx)("div", {
        className: I.button,
        children: (0, a.jsx)(r.Button, {
          onClick: O,
          color: r.Button.Colors.BRAND,
          look: r.Button.Looks.FILLED,
          children: u.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
        })
      }), (0, a.jsx)(r.Button, {
        onClick: R,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: u.Z.Messages.CANCEL
      })]
    })]
  })
}