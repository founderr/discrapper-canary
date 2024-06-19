a.r(s), a.d(s, {
  default: function() {
    return N
  }
});
var t = a(735250);
a(470079);
var n = a(481060),
  r = a(547972),
  i = a(63063),
  o = a(981631),
  c = a(332325),
  l = a(689938),
  E = a(709788),
  d = a(83173);

function N(e) {
  let {
    transitionState: s,
    onClose: a
  } = e;
  return (0, t.jsxs)(n.ModalRoot, {
    transitionState: s,
    size: n.ModalSize.DYNAMIC,
    className: E.modalRoot,
    children: [(0, t.jsxs)(n.ModalHeader, {
      separator: !1,
      className: E.modalHeader,
      children: [(0, t.jsx)("div", {
        className: E.imageFrame,
        children: (0, t.jsx)("img", {
          alt: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_ALT,
          src: d,
          className: E.heroImage
        })
      }), (0, t.jsxs)("div", {
        className: E.headerWrapper,
        children: [(0, t.jsx)(n.Heading, {
          variant: "heading-xl/bold",
          children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_HEADER
        }), (0, t.jsx)("div", {
          className: E.betaTag,
          children: (0, t.jsx)(n.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: l.Z.Messages.BETA
          })
        })]
      })]
    }), (0, t.jsxs)(n.ModalContent, {
      className: E.modalContent,
      children: [(0, t.jsxs)("div", {
        className: E.modalContentFrame,
        children: [(0, t.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DESCRIPTION
        }), (0, t.jsx)(T, {})]
      }), (0, t.jsxs)("div", {
        className: E.modalFooter,
        children: [(0, t.jsx)(n.Button, {
          onClick: a,
          className: E.button,
          children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_GOT_IT
        }), (0, t.jsx)(n.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: E.disclosureText,
          children: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_DISCLOSURE.format({
            recentActivityURL: i.Z.getArticleURL(o.BhN.MEMBER_LIST_ACTIVITY_FEED),
            handleActivityPrivacyClick: () => {
              a(), (0, r.Z)(c.Z.ACTIVITY_PRIVACY)
            }
          })
        })]
      })]
    })]
  })
}
let T = () => {
  let e = [{
    icon: (0, t.jsx)(n.FriendsIcon, {
      className: E.icon
    }),
    text: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_FRIEND_NOTE
  }, {
    icon: (0, t.jsx)(n.GameControllerIcon, {
      className: E.icon
    }),
    text: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_PLAYED_NOTE
  }, {
    icon: (0, t.jsx)(n.ChatIcon, {
      className: E.icon
    }),
    text: l.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_LEARN_MORE_REPLY_NOTE
  }];
  return (0, t.jsx)("div", {
    className: E.notes,
    children: e.map((e, s) => {
      let {
        icon: a,
        text: r
      } = e;
      return (0, t.jsxs)("div", {
        className: E.badgeNote,
        children: [(0, t.jsx)("div", {
          className: E.badge,
          children: a
        }), (0, t.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: r
        })]
      }, "memberlist-learn-more-note-".concat(s))
    })
  })
}