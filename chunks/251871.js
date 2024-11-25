e.r(n),
    e.d(n, {
        default: function () {
            return Z;
        }
    }),
    e(47120);
var i = e(200651),
    r = e(192379),
    l = e(399606),
    o = e(481060),
    a = e(100527),
    s = e(906732),
    u = e(565138),
    d = e(314897),
    c = e(271383),
    f = e(430824),
    g = e(626135),
    h = e(715903),
    I = e(295474),
    N = e(273504),
    _ = e(981631),
    C = e(372897),
    A = e(388032),
    E = e(295831);
function Z(t) {
    var n;
    let { onClose: e, transitionState: Z, guildId: M } = t,
        k = (0, l.e7)([d.default], () => d.default.getId()),
        R = (0, l.e7)([c.ZP], () => c.ZP.getMember(M, k), [M, k]),
        m = (0, l.e7)([f.Z], () => f.Z.getGuild(M), [M]),
        x = null !== (n = null == m ? void 0 : m.name) && void 0 !== n ? n : '',
        O = (0, h.no)(R),
        { analyticsLocations: p } = (0, s.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [v, L] = (0, I.ww)({
            guildId: M,
            analyticsLocations: p,
            openWithoutBackstack: !0
        }),
        P = O.has(C.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? A.intl.string(A.t.SpDXIy) : A.intl.string(A.t['QRN+Sk']);
    !L && (P = A.intl.string(A.t.FFj5Dg));
    let U = L ? A.intl.string(A.t['/PGQf3']) : A.intl.string(A.t.WikgZ2);
    return (r.useEffect(() => {
        g.default.track(_.rMx.OPEN_MODAL, {
            type: N.dc,
            guild_id: M,
            other_user_id: k
        });
    }, []),
    r.useEffect(() => {
        if (null == m) {
            e();
            return;
        }
    }, [m, e]),
    null == m)
        ? null
        : (0, i.jsxs)(o.ModalRoot, {
              transitionState: Z,
              size: o.ModalSize.SMALL,
              children: [
                  (0, i.jsx)(o.ModalHeader, {
                      separator: !1,
                      children: (0, i.jsxs)('div', {
                          className: E.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: E.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          guild: m,
                                          size: u.Z.Sizes.LARGER
                                      }),
                                      (0, i.jsx)('div', {
                                          className: E.statusContainer,
                                          children: (0, i.jsx)(o.ChatXIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: E.statusIcon
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(o.Heading, {
                                  color: 'header-primary',
                                  variant: 'heading-md/semibold',
                                  children: A.intl.format(A.t.kcYdTk, { guildName: x })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(o.ModalContent, {
                      children: (0, i.jsx)('div', {
                          className: E.descriptionContainer,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: P
                          })
                      })
                  }),
                  (0, i.jsxs)(o.ModalFooter, {
                      children: [
                          (0, i.jsx)(o.Button, {
                              onClick: () => {
                                  v(), e();
                              },
                              color: o.Button.Colors.BRAND,
                              look: o.Button.Looks.FILLED,
                              children: U
                          }),
                          (0, i.jsx)(o.Button, {
                              onClick: e,
                              color: o.Button.Colors.PRIMARY,
                              look: o.Button.Looks.LINK,
                              children: A.intl.string(A.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
