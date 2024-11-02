t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(653041);
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    r = t(594174),
    o = t(311888),
    s = t(63063),
    c = t(5192),
    d = t(431328),
    u = t(501655),
    h = t(659972),
    m = t(981631),
    x = t(765305),
    f = t(388032),
    g = t(537889);
function _(e) {
    let { icon: n } = e;
    return (0, l.jsx)('div', {
        className: g.iconContainer,
        children: (0, l.jsx)(n, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function v(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: g.listItemContainer,
        children: [
            (0, l.jsx)('div', {
                className: g.listItemIconContainer,
                children: n
            }),
            (0, l.jsx)(a.Text, {
                className: g.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function I(e) {
    var n;
    let { guild: t, channel: a, stageData: o } = e,
        s = (0, i.e7)([r.default], () => r.default.getCurrentUser(), []),
        m = {
            id: '1337',
            guild_id: t.id,
            channel_id: a.id,
            topic: o.topic,
            description: o.description,
            privacy_level: null !== (n = o.privacyLevel) && void 0 !== n ? n : x.j8.PUBLIC
        },
        f = (0, d.w8)(a.id, u.pV.SPEAKER),
        _ = (0, d.Rk)(a.id, u.pV.AUDIENCE),
        v = f.slice(0, 5);
    return (
        null ==
            v.find((e) => {
                var n;
                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == s ? void 0 : s.id);
            }) &&
            v.push({
                user: s,
                userNick: c.ZP.getName(t.id, a.id, s)
            }),
        (0, l.jsx)('div', {
            className: g.previewCardContainer,
            children: (0, l.jsx)('div', {
                className: g.previewCard,
                children: (0, l.jsx)(h.Z, {
                    guild: t,
                    stageInstance: m,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: h.k.UNSPECIFIED,
                    speakers: v,
                    speakerCount: f.length,
                    audienceCount: Math.max(1337, _),
                    channelName: a.name
                })
            })
        })
    );
}
function N(e) {
    let { guild: n, channel: t, stageData: i, headerId: r, loading: c, onNext: d, onCancel: u, onBack: h } = e;
    return null == n || null == t || null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(I, {
                      guild: n,
                      channel: t,
                      stageData: i
                  }),
                  (0, l.jsxs)(a.ModalContent, {
                      className: g.container,
                      children: [
                          (0, l.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, l.jsx)(a.Heading, {
                                      id: r,
                                      className: g.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: f.intl.string(f.t.GXpXTE)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      className: g.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: f.intl.string(f.t.JaYMvL)
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: g.__invalid_list,
                              children: [
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(_, { icon: a.CompassIcon }),
                                      text: f.intl.string(f.t.u6oOcn)
                                  }),
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(_, { icon: a.FriendsIcon }),
                                      text: f.intl.string(f.t.QC8ymZ)
                                  }),
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(_, { icon: a.PencilIcon }),
                                      text: f.intl.string(f.t.mgGOT0)
                                  }),
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(o.Z, {
                                          className: g.badgeIconBackground,
                                          foreground: g.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: f.intl.format(f.t.qLmNLC, { articleURL: s.Z.getArticleURL(m.BhN.STAGE_CHANNEL_GUIDELINES) })
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, l.jsxs)(a.ModalFooter, {
                      children: [
                          (0, l.jsx)(a.Button, {
                              color: a.Button.Colors.GREEN,
                              onClick: d,
                              submitting: c,
                              children: f.intl.string(f.t.s8mM8P)
                          }),
                          (0, l.jsx)(a.Button, {
                              color: a.Button.Colors.PRIMARY,
                              className: g.cancelButton,
                              onClick: u,
                              children: f.intl.string(f.t['ETE/oK'])
                          }),
                          (0, l.jsx)(a.Button, {
                              look: a.Button.Looks.LINK,
                              color: a.Button.Colors.LINK,
                              className: g.backButton,
                              onClick: h,
                              size: a.Button.Sizes.MIN,
                              children: f.intl.string(f.t['13/7kZ'])
                          })
                      ]
                  })
              ]
          });
}
