"use strict";
a.r(s), a.d(s, {
  default: function() {
    return U
  }
}), a("47120");
var t = a("735250"),
  l = a("470079"),
  n = a("120356"),
  E = a.n(n),
  r = a("392711"),
  _ = a.n(r),
  u = a("866442"),
  d = a("692547"),
  L = a("481060"),
  i = a("893776"),
  T = a("37234"),
  M = a("232567"),
  c = a("820160"),
  C = a("594174"),
  o = a("259580"),
  A = a("93879"),
  f = a("632184"),
  I = a("350566"),
  R = a("837748"),
  S = a("971401"),
  m = a("306453"),
  D = a("981631"),
  N = a("689938"),
  O = a("273459");

function U(e) {
  let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [a, n] = l.useState(""),
    [E, r] = l.useState(null),
    [_, u] = l.useState(null),
    d = (0, R.default)(e.code);
  l.useEffect(() => {
    (async function e() {
      let e = C.default.getCurrentUser();
      if (null == e) try {
        e = await (0, M.fetchCurrentUser)()
      } catch (e) {
        i.default.verifySSOToken(null)
      }
      null != e && n(d.defaultName.format({
        username: e.username
      }))
    })()
  }, [d.defaultName]);
  (0, S.default)(e);
  let o = (0, t.jsxs)(t.Fragment, {
      children: [s ? (0, t.jsx)(m.default, {
        guildTemplate: e
      }) : null, (0, t.jsx)("div", {
        className: O.icon,
        children: (0, t.jsx)(c.default, {
          icon: E,
          onChange: r
        })
      }), (0, t.jsx)(L.FormItem, {
        title: d.nameLabel,
        children: (0, t.jsx)(L.TextInput, {
          type: "text",
          value: a,
          maxLength: 100,
          onChange: n,
          error: null == _ ? void 0 : _.name
        })
      }), (0, t.jsx)(L.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: O.guidelines,
        children: d.terms.format({
          guidelinesURL: D.MarketingURLs.GUIDELINES
        })
      })]
    }),
    A = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name);
  return {
    form: o,
    preview: (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)("div", {
        className: O.divider
      }), (0, t.jsxs)(L.FormItem, {
        className: O.previewSection,
        title: N.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
        children: [(0, t.jsx)(g, {
          channels: e.serializedSourceGuild.channels
        }), (0, t.jsxs)(L.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: O.protip,
          children: [(0, t.jsxs)("span", {
            className: O.protipText,
            children: [N.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
          }), " ", N.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
        })]
      }), A.length > 0 ? (0, t.jsx)(t.Fragment, {
        children: (0, t.jsx)(L.FormItem, {
          className: O.previewSection,
          title: N.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
          children: (0, t.jsx)(p, {
            roles: A
          })
        })
      }) : null]
    }),
    handleSubmit: () => {
      I.default.acceptGuildTemplate(e.code, a, E).then(() => {
        (0, L.closeAllModals)(), (0, T.popAllLayers)()
      }).catch(e => u(e))
    }
  }
}

function g(e) {
  let {
    channels: s
  } = e, a = _()(s).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
    let s = function(e) {
      let {
        type: s
      } = e;
      return s === D.ChannelTypes.GUILD_VOICE ? f.default : s === D.ChannelTypes.GUILD_CATEGORY ? o.default : A.default
    }(e);
    return (0, t.jsxs)("div", {
      className: E()(O.channel, {
        [O.category]: e.type === D.ChannelTypes.GUILD_CATEGORY
      }),
      children: [(0, t.jsx)(s, {
        className: O.channelIcon
      }), (0, t.jsx)(L.Text, {
        className: O.channelText,
        variant: "text-sm/normal",
        children: e.name
      })]
    }, e.id)
  }).value();
  return (0, t.jsx)("div", {
    className: O.channelsWrapper,
    children: a
  })
}
a("418757");

function p(e) {
  let {
    roles: s
  } = e, a = s.slice().reverse().map(e => (0, t.jsx)(h, {
    role: e
  }, e.id));
  return (0, t.jsx)("ul", {
    className: O.rolesWrapper,
    children: a
  })
}

function h(e) {
  var s;
  let {
    role: a
  } = e, l = null == a.color ? d.default.unsafe_rawColors.PRIMARY_300.css : (0, u.int2hex)(a.color);
  return (0, t.jsxs)("li", {
    className: O.role,
    style: {
      borderColor: null !== (s = (0, u.hex2rgb)(l, .6)) && void 0 !== s ? s : void 0
    },
    children: [(0, t.jsx)(L.RoleCircle, {
      className: O.roleCircle,
      color: l
    }), (0, t.jsx)("div", {
      className: O.roleName,
      children: a.name
    })]
  })
}