t.d(n, {
  Z: function() {
    return Z
  }
}), t(47120), t(653041);
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(544891),
  o = t(846519),
  c = t(481060),
  d = t(668781),
  u = t(139387),
  I = t(308063),
  N = t(208567),
  E = t(598077),
  T = t(285952),
  m = t(259580),
  _ = t(768581),
  h = t(572004),
  O = t(709054),
  g = t(51144),
  A = t(486199),
  C = t(981631),
  S = t(689938),
  x = t(690352);
let p = e => {
  if (null == e) return null;
  let n = new E.Z(e);
  return g.ZP.getUserTag(n)
};

function R(e, n) {
  return null != n && /^data:/.test(n) ? n : (0, _.ov)({
    id: e.id,
    avatar: n,
    discriminator: C.fo$
  })
}

function Z(e) {
  let {
    id: n,
    webhook: t,
    editedWebhook: l,
    channelOptions: E,
    isExpanded: _,
    isNew: g,
    errors: Z,
    onToggleExpand: f
  } = e, [M, L] = s.useState(!1), [v] = s.useState(new o.V7);
  s.useEffect(() => () => v.stop(), [v]);
  let j = s.useMemo(() => R(t, t.avatar), [t]),
    b = s.useCallback(() => {
      let e = "".concat((0, r.K0)(!1)).concat(C.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
      (0, h.JG)(e)
    }, [t]),
    D = s.useCallback(() => {
      (0, c.openModal)(e => (0, i.jsx)(c.ConfirmModal, {
        ...e,
        header: S.Z.Messages.WEBHOOK_DELETE_TITLE.format({
          name: t.name
        }),
        confirmText: S.Z.Messages.WEBHOOK_DELETE,
        cancelText: S.Z.Messages.WEBHOOK_CANCEL,
        onConfirm: () => {
          I.Z.delete(t.guild_id, t.id).catch(e => {
            let {
              status: n
            } = e;
            429 === n ? d.Z.show({
              title: S.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
              body: S.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
            }) : d.Z.show({
              title: S.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
              body: S.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
            })
          })
        },
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: S.Z.Messages.WEBHOOK_DELETE_BODY.format({
            name: t.name
          })
        })
      }))
    }, [t.guild_id, t.id, t.name]),
    P = [];
  null != t.user ? P.push({
    icon: c.ClockIcon,
    text: S.Z.Messages.INTEGRATION_CREATED_USER_DATE.format({
      user: p(t.user),
      timestamp: O.default.extractTimestamp(t.id)
    })
  }) : P.push({
    icon: c.ClockIcon,
    text: S.Z.Messages.INTEGRATION_CREATED_DATE.format({
      timestamp: O.default.extractTimestamp(t.id)
    })
  });
  let B = null;
  return _ && null != l && (B = (0, i.jsxs)("div", {
    className: x.body,
    children: [(0, i.jsx)(c.FormDivider, {
      className: x.topDivider
    }), (0, i.jsxs)(T.Z, {
      children: [(0, i.jsx)(T.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(T.Z, {
          className: x.avatarWrapper,
          direction: T.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(N.Z, {
            image: l.avatar,
            onChange: e => {
              u.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => R(t, e),
            imageClassName: x.avatarUploaderInner,
            showIcon: !0
          }), null != Z.avatar && "" !== Z.avatar ? (0, i.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-sm/normal",
            children: Z.avatar
          }) : null]
        })
      }), (0, i.jsxs)(T.Z, {
        direction: T.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(T.Z, {
          children: [(0, i.jsx)(T.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(c.FormItem, {
              title: S.Z.Messages.WEBHOOK_FORM_NAME,
              children: (0, i.jsx)(c.TextInput, {
                value: l.name,
                onChange: e => {
                  u.Z.updateWebhook({
                    name: e
                  })
                },
                maxLength: 80,
                error: Z.name
              })
            })
          }), (0, i.jsx)(T.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(c.FormItem, {
              title: S.Z.Messages.CHANNEL,
              children: (0, i.jsx)(c.SearchableSelect, {
                value: l.channel_id,
                options: E,
                onChange: e => {
                  u.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: S.Z.Messages.CHANNEL_SELECT
              })
            })
          })]
        }), (0, i.jsx)(c.FormDivider, {
          className: x.bottomDivider
        }), (0, i.jsxs)(T.Z, {
          children: [(0, i.jsx)(c.Tooltip, {
            text: S.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
            forceOpen: M,
            color: c.TooltipColors.GREEN,
            disableTooltipPointerEvents: !0,
            children: e => {
              let {
                onClick: n,
                onMouseEnter: s,
                onMouseLeave: l,
                onBlur: a,
                onFocus: r,
                ...o
              } = e;
              return (0, i.jsx)(c.Button, {
                ...o,
                "aria-label": "",
                onClick: () => {
                  null == n || n(), L(!0), c.AccessibilityAnnouncer.announce(S.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL), v.start(1e3, () => L(!1)), b()
                },
                size: c.Button.Sizes.SMALL,
                color: c.Button.Colors.PRIMARY,
                look: c.Button.Looks.FILLED,
                className: x.copyButton,
                disabled: null == t.token || "" === t.token,
                children: S.Z.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
              })
            }
          }), (0, i.jsx)(c.Button, {
            onClick: D,
            size: c.Button.Sizes.SMALL,
            color: c.Button.Colors.RED,
            look: c.Button.Looks.LINK,
            children: S.Z.Messages.INTEGRATIONS_WEBHOOK_DELETE
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(c.Card, {
    editable: !0,
    id: n,
    className: a()(x.card, g ? x.pulse : null),
    children: (0, i.jsxs)(T.Z, {
      direction: T.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(c.Clickable, {
        className: x.header,
        "aria-expanded": _,
        onClick: f,
        children: (0, i.jsxs)(T.Z, {
          align: T.Z.Align.CENTER,
          children: [(0, i.jsx)(A.Z, {
            name: t.name,
            imageSrc: j,
            details: P
          }), (0, i.jsx)(m.Z, {
            className: x.expandIcon,
            expanded: _,
            "aria-hidden": !0
          })]
        })
      }), B]
    })
  })
}