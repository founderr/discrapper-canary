t.r(n), t.d(n, {
  default: function() {
    return C
  }
}), t(47120);
var l = t(735250),
  r = t(470079),
  i = t(106351),
  o = t(442837),
  a = t(481060),
  s = t(471445),
  d = t(856768),
  u = t(324067),
  c = t(771845),
  h = t(9156),
  f = t(117984),
  m = t(593214),
  v = t(378337),
  x = t(689938),
  g = t(848120);

function C(e) {
  let {
    transitionState: n,
    onClose: t,
    parentId: i
  } = e, s = (0, o.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()[0]), [u, h] = r.useState(s), [f, m] = r.useState(!1);
  return (0, l.jsxs)(a.ModalRoot, {
    transitionState: n,
    children: [(0, l.jsxs)(a.ModalHeader, {
      className: g.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: g.modalHeaderTitle,
        children: [(0, l.jsx)(a.Heading, {
          variant: "text-lg/semibold",
          children: x.Z.Messages.FAVORITE_CHANNEL
        }), (0, l.jsx)(a.ModalCloseButton, {
          onClick: t
        })]
      }), (0, l.jsx)("div", {
        className: g.guildSelector,
        children: (0, l.jsx)(d.q, {
          guildId: u,
          onChange: function(e) {
            null != e && h(e.id)
          }
        })
      })]
    }), (0, l.jsx)(a.ModalContent, {
      className: g.modalContent,
      children: (0, l.jsx)(j, {
        guildId: u,
        hideMutedChannels: f,
        parentId: i
      })
    }), (0, l.jsxs)(a.ModalFooter, {
      className: g.modalFooter,
      children: [(0, l.jsx)(a.Button, {
        className: g.goBackButton,
        look: a.ButtonLooks.BLANK,
        color: a.ButtonColors.PRIMARY,
        size: a.ButtonSizes.SMALL,
        onClick: t,
        children: x.Z.Messages.GO_BACK
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(a.Checkbox, {
          type: a.Checkbox.Types.INVERTED,
          value: f,
          onChange: (e, n) => m(n),
          children: (0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: x.Z.Messages.HIDE_MUTED_CHANNELS
          })
        })
      })]
    })]
  })
}

function j(e) {
  let {
    guildId: n,
    hideMutedChannels: t,
    parentId: a
  } = e, s = (0, o.e7)([u.Z], () => u.Z.getCategories(n)), d = (0, v.Z)(s), c = r.useRef(null);
  return r.useEffect(() => {
    var e;
    null == c || null === (e = c.current) || void 0 === e || e.scroll({
      top: 0
    })
  }, [n]), (0, l.jsx)("div", {
    ref: c,
    children: d.map(e => e.type === i.d.GUILD_CATEGORY ? (0, l.jsx)(p, {
      name: e.name
    }, e.id) : (0, l.jsx)(I, {
      channel: e,
      hideMutedChannels: t,
      parentId: a
    }, e.id))
  })
}

function p(e) {
  let {
    name: n
  } = e;
  return (0, l.jsx)(a.Text, {
    className: g.categoryRow,
    variant: "eyebrow",
    color: "interactive-normal",
    children: n
  })
}

function I(e) {
  let {
    channel: n,
    hideMutedChannels: t,
    parentId: r
  } = e, i = (0, m.s4)(n.id);
  if ((0, o.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
  let d = (0, s.KS)(n);
  return (0, l.jsxs)("div", {
    className: g.channelRow,
    children: [(0, l.jsxs)("div", {
      className: g.channelName,
      children: [null != d && (0, l.jsx)("div", {
        className: g.channelIconContainer,
        children: (0, l.jsx)(d, {
          className: g.channelIcon,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: n.name
      })]
    }), null != i ? (0, l.jsx)(N, {
      channelId: n.id
    }) : (0, l.jsx)(Z, {
      channelId: n.id,
      parentId: r
    })]
  }, n.id)
}

function Z(e) {
  let {
    channelId: n,
    parentId: t
  } = e;
  return (0, l.jsx)(a.Button, {
    look: a.ButtonLooks.OUTLINED,
    size: a.ButtonSizes.SMALL,
    color: a.ButtonColors.BRAND,
    onClick: function() {
      (0, f.kj)(n, t)
    },
    children: x.Z.Messages.ADD
  })
}

function N(e) {
  let {
    channelId: n
  } = e;
  return (0, l.jsx)(a.Button, {
    look: a.ButtonLooks.FILLED,
    size: a.ButtonSizes.SMALL,
    color: a.ButtonColors.PRIMARY,
    onClick: function() {
      (0, f.oC)(n)
    },
    children: x.Z.Messages.REMOVE
  })
}