t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(653041);
var s = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    i = t(594174),
    r = t(311888),
    o = t(63063),
    c = t(5192),
    d = t(431328),
    u = t(501655),
    _ = t(659972),
    E = t(981631),
    x = t(765305),
    m = t(689938),
    h = t(537889);
function I(e) {
    let { icon: n } = e;
    return (0, s.jsx)('div', {
        className: h.iconContainer,
        children: (0, s.jsx)(n, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function T(e) {
    let { icon: n, text: t } = e;
    return (0, s.jsxs)('div', {
        className: h.listItemContainer,
        children: [
            (0, s.jsx)('div', {
                className: h.listItemIconContainer,
                children: n
            }),
            (0, s.jsx)(l.Text, {
                className: h.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function N(e) {
    var n;
    let { guild: t, channel: l, stageData: r } = e,
        o = (0, a.e7)([i.default], () => i.default.getCurrentUser(), []),
        E = {
            id: '1337',
            guild_id: t.id,
            channel_id: l.id,
            topic: r.topic,
            description: r.description,
            privacy_level: null !== (n = r.privacyLevel) && void 0 !== n ? n : x.j8.PUBLIC
        },
        m = (0, d.w8)(l.id, u.pV.SPEAKER),
        I = (0, d.Rk)(l.id, u.pV.AUDIENCE),
        T = m.slice(0, 5);
    return (
        null ==
            T.find((e) => {
                var n;
                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == o ? void 0 : o.id);
            }) &&
            T.push({
                user: o,
                userNick: c.ZP.getName(t.id, l.id, o)
            }),
        (0, s.jsx)('div', {
            className: h.previewCardContainer,
            children: (0, s.jsx)('div', {
                className: h.previewCard,
                children: (0, s.jsx)(_.Z, {
                    guild: t,
                    stageInstance: E,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: _.k.UNSPECIFIED,
                    speakers: T,
                    speakerCount: m.length,
                    audienceCount: Math.max(1337, I),
                    channelName: l.name
                })
            })
        })
    );
}
function C(e) {
    let { guild: n, channel: t, stageData: a, headerId: i, loading: c, onNext: d, onCancel: u, onBack: _ } = e;
    return null == n || null == t || null == a
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(N, {
                      guild: n,
                      channel: t,
                      stageData: a
                  }),
                  (0, s.jsxs)(l.ModalContent, {
                      className: h.container,
                      children: [
                          (0, s.jsxs)('div', {
                              className: h.header,
                              children: [
                                  (0, s.jsx)(l.Heading, {
                                      id: i,
                                      className: h.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                                  }),
                                  (0, s.jsx)(l.Text, {
                                      className: h.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                                  })
                              ]
                          }),
                          (0, s.jsxs)('div', {
                              className: h.__invalid_list,
                              children: [
                                  (0, s.jsx)(T, {
                                      icon: (0, s.jsx)(I, { icon: l.CompassIcon }),
                                      text: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                                  }),
                                  (0, s.jsx)(T, {
                                      icon: (0, s.jsx)(I, { icon: l.FriendsIcon }),
                                      text: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                                  }),
                                  (0, s.jsx)(T, {
                                      icon: (0, s.jsx)(I, { icon: l.PencilIcon }),
                                      text: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                                  }),
                                  (0, s.jsx)(T, {
                                      icon: (0, s.jsx)(r.Z, {
                                          className: h.badgeIconBackground,
                                          foreground: h.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({ articleURL: o.Z.getArticleURL(E.BhN.STAGE_CHANNEL_GUIDELINES) })
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, s.jsxs)(l.ModalFooter, {
                      children: [
                          (0, s.jsx)(l.Button, {
                              color: l.Button.Colors.GREEN,
                              onClick: d,
                              submitting: c,
                              children: m.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                          }),
                          (0, s.jsx)(l.Button, {
                              color: l.Button.Colors.PRIMARY,
                              className: h.cancelButton,
                              onClick: u,
                              children: m.Z.Messages.CANCEL
                          }),
                          (0, s.jsx)(l.Button, {
                              look: l.Button.Looks.LINK,
                              color: l.Button.Colors.LINK,
                              className: h.backButton,
                              onClick: _,
                              size: l.Button.Sizes.MIN,
                              children: m.Z.Messages.BACK
                          })
                      ]
                  })
              ]
          });
}
