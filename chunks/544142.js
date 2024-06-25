n.d(t, {
  Z: function() {
    return N
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(239091),
  c = n(100527),
  u = n(906732),
  d = n(995123),
  h = n(484459),
  m = n(103575),
  E = n(271383),
  p = n(594174),
  g = n(51144),
  f = n(967128),
  C = n(981631),
  _ = n(689938),
  I = n(971055);

function x(e) {
  var t, i;
  let {
    userId: d,
    channel: f
  } = e, {
    analyticsLocations: C
  } = (0, u.ZP)(c.Z.USERNAME), _ = (0, a.e7)([p.default], () => p.default.getUser(d)), x = (0, a.e7)([E.ZP], () => null != d ? E.ZP.getMember(f.guild_id, d) : null);

  function T(e) {
    if (null == _) return null;
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("70675")]).then(n.bind(n, 654663));
      return t => (0, l.jsx)(e, {
        ...t,
        user: _,
        guildId: f.guild_id,
        channel: f
      })
    })
  }
  let N = null !== (i = null !== (t = null == x ? void 0 : x.nick) && void 0 !== t ? t : g.ZP.getName(_)) && void 0 !== i ? i : "???",
    Z = null == x ? void 0 : x.colorString;
  return null == _ ? (0, l.jsx)("span", {
    className: s()(I.threadCreatorName, I.unknownCreatorName),
    children: N
  }) : (0, l.jsx)(u.Gt, {
    value: C,
    children: (0, l.jsx)(r.Popout, {
      preload: () => (0, h.W)(_, {
        guildId: f.guild_id,
        channelId: f.id
      }),
      renderPopout: e => (0, l.jsx)(m.Z, {
        location: "ThreadEmptyMessage",
        userId: _.id,
        guildId: f.guild_id,
        channelId: f.id,
        roleId: null == x ? void 0 : x.colorRoleId,
        ...e
      }),
      position: "right",
      children: e => (0, l.jsx)(r.Clickable, {
        ...e,
        tag: "span",
        className: I.threadCreatorName,
        onContextMenu: T,
        children: (0, l.jsx)(r.NameWithRole, {
          name: N,
          color: null != Z ? Z : void 0
        })
      })
    })
  })
}

function T(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? (0, l.jsx)("div", {
    style: {
      marginTop: -8
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: (0, l.jsx)("div", {
        className: I.subtitle,
        children: _.Z.Messages.THREAD_STARTED_BY.format({
          usernameHook: (e, n) => (0, l.jsx)(x, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === C.d4z.PRIVATE_THREAD ? (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: _.Z.Messages.EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS
    }) : null]
  })
}

function N(e) {
  var t;
  let {
    channel: n
  } = e, i = null !== (t = (0, d.Z)(n)) && void 0 !== t ? t : r.ThreadIcon;
  return (0, l.jsxs)(f.ZP, {
    channelId: n.id,
    children: [(0, l.jsx)("div", {
      className: I.iconWrapper,
      children: (0, l.jsx)(i, {
        className: I.icon
      })
    }), (0, l.jsx)(f.Ot, {
      children: n.name
    }), (0, l.jsx)(T, {
      channel: n
    })]
  })
}