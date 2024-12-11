t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    o = t(831209),
    s = t(481060),
    c = t(367907),
    d = t(177862),
    u = t(981631),
    x = t(388032),
    m = t(506452);
function h(e) {
    let { guildId: n, transitionState: t, onClose: i } = e,
        [h, b] = r.useState([]),
        [_, C] = r.useState(),
        j = [
            {
                text: x.intl.string(x.t['//3pvr']),
                value: d.C2.DM_SPAM
            },
            {
                text: x.intl.string(x.t.SdVsio),
                value: d.C2.MENTION_SPAM
            },
            {
                text: x.intl.string(x.t.uTiSVF),
                value: d.C2.CHANNEL_SPAM
            },
            {
                text: x.intl.string(x.t.GQczU1),
                value: d.C2.SUS_NEW_MEMBERS
            },
            {
                text: x.intl.string(x.t.AAgqy8),
                value: d.C2.CHANGING_SETTINGS
            },
            {
                text: x.intl.string(x.t.ryPKb2),
                value: d.C2.OTHER
            }
        ];
    function g(e) {
        h.includes(e) ? b((n) => n.filter((n) => n !== e)) : b((n) => [...n, e]);
    }
    return null == n
        ? (i(), null)
        : (0, l.jsxs)(s.ModalRoot, {
              transitionState: t,
              size: s.ModalSize.MEDIUM,
              children: [
                  (0, l.jsx)(s.ModalHeader, {
                      separator: !0,
                      children: (0, l.jsxs)('div', {
                          className: m.headerContainer,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: m.headerText,
                                  children: [
                                      (0, l.jsx)(s.LockIcon, {
                                          size: 'xs',
                                          color: o.Z.INTERACTIVE_NORMAL
                                      }),
                                      (0, l.jsx)(s.Heading, {
                                          color: 'header-primary',
                                          variant: 'heading-md/semibold',
                                          children: x.intl.string(x.t.f5hd9P)
                                      })
                                  ]
                              }),
                              (0, l.jsx)(s.Clickable, {
                                  onClick: i,
                                  children: (0, l.jsx)(s.XSmallIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: m.closeIcon
                                  })
                              })
                          ]
                      })
                  }),
                  (0, l.jsx)(s.ModalContent, {
                      children: (0, l.jsx)('div', {
                          className: m.options,
                          children: j.map((e) => {
                              let { text: n, value: t } = e;
                              return (0, l.jsxs)(
                                  'div',
                                  {
                                      className: a()(m.optionContainer, { [m.optionContainerOther]: t === d.C2.OTHER }),
                                      children: [
                                          (0, l.jsxs)(s.Clickable, {
                                              className: m.optionText,
                                              onClick: () => g(t),
                                              children: [
                                                  (0, l.jsx)('div', {
                                                      children: (0, l.jsx)(s.Checkbox, {
                                                          type: s.Checkbox.Types.INVERTED,
                                                          size: 20,
                                                          value: h.includes(t),
                                                          onChange: () => g(t)
                                                      })
                                                  }),
                                                  (0, l.jsx)(s.Text, {
                                                      variant: 'text-md/medium',
                                                      color: h.includes(t) ? 'interactive-active' : 'interactive-normal',
                                                      children: n
                                                  })
                                              ]
                                          }),
                                          t === d.C2.OTHER &&
                                              h.includes(d.C2.OTHER) &&
                                              (0, l.jsx)('div', {
                                                  className: m.textboxContainer,
                                                  children: (0, l.jsx)(s.TextArea, {
                                                      className: m.serverLockdownReasonText,
                                                      placeholder: x.intl.string(x.t['PAM+JS']),
                                                      onChange: (e) => C(e),
                                                      value: _,
                                                      rows: 2,
                                                      autoFocus: !0,
                                                      flex: !0
                                                  })
                                              })
                                      ]
                                  },
                                  t
                              );
                          })
                      })
                  }),
                  (0, l.jsx)(s.ModalFooter, {
                      children: (0, l.jsx)(s.Button, {
                          onClick: function () {
                              (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                                  raid_lockdown_feedback_type: h,
                                  raid_lockdown_feedback_other_reason: _,
                                  guild_id: n
                              }),
                                  i();
                          },
                          color: s.Button.Colors.BRAND,
                          look: s.Button.Looks.FILLED,
                          submitting: !1,
                          children: x.intl.string(x.t.nAt0rK)
                      })
                  })
              ]
          });
}
