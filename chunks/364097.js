n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(197409),
  r = n(846587),
  o = n(409059),
  c = n(58346),
  u = n(689938),
  d = n(227210),
  E = n(637091);

function _(e) {
  var t;
  let {
    code: _
  } = e, I = (0, i.e7)([o.Z], () => o.Z.getGuildTemplate(_));
  if (null == I || I.state === c.Rj.RESOLVING) return (0, s.jsxs)(a.Z, {
    children: [(0, s.jsx)(a.Z.Header, {
      text: u.Z.Messages.GUILD_TEMPLATE_RESOLVING_TITLE
    }), (0, s.jsx)(a.Z.Body, {
      resolving: !0
    })]
  });
  if (I.state === c.Rj.EXPIRED) return (0, s.jsxs)(a.Z, {
    children: [(0, s.jsx)(a.Z.Header, {
      text: u.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
    }), (0, s.jsxs)(a.Z.Body, {
      children: [(0, s.jsx)(a.Z.Icon, {
        expired: !0
      }), (0, s.jsx)(a.Z.Info, {
        expired: !0,
        title: u.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      })]
    })]
  });
  let T = __OVERLAY__ ? (0, s.jsx)(a.Z.Button, {
    isDisabled: !0,
    color: a.Z.Button.Colors.PRIMARY,
    children: u.Z.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
  }) : (0, s.jsx)(a.Z.Button, {
    onClick: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("10778"), n.e("95962")]).then(n.bind(n, 766775));
        return t => (0, s.jsx)(e, {
          ...t,
          guildTemplate: I
        })
      })
    },
    submitting: I.state === c.Rj.ACCEPTING,
    color: a.Z.Button.Colors.GREEN,
    children: u.Z.Messages.GUILD_TEMPLATE_OPEN
  });
  return (0, s.jsxs)(a.Z, {
    children: [(0, s.jsx)(a.Z.Header, {
      text: u.Z.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE
    }), (0, s.jsxs)(a.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: E.headerLine,
        children: [(0, s.jsx)(r.Z, {
          className: d.icon
        }), (0, s.jsx)(a.Z.Info, {
          title: I.name,
          children: u.Z.Messages.GUILD_TEMPLATE_USAGES.format({
            usageCount: String(null !== (t = I.usageCount) && void 0 !== t ? t : 0)
          })
        })]
      }), T]
    })]
  })
}