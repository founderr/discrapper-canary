n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(392711),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(904245),
    u = n(268350),
    d = n(926491),
    h = n(419922),
    p = n(314897),
    m = n(375954),
    _ = n(594174),
    f = n(626135),
    E = n(51144),
    g = n(901461),
    C = n(981631),
    I = n(689938),
    T = n(546764);
let x = '749054660769218631';
function v(e) {
    var t;
    let { channel: n } = e,
        [a, v] = s.useState('');
    s.useEffect(() => {
        (0, u.FQ)('847199849233514549', !0);
    }, []);
    let S = (0, r.e7)(
            [m.Z, p.default],
            () =>
                !!l()(m.Z.getMessages(n.id).toArray())
                    .reverse()
                    .find((e) => e.author.id !== p.default.getId() && e.state === C.yb.SENT && !(0, g.Z)(e))
        ),
        N = (0, r.e7)([_.default], () => _.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        A = null !== (t = E.ZP.useName(N)) && void 0 !== t ? t : I.Z.Messages.WAVE_DEFAULT_RECIPIENT,
        Z = (0, r.e7)([d.Z], () => d.Z.getStickerById(x)),
        M = s.useCallback(async () => {
            if (null == a || '' === a)
                try {
                    await c.Z.sendGreetMessage(n.id, x),
                        f.default.track(C.rMx.DM_EMPTY_ACTION, {
                            channel_id: n.id,
                            channel_type: n.type,
                            source: 'Wave',
                            type: 'Send wave'
                        });
                } catch (e) {
                    !e.ok && 429 === e.status && v(I.Z.Messages.RATE_LIMITED);
                }
        }, [n.id, n.type, a]),
        b = I.Z.Messages.WAVE_TO.format({ username: A }),
        R =
            null != a && '' !== a
                ? (0, i.jsx)(o.Text, {
                      className: T.error,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: a
                  })
                : null;
    return S
        ? (0, i.jsxs)('div', {
              className: T.containerCompact,
              children: [
                  (0, i.jsxs)(o.Clickable, {
                      className: null != a && '' !== a ? T.compactButtonDisabled : T.compactButton,
                      'aria-label': I.Z.Messages.SEND_WAVE,
                      onClick: M,
                      children: [
                          (0, i.jsx)(h.ZP, {
                              sticker: Z,
                              size: 24
                          }),
                          (0, i.jsx)(o.Text, {
                              className: T.text,
                              variant: 'text-md/medium',
                              children: b
                          })
                      ]
                  }),
                  R
              ]
          })
        : (0, i.jsxs)('div', {
              className: T.containerExpanded,
              children: [
                  (0, i.jsx)(h.ZP, {
                      sticker: Z,
                      size: 160
                  }),
                  (0, i.jsx)(o.Button, {
                      className: T.button,
                      onClick: M,
                      disabled: !!a,
                      children: b
                  }),
                  R
              ]
          });
}
