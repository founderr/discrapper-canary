i.d(n, {
  Z: function() {
    return h
  }
}), i(789020);
var t = i(735250),
  l = i(470079),
  a = i(120356),
  s = i.n(a),
  r = i(481060),
  o = i(860719),
  c = i(63063),
  d = i(49012),
  u = i(981631),
  p = i(689938),
  _ = i(419611);
let m = c.Z.getArticleURL(u.BhN.BOT_DATA_ACCESS);

function I(e) {
  let {
    icon: n,
    heading: i,
    body: l
  } = e;
  return (0, t.jsxs)("li", {
    className: _.intentContainer,
    children: [(0, t.jsx)("div", {
      children: (0, t.jsx)(n, {
        color: "currentColor",
        size: "md"
      })
    }), (0, t.jsxs)("div", {
      className: _.intentTextContainer,
      children: [(0, t.jsx)("div", {
        children: (0, t.jsx)(r.Heading, {
          variant: "eyebrow",
          color: "header-secondary",
          children: i
        })
      }), (0, t.jsx)("div", {
        className: _.intentBody,
        children: (0, t.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: l
        })
      })]
    })]
  })
}

function h(e) {
  let {
    application: n
  } = e, {
    hasMessageContent: i,
    hasGuildPresences: a,
    hasGuildMembers: c,
    hasIntents: u
  } = (0, o.w)({
    flags: null == n ? void 0 : n.flags
  }), h = l.useCallback(() => {
    (null == n ? void 0 : n.privacy_policy_url) != null && (0, d.q)({
      href: n.privacy_policy_url
    })
  }, [null == n ? void 0 : n.privacy_policy_url]);
  return (0, t.jsxs)(t.Fragment, {
    children: [u && (0, t.jsx)("div", {
      className: _.intentsListHeading,
      children: (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        children: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
      })
    }), (0, t.jsxs)("div", {
      className: _.intentsContainer,
      children: [u && (0, t.jsxs)("ul", {
        className: _.intentsList,
        children: [i && (0, t.jsx)(I, {
          icon: r.ChatIcon,
          heading: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
          body: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
        }), a && (0, t.jsx)(I, {
          icon: r.UserCircleStatusIcon,
          heading: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
          body: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
        }), c && (0, t.jsx)(I, {
          icon: r.GroupIcon,
          heading: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
          body: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
        })]
      }), (0, t.jsxs)("div", {
        className: s()({
          [_.hasSeparator]: u
        }),
        children: [(0, t.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: p.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
            helpCenterUrl: m
          })
        }), (null == n ? void 0 : n.privacy_policy_url) != null && (0, t.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: _.privacyPolicy,
          children: p.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({
            onClick: h
          })
        })]
      })]
    })]
  })
}