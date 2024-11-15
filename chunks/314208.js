n.d(t, {
    Z: function () {
        return S;
    }
});
var a = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    i = n(99690),
    o = n(616780),
    c = n(471445),
    d = n(905405),
    u = n(937889),
    h = n(739566),
    m = n(267128),
    g = n(271383),
    f = n(306680),
    x = n(699516),
    v = n(594174),
    Z = n(709054),
    j = n(51144),
    N = n(144140),
    T = n(91159),
    C = n(217702),
    I = n(388032),
    p = n(465872);
function S(e) {
    return e.isActiveThread() ? (0, a.jsx)(b, { channel: e }) : (0, a.jsx)(w, { channel: e });
}
function b(e) {
    let { channel: t } = e,
        n = (0, r.e7)([N.Z], () => N.Z.getMostRecentMessage(t.id));
    return null == n
        ? (0, a.jsx)(k, { channel: t })
        : (0, a.jsx)(E, {
              channel: t,
              message: n
          });
}
function k(e) {
    let { channel: t } = e,
        n = (0, T.Ok)(t);
    return (0, a.jsxs)(s.Text, {
        className: p.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [I.intl.string(I.t.Jmh6n5), '\xA0 \u2022 \xA0', (0, T.Ye)(n)]
    });
}
function E(e) {
    let { channel: t, message: n } = e;
    (0, o.$)({ [t.guild_id]: [n.author.id] });
    let c = (0, r.e7)([v.default], () => {
            var e;
            return null !== (e = v.default.getUser(n.author.id)) && void 0 !== e ? e : n.author;
        }),
        { nick: g, colorString: f } = (0, h.ZP)(n),
        j = (0, r.e7)([x.Z], () => x.Z.isBlockedForMessage(n)),
        N = (0, d.p)(),
        I = l.useMemo(() => {
            let e =
                    null != n.content && '' !== n.content
                        ? (0, u.ZP)(n, {
                              formatInline: !0,
                              shouldFilterKeywords: N
                          }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: r,
                    leadingIcon: s
                } = (0, m.f)(n, e, j, p.messageContent, {
                    trailingIconClass: p.messageContentTrailingIcon,
                    leadingIconClass: p.messageContentLeadingIcon,
                    iconSize: C.WW
                });
            return (0, a.jsxs)(a.Fragment, {
                children: [s, null != l ? l : (0, a.jsx)('span', { children: t }), r]
            });
        }, [n, j, N]);
    return (0, a.jsxs)(s.Text, {
        className: p.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [
            (0, a.jsx)(i.Z, {
                className: p.avatar,
                user: c,
                size: s.AvatarSizes.SIZE_16
            }),
            (0, a.jsx)(s.NameWithRole, {
                name: g,
                color: f,
                className: p.authorName
            }),
            ':\xA0',
            I,
            '\xA0 \u2022 \xA0',
            (0, T.Ye)(Z.default.extractTimestamp(n.id))
        ]
    });
}
function w(e) {
    var t, n, l;
    let { channel: d } = e,
        u = (0, r.e7)([f.ZP], () => f.ZP.lastMessageId(d.id)),
        h = null == u ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : Z.default.extractTimestamp(u);
    (0, o.$)({ [d.guild_id]: [d.ownerId] });
    let m = (0, r.e7)([v.default], () => v.default.getUser(d.ownerId)),
        x = (0, r.e7)([g.ZP], () => g.ZP.getMember(d.guild_id, d.ownerId)),
        N = null !== (l = (0, c.KS)(d)) && void 0 !== l ? l : s.ThreadIcon;
    return (0, a.jsx)(s.Text, {
        className: p.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children:
            null == m
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', {
                              className: p.noAvatarIcon,
                              children: (0, a.jsx)(N, {
                                  width: 10,
                                  height: 10,
                                  size: 'custom',
                                  color: 'currentColor'
                              })
                          }),
                          I.intl.format(I.t['5Wk9+v'], { time: (0, T.Ye)(h) })
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(i.Z, {
                              className: p.avatar,
                              user: m,
                              size: s.AvatarSizes.SIZE_16
                          }),
                          I.intl.format(I.t.GFDmd3, {
                              authorHook(e, t) {
                                  var n, l;
                                  return (0, a.jsx)(
                                      s.NameWithRole,
                                      {
                                          className: p.startedByName,
                                          color: null !== (n = null == x ? void 0 : x.colorString) && void 0 !== n ? n : void 0,
                                          name: null !== (l = null == x ? void 0 : x.nick) && void 0 !== l ? l : j.ZP.getName(m)
                                      },
                                      t
                                  );
                              }
                          }),
                          (0, a.jsx)('span', {
                              className: p.bullet,
                              children: '\u2022'
                          }),
                          I.intl.format(I.t['5Wk9+v'], { time: (0, T.Ye)(h) })
                      ]
                  })
    });
}
