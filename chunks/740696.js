a.r(s), a.d(s, {
  default: function() {
    return O
  }
}), a(47120);
var t = a(735250),
  n = a(470079),
  r = a(442837),
  _ = a(481060),
  o = a(430824),
  i = a(496675),
  c = a(153124),
  l = a(228392),
  M = a(941848),
  E = a(710352),
  d = a(981631),
  m = a(921944),
  T = a(689938),
  S = a(589233);
let g = () => [{
  id: 0,
  name: T.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_1
}, {
  id: 1,
  name: T.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_2
}, {
  id: 2,
  name: T.Z.Messages.FORUM_UPSELL_DEMO_TAG_NAME_3
}];

function O(e) {
  let {
    guildId: s,
    shouldUpsellCreation: O,
    transitionState: u,
    onClose: L
  } = e, x = (0, r.e7)([o.Z], () => o.Z.getGuild(s), [s]), h = (0, r.e7)([i.Z], () => i.Z.can(d.Plq.MANAGE_CHANNELS, x)), A = g(), [R, N] = n.useState(0), U = (0, c.Dt)();
  return (0, t.jsxs)(_.ModalRoot, {
    transitionState: u,
    "aria-labelledby": U,
    size: _.ModalSize.LARGE,
    children: [(0, t.jsxs)(_.ModalHeader, {
      separator: !1,
      className: S.header,
      children: [(0, t.jsx)(_.Heading, {
        variant: "heading-xl/semibold",
        children: T.Z.Messages.FORUM_UPSELL_MODAL_HEADER
      }), (0, t.jsx)(_.ModalCloseButton, {
        onClick: () => L()
      })]
    }), (0, t.jsx)(_.ModalContent, {
      children: (0, t.jsxs)("div", {
        className: S.content,
        children: [(0, t.jsx)(_.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: T.Z.Messages.FORUM_UPSELL_MODAL_BODY
        }), (0, t.jsx)("div", {
          className: S.tabBar,
          children: (0, t.jsx)(_.TabBar, {
            selectedItem: R,
            type: "top",
            onItemSelect: e => {
              N(e), (0, l.ws)({
                forumDemoId: e
              })
            },
            className: S.tags,
            children: A.map((e, s) => (0, t.jsx)(_.TabBar.Item, {
              id: s,
              children: e.name
            }, s))
          })
        }), (0, t.jsx)(M.Z, {
          id: R
        })]
      })
    }), h && (0, t.jsxs)(_.ModalFooter, {
      className: S.footer,
      children: [(0, t.jsxs)("div", {
        className: S.buttons,
        children: [(0, t.jsx)(_.Button, {
          look: _.Button.Looks.BLANK,
          color: _.Button.Colors.PRIMARY,
          onClick: () => L(m.L.SECONDARY),
          className: S.button,
          children: O ? T.Z.Messages.MAYBE_LATER : T.Z.Messages.GOT_IT
        }), O && (0, t.jsx)(_.Button, {
          onClick: () => {
            (0, _.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([a.e("99387"), a.e("45094")]).then(a.bind(a, 218613));
              return a => (0, t.jsx)(e, {
                ...a,
                channelType: d.d4z.GUILD_FORUM,
                guildId: s,
                prefillChannelName: O ? T.Z.Messages.FORUM_CHANNEL_NAME_PLACEHOLDER : void 0
              })
            }), L(m.L.PRIMARY)
          },
          children: T.Z.Messages.CREATE_FORUM_CHANNEL
        })]
      }), (0, t.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.LINK,
        onClick: () => {
          open(E.V8)
        },
        children: T.Z.Messages.LEARN_MORE
      })]
    })]
  })
}