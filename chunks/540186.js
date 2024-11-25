t.d(n, {
    Z: function () {
        return I;
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
    m = t(659972),
    x = t(981631),
    h = t(765305),
    g = t(388032),
    f = t(338456);
function v(e) {
    let { icon: n } = e;
    return (0, l.jsx)('div', {
        className: f.iconContainer,
        children: (0, l.jsx)(n, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function _(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: f.listItemContainer,
        children: [
            (0, l.jsx)('div', {
                className: f.listItemIconContainer,
                children: n
            }),
            (0, l.jsx)(a.Text, {
                className: f.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function j(e) {
    var n;
    let { guild: t, channel: a, stageData: o } = e,
        s = (0, i.e7)([r.default], () => r.default.getCurrentUser(), []),
        x = {
            id: '1337',
            guild_id: t.id,
            channel_id: a.id,
            topic: o.topic,
            description: o.description,
            privacy_level: null !== (n = o.privacyLevel) && void 0 !== n ? n : h.j8.PUBLIC
        },
        g = (0, d.w8)(a.id, u.pV.SPEAKER),
        v = (0, d.Rk)(a.id, u.pV.AUDIENCE),
        _ = g.slice(0, 5);
    return (
        null ==
            _.find((e) => {
                var n;
                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == s ? void 0 : s.id);
            }) &&
            _.push({
                user: s,
                userNick: c.ZP.getName(t.id, a.id, s)
            }),
        (0, l.jsx)('div', {
            className: f.previewCardContainer,
            children: (0, l.jsx)('div', {
                className: f.previewCard,
                children: (0, l.jsx)(m.Z, {
                    guild: t,
                    stageInstance: x,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: m.k.UNSPECIFIED,
                    speakers: _,
                    speakerCount: g.length,
                    audienceCount: Math.max(1337, v),
                    channelName: a.name
                })
            })
        })
    );
}
function I(e) {
    let { guild: n, channel: t, stageData: i, headerId: r, loading: c, onNext: d, onCancel: u, onBack: m } = e;
    return null == n || null == t || null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(j, {
                      guild: n,
                      channel: t,
                      stageData: i
                  }),
                  (0, l.jsxs)(a.ModalContent, {
                      className: f.container,
                      children: [
                          (0, l.jsxs)('div', {
                              className: f.header,
                              children: [
                                  (0, l.jsx)(a.Heading, {
                                      id: r,
                                      className: f.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: g.intl.string(g.t.GXpXTE)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      className: f.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: g.intl.string(g.t.JaYMvL)
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: f.__invalid_list,
                              children: [
                                  (0, l.jsx)(_, {
                                      icon: (0, l.jsx)(v, { icon: a.CompassIcon }),
                                      text: g.intl.string(g.t.u6oOcn)
                                  }),
                                  (0, l.jsx)(_, {
                                      icon: (0, l.jsx)(v, { icon: a.FriendsIcon }),
                                      text: g.intl.string(g.t.QC8ymZ)
                                  }),
                                  (0, l.jsx)(_, {
                                      icon: (0, l.jsx)(v, { icon: a.PencilIcon }),
                                      text: g.intl.string(g.t.mgGOT0)
                                  }),
                                  (0, l.jsx)(_, {
                                      icon: (0, l.jsx)(o.Z, {
                                          className: f.badgeIconBackground,
                                          foreground: f.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: g.intl.format(g.t.qLmNLC, { articleURL: s.Z.getArticleURL(x.BhN.STAGE_CHANNEL_GUIDELINES) })
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
                              children: g.intl.string(g.t.s8mM8P)
                          }),
                          (0, l.jsx)(a.Button, {
                              color: a.Button.Colors.PRIMARY,
                              className: f.cancelButton,
                              onClick: u,
                              children: g.intl.string(g.t['ETE/oK'])
                          }),
                          (0, l.jsx)(a.Button, {
                              look: a.Button.Looks.LINK,
                              color: a.Button.Colors.LINK,
                              className: f.backButton,
                              onClick: m,
                              size: a.Button.Sizes.MIN,
                              children: g.intl.string(g.t['13/7kZ'])
                          })
                      ]
                  })
              ]
          });
}
