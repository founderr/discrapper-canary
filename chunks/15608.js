t.d(s, {
  Z: function() {
    return m
  }
});
var a = t(735250),
  l = t(470079),
  n = t(481060),
  i = t(109983),
  o = t(285952),
  r = t(120298),
  c = t(486527),
  d = t(689938),
  u = t(757638);

function C(e) {
  let {
    guildTemplate: s,
    onClick: t,
    autoFocus: n
  } = e, o = l.useCallback(() => {
    t(s)
  }, [s, t]);
  return (0, a.jsx)(i.Z, {
    icon: r.M[s.id],
    message: s.label,
    onClick: o,
    autoFocus: n
  })
}

function m(e) {
  let {
    onClose: s,
    onBack: t,
    onChooseTemplate: l,
    directoryGuildName: i
  } = e, r = (0, c.Pp)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.ModalHeader, {
      direction: o.Z.Direction.VERTICAL,
      className: u.header,
      separator: !1,
      children: [(0, a.jsx)(n.Heading, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.Z.Messages.HUB_CREATE_OR_ADD_GUILD_TITLE.format({
          guildName: i
        })
      }), (0, a.jsx)(n.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: d.Z.Messages.HUB_CREATE_OR_ADD_GUILD_SUBTITLE
      }), null != s && (0, a.jsx)(n.ModalCloseButton, {
        className: u.closeButton,
        onClick: s
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      className: u.templatesList,
      paddingFix: !1,
      children: [(0, a.jsx)(C, {
        guildTemplate: {
          ...r[c.sE.CREATE],
          label: d.Z.Messages.HUB_CREATE_GUILD_CTA
        },
        onClick: l
      }), (0, a.jsx)(n.Text, {
        className: u.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: d.Z.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
      }), (0, a.jsx)(C, {
        guildTemplate: r[c.sE.HUB_STUDY],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[c.sE.HUB_SCHOOL_CLUB],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[c.sE.HUB_CLASS],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[c.sE.HUB_SOCIAL],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[c.sE.HUB_MAJOR],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[c.sE.HUB_DORM],
        onClick: l
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      className: u.footer,
      children: (0, a.jsx)(n.Button, {
        look: n.Button.Looks.BLANK,
        size: n.Button.Sizes.MIN,
        onClick: t,
        children: d.Z.Messages.BACK
      })
    })]
  })
}