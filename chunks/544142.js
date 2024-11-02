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
    u = n(906732),
    d = n(471445),
    h = n(184301),
    m = n(347475),
    p = n(271383),
    f = n(594174),
    g = n(51144),
    C = n(967128),
    x = n(981631),
    v = n(388032),
    _ = n(966319);
function I(e) {
    var t, l;
    let { userId: d, channel: C } = e,
        { analyticsLocations: x } = (0, u.ZP)(c.Z.USERNAME),
        v = (0, a.e7)([f.default], () => f.default.getUser(d)),
        I = (0, a.e7)([p.ZP], () => (null != d ? p.ZP.getMember(C.guild_id, d) : null));
    function E(e) {
        if (null == v) return null;
        (0, o.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('79695'), n.e('70675')]).then(n.bind(n, 654663));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    user: v,
                    guildId: C.guild_id,
                    channel: C
                });
        });
    }
    let b = null !== (l = null !== (t = null == I ? void 0 : I.nick) && void 0 !== t ? t : g.ZP.getName(v)) && void 0 !== l ? l : '???',
        S = null == I ? void 0 : I.colorString;
    return null == v
        ? (0, i.jsx)('span', {
              className: r()(_.threadCreatorName, _.unknownCreatorName),
              children: b
          })
        : (0, i.jsx)(u.Gt, {
              value: x,
              children: (0, i.jsx)(s.Popout, {
                  preload: () =>
                      (0, h.Z)(v, {
                          guildId: C.guild_id,
                          channelId: C.id
                      }),
                  renderPopout: (e) =>
                      (0, i.jsx)(m.Z, {
                          userId: v.id,
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
                          className: _.threadCreatorName,
                          onContextMenu: E,
                          children: (0, i.jsx)(s.NameWithRole, {
                              name: b,
                              color: null != S ? S : void 0
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
                          className: _.subtitle,
                          children: v.intl.format(v.t.imPXd3, {
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
                            children: v.intl.string(v.t['1awbZG'])
                        })
                      : null
              ]
          });
}
function b(e) {
    var t;
    let { channel: n } = e,
        l = null !== (t = (0, d.KS)(n)) && void 0 !== t ? t : s.ThreadIcon;
    return (0, i.jsxs)(C.ZP, {
        channelId: n.id,
        children: [
            (0, i.jsx)('div', {
                className: _.iconWrapper,
                children: (0, i.jsx)(l, { className: _.icon })
            }),
            (0, i.jsx)(C.Ot, { children: n.name }),
            (0, i.jsx)(E, { channel: n })
        ]
    });
}
