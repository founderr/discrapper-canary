t.d(n, {
  Z: function() {
    return m
  }
}), t(653041);
var i = t(735250),
  l = t(470079),
  s = t(481060),
  a = t(668781),
  r = t(139387),
  o = t(308063),
  c = t(285952),
  d = t(259580),
  u = t(768581),
  I = t(486199),
  N = t(981631),
  E = t(689938),
  T = t(859734);

function m(e) {
  let {
    webhook: n,
    editedWebhook: t,
    channelOptions: m,
    isExpanded: _,
    errors: h,
    onToggleExpand: g
  } = e, O = l.useMemo(() => {
    var e, t;
    return e = n, null != (t = n.avatar) && /^data:/.test(t) ? t : (0, u.ov)({
      id: e.id,
      avatar: t,
      discriminator: N.fo$
    })
  }, [n]), A = l.useCallback(() => {
    (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
      ...e,
      header: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format({
        name: n.name
      }),
      confirmText: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
      cancelText: E.Z.Messages.CANCEL,
      onConfirm: () => {
        o.Z.delete(n.guild_id, n.id).catch(() => {
          a.Z.show({
            title: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
            body: E.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
          })
        })
      },
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY
      })
    }))
  }, [n.guild_id, n.id, n.name]), x = [];
  null != n.source_channel && null != n.source_guild && (x.push({
    icon: s.AnnouncementsIcon,
    text: n.source_channel.name
  }), x.push({
    text: (0, i.jsx)("span", {
      className: T.guildSource,
      children: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format({
        guildHook: () => (0, i.jsx)("span", {
          className: T.sourceName,
          children: n.source_guild.name
        }, n.id)
      })
    }, "guild-source")
  }));
  let C = null;
  return _ && null != t && (C = (0, i.jsxs)("div", {
    className: T.body,
    children: [(0, i.jsx)(s.FormDivider, {
      className: T.topDivider
    }), (0, i.jsx)(c.Z, {
      children: (0, i.jsxs)(c.Z, {
        direction: c.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(c.Z, {
          children: [(0, i.jsx)(c.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(s.FormItem, {
              title: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
              children: (0, i.jsx)(s.TextInput, {
                value: t.name,
                onChange: e => {
                  r.Z.updateWebhook({
                    name: e
                  })
                },
                maxLength: 80,
                error: h.name
              })
            })
          }), (0, i.jsx)(c.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(s.FormItem, {
              title: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
              children: (0, i.jsx)(s.SingleSelect, {
                value: t.channel_id,
                options: m,
                onChange: e => {
                  r.Z.updateWebhook({
                    channelId: e
                  })
                }
              })
            })
          })]
        }), (0, i.jsx)(s.FormDivider, {
          className: T.bottomDivider
        }), (0, i.jsx)(c.Z, {
          children: (0, i.jsx)(s.Button, {
            onClick: A,
            size: s.Button.Sizes.SMALL,
            color: s.Button.Colors.RED,
            look: s.Button.Looks.LINK,
            className: T.removeButton,
            children: E.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE
          })
        })]
      })
    })]
  })), (0, i.jsx)(s.Card, {
    editable: !0,
    className: T.card,
    children: (0, i.jsxs)(c.Z, {
      direction: c.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(s.Clickable, {
        className: T.header,
        "aria-expanded": _,
        onClick: g,
        children: (0, i.jsxs)(c.Z, {
          align: c.Z.Align.CENTER,
          children: [(0, i.jsx)(I.Z, {
            name: n.name,
            imageSrc: O,
            detailsClassName: T.__invalid_description,
            details: x
          }), (0, i.jsx)(d.Z, {
            className: T.expandIcon,
            expanded: _,
            "aria-hidden": !0
          })]
        })
      }), C]
    })
  })
}