r.r(t), r(47120);
var s = r(735250);
r(470079);
var i = r(435935),
  o = r(481060),
  n = r(259756),
  l = r(785681),
  a = r(880257),
  c = r(863552),
  d = r(292352),
  h = r(689938),
  C = r(578546),
  _ = r(128216);
let x = {
    [d.MY.USER_INTERACTION]: (0, s.jsx)(c.Z, {
      width: 18,
      height: 18
    }),
    [d.MY.USER_CALLED]: (0, s.jsx)(o.PhoneCallIcon, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [d.MY.USER_ADD]: (0, s.jsx)(o.FriendsIcon, {
      size: "custom",
      color: "currentColor",
      className: C.personWavingIcon,
      width: 22,
      height: 22
    }),
    [d.MY.GUILD_ADD]: (0, s.jsx)(o.ServerGridIcon, {
      size: "custom",
      color: "currentColor",
      width: 22,
      height: 22
    }),
    [d.MY.GUILD_INTERACTION]: (0, s.jsx)(o.TextIcon, {
      size: "custom",
      color: "currentColor",
      className: C.threadIcon,
      width: 22,
      height: 22
    })
  },
  u = e => {
    let {
      header: t,
      description: r,
      icon: n
    } = e;
    return (0, s.jsxs)(i.k, {
      className: C.row,
      grow: 0,
      children: [(0, s.jsx)("div", {
        className: C.iconContainer,
        children: n
      }), (0, s.jsxs)("div", {
        className: C.rowContent,
        children: [(0, s.jsx)(o.Text, {
          className: C.__invalid_rowHeader,
          variant: "text-sm/bold",
          children: t
        }), (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: r
        })]
      })]
    })
  };
t.default = e => {
  let {
    transitionState: t,
    onClose: r
  } = e, c = (0, l.o)(h.Z.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, h.Z.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), m = (0, a.Z)(), E = Array.from(d.tx.entries()), N = (0, n.Xi)({
    location: "family_center_tooltip_modal_web"
  });
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: t,
    children: [(0, s.jsx)("img", {
      className: C.art,
      src: _,
      alt: h.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
    }), (0, s.jsx)(o.ModalContent, {
      className: C.content,
      children: (0, s.jsxs)(i.k, {
        direction: i.k.Direction.VERTICAL,
        align: i.k.Align.CENTER,
        children: [(0, s.jsx)(o.Heading, {
          className: C.header,
          color: "header-primary",
          variant: "heading-lg/semibold",
          children: (0, s.jsx)(o.HeadingLevel, {
            children: c
          })
        }), E.map(e => {
          let [t, r] = e;
          return (0, s.jsx)(u, {
            icon: x[t],
            header: r.tooltipHeader(),
            description: r.tooltipDescription(null != m ? m : void 0, N)
          }, t)
        })]
      })
    }), (0, s.jsx)(o.ModalFooter, {
      children: (0, s.jsx)(o.Button, {
        className: C.__invalid_button,
        type: "button",
        color: o.Button.Colors.BRAND,
        onClick: r,
        children: h.Z.Messages.GOT_IT
      })
    })]
  })
}