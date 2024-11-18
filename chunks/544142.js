n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(100527),
    d = n(906732),
    u = n(471445),
    h = n(184301),
    p = n(347475),
    m = n(271383),
    f = n(594174),
    g = n(51144),
    C = n(967128),
    x = n(981631),
    _ = n(388032),
    v = n(171162);
function I(e) {
    var t, l;
    let { userId: u, channel: C } = e,
        { analyticsLocations: x } = (0, d.ZP)(c.Z.USERNAME),
        _ = (0, a.e7)([f.default], () => f.default.getUser(u)),
        I = (0, a.e7)([m.ZP], () => (null != u ? m.ZP.getMember(C.guild_id, u) : null));
    function E(e) {
        if (null == _) return null;
        (0, o.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    user: _,
                    guildId: C.guild_id,
                    channel: C
                });
        });
    }
    let b = null !== (l = null !== (t = null == I ? void 0 : I.nick) && void 0 !== t ? t : g.ZP.getName(_)) && void 0 !== l ? l : '???',
        Z = null == I ? void 0 : I.colorString;
    return null == _
        ? (0, i.jsx)('span', {
              className: r()(v.threadCreatorName, v.unknownCreatorName),
              children: b
          })
        : (0, i.jsx)(d.Gt, {
              value: x,
              children: (0, i.jsx)(s.Popout, {
                  preload: () =>
                      (0, h.Z)(_, {
                          guildId: C.guild_id,
                          channelId: C.id
                      }),
                  renderPopout: (e) =>
                      (0, i.jsx)(p.Z, {
                          userId: _.id,
                          guildId: C.guild_id,
                          channelId: C.id,
                          roleId: null == I ? void 0 : I.colorRoleId,
                          ...e
                      }),
                  position: 'right',
                  children: (e) =>
                      (0, i.jsx)(s.Clickable, {
                          ...e,
                          tag: 'span',
                          className: v.threadCreatorName,
                          onContextMenu: E,
                          children: (0, i.jsx)(s.NameWithRole, {
                              name: b,
                              color: null != Z ? Z : void 0
                          })
                      })
              })
          });
}
function E(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, i.jsx)('div', { style: { marginTop: -8 } })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      color: 'header-secondary',
                      children: (0, i.jsx)('div', {
                          className: v.subtitle,
                          children: _.intl.format(_.t.imPXd3, {
                              usernameHook: (e, n) =>
                                  (0, i.jsx)(
                                      I,
                                      {
                                          userId: t.ownerId,
                                          channel: t
                                      },
                                      n
                                  )
                          })
                      })
                  }),
                  t.type === x.d4z.PRIVATE_THREAD
                      ? (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: _.intl.string(_.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function b(e) {
    var t;
    let { channel: n } = e,
        l = null !== (t = (0, u.KS)(n)) && void 0 !== t ? t : s.ThreadIcon;
    return (0, i.jsxs)(C.ZP, {
        channelId: n.id,
        children: [
            (0, i.jsx)('div', {
                className: v.iconWrapper,
                children: (0, i.jsx)(l, { className: v.icon })
            }),
            (0, i.jsx)(C.Ot, { children: n.name }),
            (0, i.jsx)(E, { channel: n })
        ]
    });
}
