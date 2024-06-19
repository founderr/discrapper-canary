a.d(s, {
  Z: function() {
    return E
  }
}), a(47120);
var t = a(735250),
  n = a(470079),
  r = a(481060),
  _ = a(458044),
  o = a(689938),
  i = a(651151);

function c(e) {
  let {
    user: s,
    tagId: a,
    title: n,
    messageCount: _,
    reactionCount: c,
    activeAgo: l,
    tags: M,
    attachment: E
  } = e, {
    name: d,
    avatarSrc: m
  } = s;
  return (0, t.jsxs)("div", {
    className: i.post,
    children: [(0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: i.inline,
        children: [(0, t.jsxs)(r.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: i.inline,
          children: [(0, t.jsx)("img", {
            src: m,
            alt: o.Z.Messages.USER_SETTINGS_AVATAR,
            width: 16,
            height: 16
          }), d]
        }), null != a && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("span", {
            className: i.bullet,
            children: "•"
          }), (0, t.jsx)(r.Text, {
            color: "header-primary",
            variant: "text-xxs/medium",
            className: i.inlineTag,
            children: M[a]
          })]
        })]
      }), (0, t.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        className: i.title,
        children: n
      }), (0, t.jsxs)("div", {
        className: i.inline,
        children: [(0, t.jsxs)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/medium",
          className: i.alignCenter,
          children: [(0, t.jsx)(r.ChatIcon, {
            size: "xs",
            color: "currentColor",
            className: i.icon
          }), _]
        }), c > 0 && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("span", {
            className: i.bullet,
            children: "•"
          }), (0, t.jsxs)(r.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            className: i.alignCenter,
            children: [(0, t.jsx)("span", {
              role: "img",
              "aria-label": o.Z.Messages.REACTIONS,
              className: i.icon,
              children: "❤️"
            }), c]
          })]
        }), (0, t.jsx)("span", {
          className: i.bullet,
          children: "•"
        }), (0, t.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/medium",
          children: l
        })]
      })]
    }), null != E && (0, t.jsx)("img", {
      src: E,
      alt: o.Z.Messages.MESSAGE_ATTACHMENT_A11Y_LABEL.format({
        name: n
      }),
      className: i.attachment
    })]
  })
}

function l(e) {
  let {
    author: s,
    content: a
  } = e, {
    name: n,
    isOP: _,
    avatarSrc: c
  } = s;
  return (0, t.jsxs)("div", {
    className: i.message,
    children: [(0, t.jsx)("img", {
      src: c,
      alt: o.Z.Messages.USER_SETTINGS_AVATAR,
      width: 40,
      height: 40
    }), (0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: i.inline,
        children: [(0, t.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          children: n
        }), _ && (0, t.jsx)("span", {
          className: i.opTag,
          children: o.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER
        })]
      }), (0, t.jsx)(r.Text, {
        color: "text-normal",
        variant: "text-sm/normal",
        children: a
      })]
    })]
  })
}

function M(e) {
  let {
    title: s,
    messages: a,
    maxHeight: n
  } = e;
  return (0, t.jsx)("div", {
    className: i.previewContainer,
    style: {
      maxHeight: n
    },
    "aria-hidden": !0,
    children: (0, t.jsxs)("div", {
      className: i.preview,
      children: [(0, t.jsx)(r.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: i.forumPostIcon
      }), (0, t.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: i.header,
        children: s
      }), (0, t.jsx)("div", {
        className: i.messageContainer,
        children: a.map((e, s) => (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l, {
            ...e
          }, s), 0 === s && (0, t.jsxs)("div", {
            children: [(0, t.jsx)("hr", {
              className: i.topSeparator
            }), (0, t.jsxs)("div", {
              className: i.actionBar,
              children: [(0, t.jsxs)(r.Text, {
                color: "text-brand",
                variant: "text-xs/medium",
                className: i.fakeReactions,
                children: [(0, t.jsx)("span", {
                  role: "img",
                  "aria-label": o.Z.Messages.REACTIONS,
                  className: i.icon,
                  children: "❤️"
                }), "17"]
              }), (0, t.jsxs)(r.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: i.following,
                children: [(0, t.jsx)(r.BellIcon, {
                  size: "xs",
                  color: "currentColor"
                }), o.Z.Messages.FOLLOW]
              })]
            }), (0, t.jsx)("hr", {
              className: i.bottomSeparator
            })]
          })]
        }))
      }), (0, t.jsx)("div", {
        className: i.chatInput,
        children: (0, t.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: o.Z.Messages.SEND_A_MESSAGE
        })
      })]
    })
  })
}

function E(e) {
  let {
    id: s
  } = e, [a, o] = n.useState(0), l = n.useRef(null), {
    tags: E,
    posts: d,
    postPreview: m,
    ariaLabel: T
  } = (0, _.Z)(s);
  return n.useEffect(() => {
    o(0)
  }, [s]), n.useEffect(() => {
    var e;
    0 === a && (null == l ? void 0 : null === (e = l.current) || void 0 === e ? void 0 : e.clientHeight) != null && o(l.current.clientHeight - 40)
  }, [a]), (0, t.jsxs)("div", {
    className: i.container,
    role: "image",
    "aria-label": T,
    children: [(0, t.jsxs)("div", {
      ref: l,
      className: i.browser,
      "aria-hidden": !0,
      children: [(0, t.jsx)("div", {
        className: i.tags,
        children: E.map((e, s) => (0, t.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: i.tag,
          children: e
        }, s))
      }), (0, t.jsx)("div", {
        className: i.posts,
        children: d.map((e, s) => (0, t.jsx)(c, {
          ...e,
          tags: E
        }, s))
      })]
    }), (0, t.jsx)(M, {
      ...m,
      maxHeight: a
    })]
  })
}