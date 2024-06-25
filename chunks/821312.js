t.d(n, {
  Z: function() {
    return E
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  a = t.n(s),
  r = t(831209),
  o = t(481060),
  c = t(367907),
  d = t(177862),
  u = t(981631),
  I = t(689938),
  N = t(325369);

function E(e) {
  let {
    guildId: n,
    transitionState: t,
    onClose: s
  } = e, [E, T] = l.useState([]), [m, _] = l.useState(), h = [{
    text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
    value: d.C2.DM_SPAM
  }, {
    text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
    value: d.C2.MENTION_SPAM
  }, {
    text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
    value: d.C2.CHANNEL_SPAM
  }, {
    text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
    value: d.C2.SUS_NEW_MEMBERS
  }, {
    text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
    value: d.C2.CHANGING_SETTINGS
  }, {
    text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
    value: d.C2.OTHER
  }];

  function g(e) {
    E.includes(e) ? T(n => n.filter(n => n !== e)) : T(n => [...n, e])
  }
  return null == n ? (s(), null) : (0, i.jsxs)(o.ModalRoot, {
    transitionState: t,
    size: o.ModalSize.MEDIUM,
    children: [(0, i.jsx)(o.ModalHeader, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: N.headerContainer,
        children: [(0, i.jsxs)("div", {
          className: N.headerText,
          children: [(0, i.jsx)(o.LockIcon, {
            size: "xs",
            color: r.Z.INTERACTIVE_NORMAL
          }), (0, i.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-md/semibold",
            children: I.Z.Messages.GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION
          })]
        }), (0, i.jsx)(o.Clickable, {
          onClick: s,
          children: (0, i.jsx)(o.CloseSmallIcon, {
            size: "xs",
            color: "currentColor",
            className: N.closeIcon
          })
        })]
      })
    }), (0, i.jsx)(o.ModalContent, {
      children: (0, i.jsx)("div", {
        className: N.options,
        children: h.map(e => {
          let {
            text: n,
            value: t
          } = e;
          return (0, i.jsxs)("div", {
            className: a()(N.optionContainer, {
              [N.optionContainerOther]: t === d.C2.OTHER
            }),
            children: [(0, i.jsxs)(o.Clickable, {
              className: N.optionText,
              onClick: () => g(t),
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(o.Checkbox, {
                  type: o.Checkbox.Types.INVERTED,
                  size: 20,
                  value: E.includes(t),
                  onChange: () => g(t)
                })
              }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: E.includes(t) ? "interactive-active" : "interactive-normal",
                children: n
              })]
            }), t === d.C2.OTHER && E.includes(d.C2.OTHER) && (0, i.jsx)("div", {
              className: N.textboxContainer,
              children: (0, i.jsx)(o.TextArea, {
                className: N.serverLockdownReasonText,
                placeholder: I.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                onChange: e => _(e),
                value: m,
                rows: 2,
                autoFocus: !0,
                flex: !0
              })
            })]
          }, t)
        })
      })
    }), (0, i.jsx)(o.ModalFooter, {
      children: (0, i.jsx)(o.Button, {
        onClick: function() {
          (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
            raid_lockdown_feedback_type: E,
            raid_lockdown_feedback_other_reason: m,
            guild_id: n
          }), s()
        },
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        submitting: !1,
        children: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT
      })
    })]
  })
}